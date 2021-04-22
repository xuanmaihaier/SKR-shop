import axios from "utils/request.js";
export const deleteOrder = (options) => axios.post('/order/deleteOrder',options)