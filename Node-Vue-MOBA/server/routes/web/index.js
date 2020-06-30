module.exports = (app) => {
  const router = require("express").Router()
  const Category = require("../../models/Category")
  const Article = require("../../models/Article")

  router.get("/news/list", async (req, res) => {
    // 聚合查询aggregate
    const parent = await Category.findOne({
      name: "新闻分类",
    })
    const cats = await Category.aggregate([
      // 条件查询:parent == parent._id ?
      { $match: { parent: parent._id } },
      {
        // 关联
        $lookup: {
          // from:关联哪一个表(表的名字和名字一一对应Article<->articles)
          from: "articles",
          // 本表的键名_id，对应其他表的键名categories
          localField: "_id",
          foreignField: "categories",
          as: "newsList",
        },
      },
      {
        // 添加字段
        $addFields: {
          // $slice:[1,2]-->1表示你要剪切的数组，2表示你要剪切几条
          newsList: { $slice: ["$newsList", 5] },
        },
      },
    ])

    // 加上热门
    const subCats = cats.map((v) => v._id)
    cats.unshift({
      name: "热门",
      // where条件
      newsList: await Article.find()
        .where({
          categories: { $in: subCats },
        })
        .populate("categories")
        .limit(5)
        .lean(),
    })
    cats.map((cat) => {
      cats.newsList.map((news) => {
        news.categoriesName =
          cat.name === "热门" ? news.categories[0].name : cat.name
        return news
      })
    })
    res.send(cats)
  })
}
