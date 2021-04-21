<template>
<!-- 1 -->
  <div class="exclusive_banner">
    <div calss="slide_wraps" :style="{ width: '65%', float: 'left' ,}">
      <my-swiper :imgs="$store.state.getImgs.getImgLista" :id="$store.state.getImgs.getImgListaId" :Mystyle="{ width: '100%',height:'100%' }"></my-swiper>
    </div>
    <div class="thumbnail">
      <ul>
        <a-card
          hoverable
          :style="{ width: '46%', margin: '0 2% 2%' }"
          v-for="(item, index) in $store.state.getImgs.getImgList"
          :key="index"
          @click="handliClickb(item.id)"
        >
          <img slot="cover" alt="example" :src="item.img" />
          <a-card-meta :title="item.title">
            <template slot="description"> www.stride.fun </template>
          </a-card-meta>
        </a-card>
      </ul>
    </div>
  </div>
</template>

<script>
import MySwiper from "components/common/myswiper/MySwiper.vue";


export default {
  components: { MySwiper },
  name: "ExclusiveBanner",
  data() {
    return {
      
      swiper_list: [
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_01_20210317163320.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_3_20210407152918.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_4_20210407153250.jpg",
        "//image.wconcept.co.kr/images/builder/1/4/56/252/PE1_1732x1259_05_20210331160704.jpg",
      ],
    };
  },
  created() {
    this.getImg_()
  },
  methods: {
    //获取图片
    getImg_(){
      this.$store.dispatch('initGetImg',{parent_name:'服饰',start:10,end:15})
       this.$store.dispatch('initGetImga',{parent_name:'服饰',start:6,end:9})
      // console.log(this.$store.state.getImgs.getImgLista);
    },
    handliClickb(id){
        this.$router.push(`/details/${id}`)
    }
  },
  computed:{
    
  }
};
</script>

<style lang="less" scoped>
.exclusive_banner {
  position: relative;
  overflow: hidden;
  width: 100%;

  .thumbnail {
    float: right;
    width: 33.5%;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    //  height: 700px;
    }
  }
}
</style>0