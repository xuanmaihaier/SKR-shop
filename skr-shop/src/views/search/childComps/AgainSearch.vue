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
    };
  },
  created() {
    // word要不等于search下的三个子路由product activity show
    if (
      this.$route.name == "Search" &&
      this.$route.name != "Product" &&
      this.$route.name != "Activity" &&
      this.$route.name != "Show"
    ) {
      this.loadSearch();
    }
    // 如果为子路由则显示原先的word
    else {
      this.word = getLocalStorage("word");
    }
  },
  methods: {
    // 获取用户输入搜索的字段
    loadSearch() {
      this.word = getLocalStorage("word");
      getSearch(this.$route.params.word).then((res) => {
        this.searchNumber = res.data.length;
      });
      this.$router.replace({ path: "/search/product" });
    },
  },
  watch: {
    $route: function () {
      console.log(this.$route, "==============");
      // 如果路由有params,并且word要不等于search下的三个子路由product activity show
      if (
        this.$route.params.length != 0 &&
        this.$route.name == "Search" &&
        this.$route.name != "Product" &&
        this.$route.name != "Activity" &&
        this.$route.name != "Show"
      ) {
        this.loadSearch();
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