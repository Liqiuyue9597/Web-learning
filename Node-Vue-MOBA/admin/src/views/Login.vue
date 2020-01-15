<template>
  <div class="login-container">
    <el-card header="请登录" class="login-header">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
      // 将token存储在浏览器中，local表示关闭页面仍然存在，sessionStorage表示关闭后就没有有
      localStorage.token = res.data.token
      
      this.$message.success({
        message: '登录成功',
      })

      setTimeout(() => {
         this.$router.push('/')
      }, 1500)
    }
  }
}
</script>

<style>
.login-header {
  width: 30rem;
  margin: 5rem auto;
  font-size: 20px;
  font-weight: bold;
}
</style>