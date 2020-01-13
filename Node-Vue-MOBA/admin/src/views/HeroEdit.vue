<template>
  <div class="about">
    <h1>{{id? '编辑':'新建'}}英雄</h1>
    <el-form label-width="50px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="file-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="file" />
          <i v-else class="el-icon-plus file-uploader-icon"></i>
        </el-upload>
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
        avatar: ''
      }
    };
  },
  methods: {
    async save() {
      // eslint-disable-next-line no-unused-vars
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heroes", this.model);
      }
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = res.data;
    },
    afterUpload(res) {
      this.model.avatar = res.url
      // this.$set(this.model, 'icon', res.url)
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
.file-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .file-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .file-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .file {
    width: 78px;
    height: 78px;
    display: block;
  }
</style>