import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"home"
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import("views/home/Home.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
