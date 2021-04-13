<template>
  <div class="TagSearch">
    <a-input-search
      placeholder="标签搜寻"
      @search="onSearch"
      :style="inputStyle"
    />
  </div>
</template>

<script>
export default {
  name: "TagSearch",
  data() {
    return {
      inputStyle: {
        width: "100%",
        border: "0",
        "border-bottom": `2px solid`,
      },
    };
  },
  methods: {
    onSearch() {},
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