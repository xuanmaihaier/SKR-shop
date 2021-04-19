<template>
  <div class="infoTable">
    <table>
      <tbody>
        <tr>
          <td colspan='2'>
            <div class="couponInfoBox">
              <p>
                <span>如果您注册成为会员，您将获得10％的折扣券,可以立即使用。</span>
                <span>（每个完成自我认证的帐户只能使用一次）</span>
              </p>
            </div>
          </td>
        </tr>
        <tr>
            <th>
              用户名<span>*</span>
            </th>
            <td>
              <p>
                <input type="text" placeholder="请输入您的用户名" @focus="showText" @blur="hideText" v-model.trim="userName" id="userName">
              </p>
              <p v-show="userNameShow" >
                <small>用户名不能为空</small>
              </p>
            </td>
          </td>
        </tr>
         <tr>
            <th>
              密码<span>*</span>
            </th>
            <td>
              <p>
                <input type="password" placeholder="请输入您的密码" @focus="showText" @blur="hideText" v-model.trim="passWord" id="passWord">
              </p>
              <p v-show="pasWordShow">
                <small>密码不能为空</small>
              </p>
            </td>
          </td>
        </tr>
        <tr>
            <th>
              邮箱<span>*</span>
            </th>
            <td>
              <p>
                <input type="text" placeholder="请输入您的邮箱" @focus="showText" @blur="hideText" v-model.trim="email" id="email">
              </p>
              <p v-show="emailShow">
                <small>请填写正确的邮箱格式</small>
              </p>
            </td>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="joinBtnWrap">
      <button :disabled='disabled'>取消</button>
      <button @click="successedBtn" :disabled='disabled'>确认</button>
    </div>
  </div>
</template>

<script>
import { userSignUp } from "@/network/userJoin";
const key = "updatable";
// 邮箱验证
const regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  name: "InfoTable",
  data() {
    return {
      disabled: false,
      userName: "",
      passWord: "",
      email: "",
      userNameShow: false,
      pasWordShow: false,
      emailShow: false,
      regular,
    };
  },
  methods: {
    showText(e) {
      switch (e.target.id) {
        case "userName":
          this.userNameShow = false;
          break;
        case "passWord":
          this.pasWordShow = false;
          break;
        case "email":
          this.emailShow = false;
          break;
      }
      e.target.placeholder = "";
    },
    hideText(e) {
      switch (e.target.id) {
        case "userName":
          e.target.placeholder = "请输入您的用户名";
          break;
        case "passWord":
          e.target.placeholder = "请输入您的密码";
          break;
        case "email":
          e.target.placeholder = "请输入您的邮箱";
          break;
      }
    },
    successedBtn() {
      // 信息验证
      if (this.userName == "") {
        this.userNameShow = true;
        return;
      } else if (this.passWord == "") {
        this.pasWordShow = true;
        return;
      } else if (regular.test(this.email) == false) {
        this.emailShow = true;
        return;
      }
      userSignUp({
        username: this.userName,
        password: this.passWord,
        email: this.email,
      }).then((res) => {
        console.log(res);
        if (res.code == 501) {
          this.$message.error({
            content: "用户名已被注册，请重新输入！",
            duration: 0.5,
          });
          return;
        }
        this.$emit("successedBtn", true);
        this.disabled = true;
        this.$message.loading({ content: "Loading...", key });
        setTimeout(() => {
          this.$message.success({
            content: "注册完成!跳转至登录页面",
            key,
            duration: 2,
          });
          this.$router.push("/login");
        }, 1000);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.infoTable {
  width: 100%;
  table {
    margin-bottom: 60px;
    width: 100%;
    border-top: 2px solid #171717;
    border-bottom: 1px solid #171717;
    tbody {
      tr {
        th {
          width: 295px;
          height: 68px;
          padding-left: 43px;
          font-family: "yg740";
          color: #333;
          font-size: 14px;
          border-top: 1px solid #d9d9d9;
          text-align: left;
          span {
            color: #ff4141;
          }
        }
        td {
          border-top: 1px solid #d9d9d9;
          p {
            display: inline-block;
            input {
              width: 400px;
              height: 40px;
              line-height: 38px;
              padding-left: 20px;
              border: none;
              background-color: #f2f2f2;
              border: 1px solid #f2f2f2;
              font-size: 14px;
              font-family: "ProximaNova-Regular", "yg740";
              outline: none;
              &:focus {
                background-color: #fff;
                border-color: #000;
              }
            }
            .verification {
              display: inline-block;
              margin-left: 10px;
              width: 100px;
              height: 40px;
              // border: 1px solid #fff;
              border: none;
              outline: none;
              cursor: pointer;
              background: #000;
              color: #fff;
            }
            &:last-child {
              color: #ff4141;
              margin-left: 16px;
            }
          }
        }
        &:first-child {
          td {
            .couponInfoBox {
              background: #ff6160;
              color: #fff;
              text-align: center;
              display: table;
              width: 100%;
              height: 48px;
              line-height: 48px;
              p {
                color: #ffffff;
                span {
                  &:first-child {
                    font-size: 20px;
                  }
                  &:last-child {
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
        .sex {
          label {
            display: inline-block;
            position: relative;
            padding-left: 45px;
            height: 32px;
            line-height: 32px;
            &:first-child {
              margin-right: 50px;
            }
            img {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
  }
  .joinBtnWrap {
    width: 100%;
    text-align: center;
    button {
      display: inline-block;
      min-width: 180px;
      margin: 0 8px;
      padding: 0 20px;
      height: 50px;
      text-align: center;
      line-height: 48px;
      border: 1px solid #333;
      background-color: #fff;
      color: #333;
      font-family: "yg750";
      font-size: 14px;
      cursor: pointer;
      outline: none;
      &:last-child {
        color: #fff;
        background-color: #000;
      }
    }
  }
}
</style>