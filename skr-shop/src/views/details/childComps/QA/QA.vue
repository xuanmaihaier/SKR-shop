<!--
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-13 10:43:26
 * @LastEditTime: 2021-04-15 12:52:30
 * @LastEditors: He Xiantao
-->
<template>
  <div id="qa">
    <div class="tapOne">
      <a-button class="mybtn">商品咨询</a-button>
    </div>
    <div class="rate">
      <ul>
        <li v-for="(item,index) in 6" :key="index">
          <span class="answer">完整回答</span>
          <span class="question"> {{index}} <i></i></span>
          <span class="username">haey***</span>
          <span class="time">2021. 04. 1{{index}}</span>
        </li>
        
      </ul>
    </div>
    <div class="page">
      <a-pagination class="a" size="small" :total="36" :page-size="6" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
*{
  box-sizing border-box
}
#qa 
  width 1240px
  margin-top 60px
  margin-bottom 90px
  .tapOne
    width 100%
    height 50px
    margin-bottom 15px
    .mybtn
      float right
      width 180px
      height 50px
      background-color #000
      color #fff
  .rate 
    width 1240px
    height 410px
    border-bottom 2px solid #000
    border-top 2px solid #000
    ul 
      li 
        width 100%
        height 68px
        line-height 68px
        border-bottom 1px solid #D9D9D9
        &>span 
          display inline-block
          height 25px
          line-height 25px
        .answer 
          margin-left 20px
          width 55px
          color #fff
          background-color #000
          font-size 12px
          text-align center 
        .question
          width 854px
          padding-left 20px
          text-align start 
        .username
          width 155px
          text-align start 
        .time
          width 155px
          text-align end  
  .page
    width 100%
    height 50px
    margin-top 50px
    position relative
    .a 
      // width 200px
      height 30px
      position absolute
      left 50%
      transform translateX(-50%)
      top 0
      bottom 0
      margin 0 auto
      font-size 16px
</style>
