/*
 * @Description: 添加订单
 * @Author: He Xiantao
 * @Date: 2021-04-19 12:53:15
 * @LastEditTime: 2021-04-19 13:38:48
 * @LastEditors: He Xiantao
 */
import axios from "utils/request.js";
export const addOrder = (options) => axios.post('/order/addOrder',options)
