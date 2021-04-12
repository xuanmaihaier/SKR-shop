<template>
  <div>
    <ul class="joinStep">
      <li style="background: #000">
        <img src="@/assets/img/signup/modify.png" alt="" />
        <!-- <img src="@/assets/img/signup/modifyed.png" alt="" /> -->
        <p>1 信息输入</p>
      </li>
      <li :style="{ backgroundColor: successed == true ? '#000' : '#f2f2f2' }">
        <img
          src="@/assets/img/signup/successed.png"
          alt=""
          v-show="successed"
        />
        <img src="@/assets/img/signup/success.png" alt="" v-show="!successed" />
        <p>2 注册完成</p>
      </li>
    </ul>
    <p class="must"><span>*</span>必填项</p>
  </div>
</template>

<script>
export default {
  name: "JoinStep",
  data() {
    return {};
  },
  props: ["successed"],
};
</script>

<style lang="less" scoped>
.joinStep {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
  li {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: #f2f2f2;
    border-radius: 50%;
    &:first-child {
      margin-right: 108px;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 27px;
        right: -68px;
        background: url("~assets/img/signup/right.png") no-repeat;
        width: 32px;
        height: 32px;
      }
    }
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
    }
    p {
      position: absolute;
      bottom: -33px;
      left: 0;
      font-family: "yg740";
      color: #a1a1a1;
      font-size: 14px;
      text-align: center;
      vertical-align: top;
      width: 200%;
      margin-left: -50%;
    }
  }
}
.must {
  text-align: right;
  span {
    color: #ff1414;
  }
}
</style>