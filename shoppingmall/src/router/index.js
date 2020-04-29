import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/shopcart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopping',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router