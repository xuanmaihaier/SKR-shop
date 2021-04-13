<template>
  <div class="login">
    <!-- 登录大标题 -->
    <title-warp>登录</title-warp>
    <!-- 登录主体内容 -->
    <Member-join/>
    <FooterNav/>
  </div>
</template>

<script>
import TitleWarp from "@/components/content/login-register/TitleWarp";
import MemberJoin from './childComps/MemberJoin.vue';
import FooterNav from '../../components/common/common/footer/FooterNav.vue';
export default {
  components: { TitleWarp,MemberJoin, FooterNav },
  name: "Login",
};
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: calc(101vh - 130px);
}
</style>