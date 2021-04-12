<template>
  <div class="StickyBanner">
    <img src="//image.wconcept.co.kr/images/builder/1/4/15/36/P3_620x150_20210401103837.jpg" v-for="(item,index) in 2" :key="index">
  </div>
</template>

<script>
export default {
  name:"StickyBanner"
}
</script>

<style lang="less" scoped>
.StickyBanner{
  width: 100%;
  height: 150px;
  margin-top: 40px;
  img{
    width: calc(100% / 2 );
    height: 150px;
    cursor: pointer;
  }
}
</style>