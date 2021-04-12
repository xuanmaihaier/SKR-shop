<template>
  <div class="AnCard">
    <a-card hoverable class="card" v-for="(item,index) in 8" :key="index">
      <img
        slot="cover"
        alt="example"
        src="//image.wconcept.co.kr/productimg/image/img1/07/301210307.jpg?RS=216"
      />
      <a-card-meta title="Europe Street beat">
        <template slot="description">
          <p class="description">www.instagram.com</p>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "List",
};
</script>

<style lang="less" scoped>
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  margin-top: 20px;
  .card {
    width: calc((100% / 8) - 8px);
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
.swiper-button-prev {
  left: 15%;
}
.swiper-button-next {
  right: 15%;
}
</style>