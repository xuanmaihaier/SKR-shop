import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入

NProgress.configure({
  showSpinner: false,//关闭NProgress转圈圈
  easing: 'linear' //进度条速率
});
export default NProgress