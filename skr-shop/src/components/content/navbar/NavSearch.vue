<template>
  <div class="ipt">
       <a-input-search placeholder="input search text" :style="inputStyle"  />
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputStyle:{
                'width': '100%',
                'border': '0',
        'border-bottom': `2px solid`,
            }
        }
    },
}
</script>

<style lang="less" scoped>
.ipt{
    width: 25%;
    display: flex;
    align-items: center;
    
   /deep/ .ant-input{
       border: 0;
        box-shadow: none;
   }
 
}

</style>