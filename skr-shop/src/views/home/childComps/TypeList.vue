<template>
  <div class="TypeList">
    <div class="type">
      <p>women</p>
      <p>more<a-icon type="caret-right" /></p>
    </div>
    <div class="list">
      <div class="AnCard">
        <a-card hoverable class="card" v-for="(item, index) in 7" :key="index">
          <img
            slot="cover"
            alt="example"
            src="//image.wconcept.co.kr/productimg/image/img1/59/301236759.jpg?RS=216"
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
  name: "TypeList",
};
</script>

<style lang="less" scoped>
.TypeList {
  margin-top: 20px;
  display: flex;
  margin-bottom: 50px;
}
.type {
  width: 10%;
}
.list {
  width: 90%;
}
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  .card {
    width: calc((100% / 7) - 8px);
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
p {
  color: #333;
  font-family: "ProximaNova-Thin";
  font-size: 38px;
  text-transform: uppercase;
  text-align: right;
  font-weight: 100;
  cursor: pointer;
}
p:nth-child(2){
  font-size: 18px;
}
@media screen and(max-width: 1500px){
  p{
    font-size: 18px;
  }
  p:nth-child(2){
  font-size: 12px;
}
}
</style>