<template>
  <div class="memberJoin">
    <div class="joinCont">
      <!-- 登录信息填写 -->
      <LoginWrap/>
      <!-- 第三方登录 -->
      <ThirdParty/>
      <!-- 会员注册提示 -->
      <NonMember/>
    </div>
  </div>
</template>

<script>
import LoginWrap from './childrenComps/LoginWrap';
import NonMember from './childrenComps/NonMember';
import ThirdParty from './childrenComps/ThirdParty';
export default {
  components: { LoginWrap, ThirdParty, NonMember },
  name: "MemberJoin",
};
</script>

<style lang="less" scoped>
.memberJoin {
  margin: 0 auto;
  width: 1240px;
  .joinCont {
    padding-top: 60px;
    margin-bottom: 180px;
    border-top: 2px solid #171717;
  }
}
</style>