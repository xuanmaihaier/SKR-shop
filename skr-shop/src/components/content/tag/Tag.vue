<template>
  <!-- tag 标签 -->
  <div class="Tag">
    <TagItem />
    <!-- 带标签搜索功能 -->
    <TagSearch />
  </div>
</template>

<script>
import TagItem from "./chirdComps/TagItem";
import TagSearch from "./chirdComps/TagSearch";
export default {
  name: "Tag",
  components: {
    TagSearch,
    TagItem,
  },
};
</script>

<style lang="less" scoped>
.Tag {
  display: flex;
  justify-content: space-between;
  padding: 0 38px;
  line-height: 50px;
  align-items: center;
}

</style>