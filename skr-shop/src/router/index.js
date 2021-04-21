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
    meta: {
      title: 's.kr'
    },
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
    component: () => import("views/shopcart/ShopCart"),
    meta: {
      title: '购物车-skr'
    }
  },
  //结算
  {
    path: '/payTotal',
    name: 'payTotal',
    component: () => import("views/total/PayTotal"),
    meta: {
      title: '结算-skr'
    }
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import("views/login/Login.vue"),
    meta: {
      title: '登录-skr'
    }
  },
  // 注册
  {

    path: '/signup',
    name: 'Signup',
    component: () => import("views/signup/Signup.vue"),
    meta: {
      title: '注册-skr'
    }
  },
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
    component: () => import("views/exclusive/Exclusive.vue"),
    meta: {
      title: 'EXCLUSIVE-skr'
    }

  },
  //WDNA
  {
    path: '/wdna',
    name: 'Wdna',
    component: () => import("views/wdna/Wdna.vue"),
    meta: {
      title: 'WDNA-skr'
    }
  },
  // Event
  {
    path: '/event',
    name: "Event",
    component: () => import('views/typeOneEvent/Event.vue'),
    meta: {
      title: 'EVENT-skr'
    }
  },
  // Best
  {
    path: '/best',
    name: "Best",
    component: () => import("../views/best/Best.vue"),
    meta: {
      title: 'BEST-skr'
    }
  },
  // 个人中心
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import("views/mypage/MyPage.vue"),
    meta: {
      title: '个人中心-skr'
    }
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
  {
    path: '/order', // 订单结算
    name: "Order",
    component: () => import("views/order/Order.vue"),
    meta: {
      title: '订单结算-skr'
    }
  },
  // 底部路由跳转 
  {
    path: '/about', // 关于我们
    component: () => import("components/common/Following/About.vue"),
    meta: {
      title: '关于我们-skr'
    }
  },
  {
    path: '/advisory', // 咨询服务
    component: () => import("components/common/Following/Advisory.vue"),
    meta: {
      title: '咨询服务-skr'
    }
  },
  {
    path: '/partner', // 合作伙伴查询
    component: () => import("components/common/Following/Partner.vue"),
    meta: {
      title: '合作伙伴查询-skr'
    }
  },
  {
    path: '/terms', // 服务条款
    component: () => import("components/common/Following/Terms.vue"),
    meta: {
      title: '服务条款-skr'
    }
  },
  {
    path: '/privacy', // 隐私政策
    component: () => import("components/common/Following/Privacy.vue"),
    meta: {
      title: '隐私政策-skr'
    }
  },
  {
    path: '/serviceCenter', // 服务中心
    component: () => import("components/common/Following/ServiceCenter.vue"),
    meta: {
      title: '服务中心-skr'
    }
  },
  {
    path: '/offers', // 招聘信息
    component: () => import("components/common/Following/Offers.vue"),
    meta: {
      title: '招聘信息-skr'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) { // 解决vue页面跳转只有页面不是在顶部的问题

    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    if (savedPosition) {
      return {
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
  // 设置页面标题
  if (JSON.stringify(to.params) !== "{}") {
    if (to.path.indexOf('detail') != -1) {
      document.title = '商品详情-skr'
    } else {
      document.title = to.params.id + '-skr'
    }
  } else {
    if (to.path.indexOf('search') != -1) {
      document.title = '搜索-skr'
    } else {
      document.title = to.matched[0].meta.title
    }
  }
  
  if (to.path == '/login' && from.path == '/signup') { // 判断是否由注册页跳转到登录页
    sessionStorage.setItem('fristLogin', 1)
  } else {
    sessionStorage.removeItem('fristLogin')
  }
  // ...
  const auth = ['/shopcart', '/mypage']
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