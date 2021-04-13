<template>
  <a-affix
    :style="{
      position: isChage == true ? 'absolute' : 'static',
      top: 0,
      left: 0,
    }"
    @change="affixChange"
  >
    <!--  -->
    <div class="bottom">
      <!-- 二级目录 -->
      <div class="conent">
        <ul class="left">
          <li
            v-for="(item, index) in navLeft"
            :key="index"
            @mouseover="engraft(index)"
            @mouseout="exgraft"
          >
            {{ item }}
          </li>
          <span>|</span>
        </ul>
        <ul class="right">
          <li
            v-for="(item, index) in navRight"
            :key="index"
            @click="handleClick"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- Nav 显示隐藏的list表 -->
      <nav-eng v-show="$store.state.isShow" :navIndex="navIndex"></nav-eng>
    </div>
  </a-affix>
</template>

<script>
import NavEng from "./NavEng";
export default {
  name: "NavBottom",
  components: { NavEng },
  data() {
    return {
      top: 0,
      navLeft: ["新的", "女装", "男装", "生活", "美丽", "销售", "设计师"],
      navRight: ["独家的", "WDNA", "事件", "最好的"],
      navIndex: 0,
      isChage: false,
    };
  },

  methods: {
    //移入
    engraft(index) {
      this.navIndex = index;
      // console.log(this.navIndex,'----');
      this.$store.commit("changeShow", true);
    },
    //移出
    exgraft() {
      this.$store.commit("changeShow", false);
    },
    //点击事件
    handleClick() {
      console.log(123);
    },
    affixChange() {
      this.isChage = !this.isChage;
    },
  },
  mounted() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  },
};
</script>

<style lang="less" scoped>
/deep/ .ant-affix {
  width: 100% !important;
  min-width: 1240px;
}
.bottom {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #000000;
  color: white;
  overflow: hidden;
  z-index: 55;
  .conent {
    width: 55%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ul {
    width: 100%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
    }
    span {
      transform: translateX(10px);
    }
    li:hover {
      color: #04bd9e;
      cursor: pointer;
    }
  }
}
</style>