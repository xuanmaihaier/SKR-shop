/*
 * @Description: 获取购物车商品
 * @Author: He Xiantao
 * @Date: 2021-04-16 17:27:49
 * @LastEditTime: 2021-04-16 21:42:19
 * @LastEditors: He Xiantao
 */

import axios from "utils/request.js";

export const reqShopCart = (options) => axios.post('/shopcar/getShopCar',options)
