<template>
  <div class="inner_right">
    <!-- <p class="inner_right_img">
      <img
        src="http://anta-cn-web.obs.myhwclouds.com/anta-cn-web/descente/2021/03/11/d4d37a2beefedafdb30f0bc60f9f9e39.jpg"
       style=""
      />
    </p> -->
    <!-- <div class="thumbnail_list">
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
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.inner_right {
  width: 50%;
  display: flex;
  .inner_right_img {
    width: 65%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
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
        width: 100%;
        height: calc((100% / 4) - 10);
        font-family: "ProximaNova-Regular", "yg740";
        color: #000;
        display: flex;
        overflow: hidden;
        img {
          width: 100%;
          min-width: 150px;
          padding-bottom: 15px;
        }
        .text {
          padding: 0 0 0 20px;
          .text_wrap {
            
            .brand {
              width: 25%;
              font-size: 13px;
              margin-bottom: 10px;
              font-family: "yg750";
              min-height: auto;
              overflow: hidden;
				white-space: nowrap;/* 设置文本是否换行 */
				text-overflow: ellipsis;/* 超出文本出现省略号代替 */
            }
            .front {
              width: 25%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              line-height: 14px;
              margin-bottom: 9px;
              padding-top: 3px;
              overflow: hidden;
				white-space: nowrap;/* 设置文本是否换行 */
				text-overflow: ellipsis;/* 超出文本出现省略号代替 */
            }
            .product {
              width: 25%;
              line-height: 15px;
              color: #555;
              height: 15px;
              overflow: hidden;
              margin-bottom: 16px;
              overflow: hidden;
				white-space: nowrap;/* 设置文本是否换行 */
				text-overflow: ellipsis;/* 超出文本出现省略号代替 */
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