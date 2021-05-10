<!--
 * @Description:
 * @Author: He Xiantao
 * @Date: 2021-04-12 17:42:12
 * @LastEditTime: 2021-04-17 12:20:09
 * @LastEditors: He Xiantao
-->
<template>
  <div id="app">
    <NavBar />
    <keep-alive exclude="Login,Details">
      <router-view :key="Date.now()"/>
    </keep-alive>
    <FooterNav />
    <Adside />
    <Loading />
  </div>
</template>
<script>
  import NavBar from "components/content/navbar/NavBar.vue";
  import FooterNav from "components/common/footer/FooterNav";
  import Adside from "components/common/adside/Adside";
  import Loading from "components/common/loading/Loading.vue";
  export default {
    name: "App",
    components: {
      NavBar,
      FooterNav,
      Adside,
      Loading,
    },

  };
</script>
<style>
  @import url("./assets/css/params.less");
</style>
