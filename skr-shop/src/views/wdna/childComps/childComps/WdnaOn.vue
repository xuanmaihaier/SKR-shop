<template>
  <div class="wdna_on">
    <div class="keyword">
      <h3>KEYWORD</h3>
      <ul class="tags">
        <li>
          <a-button :shape="'round'">#전체보기</a-button>
        </li>
      </ul>
    </div>
    <WdnaThumbnail/>
  </div>
</template>

<script>
import WdnaThumbnail from './childSecond/WdnaThumbnail.vue';
export default {
  components: { WdnaThumbnail },
  name: "WdnaOn",
};
</script>

<style lang="less" scoped>
.wdna_on {
  width: 100%;
  margin-top: 80px;
  .keyword {
    width: 100%;
    height: 70px;
    line-height: 70px;
    display: flex;
    > h3 {
      display: block;
      width: 25%;
      text-align: center;
      font-size: 2rem;
      font-family: "ProximaNova-Thin";
      font-size: 33px;
      color: #fff;
      text-align: center;
      background: #5a5a5a;
      font-weight: 100;
    }
    .tags {
      width: 75%;
      padding: 0 15px;
      background-color: #e7e7e7;
      /deep/.ant-btn-round:hover {
        background-color: #49c7df;
        color: #fff;
      }
      button {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
  
}
</style>