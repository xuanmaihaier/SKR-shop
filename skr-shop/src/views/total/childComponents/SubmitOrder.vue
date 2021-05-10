<template>
    <div class="order_total">
        <div class="Order">
            <h1>请选择支付方式</h1>
            <div class="type">
                <div class="wechat">
                    <img src="~assets/img/order/wecart.jpeg" width="180px" height="150px" alt="" />
                </div>
                <div class="alipay">
                    <img src="~assets/img/order/alipay.jpeg" width="180px" height="120px" alt="" />
                </div>
            </div>
        </div>
        <ul>
            <li class="title">商品小计</li>
            <li><span>商品总价：</span> <span>￥ {{total}}</span></li>
            <li><span>优惠：</span> <span>￥ {{difference}}</span></li>
            <li><span>其他：</span><span>+￥0</span></li>
            <li class="pay">
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
    import {
        payOrder
    } from "network/payOrder";
    import {
        addOrder
    } from "network/reqAddOrder"

    export default {
        name: "",
        data() {
            return {
                orderDetail: []
            }
        },
        mounted() {
            if (localStorage.buyShopList1) this.orderDetail = JSON.parse(localStorage.buyShopList1);
        },
        methods: {
            getOrderTotal(str) {
                let result = 0
                this.orderDetail.forEach(item => {
                    result += (item[str] - 0)*item['num'];
                })
                return result
            },
            submitOrder() {
                // 分店铺提交订单
                let store_id_list = []
                this.orderDetail.forEach(item => {
                    store_id_list.push(item.store_id)
                })
                store_id_list = [...new Set(store_id_list)];
                let order = [];
                store_id_list.forEach(el => {
                    let type = {};
                    type.store_id = el;
                    type.skus = [];
                    type.money = 0
                    this.orderDetail.forEach(item => {
                        if (item.store_id == el) {
                            let obj = {}
                            type.money += item.special_price - 0
                            obj.sku_id = item.sku_id;
                            obj.price = item.price;
                            obj.actual_price = item.special_price;
                            obj.num = item.num
                            type.skus.push(obj)
                        }
                    })
                    order.push(type)
                })
                let idLocal = [];
                order.forEach((item, index) => {
                    //设置code订单编号(不能重复)
                    let code = this.getCookie('username') + index + sessionStorage.userId + Date.now();
                    addOrder({
                        code,
                        store_id: item.store_id,
                        customer_id: sessionStorage.userId,
                        money: this.total,
                        skus: JSON.stringify(item.skus)
                    }).then(res => {
                        if (res.code == 200) {
                            idLocal.push(res.orderId)
                            localStorage.setItem('idLocal', JSON.stringify(idLocal))
                        }
                    })
                })
                // 跳转支付宝
                payOrder({
                    outTradeNo: this.getCookie('username') + sessionStorage.userId + Date.now(),
                    totalAmount: this.discounts,
                    subject: this.getCookie('username') + "'s shopping order",
                    body: this.getCookie('username') + `is paying for ${this.orderDetail[0].title} ...`,
                }).then(res => {
                    if (res.code == 200) {
                        this.$message.success('jumping to alipay page');
                        setTimeout(() => location.replace(res.data), 1000)
                    }
                })
                //删除购物车
                this.orderDetail.forEach(item => {
                    this.$store.dispatch('deleteSqlShop',{id:item.id})
                })
            }
        },
        computed: {
            total() {
                return this.getOrderTotal('price')
            },
            discounts() {
                return this.getOrderTotal('special_price')
            },
            difference() {
                return this.total - this.discounts
            },
        }
    }
</script>

<style scoped lang="less">
    .order_total {
        width: 25vw;
        margin-top: 82px;
        padding: 0 20px;

        .Order {
            width: 100%;
            margin: 50px auto;

            .type {
                display: flex;
                align-items: center;

                div {
                    margin-top: 10px;
                    width: 180px;
                    height: 120px;
                    overflow: hidden;
                }

                .wechat {
                    height: 120px;
                    overflow: hidden;

                    img {
                        position: relative;
                        top: -20px;
                    }

                    cursor: not-allowed;
                }

                .alipay {
                    border: 2px #999999 solid
                }
            }
        }

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

                button {
                    width: 140px;
                    background-color: #ed4025;
                    height: 40px;
                    margin-top: 30px;
                    border-radius: 0;
                }

                .payPrice {
                    line-height: 0;
                    font-size: 18px;
                    font-weight: bolder;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
