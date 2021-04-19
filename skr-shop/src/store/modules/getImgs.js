import {getImg} from '../../network/getImg.js'

export default {
    state:{
        getImgList: [],
        getImgLista: [],
        getImgListc: [],
        getImgListd: [],
        getImgListaId: [],

      },
    mutations:{
        commitGetImgLIst(state, value){
            state.getImgList = value 
        },
        commitGetImgLIsta(state, value){
            value.forEach(item => {
                state.getImgLista.push(item.img)
                state.getImgListaId.push(item.id)
            });
            
            // console.log(state.getImgLista,'45646');
           
        },
        commitGetImgLIstc(state, value){
            state.getImgListc = value 
           
        },
        commitGetImgLIstd(state, value){
            state.getImgListd = value 
            // console.log(state.getImgListd);
        },
    },
    actions:{
        //获取蹄片
        async initGetImga(store,value){
            const result = await getImg(value)
            
            store.commit('commitGetImgLIsta',result)
        },
        async initGetImg(store,value){
            const result = await getImg(value)
            store.commit('commitGetImgLIst',result)
        },
        async initGetImgc(store,value){
            const result = await getImg(value)
            store.commit('commitGetImgLIstc',result)
        },
        async initGetImgd(store,value){
            const result = await getImg(value)
            store.commit('commitGetImgLIstd',result)
        }
    },
    getters:{}
}