/*
 * @Description: 删除购物车
 * @Author: He Xiantao
 * @Date: 2021-04-19 12:06:50
 * @LastEditTime: 2021-04-19 12:53:36
 * @LastEditors: He Xiantao
 */

import axios from "utils/request.js";
export const deleteSC = (options) => axios.post('/shopCar/deleteShopCar',options)
