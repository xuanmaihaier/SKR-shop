<template>
  <div class="wdna_top">
      <Title><p>W컨셉 </p></Title>
      <my-swiper :imgs="imgs"></my-swiper>
  </div>
</template>

<script>
import Title from 'components/common/title/Title.vue'
import MySwiper from 'components/common/myswiper/MySwiper.vue'
export default {
    nama:'WdnaTop',
    components:{
        Title,
        MySwiper
    },
    data() {
        return {
            imgs:['//image.wconcept.co.kr/images/builder/1/4/15/28/pc02_1920x600_20210414102612.jpg','//image.wconcept.co.kr/images/builder/1/4/15/28/pc01_1920x600_20210413175251.jpg']
        }
    },
}
</script>

Title
<style>

</style>