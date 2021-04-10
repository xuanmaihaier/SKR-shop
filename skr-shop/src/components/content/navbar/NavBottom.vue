<template>
  <div class="bottom">
    <div class="conent">
      <ul class="left">
        <li v-for="(item, index) in navLeft" :key="index" @mouseover="engraft(index)" @mouseout="exgraft">{{ item }}</li>
        <span>|</span>
      </ul>
      <ul class="right">
        <li v-for="(item, index) in navRight" :key="index" @click="handleClick">{{ item }}</li>
      </ul>
    </div>
    <div class="eng" ref="eng">

    </div>
  </div>
</template>

<script>
export default {
  name: "NavBottom",
  data() {
    return {
      navLeft: ["新的", "女装", "男装", "生活", "美丽", "销售", "设计师"],
      navRight: ["独家的", "WDNA", "事件", "最好的"],
    };
  },
  methods: {
      //移入
      engraft(index){
          console.log(index);
          this.$refs.eng.style.display = 'block'
        //   this.$refs.eng.style.color = '#04bd9e'
      },
    //移出
    exgraft(){
         this.$refs.eng.style.display = 'none'
    },
    //点击事件
    handleClick(){
        console.log(123);
    }
  },
};
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #0b0b0d;
  color: white;
  .conent{
      width: 55%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
  }
  ul {
      width: 100%;
    display: flex;
    li{
     flex: 1;
     text-align: center;
    }
    span{
        transform: translateX(10px);
    }
    li:hover{
        color: #04bd9e;
        cursor: pointer;
    }
  }
  .eng{
      width: 100%;
      height: 350px;
      background-color: antiquewhite;
      display: none;
  }
 
}
</style>