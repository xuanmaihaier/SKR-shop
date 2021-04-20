import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
// NProgress 加载进度条
import NProgress from '../plugins/nprogress/index'

Vue.use(VueRouter)
// 导航冗余报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '*',
    component: () => import('@/components/common/404/Error.vue')
  },
  {
    path: "/",
    redirect: "home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("views/home/Home.vue"),

    children: [{
      path: '/service',
      component: () => import("components/common/adside/Service")
    },]
  },
  // 详情
  {
    path: '/details/:id',
    name: 'Details',
    props: true,
    component: () => import("views/details/Details")
  },
  // 购物车
  {
    path: '/shopcart',
    name: 'ShopCart',
    props: true,
    component: () => import("views/shopcart/ShopCart")
  },
  //结算
  {
    path: '/payTotal',
    name:'payTotal',
    component:()=>import("views/total/PayTotal")
  },
  // 登录
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
  // 注册
  {
    // 一级分类界面
    path: '/primary/:id',
    name: 'Primary',
    component: () => import("views/primary/Primary.vue")
  },
  // 独家的
  {
    path: '/exclusive',
    name: 'Exclusive',
    component: () => import("views/exclusive/Exclusive.vue")
  },
  //WDNA
  {
    path: '/wdna',
    name: 'Wdna',
    component: () => import("views/wdna/Wdna.vue")
  },
  // Event
  {
    path: '/event',
    name: "Event",
    component: () => import('views/typeOneEvent/Event.vue')
  },
  // Best
  {
    path: '/best',
    name: "Best",
    component: () => import("../views/best/Best.vue")
  },
  // 个人中心
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import("views/mypage/MyPage.vue")
  },
  // 二级数据
  {
    path: "/secondary/:id",
    name: "SeconDary",
    component: () => import("../views/secondary/SeconDary.vue")
  },
  // 搜索
  {
    path: '/search/:word',
    name: 'Search',
    component: () => import("views/search/Search.vue"),
    children: [
      {
        path: '/search/product',
        name: 'Product',
        component: () => import("views/search/childComps/Product.vue")
      },
      {
        path: '/search/activity',
        name: 'Activity',
        component: () => import("views/search/childComps/Activity.vue")
      },
      {
        path: '/search/show',
        name: 'Show',
        component: () => import("views/search/childComps/Show.vue")
      },
    ]
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
    path: '/terms', // 服务条款
    component: () => import("components/common/Following/Terms.vue")
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
    path: '/offers', // 招聘信息
    component: () => import("components/common/Following/Offers.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) { // 解决vue页面跳转只有页面不是在顶部的问题
  
    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    if (savedPosition) {
      return  {
        // behavior: 'smooth', //平滑滚动效果
        selector: savedPosition
      }
    } else {
      return { x: 0, y: 0 }
    }
    // console.log(to.hash,from.path,savedPosition);

  }
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start(); //进度条开始加载
  if (to.path == '/login' && from.path == '/signup') { // 判断是否由注册页跳转到登录页
    sessionStorage.setItem('fristLogin', 1)
  } else {
    sessionStorage.removeItem('fristLogin')
  }
  // ...
  const auth = [ '/shopcart','/mypage']
  const tokenStr = window.sessionStorage.getItem('token')
  // console.log(tokenStr);
  if (!tokenStr) {
    // console.log(123);
    if (auth.includes(to.fullPath)) {
      return next('/login')
    }
    return next()
  } else {
    store.dispatch('commitNavbarShow', false)

    next()
  }
})
router.afterEach((to, from) => {
  setTimeout(() => {
    NProgress.done(); //进度条加载完毕
  }, 100);
})

export default router