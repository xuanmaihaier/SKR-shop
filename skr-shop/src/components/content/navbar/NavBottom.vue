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
            v-for="(item, index) in typeOne"
            :key="index"
            @mouseover="engraft(index)"
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
      <nav-eng v-show="$store.state.isShow" :navIndex="navIndex"></nav-eng>
    </div>
    <!-- 右侧icon图标 -->
    <div class="utility" v-if="isChage">
      <div class="icon" @click="clickSearch">
       <a-icon type="search" />
        <p >SEARCH</p>
      </div>
       <div class="icon">
         <a-icon type="user" />
        <p >MY</p>
      </div>
      <div class="icon">
        <a-icon type="shopping-cart" />
        <p>0</p>
      </div>
      
    </div>
    <!-- 搜索 -->
    <!--  -->
    <div class="nav_search"  v-if="$store.state.SearchShow">
      <NavSearch :focusFlag="focusFlag"></NavSearch>
    </div>
  </a-affix>
</template>

<script>
import NavEng from "./NavEng.vue";
import NavSearch from './NavSearch.vue';
export default {
  name: "NavBottom",
  components: { NavEng,NavSearch },
  data() {
    return {
      top: 0,
      navRight: ["独家的", "WDNA", "事件", "最好的"],
      navRightPath: ["/exclusive", "/wdna",'/event','/best'],
      navIndex: 0,
      isChage: false,
      // Search_Show:false,
      focusFlag:false
    };
  },
  props: {
    typeOne: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //移入
    engraft(index) {
      this.navIndex = index;
      // console.log(this.navIndex,'----');
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
      this.Search_Show = false
    },
    // 搜索点击
    clickSearch(){
      this.focusFlag = true
      this.$store.dispatch("commitSearchShow", true);
     
    }
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
  .icon{
    cursor: pointer;
    padding-top: 10px;
    text-align: center;
    flex: 1;
     color: #fff;
    i{
     
      font-size: 20px;
    }
  }
}

.nav_search{
  position: absolute;
  top:0px;
  right: 5%;
  height: 65px;
  // width: 15%;
  padding-top: 12px;
  animation: navs_search 0.5s linear;
  animation-fill-mode: forwards;
  .ipt{
    width: 100%;
  }
  /deep/.ant-input{
    width: 100%;
    height: 40px;
  }
}
@keyframes navs_search {
  0%{
    width: 0;
  }
  100%{
    width: 15%;
  }
}
</style>