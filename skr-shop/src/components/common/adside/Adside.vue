<template>
  <div>
    <!-- 侧边栏 -->
    <div class="side_menu" ref="sidemenu">
      <div class="side_M" ref="side_M">
        <!-- 购物历史 -->
        <div class="side_bar">
          <a-icon
            type="unordered-list"
            :style="{ color: '#fff' }"
            @click="showService(1)"
          />
        </div>
        <!-- 客服窗口 -->
        <div class="quick_history">
          <a-icon type="history" :rotate="180" @click="showHistory(2)" />
        </div>
      </div>
      <div class="arrow_bar">
        <!-- 返回顶部 -->
        <a-icon
          type="arrow-up"
          class="icon_btn"
          @click="returnTop"
          v-if="isShowUp"
        />
        <!-- 返回底部 -->
        <a-icon
          type="arrow-down"
          class="icon_btn"
          @click="returnBottom"
          v-if="isShowDown"
        />
      </div>
    </div>
    <!-- 拓展页面 -->
    <div class="expand" ref="expand">
      <!-- <router-view /> -->
      <shopCar v-show="isShowService" @isCloseBar="isClose"></shopCar>
      <service v-show="isShowHistory" @isCloseBar="isClose" ></service>
    </div>
  </div>
</template>

<script>
import shopCar from "./ShopCar";
import service from "./Service";

export default {
  components: {
    shopCar,
    service,
  },
  data() {
    return {
      isShowUp: false,
      isShowDown: true,
      //右侧页面的显示隐藏
      last: "",
      isShowService: true,
      isShowHistory: false,
      flag: true, //节流阀
    };
  },
  methods: {
    isClose(val) {
      // 侧边栏右上角按钮的点击事件
      this.showExpanBar(val);
    },
    returnTop() {
      // 返回顶部
      if (this.flag) {
        this.flag = false;
        this.animateScroll(pageYOffset,0,()=>this.flag=true)
      }
    },
    returnBottom() {
      // 返回底部
      if (this.flag) {
        this.flag = false;
        this.animateScroll(pageYOffset,document.body.scrollHeight,()=>this.flag=true)
      }
    },
    showExpanBar(value) {
      // value 为true，则显示侧边栏
      if (value) {
        this.$refs.expand.style.right = 0 + "px";
        this.$refs.sidemenu.style.right = 300 + "px";
      } else {
        this.$refs.expand.style.right = -300 + "px";
        this.$refs.sidemenu.style.right = 0 + "px";
        this.last = " ";
      }
    },
    showService(a) {
      if (a === this.last) {
        this.showExpanBar(false);
        this.last = "";
      } else {
        this.showExpanBar(true);
        // this.$router.push("/service");
        this.isShowService = true;
        this.isShowHistory = false;
        this.last = a;
      }
    },
    showHistory(a) {
      if (a === this.last) {
        this.showExpanBar(false);
        this.last = "";
      } else {
        this.showExpanBar(true);
        // this.$router.push("/history");
        this.isShowHistory = true;
        this.isShowService = false;
        this.last = a;
      }
    },
  },
  mounted() {
    // 返回顶部、返回底部按钮的显示隐藏
    window.onscroll = function () {
      //  滚动条的高度
      let scrollBar = document.documentElement.scrollTop;
      // 页面高度
      let bodyHeight = document.body.scrollHeight;
      // 可视区高度
      let clientH = document.body.clientHeight;
      // console.log(scrollBar, bodyHeight, clientH);
      if (scrollBar <= 19) {
        this.isShowUp = false;
      } else {
        this.isShowUp = true;
      }
      if (clientH + scrollBar >= bodyHeight - 19) {
        this.isShowDown = false;
      } else {
        this.isShowDown = true;
      }
    }.bind(this);
  },
}
</script>

<style lang="less" scoped>
.side_menu {
  position: fixed;
  right: 0;
  bottom: 30px;
  width: 55px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
  background-color: #0d0d0d;
  transition: all 0.7s;
  z-index: 999;
}
.side_M {
  width: 55px;
  background-color: #0d0d0d;
  transition: all 0.5s;
}
.side_bar {
  width: 100%;
  padding: 11px 0;
}
.quick_history {
  padding: 11px 0;
}
.number {
  display: block;
  margin: 3px 0;
  color: red;
}
.arrow_bar {
  background-color: #0d0d0d;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.icon_btn {
  display: block;
  width: 55px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}

.anticon {
  cursor: pointer;
}
// 隐藏页面
.expand {
  position: fixed;
  bottom: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  transition: all 0.7s;
  z-index: 999;
}
</style>