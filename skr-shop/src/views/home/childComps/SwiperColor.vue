<template>
  <div class="SwiperColor">
    <swiper ref="SwiperColor" :options="SwiperColor">
      <swiper-slide v-for="(item, index) in list_list.slice(23,32)" :key="index">
        <img :src="item.img"/>
        <div class="mask" ref="mask" @click="swiperClick(item.id)" :style="{'backgroundColor':colorarr[index]}">
          <p>{{item.title}}</p>
        </div>
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
        colorarr: ['red', 'orange', 'blue', 'green', 'purple', 'pink', 'red', 'orange','blue'],
        SwiperColor: {
          direction: "horizontal", //滑动方向，可设置水平(horizontal)或垂直(vertical)。
          slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
          centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
          spaceBetween: 10, // 在slide之间设置距离（单位px）。
          loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          navigation: {
            nextEl: ".SwiperColor .swiper-button-next",
            prevEl: ".SwiperColor .swiper-button-prev",
          },
        },
      };
    },
    props:{
      list_list:{
        type:Array,
        default:()=>[]
      }
    },
    computed: {
      swiper() {
        return this.$refs.SwiperColor.$swiper;
      },
    },
    methods: {
      swiperClick(id){
      this.$router.push(`/details/${id}`)
    }
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
    cursor:grab;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-container .swiper-wrapper .swiper-slide {
    width: 46% !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
  }

  .swiper-container .swiper-wrapper .swiper-slide img {
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
  }

  .swiper-container .swiper-wrapper .swiper-slide-prev,
  .swiper-container .swiper-wrapper .swiper-slide-next {
    transform: scale(0.9) !important;
    transition: transform 0.5s;
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
    --swiper-theme-color: #black;
    /* 设置Swiper风格 */
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      padding: 0 20px;
      opacity: 1 ;
      font-size: 40px;
      color: rgb(252, 252, 252);
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .mask:hover {
    transition: opacity .5s linear;
    opacity: .6;
  }
</style>