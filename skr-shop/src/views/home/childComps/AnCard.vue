<template>
  <div class="AnCard">
    <a-card hoverable class="card" v-for="(item,index) in 4" :key="index">
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
</template>
<script>
export default {
  name: "AnCard",
};
</script>

<style lang="less" scoped>
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  .card {
    width: calc((100% / 4) - 8px);
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