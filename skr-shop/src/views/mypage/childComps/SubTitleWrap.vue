<template>
  <div class="titleWrap">
    <h2>个人中心</h2>
    <p>
      <span><small @click="goHome">主页</small><em>></em> </span>
      <span>个人中心</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "TitleWrap",
  methods: {
    goHome(){
      this.$router.push('/home')
    }
  },
};
</script>

<style lang="less" scoped>
.titleWrap {
  padding-top: 81px;
  width: 100%;
  text-align: center;
  h2 {
    font-size: 44px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 44px;
    span {
      font-size: 12px;
      &:first-child {
        padding-left: 10px;
        small {
          color: #676767;
          cursor: pointer;
        }
        em {
          margin: 0 10px;
        }
      }
      &:last-child {
        color: #000;
      }
    }
  }
}
</style>