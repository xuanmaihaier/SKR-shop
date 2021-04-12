import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
// antd
import './plugins/antd/index.js'
// swiper
import './plugins/swiper/index'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
