<template>
  <div class="wdna_container">
    <Title>
      <p>
        WDNA STYLE
        <br />
        <span class="wdna_container_tit"
          >스타일을 공유하면 W POINT 즉시 지급!</span
        >
      </p>
    </Title>
    <!--typeOne_list 标题  -->
    <div class="wrap">
      <a-tabs :default-active-key="tab_index" @change="callback">
        <a-tab-pane
          :key="index"
          :tab="item"
          v-for="(item, index) in typeOne_list"
        >
        </a-tab-pane>
      </a-tabs>
    </div>
    <!-- 商品渲染 -->
    <ul class="content">
      <li
        v-for="item in 24"
        :key="item"
        :style="{
          backgroundImage: `url(//image.wconcept.co.kr/images/upload/wdna/RP210413104342_KE8M.jpeg)`,
        }"
      >
        <p class="txt">
          <span class="txt_id">@mangodontlie</span>
          <span class="heart"></span>
        </p>
      </li>
    </ul>
      <div class="paginations">
            <!-- defaultCurrent :默认的当前页数 
                total	数据总数
                defaultPageSize	默认的每页条数
            -->

            <a-pagination :default-current="0" v-model="current" :total="500" :defaultPageSize="32" />
   </div>
  </div>
</template>

<script>
import Title from "components/common/title/Title.vue";
export default {
  components: { Title },
  name: "WdnaContainer",
  data() {
    return {
      typeOne_list: ["全部", "女士", "男士", "生活", "美丽"],
      tab_index: 0,
      current:1,
    };
  },
  methods: {
    // 点击请求数据
    callback(key) {
      tab_index = key;
    },
  },
};
</script>
<style lang="less" scoped>
.wdna_container_tit {
  font-family: "ProximaNova-Light", "yg740";
  font-size: 20px;
  color: #666;
  letter-spacing: 1px;
  text-align: center;
}
.wdna_container {
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 23%;
      height: 20rem;
      background-size: cover;
      margin-bottom: 30px;
      position: relative;
      cursor: pointer;
      .txt {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 45px;
        padding: 0 25px;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: space-between;
        .heart {
          display: block;
          width: 16px;
          height: 16px;
          margin-top: 14.5px;
          cursor: pointer;
          background-image: url(//static.wconcept.co.kr/web/images/wdna/icon-heart-white.png);
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .txt_id{
            color: #fff;
            line-height: 45px;
        }
      }
    }
  }
  .paginations{
      margin: 40px;
      padding-left: 50%;
       .ant-pagination{
          transform: translate(-50%,0);
          text-align: center;
      }
  }
}
</style>