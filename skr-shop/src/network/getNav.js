import axios from "utils/request.js";
/**
 * 获取一级菜单
 * url: /type/getParentName
 */
export async function getTypeOne() {
  return await axios({ method: 'post', url: "/type/getParentName" })
}
export async function getTypeTwo(parent_name) {
  console.log(parent_name);
  return await axios({ method: 'post', url: "/wares/getSecond", data:{
    parent_name
 } })
}