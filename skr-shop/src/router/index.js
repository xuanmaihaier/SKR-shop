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
    path: "/",
    redirect: "home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("views/home/Home.vue"),
    children: [
      {
        path: '/service',
        component: () => import("components/common/adside/Service")
      },
      {
        path: '/history',
        component: () => import("components/common/adside/ShoppingHistory")
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("views/login/Login.vue")
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import("views/signup/Signup.vue")
  },
  {

    // 一级分类界面
    path: '/:id',
    name: 'Primary',
    component: () => import("views/primary/Primary.vue")
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import("views/mypage/MyPage.vue")
  },
  {
    path: '/exclusive',
    name: 'Exclusive',
    component: () => import("views/exclusive/Exclusive.vue")

  }
]



const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
