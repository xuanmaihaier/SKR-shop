<template>
  <div class="NonMember">
    <ul>
      <li>
        <p>
          <span>还不是SKR-SHOP成员？</span><br />
          <span>如果您注册成为会员，您将获得10％的折扣券。</span>
        </p>
        <button @click="signupVip">注册</button>
      </li>
      <li>
        <p><span>需要非会员订单/交货查询吗？</span><br /></p>
        <button>非会员订单查询</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    signupVip(){
      this.$router.push('/signup')
    }
  },
};
</script>

<style lang="less" scoped>
.pFalseClass {
  content: "·";
  position: absolute;
  left: -10px;
  color: #000;
  width: 3px;
  height: 3px;
  font-size: 20px;
}
.NonMember {
  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 57px;
    padding: 40px 70px 36px;
    border: 1px solid #d9d9d9;
    border-width: 1px 0;
    li {
      display: flex;
      padding: 0 35px;
      width: 550px;
      button {
        min-width: 160px;
        height: 40px;
        border: none;
        background-color: #7d7d7d;
        color: #fff;
        outline: none;
        cursor: pointer;
        margin-left: 15px;
      }
      p {
        position: relative;
        span {
          color: #333;
        }
      }
      &:first-child {
        p {
          &::after {
            .pFalseClass();
            top: -4px;
          }
        }
      }
      &:last-child {
        display: flex;
        justify-content: space-between;
        p {
          line-height: 40px;
          &::after {
            .pFalseClass();

            top: 0px;
          }
        }
      }
    }
  }
}
</style>