<template>
  <div class="TagSearch">
    <a-input-search
      placeholder="标签搜寻"
      @search="onSearch"
      :style="inputStyle"
      v-model="val"
    />
  </div>
</template>

<script>
import {setLocalStorage} from "utils/storage"
export default {
  name: "TagSearch",
  data() {
    return {
      inputStyle: {
        width: "100%",
        border: "0",
        "border-bottom": `2px solid`,
      },
      val: "",
    };
  },
  methods: {
    onSearch() {
      if(this.val=="") return
      setLocalStorage("word", this.val);
      this.$router.push({ name: "Search", params: { word: this.val } });
    },
  },
};
</script>

<style lang="less" scoped>
.TagSearch {
  width: 14%;
  line-height: 100%;
}
/deep/ .ant-input {
  border: 0;
  box-shadow: none;
}
</style>