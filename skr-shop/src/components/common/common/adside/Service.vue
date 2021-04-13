<template>
  <div class="historyPage">
    <div class="his_head">
      <h2>客服小气</h2>
      <fork @click.native="handle()"></fork>
    </div>
    <div class="ser_text"></div>
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
  methods: {
    handle() {
      this.close = false;
      this.$emit('isCloseBar',this.close)
    },
  },
};
</script>

<style lang="less" scoped>
.historyPage {
  position: fixed;
  bottom: 0;
  width: 300px;
  height: 500px;
  background-color: #fff;
  border: 2px solid #333;
  box-shadow: 10px 10px 10px 5px #333;
}
.his_head {
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-weight: 500;
  text-align: center;
  background-color: #000;
  h2 {
    color: #fff;
  }
}

.ser_text {
  width: 100%;
  height: 100%;
}
</style>