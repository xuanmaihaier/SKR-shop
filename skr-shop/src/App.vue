<template>
  <div id="app">
    <NavBar/>
    <!-- 都有的的侧边栏 -->
    <router-view/>
    <FooterNav/>
    <Adside/>
    <Loading/>
  </div>
</template>
<script>
import NavBar from 'components/content/navbar/NavBar.vue'
import FooterNav from "components/common/footer/FooterNav"
import Adside from "components/common/adside/Adside";
import Loading from './components/common/loading/Loading.vue';
export default {
  name:'App',
  components:{
    NavBar,
    FooterNav,
    Adside,
    Loading,
  }
}
</script>
<style>
@import url("./assets/css/params.less");
</style>
