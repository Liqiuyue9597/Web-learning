import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3130/admin/api'
})

http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message.error({
      message: err.response.data.message
    })
  }

  return Promise.reject(err)
})

export default http