<template>
  <div>
      <nav-bar-top></nav-bar-top>
      <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavBarTop from './NavBarTop.vue'
import NavBottom from './NavBottom.vue'
export default {
    name:'NavBar',
    components:{NavBarTop, NavBottom}
}
</script>

<style>

</style>