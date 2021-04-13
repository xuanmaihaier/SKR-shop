import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
  },
  mutations: {
    changeShow(state,value){
        state.isShow= value
    }
  },
  actions: {
  },
  modules: {
  }
})
