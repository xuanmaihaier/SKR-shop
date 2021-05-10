<template>
    <div class="orderDetail">
        <div class="orderNow">
            <div class="title">订单号：{{orderDetail.code}} <span>{{createDate}}</span> </div>
            <div class="orderList orderList_">
                <div class="step">
                    <a-steps>
                        <a-step :status="step[0]" :title="statusArr[0]">
                            <a-icon slot="icon" type="pay-circle" />
                        </a-step>
                        <a-step :status="step[1]" :title="statusArr[1]">
                            <a-icon slot="icon" type="shop" />
                        </a-step>
                        <a-step :status="step[2]" :title="statusArr[2]">
                            <a-icon slot="icon" type="rocket" />
                        </a-step>
                        <a-step :status="step[3]" :title="statusArr[3]">
                            <a-icon slot="icon" type="smile-o" />
                        </a-step>
                    </a-steps>
                </div>
                <div class="orderOp">
                    <div v-if="!isBack">
                        <div>
                            <a-button type=danger v-if="!orderDetail.status" @click="payForOrder">立即付款</a-button>
                        </div>
                        <div>
                            <a-button type='link' v-if="!orderDetail.status" @click="delOrder">取消订单</a-button>
                        </div>
                        <div>
                            <a-button type='link' v-if="orderDetail.status==3">
                                已完成
                            </a-button>
                            <a-button type='danger' v-if="orderDetail.status>=1" @click="visible = true">退货</a-button>
                            <a-button type='primary' v-if="orderDetail.status==2" @click="takeGoods"
                                style="margin-left: 10px;">确认收货</a-button>
                        </div>

                    </div>
                    <div v-if="isBack">
                        退货中
                    </div>
                </div>
            </div>
        </div>
        <div class="shopDetail">
            <div class="title">商品清单</div>
            <ul class="orderList">
                <li v-for="item in orderDetail.skus" :key="item.id" @click="toDetail(item.id)">
                    <div class="image"><img :src="JSON.parse(item.imgs)[JSON.parse(item.imgs).length-1].small"></div>
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
        <div class="shopDetail" v-if="isBack">
            <div class="title">退货详情</div>
            <ul class="reason">
                <li>订单编号：{{orderDetail.id}}</li>
                <li>创建时间：{{createDate}}</li>
                <li>退货原因：{{backStockInfo.reason}}</li>
            </ul>
        </div>
        <div>
            <a-modal title="填写退款信息" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk"
                @cancel="handleCancel">
                <div>
                    退款原因：
                    <a-select default-value="请选择" style="width: 120px" @change="handleChange">
                        <a-select-option v-for="(item,index) in backStockReason" :key="index" :value='item'>
                            {{item}}
                        </a-select-option>
                    </a-select>
                </div>
                <div style="width:70%">
                    <a-textarea v-show='others' style="height:100px;margin:20px 74px;" v-model="otherReason">
                    </a-textarea>
                </div>
            </a-modal>
        </div>
        <div class="address">
            <div>
                <li class="msg">收货人信息</li>
                <li>姓名： {{orderDetail.name}} </li>
                <li>电话： {{orderDetail.tel}} </li>
                <li>地址： {{orderDetail.address}} </li>
            </div>
            <div>
                <li class="msg">配送信息</li>
                <li> 配送方式：{{orderDetail.ecp?orderDetail.ecp:'-------'}} </li>
                <li> 运单号：{{orderDetail.postid?orderDetail.postid:'-----'}} </li>
                <li> 运费： ￥{{orderDetail.postage?orderDetail.postage:'--'}} </li>
            </div>
            <div>
                <li class="msg">付款信息</li>
                <li>商品数量：{{shopNum}} </li>
                <li>商品总额：￥{{shopPrice[0]}} </li>
                <li>应付金额：￥{{shopPrice[1]}} </li>
            </div>
        </div>
    </div>

</template>

<script>
    import formDate from 'utils/formDate'
    import {
        getOrderDetail
    } from "network/getOrderDetail";
    import {
        deleteOrder
    } from "network/deleteOrder";
    import {
        getShopById
    } from 'network/getShopById';
    import {
        addBackStock
    } from 'network/backStock';
    import {
        getBackStockDetail
    } from "network/getBackStockDetail";
    import {
        updateOrder
    } from 'network/updateOrder'
    export default {
        props: ['order_id', 'status'],
        data() {
            return {
                orderDetail: {},
                status_:null,
                statusArr: ['待支付', '待发货', '等待收货', '已完成'],
                shopNum: 0,
                step: ['', '', '', ''],
                createDate: '',
                shopPrice: [],
                postData: {},
                visible: false,
                confirmLoading: false,
                backStockReason: ['多拍/错拍', '不想要了', '尺码/颜色错误', '地址错误', '其他'],
                reasonVal: '',
                otherReason: '',
                others: false,
                isBack: false,
                backStockInfo: {}
            }
        },
        methods: {
            async getDetail() {
                const res = await getOrderDetail({
                    order_id: this.order_id,
                    status: this.status
                })
                if (res.code == 200) {
                    this.orderDetail = res.data;
                    this.getBack();
                    this.getStep();
                }
                console.log(res.data);
            },
            async delOrder() {
                const res = await deleteOrder({
                    id: this.order_id
                });
                if (res.code == 200) {
                    console.log(res);
                    this.$message.success('成功取消订单');
                    setTimeout(() => this.$router.replace('/mypage'), 1500)
                }
            },
            async toDetail(sku_id) {
                const res = await getShopById({
                    id: sku_id
                });
                let id = res.data[0].spu_id;
                this.$router.push({
                    name: 'Details',
                    params: {
                        id
                    }
                })
            },
            async getBack() {
                const result = await getBackStockDetail({
                    order_id: this.order_id
                });
                if (result.data.reason) this.isBack = true;
                this.backStockInfo = result.data;
            },
            async handleOk() {
                if (!this.reasonVal) {
                    this.$message.error('请选择退款理由!');
                } else {
                    this.confirmLoading = true;
                    const res = await addBackStock({
                        order_id: this.orderDetail.id,
                        reason: this.reasonVal + this.otherReason,
                        money: this.orderDetail.money,
                        imgs: JSON.stringify(this.orderDetail.skus[0].imgs)
                    })
                    if (res.code == 200) {
                        this.$message.success('退货发起成功,等待商家处理');
                        this.getDetail();
                        this.visible = false;
                        this.confirmLoading = false;
                    }
                }
            },
            async takeGoods() {
                const res = await updateOrder({
                    id: this.order_id,
                    status: 3
                });
                if (res.code == 200) {
                    this.$message.success('已经确认收货');
                    this.getDetail();
                    this.status_=3
                }
            },
            getStep() {
                this.step.forEach((item, index) => {
                    this.step[index] = index < this.status_ ? 'finish' : 'wait'
                })
                this.step[this.status_] = 'process';
            },
            handleChange(value) {
                this.others = value == '其他' ? true : false;
                this.reasonVal = value
            },
            handleCancel(e) {
                this.visible = false;
            },
            payForOrder() {
                let buyShopList = [];
                this.orderDetail.skus.forEach((item, index) => {
                    let obj = {};
                    obj.customer_id = sessionStorage.userId;
                    obj.id = index + '*';
                    obj.img = JSON.parse(item.imgs)[JSON.parse(item.imgs).length - 1].small;
                    obj.num = item.num;
                    obj.params = JSON.parse(item.param).push('x');
                    obj.price = item.price;
                    obj.sku_id = item.id;
                    obj.store_id = 1;
                    obj.special_price = item.actual_price;
                    obj.title = item.title;
                    buyShopList.push(obj)
                })
                localStorage.buyShopList1 = JSON.stringify(buyShopList)
                this.$router.push('/payTotal')
            }
        },
        created() {
            this.getDetail();
            this.status_=this.status
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
                this.shopNum = num;
                this.shopPrice = arr;
            }
        }
    }
</script>
<style scoped lang="less">
    .orderDetail {
        width: 60vw;
        margin: 30px auto;

        .shopDetail,
        .orderNow,
        .address {
            width: 100%;
            font-size: 15px;

            .title {
                margin-top: 4px;
                padding: 0 20px;
                height: 50px;
                font-size: 16px;
                line-height: 50px;
                background-color: #f5f5f5;
                display: flex;
                justify-content: space-between;
            }

            .orderList {
                width: 100%;
                padding: 20px;
                border: 1px solid #cccccc;
            }

        }

        .shopDetail {
            .reason {
                width: 100%;
                padding: 20px;
                border: 1px solid #cccccc;

                li {
                    margin: 4px 0;
                }
            }

            .orderList {
                li {
                    cursor: pointer;
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

            li {
                color: #999999;
                margin-bottom: 5px;
            }

            .msg {
                font-size: 18px;
                font-weight: bold;
                color: #000;
                margin-bottom: 20px;
            }
        }

        .orderList_ {
            display: flex;
            justify-content: space-between;
            height: 150px;

            .step {
                width: 70%;
                padding-top: 40px;
            }

            .orderOp {
                border-left: 1px solid #ccc;
                width: 20%;
                padding-top: 40px;
                text-align: center;

                button {
                    padding: 0 10px;
                }
            }
        }
    }
</style>