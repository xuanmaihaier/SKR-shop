<template>
  <div class="ipt">
      <!-- 只有搜索二级分类 -->
       <a-input-search placeholder="input search text" :style="inputStyle"  @search="onSearch" allowClear/>
  </div>
</template>

<script>
import {setLocalStorage} from 'utils/storage.js'
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
    methods: {
        onSearch(val){
            // 如果没有输入不进入
            if(val.length != 0){
                setLocalStorage('word',val)
                this.$router.push({name: 'Search',params: {'word': val}})
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