<template>
  <div class="PrimaryList">
    <div class="hearder">
      <div class="right">
        <p v-for="(item, index) in 6" :key="index">item</p>
      </div>
    </div>
    <div class="sort">
      <span>共计 9999 件</span>
      <div>
        <a-select
          default-value="30"
          style="width: 120px"
          @change="handleChangePage"
        >
          <a-select-option value="30"> 每页30 </a-select-option>
          <a-select-option value="60"> 每页60 </a-select-option>
          <a-select-option value="90"> 每页90 </a-select-option>
        </a-select>
        <a-select
          default-value="默认"
          style="width: 120px"
          @change="handleChangeType"
        >
          <a-select-option value="默认"> 默认</a-select-option>
          <a-select-option value="价格最高"> 价格最高 </a-select-option>
          <a-select-option value="价格最低"> 价格最低 </a-select-option>
          <a-select-option value="销量最高"> 销量最高 </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="list">
      <div class="AnCard">
        <a-card hoverable class="card" v-for="(item, index) in 30" :key="index">
          <img
            slot="cover"
            alt="example"
            src="//image.wconcept.co.kr/images/builder/1/4/15/37/32823 (1)_20210412100150.jpg"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description">
              <p class="description">www.instagram.com</p>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <div class="page">
      <a-pagination :default-current="6" :total="500" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PrimaryList",
  methods: {
    handleChangePage() {},
    handleChangeType() {},
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
    .right {
      display: flex;
      width: 60%;
      justify-content: space-around;
      align-items: center;
      p {
        line-height: 54px;
        cursor: pointer;
        font-family: "ProximaNova-Semibold";
        font-size: 14px;
        color: #000;
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
  .page{
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
/deep/ .ant-pagination-item{
  border: none;
}
</style>