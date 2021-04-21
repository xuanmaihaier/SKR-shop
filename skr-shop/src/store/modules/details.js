/*
 * @Description: 详情页面模块数据管理
 * @Author: He Xiantao
 * @Date: 2021-04-15 09:56:31
 * @LastEditTime: 2021-04-20 20:59:17
 * @LastEditors: He Xiantao
 */


import { getShopById, getShopById2 } from "../../network/getShopById";

import axios from "axios";
import Vue from "vue";

import { 
  SAVE_SHOP1,
  SAVE_SHOP2,
  DELETE_ALL_SHOP,
  UPDATE_SHOP_NUM,
  UPDATE_SHOP_PARAMS,
 } from "../mutations-type";


export default {

  state: () => ({
    shop1: [], // 存储单个商品信息
    shop2: [], // 存储单个商品的原价和促销价
  }),
  mutations: {
    [SAVE_SHOP1] (state,shop1){
      state.shop1 = shop1
    },
    [SAVE_SHOP2] (state,shop2){
      state.shop2 = shop2
    },
    [DELETE_ALL_SHOP] (state){
      state.shop1 = []
      state.shop2 = []
    },
    [UPDATE_SHOP_NUM] (state,num){
      state.shop1[0].num = parseInt(num)
      // Vue.set(state.shop1[0],'num',parseInt(num))
      // state.shop1[0].num = parseInt(num)
      // state.shop1[0].special_price = state.shop2.special_price
      // if (state.shop1[0].num) {
      //   state.shop1[0].num = num
      // }else{
      //   Vue.set(state.shop1[0],'num',num)
      // }
    },
    [UPDATE_SHOP_PARAMS] (state,params){
      state.shop1[0].params = params
      // Vue.set(state.shop1[0],'params',params)
      // state.shop1[0].params = params
      // if (state.shop1[0].params) {
      //   state.shop1[0].params = params
      // }else{
      //   Vue.set(state.shop1[0],'params',params)
      // }
    },
  },
  actions: {
    async getShop ({commit},id) {
      const result = await axios.all([getShopById({spu_id:id}),getShopById2({id})])
      commit(SAVE_SHOP1,result[0].data)
      commit(SAVE_SHOP2,result[1].data)
    },
    updateShopInfo ({commit},{num,params}){
      commit(UPDATE_SHOP_NUM,num)
      commit(UPDATE_SHOP_PARAMS,params)
    },
  },

  getters: {
    
  }



}
