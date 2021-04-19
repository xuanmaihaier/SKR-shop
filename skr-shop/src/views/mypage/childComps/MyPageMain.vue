<template>
  <div class="myPageMain">
    <div class="activityImg" @click="goHome">
      <img
        src="https://image.wconcept.co.kr/images/builder/1/4/138/315/PC_mypage_1240x100_1_20210226162046.jpg"
        alt=""
      />
    </div>
    <div class="tableTitle">
      <h3>最近订单</h3>
      <span>more+</span>
    </div>
    <table class="cols">
      <colgroup>
        <col style="width: 135px" />
        <col style="width: 155px" />
        <col />
        <col style="width: 150px" />
        <col style="width: 125px" />
        <col style="width: 145px" />
        <col style="width: 130px" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="(item, index) in theadTitle" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="7" class="noData">您还没有订单。</td>
        </tr>
      </tbody>
    </table>
    <div class="myHeart">
      <div class="tableTitle">
        <h3>我的♡</h3>
        <span>more+</span>
      </div>
      <div class="mypageMyheart">
        <ul>
          <li class="noThing">
            <p>
              <span>把喜欢的商品设定成我的♡最爱吧</span>
              <br />
              <span>可以收到打折、入库等通知。</span>
            </p>
            <button>转到最热销的产品 ＞</button>
          </li>
          <li class="btnWrap">
            <div>
              <span>我的♡</span>
              <em>商品</em>
              <p>0</p>
            </div>
            <div>
              <span>我的♡</span>
              <em>品牌</em>
              <p>0</p>
            </div>
            <div>
              <span>我的♡</span>
              <em>风格</em>
              <p>0</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="address">
      <button @click="btnDelAddress">删除地址</button>
    </div>
    <!-- <div style="height:372px;padding:50px 0">
      <div style="height:100%;background-color:#848484">
        <h1>底部占位</h1>
      </div>
    </div> -->
  </div>
</template>

<script>
import { delAddress } from "@/network/userAddress";
const theadTitle = [
  "订单日期",
  "订单号",
  "商品信息",
  "数量",
  "商品价格",
  "进度",
  "评论",
];
export default {
  name: "MyPageMain",
  data() {
    return {
      theadTitle,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    btnDelAddress() {
      delAddress({ id: 1 }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.myPageMain {
  margin: 0 auto;
  width: 1240px;
  margin-bottom: 180px;
  .activityImg {
    margin-bottom: 60px;
    cursor: pointer;
  }
  .tableTitle {
    position: relative;
    width: 100%;
    height: 36px;
    h3 {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 24px;
      color: #000;
      font-family: "ProximaNova-Light", "yg740";
      line-height: 1em;
    }
    span {
      position: absolute;
      bottom: 8px;
      right: 0;
      line-height: 1em;
      padding-right: 9px;
      font-size: 16px;
      color: #000;
      font-weight: 300;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #171717;
    border-bottom: 1px solid #171717;
    table-layout: fixed;
    margin-bottom: 60px;
    thead {
      tr {
        th {
          height: 68px;
          font-family: "yg750";
          font-size: 14px;
          padding: 0 14px;
          color: #000;
          text-align: center;
          vertical-align: middle;
          border-bottom: 1px solid #b5b5b5;
        }
      }
    }
    tbody {
      tr {
        td {
          font-family: "ProximaNova-Light", "yg740";
          text-align: center;
          vertical-align: middle;
          padding: 14px 0;
          &.noData {
            height: 150px;
            color: #333;
            font-size: 14px;
          }
        }
      }
    }
  }
  .myHeart {
    .tableTitle {
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
    .mypageMyheart {
      ul {
        display: flex;
        li {
          margin-right: 20px;
          &.noThing {
            width: 1030px;
            text-align: center;
            padding-top: 79px;
            p {
              font-size: 14px;
              line-height: 20px;
              vertical-align: bottom;
              margin-bottom: 16px;
              color: #000;
            }
            button {
              display: inline-block;
              padding: 0 20px;
              min-width: 180px;
              height: 40px;
              line-height: 40px;
              color: #fff;
              text-align: center;
              font-size: 12px;
              border: 1px solid #333;
              background-color: #333;
              outline: none;
              cursor: pointer;
            }
          }
          &.btnWrap {
            width: 190px;
            margin-right: 20px;
            div {
              position: relative;
              padding: 25px 0 0 26px;
              height: 87px;
              width: 100%;
              border-bottom: 1px solid #e2e2e2;
              span {
                display: block;
                font-size: 14px;
                color: #666;
                line-height: 1em;
              }
              em {
                font-size: 20px;
                color: #000;
                line-height: 1em;
                font-style: normal;
              }
              p {
                width: 48px;
                height: 48px;
                position: absolute;
                top: 19px;
                right: 26px;
                background-color: #333;
                color: #fff;
                -webkit-border-radius: 24px;
                -moz-border-radius: 24px;
                border-radius: 24px;
                font-size: 20px;
                line-height: 48px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>