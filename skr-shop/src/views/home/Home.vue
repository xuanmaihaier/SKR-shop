<template>
  <div>
    <!-- 头部轮播 -->
    <SwiperHreader :TopSwiper="TopSwiper" v-if="TopSwiper.length > 0" />
    <Title><p>Basketball shoes</p></Title>
    <AnCard :AnCard_list="AnCard_list" v-if="AnCard_list.length > 0" />
    <StickyBanner />
    <Title><p>Skate shoes</p></Title>
    <SwiperList
      :SwiperList_list="SwiperList_list"
      v-if="SwiperList_list.length > 0"
    />
    <Title><p>Running shoes</p></Title>
    <SwiperCarousel
      :SwiperCarousel_list="SwiperCarousel_list"
      v-if="SwiperCarousel_list"
    />
    <Title><p>Casual shoes</p></Title>
    <!-- 带有颜色渐变的轮播 -->
    <SwiperColor />
    <List :list_list="list_list" v-if="list_list" />
    <Title><p>BEAUTY PICK +</p></Title>
    <SwiperAndList
      :SwiperAndList_list="SwiperAndList_list"
      v-if="SwiperAndList_list.length > 0"
    />
    <SwiperHreader
      class="margin"
      :TopSwiper="TopSwiper"
      v-if="TopSwiper.length > 0"
    />
    <TypeList
      v-if="TypeList_list.length > 0"
      v-for="(item, index) in TypeList_list"
      :key="index"
      :item="item"
      :TypeList="TypeList[index]"
    />
    <Title><p>DESIGNERS</p></Title>
    <SwiperTab />
    <Title><p>WDNA STYLE</p></Title>
    <ShopListTab />
    <Footer />
  </div>
</template>

<script>
import Title from "components/common/title/Title";
import SwiperHreader from "./childComps/SwiperHreader";
import AnCard from "./childComps/AnCard";
import StickyBanner from "./childComps/StickyBanner";
import SwiperList from "./childComps/SwiperList";
import SwiperCarousel from "./childComps/SwiperCarousel";
import SwiperColor from "./childComps/SwiperColor";
import List from "./childComps/List";
import SwiperAndList from "./childComps/SwiperAndList";
import TypeList from "./childComps/TypeList";
import SwiperTab from "./childComps/SwiperTab";
import ShopListTab from "./childComps/ShopListTab";
import Footer from "./childComps/Footer";
import { getSpu, getSpg } from "network/getHomeList";
import { getTypeOneList, getTypeOTwoList } from "network/getList";
export default {
  name: "Home",
  data() {
    return {
      TopSwiper: [],
      AnCard_list: [],
      SwiperList_list: [],
      SwiperCarousel_list: [],
      list_list: [],
      SwiperAndList_list: [],
      TypeList_list: [],
      TypeList: [],
    };
  },
  components: {
    SwiperHreader,
    Title,
    AnCard,
    StickyBanner,
    SwiperList,
    SwiperCarousel,
    SwiperColor,
    List,
    SwiperAndList,
    TypeList,
    SwiperTab,
    ShopListTab,
    Footer,
  },
  methods: {
    getSpu_init() {
      getSpu("休闲上衣").then((res) => {
        if (res.code != 200) return;
        this.TopSwiper = res.res;
      });
    },
    AnCard_init() {
      getTypeOTwoList("篮球鞋").then((res) => {
        if (res.code != 200) return;
        this.AnCard_list = res.data;
      });
    },
    SwiperList_init() {
      getTypeOTwoList("板鞋").then((res) => {
        if (res.code != 200) return;
        this.SwiperList_list = res.data;
      });
    },
    SwiperCarousel_init() {
      getTypeOTwoList("跑鞋").then((res) => {
        if (res.code != 200) return;
        this.SwiperCarousel_list = res.data;
      });
    },
    list_init() {
      getTypeOTwoList("休闲鞋").then((res) => {
        if (res.code != 200) return;
        this.list_list = res.data;
      });
    },
    SwiperAndList_init() {
      getTypeOTwoList("短袖针织衫").then((res) => {
        if (res.code != 200) return;
        this.SwiperAndList_list = res.data;
      });
    },
    TypeList_init() {
      let TypeList = ["服饰", "鞋类", "配件", "儿童专区"];
      this.TypeList = TypeList;
      let arr = [];
      TypeList.forEach((item) => {
        arr.push(getTypeOneList(item));
      });
      Promise.all(arr).then((res) => {
        console.log(res);
        res.forEach((item, index) => {
          if (item.code != 200) return;
          this.TypeList_list.push(item.res.slice(0, 7));
        });
      });
    },
  },
  created() {
    this.getSpu_init();
    this.AnCard_init();
    this.SwiperList_init();
    this.SwiperCarousel_init();
    this.list_init();
    this.SwiperAndList_init();
    this.TypeList_init();
  },
};
</script>

<style lang="less" scoped>
.margin {
  margin-top: 20px;
}
</style>