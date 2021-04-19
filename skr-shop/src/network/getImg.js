// 获取图片   {parent_name:'服饰',start:16,end:18}
import axios from "utils/request.js";
export const getImg = (options) => axios.post('/type/getImg',options)
