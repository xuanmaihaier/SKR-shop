import axios from "utils/request.js";
export const getOrderDetail = (options) => axios.post('/order/getOrderDetail',options)