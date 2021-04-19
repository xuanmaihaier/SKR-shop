/*
 * @Description: shopCart
 * @Author: He Xiantao
 * @Date: 2021-04-15 12:09:19
 * @LastEditTime: 2021-04-19 17:24:12
 * @LastEditors: He Xiantao
 */

import { 
  ADD_SHOP_TO_SHOP_CART,
  ADD_SHOP_NUM,
  ADD_SESSIONSTORAGESHOPCART,
} from "../mutations-type";

import Vue from "vue";

// import { getShopById } from "../../network/getShopById";
import { addToShopCart } from "../../network/addToShopCart";
import { reqShopCart } from "../../network/reqShopCart";
import { deleteSC } from "../../network/deleteShop";

export default {
  state: ()=> ({
    shopCart: [], //当前购物车中所有的good数组
    sessionStorageShopCart: [], // 需要存储到sessionStorage里面的简写
    repeatSqlShopId: {}, // 收集数据库的购物车中重复的商品(数量不一样,其它都一样)的id,以便删除的时候一起删除
  }),
  mutations:{
    [ADD_SHOP_TO_SHOP_CART] (state,shopInfo) {
      let a = JSON.parse(JSON.stringify(shopInfo))
      // console.log(a,'++++++++++++++++++++++++=');
      Vue.set(a,'num',a.num)
      Vue.set(a,'params',a.params)
      state.shopCart.push(a)
    },
    [ADD_SHOP_NUM](state,{index,num}){
      state.shopCart[index].num = parseInt(state.shopCart[index].num) + parseInt(num)
    },
    [ADD_SESSIONSTORAGESHOPCART] (state,options) {
      state.sessionStorageShopCart = options
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    },
    change_shop_num(state,{isAddNum,shop}){
      shop.num += isAddNum ? 1 : -1
      const a = {
        sku_id: shop.id,
        num: shop.num,
        params: shop.params
      }
      state.sessionStorageShopCart.splice(state.sessionStorageShopCart.indexOf(a),1,a)
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    },
    delete_shop(state,shop){
      state.shopCart.splice(state.shopCart.indexOf(shop),1)
      const a = {
        sku_id: shop.id,
        num: shop.num,
        params: shop.params
      }
      state.sessionStorageShopCart.splice(state.sessionStorageShopCart.indexOf(a),1)
      window.sessionStorage.shopCart = JSON.stringify(state.sessionStorageShopCart)
    },
    clear_shop_cart(state){
      state.shopCart = []
      state.sessionStorageShopCart = []
      window.sessionStorage.removeItem('shopCart')
    },
    collect(state,item){
      // console.log(item);
      if (state.repeatSqlShopId[item.sku_id]) {
        state.repeatSqlShopId[item.sku_id][state.repeatSqlShopId[item.sku_id].length] = item.id
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
        // console.log(shop);
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
        console.log(1);
        commit(ADD_SHOP_TO_SHOP_CART,shopInfo)
      }else{ 
        let countIsSame = false
        let sameShopIndex = 0
        state.shopCart.forEach((shop,index)=>{
          // console.log(shop.sku_id,'----',shopInfo[0].sku_id);
          // console.log(shop,shopInfo);
          if ((shop.sku_id == shopInfo.sku_id || shop.id == shopInfo.id) && shop.params.every((item,index)=> item == shopInfo.params[index]) ) {
            countIsSame = true
            sameShopIndex = index
          }
        })
        if (countIsSame) {
          // 商品样式和id都一样,只是增加了数量
          console.log('商品样式和id都一样,只是增加了数量');
          commit(ADD_SHOP_NUM,{index:sameShopIndex,num:shopInfo.num})
        }else{
          // 商品id或品种不一样
          console.log(2);
          commit(ADD_SHOP_TO_SHOP_CART,shopInfo)
        }
      }
      // console.log(state.shopCart);
      

      // 用户登录, 商品添加到数据库
      // await addToShopCart({
      //   customer_id: window.sessionStorage.userId,
      //   sku_id: shopInfo.sku_id || shopInfo.id,
      //   num: shopInfo.num,
      //   params: shopInfo.params,
      // })
    },
    // 添加商品到数据库
    async ToShopCart({commit},{shopInfo,b}){
      // console.log(shopInfo);
      console.log('添加商品到数据库');
      shopInfo = shopInfo[0] || shopInfo
      // console.log(shopInfo);
      // console.log(b && shopInfo.id ? shopInfo.sku_id : shopInfo.id);
      const result = await addToShopCart({
        customer_id: window.sessionStorage.userId,
        sku_id: b && shopInfo.id ? shopInfo.sku_id : shopInfo.id,
        num: shopInfo.num,
        params: shopInfo.params,
      })
      // console.log(result);
    },
    // 拉去数据库数据到本地shopCart,并且添加值sessionStorage
    async initShopCart ({commit,dispatch}){
      // const shopCart = window.sessionStorage.shopCart
      // let allShopCart = [] // 存储数据库的购物车商品
      // if (shopCart) { // 
        
      //   let idList = [] // 过滤本地存储的商品id
      //   // 过滤session里面商品的id
      //   JSON.parse(shopCart).forEach((item)=>{
      //     if (!idList.includes( item.sku_id )) {
      //       idList.push(item.sku_id)
      //     }
      //   })
        
      //   // 遍历商品id,发送请求
      //   idList.forEach(async item=>{
      //     const result = await getShopById({id:item})
      //     // console.log(result);
      //     // 更具请求, 添加相应的信息.到本地
      //     JSON.parse(shopCart).forEach((item1)=>{
      //       // console.log(item1);
      //       if (item1.sku_id == item) {
      //         result.data[0].customer_id = window.sessionStorage.userId
      //         result.data[0].num = item1.num
      //         result.data[0].params = item1.params
      //         console.log(3);
      //         commit(ADD_SHOP_TO_SHOP_CART,result.data[0])
      //       }
      //     })
      //     if (window.sessionStorage.token) {
      //       const newResult = await reqShopCart({customer_id:window.sessionStorage.userId})
      //       allShopCart.concat(newResult)
      //       allShopCart.forEach(item=>{
      //         dispatch('updateShopCart',item)
      //       })
      //     }
      //   })
      // }else{ // 用户登录, 数据库购物车---->本地
      // console.log(window.sessionStorage.token);
      // if (window.sessionStorage.token) {
        // console.log(1324565432431);
      console.log('拉去数据库数据到本地');
      const newResult = await reqShopCart({customer_id:window.sessionStorage.userId})
      // console.log(newResult);
      if (newResult.data) { // 购物车有数据
        // 得到所有购物车信息
        let b = newResult.data.map(item=>{
          item.params = JSON.parse(item.params)
          return item
        })
        console.log(b);
        b.forEach(item=>{
          // 收集数据库的购物车,重复的商品(数量不一样,其它都一样的商品)
          // console.log(item);
          commit('collect',item)
          dispatch('updateShopCart',item)
          dispatch('addToSession')
        })
      }
      // }
      // }
    },
    // 删除购物车中的某一个商品
    async deleteSqlShop({state},{id}){
      const result = await deleteSC({id})
      // console.log(result);
    }
    // 初始化用户未登录时, 本地添加的商品--->数据库
    // initLocalShopTo (){
    //   // console.log(2);
    //   if (window.sessionStorage.token) { 
    //     if (window.sessionStorage.shopCart) {
    //       const localShop = JSON.parse(window.sessionStorage.shopCart)
    //       // console.log(localShop);
    //       localShop.forEach(async item=>{
    //         // console.log('aaaa');
    //         await addToShopCart({
    //           customer_id: window.sessionStorage.userId,
    //           sku_id: item.sku_id || shopInfo.id,
    //           num: item.num,
    //           params: item.params,
    //         })
    //       })
    //     }
    //   }
    // },
    // 获取所有购物车商品
  },
  getters: {}
}