<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterNav/>
    <Adside/>
  </div>
</template>
<script>
import NavBar from 'components/content/navbar/NavBar.vue'
import FooterNav from "components/common/footer/FooterNav"
import Adside from "components/common/adside/Adside";
export default {
  name:'App',
  components:{
    NavBar,
    FooterNav,
    Adside,
  }
}
</script>
<style>
@import url("./assets/css/params.less");
</style>
