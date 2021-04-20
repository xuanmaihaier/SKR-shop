import axios from "utils/request.js";
export const payOrder = (options) => axios.post('/order/payOrder',options)
