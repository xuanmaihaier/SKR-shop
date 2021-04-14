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