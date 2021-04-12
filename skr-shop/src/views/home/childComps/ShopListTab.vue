<template>
  <div class="ShopListTab">
      <ul class="tab">
    <li
      class="tabitem"
      v-for="(item, index) in 5"
      @click="liclick(index)"
      :class="{ active: page == index }"
    >
      item
    </li>
      </ul>
      <div class="content">
         <div class="AnCard">
    <a-card hoverable class="card" v-for="(item,index) in 6" :key="index">
      <img
        slot="cover"
        alt="example"
        src="//image.wconcept.co.kr/images/builder/1/4/15/37/마몽드_백예린_프로바이오틱스세라마이드크림 (1)_20210407101705.jpg"
      />
      <a-card-meta title="Europe Street beat">
        <template slot="description">
          <p class="description">www.instagram.com</p>
        </template>
      </a-card-meta>
    </a-card>
  </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ShopListTab",
  data() {
    return {
      page:0
    }
  },
  methods: {
    liclick(index){
      this.page=index
    }
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 10px 0;
  font-size: 20px;
  .tabitem {
    width: 60px;
    text-align: center;
    cursor: pointer;
    font-family: "ProximaNova-Semibold";
    color: #b5b5b5;
    border-bottom: 3px solid transparent;
    transition: all ease-in-out 0.2s;
  }
}
.active {
  border-bottom: 3px solid black !important;
}
.content{
  width: 100%;
}
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  .card {
    width: calc((100% / 6) - 8px);
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
</style>