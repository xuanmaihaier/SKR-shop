<template>
  <div>
    <nav-bar-top></nav-bar-top>
    <nav-bottom :typeOne="typeOne"></nav-bottom>
  </div>
</template>

<script>
import bus from "utils/bus"
import { getTypeOne, getTypeTwo } from "../../../network/getNav";
import NavBarTop from "./NavBarTop.vue";
import NavBottom from "./NavBottom.vue";
export default {
  name: "NavBar",
  data() {
    return {
      typeOne: [],
      typeTwo: [],
    };
  },
  methods: {
    // 获取一级
    getTypeOne_init() {
      getTypeOne().then((res) => {
        if (res.code == 200) {
          this.typeOne = res.data;
        } else {
          throw new Error("getTypeOne Error");
        }
      });
    },
  },
  components: { NavBarTop, NavBottom },
  created() {
    this.getTypeOne_init();
  },
  watch:{
    // 一级获取到获取二级目录
    typeOne:function(val){
      let query = [];
      val.forEach(item => {
         query.push(getTypeTwo(item));
      });
      Promise.all(query).then(res=>{
        res.forEach(item => {
          if(item.code==200){
            this.typeTwo.push(item.data)
          }
        });
      })
    }
  },
  mounted() {
    bus.$emit('typeTwo',this.typeTwo)
  },
};
</script>

<style>
</style>