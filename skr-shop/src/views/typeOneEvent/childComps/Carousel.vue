<template>
  <div class="carousel">
    <div class="cent">
      <a-carousel autoplay :dots=false>
        <div v-for="(item,index) in 4">
            <a href=""><img src="../../../assets/img/event/bg.jpg" alt=""></a>
        </div>
      </a-carousel>
      <div class="txt">
          <p>10%세일</p>
          <span>JSNY</span>
          <span>21SUMMER</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.carousel{
    width: 100%;
}
.cent{
    width: 1560px;
    margin: auto;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 510px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.txt{
    width: 100%;
    height: 150px;
}
</style>