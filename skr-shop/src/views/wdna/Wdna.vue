<template>
  <div class="wdna_main">
      <WdnaTop/>
      <!-- <WdnaOn/>
      <WdnaContainer/> -->
  </div>
</template>

<script>
// import WdnaContainer from './childComps/WdnaContainer.vue'
// import WdnaOn from './childComps/WdnaOn.vue'
import WdnaTop from './childComps/WdnaTop.vue'
export default {
  components: { WdnaTop, },

}
</script>
<style lang="less" scoped>
.wdna_main{
    padding: 0 5%;
    margin-bottom: 150px;
}
</style>