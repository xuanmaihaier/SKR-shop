<template>
  <div class="nav">
    <div class="navs" @click="handleClick">
      <img src="~assets/img/logo/log.png" alt="" />
      <a-affix :offset-top="top">
        <img src="~assets/img/logo/log1.png" alt="" class="affixImg" />
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
        <p @click="goShopCart">{{shopCart.length}}</p>
      </div>
    </div>
    <div class="icons" v-else>
      <div class="icon">
        <a-icon type="logout" />
        <p @click="outLogin">LOGOUT</p>
      </div>
      <div class="icon">
        <a-icon type="user" />
        <p @click="goMypage">MY</p>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <p @click="goShopCart"> {{shopCart.length}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavSearch from "./NavSearch.vue";
import {mapState} from "vuex";
export default {
  components: { NavSearch },
  data() {
    return {
      top: 0,
      NavbarShow: false,
    };
  },
  methods: {
    goSignup() {
      this.$router.push("/signup");
    },
    goLogin() {
      this.$router.push("/login");
    },

    handleClick() {
      this.$router.push("/home");
    },
    outLogin() {
      sessionStorage.removeItem('shopCart')
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      this.$store.dispatch("commitNavbarShow", true);
      const auth = ["/shopcart", "/mypage"];
      const tokenStr = window.sessionStorage.getItem("token");
      if (!tokenStr) {
        if (auth.includes(this.$route.path)) {
          this.$router.push("/login");
        }
      }
      this.$store.commit('showSerBar',false)
    },
    goMypage() {
      this.$router.push("/mypage");
    },
    goShopCart() {
      if (sessionStorage.getItem("token")) {
        this.$router.push("/shopcart");
      } else {
        this.$message.destroy();//解决多次点击显示多个弹窗
        this.$message.warning({
          content: "请先登录！",
          duration: 1,
        });
        this.$router.push("/login");
      }
    },
  },
  computed:{
    ...mapState({
      shopCart: state => state.shopCart.shopCart
    })
  }
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
    div {
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
      .anticon {
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0);
        padding-top: 5px;
      }
      p {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
}

.affixImg {
  position: relative;
  height: 60px;
}
</style>