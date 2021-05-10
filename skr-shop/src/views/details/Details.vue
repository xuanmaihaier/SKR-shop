<template>
  <div id="shop_detail">
    <a-button-group class="back_or_forward">
      <a-button @click="$router.go(-1)" type="link">Go back</a-button>
      <a-button  @click="$router.go(1)" type="link">Go forward</a-button>
    </a-button-group>

    <div class="good" >
      <div class="good_left" >
        <div class="wrap" v-if="shop1.length">
          <!-- 左边显示正常图片的外元素 -->
          <div class="left"> 
            <!-- 图片 -->
            <img class="leftImg" ref="bigImgLeft" :src="JSON.parse(shop1[0].imgs)[0].small">
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
            <img :style="r_img" ref="bigImgRight" class="rightImg" :src="JSON.parse(shop1[0].imgs)[0].normal">
          </div>
        </div>
        <div class="imgList" v-if="shop1.length">
          <ul>
            <li 
              v-for="(img,index) in JSON.parse(shop1[0].imgs)"
              :key="index"
            >
              <img @click="changeImg($event)" :src="img.small">
            </li>
          </ul>
        </div>
      </div>
      <div class="good_right" v-if="shop1.length">
        <div class="top">
          <span></span>
          <h3> {{shop1[0].title}} </h3>
          <span class="price">￥{{shop2[0].special_price}} </span>
          <span class="price underline">￥ {{shop2[0].price}} </span>
          <div class="promotion">
            <span class="title" v-if="shop2[0].is_special"> {{ shop2[0].is_special == 1 ? '促销' : '抢购' }} </span>
            <span class="con">官方商城全场包邮</span>
          </div>
          <span></span>
        </div>
        <div class="middel">
            <ul>
              <li 
                v-for="(img,index) in JSON.parse(shop1[0].imgs)"
                :key="index"
                :class="{on: currentIndex === index}"
              >
                <img 
                  @click="changeImg($event,index)" 
                  :src="img.small"
                  :title="JSON.parse(shop1[0].param)[index]"
                >
              </li>
            </ul>
            <div class="choose">
              <label for="size">尺码</label>
              <select name="size" id="size" v-model="styleSize">
                <option :value="item" v-for="(item,index) in size" :key="index"> {{item}} </option>
              </select>
              <label for="count">数量: </label>
              <input id="count" type="number" max="10" min="1" v-model="shopNum">
            </div>
        </div>
        <div class="down">
          <span class="a" @click="addShop">加入购物车</span>
          <span class="b" @click="toPay">立即购买</span>
          <a-modal v-model="visible"  @ok="handleOk">
            <p>未登录,是否需要登录</p>
          </a-modal>
        </div>
      </div>
    </div>

    <div class="detail">
      <DetailSortNav @jumptoWhich="whichOne" ref="DETAIL" :currentIndexIsOn="0" />
      <Detail :imgs="shop1.length>0 ?  JSON.parse(shop1[0].imgs) : []" />
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
import { Button, Pagination, Rate, Breadcrumb, Dropdown, Menu, Icon, Modal } from 'ant-design-vue';
Vue.use(Button);Vue.use(Pagination);Vue.use(Rate);Vue.use(Breadcrumb);Vue.use(Dropdown);Vue.use(Menu);Vue.use(Icon);
Vue.use(Modal)
import DetailSortNav from "./childComps/DetailSortNav/DetailSortNav";
import QA from "./childComps/QA/QA";
import ReturnDelivery from "./childComps/ReturnDelivery/ReturnDelivery";
import Review from "./childComps/Review/Review";
import Detail from "./childComps/Detail/Detail";

import { mapState } from "vuex";

  export default {
    name: 'Details',
    components:{
      DetailSortNav,
      ReturnDelivery,
      QA,
      Review,
      Detail
    },
    props: ['id'],
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
        size: ['XS','S','M','L','XL','2XL','3XL','4XL','5XL'],
        shopNum: 1,
        currentIndex: '',
        currentStyle: '',
        styleSize: 'XS',
        visible: false,
        lastStyle: ''
      }
    },
    methods : {
      whichOne(ref){
        this.$refs[ref].$el.scrollIntoView(true)
      },
      // 判断鼠标是否移入
      isEnterHandler(isEnter) {
        this.topShow = isEnter
        this.rShow = isEnter
        this.imgWidthLeft = this.$refs.bigImgLeft.offsetWidth
        if (isEnter) {
          var finalStyle = this.$refs.mask.currentStyle ? this.$refs.mask.currentStyle : document.defaultView.getComputedStyle(this.$refs.mask, null)
          this.mackWidth = parseFloat(finalStyle.width)
          this.mackHeight = parseFloat(finalStyle.height)
        }
      },
      // 鼠标移动函数
      moveHandler(event) {
        this.imgWidthRight = this.$refs.bigImgRight.offsetWidth
        let x = event.offsetX
        let y = event.offsetY
        let halfMackWidth = this.mackWidth
        let halfMackHeight = this.mackHeight
        let topX = (x-halfMackWidth/2) < 0 ? 0:(x-halfMackWidth/2)
        let topY = (y-halfMackHeight/2) < 0 ? 0:(y-halfMackHeight/2)
        if(topX>this.imgWidthLeft-halfMackWidth) topX = this.imgWidthLeft-halfMackWidth
        if(topY>this.imgWidthLeft-halfMackHeight) topY = this.imgWidthLeft-halfMackHeight
        // 通过 transform 进行移动控制
        this.topStyle.transform = `translate(${topX}px,${topY}px)`
        this.r_img.transform = `translate(-${this.imgWidthRight*((topX)/this.imgWidthLeft)}px,-${this.imgWidthRight*((topY)/this.imgWidthLeft)}px)`
      },
      // 点击小图切换大图
      changeImg(event,index){
        this.$refs.bigImgLeft.src = event.target.src
        this.$refs.bigImgRight.src = event.target.src
        this.currentIndex = index
        // console.log(event.target.title);
        this.currentStyle = event.target.title
      },
      //添加至购物车
      addShop(){
        // 判断是否登录
        if (window.sessionStorage.token) {
          // 判断是否选择款式
          if (!this.currentStyle) {
            this.$message.config({
              top: '750px',
            })
            this.$message.info("未选择颜色");
          }else{
            if (this.lastStyle == this.currentStyle) {
              this.$message.info("亲,购物车中有相同的款式哦,您可以前去购物车修改数量");
              return
            }
            this.lastStyle = this.currentStyle
            // 先将数量,样式,尺寸在当前详情界面商品信息添加修改
            this.$store.dispatch('updateShopInfo',{
              num: this.shopNum,
              params: [this.currentStyle,this.styleSize],
            })
            // 再将修改后的当前商品详情添加至shopCart的vuex的state中
            // this.$store.dispatch('updateShopCart',this.shop1)
            this.$store.dispatch('ToShopCart',{shopInfo:this.shop1})
            //清空本地sessionStorage,以及本地shopCart
            this.$store.commit('clear_shop_cart')
            // 拉取数据库数据到本地shopCart,并且添加值sessionStorage
            this.$store.dispatch('initShopCart')
            // this.$store.dispatch('addToSession')
            this.$message.success("添加成功");
          }
        }else{
          if (confirm('尚未登录,请先登录')) {
            this.$router.push('/login')
          }
        }
      },
      // 立即购买
      toPay(){
        if (window.sessionStorage.token) {
          // 判断是否选择款式
          if (!this.currentStyle) {
            this.$message.config({
              top: '450px',
            })
            this.$message.info("未选择颜色");
          }else{
            const buyShop = [
              {
                customer_id: window.sessionStorage.userId,
                name: '龙虾小店',
                num: this.shopNum,
                params: [this.currentStyle,this.styleSize],
                store_id: 1,
                img: this.shop2[0].img,
                price: this.shop2[0].price,
                sku_id: this.shop1[0].id,
                special_price: this.shop2[0].special_price,
                title: this.shop2[0].title
              }
            ]
            window.localStorage.buyShopList1 = JSON.stringify(buyShop)
            this.$router.push('/payTotal')
          }
        }else{
          this.visible = true;
        }
      },
      // 确认登录,页面跳转
      handleOk(e) {
        this.$router.push('/login')
        this.visible = false;
      },
    },
    computed:{
      ...mapState({
        shop1: state => state.details.shop1,
        shop2: state => state.details.shop2,
      })
    },
    created(){
      const {id} = this
      this.$store.dispatch('getShop',id)
    },
    activated(){
      // 给窗口绑定一个卸载的监听(刷新页面的时候触发)
      window.addEventListener('load',()=>{
        this.$store.dispatch('initShopCart')
      })
    },
    
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
  /deep/.back_or_forward
    margin 30px 0 40px
    background-color #fff 
    color skyblue
    /deep/.ant-btn
      outline none
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
        height 250px
        // border-bottom 2px solid #000
        h3
          font-size 30px
        span
          color #b0b0b0
        .price
          font-size 26px
          font-weight 500
          color #000
        .underline
          color #b0b0b0
          margin-left 5px
          font-size 16px
          text-decoration-line line-through
        .promotion
          font-size 14px
          width 495px
          height 65px
          margin-top 25px
          background-color #F7F7F7
          display flex 
          align-items center
          h
          .title
            display inline-block
            width 44px
            height 22px
            margin 0 10px 0
            background-color #000
            color #fff
            text-align center
          .con
            margin-left 10px
          .on 
            color #000
      .middel
        height 280px
        margin-bottom 30px
        display flex
        flex-direction column
        justify-content space-around
        ul 
          display flex 
          // margin-bottom 10px
          flex-wrap wrap
          
          li 
            box-sizing border-box
            width 65px
            height 65px
            margin 0px 10px 10px 0
          li.on 
            border 1px solid #000
          img 
            cursor pointer
            width 63px
            height 63px
            display block
            margin 0 auto
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
          // border: 1px solid teal
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
          left 645px
          width: 516px
          height: 516px
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
          img 
            cursor pointer
            width 60px
            height 60px
            margin 0px 10px 10px 0
          flex 1
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