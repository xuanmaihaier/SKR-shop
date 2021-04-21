<template>
    <div>
        <div class="address">
            <h1>结算</h1>
            <div class="empty" v-if="!$store.state.addAddress.addressList.length">
                <div>收货地址</div>
                <div class="add" @click="isShow=true">
                    <a-icon type="plus-circle"/>
                    新增收货地址
                </div>
            </div>
            <div class="not-empty" v-if="$store.state.addAddress.addressList.length">
                <div class="title">收货地址</div>
                <div class="content">
                    <div class="defaultAddress">
                        <div><span>收货人： </span> {{consignee}}</div>
                        <div><span style=" margin-right: 20px;">地址： </span> {{address}}</div>
                    </div>
                    <div class="right">
                        <div class="d_address" v-if="nowAddress.prime">默认地址</div>
                        <div class="defaultContent" @click="showMore=true">
                            <div class="editor">编辑</div>
                            <div>/</div>
                            <div class="more">更多</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AddressAdd :isShow="isShow" @closeAdd="chooseAddress"></AddressAdd>
        <div class="moreContent" v-show="showMore">
            <div class="title">
                <h2>选择您的收货地址</h2>
                <div class="cancel" @click="showMore=false">
                    <a-icon type="close-circle"/>
                </div>
            </div>
            <li v-for="(item,index) in addressData" :key="index">
                <div class="checkRa">
                    <input type="radio" name="address" v-model="selectAddress" :value="index">
                </div>
                <div class="defaultAddress">
                    <div><span>收货人： </span> {{item.name+'-'+item.tel}} <span class="d_address"
                                                                             v-if="item.prime">默认地址</span></div>
                    <div><span style=" margin-right: 20px;">地址： </span> {{item.address}}</div>
                </div>
                <div class="right">
                    <div @click="isEditor=true,num=index,addOrEditor=true">编辑</div>
                    <div v-if="!item.prime" @click="setDefault(index)">设为默认地址</div>
                </div>
                <AddressAdd :editor="item"
                            :id="item.id"
                            :addOrEditor="addOrEditor"
                            :isShow="isEditor&&index==num?true:false"
                            @closeAdd="editorAddress">
                </AddressAdd>
            </li>
            <div class="submit">
                <div class="add" @click="showMore=false,isShow=true">
                    <a-icon type="plus-circle"/>
                    新增收货地址
                </div>
                <a-button class="sure" @click="changeAddress">确认</a-button>
            </div>
        </div>
    </div>
</template>
<script>
    import AddressAdd from "components/common/address/AddressAdd";

    export default {
        components: {AddressAdd},
        data() {
            return {
                isShow: false,
                showMore: false,
                isEditor: false,
                addOrEditor: false,
                nowAddress: {},
                selectAddress: 0,
                consignee: '',
                address: '',
            }
        },
        methods: {
            dealConsignee(data) {
                return (data.name + '-' + data.tel)
            },
            chooseAddress() {
                if (this.$store.state.addAddress.addressList.length) {
                    this.isShow = false;
                    this.showMore = true
                    this.addOrEditor = false
                }
            },
            editorAddress() {
                if (this.$store.state.addAddress.addressList.length) {
                    this.isEditor = false;
                    this.showMore = true;
                    this.addOrEditor = false
                }
            },
            changeAddress() {
                this.consignee = this.dealConsignee(this.addressData[this.selectAddress])
                this.address = this.addressData[this.selectAddress].address
                this.nowAddress = this.addressData[this.selectAddress]
                this.$message.success('修改成功!');
                setTimeout(() => this.showMore = false, 1000)
            },
            setDefault(index){
                this.$store.dispatch('setDefault',{
                    id:this.addressData[index].id,
                    prime:1,
                    customer_id:this.addressData[index].customer_id
                })
            }
        },
        created() {
            this.$store.dispatch('get');
        },
        computed: {
            addressData() {
                if (this.$store.state.addAddress.addressList.length)
                    return this.$store.state.addAddress.addressList
            },
        },
        watch: {
            addressData() {
                let address = this.addressData.filter(item => item.prime == true);
                this.nowAddress = address[0];
                this.consignee = this.dealConsignee(address[0])
                this.address = address[0].address
            }
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

        .not-empty {
            font-size: 16px;
            .title {
                color: #fff;
                width: 100%;
                height: 50px;
                line-height: 50px;
                padding: 0 20px;

                background-color: #4c4c4c;
            }

            .content {
                border: 1px solid #cccccc;
                display: flex;
                justify-content: space-between;

                .defaultAddress {
                    padding: 20px 25px;
                    width: 85%;
                    height: 100px;

                    div {
                        height: 30px;
                        line-height: 30px;

                        span {
                            color: #999999;
                            margin-right: 10px;
                        }
                    }
                }

                .right {
                    height: 100%;
                    padding-top: 30px;

                    .d_address {
                        background-color: #000;
                        color: #ffffff;
                        font-size: 12px;
                        width: 55px;
                        padding: 2px;
                        border-radius: 2px;
                    }

                    .defaultContent {
                        display: flex;
                        font-size: 15px;
                        color: #999999;

                        div {
                            margin-right: 5px;
                            cursor: pointer;
                        }

                    }
                }
            }
        }
    }

    .moreContent {
        position: fixed;
        width: 700px;
        /*height: 460px;*/
        background-color: #fff;
        box-shadow: 2px 2px 5px #cccccc;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        padding: 20px;

        .title {
            display: flex;
            justify-content: space-between;
            width: 100%;
            border-bottom: 2px solid #e6e6e6;

            div {
                font-size: 20px;
                cursor: pointer;
            }

            h2 {
                height: 50px;
            }
        }

        li {
            border-bottom: 2px solid #e6e6e6;
            display: flex;

            .checkRa {
                line-height: 100px;

                input {
                    width: 15px;
                    height: 15px;
                }
            }

            .defaultAddress {
                padding: 20px 25px;
                width: 85%;
                height: 100px;

                .d_address {
                    background-color: #000;
                    color: #ffffff;
                    font-size: 12px;
                    width: 55px;
                    padding: 2px;
                    border-radius: 2px;
                }

                div {
                    height: 30px;
                    line-height: 30px;

                    span {
                        color: #999999;
                        margin-right: 10px;
                    }
                }
            }

            .right {
                height: 100px;
                padding-top: 30px;
                div{
                    cursor: pointer;
                }
            }
        }

        .submit {
            height: 50px;
            width: 100%;
            line-height: 50px;
            text-align: end;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            button {
                padding: 0 25px;
                height: 40px;
                line-height: 38px;
                border: 1px solid #979797;
                border-radius: 0;
                margin: 10px 10px;
            }

            .sure {
                background-color: #4c4c4c;
                color: #ffffff;
            }
        }
    }

</style>
