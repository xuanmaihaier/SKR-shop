import axios from "utils/request.js";
// 搜索请求
export default async function (word) {
    return await axios({ method: 'post', url: "/type/selectProduct", data:word})
};