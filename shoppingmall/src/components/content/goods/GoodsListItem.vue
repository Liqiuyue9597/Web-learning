<template>
  <div class="goods-List">
    <img :src="goodsItem.show.img" alt />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.goods-List{
  width: 45%;
  margin: 3px 0;
}
.goods-List img{
  width: 100%;
  border-radius: 6px;
}
.goods-List .goods-info p{
  font-size: 14px;
  /* 让文字一行内显示并且超出的部分用省略号表示 */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-List .goods-info{
  text-align: center;
}
.goods-List .goods-info span{
  font-size: 14px;
  margin: 2px 4px;
}
.goods-List .goods-info .price {
  color: var(--color-tint);
}
.goods-List .goods-info .collect::before{
  content: "";
  /* 不写这个图标不会显示 */
  display: inline-block;
  background: url('~assets/img/common/collect.svg') center no-repeat;
  width: 15px;
  height: 15px;
  background-size: 15px;
  vertical-align: top;
}
</style>