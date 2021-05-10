 import axios from "utils/request.js";
 export const getShopById = (options) => axios.post('/store/getSku',options)
 export const getShopById2 = (options) => axios.post('/store/getSpu',options)