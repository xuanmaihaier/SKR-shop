<template>
  <div class="exclusive_edition">
    <Title>
      <p>EDITION</p>
    </Title>
    <ul class="slick_slider">
      <a-card hoverable  v-for="(item ,index) in $store.state.getImgs.getImgList.slice(0,3)" :key="item.id"  @mouseover="engraft(index)"
            @mouseout="exgraft" :bordered="false">
             
       <div :style="{width:`100%`,position:'relative'}">
           <div :class="{mask:index==index_page}"  :style="{backgroundColor:mask_background[index]}"></div>
            <img
        style="width:100%"
          slot="cover"
          alt="example"
          :src="item.img"
        />
       </div>
        <a-card-meta :title="item.title">
          <template slot="description">www.stride.fun</template>
          <template slot="description"> <span class="sub_txt">stride.fun</span> </template>
          <template slot="description"> <span class="main_txt"></span> </template>

        </a-card-meta>
        
      </a-card>
     
    </ul>
  </div>
</template>

<script>
import Title from "components/common/title/Title.vue";
export default {
  components: { Title },
  data() {
      return {
          mask_background:[`rgba(234,255,130,0.8)`,`rgba(255,105,153,0.8)`,`rgba(83,173,116,0.8)`],
          index_page:null
      }
  },
  methods: {

      //鼠标移入
      engraft(index){
            this.index_page = index
   
      },
    //鼠标移出
    exgraft(){
      this.index_page = null
    }
  },
};
</script>

<style lang="less" scoped>
.exclusive_edition{
    width: 100%;
    .slick_slider{
        width: 100%;
        display: flex;
        .ant-card{
            margin: 0 30px;
             width: calc(100% / 3 - 60px);
             position: relative;
            
             .sub_txt{
                 position: absolute;
                 top: 30px;
                 left: 30px;
                 color: #fff;
                 font-size: 14px;
                 font-family: "ProximaNova-Bold","yg750";
                 z-index: 1;
             }
             .main_txt{
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 transform: translate(-50%,-50%);
                 display: inline-block;
                 vertical-align: middle;
                font-family: "ProximaNova-Bold","yg750";
                font-size: 5rem;
                line-height: normal;
                color: #fff;
                text-align: center;
                font-weight: 700;
             }
            /deep/ .ant-card-body{
                padding: 0;
                
            }
        }
        .mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            animation: mask_ 1s;
        }
        @keyframes mask_ {
          0%{opacity: 0;}
          100%{opacity: 1;}
        }
    }
}
/deep/ .ant-card-meta-detail > div:not(:last-child){
                    margin-top: 15px;
 }
</style>