<template>
  <div class="nav">
    <div class="navs" @click="handleClick">

      <img src="../../../assets/images/log.png" alt="" />
      <a-affix :offset-top="top">
        <img src="../../../assets/images/log1.png" alt="" class="affixImg" />
      </a-affix>
    </div>
    <nav-search></nav-search>
    <div class="icons">
      <div class="icon">
        <a-icon type="user" />
        <span @click="goSignup">加入</span>
      </div>
      <div class="icon">
        <a-icon type="select" />
        <span @click="goLogin">登录</span>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <span>0</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavSearch from "./NavSearch.vue";

export default {
  components: { NavSearch },
  data() {
    return {
      top:0
    }
  },
  methods: {
    goSignup(){
      this.$router.replace('/signup')
    },
    goLogin(){
      this.$router.replace('/login')
    },

    handleClick(){
      this.$router.push('/home')
    }
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 2%;
  overflow: hidden;
  .navs {
    cursor: pointer;
    div{
       /deep/ .ant-affix {
      z-index: 999;
    }
    }
  }
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
  cursor: pointer;
  i {
    font-size: 20px;
    transform: translate(20px, 10px);
  }
  span {
    text-align: center;
    display: block;
    width: 32px;
    transform: translate(-5px, 12px);
  }
}

.affixImg {
  position: relative;
 height: 60px;
}
</style>