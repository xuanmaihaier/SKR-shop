<template>
  <div id="detail_sort_nav">
    <ul class="nav">
      <li @click="$emit('jumptoWhich','DETAIL')" :class="{on: currentIndexIsOn === 0}">DETAIL</li>
      <li @click="$emit('jumptoWhich','REVIEW')"  :class="{on: currentIndexIsOn === 1}">REVIEW( 98 )</li>
      <li @click="$emit('jumptoWhich','Q_A')"  :class="{on: currentIndexIsOn === 2}">Q&A( 65 )</li>
      <li @click="$emit('jumptoWhich','RETURN_DELIVERY')"  :class="{on: currentIndexIsOn === 3}">RETURN & DELIVERY</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'DetailSortNav',
    props:{
      currentIndexIsOn: Number
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
*{
  box-sizing border-box
}
#detail_sort_nav
    width 1240px
    height 62px
  .nav 
    height 62px
    line-height 62px
    &>li
      cursor pointer
      text-align center 
      width 310px
      float left 
      border 1px solid #efefef
      border-bottom 2px solid #000
      &.on 
        border 2px solid #000
        border-bottom 1px solid  transparent

</style>
