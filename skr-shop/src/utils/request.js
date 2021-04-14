import axios from 'axios'
const instance = axios.create({
  baseURL:process.env.VUE_APP_BASE_URL,
  timeout:5000
})

instance.interceptors.request.use(config =>{
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

instance.interceptors.response.use(response=>{
  return response.data
},
  error => {
    console.log(error)
    return new Promise(()=>{})
  }
)

export default instance