import {addAddress} from 'network/addAddress'
import {getAddress} from 'network/getAddress'
import {updateAddress} from 'network/updateAddress'
import { delAddress } from "network/delAddress";
import Vue from 'vue'

export default {
    state: {
        addressList: [] // 存储单个商品的原价和促销价
    },
    mutations: {
        get(state, params) {
<<<<<<< HEAD
            if (params) {
                state.addressList = params
                // console.log(state.addressList);
            } else {
                state.addressList = []
            }
=======
            state.addressList =params?params:[]
>>>>>>> 820521eb1854901da2e54a952590bff9e215a1b3
        }
    },
    actions: {
        async get({commit}) {
            const res = await getAddress({customer_id: sessionStorage.getItem('userId')})
            commit('get', res.data)
        },
        async add({ dispatch }, params) {
            const res = await addAddress(params)
            if (res.code == 200) {
                dispatch('get')
            }
        },
        async del({ state, dispatch }, id) {
            const res = await delAddress({ id })
            if (res.code == 200) {
                dispatch('get')
                new Vue().$message.success('添加地址成功')
                dispatch('get')
            } else {
                new Vue().$message.error('添加地址失败')
            }
        },
        async update({dispatch},params){
            const res = await updateAddress(params)
            if(res.code==200){
                new Vue().$message.success('更新地址成功')
                dispatch('get')
            }else{
                new Vue().$message.error('更新失败')
            }
        }
    }
}