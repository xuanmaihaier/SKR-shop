/**
 * 根据商品id获取商品详情
 * 参数: id
 * url: /store/getSku/
 */
 import axios from "utils/request.js";
 export const getShopById = (options) => axios.post('/store/getSku',options)