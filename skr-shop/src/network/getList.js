import axios from "utils/request.js";
/**
 * 获取一级列表
 * url: /type/getproduct
 * 参数：parent_name
 */
export async function getTypeOneList(parent_name) {
  return await axios({ method: "post", url: "/type/getproduct", data: { parent_name } })
}
/**
 * 获取一级列表
 * url: /type/getproduct
 * 参数：parent_name
 */
export async function getTypeOTwoist(name) {
  return await axios({ method: "post", url: "/wares/getSpu", data: { name } })
}