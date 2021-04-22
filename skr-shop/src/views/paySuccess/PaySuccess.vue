<template>
    <div class="paySuccess">
        <div class="container">
            <div class="success">
                <div>
                    <a-icon style="color:green;" type="check-circle" /> 支付成功
                    <div>{{time}}秒之后返回首页</div>
                </div>
                <div>
                    <a-button>返回首页 {{time}}</a-button>
                    <a-button @click="$router.replace('/mypage')">查看订单</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        updateOrder
    } from 'network/updateOrder'
    export default {
        data() {
            return {
                time: 5,
            }
        },
        created() {
            this.backIndex();
            let orderIds = JSON.parse(localStorage.getItem('idLocal'));
            orderIds.forEach(element => {
                console.log(element);
                updateOrder({
                    id: element,
                    status: 1
                }).then(res => {
                    if (res.code == 200) {
                        localStorage.removeItem('idLocal')
                        localStorage.removeItem('buyShopList1')
                    }
                })
            });

        },
        methods: {
            backIndex() {
                let timer = setInterval(() => {
                    this.time--
                    if (this.time == 0) {
                        clearInterval(timer);
                        this.$router.replace('/home')
                    }
                }, 1000)
            }
        },
    }
</script>
<style lang="less">
    .paySuccess {
        height: 470px;

        .container {
            width: 600px;
            margin: 0 auto;
            height: 100%;
            position: relative;

            .success {
                padding-top: 100px;
                text-align: center;

                div {
                    font-size: 20px;
                    margin-top: 30px;

                    button {
                        margin-left: 20px;
                    }
                }

            }
        }
    }
</style>