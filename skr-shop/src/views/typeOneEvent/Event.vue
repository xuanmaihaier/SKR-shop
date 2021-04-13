<template>
  <div class="event">
    <top-title></top-title>
    <carousel />
  </div>
</template>

<script>
import TopTitle from './childComps/title.vue'
import Carousel from './childComps/Carousel.vue'
export default {
  components:{
    TopTitle,
    Carousel,
  }
};
</script>

<style lang='less' scoped>

</style>