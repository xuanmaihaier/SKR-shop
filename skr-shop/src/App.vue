<template>
  <div id="app">
    <NavBar />
    <router-view />
    <!-- <footerNav /> -->
  </div>
</template>
<script>
import NavBar from "@/components/content/navbar/NavBar.vue";
// import footerNav from "./components/common/common/adside/Adside";
export default {
  name: "App",
  components: {
    NavBar,
    // footerNav,
  },
};
NavBar;
</script>
<style>
@import url("./assets/css/params.less");
</style>
