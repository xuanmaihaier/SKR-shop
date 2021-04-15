<template>
  <div class="Conent_b">
    <Title><p>TALKING</p></Title>
    <ul>
      <li v-for="item in 3" :key="item">
        <img
          src="//image.wconcept.co.kr/images/builder/1/4/56/259/ME8_750x410_1_20210407155240.jpg"
          alt=""
        />
        <p class="tit">MY FAVORITE JACKET : #3. 설희의 재킷</p>
        <p class="tit_">인플루언서 '설희'의 포멀한 재킷 스타일링</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Title from "components/common/title/Title.vue";
export default {
  components: { Title },
};
</script>
<style lang="less" scoped>
.Conent_b {
  width: 100%;
  margin-bottom: 10%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    li {
      width: calc(100% / 3 - 2%);
      .tit {
        text-align: center;
        margin: 40px 0 22px 0;
        font-family: "yg750";
        font-size: 20px;
        color: #333;
        line-height: normal;
      }
      .tit_ {
        font-family: "yg740";
        font-size: 12px;
        color: #666;
        line-height: 17px;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>