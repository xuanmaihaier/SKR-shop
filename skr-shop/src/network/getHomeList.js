import axios from "utils/request.js";
export async function getSpu(spu_id) {
  return await axios({ method: "post", url: "/type/getSwiper", data: { spu_id } })
}
export async function getSpg(spg_id) {
  return await axios({ method: "post", url: "/type/getSwiper", data: { spg_id } })
}
