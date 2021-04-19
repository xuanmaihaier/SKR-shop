<template>
    <div class="topseller_list">
        <div class="lst_bottom">
            <ul>
                <li v-for="(item, index) in imgBottomList" :key="index" @click="toDetail(item.id)">
                    <span class="icon_best">
                        <strong>{{ 8 + index }}</strong>
                    </span>
                    <img :src="item.img" alt="" />
                    <div class="textMax">
                        <div class="text_wrap">
                            <div class="brand">Dunst for WOMEN</div>
                            <div class="front">[04/23 예약배송]</div>
                            <div class="product">
                                HALF-SLEEVES BELTED SUMMER-WOOL JACKET SOFT
                                GREIGE_UDJA1E211G1
                            </div>
                        </div>
                        <div class="price">
                            <span class="discount_price">37,800</span>
                            <span class="base_price">42,000</span>
                            <span class="discount_rate">10%</span>
                        </div>
                        <p class="reservation">预定</p>
                        <div class="review_box">
                            <div class="graph">
                                <span class="inner" style="width: 98%"></span>
                            </div>
                            <div class="review_count"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getImg } from "network/getImg.js";
export default {
    data(){
        return {
            imgBottomList:[],
            bottomListAll:[]
        }
    },
    props: {
        listBottom: {
            type: String,
            defalut: ""
        },
    },
    methods:{
        async getImg_(parent_name,start,end){
            const res = await getImg({parent_name,start,end});
            if(this.listBottom == "All"){
                this.bottomListAll = res;
                this.imgBottomList = res;
            }else{
                this.imgBottomList = res;
            }
            
        },
        toDetail(id){
            this.$router.push(`/details/${id}`)
        }
    },
    created(){
        if(this.listBottom == "All"){
            let arr = ["鞋类"];
            arr.forEach(item => {
                this.getImg_(item,8,98,'price')
            });
        }else{
            this.getImg_(this.listBottom,8,98)
        }
        
    },
    watch:{
        listBottom(){
            if(this.listBottom == "All"){
                this.bottomListAll = this.imgBottomList
            }else{
                this.getImg_(this.listBottom,8,98)
            }
            
        }
    }
};
</script>

<style lang="less" scoped>
.topseller_list {
    width: 82%;
    margin: 0 auto;
    .lst_bottom {
        margin-top: 60px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        margin-right: -22px;
        li {
            width: calc((100% - 20px * 6) / 6);
            margin-right: 20px;
            position: relative;
            .icon_best {
                width: 35px;
                height: 35px;
                background: #666;
                position: absolute;
                text-align: center;
                line-height: 30px;
                top: 0;
                left: 0;
                strong {
                    color: white;
                    display: block;
                    margin-top: 4px;
                    font-size: 16px;
                }
                p {
                    font-size: 14px;
                    color: white;
                    text-align: center;
                    font-family: "ProximaNova-Regular";
                }
            }
            img {
                width: 100%;

            }
            .textMax {
                width: 100%;
                height: 186px;
                .text_wrap {
                    height: 91px;
                    .brand {
                        color: #000000;
                        font-size: 13px;
                        margin-bottom: 10px !important;
                        font-family: "yg750";
                        width: auto;
                    }
                    .front {
                        color: #000000;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        line-height: 14px;
                        margin-bottom: 9px;
                        padding-top: 3px;
                    }
                    .product {
                        font-size: 12px;
                        height: 30px;
                        line-height: 15px;
                        color: #555;
                        overflow: hidden;
                        margin-bottom: 16px;
                    }
                }
                .price {
                    position: relative;
                    font-family: "ProximaNova-Regular";
                    line-height: 100%;
                    margin-bottom: 10px;
                    .discount_price {
                        font-size: 16px;
                        color: #000 !important;
                        margin-right: 8px;
                    }
                    .base_price {
                        font-size: 12px;
                        color: #808080;
                        text-decoration: line-through;
                    }
                    .discount_rate {
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        font-size: 14px;
                        color: #ff4000;
                    }
                }
                .reservation {
                    border: 1px solid #9b9b9b;
                    font-size: 12px;
                    text-align: center;
                    line-height: 18px;
                    width: 30px;
                    height: 18px;
                    color: #b2b2b2;
                    box-shadow: 1px 1px 2px #9b9b9b;
                }
            }
        }
    }
}
</style>