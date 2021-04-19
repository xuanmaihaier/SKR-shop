<template>
  <div class="subTitleWrap">
    <h2>个人中心</h2>
    <p class="titleContent">
      <span><small @click="goHome">主页</small><em>></em> </span>
      <span>个人中心</span>
    </p>
    <p class="changePassword">
      <span @click="showForget = true">修改密码</span>
    </p>
    <div class="forgetPassword" v-show="showForget">
      <div class="modify">
        <button class="closeModify" @click="showForget = false">X</button>
        <title-warp>修改密码</title-warp>
        <p>
          <label for="userMod"
            >用户名
            <small v-show="userModShow">用户名不存在</small>
          </label>
          <input
            type="text"
            placeholder="请输入用户名"
            id="userMod"
            v-model.trim="nameMod"
            @click="userModShow = false"
          />
        </p>
        <p>
          <label for="passwordMod"
            >新密码
            <small v-show="passwordModShow">新密码不能为空</small>
          </label>
          <input
            type="password"
            placeholder="请输入新密码"
            id="passwordMod"
            v-model.trim="newPassword"
            @click="passwordModShow = false"
          />
        </p>
        <button @click="confirmMod" class="done">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import {  updatePassword  } from "@/network/userJoin.js";
import TitleWarp from "@/components/content/login-register/TitleWarp.vue";
export default {
  name: "TitleWrap",
  components: { TitleWarp },
  data() {
    return {
      showForget: false,
      nameMod: "",
      newPassword: "",
      userModShow: false,
      passwordModShow: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    confirmMod() {
      if (this.nameMod == "") {
        this.userModShow = true;
        return;
      } else if (this.newPassword == "") {
        this.passwordModShow = true;
        return;
      }
      updatePassword({
        username: this.nameMod,
        password: this.newPassword,
      }).then((res) => {
        if(res.code==402){
          this.userModShow = true
          return
        };
        this.showForget = false
        this.nameMod = ''
        this.newPassword = ''
        this.$message.success("密码修改成功！");
        // console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.inputP {
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
.subTitleWrap {
  position: relative;
  padding-top: 81px;
  width: 100%;
  text-align: center;
  h2 {
    font-size: 44px;
  }
  p {
    margin-top: 5px;
    span {
      font-size: 12px;
      &:first-child {
        padding-left: 10px;
        small {
          color: #676767;
          cursor: pointer;
        }
        em {
          margin: 0 10px;
        }
      }
      &:last-child {
        color: #000;
      }
    }
  }
  p.changePassword {
    margin-bottom: 44px;
    text-align: center;
    span {
      padding-left: 0;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #000;
      }
    }
  }
  div.forgetPassword {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000069;
    z-index: 999999;
    .modify {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 400px;
      height: 400px;
      background-color: #fff;
      border: 1px solid #000;
      .closeModify {
        position: absolute;
        top: 3px;
        right: 3px;
        // margin: 3px 3px 0 0;
        width: 25px;
        height: 25px;
        background-color: #fff;
        color: #000;
        border-radius: 19px;
        border: 1px solid #000;
        cursor: pointer;
        outline: none;
        z-index: 9999999;
      }
      .titleWarp {
        min-width: 100%;
        height: auto;
        padding: 25px 0 25px 0;
        margin-bottom: 20px;
      }
      p {
        .inputP();
        position: relative;
        margin: 0 0 40px 0;
        label {
          position: relative;
          text-align: center;
        }
        input {
          width: 250px;
        }
        small {
          position: absolute;
          width: 100%;
          text-align: left;
          bottom: -40px;
          left: 100%;
          color: #ff0000;
        }
      }
      .done {
        display: block;
        margin: 60px auto 0;
        width: 200px;
        height: 40px;
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
</style>