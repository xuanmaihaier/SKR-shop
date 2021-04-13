<template>
  <div class="inner_right">
    <p>
      <img
        src="//image.wconcept.co.kr/images/builder/1/4/56/258/PE7_618x824_20210413144249.jpg"
        alt=""
      />
    </p>
    <div class="thumbnail_list">
      <ul>
        <li v-for="item in 4" :key="item">
          <div class="img">
            <img
              src="//image.wconcept.co.kr/productimg/image/img1/96/301205696.jpg?thumbnail=216x288"
              alt=""
            />
          </div>
          <div class="text">
            <div class="text_wrap">
              <div class="brand">FRONTROW</div>
              <div class="front">[스프링 20%쿠폰] | [차정원 착용]</div>
              <div class="product">
                [Conscious] Curved Sleeve Stitch Blouse_2color
              </div>
            </div>
            <div class="price">
              <span class="discount_price">128,000</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.inner_right {
  width: 50%;
  display: flex;
  .thumbnail_list {
    width: 35%;
    height: 100%;
    margin-left: 20px;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        height: calc((100% / 4) - 10);
        font-family: "ProximaNova-Regular", "yg740";
        color: #000;
        display: flex;
        img {
          height: 191px;
        }
        .text {
          padding: 0 0 0 20px;
          .text_wrap {
            .brand {
              font-size: 13px;
              margin-bottom: 10px;
              font-family: "yg750";
              min-height: auto;
            }
            .front {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              line-height: 14px;
              margin-bottom: 9px;
              padding-top: 3px;
            }
            .product {
              line-height: 15px;
              color: #555;
              height: 15px;
              overflow: hidden;
              margin-bottom: 16px;
            }
            .discount_price {
              font-size: 16px;
              color: #333;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
}
</style>