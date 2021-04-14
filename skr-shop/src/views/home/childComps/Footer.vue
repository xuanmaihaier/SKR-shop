<template>
  <!-- 首页底部 -->
  <div class="footer_bar">
    <div class=" footer">
      <!-- 底部图片 -->
      <div class="inner">
        <a href="javascript:;" v-for="(i,j) in img" :key="j">
          <img :src="i.imgUrl" alt="" />
        </a>
      </div>
      <!-- 底部信息 -->
      <div class="footer_content">
        <!-- 左侧信息 -->
        <div class="notice">
          <a-tabs default-active-key="1" class="tab_head">
            <a-tab-pane key="1" tab="消息" class="tab_text">
              <ul>
                <li v-for="(item, index) in notice_one" :key="index">
                  <a href="">{{ item }}</a>
                </li>
              </ul>
            </a-tab-pane>

            <a-tab-pane key="2" tab="活动公告" force-render class="tab_text">
              Content of Tab Pane 2
            </a-tab-pane>
            <a-button slot="tabBarExtraContent"> + </a-button>
          </a-tabs>
        </div>
        <!-- 右侧联系方式 -->
        <div class="contact">
          <p>
            <span class="fuwu">服务中心</span>
            <span class="phone_">1566-5027</span>
          </p>
          <p class="timer_">营业时间</p>
          <p class="adress_">2801810010@qq.com</p>
          <p class="button_icon">
            <span
              ><a-button class="footer_btn">常见问题</a-button>
              <a-button class="footer_btn">1：1查询</a-button></span
            >
            <span>
              <a-icon
                type="facebook"
                theme="filled"
                :style="{ fontSize: '32px', width: '41px' }"
              />
              <a-icon
                type="instagram"
                theme="filled"
                :style="{ fontSize: '32px', width: '41px' }"
              />
              <a-icon
                type="qq-circle"
                theme="filled"
                :style="{ fontSize: '32px', width: '41px' }"
              />
              <a-icon
                type="dingtalk-circle"
                theme="filled"
                :style="{
                  fontSize: '32px',
                  width: '41px',
                  borderRadius: '50%',
                }"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      notice_one: [
        "· [指南](3/5罢工)",
        "· [指南] 3月1日",
        "· [信息] 客服",
        "· [concept] ",
        "· [concept]",
      ],
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
      img:[
        { imgUrl: require("assets/img/following/pc_benefit_main.png")},
        { imgUrl: require("assets/img/following/pc_benefit_main.png")},
        { imgUrl: require("assets/img/following/pc_benefit_main.png")}
      ]
    };
  },
};
</script>

<style lang="less" scoped>
@width: 80%;
@white: #fff;
.footer_bar {
  width: 100%;
  padding-top: 90px;
  // padding-bottom: 36px;
}
#center() {
  .center {
    width: @width;
    margin: 0 auto;
    background-color: @white;
  }
}

.container {
  #center.center();
}
.inner {
  height: 130px;
  margin-bottom: 80px;
}
.inner img{
  width: 33%;
}
.footer {
  width: 80%;
  height: 500px; 
  margin: 0 auto;
}
// 左侧
.footer_content {
  display: flex;
  justify-content: space-between;
}
.notice {
  width: 50%;
}
button {
  border: 0;
}

.tab_text {
  font-size: 14px;
  color: #000;
}
// 右侧联系方式
.contact {
  width: 40%;
  color: #000;
}
.fuwu {
  font-size: 22px;
  color: #000;
}
.phone_ {
  font-size: 42px;
  color: #000;
}
// ant-tabs-tab-active ant-tabs-tab

/deep/.ant-tabs-nav .ant-tabs-tab {
  font-size: 24px;
  color: #000;
}
/deep/.ant-tabs-nav .ant-tabs-tab:hover {
  color: #a3a3a3;
}

/deep/.footer_btn {
  width: 95px;
  height: 40px;
  line-height: 36px;
  color: #000;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 0;
  margin-right: 10px;
  text-transform: uppercase;
}
.timer_ {
  font-size: 14px;
  margin-bottom: 5px;
}
.adress_ {
  margin-bottom: 50px;
}
.button_icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .anticon .anticon-facebook {
  display: inline-block;
  width: 41px;
  height: 41px;
}

.footer_list {
  width: 100%;
  background-color: #848484;
}
.footer_u {
  width: 80%;
  margin-top: 70px;
  padding: 0 28px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #848484;
}
.footer_item {
  float: left;
}
.footer_item > a {
  display: block;
  padding: 20px 44px;
  font-size: 14px;
  color: #fff;
}
// 底部结尾
.footer_last {
  position: relative;
  width: 80%;
  margin: 10px auto;
}
.last_right {
  position: absolute;
  display: block;
  top: 15px;
  right: 0;
  letter-spacing: -0.5px;
}
.last_right::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -20px;
  margin: auto;
  width: 1px;
  height: 87px;
  background-color: #e5e5e5;
}
@media screen and(max-width: 1400px) {
  .last_right {
    display: none;
  }
  .footer_btn {
    transform: scale(0.8);
  }
}
</style>