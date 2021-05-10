import axios from "utils/request.js";

export const reqShopCart = (options) => axios.post('/shopcar/getShopCar',options)
