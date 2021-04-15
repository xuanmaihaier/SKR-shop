<template>
  <div class="signup">  
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
  height: 100%;
  margin-bottom: 40px;
  // height: calc(101vh - 130px);
}
</style>