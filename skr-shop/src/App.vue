<template>
  <div id="app">
    <NavBar/>
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
