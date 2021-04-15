<template>
  <div class="partner">
    <!-- 合作伙伴查询 -->
    <div class="partner_text">
      <h2>营销联盟</h2>
    </div>
    <div class="par_pic">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("assets/img/following/img_marketing.jpg"),
    };
  },
};
</script>

<style lang="less" scoped>
.partner {
  width: 100%;
  height: 70vh;
  .partner_text {
    width: 80%;
    padding-top: 81px;
    height: 200px;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-size: 44px;
      color: #000;
    }
  }
  .par_pic {
    width: 80%;
    height: 500px;
    text-align: center;
    margin: 0 auto;
  }
}
</style>