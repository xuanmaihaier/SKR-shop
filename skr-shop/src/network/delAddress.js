import axios from "utils/request.js";
export const delAddress = (options) => axios.post('/user/deleteAddress',options)