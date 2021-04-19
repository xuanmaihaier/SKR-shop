<template>
  <div class="carousel">
    <div class="cent">
      <my-swiper :imgs="imgs" :swiperShow="false">
        <div class="txt">
          <p>10%세일</p>
          <span>JSNY</span>
          <span>21SUMMER</span>
        </div>
        <div class="cet-img">
          <ul>
            <li v-for="(item, index) in cetImg">
              <a href=""><img :src="item" alt="" /></a>
            </li>
          </ul>
        </div>
      </my-swiper>
    </div>
  </div>
</template>

<script>
import MySwiper from "components/common/myswiper/MySwiper.vue";
export default {
  components: {
    MySwiper,
  },
  data() {
    return {
      imgs: [
        "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_2_20210415180123.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_6_20210415180048.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_3_20210415175853.jpg",
      ],
      cetImg: [
        "//image.wconcept.co.kr/productimg/image/img1/80/301239080.jpg",
        "//image.wconcept.co.kr/productimg/image/img1/74/301239074.jpg",
        "//image.wconcept.co.kr/productimg/image/img1/70/301239070.jpg",
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.carousel {
  position: relative;
  width: 100%;
  // height: 500px;
}
.cent {
  position: relative;
  width: 85%;
  margin: auto;
}

.txt {
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 150px;
  padding: 35px 650px 0px 155px;
  background-color: #ffffffa6;
  font-size: 12px;
  font-family: "yg740";
  p {
    font-size: 14px;
    color: #666;
  }
  span:nth-of-type(1) {
    display: block;
    margin-top: 3px;
    font-size: 40px;
    color: #000;
  }
  span:nth-of-type(2) {
    display: block;
    font-size: 22px;
  }
}
.cet-img {
  position: absolute;
  bottom: -10px;
  right: 165px;
  z-index: 1;
  padding: 10px;
  background-color: #fff;
  width: 457px;
  height: 205px;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 139px;
      height: 185px;
      img {
        width: 100%;
      }
    }
  }
}
</style>