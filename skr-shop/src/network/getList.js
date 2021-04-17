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
 * 获取二级列表
 * url: /wares/getSpu
 * 参数：name
 */
export async function getTypeOTwoList(name,series) {
  return await axios({ method: "post", url: "/wares/getSpu", data: { name,series } })
}