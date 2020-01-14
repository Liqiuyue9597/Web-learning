<template>
  <div class="about">
    <h1>{{id? '编辑':'新建'}}广告</h1>
    <el-form label-width="50px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="广告" label-width="50px">
        <el-button type="info" round size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="12" v-for="(item, i) in model.items" :key="i">
            <el-form-item label="链接">
              <el-input v-model="item.link"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top:2rem">
              <el-upload
                class="file-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="res => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="file" />
                <i v-else class="el-icon-plus file-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-button
              style="margin-bottom:1rem"
              size="small"
              type="danger"
              @click="model.items.splice(i,1)"
            >删除</el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    }
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/ads/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/ads', this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      // this.model = res.data
      this.model = Object.assign({}, this.model, res.data)
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>
