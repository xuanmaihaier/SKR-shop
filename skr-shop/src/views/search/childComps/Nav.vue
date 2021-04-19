<template>
  <div class="nav">
    <nav>
      <router-link :to="`/search/product`" :class="firstA"
        >产品 ({{ productNumber }})</router-link
      >
      <router-link :to="'/search/activity'"
        >活动 ({{ activityNumber }})</router-link
      >
      <router-link :to="'/search/show'">买家秀 ({{ showNumber }})</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: function () {
    return {
      productNumber: 0,
      activityNumber: 0,
      showNumber: 120,
      firstA: "",
    };
  },
  created() {
    this.getProductNumber();
  },
  methods: {
    getProductNumber() {
      setTimeout(() => {
        this.productNumber = this.$store.state.SearchData.length;
      }, 1000);
    },
  },
  watch: {
      $route: function () {
          this.getProductNumber();
      }
  },
};
</script>

<style lang="less" scoped>
.firstA {
  background-color: #333;
  color: white !important;
}
.nav {
  .router-link-active {
    background-color: #333;
    color: white;
  }
  margin-top: 10vh;
  padding: 0 17.3vw;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
    a {
      padding: 1.6vh 0;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #000;
      cursor: pointer;
      font-size: 1.9vh !important;
      color: #5a5a5a;
      &:last-of-type {
        border: none;
      }
    }
  }
}
</style>