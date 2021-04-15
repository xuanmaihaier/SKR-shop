<template>
  <div class="MySwiper" :style="Mystyle">
    <swiper ref="MySwiper" :options="MySwiper">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img alt="example" :src="item" />
        <slot></slot>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-show="swiperShow"></div>
      　　
      <div class="swiper-button-prev" slot="button-prev"></div>
      　　
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "MySwiper",
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
    Mystyle:{
      type:Object,
      default: () => {},
    },
    swiperShow:{
      type:Boolean,
      default: true,

    }
  },
  data() {
    return {
      MySwiper: {
        slidesPerView: 1,
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".MySwiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".MySwiper .swiper-button-next",
          prevEl: ".MySwiper .swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.MySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.MySwiper {
  position: relative;
  cursor: pointer;
  height: 100%;
 img{
   width: 100%;
   height: 100%;
 }
}
.swiper-container {
  width: 100%;
}
.swiper-button-prev {
  left: 30px;
}
.swiper-button-next {
  right: 30px;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ccc; /* 设置Swiper风格 */
}
</style>