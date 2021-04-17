/*
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-13 23:05:25
 * @LastEditTime: 2021-04-15 10:00:32
 * @LastEditors: He Xiantao
 */
/**
 * 根据商品id获取商品详情
 * 参数: id
 * url: /store/getSku/
 */
 import axios from "utils/request.js";
 export const getShopById = (options) => axios.post('/store/getSku',options)
 export const getShopById2 = (options) => axios.post('/store/getSpu',options)