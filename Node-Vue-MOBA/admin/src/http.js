import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:3130/admin/api'
})

http.interceptors.request.use(config => {
  // 如果token存在才进入赋值，不然token不存在赋值给http的状态码一个undefined
  if(localStorage.token){
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message.error({
      message: err.response.data.message
    })
    if(err.response.status === 401) {
      router.push('/login') 
    }
  }
  return Promise.reject(err)
})

export default http