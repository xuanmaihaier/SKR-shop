<template>
  <div class="conenta">
      <InnerLeft/>
      <!-- <InnerRight/> -->
  </div>
</template>

<script>
import InnerLeft from './childSecond/InnerLeft.vue'
// import InnerRight from './childSecond/InnerRight.vue'
export default {
  components: { InnerLeft},

}
</script>
<style lang="less" scoped>
.conenta{
    min-width: 1240px;
    margin-top: 5%;
    position: relative;
    display: flex;
}
</style>