<!--
 * @Description:
 * @Author: He Xiantao
 * @Date: 2021-04-12 17:42:12
 * @LastEditTime: 2021-05-10 09:34:16
 * @LastEditors: He XianTao
-->
<template>
  <div id="app">
    <!-- 头部公共导航栏 -->
    <NavBar />
    <!-- 所有主体内容区域显示 -->
    <keep-alive exclude="Login,Details">
      <router-view :key="Date.now()"/>
    </keep-alive>
    <!-- 公共页脚 -->
    <FooterNav />
<<<<<<< HEAD
    <!-- 公共侧边栏兼客服小型购物车查看 -->
    <Adside/>
    <!-- 发送请求，显示加载组件 -->
=======
    <Adside />
>>>>>>> lazypig
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
