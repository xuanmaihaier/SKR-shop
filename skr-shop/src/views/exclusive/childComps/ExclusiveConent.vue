<template>
  <div class="exclusive_conent">
       <ExclusiveBanner/>
       <ExclusiveWantneed/>
       <ExclusiveEdition/>
       
  </div>
</template>

<script>
import ExclusiveBanner from './childSecond/ExclusiveBanner.vue'
import ExclusiveEdition from './childSecond/ExclusiveEdition.vue'
import ExclusiveWantneed from './childSecond/ExclusiveWantneed.vue'
export default {
    name:'ExclusiveConent',
    components:{ExclusiveBanner, ExclusiveWantneed, ExclusiveEdition}
}
</script>

<style lang="less" scoped>
.exclusive_conent{
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    min-width: 1240px;
}
</style>