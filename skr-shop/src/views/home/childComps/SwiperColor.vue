<template>
  <div class="SwiperColor">
    <swiper ref="SwiperColor" :options="SwiperColor">
      <swiper-slide v-for="(item, index) in 8" :key="index">
        <img
          src="//image.wconcept.co.kr/images/builder/1/4/15/282/PM_exclusive_01_20210408145004.jpg?RS=900"
        />
        <div class="mask" ref="mask" :style="{'backgroundColor':colorarr[index]}"></div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      　　
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SwiperColor",
  data() {
    return {
      colorarr:['red','yellow','blue','green','purple','pink','white','black'],
      SwiperColor: {
        direction: "horizontal", //滑动方向，可设置水平(horizontal)或垂直(vertical)。
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
        centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
        spaceBetween: 10, // 在slide之间设置距离（单位px）。
        loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
        navigation: {
          nextEl: ".SwiperColor .swiper-button-next",
          prevEl: ".SwiperColor .swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.SwiperColor.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.SwiperColor {
  width: 100%;
  padding: 0 10px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 60% !important;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  transform: scale(1);
  border-radius: 5px;
  cursor: pointer;
}
.swiper-container .swiper-wrapper .swiper-slide-prev,
.swiper-container .swiper-wrapper .swiper-slide-next {
  transform: scale(0.9) !important;
  opacity: 0.5;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img,
.swiper-container .swiper-wrapper .swiper-slide-next img {
  width: 100%;
  height: 100%;
}
.swiper-button-prev {
  left: 13%;
}
.swiper-button-next {
  right: 13%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ffffff; /* 设置Swiper风格 */
}
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  opacity:0;
}
.mask:hover{
  transition: opacity .5s linear;
   opacity:.6;
}
</style>