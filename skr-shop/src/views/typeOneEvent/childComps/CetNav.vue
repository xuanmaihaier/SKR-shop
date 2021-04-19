<template>
  <div class="cetNav">
    <!-- <h1>00.00</h1> -->
    <div class="senction">
      <div class="my_brand_cont">
        <div class="cont-title">
          <h3><p>MY&#10084;BRAND EVENT</p></h3>
        </div>
        <div class="cont">
          <p>
            로그인 하시면 MY&#10084;에 등록한 BRAND의 최근 EVENT를 확인할 수
            있습니다.
          </p>
          <a href="http://localhost:8080/login">로그인</a>
        </div>
      </div>
      <div class="benefit">
        <div class="benefit-title">
          <h3><p>BENEFIT</p></h3>
        </div>
        <div class="benefit-cont">
          <ul>
            <li v-for="(item, index) in cetNav" :key="index">
              <a href=""><img :src="item" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cetNav: [
        "//image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_03_20200713153123.png",
        "//image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_09_20190905092308.png",
        "//image.wconcept.co.kr/images/builder/1/4/132/189/멤버쉽_20190731154447.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/132/189/pc_icon_20210205184922_20210226182134.jpg",
      ],
    };
  },
  
};
</script>

<style lang='less' scoped>
.cetNav {
  width: 85%;
  height: 187px;
  margin: 70px auto;
  font-family: "yg740";
//   margin: 75px 0 60px;
}
.senction {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .cont-title {
    border-bottom: 2px solid #000;
  }
  h3 {
    width: 100%;
    font-size: 26px;
    color: #000000;
  }
  .my_brand_cont {
    width: 48%;
    height: 182px;
    .cont {
      width: 100%;
      font-size: 14px;
      color: #333;
      padding: 30px 0;
      p {
        text-align: center;
      }
      > a {
        display: block;
        width: 140px;
        height: 40px;
        margin-top: 18px;
        background-color: #000;
        font-size: 14px;
        margin: 18px auto;
        text-align: center;
        line-height: 40px;
        color: #fff;
      }
    }
  }
}
.senction {
  .benefit {
    width: 48%;
    height: 187px;
    .benefit-title {
      width: 100%;
      > h3 {
        padding-left: 28px;
      }
    }
    .benefit-cont {
      ul {
        display: flex;
        // width: 100%;
        // height: 145px;
        justify-content: space-around;
        li {
            width: 25%;
            border-right: 1px dotted;
            text-align: center;
        }
        li:last-child{
            border: none;
        }
      }
    }
  }
}
</style>