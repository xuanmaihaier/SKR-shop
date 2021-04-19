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
// 个人信息请求
export async function userInfo(options){
  return await axios({
    method:'post',
    url:'/user/updateUserInfo',
    data:options
  })
}
// 修改密码请求
export async function updatePassword(options){
  return await axios({
    method:'post',
    url:'/user/changePassword',
})
}
// 发送验证码
export async function getMessage(options){
  return await axios({
    method:'post',
    url:'/user/getMessage',
    data:options
  })
}