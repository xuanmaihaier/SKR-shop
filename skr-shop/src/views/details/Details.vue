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
            <img class="leftImg" ref="bigImgLeft" src="https://img.fishfay.com/shopgoods/4/162128505/zt-162128505/967a12b8a092e029b88ed179778e8058.jpg?x-image-process=image/resize,w_800,h_800">
            <!-- 鼠标层罩 -->
            <div ref="mask" v-show="topShow" class="top" :style="topStyle"></div>
            <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
            <div class="maskTop"
            @mouseenter="isEnterHandler(true)"
            @mousemove="moveHandler"
            @mouseout="isEnterHandler(false)"></div>
          </div>
          <!-- 显示放大效果的外元素 -->
          <div v-show="rShow" class="right">
            <!-- 放大图片 -->
            <img :style="r_img" ref="bigImgRight" class="rightImg" src="https://img.fishfay.com/shopgoods/4/162128505/zt-162128505/967a12b8a092e029b88ed179778e8058.jpg?x-image-process=image/resize,w_800,h_800">
          </div>
        </div>
        <div class="imgList">
          <ul>
            <li><img @click="changeImg($event)" src="//image.wconcept.co.kr/productimg/image/img0/09/301186009_GG33291.jpg"></li>
            <li><img @click="changeImg($event)" src="//image.wconcept.co.kr/productimg/image/img9/09/301186009_add1_GL13282.jpg"></li>
          </ul>
          <div>
            <a-icon type="share-alt" class="c" />
            <span>分享</span>
            <a-icon type="heart" class="d" />
            <span>收藏</span>
          </div>
        </div>
      </div>
      <div class="good_right">
        <div class="top">
          <h3>ULLALA PAJAMAS</h3>
          <span>￥ +∞</span>
          <span></span>
        </div>
        <div class="middel">
            <div class="choose">
              <label for="size">尺码</label>
              <select name="size" id="size">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="5XL">5XL</option>
              </select>
              <label for="count">数量: </label>
              <input id="count" type="number" value="1" max="10" min="1">
            </div>
        </div>
        <div class="down">
          <span class="a">加入购物车</span>
          <span class="b">立即购买</span>
        </div>
      </div>
    </div>



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

import Vue from 'vue'
import { Button, Pagination, Rate, Breadcrumb, Dropdown, Menu, Icon } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Rate);
Vue.use(Breadcrumb);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Icon);


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
        rShow:false,
        imgWidthLeft:'',
        imgWidthRight: '',
        mackWidth: '',
        mackHeight: '',
        options:[{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6},{value:7,label:7},{value:8,label:8},{value:9,label:9},{value:10,label:10},],
      }
    },
    methods : {
      whichOne(ref){
        this.$refs[ref].$el.scrollIntoView(true)
      },
      isEnterHandler(isEnter) {
        if (isEnter) {
          var finalStyle = this.$refs.mask.currentStyle ? this.$refs.mask.currentStyle : document.defaultView.getComputedStyle(this.$refs.mask, null)
          this.mackWidth = parseFloat(finalStyle.width)
          this.mackHeight = parseFloat(finalStyle.height)
        }
        
        this.topShow = isEnter
        this.rShow = isEnter
      },
      // 鼠标移动函数
      moveHandler(event) {
        let x = event.offsetX
        let y = event.offsetY
        let halfMackWidth = this.mackWidth
        let halfMackHeight = this.mackHeight
        let topX = (x-halfMackWidth/2) < 0 ? 0:(x-halfMackWidth/2)
        let topY = (y-halfMackHeight/2) < 0 ? 0:(y-halfMackHeight/2)
        if(topX>this.imgWidthLeft-halfMackWidth) topX = this.imgWidthLeft-halfMackWidth
        if(topY>this.imgWidthLeft-halfMackHeight) topY = this.imgWidthLeft-halfMackHeight
        // 通过 transform 进行移动控制
        // console.log(this.imgWidth);
        this.topStyle.transform = `translate(${topX}px,${topY}px)`
        this.r_img.transform = `translate(-${this.imgWidthRight*((topX-35)/this.imgWidthLeft)}px,-${this.imgWidthRight*(topY/this.imgWidthLeft)}px)`
      },
      changeImg(event){
        this.$refs.bigImgLeft.src = event.target.src
        this.$refs.bigImgRight.src = event.target.src
      }
    },
    mounted(){
      var finalStyle1 = this.$refs.bigImgRight.currentStyle ? this.$refs.bigImgRight.currentStyle : document.defaultView.getComputedStyle(this.$refs.bigImgRight, null)
      var finalStyle2 = this.$refs.bigImgLeft.currentStyle ? this.$refs.bigImgLeft.currentStyle : document.defaultView.getComputedStyle(this.$refs.bigImgLeft, null)
      this.imgWidthRight = parseFloat(finalStyle1.width)
      this.imgWidthLeft = parseFloat(finalStyle2.width)
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
      width 485px
      margin-left 30px
      height 625px
      .top 
        height 200px
        // border-bottom 2px solid #000
      .middel
        height 330px
        .choose
          width 100%
          height 50px
          line-height 50px
          border-top 1px solid #CCCCCC
          border-bottom  1px solid #CCCCCC
          input[type="number"]
            width 40%
            outline none
            border none
            height 30px
            line-height 30px
            text-indent 20px
          #size
            width 40%
            outline none
            border none
            height 45px
            line-height 45px
            text-indent 20px
            margin-right 20px

      .down
        display flex 
        justify-content space-between
        &>span 
          height 60px
          line-height 60px
          font-size 20px
          text-align center 
          cursor pointer
        .a
          width 223px
          background-color #fff
          color #000
          border 1px solid #666666
        .b 
          width 223px
          background-color #000
          color #fff
    .good_left
      width 625px
      position relative
      .wrap
        width 625px
        height 625px
        .left
          width: 625px
          height 625px
          border: 1px solid teal
          float: left
          position: relative
          cursor pointer
          .maskTop
            width: 625px
            height 625px
            position: absolute
            z-index: 5
            top: 0
            left: 0
          .top
            width: 340px
            height: 340px
            background-color: #efefef
            opacity: 0.4
            position: absolute
            top: 0
            left: 0
          .leftImg
            width: 625px
            height 625px
            display: inline-block
        .right
          right -645px
          width: 625px
          height: 625px
          border: 1px solid #efefef
          position: absolute
          overflow: hidden
          z-index 2
          .rightImg
            display: inline-block
            width: 950px
            height: 950px
            position: absolute
            top: 0
            left: 0
      .imgList
        display flex 
        flex-direction column
        position absolute
        top 0
        left -70px
        height 100%
        ul 
          flex 1
          img 
            width 60px
            height 60px
            margin 0px 10px 10px 0
        div
          display flex 
          flex-direction column
          align-items center
          padding-right 10px
          span 
            cursor pointer
          .c
            font-size 28px
            margin 10px
          .d
            font-size 28px
            margin 10px
        
</style>

