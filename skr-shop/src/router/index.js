import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 导航冗余报错解决
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:"/",
    redirect:"home"
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import("views/home/Home.vue"),
    children: [
      {
        path: '/service',
        component: () => import("components/common/common/adside/Service")
      },
      {
        path: '/history',
        component: () => import("components/common/common/adside/ShoppingHistory")
      },
    ]
  },
  {

    path:'/details',
    name:'Details',
    component:()=>import("views/details/Details")
  },
  {

    path:'/login',
    name:'Login',
    component:()=>import("views/login/Login.vue")
  },
  {
    path:'/signup',
    name:'Signup',
    component:()=>import("views/signup/Signup.vue")
  },

]



const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
