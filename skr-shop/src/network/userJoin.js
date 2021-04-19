import axios from '../utils/request'
// 登录请求
export async function userLogin(options){
  return await axios({
    method:'post',
    url:'/user/login',
    data:options
  })
}
// 注册请求
export async function userSignUp(options){
  return await axios({
    method:'post',
    url:'/user/register',
    data:options
  })
}

export async function getMessage(options){
  return await axios({
    method:'post',
    url:'/user/getMessage',
    data:options
  })
}