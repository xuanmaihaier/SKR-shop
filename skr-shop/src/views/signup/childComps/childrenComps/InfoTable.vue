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
                <input type="text" placeholder="请输入用户名" @focus="showText" @blur="hideText" v-model.trim="userName">
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
                <input type="password" placeholder="请输入密码" @focus="showText" @blur="hideText" v-model.trim="passWord">
              </p>
              <p v-show="pasWordShow">
                <small>密码不能为空</small>
              </p>
            </td>
          </td>
        </tr>
         <tr>
            <th>
              性别<span>*</span>
            </th>
            <td class="sex">
              <label for="male" id="male" @click="maleShow=true;femaleShow=true" >
                <img src="../../../../assets/img/signup/radio.png" alt="" v-show="!maleShow">  
                <img src="../../../../assets/img/signup/radioActive.png" alt="" v-show="maleShow">  
                <span>男</span>
              </label>
              <label for="femal" id="female" @click="maleShow=false;femaleShow=false">
                <img src="../../../../assets/img/signup/radio.png" alt="" v-show="femaleShow">   
                <img src="../../../../assets/img/signup/radioActive.png" alt="" v-show="!femaleShow">  
                <span>女</span>
              </label>
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
const key = "updatable";
export default {
  name: "InfoTable",
  data() {
    return {
      maleShow: true,
      femaleShow: true,
      disabled: false,
      userName: "",
      passWord: "",
      userNameShow: false,
      pasWordShow: false,
    };
  },
  methods: {
    showText(e) {
      if (e.target.type == "text") {
        this.userNameShow = false;
      } else if (e.target.type == "password") {
        this.pasWordShow = false;
      }
      e.target.placeholder = "";
    },
    hideText(e) {
      if (e.target.type == "text") {
        e.target.placeholder = "请输入您的用户名";
      } else if (e.target.type == "password") {
        e.target.placeholder = "请输入您的密码";
      }
    },
    successedBtn() {
      if (this.userName == "") {
        this.userNameShow = true;
        return;
      }
      if (this.passWord == "") {
        this.pasWordShow = true;
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
        this.$router.push('/login')
      }, 1000);
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