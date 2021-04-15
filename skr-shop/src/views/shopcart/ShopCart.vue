<template>
  <div>
    <div style="display:block" class="cart-to-login fixed-width">
      <h4>您还没有登入</h4>
      <p>
        立即去
        <a href="/login">登入</a>
        或者
        <a href="/signup">注册</a>
        安踏会员
      </p>
    </div>
    <div class="shop-cart fixed-width">
      <h3 class="cart-title">
        <span>我的购物车</span>
        <i class="total-num">共 1 件</i>
      </h3>
      <div class="cart-top">
        <label class="checkbox-label checkbox-all">
          <input checked='false' type="checkbox" class="checkbox-input">
          <i></i>
          <span>全选</span>
        </label>
      </div>
      <ul class="cart-list fixed-width">
        <li class="goods-item"  v-for="(item,index) in 6" :key="index">
          <div class="checkbox-item">
            <label class="checkbox-label checkbox-one">
              <input checked='false' type="checkbox" class="checkbox-input">
              <i></i>
            </label>
          </div>
          <div class="showImg">
            <img src="https://img.fishfay.com/shopgoods/4/162128504/162128504-2-1/98e9cbe091077ec2e9c6671372a98316.jpg">
          </div>
          <div class="infos">
            <div class="info-top">
              <div class="fl">
                <h5 class="info-name">梭织短裤</h5>
                <p><span>颜色:基础黑;尺码M</span></p>
              </div>
              <div class="fr">
                <div class="info-price">￥179.00</div>
                <div class="under-info-price">￥111.00</div>
              </div>
            </div>
            <div class="info-bom">
              <p class="fl">
                <span>数量 :</span>
                <a href="javascript:;" class="num-minus num">-</a>
                <input type="text" value="1">
                <a href="javascript:;" class="num-plus num">+</a>
              </p>
              <p class="fr">
                <a href="javascript:;" class="delete-one">删除</a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-foot">
      <div class="sum-main fixed-width">
        <div class="left">
          <div class="fl">
            <label class="checkbox-label checkbox-all">
              <input checked='false' type="checkbox" class="checkbox-input">
              <i></i>
              <span>全选商品</span>
            </label>
            <a href="javascript:;" class="del-all-check-goods">删除商品</a>
          </div>
          <div class="fr">
            <span>总价</span>
            <span class="total-price">￥179.00</span>
          </div>
        </div>
        <div class="cart-pay">
          <a href="javascript:;">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.checkbox-label
  .checkbox-input
    width 0
    height 0
    margin 0
    padding 0
    border none
    &:checked + i:after
      opacity 0
  i 
    display inline-block
    width 15px
    height 15px
    background-color: #fff;
    border: 1px solid #111;
    margin-right 8px
    position relative
    top 3px
    cursor pointer
    &:after
      opacity 1
      content: ''   
      position: absolute;
      width: 9px;    
      height: 5px;
      background: transparent;    
      top: 3px;
      left: 2px;
      border: 2px solid #000;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
.fixed-width
  max-width 1200px
  margin 30px auto 
  overflow hidden 

.cart-to-login
  height 87px
  border 1px solid #E4E4E4
  padding 15px 20px
  color #999
  font-size 13px
  h4 
    color: #f05124
    font-size: 16px
    line-height: 30px
    margin 0
  p 
    padding: 3px 0;
    margin 0
    a 
      color #A788A7
      border-bottom: 1px solid #999;
.shop-cart
  margin-bottom 50px
  .cart-title
    position relative
    height 50px
    line-height 50px
    overflow hidden 
    &::after
      content ''
      position absolute
      top 0
      display block
      width 55px
      height 4px
      background-color #000
    span 
      font-size 28px
      font-weight 600
      vertical-align: middle;
      overflow hidden
    .total-num
      font-size 12px
      color #999
      font-style normal 
      margin-left 10px
      display inline-block
      line-height 35px
      vertical-align: bottom;
      font-weight 400
  .cart-top
    margin: 5px 0 15px;
    line-height 18px
    .checkbox-label
      position relative
      span 
        font-size 12px
  .cart-list
    .goods-item
      width 100%
      height 140px
      border-bottom 1px solid #C3C3C3
      display flex 
      justify-content flex-start
      align-items center
      padding 20px 0
      .checkbox-item
        width 40px
      .showImg
        margin 0 25px
        img 
          width 100px
          height 100px
      .infos
        flex 1
        overflow hidden
        margin  20px 0
        p 
          margin 0
        .fl
          float left 
          .info-name
            font-size 18px
            margin 0
          p 
            height 22px
        .fr
          float right
        .info-top
          overflow hidden
          .info-price
            font-size 16px
            color #000
            font-weight 500
          .under-info-price
            text-decoration-line line-through
            // font-size 13px
            color #777
            text-align right
        .info-bom
          overflow hidden
          a 
            color #000
          .fl
            display flex 
            justify-content flex-start
            span 
              margin-right 20px
            .num
              display inline-block
              width 30px
              height 26px
              box-sizing border-box
              border 1px solid #CCC
              text-align center
            .num-minus
              margin-right 3px
            .num-plus
              margin-left 3px
            input 
              outline none
              border 1px solid #CCC
              width 78px
              height 26px
              font-size 12px
              text-align center
              padding 0
              margin 0
.cart-foot
  width 100%
  height 70px
  background-color #3E3E3E
  .left
    float left
    width 1000px
    height 40px
    border-right 1px solid #999
    margin-top 15px
    color #fff
    margin-right 20px
    .fl
      float left
      line-height 40px
      font-size 12px
      .checkbox-label
        margin-right 20px
      a 
        color #fff
    .fr
      float right
      line-height 40px
      margin-right 25px
      font-size 13px
      span 
        display block
        line-height 14px
        font-size 12px
        &.total-price
          line-height 30px
          font-size 18px
  .cart-pay
    float right
    width 150px
    height 40px
    margin-top 15px
    a
      display inline-block
      width 150px
      height 40px
      text-align center
      line-height 40px
      background-color #ED4025
      color #fff

</style>
