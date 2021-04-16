<template>
  <div class="SeconDary">
    <Title><p class="p_SeconDary">{{ $route.params.id }}</p></Title>
    <Breadcrumb />
    <BrandInfo />
    <PrimaryList :TypeOne="TypeOne" :TypeOneLength="TypeOneLength" :SortChange_list="SortChange_list"/>
  </div>
</template>

<script>
import { getTypeOTwoist } from "network/getList";
import Title from "components/common/title/Title";
import PrimaryList from "components/content/primarylist/PrimaryList.vue";
import Breadcrumb from "./ChildComps/Breadcrumb";
import BrandInfo from "./ChildComps/BrandInfo";
export default {
  name: "SeconDary",
  data() {
    return {
      TypeOne: [],
      // 总条数
      TypeOneLength: 0,
      // 三种分类
      SortChange_list: [],
      // 热销
    };
  },
  methods: {
    getTypeOTwoist_init() {
      getTypeOTwoist(this.$route.params.id).then((res) => {
        if (res.code != 200) return;
        let TypeOne = [];
        TypeOne = res.data;
        this.TypeOne = TypeOne;
        this.TypeOneLength = res.data.length;
        // 价格从高到低的数据
        let TypeOneHeight = [];
        let data = JSON.parse(JSON.stringify(res.data));
        TypeOneHeight = data.sort((a, b) => a.price - b.price);
        let data_ = JSON.parse(JSON.stringify(res.data));
        // 价格从低到高的数据
        let TypeOneLow = [];
        TypeOneLow = data_.sort((a, b) => b.price - a.price);
        // 销量从高到低
        let datas_ = JSON.parse(JSON.stringify(res.data));
        let TypeOneCount = [];
        TypeOneCount = datas_.sort((a, b) => b.sale - a.sale);
        // 热销商品截取展示
        this.SortChange_list = [
          TypeOne,
          TypeOneLow,
          TypeOneHeight,
          TypeOneCount,
        ];
      });
    },
  },
  components: {
    Title,
    Breadcrumb,
    BrandInfo,
    PrimaryList,
  },
  mounted() {
    this.getTypeOTwoist_init();
  },
};
</script>

<style lang="less" scoped>
.SeconDary {
  .p_SeconDary {
    margin-bottom: 10px;
    font-size: 36px;
  }
  .PrimaryList{
    margin: 0 auto;
  }
}
</style>