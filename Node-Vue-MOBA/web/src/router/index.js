import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../views/Main.vue"
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
