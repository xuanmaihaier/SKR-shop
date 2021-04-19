<template>
  <a-affix
    :style="{
      position: isChage == true ? 'absolute' : 'static',
      top: 0,
      left: 0,
    }"
    @change="affixChange"
  >
    <div class="bottom">
      <!-- 二级目录 -->
      <div class="conent">
        <ul class="left">
          <li
            v-for="(item, index) in typeOne.slice(0, 4)"
            :key="index"
            @mouseover="engraft(index, item)"
            @mouseout="exgraft"
            @click="handleClicka(item)"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="right">
          <li
            v-for="(item, index) in navRight"
            :key="index"
            @click="handleClickb(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- Nav 显示隐藏的list表 -->
      <nav-eng
        v-show="$store.state.isShow"
        :navIndex="navIndex"
        :navTypeOne="navTypeOne"
      ></nav-eng>
    </div>
    <!-- 右侧icon图标 -->
    <div class="utility" v-if="isChage">
      <div class="icon" @click="clickSearch">
        <a-icon type="search" />
        <p>SEARCH</p>
      </div>
      <div class="icon">
        <a-icon type="user" />
        <p @click="goMypage">MY</p>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <p @click="goShopCart">0</p>
      </div>
    </div>
    <!-- 搜索 -->
    <!--  -->
    <div class="nav_search" v-if="$store.state.SearchShow">
      <NavSearch :focusFlag="focusFlag"></NavSearch>
    </div>
  </a-affix>
</template>

<script>
import { getImg } from "network/getImg.js";
import NavEng from "./NavEng.vue";
import NavSearch from "./NavSearch.vue";
export default {
  name: "NavBottom",
  components: { NavEng, NavSearch },
  data() {
    return {
      top: 0,
      navRight: ["POP", "EXCLUSIVE", "EVENT", "BEST"],
      navRightPath: ["/wdna","/exclusive",  "/event", "/best"],
      navIndex: 0,
      navTypeOne: [],
      isChage: false,
      focusFlag: false,
    };
  },

  props: {
    typeOne: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.getImg_( {parent_name:'鞋类',start:5,end:8})
    this.getImg_( {parent_name:'服饰',start:5,end:8})
    this.getImg_( {parent_name:'配件',start:16,end:18})
    this.getImg_( {parent_name:'儿童专区',start:7,end:10})
    // console.log(this.navTypeOne);
  },
  methods: {
    //截取4张小图片
    async getImg_(item) {
      const res = await getImg(item);
      this.navTypeOne.push(res);
    },
    //移入
    engraft(index, item) {
      this.navIndex = index;
      // this.getImg_(item)
      this.$store.dispatch("commitShow", true);
    },
    //移出
    exgraft() {
      this.$store.dispatch("commitShow", false);
    },
    // 前几个的点击 by stride
    handleClicka(item) {
      this.$router.push(`/primary/${item}`);
    },

    //Right的点击事件
    handleClickb(index) {
      this.$router.push(this.navRightPath[index]);
    },
    // icon的显示隐藏
    affixChange() {
      this.isChage = !this.isChage;
      this.Search_Show = false;
    },
    // 搜索点击
    clickSearch() {
      this.focusFlag = true;
      this.$store.dispatch("commitSearchShow", true);
    },
    goMypage() {
      if (sessionStorage.getItem("token")) {
        this.$router.push("/mypage");
      } else {
        this.$message.destroy(); //解决多次点击显示多个弹窗
        this.$message.warning({
          content: "请先登录！",
          duration: 1,
        });
        this.$router.push("/login");
      }
    },
    goShopCart() {
      if (sessionStorage.getItem("token")) {
        this.$router.push("/shopcart");
      } else {
        this.$message.destroy(); //解决多次点击显示多个弹窗
        this.$message.warning({
          content: "请先登录！",
          duration: 1,
        });
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  },
};
</script>

<style lang="less" scoped>
/deep/ .ant-affix {
  width: 100% !important;
  min-width: 1240px;
}
.bottom {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #000000;
  color: white;
  overflow: hidden;
  z-index: 55;
  .conent {
    width: 55%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ul {
    width: 100%;
    display: flex;
    margin: 0 15px;
    li {
      flex: 1;
      text-align: center;
      letter-spacing: 2px;
    }
    span {
      transform: translateX(10px);
    }
    li:hover {
      color: #04bd9e;
      cursor: pointer;
    }
  }
}
.utility {
  height: 65px;
  width: 10%;
  min-width: 150px;
  position: absolute;
  top: 0;
  right: 5%;
  display: flex;
  padding-top: 3px;
  .icon {
    cursor: pointer;
    padding-top: 10px;
    text-align: center;
    flex: 1;
    color: #fff;
    i {
      font-size: 20px;
    }
  }
}

.nav_search {
  position: absolute;
  top: 0px;
  right: 5%;
  height: 65px;
  // width: 15%;
  padding-top: 12px;
  animation: navs_search 0.5s linear;
  animation-fill-mode: forwards;
  .ipt {
    width: 100%;
  }
  /deep/.ant-input {
    width: 100%;
    height: 40px;
  }
}

.right li {
  font-weight: 700;
  font-size: 14px;
}
@keyframes navs_search {
  0% {
    width: 0;
  }
  100% {
    width: 15%;
  }
}
</style>