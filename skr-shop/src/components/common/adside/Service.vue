<template>
  <div class="historyPage">
    <!-- 侧边栏客服 -->
    <div class="his_head">
      <h2>客服小气</h2>
      <fork @click.native="handle()"></fork>
    </div>
    <div class="ser_text">
      <div v-if="$store.state.isShowSer">
        <ul>
          <li>
           hello!
          </li>
        </ul>
        <div class="client_">
          <input type="text" id="clientInput"><label for="clientInput" class="send">发送</label>
        </div>
      </div>
      <div class="ser_mask" v-if="!$store.state.isShowSer">
        <a-button class="ser_btn" @click="returnLogin">请登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import fork from "./Fork";
export default {
  components: {
    fork,
  },
  data() {
    return {
      close: true,
      ser_img: require("assets/img/following/service.jpeg"),
      cli_img:require("assets/img/following/client.jpeg"),
    };
  },
  created() {
    let user = sessionStorage.getItem("userId");
    if (user) {
      this.$store.commit("showSerBar", true);
    } else {
      this.$store.commit("showSerBar", false);
    }
  },
  methods: {
    handle() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
    },
    returnLogin() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
      this.$store.state.loadingStatus = true;
      setTimeout(() => {
        this.$router.push("/login");
      }, 1000);
    },
  },
  watch: {},
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
  height: 100%;

  ul {
    width: 100%;
    height: 100%;
    padding: 10px 0;
    li {
      width: 90%;
      line-height: 30px;
      background-color: skyblue;
      padding: 10px;
      border-radius: 15px;
      margin: 5px auto;
      text-indent: 5px;
    }
  }
  .client_{
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    margin: 0 auto;
    input{
      width: 80%;
      outline: none;
      height: 30px;
      text-indent: 5px;
    }
    .send{
      display: inline-block;
      width: 50px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      border: 1px solid #333;
      box-shadow: 1px 2px 5px 1px #333;
      border-radius: 5px;
      margin-left: 2px;
      cursor: pointer;
    }
  }
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
</style>