import axios from 'axios'
import store from '../store/index'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 2000
})

instance.interceptors.request.use(config => {
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  store.dispatch('commitLoading', true)
  return config
})

instance.interceptors.response.use(response => {
  setTimeout(() => {
    store.dispatch('commitLoading', false)
  }, 500);
  return response.data
},
  error => {
    // console.log(error)
    store.dispatch('commitLoading', false)
    return new Promise(() => { })
  }
)

export default instance