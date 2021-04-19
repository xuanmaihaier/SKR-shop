<template>
    <div>
        <div class="address">
            <h1>结算</h1>
            <div class="empty" v-if="this.$store.state.addAddress.addressList.length?true:false">
                <div>收货地址</div>
                <div class="add" @click="isShow=true">
                    <a-icon type="plus-circle"/>
                    新增收货地址
                </div>
            </div>
            <div class="not-empty">
                <div defaultAddress>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <AddressAdd :isShow="isShow" @closeAdd="isShow=false"></AddressAdd>
    </div>
</template>
<script>
    import AddressAdd from "components/common/address/AddressAdd";

    export default {
        components: {AddressAdd},
        data(){
            return{
                isShow:false,
            }
        },
        created() {
            this.$store.dispatch('get');
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .address {
        width: 50vw;
        position: relative;

        h1 {
            padding: 20px;
        }
        .empty {
            color: #ffffff;
            font-size: 16px;
            width: 100%;
            background-color: #4c4c4c;
            display: flex;
            justify-content: space-between;
            padding: 20px;

            .add {
                cursor: pointer;
            }
        }
    }


</style>
