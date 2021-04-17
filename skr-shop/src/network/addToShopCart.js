/*
 * @Description: 添加至购物车请求
 * @Author: He Xiantao
 * @Date: 2021-04-15 18:19:53
 * @LastEditTime: 2021-04-16 14:16:17
 * @LastEditors: He Xiantao
 */
import axios from "utils/request.js";
export const addToShopCart = (options) => axios.post('/shopcar/addShopCar',options)
