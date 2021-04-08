// import axios from "axios"
// // import Vue from "vue"
// // Vue.prototype.$http = axios
// const instance = axios.create({
//   baseURL:process.env.BASE_API,
//   timeout:10000
// })
// instance.interceptors.request.use(config=>{
//   // config.headers = {
//   //   "Cache-Control":"no-cache",
//   //   Authorization:JSON.parse(token)
//   // }
//   return config
// },error=>{
//   console.log(error);
//   return Promise.reject(error)
// })
// instance.interceptors.response.use(res=>{
//     return res.data
// })

// export default instance