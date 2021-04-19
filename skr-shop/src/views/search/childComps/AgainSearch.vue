<template>
  <div class="againSearch">
    <section>
      <p>
        '{{ word }}' 有<span> {{ searchNumber }} </span>个搜索结果
      </p>
    </section>
  </div>
</template>

<script>
import getSearch from "network/getSearch.js";
import { getLocalStorage } from "utils/storage.js";
export default {
  name: "AgainSearch",
  data: function () {
    return {
      searchNumber: 0,
      word: "",
      data: [],
    };
  },
  created() {
    this.loadSearch();
  },
  methods: {
    // 获取用户输入搜索的字段
    loadSearch() {
      this.word = getLocalStorage("word");
      getSearch(this.word).then((res) => {
        if (res.code == 200) {
          this.searchNumber = res.data.length;
          this.data = res.data;
          this.$store.dispatch("commitSearchData", this.data);
          if(this.$route.name != 'Product'){
            this.$router.replace({ path: "/search/product" });
          }
        }
      });
    },
  },
  watch: {
    $route: function () {
      // 当路由是搜索时重新搜索
      if (this.$route.name === "Search") {
        this.loadSearch();
        return;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.flexcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.againSearch {
  .flexcenter();
  section {
    .flexcenter();
    margin-top: 7.4vh;
    background-color: #fafafa;
    border-top: 1px solid #e1e1e1;
    width: 64.5vw;
    height: 17.6vh;
    font-weight: border;
    font-size: 3.6vh;
    span {
      color: #0ec3b2;
    }
  }
}
</style>