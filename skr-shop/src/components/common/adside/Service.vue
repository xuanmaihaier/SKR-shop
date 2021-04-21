<!--
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-14 08:54:35
 * @LastEditTime: 2021-04-20 22:17:49
 * @LastEditors: He Xiantao
-->
<template>
  <div class="historyPage">
    <!-- 侧边栏客服 -->
    <div class="his_head">
      <h2>SKR线上</h2>
      <fork @click.native="handle()"></fork>
    </div>
    <div class="ser_text">
      <div v-if="$store.state.isShowSer">
        <div class="contents"></div>
        <a-textarea
          ref="textarea"
          class="textarea"
          placeholder="客服将尽快回复您"
          v-model="message"
          @keyup.enter="sendMessage_init"
          :auto-size="{ minRows: 1, maxRows: 5 }"
        />
        <a-button class="send" @click="sendMessage_init">发送</a-button>
      </div>
      <div class="ser_mask" v-if="!$store.state.isShowSer">
        <a-button class="ser_btn" @click="returnLogin">请登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import fork from "./Fork";
import bus from "utils/bus";
export default {
  components: {
    fork,
  },
  data() {
    return {
      close: true,
      login_: false,
      message: "",
      sendtext: "",
      storePicUrl: require("assets/img/following/skr.png"),
      store_news: 0,
      userPicUrl: require("assets/img/following/client.jpeg"),
    };
  },
  created() {
    this.tim.on(this.TIM.EVENT.MESSAGE_RECEIVED, this.getMessage);
    this.login_init();
    this.tim.on(this.TIM.EVENT.MESSAGE_RECEIVED, this.getMessage);
  },

  methods: {
    handle() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
    },
    returnLogin() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
      if (this.$route.path !== "/login") {
        this.$store.state.loadingStatus = true;
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      }
    },
    login_init() {
      this.im_login();
      let user = sessionStorage.getItem("userId");
      if (user) {
        this.$store.commit("showSerBar", true);
      } else {
        this.$store.commit("showSerBar", false);
      }
    },
    im_login() {
      let that = this;
      let promised = this.tim.login({
        userID: "user",
        userSig:
          "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwqXFQAoiXpySnVhQkJmiZGVoYmBgamBpYGgBkUmtKMgsSgWKm5qaGhkYGEBESzJzQWJmhhYWhqZGlkZQUzLTgcYGarsU*JRk*Xt5R3kFeDkXBFsae6TG6CeH*mtXanv6RJSWeeYWR6ZVZnoGlNsq1QIAGGYxbQ__",
      });
      promised
        .then(function (imResponse) {
          that.login_ = true;
          // console.log("登录成功"); // 登录成功
        })
        .catch(function (imError) {
          console.warn("login error:", imError); // 登录失败的相关信息
        });
    },
    sedmessage() {
      let that = this;
      if (this.message == "") {
        this.$refs.textarea.$el.placeholder = "请输入内容!";
        return;
      } else {
        this.$refs.textarea.$el.placeholder = "客服将尽快回复您";
      }
      if (this.login_) {
        // 发送文本消息，Web 端与小程序端相同
        // 1. 创建消息实例，接口返回的实例可以上屏
        let message = this.tim.createTextMessage({
          to: "user1",
          conversationType: this.TIM.TYPES.CONV_C2C,
          // 消息优先级，用于群聊（v2.4.2起支持）。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息，详细请参考：https://cloud.tencent.com/document/product/269/3663#.E6.B6.88.E6.81.AF.E4.BC.98.E5.85.88.E7.BA.A7.E4.B8.8E.E9.A2.91.E7.8E.87.E6.8E.A7.E5.88.B6)
          // 支持的枚举值：TIM.TYPES.MSG_PRIORITY_HIGH, TIM.TYPES.MSG_PRIORITY_NORMAL（默认）, TIM.TYPES.MSG_PRIORITY_LOW, TIM.TYPES.MSG_PRIORITY_LOWEST
          // priority: TIM.TYPES.MSG_PRIORITY_NORMAL,
          payload: {
            text: this.message,
          },
        });
        // 2. 发送消息
        let promise = this.tim.sendMessage(message);
        // console.log(this.userPicUrl);
        promise
          .then(function (imResponse) {
            // 发送成功
            that.sendtext = imResponse.data.message.payload.text;
            that.message = "";
            let contents = document.querySelector(".contents");
            // 创建div盒子
            let user_bar = document.createElement("div");
            user_bar.className = "user_bar";
            let user = document.createElement("p");
            user.className = "user_init";
            user.innerHTML = that.sendtext;
            user_bar.appendChild(user);
            // 创建头像
            let user_pic = document.createElement("img");
            user_pic.className = "user_pic";
            user_pic.src = that.userPicUrl;
            user_bar.appendChild(user_pic);
            contents.appendChild(user_bar);
          })
          .catch(function (imError) {
            // 发送失败
            console.warn("sendMessage error:", imError);
          });
      }
    },
    getNews() {
      this.store_news++;
      // console.log(this.store_news);
    },
    getMessage(event) {
      this.getNews();
      this.gettext = event.data[0].payload.text;

      let contents = document.querySelector(".contents");
      // 创建div盒子

      let store_bar = document.createElement("div");
      store_bar.className = "store_bar";

      let store = document.createElement("p");

      store.className = "store_init";

      store.innerHTML = this.gettext;

      let store_pic = document.createElement("img");

      store_pic.className = "store_pic";
      store_pic.src = this.storePicUrl;
      store_bar.appendChild(store_pic);
      store_bar.appendChild(store);
      contents.appendChild(store_bar);
    },
    sendMessage_init() {
      this.sedmessage();
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.historyPage {
  position: fixed;
  bottom: 0;
  width: 300px;
  height: 500px;
  background-color: #fff;
  border: 2px solid #333;
  box-shadow: 10px 10px 10px 5px #333;
}
.his_head {
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-weight: 500;
  text-align: center;
  background-color: #000;
  h2 {
    color: #fff;
  }
}

.ser_text {
  position: relative;
  width: 100%;
  height: 430px;
  padding: 5px;
  overflow: auto;
  background-color: #ddd;
}
.ser_mask {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  .ser_btn {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 100px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    box-shadow: 1px 2px 10px 1px rgb(102, 98, 98, 0.9);
    border: 0;
    box-sizing: border-box;
  }
}
.textarea {
  position: fixed;
  width: 230px;
  bottom: 8px;
}
.send {
  position: absolute;
  right: 0;
  bottom: 0;
}
/deep/ .contents {
  padding: 20px 0;
  height: 380px;
  // overflow-y: scroll;
  overflow: auto;
}
/deep/.store_bar,
/deep/.user_bar {
  display: flex;
  width: 95%;
  margin: 5px auto;
  .store_pic,
  .user_pic {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background-color: sandybrown;
    vertical-align: middle;
  }
}

/deep/.user_bar {
  justify-content: flex-end;
  // background-color: aquamarine;
}
// 客户
/deep/ .store_init,
/deep/ .user_init {
  display: inline-block;
  width: 160px;
  min-height: 30px;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  text-indent: 10px;
  vertical-align: middle;
}
</style>