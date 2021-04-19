<template>
  <div class="SwiperColor">
    <swiper ref="SwiperColor" :options="SwiperColor">
      <swiper-slide
        v-for="(item, index) in list_list.slice(23, 30)"
        :key="index"
        :style="{
          'background-image': `linear-gradient(to right,#fff 55%,${colorarr[index]} 100%)`,
        }"
      >
        <img :src="item.img" @click="swiperClick(item.id)"/>
        <p  :style="{'color':colorarr[index]}">{{ text[index] }}</p>
        <span  v-if="index!=6" class="tip">右划查看下一款<a-icon type="caret-right" /></span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SwiperColor",
  data() {
    return {
      colorarr: [
        "rgba(44, 58, 71, .4)",
        "rgba(41, 128, 185, .4)",
        "rgba(253, 114, 114, .4)",
        "rgba(202, 211, 200, .4)",
        "rgba(61, 61, 61,.4)",
        "rgba(241, 144, 102,.4)",
        "rgba(225, 95, 65,.4)",
        "rgba(248, 165, 194,.4)",
        "rgba(61, 193, 211.4)",
      ],
      text:[
        "拒绝平庸",
        "千刃",
        "游心",
        "星流",
        "教父",
        "裂变",
        "无极",
      ],
      SwiperColor: {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      },
    };
  },
  props: {
    list_list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    swiper() {
      return this.$refs.SwiperColor.$swiper;
    },
  },
  methods: {
    swiperClick(id) {
      this.$router.push(`/details/${id}`);
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
  cursor: grab;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container-cube{
  overflow:hidden
}

.swiper-container .swiper-wrapper .swiper-slide img {
  border-radius: 5px;
  width: 50%;
}

.tip,
p {

  position: absolute;
  text-align: center;
  width: 70%;
  text-align: right;
  left: 20%;
  top: 50%;
  font-size: 33px;
  opacity: 0.4;
  font-weight: 700;
  opacity: 1;
   letter-spacing: 30px;
}
.tip{
  letter-spacing: 10px;
  font-size: 20px;
  top: 58%;
}
</style>