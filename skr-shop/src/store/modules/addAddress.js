import { addAddress } from 'network/addAddress'
import { getAddress } from 'network/getAddress'
import { delAddress } from "network/delAddress";
export default {
    state: () => ({
        addressList: [] // 存储单个商品的原价和促销价
    }),
    mutations: {
        get(state, params) {
            if (params) {
                state.addressList = params
                console.log(state.addressList);
            } else {
                state.addressList = []
            }
        }
    },
    actions: {
        async get({ commit }) {
            const res = await getAddress({ customer_id: sessionStorage.getItem('userId') });
            // console.log(res);
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
            // console.log(state);
            if (res.code == 200) {

                dispatch('get')

            }
        }
    }
}