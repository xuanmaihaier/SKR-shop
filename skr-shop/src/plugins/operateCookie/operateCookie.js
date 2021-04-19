import Vue from 'vue'
let apis = {
    animateScroll(from, to, callback) {
        let timer = setInterval(function () {
            from = from + (to - from) / 10;
            from = to - from > 0 ? Math.ceil(from) : Math.floor(from);
            if (from == to) {
                clearInterval(timer);
                if (typeof callback == "function") callback()
            }
            document.documentElement.scrollTop = from + 1;
        }, 11.1);
    },
    addCookie(objName, objValue, objDays) {
        let str = objName + "=" + escape(objValue); //编码
        if (objDays > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
            let date = new Date();
            let ms = objDays * 3600 * 1000 *24;
            date.setTime(date.getTime() + ms);
            str += "; expires=" + date.toGMTString();
        }
        document.cookie = str;
    },
  //读Cookie
  getCookie(objName) {//获取指定名称的cookie的值
    let arrStr = document.cookie.split("; ");
    for (let i = 0; i < arrStr.length; i++) {
      let temp = arrStr[i].split("=");
      if (temp[0] == objName) return unescape(temp[1]);  //解码
    }
    return "";
  },
  delCookie(objName)//删除cookie
  {
    document.cookie = objName + "=;expires=" + (new Date(0)).toGMTString();
  }
}
export default {
  install(Vue) {
    Object.keys(apis).forEach((key) => {
      Vue.prototype[key] = apis[key]
    })
  }
}



