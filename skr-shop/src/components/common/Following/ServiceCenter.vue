<template>
  <div class="serviceCenter">
    <!-- 服务中心 -->
    <div class="ser_text">
      <h2>服务中心</h2>
    </div>
    <div class="ser_nav">
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="4"> 常见问题 </a-col>
        <a-col :span="4"> 消息 </a-col>
        <a-col :span="4"> 会员福利 </a-col>
        <a-col :span="4"> 查询 </a-col>
        <a-col :span="4"> 客户反馈 </a-col>
      </a-row>
    </div>

    <div class="ser_table">
      <div class="ser_left">
        <div class="left_bar">
          <h3>
            <span>常见问题</span>
            <span>搜索</span>
          </h3>
          <span>
            <a-input
              placeholder="검색 후 문의가 해결되지 않으면 1:1 상담을 이용하세요."
              class="left_inp"
            />
            <a-icon type="search" />
          </span>
        </div>
        <div class="left_list">
          <span class="more">最爱的搜寻字词</span>
          <a-page-header
            :breadcrumb="{ props: { routes } }"
            class="left_header"
          />
        </div>
      </div>
      <div class="ser_right">
        <p class="kehu">客户中心用户指南</p>
        <p class="tel">1566-1475</p>
        <p class="timer">营业时间:平日0900〜1800午餐时间：1230〜1330）</p>
      </div>
    </div>

    <div class="cube">
      <a-row type="flex" justify="space-between" align="middle">
        <a-col :span="4" class="cube_bar">
          <h3>订单/付款/运输</h3>
          <ul>
            <li>订单/付款</li>
            <li>交货</li>
            <li>签发证明文件</li>
          </ul>
        </a-col>

        <a-col :span="4" class="cube_bar">
          <h3>订单/付款/运输</h3>
          <ul>
            <li>订单/付款</li>
            <li>交货</li>
            <li>签发证明文件</li>
          </ul>
        </a-col>

        <a-col :span="4" class="cube_bar">
          <h3>订单/付款/运输</h3>
          <ul>
            <li>订单/付款</li>
            <li>交货</li>
            <li>签发证明文件</li>
          </ul>
        </a-col>

        <a-col :span="4" class="cube_bar">
          <h3>订单/付款/运输</h3>
          <ul>
            <li>订单/付款</li>
            <li>交货</li>
            <li>签发证明文件</li>
          </ul>
        </a-col>

        <a-col :span="4" class="cube_bar">
          <h3>订单/付款/运输</h3>
          <ul>
            <li>订单/付款</li>
            <li>交货</li>
            <li>签发证明文件</li>
          </ul>
        </a-col>
      </a-row>
    </div>
    <div class="linkr">
      <h3>快速链接</h3>
      <ul class="link_ul">
        <li>
          <a href="javascript:;">订单历史/交货查询</a>
        </li>
        <li>
          <a href="javascript:;">订单历史/交货查询</a>
        </li>
        <li>
          <a href="javascript:;">订单历史/交货查询</a>
        </li>
        <li>
          <a href="javascript:;">订单历史/交货查询</a>
        </li>
        <li>
          <a href="javascript:;">订单历史/交货查询</a>
        </li>
      </ul>
    </div>
    <div class="problem">
      <div class="pro_left">
        <div class="left_title">
          <h3>十大常见问题</h3>
          <span>+</span>
        </div>
        <div class="left_main">
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
        </div>
      </div>
      <div class="pro_right">
        <div class="left_title">
          <h3>活动获奖者公告</h3>
          <span>+</span>
        </div>
        <div class="left_main">
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
           <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
        </div>
        <div class="left_title">
          <h3>消息</h3>
          <span>+</span>
        </div>
        <div class="left_main">
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
          <p>
            <span>Q1</span> <font>[开具证明文件]如何申请开具现金收据？</font>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: "index",
          breadcrumbName: "First-level Menu",
        },
        {
          path: "first",
          breadcrumbName: "Second-level Menu",
        },
        {
          path: "second",
          breadcrumbName: "Third-level Menu",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.serviceCenter {
  width: 100%;
  .ser_text {
    width: 80%;
    padding-top: 81px;
    height: 200px;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-size: 44px;
      color: #000;
    }
  }
  .ser_nav {
    width: 80%;
    height: 45px;
    line-height: 45px;
    margin: 0 auto 50px;
    text-align: center;
    background-color: #f3f3f3;
  }
  .ser_table {
    width: 80%;
    height: 166px;
    margin: 50px auto;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #000;
    .ser_left {
      flex: 2;
      height: 100%;
      padding: 20px;
      width: 165px;
      font-size: 26px;
      .left_bar {
        position: relative;
        padding-bottom: 7px;
        margin-bottom: 10px;
        border-bottom: 1px solid #000;
        h3 {
          width: 115px;
          font-size: 26px;
          vertical-align: inherit;
          display: inline-block;
        }
        .left_inp {
          width: 400px;
          border: 0;
        }
      }
      .left_list {
        font-size: 12px;
        text-align: left;
        text-indent: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .more {
          background-color: #000;
          color: #fff;
          padding: 0 10px;
        }
        .left_header {
          font-size: 12px;
          padding-top: 0;
        }
      }
    }
    .ser_right {
      flex: 1;
      height: 100%;
      padding: 20px;
      background-color: #000;
      color: #fff;
      .kehu {
        font-size: 18px;
      }
      .tel {
        font-size: 40px;
        color: #f2f2f2;
      }
      .timer {
        font-size: 12px;
      }
    }
  }

  .cube {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    .cube_bar {
      padding: 26px 20px;
      border: 1px solid #000;
    }
  }

  .linkr {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    h3 {
      text-align: left;
      font-size: 24px;
      margin-bottom: 10px;
    }
    .link_ul {
      background-color: #f8f8f8;
      padding: 20px 0;
      font-size: 14px;
      display: flex;
      justify-content: space-around;
      li > a {
        display: block;
        position: relative;
        height: 94px;
        padding: 0 15px;
        padding-top: 74px;
        color: #333;
        width: 100%;
      }
      li {
        position: relative;
      }
      li::after {
        content: "";
        display: inline-block;
        width: 75px;
        height: 65px;
        position: absolute;
        top: 8px;
        left: 50%;
        margin-left: -40px;
        background: url("../../../assets/img/following/icon_quick.png") 50% 50%
          no-repeat;
        background-position: 10px 10px;
      }
    }
  }
  .problem {
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .pro_left,
    .pro_right {
      width: 50%;
      padding: 10px;
    }
    .pro_left,
    .pro_right {
      .left_title {
        padding-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 26px;
        border-bottom: 2px solid #333;
        span {
          font-size: 32px;
        }
      }
      .left_main {
        p {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          border-bottom: 1px solid #ececec;
          span {
            display: inline-block;
            width: 40px;
            height: 40px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>