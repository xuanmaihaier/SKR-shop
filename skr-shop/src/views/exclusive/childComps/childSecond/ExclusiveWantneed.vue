<template>
  <!-- 2 -->
  <div class="exclusive_wantneed">
   <div class="tit_wantneed">
      <Title>
      <div class="tit_wrap">
        <p>WANT.NEED</p>
        <a-button> + ALL <span>(10943)</span></a-button>
      </div>
    </Title>
   </div>
    <ul class="thumbnail_list">
      <a-card hoverable v-for="(item, index) in 8" :key="index">
        <img
          slot="cover"
          alt="example"
          src="//image.wconcept.co.kr/productimg/image/img1/79/301235279.jpg?thumbnail=216x288"
        />
        <a-card-meta title="LOEUVRE">
          <template slot="description">
              <p class="front">[4월펀딩]</p> 
            </template>
          <template slot="description">
              <p>Half Sleeve Tweed Crop Jacket SW1MJ201-52</p>
          </template>
          <template slot="description">
            <div class="price">
              <p><span class="discount_after">161,50</span> <span class="discount">199,000</span></p>
              <span class="percent">15%</span>
            </div>
          </template>
        </a-card-meta>
      </a-card>
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
.exclusive_wantneed {
  margin-top: 7%;
  .tit_wantneed{
    transform: translateY(-100%);
  }

  .tit_wrap {
    .ant-btn {
      padding: 0 20px 0 18px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      color: rgb(170, 167, 167);
    }
    .ant-btn:hover {
      border-color: #ccc;
      color: rgb(104, 102, 102);
    }
  }
  .thumbnail_list {
    width: 100%;
    display: flex;
    .ant-card {
      width: calc(100% / 8 - 20px);
      margin: 0 10px;
      /deep/.ant-card-body {
        padding: 0;
        font-size: 14px;
        .price{
            display: flex;
            justify-content: space-between;
            padding: 15px 5px 0;
            .discount_after{
                font-weight: 500;
                color: #333;
                padding-right: 15px;
            }
            .discount{
                text-decoration: line-through;
            }
            .percent{
                color: red;
                font-size: 16px;
            }
        }
        .front{
            color: #000;
        }
      }
    }
  }
}
</style>