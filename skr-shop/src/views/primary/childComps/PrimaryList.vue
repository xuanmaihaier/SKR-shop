<template>
  <div class="PrimaryList">
    <div class="hearder">
      <div class="left">
        <p>今日推荐</p>
      </div>
    </div>
    <div class="sort">
      <span>共计 {{ TypeOneLength }} 件</span>
      <div>
        <a-select
          default-value="每页30"
          style="width: 120px"
          @change="handleChangePage"
        >
          <a-select-option
            v-for="(item, index) in PageLength"
            :value="item"
            :key="index"
          >
            每页{{ item }}
          </a-select-option>
        </a-select>
        <a-select
          default-value="默认"
          style="width: 120px"
          @change="handleChangeType"
        >
          <a-select-option
            v-for="(item, index) in SortChange"
            :value="item"
            :key="index"
            >{{ item }}</a-select-option
          >
        </a-select>
      </div>
    </div>
    <div class="list">
      <div class="AnCard">
        <a-card
          hoverable
          class="card"
          v-for="(item, index) in TypeOne.slice(sliceStart, sliceEnd)"
          :key="item.id"
          @click="itemClick(item.id)"
        >
          <img slot="cover" alt="example" :src="item.img" />
          <a-card-meta :title="item.title">
            <template slot="description">
              <p class="description">COST: ￥{{ item.price }}</p>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <div class="page">
      <a-pagination
        :current="current"
        :default-current="1"
        :total="TypeOneLength"
        :pageSize="thisPageLength"
        @change="changepage"
      />
    </div>
  </div>
</template>

<script>
// by stride
import { getTypeOneList } from "network/getList";
export default {
  name: "PrimaryList",
  data() {
    return {
      // 三种条数
      PageLength: ["30", "60", "90"],
      // 四种排序
      SortChange: ["默认", "价格最高", "价格最低", "销量最高"],
      // 商品
      TypeOne: [],
      // 总条数
      TypeOneLength: 0,
      // 每页条数
      thisPageLength: 30,
      // 截取条数从第几个开始
      sliceStart: 0,
      sliceEnd: 30,
      // 页数
      current: 1,
      SortChange_list: [],
    };
  },
  methods: {
    // 选择框选择的条数传给每页条数
    handleChangePage(key) {
      this.current = 1;
      this.sliceStart = 0;
      this.thisPageLength = parseInt(key);
      this.sliceEnd = parseInt(key);
      this.getTypeOneList_init();
    },
    // 截取的数据从多少条开始 == 页码*每页条数
    changepage(page) {
      this.current = page;
      this.sliceStart = (page - 1) * this.thisPageLength;
      this.sliceEnd = this.sliceStart + this.thisPageLength;
    },
    // 点击选择框渲染对应排序数据
    handleChangeType(key, index) {
      this.TypeOne = this.SortChange_list[index.key];
    },
    getTypeOneList_init() {
      getTypeOneList(this.$route.params.id).then((res) => {
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
        this.TypeOneLow = TypeOneLow;
        this.TypeOneHeight = TypeOneHeight;
        this.SortChange_list = [TypeOne, TypeOneHeight, TypeOneLow, TypeOne];
      });
    },
    itemClick(id) {
      this.$router.push(`/details/${id}`);
    },
  },
  created() {
    this.getTypeOneList_init();
  },
};
</script>

<style lang="less" scoped>
.PrimaryList {
  width: 80%;
  .hearder {
    width: 100%;
    height: 54px;
    border-top: 1px solid #e1e1e1;
    border-bottom: 2px solid #000;
    background-color: #fbfbfb;
    display: flex;
    justify-content: flex-end;
    .left {
      display: flex;
      width: 99%;
      align-items: left;
      p {
        line-height: 54px;
        cursor: pointer;
        font-family: "ProximaNova-Semibold";
        font-size: 16px;
        color: #000;
        font-weight: 700;
      }
    }
  }
  .sort {
    position: relative;
    margin: 25px 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .page {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
/deep/ .ant-select-selection--single {
  margin-right: 10px;
}
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  .card {
    width: calc((100% / 5) - 8px);
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
}
/deep/ .ant-pagination-item-link,
/deep/ .ant-pagination-item {
  border: none;
}
</style>