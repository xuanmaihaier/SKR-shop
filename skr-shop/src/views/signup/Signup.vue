<template>
  <div class="signup">
    <div class="navBar">导航占位</div>
    <!-- 注册大标题 -->
    <title-warp>注册</title-warp>
    <!-- 注册主体内容 -->
    <JoinMember/>
  </div>
</template>

<script>
import TitleWarp from '@/components/content/login-register/TitleWarp.vue';
import JoinMember from './childComps/JoinMember.vue';
export default {
  components: { TitleWarp, JoinMember },
  name: "Signup",
};
</script>

<style lang="less" scoped>
.signup {
  width: 100%;
  .navBar {
    width: 100%;
    height: 135px;
    background-color: #000;
    text-align: center;
    line-height: 135px;
    color: #fff;
  }
}
</style>