
import {
  ADD_SHOP_TO_SHOP_CART,
  ADD_SHOP_NUM,
  ADD_SESSIONSTORAGESHOPCART,
} from "../mutations-type";

import Vue from "vue";

import { addToShopCart } from "../../network/addToShopCart";
import { reqShopCart } from "../../network/reqShopCart";
import { deleteSC } from "../../network/deleteShop";


export default {
  state: () => ({
    shopCart: [], //当前购物车中所有的s商品数组
    sessionStorageShopCart: [], // 需要存储到sessionStorage里面的简写
    repeatSqlShopId: {}, // 收集数据库的购物车中重复的商品(数量不一样,其它都一样)的id,以便删除的时候一起删除
  }),
  mutations: {
    [ADD_SHOP_TO_SHOP_CART](state, shopInfo) {
      let a = JSON.parse(JSON.stringify(shopInfo))
      Vue.set(a,'num',a.num)
      Vue.set(a,'params',a.params)
      Vue.set(a,'special_price',a.special_price)
      state.shopCart.push(a)
    },
    [ADD_SHOP_NUM](state, { index, num }) {
      state.shopCart[index].num = parseInt(state.shopCart[index].num) + parseInt(num)
    },
    [ADD_SESSIONSTORAGESHOPCART](state, options) {
      state.sessionStorageShopCart = options
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    },
    change_shop_num(state,{isAddNum,shop}){

      // 判断是数量+1还是-1

      let num = isAddNum ? 1 : -1
      shop.num += num
      const a = {
        sku_id: shop.id,
        num: shop.num,
        params: shop.params
      }
      // 修改sessionStorage中商品的信息,并重新存储
      state.sessionStorageShopCart.splice(state.sessionStorageShopCart.indexOf(a),1,a)
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    },
    delete_shop(state,shop){
      // 删除vuex中的商品信息
      state.shopCart.splice(state.shopCart.indexOf(shop),1)
      const a = {
        sku_id: shop.id,
        num: shop.num,
        params: shop.params
      }
      // 删除存储在vuex中的sessionStorage的商品信息,并重新存储到sessionStorage
      state.sessionStorageShopCart.splice(state.sessionStorageShopCart.indexOf(a),1)
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    },
    clear_shop_cart(state){
      state.shopCart = []
      state.sessionStorageShopCart = []
      window.sessionStorage.removeItem('shopCart')
    },
    clearCollect(state){
      state.repeatSqlShopId = {}
    },
    collect(state,item){
      // 收集数据库的购物车中相同商品的id值,为合并商品做准备

      if (state.repeatSqlShopId[item.sku_id]) {
        state.repeatSqlShopId[item.sku_id].forEach(item1=>{
          if (item1 != item.id) {
            state.repeatSqlShopId[item.sku_id][state.repeatSqlShopId[item.sku_id].length] = item.id
          }
        })
      }else{
        state.repeatSqlShopId[item.sku_id] = [item.id]
      }
    }
  },
  actions: {
    // 将购物车的内容添加至本地
    addToSession({commit,state}){
      //将购物车内容存储到sessionStorage里面
      const sessionStorageShopCart = state.shopCart.map(shop=>{
        return {
          customer_id: window.sessionStorage.userId,
          sku_id: shop.id,
          num: shop.num,
          params: shop.params
        }
      })
      commit(ADD_SESSIONSTORAGESHOPCART,sessionStorageShopCart)
    },
    // 添加商品会添加至本地
    async updateShopCart ({commit,state},shopInfo){
      // 保证此时的shopInfo都是商品对象
      shopInfo = shopInfo[0] ? shopInfo[0] : shopInfo
      if (state.shopCart.length < 1) { // 第一次添加
        // console.log(1);
        commit(ADD_SHOP_TO_SHOP_CART,shopInfo)
      }else{
        let countIsSame = false
        let sameShopIndex = 0
        state.shopCart.forEach((shop, index) => {
          if ((shop.sku_id == shopInfo.sku_id || shop.id == shopInfo.id) && shop.params.every((item,index)=> item == shopInfo.params[index]) ) {
            countIsSame = true
            sameShopIndex = index
          }
        })
        if (countIsSame) {
          // 商品样式和id都一样,只是增加了数量
          commit(ADD_SHOP_NUM,{index:sameShopIndex,num:shopInfo.num})
        }else{
          // 商品id或品种不一样
          commit(ADD_SHOP_TO_SHOP_CART,shopInfo)
        }
      }

    },
    // 添加商品到数据库
    async ToShopCart({commit},{shopInfo,b,isBtn = false}){

      shopInfo = shopInfo[0] || shopInfo
      const result = await addToShopCart({
        customer_id: window.sessionStorage.userId,
        sku_id: b && shopInfo.id ? shopInfo.sku_id : shopInfo.id,
        num: shopInfo.num,
        params: shopInfo.params,
      })

      if (isBtn) {
        shopInfo.id = result.data.insertId
      }

    },
    // 拉去数据库数据到本地shopCart,并且添加值sessionStorage
    async initShopCart ({commit,dispatch}){
      const newResult = await reqShopCart({customer_id:window.sessionStorage.userId})
      if (newResult.data) { // 购物车有数据
        // 得到所有购物车信息
        let b = newResult.data.map(item=>{
          item.params = JSON.parse(item.params)
          return item
        })
        b.forEach(item=>{
          // 收集数据库的购物车,重复的商品(数量不一样,其它都一样的商品)
          commit('collect',item)
          dispatch('updateShopCart',item)
          dispatch('addToSession')
        })
      }
    },
    // 删除购物车中的某一个商品
    async deleteSqlShop({state},{id}){
      const result = await deleteSC({id})
      console.log(result);
    }
  },
  getters: {}
}
