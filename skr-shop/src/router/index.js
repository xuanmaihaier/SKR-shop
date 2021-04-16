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
    ]
  },
  // 登录
  {
    path: '/details/:id',
    name: 'Details',
    props: true,
    component: () => import("views/details/Details")
  },
  // 详情
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import("views/shopcart/ShopCart")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("views/login/Login.vue")
  },
  // 注册
  {
    path: '/signup',
    name: 'Signup',
    component: () => import("views/signup/Signup.vue")
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
  // 个人中心
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import("views/mypage/MyPage.vue")
  },
  {
    // 一级分类界面
    path: '/primary/:id',
    name: 'Primary',
    component: () => import("views/primary/Primary.vue")
  },
  // 搜索
  {
    path: '/search/:word',
    name: 'Search',
    component: () => import("views/search/Search.vue"),
    // redirect:'/product',
    children: [
      {
        path: '/product',
        name: 'Product',
        component: () => import("views/search/childComps/Product.vue")
      },
      {
        path: '/activity',
        name: 'Activity',
        component: () => import("views/search/childComps/Activity.vue")
      },
      {
        path: '/show',
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
  {
    path: '/global', // 全部
    component: () => import("components/common/Following/Global.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  store.dispatch('commitLoading', true)//loading出现
  NProgress.start();//进度条开始加载
  setTimeout(() => {
    // ...
    const auth = ['/shopcar', '/mypage']
    const tokenStr = window.sessionStorage.getItem('token')
    // console.log(tokenStr);
    if (!tokenStr) {
      store.dispatch('commitNavbarShow', true)
      if (auth.includes(to.fullPath)) {
        return next('/login')
      }
      return next()
    } else {
      store.dispatch('commitNavbarShow', false)
      console.log(store);
      next()
    }
  }, 1000);
})
router.afterEach(() => {
  store.dispatch('commitLoading', false)//loading结束
  setTimeout(() => {
    NProgress.done();//进度条加载完毕
  }, 100);
})
export default router