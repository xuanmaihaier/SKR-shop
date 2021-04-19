<template>
  <div class="ipt">
      <!-- 只有搜索二級分類 -->
    <a-input-search
      placeholder="潮流，从搜索开始"
      :style="inputStyle"
      ref="input"
      @search="onSearch"
      allowClear
      @blur="changeFcous"
    />
  </div>
</template>

<script>
import { setLocalStorage } from "utils/storage.js";
export default {
  props: {
    focusFlag: {
      type: Boolean,
      default: false,
    },
  },
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
    onSearch(val) {
      // 如果没有输入不进入
      if (val.length != 0) {
        setLocalStorage("word", val);
        this.$router.push({ name: "Search", params: { word: val } });
      }
    },
    // 聚焦
    onFcous() {
      this.$refs.input.focus();
    },
    // 失去焦点
    changeFcous() {
      this.$store.dispatch("commitSearchShow", false);
    },
  },
  mounted() {
    if (this.focusFlag) {
      this.onFcous();
    }
  },
};
</script>

<style lang="less" scoped>
.ipt {
  width: 25%;
  display: flex;
  align-items: center;

  /deep/ .ant-input {
    border: 0;
    box-shadow: none;
  }
}
</style>