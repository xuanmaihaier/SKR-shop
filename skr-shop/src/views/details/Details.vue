<template>
  <div id="shop_detail">
    <nav class="nav">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">Click me <a-icon type="down"/></a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a href="">1st menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">Application List <a-icon type="down"/></a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a href="">1st menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </nav>





    <div class="good">
      <div class="good_left">
        <div class="wrap">
          <!-- 左边显示正常图片的外元素 -->
          <div class="left"> 
            <!-- 图片 -->
            <img class="leftImg" ref="bigImgLeft" src="https://image.wconcept.co.kr/productimg/image/img9/09/301186009_GG45240.jpg">
            <!-- 鼠标层罩 -->
            <div v-show="topShow" class="top" :style="topStyle"></div>
            <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
            <div class="maskTop"
            @mouseenter="isEnterHandler(true)"
            @mousemove="moveHandler"
            @mouseout="isEnterHandler(false)"></div>
          </div>
          <!-- 显示放大效果的外元素 -->
          <div v-show="rShow" class="right">
            <!-- 放大图片 -->
            <img :style="r_img" ref="bigImgRight" class="rightImg" :src="'https://image.wconcept.co.kr/productimg/image/img9/09/301186009_GG45240.jpg'">
          </div>
        </div>
        <div class="imgList">
          <img @click="changeImg($event)" src="//image.wconcept.co.kr/productimg/image/img0/09/301186009_GG33291.jpg">
          <img @click="changeImg($event)" src="//image.wconcept.co.kr/productimg/image/img9/09/301186009_add1_GL13282.jpg">
        </div>
      </div>
      <div class="good_right">
        <div class="top">
          <h3>ULLALA PAJAMAS</h3>
          <span>￥ ∞</span>
          <span></span>
        </div>
        <div class="middel"></div>
        <div class="down">
          <span class="a">立即购买</span>
          <span class="b">购物车</span>
          <span class="c"><a-icon type="gift" />赠送</span>
          <span class="d"><a-icon type="heart" />收藏</span>1
        </div>
      </div>
    </div>


;



    <div class="detail">
      <DetailSortNav @jumptoWhich="whichOne" ref="DETAIL" :currentIndexIsOn="0" />
      <Detail/>
    </div>
    <div class="review">
      <DetailSortNav @jumptoWhich="whichOne"  ref="REVIEW" :currentIndexIsOn="1" />
      <Review/>
    </div>
    <div class="q_a">
      <DetailSortNav @jumptoWhich="whichOne"  ref="Q_A" :currentIndexIsOn="2" />
      <QA/>
    </div>
    <div class="return_delivery">
      <DetailSortNav @jumptoWhich="whichOne"  ref="RETURN_DELIVERY" :currentIndexIsOn="3" />
      <ReturnDelivery/>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
// import Detail from "./components/Details/Detail/Detail";
import DetailSortNav from "./childComps/DetailSortNav/DetailSortNav";
import QA from "./childComps/QA/QA";
import ReturnDelivery from "./childComps/ReturnDelivery/ReturnDelivery";
import Review from "./childComps/Review/Review";
import Detail from "./childComps/Detail/Detail";
  export default {
    name: 'Details',
    components:{
      DetailSortNav,
      ReturnDelivery,
      QA,
      Review,
      Detail
    },
    data() {
      return {
        topStyle:{transform:''},
        r_img: {},
        topShow:false,
        rShow:false
      }
    },
    methods : {
      whichOne(ref){
        this.$refs[ref].$el.scrollIntoView(true)
      },
      isEnterHandler(isEnter) {
        this.topShow = isEnter
        this.rShow = isEnter
      },
      // 鼠标移动函数
      moveHandler(event) {
        let x = event.offsetX
        let y = event.offsetY
        let topX = (x-172) < 0 ? 0:(x-172)
        let topY = (y-191) < 0 ? 0:(y-191)
        if(topX>181) topX = 181
        if(topY>318) topY = 318
        // 通过 transform 进行移动控制
        this.topStyle.transform = `translate(${topX}px,${topY}px)`
        this.r_img.transform = `translate(-${961*(topX/525)}px,-${1283*(topY/700)}px)`
      },
      changeImg(event){
        this.$refs.bigImgLeft.src = event.target.src
        this.$refs.bigImgRight.src = event.target.src
      }
    }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
*{
  box-sizing border-box
}

#shop_detail
  width 1240px
  height 100%
  margin 0 auto 
  .nav
    font-size 12px
    margin 28px 0 28px
  .good
    margin-bottom 100px
    display flex 
    justify-content center 
    .good_right
      width 700px
      margin-left 15px
      height 700px
      border 1px solid #efefef
      .top 
        height 200px
        border-bottom 2px solid #000
      .middel
        height 330px
      .down
        display flex 
        justify-content space-between
        &>span 
          height 70px
          line-height 70px
          font-size 20px
          text-align center 
          cursor pointer
        .a
          width 230px
          background-color #000
          color #fff
        .b 
          width 268px
          background-color #7D7D7D
          color #fff
        .c 
          width 70px
          background-color #C2C2C2
          font-size 14px
        .d
          width 70px
          background-color #C2C2C2
          font-size 14px
    .good_left
      width 525px
      position relative
      .wrap
        width 525px
        height 700px
        .left
          width: 525px
          height 700px
          border: 1px solid teal
          float: left
          position: relative
          cursor pointer
          .maskTop
            width: 525px
            height 700px
            position: absolute
            z-index: 3000
            top: 0
            left: 0
          .top
            width: 344px
            height: 382px
            background-color: #efefef
            opacity: 0.4
            position: absolute
            top: 0
            left: 0
          .leftImg
            width: 525px
            height 700px
            display: inline-block
        .right
          right -645px
          width: 630px
          height: 700px
          border: 1px solid #efefef
          position: absolute
          overflow: hidden
          z-index 3000
          .rightImg
            display: inline-block
            width: 961px
            height: 1283px
            position: absolute
            top: 0
            left: 0
      .imgList
        img 
          width 60px
          height 80px
          margin 10px 10px 0px 0
</style>

