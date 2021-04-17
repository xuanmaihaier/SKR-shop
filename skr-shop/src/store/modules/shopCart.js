/*
 * @Description: shopCart
 * @Author: He Xiantao
 * @Date: 2021-04-15 12:09:19
 * @LastEditTime: 2021-04-16 21:55:41
 * @LastEditors: He Xiantao
 */

import {
  ADD_SHOP_TO_SHOP_CART,
  ADD_SHOP_NUM,
  ADD_SESSIONSTORAGESHOPCART,
} from "../mutations-type";


import { getShopById } from "network/getShopById";
import { reqShopCart } from "network/reqShopCart"
import { addToShopCart } from "network/addToShopCart"

export default {
  state: () => ({
    shopCart: [], //当前购物车中所有的good数组
    sessionStorageShopCart: [], // 需要存储到sessionStorage里面的简写
  }),
  mutations: {
    [ADD_SHOP_TO_SHOP_CART](state, shopInfo) {
      let a = JSON.parse(JSON.stringify(shopInfo))
      // Vue.set(a,'num',a.num)
      // Vue.set(a,'params',a.params)
      state.shopCart.push(a)
    },
    [ADD_SHOP_NUM](state, { index, num }) {
      state.shopCart[index].num = parseInt(state.shopCart[index].num) + parseInt(num)
    },
    [ADD_SESSIONSTORAGESHOPCART](state, options) {
      state.sessionStorageShopCart = options
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    }
  },
  actions: {
    // 登录的时候点击添加商品会添加至数据库,及存储到本地
    async updateShopCart ({commit,state},shopInfo){
      shopInfo = shopInfo[0] ? shopInfo[0] : shopInfo
      if (state.shopCart.length < 1) { // 第一次添加
        commit(ADD_SHOP_TO_SHOP_CART, shopInfo)
      } else {
        let countIsSame = false
        let sameShopIndex = 0
        state.shopCart.forEach((shop, index) => {
          // console.log(shop.sku_id,'----',shopInfo[0].sku_id);
          if (shop.id == shopInfo.id && shop.params.every((item, index) => item == shopInfo.params[index])) {
            countIsSame = true
            sameShopIndex = index
          }
        })
        if (countIsSame) {
          // 商品样式和id都一样,只是增加了数量
          commit(ADD_SHOP_NUM, { index: sameShopIndex, num: shopInfo.num })
        } else {
          // 商品id或品种不一样
          commit(ADD_SHOP_TO_SHOP_CART, shopInfo)
        }
      }
      // 用户登录, 商品添加到数据库
      if (window.sessionStorage.token) {
        await addToShopCart({
          customer_id: window.sessionStorage.userId,
          sku_id: shopInfo.sku_id || shopInfo.id,
          num: shopInfo.num,
          params: shopInfo.params,
        })
      }
      console.log(state.shopCart);
      //将购物车内容存储到sessionStorage里面
      const sessionStorageShopCart = state.shopCart.map(shop => {
        return {
          sku_id: shop.id,
          num: shop.num,
          params: shop.params
        }
      })
      commit(ADD_SESSIONSTORAGESHOPCART, sessionStorageShopCart)
    },
    // 初始化页面购物车
    // 初始化页面购物车(将购物车及未登录时的商品信息, 拉取到本地)
    initShopCart ({commit,dispatch}){
      const shopCart = window.sessionStorage.shopCart
      console.log(typeof shopCart,'---',shopCart);
      if (shopCart) { // 
        
        let idList = [] // 过滤本地存储的商品id
        // 更具session里面商品的id,发送请求
        JSON.parse(shopCart).forEach((item) => {
          if (!idList.includes(item.sku_id)) {
            idList.push(item.sku_id)
          }
        })

        
        let allShopCart = [] // 存储数据库的购物车商品
        // 
        idList.forEach(async item=>{
          const result = await getShopById({id:item})
          // 
          JSON.parse(shopCart).forEach((item1) => {
            console.log(item1);
            if (item1.sku_id == item) {
              result.data[0].customer_id = window.sessionStorage.userId
              result.data[0].num = item1.num
              result.data[0].params = item1.params
              commit(ADD_SHOP_TO_SHOP_CART, result.data[0])
            }
          })
          if (window.sessionStorage.token) {
            const newResult = await reqShopCart({customer_id:window.sessionStorage.userId})
            allShopCart.concat(newResult)
            allShopCart.forEach(item => {
              dispatch('updateShopCart', item)
            })
          }
        })
      }
    },
    // 初始化用户未登录时本地添加的商品到数据库
    initLocalShopTo (){
      console.log(2);
      if (window.sessionStorage.token) { 
        if (window.sessionStorage.shopCart) {
          const localShop = JSON.parse(window.sessionStorage.shopCart)
          console.log(localShop);
          localShop.forEach(async item=>{
            console.log('aaaa');
            await addToShopCart({
              customer_id: window.sessionStorage.userId,
              sku_id: item.sku_id || shopInfo.id,
              num: item.num,
              params: item.params,
            })
          })
        }
      }
    }
  },
  getters: {}
}