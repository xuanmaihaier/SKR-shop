<template>
  <div class="TagItem">
    <div class="HotTag">
      <span>热门标签</span>
    </div>
    <div class="HotTagItem">
      <a-button
        shape="round"
        size="large"
        v-for="(item, index) in list"
        :key="index"
        @click="tagclick(item)"
        ># {{item}}</a-button
      >
    </div>
  </div>
</template>

<script>
import { getTypeTwo } from "network/getNav";
import {setLocalStorage} from "utils/storage"
export default {
  name: "TagItem",
  data() {
    return {
      list:[]
    }
  },
  methods: {
    tagclick(item) {
      setLocalStorage("word", item);
        this.$router.push({ name: "Search", params: { word: item } });
    },
    RndNum(n, data) {
      let rnd = "";
      let arr = [];
      for (var i = 0; i < n; i++) {
        rnd = Math.floor(Math.random() * data.length);
        arr.push(data[rnd]);
        data.splice(rnd, 1);
      }
      return arr;
    },
    getTypeTwo_init() {
      getTypeTwo(this.$route.params.id).then((res) => {
        let arr = this.RndNum(5, res.data);
        this.list = arr
      });
    },
  },
  created() {
    this.getTypeTwo_init();
  },
  watch: {
    $route(to, from) {
      if(to.path!==from.path)
      this.getTypeTwo_init()
    },
  },
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