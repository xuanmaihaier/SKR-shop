<template>
  <div class="myPageMain">
    <div class="activityImg" @click="goHome">
      <img src="https://image.wconcept.co.kr/images/builder/1/4/138/315/PC_mypage_1240x100_1_20210226162046.jpg" alt />
    </div>
    <div class="tableTitle">
      <h3>最近订单</h3>
      <span>more+</span>
    </div>
    <table class="cols">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
        <col style="width: 10%" />
        <col style="width: 10%" />
        <col style="width: 10%" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="(item, index) in theadTitle" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="1">
          <td colspan="7" class="noData" v-if="!orderList.length">
            <a-empty />
          </td>
        </tr>
        <tr v-for="(order,index) in orderList" :key="index"
          @click="$router.push({name:'orderDetail',params:{order_id:order.id,status:order.status}})">
          <td> {{order.order_create_time}} </td>
          <td> {{order.code}} </td>
          <td class="order_title"> {{order.skus[0].title}}{{order.skus.length==1?'':"等"+order.skus.length+'件商品'}} </td>
          <td> {{order.skus.length}} </td>
          <td> {{order.money}} </td>
          <td> {{statusArr[order.status]}} </td>
        </tr>
      </tbody>
    </table>
    <div class="myAddress tableTitle">
      <h3>我的地址</h3>
      <div class="addAddress">
        <button @click="addressShow=true">+</button>
        <small>新增地址</small>
      </div>
    </div>
    <table class="cols">
      <colgroup>
        <col style="width: 135px" />
        <col />
        <col style="width: 130px" />
        <col style="width: 130px" />
      </colgroup>
      <thead>
        <tr>
          <th>收货人姓名</th>
          <th>收货人地址</th>
          <th>收货人电话</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="!addresses">
          <td colspan="4" class="noData">
            <a-empty />
          </td>
        </tr>
        <tr v-for="(item,index) in addresses" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.address}}
            <span class="defaultStyle" v-if="item.prime">默认地址</span>
            <span class="setDefaultStyle" v-if="!item.prime" @click="setDefault(index)">设为默认</span>
          </td>
          <td>{{item.tel}}</td>
          <td style="display:flex;">
            <div class="delAddress" @click="delAddressBtn(item.id)">删除</div>
            <div class="ediAddress" @click="isEditor=true,num=index,addOrEditor=true">编辑</div>
          </td>
          <AddressAdd :editor="item" :id="item.id" :addOrEditor="addOrEditor" :isShow="isEditor&&index==num?true:false"
            @closeAdd="editorAddress">
          </AddressAdd>
        </tr>
      </tbody>
    </table>
    <AddressAdd :isShow="addressShow" @closeAdd="addOrEditor=false,addressShow=false" />

  </div>
</template>

<script>
  import AddressAdd from "@/components/common/address/AddressAdd.vue";
  import {
    getUserOrder
  } from 'network/getUserOrder';
  import formDate from 'utils/formDate'
  import {
    Result
  } from 'ant-design-vue';
  const theadTitle = [
    "订单日期",
    "订单号",
    "商品信息",
    "数量",
    "商品价格",
    "进度",
  ];
  export default {
    name: "MyPageMain",
    components: {
      AddressAdd
    },
    data() {
      return {
        theadTitle,
        addressShow: false,
        isEditor: false,
        num: 0,
        addOrEditor: false,
        orderList: [],
        statusArr: ['待支付', '待发货', '等待收货', '已完成']
      };
    },
    mounted() {
      this.$store.dispatch('get');
      console.log('执行');
      this.orderList = []
      this.getOrder()
    },
    methods: {
      goHome() {
        this.$router.push("/home");
      },
      delAddressBtn(id) {
        this.$store.dispatch('del', id)
      },
      ediAddressBtn(id) {
        this.$store.dispatch('update', id)
      },
      editorAddress() {
        if (this.$store.state.addAddress.addressList.length) {
          this.isEditor = false;
          this.showMore = true;
          this.addOrEditor = false;
        }
      },
      setDefault(index) {
        this.$store.dispatch('setDefault', {
          id: this.addresses[index].id,
          prime: 1,
          customer_id: this.addresses[index].customer_id
        })
      },
      async getOrder() {
        const res = await getUserOrder({
          customer_id: sessionStorage.userId
        });
        if (res.code == 200) {
          let result = res.data.map(item => {
            item.order_create_time = formDate(item.order_create_time);
            item.update_time = formDate(item.update_time);
            return item
          })
          this.orderList = result
        }
      }
    },
    computed: {
      addresses() {
        let list = this.$store.state.addAddress.addressList
        if (list.length) return list
      }
    },
    watch: {
      $route(to, from) {
        this.getOrder()
      }
    }
  };
</script>
<style lang="less" scoped>
  .myPageMain {
    margin: 0 auto;
    width: 1240px;
    margin-bottom: 180px;

    .activityImg {
      margin-bottom: 60px;
      cursor: pointer;
    }

    .tableTitle {
      position: relative;
      width: 100%;
      height: 36px;

      h3 {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 24px;
        color: #000;
        font-family: "ProximaNova-Light", "yg740";
        line-height: 1em;
      }

      span {
        position: absolute;
        bottom: 8px;
        right: 0;
        line-height: 1em;
        padding-right: 9px;
        font-size: 16px;
        color: #000;
        font-weight: 300;
      }
    }

    .myAddress {
      .addAddress {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;

        button {
          width: 30px;
          height: 30px;
          border-radius: 19px;
          color: #fff;
          background-color: #000;
          border: none;
          outline: none;
          font-size: 18px;
          cursor: pointer;
        }

        small {
          font-size: 24px;
        }
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-top: 2px solid #171717;
      border-bottom: 1px solid #171717;
      table-layout: fixed;
      margin-bottom: 60px;


      thead {
        tr {
          th {
            height: 68px;
            font-family: "yg750";
            font-size: 14px;
            padding: 0 14px;
            color: #000;
            vertical-align: middle;
            border-bottom: 1px solid #b5b5b5;
          }
        }
      }

      tbody {
        tr {
          td {
            font-family: "ProximaNova-Light", "yg740";
            // text-align: center;
            vertical-align: middle;
            padding: 14px;
            cursor: pointer;

            &.noData {
              height: 150px;
              color: #333;
              font-size: 14px;
            }

            .defaultStyle,
            .setDefaultStyle {
              margin-left: 10px;
              background-color: #000;
              color: #fff;
              padding: 3px;
              border-radius: 4px;
              cursor: pointer;
            }

            .setDefaultStyle {
              background-color: #fff;
              color: #000;
              border: 1px solid #999999;
            }

            .delAddress,
            .ediAddress {
              width: 50px;
              height: 30px;
              margin-right: 10px;
              color: #000;
              background-color: #fff;
              border: 1px solid #000;
              text-align: center;
              line-height: 30px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>