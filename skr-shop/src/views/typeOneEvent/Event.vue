<template>
  <div class="event">
    <top-title><p>EVENT</p></top-title>
    <carousel />
    <cet-nav />
    <hot-key-word />
    <tab-btn />
  </div>
</template>

<script>
import TopTitle from "components/common/title/Title.vue";
import Carousel from "./childComps/Carousel.vue";
import CetNav from './childComps/CetNav.vue';
import HotKeyWord from './childComps/HotKeyWord'
import TabBtn from './childComps/TabBtn'
export default {
  components: {
    // TopTitle,
    TopTitle,
    Carousel,
    CetNav,
    HotKeyWord,
    TabBtn,
  },
};
</script>

<style lang='less' scoped>
</style>