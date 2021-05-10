/*
 * @Description: 详情页面模块数据管理
 * @Author: He Xiantao
 * @Date: 2021-04-15 09:56:31
 * @LastEditTime: 2021-05-10 15:12:58
 * @LastEditors: He XianTao
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
    },
    [UPDATE_SHOP_PARAMS] (state,params){
      state.shop1[0].params = params
    },
  },
  actions: {
    // 获取商品信息
    async getShop ({commit},id) {
      const result = await axios.all([getShopById({spu_id:id}),getShopById2({id})])
      commit(SAVE_SHOP1,result[0].data)
      commit(SAVE_SHOP2,result[1].data)
    },
    // 更新商品信息
    updateShopInfo ({commit},{num,params}){
      commit(UPDATE_SHOP_NUM,num)
      commit(UPDATE_SHOP_PARAMS,params)
    },
  },
}
