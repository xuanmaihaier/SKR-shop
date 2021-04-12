<template>
  <div class="login">
    <div class="navBar">导航占位</div>
    <!-- 登录大标题 -->
    <title-warp>登录</title-warp>
    <!-- 登录主体内容 -->
    <Member-join/>
  </div>
</template>

<script>
import TitleWarp from "components/content/TitleWarp";
import MemberJoin from './childComps/MemberJoin.vue';
export default {
  components: { TitleWarp,MemberJoin },
  name: "Login",
};
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  .navBar{
    width: 100%;
    height: 135px;
    background-color: #000;
    text-align: center;
    line-height: 135px;
    color: #fff;
  }
}
</style>