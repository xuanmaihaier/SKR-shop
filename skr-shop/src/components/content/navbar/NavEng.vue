<template>
  <div class="eng" @mouseover="engraft" @mouseout="exgraft">
    <div class="conent">
      <div class="left">
        <ul v-for="(item, index) in listOne" :key="index">
          <li>
            <h2>{{ item[navIndex] }}</h2>
          </li>
          <li v-for="(data, indexs) in item.listTwo" :key="indexs">
            <span>{{ data.title }}</span>
            <span>{{ data.heat }}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(ListItem, index) in rightList" :key="index">
            <img :src="ListItem.url" alt="" />
            <h2>{{ ListItem.title }}</h2>
            <p>
              <span>{{ ListItem.particulars }}</span>
            </p>
            <p>
              <span>{{ ListItem.particularsList }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "utils/bus"
export default {
  name: "NavEng",
  props: {
    navIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      listOne: [],
      rightList: [
        {
          url:
            "//image.wconcept.co.kr/productimg/image/img1/11/301230111.jpg?thumbnail=130x173",
          title: "FROWTROW",
          particulars: "[스프링 20%쿠폰]",
          particularsList: "Boucle Crop Cardigan_2color",
          price: "148,000",
        },
        {
          url:
            "//image.wconcept.co.kr/productimg/image/img1/11/301230111.jpg?thumbnail=130x173",
          title: "FROWTROW",
          particulars: "[스프링 20%쿠폰]",
          particularsList: "Boucle Crop Cardigan_2color",
          price: "148,000",
        },
        {
          url:
            "//image.wconcept.co.kr/productimg/image/img1/11/301230111.jpg?thumbnail=130x173",
          title: "FROWTROW",
          particulars: "[스프링 20%쿠폰]",
          particularsList: "Boucle Crop Cardigan_2color",
          price: "148,000",
        },
        {
          url:
            "//image.wconcept.co.kr/productimg/image/img1/11/301230111.jpg?thumbnail=130x173",
          title: "FROWTROW",
          particulars: "[스프링 20%쿠폰]",
          particularsList: "Boucle Crop Cardigan_2color",
          price: "148,000",
        },
      ],
      
    };
  },
  methods: {
    //移入
    engraft(){
      this.$store.commit("changeShow", true);
      
    },
      //移出
    exgraft() {
      this.$store.commit("changeShow", false);
      
    }
  },
  mounted() {
    bus.$on('typeTwo',res=>{
      console.log(res);
      this.listOne = res
    })
  },
};
</script>

<style lang="less" scoped>
.eng {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 300px;
  animation: eng_ 1s;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
 
  .conent {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    .left,
    .right {
      width: 50%;
      height: 100%;
      //   background-color: red;
      display: flex;
      ul {
        flex: 1;
        li {
          height: 35px;
          display: flex;
          justify-content: space-evenly;
          cursor: pointer;
          //    padding: 0 30px 0 15px;
          h2 {
            text-align: center;
            font-weight: 700;
            font-size: 12px;
          }
          span {
            font-size: 12px;
            color: #333;
          }
          span:hover{
            text-decoration: underline;
          }
        }
      }
    }
   
    .right {
      width: 50%;
      ul {
        padding: 25px 0;
        display: flex;
        overflow: hidden;
        li {
          width: 130px;
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
          }
          p {
            line-height: 30px;

            span {
              display: block;
              width: 100%;
              overflow: hidden;
              white-space: nowrap; /* 设置文本是否换行.. */
              text-overflow: ellipsis; /* 超出文本出现省略号代替 */
            }
          }
        }
      }
    }
  }
}

@keyframes eng_ {
  0%{
    opacity: 0;
  }
  100%{
   opacity: 1;
  }
}
</style>