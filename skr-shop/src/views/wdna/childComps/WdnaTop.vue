<template>
  <div class="wdna_top">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>

  </div>
</template>

<script>
import { getTypeOneList } from "network/getList.js";

export default {
  nama: "WdnaTop",
  data() {
    return {
      colorarr: [
        "red",
        "orange",
        "blue",
        "green",
        "purple",
        "pink",
        "red",
        "orange",
        "blue",
      ],

      Img_List: [],
    };
  },
  components: {},
  created() {
    this.getTypeOneList_();
  },
  methods: {
    async getTypeOneList_() {
      const { res } = await getTypeOneList("鞋类");
      this.Img_List = res;
    },
  },
};
</script>

<style  scoped>
.wdna_top{
    white-space: 100%;
    height: 100%;
}
.swiper-container {
    width: 600px;
    height: 300px;
}  
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: avtive 2s infinite;
}

.mask:hover {
  transition: opacity 0.5s linear;
  opacity: 0.6;
}
@keyframes avtive {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>