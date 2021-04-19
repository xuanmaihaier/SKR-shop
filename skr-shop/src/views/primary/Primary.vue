<template>
  <div class="Primary">
    <Title
      ><p>{{ $route.params.id }}</p></Title
    >
    <Tag />
    <Breadcrumb class="Breadcrumb" />
    <div class="PrimaryItem">
      <Aslide />
      <PrimaryList
        :TypeOne="TypeOne"
        :TypeOneLength="TypeOneLength"
        :SortChange_list="SortChange_list"
        :HotSale="HotSale"
      />
    </div>
  </div>
</template>

<script>
import { getTypeOneList } from "network/getList";
import bus from "utils/bus";
import Title from "components/common/title/Title.vue";
import Tag from "components/content/tag/Tag.vue";
import PrimaryList from "components/content/primarylist/PrimaryList.vue";
import Aslide from "./childComps/Aslide.vue";
import Breadcrumb from "./childComps/Breadcrumb";
export default {
  name: "Primary",
  data() {
    return {
      // 商品
      TypeOne: [],
      // 总条数
      TypeOneLength: 0,
      // 三种分类
      SortChange_list: [],
      // 热销
      HotSale: [],
    };
  },
  components: {
    Tag,
    Title,
    PrimaryList,
    Aslide,
    Breadcrumb,
  },
  methods: {
    getTypeOneList_init() {
      getTypeOneList(this.$route.params.id).then((res) => {
        if (res.code != 200) return;
        let TypeOne = [];
        TypeOne = res.res;
        this.TypeOne = TypeOne;
        this.TypeOneLength = res.res.length;
        // 价格从高到低的数据
        let TypeOneHeight = [];
        let data = JSON.parse(JSON.stringify(res.res));
        TypeOneHeight = data.sort((a, b) => a.price - b.price);
        let data_ = JSON.parse(JSON.stringify(res.res));
        // 价格从低到高的数据
        let TypeOneLow = [];
        TypeOneLow = data_.sort((a, b) => b.price - a.price);
        // 销量从高到低
        let datas_ = JSON.parse(JSON.stringify(res.res));
        let TypeOneCount = [];
        TypeOneCount = datas_.sort((a, b) => b.sale - a.sale);
        // 热销商品截取展示
        this.HotSale = TypeOneCount.slice(0, 10);
        // 传输到兄弟组件
        bus.$emit("HotSale", this.HotSale);
        this.SortChange_list = [
          TypeOne,
          TypeOneLow,
          TypeOneHeight,
          TypeOneCount,
        ];
      });
    },
  },
  created() {
    this.getTypeOneList_init();
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) this.getTypeOneList_init();
    },
  },
};
</script>

<style lang="less" scoped>
.PrimaryItem {
  padding: 0 38px;
  display: flex;
  justify-content: space-between;
}
.Breadcrumb {
  width: 58%;
  display: flex;
  align-items: center;
  margin: 20px auto;
}
/deep/ .ant-breadcrumb {
  text-align: left;
}
</style>