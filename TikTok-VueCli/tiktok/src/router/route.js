import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../views/Home.vue'


const router = new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router