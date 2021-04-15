<template>
  <div class="search">
      <!-- 显示搜索个数，再次搜索 -->
      <AgainSearch></AgainSearch>
  </div>
</template>

<script>
import AgainSearch from './childComps/AgainSearch.vue'
export default {
  name: 'Search',
  components: {
    AgainSearch
  }
}
</script>

<style lang="less" scoped>

</style>