import axios from "utils/request.js";
export const addBackStock = (options) => axios.post('/order/addBackStock',options);
export const updateBackStock= (options) => axios.post('/order/updateBackStock',options);