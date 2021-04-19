<template>
  <div class="SwiperTab">
    <ul class="tab">
      <li
        class="tabitem"
        v-for="(item, index) in SwiperTab_list.slice(8,12)"
        @click="liclick(index)"
        :class="{ active: page == index }"
        :key="index"
      >
        {{arr[index]}}
      </li>
    </ul>
    <swiper ref="mySwiper" :options="SwiperTab">
      <swiper-slide v-for="(item, index) in SwiperTab_list.slice(8,12)" :key="index">
        <img
          @click="swiperClick(item.id)"
          :src="item.img"
        />
      </swiper-slide>
      　　
      <div class="swiper-button-prev" slot="button-prev"></div>
      　　
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SwiperTab",
  data() {
    return {
      arr:['富强',"民主",'和谐','平等'],
      page: 1,
      SwiperTab: {
        direction: "horizontal", //滑动方向，可设置水平(horizontal)或垂直(vertical)。
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
        centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
        spaceBetween: 10, // 在slide之间设置距离（单位px）。
        loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        on: {
          slideChange: (e) => {
            let swiper = this.$refs.mySwiper.$swiper;
            let i = swiper.activeIndex;
            this.page = i;
          },
        },
        navigation: {
          nextEl: ".SwiperTab .swiper-button-next",
          prevEl: ".SwiperTab .swiper-button-prev",
        },
      },
    };
  },
  props:{
    SwiperTab_list:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    liclick(index) {
      this.swiper.slideTo(index, 1000, false);
      this.page = index;
    },
      swiperClick(id){
      this.$router.push(`/details/${id}`)
    }
  },
  computed: {
    swiper(swiper) {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 10px 0;
  font-size: 20px;
  .tabitem {
    width: 60px;
    text-align: center;
    cursor: pointer;
    font-family: "ProximaNova-Semibold";
    color: #b5b5b5;
    border-bottom: 3px solid transparent;
    transition: all ease-in-out 0.2s;
  }
}
.SwiperTab {
  width: 100%;
  padding: 0 10px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 40% !important;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
}
.swiper-container .swiper-wrapper .swiper-slide-prev,
.swiper-container .swiper-wrapper .swiper-slide-next {
  opacity: 0.5;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img,
.swiper-container .swiper-wrapper .swiper-slide-next img {
  width: 100%;
  height: 100%;
}
.active {
  border-bottom: 3px solid black !important;
}
.swiper-button-prev {
  left: 15%;
}
.swiper-button-next {
  right: 15%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ffffff; /* 设置Swiper风格 */
}
</style>