<template>
  <div class="Order">
    <a-radio-group name="radioGroup" :default-value="2">
      <h1>请选择支付方式</h1>
      <div class="type">
        <div class="wechat">
          <a-radio :value="1" :default-checked="false" disabled></a-radio>
          <img
            src="~assets/img/order/wecart.jpeg"
            width="180px"
            height="150px"
            alt=""
          />
        </div>
        <div class="alipay">
          <a-radio :value="2"></a-radio>
          <img
            src="~assets/img/order/alipay.jpeg"
            width="180px"
            height="120px"
            alt=""
          />
        </div>
      </div>
    </a-radio-group>
    <div class="content">
      <div><p>订单号：</p></div>
      <div><p>收件人：</p></div>
      <div><p>地址：</p></div>
      <div><p>总件数：</p></div>
      <div><p>总价格：</p></div>
    </div>
    <div class="Submit">
      <a-button type="primary" html-type="submit">立即支付</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.Order {
  width: 80%;
  margin: 50px auto;
  .type {
    display: flex;
    align-items: center;
  }
  .content {
    padding: 40px 0;
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
    div {
      display: flex;
    }
  }
  .Submit{
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .ant-btn-primary{
      padding: 0 5px;
    }
  }
}
</style>