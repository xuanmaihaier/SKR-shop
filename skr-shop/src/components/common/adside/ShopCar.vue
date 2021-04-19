<template>
  <div class="service">
    <!-- 侧边栏购物车 -->
    <header>
      <h3>购物车</h3>
      <fork @click.native="handle()"></fork>
    </header>
    <!-- <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="我的"> </a-tab-pane>
      <a-tab-pane key="2" tab="购买记录"> </a-tab-pane>
    </a-tabs> -->
    <p class="shopCar">
      <span>共 0 件宝贝</span>
      <button>管理</button>
    </p>
  </div>
</template>

<script>
import fork from "./Fork";
export default {
  components: {
    fork,
  },
  data() {
    return {
      close: true,
    };
  },
  created(){
    console.log(this.$store.state);
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    handle() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
    },
  },
};
</script>

<style lang="less" scoped>
.service {
  position: relative;
  width: 300px;
  height: 100%;
  background-color: #fff;
  border: 2px solid #333;
  box-shadow: 10px 10px 10px 5px #333;
}
header > h3 {
  width: 300px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #000;
  color: #fff;
}
.shopCar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  background-color: #ccc;
  padding: 0 10px;
  font-size: 12px;
  button {
    width: 50px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }
  button:hover{
    background-color: #ddd;
  }
}
</style>