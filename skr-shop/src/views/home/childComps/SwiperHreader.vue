<template>
  <div class="SwiperHreader">
    <swiper ref="SwiperHreader" :options="SwiperHreader">
      <swiper-slide v-for="(item, index) in 4" :key="index">
        <img
          alt="example"
          src="//image.wconcept.co.kr/images/builder/1/4/15/28/pc03_1920x600_20210409154158.jpg"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      　　
      <div class="swiper-button-prev" slot="button-prev"></div>
      　　
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SwiperHreader",
  data() {
    return {
      SwiperHreader: {
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".SwiperHreader .swiper-pagination",
          clickable: true,
        },
          navigation: {
        nextEl: '.SwiperHreader .swiper-button-next',
        prevEl: '.SwiperHreader .swiper-button-prev',
      },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.SwiperHreader.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.SwiperHreader {
  position: relative;
  width: 100%;
  cursor: pointer;
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