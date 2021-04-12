<template>
  <div>
    <!-- 头部轮播退 -->
    <SwiperHreader />
    <Title><p>STYLE STORY</p></Title>
    <AnCard />
    <StickyBanner />
    <Title><p>WHAT'S NEW</p></Title>
    <SwiperList />
    <Title><p>MAKE IT YOURS</p></Title>
    <SwiperCarousel />
    <Title><p>EXCLUSIVE +</p></Title>
    <!-- 带有颜色渐变的轮播 -->
    <SwiperColor />
    <List />
    <Title><p>BEAUTY PICK +</p></Title>
    <SwiperAndList />
    <SwiperHreader class="margin" />
    <TypeList />
    <TypeList />
    <TypeList />
    <TypeList />
    <Title><p>DESIGNERS</p></Title>
    <SwiperTab />
    <Title><p>WDNA STYLE</p></Title>
    <ShopListTab />
    <FooterNav/>
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
import ShopListTab from "./childComps/ShopListTab"
import FooterNav from "./childComps/FooterNav"
export default {
  name: "Home",
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
    FooterNav
  },
};
</script>

<style lang="less" scoped>
.margin {
  margin-top: 20px;
}
</style>