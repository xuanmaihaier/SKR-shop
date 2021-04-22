<template>
    <div class="orderDetail">
        <div class="orderNow">

            <div class="title">订单号：{{orderDetail.code}} {{createDate}} </div>
            <div class="orderList">
                <a-steps>
                    <a-step status="finish" :title="statusArr[0]">
                        <a-icon slot="icon" type="pay-circle" />
                    </a-step>
                    <a-step status="process" :title="statusArr[1]">
                        <a-icon slot="icon" type="shop" />
                    </a-step>
                    <a-step status="wait" :title="statusArr[2]">
                        <a-icon slot="icon" type="rocket" />
                    </a-step>
                    <a-step status="wait" :title="statusArr[3]">
                        <a-icon slot="icon" type="smile-o" />
                    </a-step>
                </a-steps>
            </div>
        </div>
        <div class="shopDetail">
            <div class="title">商品清单</div>
            <ul class="orderList">
                <li v-for="item in orderDetail.skus" :key="item.id">
                    <div class="image"><img :src="JSON.parse(item.imgs)[0].small"></div>
                    <div class="size">
                        <p class="type" style="color:#000;">{{item.title}}</p>
                        <p class="color">颜色：{{JSON.parse(item.param)[0]}}</p>
                        <p class="num">数量：{{item.num}}</p>
                    </div>
                    <div class="price">
                        <p class="final_price">￥ {{item.actual_price}}</p>
                        <p class="init_price">￥ {{item.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="address">
            <div>
                <li class="msg">收货人信息</li>
                <li> {{orderDetail.name}} </li>
                <li> {{orderDetail.tel}} </li>
                <li> {{orderDetail.address}} </li>
            </div>
            <div>
                <li class="msg">配送信息</li>
                <li> 配送方式：普通快递 </li>
                <li> 运费： ￥0 </li>
            </div>
            <div>
                <li class="msg">付款信息</li>
                <li>商品数量：{{shopNum}} </li>
                <li>商品总额：{{shopPrice[0]}} </li>
                <li>应付金额：{{shopPrice[1]}} </li>
            </div>
        </div>
    </div>

</template>

<script>
    import formDate from 'utils/formDate'
    import {
        getOrderDetail
    } from "network/getOrderDetail";
    export default {
        props: ['order_id', 'status'],
        data() {
            return {
                orderDetail: {},
                statusArr: ['待支付', '待发货', '正在派送', '已完成'],
                shopNum: 0,
                createDate: '',
                shopPrice: []
            }
        },
        methods: {
            async getDetail() {
                const res = await getOrderDetail({
                    order_id: this.order_id,
                    status: this.status
                })
                console.log(res.data);
                if (res.code == 200) this.orderDetail = res.data
            }
        },
        created() {
            this.getDetail()
        },

        watch: {
            orderDetail() {
                this.createDate = formDate(this.orderDetail.create_time)
                let arr = [0, 0];
                let num = 0
                this.orderDetail.skus.forEach(el => {
                    arr[0] += el.price
                    arr[1] += el.actual_price
                    num += el.num - 0
                })
                this.shopNum=num;
                this.shopPrice=arr
            }
        }
    }
</script>
<style scoped lang="less">
    .orderDetail {
        width: 60vw;
        margin: 0 auto;

        .shopDetail,
        .orderNow,
        .address {
            width: 100%;
            font-size: 15px;

            .title {
                margin-top: 4px;
                padding-left: 20px;
                height: 50px;
                font-size: 16px;
                line-height: 50px;
                background-color: #f5f5f5;
            }

            .orderList {
                width: 100%;
                padding: 20px;
                border: 1px solid #cccccc;
            }
        }

        .shopDetail {
            .orderList {
                li {
                    height: 120px;
                    display: flex;

                    .image,
                    .image img {
                        width: 100px;
                        height: 100px;
                        margin: 5px 10px;

                    }

                    .size {
                        width: 60%;
                        padding: 15px 10px;

                        P {
                            margin-top: 5px;
                            color: #999999;
                        }
                    }

                    .price {
                        padding: 5px;
                        width: 20%;
                        padding: 30px 10px;
                        text-align: end;

                        p {
                            margin: 5px;
                        }

                        .final_price {
                            font-size: 16px;
                            font-weight: bolder;
                        }

                        .init_price {
                            font-size: 14px;
                            color: #4c4c4c;
                            text-decoration: line-through #999999;
                        }
                    }
                }
            }

        }

        .address {
            display: flex;
            margin-top: 20px;
            padding: 40px;
            border: 1px solid #cccccc;

            div:nth-child(1) {
                width: 50%;
            }
            div:nth-child(2) {
                width: 20%;
            }
            div:nth-child(3) {
                width: 30%;
                padding-left: 150px;
            }
            li{
                color: #999999;
            }
            .msg{
                font-size: 18px;
                font-weight: bold;
                color: #000;
            }
            

        }
    }
</style>