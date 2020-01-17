import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由的懒加载
const Login = () => import('@/views/Login.vue')
const Main = () => import('@/views/Main.vue')
const CategoryEdit = () => import('@/views/CategoryEdit.vue')
const CategoryList = () => import('@/views/CategoryList.vue')
const ItemEdit = () => import('@/views/ItemEdit.vue')
const ItemList = () => import('@/views/ItemList.vue')
const HeroEdit = () => import('@/views/HeroEdit.vue')
const HeroList = () => import('@/views/HeroList.vue')
const ArticleEdit = () => import('@/views/ArticleEdit.vue')
const ArticleList = () => import('@/views/ArticleList.vue')
const AdEdit = () => import('@/views/AdEdit.vue')
const AdList = () => import('@/views/AdList.vue')
const AdminUserEdit = () => import('@/views/AdminUserEdit.vue')
const AdminUserList = () => import('@/views/AdminUserList.vue')

Vue.use(VueRouter)

const routes = [
  // 登录界面
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  
  // 主界面
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
      },

      {
        path: '/ads/create',
        component: AdEdit
      },
      {
        path: '/ads/edit/:id',
        component: AdEdit,
        props: true
      },
      {
        path: '/ads/list',
        component: AdList
      },

      {
        path: '/admin_users/create',
        component: AdminUserEdit
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
        props: true
      },
      {
        path: '/admin_users/list',
        component: AdminUserList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
