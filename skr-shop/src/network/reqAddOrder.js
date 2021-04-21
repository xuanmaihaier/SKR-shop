import axios from "utils/request.js";
export const addOrder = (options) => axios.post('/order/addOrder',options);
