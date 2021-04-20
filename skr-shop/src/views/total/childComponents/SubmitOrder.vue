<template>
    <div class="order_total">
        <ul>
            <li class="title">商品小计</li>
            <li><span>商品总价：</span> <span>￥ {{total}}</span></li>
            <li><span>优惠：</span> <span>￥ {{difference}}</span></li>
            <li><span>其他：</span><span>+￥0</span></li>
            <li class="pay" >
                <div>
                    <div>总计</div>
                    <div class="payPrice">￥ {{discounts}}</div>
                </div>
                <div>
                    <a-button type="danger" @click="submitOrder">提交订单</a-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {payOrder} from "network/payOrder";

    export default {
        name: "",
        data() {
            return {
                orderDetail:[]
            }
        },
        created() {
            this.orderDetail=JSON.parse(localStorage.buyShopList1)
        },
        methods:{
            getOrderTotal(str){
                let result=0
                this.orderDetail.forEach(item=>{
                    result+=item[str]-0;
                })
                return result
            },
            async submitOrder(){
                const res =await payOrder({
                    outTradeNo:this.getCookie('username')+Date.now()+sessionStorage,
                    totalAmount:this.discounts,
                    subject:this.getCookie('username')+"'s shopping order",
                    body:this.getCookie('username')+`is paying for ${this.orderDetail[0].title} ...`  ,
                })
                if(res.code==200){
                    this.$message.success('jumping to alipay page');
                    setTimeout(()=>location.href=res.data)
                }
            }
        },
        computed:{
            total(){
                return this.getOrderTotal('price')
            },
            discounts(){
                return this.getOrderTotal('special_price')
            },
            difference(){
                return this.total-this.discounts
            }
        }
    }
</script>

<style scoped lang="less">
    .order_total {
        width: 25vw;
        margin-top: 82px;
        padding: 0 20px;

        ul {
            width: 100%;
            border: 1px solid #cccccc;

            li {
                height: 50px;
                line-height: 50px;
                margin: 0 10px;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ccc;
                font-size: 13px;
            }

            .title {
                font-size: 16px;
                margin: 0;
                padding: 0 10px;
                background-color: #f6f6f6;
            }
            .pay {
                border: none;
                height: 100px;
                button{
                    width: 140px;
                    background-color: #ed4025;
                    height: 40px;
                    margin-top: 30px;
                    border-radius: 0;
                }
                .payPrice{
                    line-height: 0;
                    font-size: 18px;
                    font-weight: bolder;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
