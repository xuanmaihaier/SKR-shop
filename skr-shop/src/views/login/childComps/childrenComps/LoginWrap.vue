<template>
  <div class="loginWrap">
    <form action="" @submit.prevent="">
      <div class="inpGroup">
        <member-input :id="'user'" :placeholder="'请输入您的用户名'" :type="'text'">用户名</member-input>
        <member-input :id="'password'" :placeholder="'请输入您的密码'" :type="'password'" :class="'mt20'">密码</member-input>
        <span class="inputBtn" @click="showImg">
          <img
            src="@/assets/img/login/forget.png"
            alt=""
            width="32px"
            v-show="imgShow"
          />
          <img
            src="@/assets/img/login/rember.png"
            alt=""
            width="32px"
            v-show="!imgShow"
          />
          <label for="">记住账号</label>
        </span>
      </div>
      <div class="btnGroup">
        <button class="loginBtn" @click="toHome">登录</button>
        <ul class="link">
          <li>
            <a href="javascript:;">找回用户名</a>
          </li>
          <li>
            <a href="javascript:;">忘记密码</a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import MemberInput from '../../../../components/content/login-register/MemberInput.vue';
export default {
  components: { MemberInput },
  data() {
    return {
      imgShow:true,
    };
  },
  methods: {
    showImg() {
      this.imgShow = !this.imgShow
    },
    toHome(){
      this.$router.replace('/home')
    }
  },
};
</script>

<style lang="less" scoped>
.displayFlex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.loginWrap {
  margin: 0 auto;
  width: 735px;
  form {
    .displayFlex();
    .inpGroup {
      width: 525px;
      padding-bottom: 30px;
      span.inputBtn {
        position: relative;
        display: inline-block;
        margin: 10px 50px 10px 105px;
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
        label {
          display: block;
          position: relative;
          color: #000;
          font-family: "ProximaNova-Regular", "yg740";
          line-height: 35px;
          padding-left: 42px;
        }
      }
    }
    .btnGroup {
      width: 190px;
      .loginBtn {
        width: 100%;
        height: 100px;
        font-size: 16px;
        background-color: #000;
        border-color: #000;
        color: #fff;
        outline: none;
        cursor: pointer;
      }
      .link {
        margin-top: 20px;
        text-align: center;
        li {
          position: relative;
          display: inline;
          a {
            padding: 5px 11px 5px 16px;
            color: #000;
          }
          &:last-child::before {
            content: "";
            position: absolute;
            top: 2px;
            left: 0;
            width: 1px;
            height: 12px;
            background-color: #e2e2e2;
          }
        }
      }
    }
  }
}
</style>