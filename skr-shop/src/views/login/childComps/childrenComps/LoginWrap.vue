<template>
  <div class="loginWrap">
    <form action="" @submit.prevent="">
      <div class="inpGroup">
        <p>
          <label for="user">用户名</label>
          <input
            id="user"
            type="text"
            placeholder="请输入您的用户名"
            @focus="showText"
            @blur="hideText"
            v-model="userName"
          />
        </p>
        <p class="mt20">
          <label for="password">密码</label>
          <input
            id="password"
            type="password"
            placeholder="请输入您的密码"
            @focus="showText"
            @blur="hideText"
            v-model.trim="userPassWord"
          />
        </p>
        <span class="inputBtn" @click="showImg">
          <img
            src="@/assets/img/login/forget.png"
            alt=""
            width="32px"
            v-show.trim="imgShow"
          />
          <img
            src="@/assets/img/login/rember.png"
            alt=""
            width="32px"
            v-show="!imgShow"
          />
          <label for="">记住账号</label>
        </span>
        <div class="warning">
          <span v-show="nameShow">用户名不能为空</span>
          <span v-show="passWordShow">密码不能为空</span>
        </div>
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
export default {
  data() {
    return {
      imgShow: true,
      userName: "",
      userPassWord: "",
      nameShow: false,
      passWordShow: false,
    };
  },
  methods: {
    showImg() {
      this.imgShow = !this.imgShow;
    },
    toHome() {
      if (this.userName == "") {
        this.nameShow = true;
        return;
      } else if (this.userPassWord == "") {
        this.passWordShow = true;
        return;
      }
      this.$router.push("/home");
    },
    showText(e) {
      if (e.target.id == "user") {
        this.nameShow = false;
      } else if (e.target.id == "password") {
        this.passWordShow = false;
      }
      e.target.placeholder = "";
    },
    hideText(e) {
      if (e.target.id == "user") {
        e.target.placeholder = "请输入您的用户名";
      } else if (e.target.id == "password") {
        e.target.placeholder = "请输入您的密码";
      }
    },
    toHome(){
      this.$router.push('/home')
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
      p {
        height: 40px;
        label {
          display: inline-block;
          width: 105px;
          height: 100%;
          line-height: 40px;
          color: #333;
        }
        input {
          width: 420px;
          height: 40px;
          line-height: 38px;
          padding-left: 20px;
          background-color: #f2f2f2;
          border: 1px solid #f2f2f2;
          font-size: 14px;
          font-family: "ProximaNova-Regular", "yg740";
          outline: none;
          &:focus {
            background-color: #fff;
            border: 1px solid #000;
          }
        }
      }
      .mt20 {
        margin-top: 20px;
        height: 50px;
      }
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
      .warning {
        padding-left: 105px;
        height: 20px;
        span {
          color: #ff4141;
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