<template>
  <div id="return_delivery">
    <div class="title">
      <h5>配送/交换/退货/售后服务相关注意事项</h5>
      <p>商品的详细说明中包含配送/更换/退货/取消相关的指南时，会优先适用于下列说明事项:</p>
    </div> 
    <div class="content">
      <ul>
        <li>
          <div class="left"><span>配送信息</span></div>
          <div class="right">
            <ul>
              <li><p>根据商品的特性及配送地不同配送类型及所需时间会有所不同。</p></li>
              <li><p>部分订购商品或预约商品的情况，除了基本配送日之外，可能会发生追加配送需要日。</p></li>
              <li><p>即使是同一品牌的商品，由于各商品的出库日期不同，也可以分别配送。</p></li>
              <li><p>图书山区可能会追加运费和退货费。</p></li>
              <li><p>商品的配送费根据供应企业的政策而不同，公休日和休息日是不能配送的。</p></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="left"><span>取消/退货/换货指南</span></div>
          <div class="right">
            <ul>
              <li><p>商品除了瑕疵之外，尺寸，颜色交换等单纯变心的交换/退货的快递费由顾客负担，产生往返快递费。(根据电子商务等有关消费者保护的法律第18条(撤销要约等)第9款，消费者因情况撤回要约时，快递费由消费者承担。)</p></li>
              <li><p>结算结束后立即取消订单，可在“MY Page>取消/更换/退货申请”中直接办理。</p></li>
              <li><p>订购完成后因库存不足等可能会进行取消订单处理，请谅解。</p></li>
              <li><p>订购状态正在准备商品的情况下，可能已经配送或包装完毕，不能直接进行处理，请通过顾客中心咨询。</p></li>
              <li><p>换货申请第一次仅限于一次，配送完成后不可追加换货申请。</p></li>
              <li><p>请在配送完成后的7天内接收未使用的产品。</p></li>
              <li><p>不可退货，请务必通过客服中心或“MY Page>取消订单/更换/退货申请”接受申请。</p></li>
              <li><p>商品缺陷，误配送的情况下快递费可以免费更换/退货，但是显示器的颜色差异，穿戴感，尺寸的个人偏好度不是商品的瑕疵事由。</p></li>
              <li><p>因顾客不注意而导致商品毁损，变更的情况，无法退货/更换。</p></li>
              <li><p>按电子商务法，当取消/退货货款延迟退款时，按照电子商务法办理延期退款赔偿手续。</p></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="left"><span>无法退货/换货时</span></div>
          <div class="right">
            <ul>
              <li><p>使用或者损毁产品，遗漏赠品，商品TAG，保证书，商品附件或者丢失的</p></li>
              <li><p>拆开密封包装或者损毁，丢失内部包装材料的(但非拆封确认产品除外)</p></li>
              <li><p>商品价值的丧失达到难以再销售的程度</p></li>
              <li><p>根据您的要求，订制的产品，除了您以外，很难使用</p></li>
              <li><p>配送的商品安装完毕(家电，家具等)</p></li>
              <li><p>有其他有关电子商务等消费者保护的法律规定的撤销要约限制情形的</p></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="left"><span>A/S指南</span></div>
          <div class="right">
            <ul>
              <li><p>至于能否以售后服务(A/S)为标准，根据品牌和商品不同，所以有关咨询请通过doubicon客服中心咨询。</p></li>
              <li><p>因商品不良而发生的退货、更换、A/S、退款、质量保证及损害赔偿等事项，可以根据消费者纠纷解决标准(公平交易委员会告示)接受。</p></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#return_delivery 
  width 1240px
  margin-top 62px
  .title 
    h5
      font-size 18px
    >p 
      margin 10px 0 20px
      font-size 14px
  .content
    width 1240px
    >ul 
      >li 
        border-bottom  1px solid #D5D5D5
        overflow hidden
        position relative
        &:nth-child(1)
          border-top  1px solid #D5D5D5
        &>div
          float left 
        .left
          box-sizing border-box
          text-align center 
          width 270px
          padding-bottom 99999px
          margin-bottom -99999px
          background-color #FAFAFA
          span 
            position absolute 
            top 50%
            left 135px
            transform translate(-50%,-50%)
        .right 
          width 970px
          >ul
            width 930px
            margin-left 310px
            margin-top 12px
            >li
              list-style disc 
              width 100%
              font-size 12px
</style>
