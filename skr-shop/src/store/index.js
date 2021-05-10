import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import details from "./modules/details";
import shopCart from "./modules/shopCart";
import addAddress from "./modules/addAddress";
import getImgs from "./modules/getImgs";

// 请按照规范 使用action触发mutations
let store= new Vuex.Store({
  state: {
    // NavBarTop 的显示隐藏
    NavbarShow:true,
    isShow: false,
    loadingStatus: false, //loading全局开关。
    SearchShow:false,  //Navbottom 的Search 的显示隐藏
    isShowSer:false, //侧边栏开关
    SearchData: [], // 搜索结果
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
    },
    changeSearchData(state,val){
      state.SearchData = val;
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
    // 更改搜索到数据SearchData
    commitSearchData(store,val){
      store.commit('changeSearchData',val)
    },
  },
  modules: {
    details,
    shopCart,
    addAddress,
    getImgs,
  }
})
export default store
