/*
 * @Description: shopCart
 * @Author: He Xiantao
 * @Date: 2021-04-15 12:09:19
 * @LastEditTime: 2021-04-16 19:59:20
 * @LastEditors: He Xiantao
 */

import { 
  ADD_SHOP_TO_SHOP_CART,
  ADD_SHOP_NUM,
  ADD_SESSIONSTORAGESHOPCART,
} from "../mutations-type";


import { getShopById, reqShopCart, addToShopCart } from "../../network/getShopById";

export default {
  state: ()=> ({
    shopCart: [], //当前购物车中所有的good数组
    sessionStorageShopCart: [], // 需要存储到sessionStorage里面的简写
  }),
  mutations:{
    [ADD_SHOP_TO_SHOP_CART] (state,shopInfo) {
      let a = JSON.parse(JSON.stringify(shopInfo))
      // Vue.set(a,'num',a.num)
      // Vue.set(a,'params',a.params)
      state.shopCart.push(a)
    },
    [ADD_SHOP_NUM](state,{index,num}){
      state.shopCart[index].num = parseInt(state.shopCart[index].num) + parseInt(num)
    },
    [ADD_SESSIONSTORAGESHOPCART] (state,options) {
      state.sessionStorageShopCart = options
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    }
  },
  actions: {
    async updateShopCart ({commit,state},shopInfo){
      shopInfo = shopInfo[0] ? shopInfo[0] : shopInfo
      if (state.shopCart.length < 1) { // 第一次添加
        commit(ADD_SHOP_TO_SHOP_CART,shopInfo)
      }else{ 
        let countIsSame = false
        let sameShopIndex = 0
        state.shopCart.forEach((shop,index)=>{
          // console.log(shop.sku_id,'----',shopInfo[0].sku_id);
          if (shop.id == shopInfo.id && shop.params.every((item,index)=> item == shopInfo.params[index] ) ) {
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
      // 用户登录, 商品添加到数据库
      if (window.sessionStorage.token) { 
        await addToShopCart({
          customer_id: window.sessionStorage.userid,
          sku_id: shopInfo.sku_id || shopInfo.id,
          num: shopInfo.num,
          params: shopInfo.params,
        })
      }
      console.log(state.shopCart);
      //将购物车内容存储到sessionStorage里面
      const sessionStorageShopCart = state.shopCart.map(shop=>{
        return {
          sku_id: shop.id,
          num: shop.num,
          params: shop.params
        }
      })
      commit(ADD_SESSIONSTORAGESHOPCART,sessionStorageShopCart)
    },

    // 初始化页面购物车
    initShopCart ({commit,dispatch}){
      console.log(111);
      const shopCart = window.sessionStorage.shopCart
      if (shopCart) { // 
        let idList = []
        // 更具session里面商品的id,发送请求
        JSON.parse(shopCart).forEach((item)=>{
          if (!idList.includes( item.sku_id )) {
            idList.push(item.sku_id)
          }
        })
        let allShopCart = []
        idList.forEach(async item=>{
          const result = await getShopById({id:item})
          // 
          JSON.parse(shopCart).forEach((item1)=>{
            console.log(item1);
            if (item1.sku_id == item) {
              result.data[0].customer_id = window.sessionStorage.userid
              result.data[0].num = item1.num
              result.data[0].params = item1.params
              commit(ADD_SHOP_TO_SHOP_CART,result.data[0])
            }
          })
          if (window.sessionStorage.token) {
            const newResult = await reqShopCart({customer_id:window.sessionStorage.userid})
            allShopCart.concat(newResult)
            allShopCart.forEach(item=>{
              dispatch('updateShopCart',item)
            })
          }
        })
      }
    },
  },
  getters: {}
}