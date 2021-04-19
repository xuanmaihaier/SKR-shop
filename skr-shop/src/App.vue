<template>
  <div id="app">
    <NavBar />
    <keep-alive exclude="Login,Details">
      <router-view/>
    </keep-alive>
    <FooterNav />
    <Adside/>
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
