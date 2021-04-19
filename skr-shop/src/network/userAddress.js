import axios from '../utils/request'

export async function delAddress(options){
  return await axios({
    method:'post',
    url:'/user/deleteAddress',
    data:options
  })
}
