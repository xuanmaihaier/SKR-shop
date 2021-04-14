import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 请按照规范 使用action触发mutations
export default new Vuex.Store({
  state: {
    // NavBarTop 的显示隐藏
    NavbarShow:true,
    isShow: false,
    loadingStatus: false //loading全局开关

  },
  mutations: {
    changeShow(state, value) {
      state.isShow = value
    },
    changeLoading(state, val) {
      state.loadingStatus = val
    }
  },
  actions: {
    commitLoading({commit},val){
      commit('changeLoading',val)
    }
  },
  modules: {
  }
})
