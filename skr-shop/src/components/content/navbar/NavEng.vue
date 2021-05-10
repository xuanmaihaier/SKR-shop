<template>
  <div class="eng" @mouseover="engraft" @mouseout="exgraft">
    <div class="conent">
      <ul class="left">
        <li v-for="(item, index) in listOne[navIndex]" :key="index" @click="liclick(item)">
          {{item}}
        </li>
      </ul>

      <div class="right">
        <ul>
          <li v-for="(ListItem, index) in navTypeOne[navIndex]" :key="index">
            <img :src="ListItem.img" alt="" />
            <h2>{{ ListItem.title }}</h2>
            <p>
              <span>{{ ListItem.particulars }}</span>
            </p>
            <p>
              <span>www.stride.fun</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import bus from "utils/bus";
export default {
  name: "NavEng",
  props: {
    navIndex: {
      type: Number,
      default: 0,
    },
    navTypeOne:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
      listOne: [],
    };
  },
  created() {
    this.getImg_()
  },
  methods: {
    //移入
    engraft() {
      this.$store.commit("changeShow", true);
    },
    //移出
    exgraft() {
      this.$store.commit("changeShow", false);
    },
    // li点击
    liclick(item){
      this.$router.push(`/secondary/${item}`)
    },
    //截取4张小图片
    async getImg_(){
      // console.log(this.navTypeOne);
      //   const {res}=await getImg(this.navTypeOne)
      //   console.log(res);
    }
  },
  mounted() {
    bus.$on("typeTwo", (res) => {
      this.listOne = res;
    });
  },
};
</script>

<style lang="less" scoped>
.eng {
  position: relative;
  z-index: 20;
  width: 100%;
  height: 300px;
  animation: eng_ 1s;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 1px #fff;
  .conent {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    .left {
      width: 50%;
      height: 100%;
      padding: 25px 60px 25px 25px;
      overflow: hidden;
        li{
          float: left;
         color: rgb(78, 77, 77);
         height: 30px;
         line-height: 30px;
         width:25%;
         cursor: pointer;
         font-size: 12px;
        font-family: "ProximaNova-Regular","yg740";
        }
        li:hover{
          color:#333 ;
          text-decoration: underline;
        }
     
    }

    .right {
      width: 50%;
      height: 100%;
      display: flex;
      ul {
        flex: 1;
        padding: 25px 0;
        display: flex;
        overflow: hidden;
        li {
          width: 140px;
          display: flex;
          height: 100%;
          flex-direction: column;
          margin-right: 20px;
          img {
            width: 100%;
            height: 173px;
            display: block;
          }
          h2 {
            line-height: 30px;
            text-align: center;
            font-weight: 700;
            font-size: 12px;
             overflow: hidden;
              white-space: nowrap; /* 设置文本是否换行.. */
              text-overflow: ellipsis; 
          }
          p {
            line-height: 30px;

            span {
              font-size: 12px;
              color: #333;
              display: block;
              width: 100%;
              overflow: hidden;
              white-space: nowrap; /* 设置文本是否换行.. */
              text-overflow: ellipsis; /* 超出文本出现省略号代替 */
            }
            span:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@keyframes eng_ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>