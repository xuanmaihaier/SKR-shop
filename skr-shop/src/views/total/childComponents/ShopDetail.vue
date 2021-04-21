<template>
    <div class="shopDetail">
        <div class="title">商品明细 (共{{shopNum}}件)</div>
        <ul class="orderList">
            <li v-for="item in shopDetail" :key="item.id">
                <div class="image"><img :src="item.img"></div>
                <div class="size">
                    <p class="type" style="color:#000;">{{item.title}}</p>
                    <p class="color">颜色：{{item.params[0]}}，尺码：{{item.params[1]}}</p>
                    <p class="num">数量：{{item.num}}</p>
                </div>
                <div class="price">
                    <p class="final_price">￥ {{item.special_price}}</p>
                    <p class="init_price">￥ {{item.price}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                shopDetail:[]
            }
        },
        created() {
            if(localStorage.buyShopList1) this.shopDetail=JSON.parse(localStorage.buyShopList1)
        },
        computed:{
            shopNum(){
                let num = 0
                this.shopDetail.forEach(element => {
                    num+=element.num-0
                });
                return num
            }
        }
    }
</script>

<style scoped lang="less">
    .shopDetail {
        width: 100%;
        font-size: 15px;

        .title {
            margin-top: 4px;
            padding-left: 20px;
            height: 50px;
            font-size: 16px;
            line-height: 50px;
            background-color: #4c4c4c;
            color: #fff;
        }

        .orderList {
            width: 100%;
            padding: 20px;
            border: 1px solid #cccccc;

            li {
                height: 120px;
                display: flex;
                .image,.image img {
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
</style>
