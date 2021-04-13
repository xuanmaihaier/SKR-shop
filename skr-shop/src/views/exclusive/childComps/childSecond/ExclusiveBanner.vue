<template>
<!-- 1 -->
  <div class="exclusive_banner">
    <div calss="slide_wraps" :style="{ width: '65%', float: 'left' ,}">
      <my-swiper :imgs="swiper_list" :Mystyle="{ width: '100%',height:'100%' }"></my-swiper>
    </div>
    <div class="thumbnail">
      <ul>
        <a-card
          hoverable
          :style="{ width: '46%', margin: '0 2% 2%' }"
          v-for="(item, index) in thumbnail_list"
          :key="index"
        >
          <img slot="cover" alt="example" :src="item.url" />
          <a-card-meta title="Europe Street beat">
            <template slot="description"> www.instagram.com </template>
          </a-card-meta>
        </a-card>
      </ul>
    </div>
  </div>
</template>

<script>
import MySwiper from "components/common/myswiper/MySwiper.vue";
export default {
  components: { MySwiper },
  name: "ExclusiveBanner",
  data() {
    return {
      thumbnail_list: [
        {
          url: `//image.wconcept.co.kr/images/builder/1/4/56/253/PE2_407x517_1_20210407154105.jpg`,
          title: `NILBY P`,
          particulars: "소소한 일상에 깃든 새로움 닐바이피 ",
        },
        {
          url: `//image.wconcept.co.kr/images/builder/1/4/56/253/PE2_407x517_2_20210407154122.jpg`,
          title: `NAGUISA`,
          particulars: "에스파드류를 사랑하는 그대에게, 21SS 단독 세일",
        },
        {
          url: `//image.wconcept.co.kr/images/builder/1/4/56/253/PE2_407x517_3_20210407154137.jpg`,
          title: `CHIELEI`,
          particulars: "긍정적인 에너지를 전하는 이지한 감성의 컬렉션",
        },
        {
          url: `//image.wconcept.co.kr/images/builder/1/4/56/253/PE2_407x517_4_20210407154155.jpg`,
          title: `VEILGA`,
          particulars: "젠더리스를 기반으로 한 미니멀리즘 브랜드",
        },
     
      ],
      swiper_list: [
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_01_20210317163320.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_3_20210407152918.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_4_20210407153250.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_05_20210331160704.jpg",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.exclusive_banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  .thumbnail {
    float: right;
    width: 33.5%;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    //  height: 700px;
    }
  }
}
</style>