<template>
  <div class="service">
    <!-- 侧边栏购物车 -->
    <header>
      <h3>购物车</h3>
      <fork @click.native="handle()"></fork>
    </header>
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="全部"> </a-tab-pane>
      <a-tab-pane key="2" tab="我的"> </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import fork from './Fork'
export default {
  components:{
    fork,
  },
  data(){
    return{
      close:true
    }
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    handle(){
      this.close = false
      this.$emit('isCloseBar',this.close)
    }
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
</style>