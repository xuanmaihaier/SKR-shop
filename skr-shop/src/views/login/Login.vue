<template>
  <div class="login">
    <!-- 登录大标题 -->
    <title-warp>登录</title-warp>
    <!-- 登录主体内容 -->
    <Member-join/>
  </div>
</template>

<script>
import TitleWarp from "@/components/content/login-register/TitleWarp";
import MemberJoin from './childComps/MemberJoin.vue';
export default {
  components: { TitleWarp,MemberJoin },
  name: "Login",
  created(){
    this.$store.commit("changeLoading", false);
  }
};
</script>

<style lang="less" scoped>
.login{
  width: 100%;
   margin-bottom: 40px;
}
</style>