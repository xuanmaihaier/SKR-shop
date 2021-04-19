<template>
  <div class="SwiperHreader">
    <swiper ref="SwiperHreader" :options="SwiperHreader">
      <swiper-slide v-for="(item, index) in TopSwiper" :key="index" >
        <img
         @click="swiperClick(index)"
          alt="example"
          :src="item.swiperImg"
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
        slidesPerView: 1,
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
  props:{
    TopSwiper:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    swiperClick(index){
      let data = JSON.parse(this.TopSwiper[index].params)
      if(data.id!=undefined){
        this.$router.push(`/details/${data.id}`)
      }else{
        this.$router.push(`/secondary/${data.name}_${data.series}`)
      }
    }
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
   z-index: 999;
}
.swiper-button-next {
  right: 30px;
}
.swiper-button-prev,
.swiper-button-next {
 
  --swiper-theme-color: #ccc; /* 设置Swiper风格 */
}
</style>