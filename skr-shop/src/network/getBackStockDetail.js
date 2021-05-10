import axios from "utils/request.js";
export const getBackStockDetail = (options) => axios.post('/order/getBackStockDetail',options)