import axios from "utils/request.js";
export const setDefaultAddress = (options) => axios.post('/user/defaultAddress',options)