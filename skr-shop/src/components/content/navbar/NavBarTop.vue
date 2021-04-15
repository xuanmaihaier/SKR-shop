<template>
  <div class="nav">
    <div class="navs" @click="handleClick">

      <img src="../../../assets/images/log.png" alt="" />
      <a-affix :offset-top="top">
        <img src="../../../assets/images/log1.png" alt="" class="affixImg" />
      </a-affix>
    </div>
    <nav-search></nav-search>
    <div class="icons" v-if="$store.state.NavbarShow">
      <div class="icon">
        <a-icon type="user-add" />
        <p @click="goSignup">加入</p>
      </div>
      <div class="icon">
         <a-icon type="login" />
        <p @click="goLogin">登录</p>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <p>0</p>
      </div>
    </div>
      <div class="icons" v-else>
      <div class="icon">
        <a-icon type="logout" />
        <p @click="goSignup">LOGOUT</p>
      </div>
      <div class="icon">
        <a-icon type="user" />
        <p @click="goLogin">MY</p>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <p>0</p>
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
      top:0,
      NavbarShow:false
    }
  },
  methods: {
    goSignup(){
      this.$router.push('/signup')
    },
    goLogin(){
      this.$router.push('/login')
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
    position: relative;
    cursor: pointer;
    .icon{
      min-width: 70px;
      width: calc(100%/3 - 15px);
      position: relative;
      .anticon{
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,0);
        padding-top: 5px;
      }
      p{
        position: absolute;
        top: 20%;
         left: 50%;
        transform: translate(-50%,0);
      }
    }

  }
}


.affixImg {
  position: relative;
 height: 60px;
}

</style>