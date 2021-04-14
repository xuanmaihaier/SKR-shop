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
import axios from 'axios'
import store from '../store/index'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  store.dispatch('commitLoading', true)
  return config
})

instance.interceptors.response.use(response => {
  store.dispatch('commitLoading', false)
  return response.data
},
  error => {
    console.log(error)
    store.dispatch('commitLoading', false)
    return new Promise(() => { })
  }
)

export default instance