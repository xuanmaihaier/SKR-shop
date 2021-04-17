import Vue from 'vue'
import Vuex from 'vuex'

import details from "./modules/details";
import shopCart from "./modules/shopCart";

Vue.use(Vuex)
// 请按照规范 使用action触发mutations
let store= new Vuex.Store({
  state: {
    // NavBarTop 的显示隐藏
    NavbarShow:true,
    isShow: false,
<<<<<<< HEAD
    loadingStatus: false, //loading全局开关
=======
    loadingStatus: false, //loading全局开关。
    SearchShow:false  //Navbottom 的Search 的显示隐藏
>>>>>>> 4a3393736b33a4706dd0c904a1ad8d0f26c27b91
  },
  mutations: {
    changeShow(state, value) {
      state.isShow = value
    },
    changeLoading(state, val) {
      state.loadingStatus = val
    },
    changeNavbarShow(state, val){
      state.NavbarShow = val
    },
<<<<<<< HEAD
=======
    changeSearchShow(state, val){
      state.SearchShow = val
    }
>>>>>>> 4a3393736b33a4706dd0c904a1ad8d0f26c27b91
  },
  actions: {
    //更改Loadingde 
    commitLoading({commit},val){
      commit('changeLoading',val)
    },
    // 更改Nav-eng的显示隐藏
    commitShow(store,val){
      store.commit('changeShow',val)
    },
    //更改NavbarShow
    commitNavbarShow(store,val){
      store.commit('changeNavbarShow',val)
    },
<<<<<<< HEAD
=======
    // 更改SearchShow
    commitSearchShow(store,val){
      store.commit('changeSearchShow',val)
    },
>>>>>>> 4a3393736b33a4706dd0c904a1ad8d0f26c27b91
  },
  modules: {
    details,
    shopCart,
  }
})
export default store
