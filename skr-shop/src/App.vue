<template>
  <div id="app">
    <NavBar/>
    <!-- 都有的的侧边栏 -->
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/content/navbar/NavBar.vue'
export default {
  name:'App',
  components:{
    NavBar

  }
}
    NavBar
</script>
<style>                                                                          
@import url("./assets/css/params.less");
</style>
