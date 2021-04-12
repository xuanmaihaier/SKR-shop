import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
// antd
import { Icon,Card,Tabs,Button } from "ant-design-vue"
// antd use
Vue.use(Icon)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(Button)
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// import style (>= Swiper 6.x)
import 'swiper/css/swiper.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
