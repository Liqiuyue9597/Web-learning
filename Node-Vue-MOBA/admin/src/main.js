import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

// 定义一个全局的代码块
Vue.mixin({
  computed: {
    uploadUrl() {
      return http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

// 将共用样式挂载在全局
import './style.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
