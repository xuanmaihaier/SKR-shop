<template>
  <div class="ipt">
<<<<<<< HEAD
      <!-- 只有搜索二级分类 -->
       <a-input-search placeholder="input search text" :style="inputStyle"  @search="onSearch" allowClear/>
=======
       <a-input-search placeholder="input search text" :style="inputStyle"  ref="input" @blur="changeFcous"/>
      
>>>>>>> 4a3393736b33a4706dd0c904a1ad8d0f26c27b91
  </div>
</template>

<script>
import {setLocalStorage} from 'utils/storage.js'
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
<<<<<<< HEAD
        onSearch(val){
            // 如果没有输入不进入
            if(val.length != 0){
                setLocalStorage('word',val)
                this.$router.push({name: 'Search',params: {'word': val}})
            }
        }
    },
=======
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
 
  
>>>>>>> 4a3393736b33a4706dd0c904a1ad8d0f26c27b91
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