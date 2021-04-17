<template>
  <div class="SwiperAndList">
    <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions" @click="swiperClick(swiper)">
        <swiper-slide v-for="(item, index) in SwiperAndList_list.slice(8, 16)" :key="index">
          <img
            alt="example"
            :src="item.img" width="100%"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        　　
        <div class="swiper-button-prev" slot="button-prev"></div>
        　　
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

    <div class="list">
      <div class="AnCard">
        <a-card
          hoverable
          class="card"
          v-for="(item, index) in SwiperAndList_list.slice(8, 16)"
          :key="index"
          @click="cardclick(item.id)"
        >
          <img alt="example" :src="item.img" width="100%" />
          <a-card-meta :title="item.title">
            <template slot="description">
              <p class="description">www.stride.fun</p>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperAndList",
  data() {
    return {
      swiperOptions: {
        slidesPerView: "1",
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: {
    SwiperAndList_list: {
      type: Array,
      default: () => {},
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    cardclick(id) {
      this.$router.push(`/details/${id}`);
    },
    swiperClick(swiper){
      let data = this.SwiperAndList_list[swiper.realIndex+8].id
      this.$router.push(`/details/${data}`)
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.SwiperAndList {
  padding: 0 10px;
  display: flex;
}
.swiper {
  position: relative;
  width: 40%;
  cursor: grab;

  object-fit: cover;
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
.list {
  width: 60%;
}
.AnCard {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  .card {
    width: calc((100% / 4) - 8px);
    margin: 4px;
    .img {
      width: 100%;
    }
  }
  .description {
    color: #666;
    font-family: "yg740";
    font-size: 12px;
    line-height: 1.5;
    word-break: keep-all;
  }
}
/deep/ .ant-card-meta-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
  font-family: "ProximaNova-Bold";
  font-size: 20px;
  padding-top: 30px;
}
</style>