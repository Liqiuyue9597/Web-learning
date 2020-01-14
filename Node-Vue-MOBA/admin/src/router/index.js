import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由的懒加载
const Main = () => import('@/views/Main.vue')
const CategoryEdit = () => import('@/views/CategoryEdit.vue')
const CategoryList = () => import('@/views/CategoryList.vue')
const ItemEdit = () => import('@/views/ItemEdit.vue')
const ItemList = () => import('@/views/ItemList.vue')
const HeroEdit = () => import('@/views/HeroEdit.vue')
const HeroList = () => import('@/views/HeroList.vue')
const ArticleEdit = () => import('@/views/ArticleEdit.vue')
const ArticleList = () => import('@/views/ArticleList.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/categories/list',
        component: CategoryList
      },

      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/items/list',
        component: ItemList
      },

      {
        path: '/heroes/create',
        component: HeroEdit
      },
      {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        props: true
      },
      {
        path: '/heroes/list',
        component: HeroList
      },

      {
        path: '/articles/create',
        component: ArticleEdit
      },
      {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        path: '/articles/list',
        component: ArticleList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
