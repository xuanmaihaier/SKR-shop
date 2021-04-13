<template>
  <div class="footer">
    <!-- 底部 -->
    <div class="footerNav">
      <!-- 底部导航栏 -->
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="2.4" v-for="(item, index) in footer_list" :key="index">
          <p
            class="height-100 footer_bar"
            type="flex"
            justify="space-around"
            align="middle"
            @click="footerNavList(index)"
          >
            <!-- 底部列表 -->
            <a href="javascript:;">{{ item }}</a>
          </p>
        </a-col>
      </a-row>
    </div>
    <!-- 底部信息 -->
    <div class="footerMsg">
      <a-row>
        <!-- 底部左侧 -->
        <a-col :span="12" class="footMsg_left">
          <p>商店名称</p>
          <p>
            Concept Korea
            Co.，Ltd.ㅣ代表：李恩哲ㅣ地址：首尔特别市江南区德黑兰路14街5楼16号（灵山洞线大楼）
          </p>
          <a href="javascript:;">
            <span>确认业务信息</span>
          </a>
          <p>
            │个人信息保护官：许善熙│托管服务：W Concept Korea Co.，Ltd.
            <span>Co.，Ltd.保留所有权利 </span>
          </p>
        </a-col>
        <!-- 底部右侧 -->
        <a-col :span="12" class="footMsg_right">
          <p>消费者损害赔偿保险</p>
          <p>
            客户在以现金支付安全交易时可以使用Wconcept订阅的<span>
              消费者损害赔偿保险服务。
            </span>
          </p>
          <p>赔偿对象：不送/退货，拒绝退款/商场破产</p>
          <a href="javascript:;"><span>检查服务订阅事实</span></a>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer_list: [
        "关于我们",
        "咨询服务",
        "合租伙伴查询",
        "服务条款",
        "隐私政策",
        "服务中心",
        "招聘信息",
        "全球的",
      ],
      followRoutes: [
        "/about",
        "/advisory",
        "/partner",
        "/privacy",
        "/serviceCenter",
        "/terms",
        "/offers",
        "/global",
      ],
    };
  },
  methods: {
    footerNavList(val) {
      this.$router.push(this.followRoutes[val]);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.footerNav {
  width: 100%;
  height: 60px;
  background-color: #848484;
}
/deep/ [data-v-17729fb8] .ant-row-flex-middle {
  width: 80%;
  margin: 0 auto;
}
.footer_bar {
  min-width: 110px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
}
.footer_bar:hover {
  background-color: #636262;
  cursor: pointer;
}
.footer_bar:hover.footer_bar > a {
  color: rgb(209, 209, 202);
}
// 底部导航栏
/deep/[data-v-4d19bb52] .ant-row-flex-middle {
  width: 80%;
  margin: 0 auto;
}
/deep/.ant-row-flex-middle {
  min-width: 650px;
  height: 60px;
  font-size: 14px;
  color: #fff;
  a {
    color: #fff;
  }
}
// 底部信息
.footerMsg {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  margin-bottom: 20px;
}
/deep/.ant-row {
  width: 80%;
  margin: 0 auto;
}

.footMsg_left {
  position: relative;
  padding: 0 30px;
  // border: 1px solid red;
}
.footMsg_right {
  padding-left: 30px;
}
.footMsg_left::after {
  position: absolute;
  top: 0;
  right: 10px;
  content: "";
  display: inline-block;
  width: 1px;
  height: 87px;
  background-color: #e5e5e5;
}
</style>