<template>
  <div class="product">
    <ul>
      <li v-for="i in 120" :key="i">
        <a-card hoverable style="width: 240px">
          <img
            slot="cover"
            alt="example"
            src="http://image.wconcept.co.kr/productimg/image/img1/55/301194655.jpg?RS=300"
          />
          <a-card-meta title="jsny">
            <template slot="description">
              <p class="activity">[선착순20%쿠폰][스프링세일]</p>
              <p class="dec">Classic Cropped Jacket [IVORY] JYJA1B903WT</p>
              <div class="price">
                <p>
                  <span class="original">191,200</span
                  ><span class="discount">239,000</span>
                </p>
                <span class="percentage">20%</span>
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </li>
    </ul>
    <a-pagination :default-current="1" :total="6000" :pageSize="120" />
  </div>
</template>

<script>
export default {
  name: "Product",
};
</script>

<style lang="less" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 5vh 0;
    margin-top: 7vh;
    li{
      margin-bottom: 3vh;
    }
  }
}
/deep/ .ant-card {
  width: 12vw !important;
  margin-top: 1vh;
  // border: none ;
  .ant-card-body {
    padding: 0;
    margin: 1vh 0;
    .activity {
      color: #000000d9;
    }
    .dec {
      padding: 1vh 0;
      padding-bottom: 1.5vh;
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        display: flex;
        align-items: center;
        .original {
          color: #000000d9;
          font-weight: bolder;
        }
        .discount {
          font-size: 1.2vh;
          margin-left: 1vw;
          text-decoration: line-through;
        }
      }
      .percentage {
        color: red;
        margin-right: 1vw;
      }
    }
  }
}
</style>