import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

// 将共用样式挂载在全局
import './style.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
