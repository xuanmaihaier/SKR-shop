<template>
    <div id="address_detail" v-show="isShow">
        <div class="title">
            <h2>收货地址</h2>
            <div class="cancel" @click="$emit('closeAdd')">
                <a-icon type="close-circle" />
            </div>
        </div>
        <div class="info">
            <div>
                收货人 <span style="color: red">*</span>
                <a-input placeholder="姓名" v-model="username" />
            </div>
            <div>
                手机号码 <span style="color: red">*</span>
                <a-input placeholder="手机号码" v-model="userPhone" />
            </div>
        </div>
        <div class="address_item">
            <div>
                国家/地区 <span style="color: red">*</span>
            </div>
            <div>
                省/直辖市 <span style="color: red">*</span>
            </div>
            <div>
                市 <span style="color: red">*</span>
            </div>
            <div>
                区/县 <span style="color: red">*</span>
            </div>
        </div>
        <div>
            <a-select :default-value="'中国大陆'" style="width: 120px">
                <a-select-option value="中国大陆">
                    中国大陆
                </a-select-option>
            </a-select>
            <a-select v-model="provinceCode" style="width: 120px" @change="provinceChange(provinceCode)">
                <a-select-option v-for="(province,code) in provinces" :value="code" :key="code">
                    {{province.name}}
                </a-select-option>
            </a-select>

            <a-select v-model="cityCode" style="width: 120px" @change="cityChange(cityCode)">
                <a-select-option v-for="(city,code) in cities" :value="code" :key="code">
                    {{ city.name }}
                </a-select-option>
            </a-select>

            <a-select v-model="areaCode" style="width: 120px" @change="areaChange">
                <a-select-option v-for="(area,code) in areas" :value="code" :key="code">
                    {{ area }}
                </a-select-option>
            </a-select>
        </div>
        <div class="detail_address">
            <div>详细地址 <span style="color: red">*</span></div>
            <a-input placeholder="详细地址" v-model="detailAddress" />
        </div>
        <div class="default">
            <input type="checkbox" id="default" v-model="prime" :value="1">
            <label for="default">设置为默认地址</label>
        </div>
        <div class="submit">
            <a-button @click="$emit('closeAdd')">返回</a-button>
            <a-button class="sure" @click="saveAddress">保存地址</a-button>
        </div>
    </div>
</template>

<script>
    import {
        addressData
    } from "@/plugins/addressData/data";
    import Vue from "vue";

    export default {
        props: {
            isShow: Boolean,
            editor: Object,
            addOrEditor: Boolean,
            id: Number,
        },
        name: "addressAdd",
        data() {
            return {
                username: '',
                userPhone: '',
                provinces: addressData,
                cities: '',
                areas: '',
                provinceCode: '请选择',
                cityCode: '请选择',
                areaCode: '请选择',
                detailAddress: '',
                flag: false,
                prime: false,
            }
        },
        created() {
            if (this.editor) {
                this.flag = true;
                this.username = this.editor.name;
                this.userPhone = this.editor.tel;
                this.prime = this.editor.prime;
            }
        },
        methods: {
            provinceChange(value) {
                this.cities = this.provinces[value].child;
                this.cityCode = '请选择';
                this.areaCode = '请选择'
            },
            cityChange(value) {
                this.areas = this.cities[value].child;
                this.areaCode = '请选择';
            },
            areaChange() {
                this.flag = true;
            },
            getName(id) {
                let addressObj = {
                    province: addressData[this.provinceCode].name,
                    city: addressData[this.provinceCode].child[this.cityCode].name,
                    area: addressData[this.provinceCode].child[this.cityCode].child[this.areaCode],
                    detailAddress: this.detailAddress
                }
                let address = '';
                console.log(addressObj)
                Object.keys(addressObj).forEach(item => {
                    address += addressObj[item] + '-'
                })
                address = address.substr(0, address.length - 1);
                return {
                    id,
                    customer_id: sessionStorage.getItem('userId'),
                    name: this.username,
                    tel: this.userPhone,
                    address,
                    prime: this.prime
                }
            },
            saveAddress() {
                if (this.username && this.userPhone && this.flag && this.detailAddress) {
                    console.log(this.addOrEditor)
                    this.addOrEditor ? this.$store.dispatch('update', this.getName(this.id)) : this.$store.dispatch(
                        'add', this.getName())
                        this.username = '';
                this.userPhone = '';
                this.detailAddress = '';
                }
            }
        },
    }
</script>

<style scoped lang="less">
    #address_detail {
        position: fixed;
        width: 700px;
        height: 460px;
        background-color: #fff;
        box-shadow: 2px 2px 5px #cccccc;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        padding: 20px;

        input {
            border: 1px solid #000;
            border-radius: 0;
        }

        /deep/ .ant-select-selection {
            border: 1px solid #000;
            margin-right: 10px;
            border-radius: 0;
        }

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

        .info {
            display: flex;
            padding: 20px 0;

            div {
                width: 240px;
                margin-right: 30px;

                input {
                    margin: 10px 10px 0 0;
                }
            }
        }

        .address_item {
            display: flex;

            div {
                width: 110px;
                margin: 0 10px 15px 0;
            }
        }

        .detail_address {
            padding: 20px 0;

            input {
                width: 500px;
                margin-top: 10px;
            }
        }

        .default {
            input {
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }

            label {
                margin-left: 10px;
                vertical-align: middle;
            }
        }

        .submit {
            height: 80px;
            width: 700px;
            position: absolute;
            left: 0;
            bottom: 0;
            line-height: 80px;
            text-align: end;
            border-top: 2px solid #e6e6e6;
            margin-top: 10px;

            button {
                padding: 0 25px;
                height: 40px;
                line-height: 38px;
                border: 1px solid #979797;
                border-radius: 0;
                margin-right: 10px;
            }

            .sure {
                background-color: #4c4c4c;
                color: #ffffff;
            }
        }
    }
</style>
