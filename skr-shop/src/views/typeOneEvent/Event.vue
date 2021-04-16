<template>
  <div class="event">
    <top-title><p>EVENT</p></top-title>
    <carousel />
    <cet-nav />
    <hot-key-word />
    <tab-btn @listTma="getChild" />
    <thumnail :list="msg" />

  </div>
</template>

<script>
import TopTitle from "components/common/title/Title.vue";
import Carousel from "./childComps/Carousel.vue";
import CetNav from "./childComps/CetNav.vue";
import HotKeyWord from "./childComps/HotKeyWord";
import TabBtn from "./childComps/TabBtn";
import Thumnail from "./childComps/Thumnail";
export default {
  components: {
    // TopTitle,
    TopTitle,
    Carousel,
    CetNav,
    HotKeyWord,
    TabBtn,
    Thumnail,
  },
  data() {
    return {
      msg: "All", // 接收Tab子组件的值 按钮的值
    };
  },
  methods: {
    getChild(val) {
      this.msg = val;
    },
  },
};
</script>

<style lang='less' scoped>
.event{
  width: 97%;
  margin: auto;
}
</style>