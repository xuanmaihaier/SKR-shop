<template>
  <div class="about">
    <!-- 关于我们 -->
    <div class="about_text">
      <font>关于我们</font>
    </div>
    <div class="about_pic">
        <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:require('assets/img/following/img_company.gif')
    }
  }
}
</script>

<style lang="less" scoped>
.about{
  width: 100%;
}
.about_text{
  width: 100%;
  height: 200px;
  line-height: 100%;
  text-align: center;
  font-size: 44px;
  padding-top: 80px;
}
.about_pic{
  width: 100%;
  text-align: center;
}

</style>