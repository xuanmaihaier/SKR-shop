<template>
  <div class="wdna_main">
    <WdnaTop :list_list="list_list" v-if="list_list" />
    <!-- <WdnaOn/>
      <WdnaContainer/> -->
  </div>
</template>

<script>
// import WdnaContainer from './childComps/WdnaContainer.vue'
// import WdnaOn from './childComps/WdnaOn.vue'
import WdnaTop from "./childComps/WdnaTop.vue";
import { getTypeOneList, getTypeOTwoList } from "network/getList";
export default {
  data() {
    return {
      list_list: [],
    };
  },
  created() {
    this.list_init();
  },
  methods: {
    list_init() {
      getTypeOTwoList("休闲鞋").then((res) => {
        if (res.code != 200) return;
        this.list_list = res.data;
      });
    },
  },
  components: { WdnaTop },
};
</script>
<style lang="less" scoped>
.wdna_main {
  padding-top:1%;

}
</style>