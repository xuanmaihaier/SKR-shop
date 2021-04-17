<!--
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-13 10:43:26
 * @LastEditTime: 2021-04-16 15:15:22
 * @LastEditors: He Xiantao
-->
<template>
  <div id="review">
    <h4>产品满意度</h4>
    <div class="rate">
      <div class="left">
        <p>这是购买者对产品的评价。</p>
        <a-rate :default-value="rate" allow-half disabled class="star"/>
        <span class="same"> {{rate}} </span>
        <span class="same totalRate">/ 5</span>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="imgList"></div>
    <!-- <div class="rate_content">
      <ul class="sortList">
        <li>最新</li>
        <li>|</li>
        <li>最高评分</li>
        <li>|</li>
        <li>最低评分</li>
      </ul>
      <ul class="content_list">
        <li></li>
      </ul>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed:{
      rate(){
        return Math.floor(Math.random()*40 + 10)/10
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

#review
  margin-top 55px
  width 1240px
  >h4
    font-size 18px
    margin 0 0 8px
  .rate 
    height 365px
    .left 
      >p 
        font-size 14px
        margin 0 0 38px
      .same
        margin-left 10px
        font-size 32px
      .totalRate
        color #DFDFDF
      /deep/svg
        cursor pointer
        font-size 30px

/deep/.star
  color #000
</style>