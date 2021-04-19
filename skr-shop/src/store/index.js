import Vue from 'vue'
import Vuex from 'vuex'

import details from "./modules/details";
import shopCart from "./modules/shopCart";
import getImgs from "./modules/getImgs";


Vue.use(Vuex)
// 请按照规范 使用action触发mutations
let store= new Vuex.Store({
  state: {
    // NavBarTop 的显示隐藏
    NavbarShow:true,
    isShow: true,
    loadingStatus: false, //loading全局开关。
    SearchShow:false,  //Navbottom 的Search 的显示隐藏
    isShowSer:false, //侧边栏开关
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
    changeSearchShow(state, val){
      state.SearchShow = val
    },
    showSerBar(state,val){
      state.isShowSer = val;
    }
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
    // 更改SearchShow
    commitSearchShow(store,val){
      store.commit('changeSearchShow',val)
    },
  },
  modules: {
    details,
    shopCart,
    getImgs
  }
})
export default store