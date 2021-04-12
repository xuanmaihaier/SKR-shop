<template>
  <div class="thirdParty">
    <h3>第三方登录</h3>
    <ul>
      <li><a href="javascript:;">QQ</a></li>
      <li><a href="javascript:;">微信</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aBefore {
  display: inline-block;
  content: "";
  vertical-align: top;
  margin-right: 9px;
  width: 32px;
  height: 32px;
}
.thirdParty {
  display: flex;
  margin: 40px auto 0;
  width: 850px;
  height: 32px;
  h3 {
    width: 105px;
    padding-top: 4px;
    font-family: "ProximaNova-Light", "yg740";
    font-size: 18px;
    color: #000;
  }
  ul {
    display: flex;
    li {
      position: relative;
      text-align: center;
      text-transform: uppercase;
      &:nth-of-type(2)::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 1px;
        height: 14px;
        margin-top: -7px;
        background-color: #d2d2d2;
      }
      a {
        display: block;
        padding: 0 16px;
        color: #7d7d7d;
        font-size: 14px;
        line-height: 31px;
        font-family: "ProximaNova-Regular";
        height: 100%;
      }
      &:nth-of-type(1) {
        a {
          &::before {
            background-image: url("~assets/img/login/icon_QQ.png");
            .aBefore();
          }
        }
      }
      &:nth-of-type(2) {
        a {
          &::before {
            background-image: url("~assets/img/login/wchat.png");
            .aBefore();
          }
        }
      }
    }
  }
}
</style>