<template>
  <div id="detail">
    <ul v-if="imgs.length>0">
      <li v-for="(img,index) in imgs" :key="index"><img :src="img.small"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      imgs: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#detail
  width 1240px
  margin 0 auto
  ul
    width 960px
    margin 0 auto
    li
      width 100%
      margin 60px 0
      img
        width 960px

</style>
