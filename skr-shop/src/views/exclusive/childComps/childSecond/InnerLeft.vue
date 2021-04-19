<template>
  <div class="inner_left">
      <div class="inner_le" v-for="(item,index) in $store.state.getImgs.getImgLista.slice(0,4)" :key="item" @click="handleClick(index)">
          <img :src="item">
      </div>
     
  </div>
</template>

<script>
export default {
    methods: {
        handleClick(index){
            // console.log(this.$store.state.getImgs.getImgListaId[index]);
            this.$router.push(`/details/${this.$store.state.getImgs.getImgListaId[index]}`)
        }
    },
}
</script>

<style lang="less" scoped>
.inner_left{
    width: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
   div{
       padding: 0 10px;
       cursor: pointer;
   }
    img{
            width: 100%;
        }
}
</style>