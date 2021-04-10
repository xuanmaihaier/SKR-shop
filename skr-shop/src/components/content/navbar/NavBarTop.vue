<template>
  <div class="nav">
    <div>
      <img src="../../../assets/images/log.png" alt="" />
    </div>
    <nav-search></nav-search>
    <div class="icons">
      <div class="icon">
        <a-icon type="user" />
        <span>加入</span>
      </div>
      <div class="icon">
        <a-icon type="user" />
        <span>登录</span>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <span>加入</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavSearch from "./NavSearch.vue";

export default {
  components: { NavSearch },
};
</script>

<style lang="less" scoped>
.nav {
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 2%;
  > div {
    line-height: 65px;
  }
  .icons {
    width: 15%;
    display: flex;
  }
}
.icon {
  margin: 0 10px;
    display: flex;
    justify-content: center;
    i{
        font-size: 20px;
      transform: translate(20px,10px);
    }
    span{
        transform: translate(0px,12px);
    }
}
</style>