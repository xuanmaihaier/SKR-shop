<template>
    <div class="total">
        <div class="left">
            <MyAddress></MyAddress>
            <ShopDetail></ShopDetail>
        </div>
        <div class="right">
            <SubmitOrder></SubmitOrder>
        </div>
    </div>
</template>
<script>
    import MyAddress from "./childComponents/MyAddress";
    import SubmitOrder from "./childComponents/SubmitOrder";
    import ShopDetail from "./childComponents/ShopDetail";
    export default {
        props:[],
        name: "PayTotal",
        components: {
            MyAddress,
            SubmitOrder,
            ShopDetail
        },
        data() {
            return {

            }
        },

    }
</script>

<style scoped lang="less">
    .total{
        display: flex;
        justify-content: space-between;
        width: 75vw;
        margin: 0 auto;
    }
</style>
