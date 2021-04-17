<template>
  <div class="SwiperList">
    <swiper ref="SwiperList" :options="SwiperList" @click="swiperClick(swiper)">
      <swiper-slide v-for="(item, index) in SwiperList_list.slice(0,8)" :key="index">
        <a-card hoverable class="card">
          <img
            slot="cover"
            alt="example"
            :src="item.img"
          />
          <a-card-meta :title="item.title">
            <template slot="description">
              <p class="description">www.stride.fun</p>
            </template>
          </a-card-meta>
        </a-card>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    　　
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  name: "SwiperList",
  data() {
    return {
      SwiperList: {
        slidesPerView: 4,
        spaceBetween: 60,
        centeredSlides: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        },
        navigation: {
          nextEl: ".SwiperList .swiper-button-next",
          prevEl: ".SwiperList .swiper-button-prev",
        },
      },
    };
  },
  props:{
    SwiperList_list:{
      type:Array,
      default:()=>[]
    }
  },
  computed: {
    swiper() {
      return this.$refs.SwiperList.$swiper;
    },
  },
  methods: {
     swiperClick(swiper){
      let data = this.SwiperList_list[swiper.realIndex].id
      this.$router.push(`/details/${data}`)
     
    }
  },
  mounted() {
    this.swiper.slideTo(2, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.SwiperList {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.swiper-container {
  padding: 70px 0;
}
img {
  transform: scale(0.6);
}
.swiper-slide-active {
  transform: scale(1.2) !important;
}
.swiper-button-prev {
  left: -8%;
}
.swiper-button-next {
  right: -8%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ccc; /* 设置Swiper风格 */
  z-index: 1;
}
</style>