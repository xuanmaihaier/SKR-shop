<template>
  <div class="Primary">
    <Title><p>{{$route.params.id}}</p></Title>
    <Tag />
    <div class="PrimaryItem">
      <Aslide />
      <PrimaryList />
    </div>
  </div>
</template>

<script>
import Title from "components/common/title/Title.vue";
import Tag from "components/content/tag/Tag.vue";
import Aslide from "./childComps/Aslide.vue";
import PrimaryList from "./childComps/PrimaryList.vue";
export default {
  name: "Primary",
  components: {
    Tag,
    Title,
    PrimaryList,
    Aslide,
  },
};
</script>

<style lang="less" scoped>
.PrimaryItem {
  margin-top: 40px;
  padding: 0 38px;
  display: flex;
  justify-content: space-between;
}
</style>