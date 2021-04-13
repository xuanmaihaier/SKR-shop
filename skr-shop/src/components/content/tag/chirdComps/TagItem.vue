<template>
  <div class="TagItem">
    <div class="HotTag">
      <span>热门标签</span>
    </div>
    <div class="HotTagItem">
      <a-button
        shape="round"
        size="large"
        v-for="(item, index) in 6"
        :key="index"
        ># item</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TagItem",
};
</script>

<style lang="less" scoped>
.TagItem {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .HotTag {
    width: 20%;
  }
  .HotTagItem {
    width: 70%;
  }
  .ant-btn {
    margin: 0 10px;
  }
}
.ant-btn:hover {
  background-color: #1890ff;
  color: #fff;
}
</style>