import {addAddress} from 'network/addAddress'
import {getAddress} from 'network/getAddress'

export default {
    state: () => ({
        addressList:[] // 存储单个商品的原价和促销价
    }),
    mutations: {
        get(state,params){
            state.addressList=params
        }
    },
    actions: {
        async get({commit}){
            const res =await getAddress({customer_id:sessionStorage.getItem('userId')});
            commit('get',res.data)
        },
        async add({dispatch}, params) {
            const res = await addAddress(params)
            dispatch('get',res)
        },
    }
}