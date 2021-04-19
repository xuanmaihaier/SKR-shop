<template>
  <div class="search">
    <!-- 显示搜索个数，再次搜索 -->
    <AgainSearch />
    <!-- 主导航栏 -->
    <Nav />
  </div>
</template>

<script>
import AgainSearch from "./childComps/AgainSearch.vue";
import Nav from "./childComps/Nav.vue";
export default {
  name: "Search",
  components: {
    AgainSearch,
    Nav,
  },
};
</script>

<style lang="less" scoped>
</style>