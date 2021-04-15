<template>
  <div class="ipt">
       <a-input-search placeholder="input search text" :style="inputStyle"  ref="input" @blur="changeFcous"/>
      
  </div>
</template>

<script>
export default {
    props:{
        focusFlag:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            inputStyle:{
                'width': '100%',
                'border': '0',
        'border-bottom': `2px solid`,
            }
        }
    },
    methods: {
        // 聚焦
        onFcous(){
                  this.$refs.input.focus()
        },
        // 失去焦点
        changeFcous(){
            this.$store.dispatch("commitSearchShow", false);
        }
    },
   mounted() {
       if(this.focusFlag){
           this.onFcous()
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