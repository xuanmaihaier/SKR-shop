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
    path:'/mypage',
    name:'MyPage',
    component:()=>import("views/mypage/MyPage.vue")
  },
  {
    // 一级分类界面 
    path:'/primary/:id',
    name:'Primary',
    component:()=>import("views/primary/Primary.vue")
  },
  {
    // 一级分类界面
    path: '/primary/:id',
    name: 'Primary',
    component: () => import("views/primary/Primary.vue")
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import("views/mypage/MyPage.vue")
  },
  // 底部路由跳转 
  {
    path: '/about', // 关于我们
    component: () => import("components/common/Following/About.vue")
  },
  {
    path: '/advisory', // 咨询服务
    component: () => import("components/common/Following/Advisory.vue")
  },
  {
    path: '/partner', // 合作伙伴查询
    component: () => import("components/common/Following/Partner.vue")
  },
  {
    path: '/privacy', // 隐私政策
    component: () => import("components/common/Following/Privacy.vue")
  },
  {
    path: '/serviceCenter', // 服务中心
    component: () => import("components/common/Following/ServiceCenter.vue")
  },
  {
    path: '/terms', // 服务条款
    component: () => import("components/common/Following/Terms.vue")
  },
  {
    path: '/offers', // 招聘信息
    component: () => import("components/common/Following/Offers.vue")
  },
  {
    path: '/global', // 全部
    component: () => import("components/common/Following/Global.vue")
  },
]



const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
