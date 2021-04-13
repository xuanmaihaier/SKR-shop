<template>
  <div class="myPage">
    <!-- 个人中心大标题 -->
    <SubTitleWrap />
    <!--  -->
    <MyPageSnb />
    <!-- 订单部分 -->
    <MyPageMain />
    <!-- 底部 -->
    <FooterNav/>
  </div>
</template>

<script>
import FooterNav from '../../components/common/common/footer/FooterNav.vue';
import MyPageMain from "./childComps/MyPageMain.vue";
import MyPageSnb from "./childComps/MyPageSnb.vue";
import SubTitleWrap from "./childComps/SubTitleWrap.vue";
export default {
  components: { SubTitleWrap, MyPageSnb, MyPageMain, FooterNav },
  name: "MyPage",
};
</script>

<style lang="less" scoped>
.myPage {
  width: 100%;
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
}
</style>