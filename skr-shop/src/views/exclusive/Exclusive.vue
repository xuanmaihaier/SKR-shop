<template>
  <div class="exclusice">
      <Title><p> EXCLUSIVE </p></Title>

      <ExclusiveConent/>
      <ExclusiveConenta/>
      <ExclusiveConentb/>
      <ExclusiveConentc/>
    
  </div>
</template>

<script>
import Title from 'components/common/title/Title.vue'
import ExclusiveConent from './childComps/ExclusiveConent.vue'
import ExclusiveConenta from './childComps/ExclusiveConenta.vue'
import ExclusiveConentb from './childComps/ExclusiveConentb.vue'
import ExclusiveConentc from './childComps/ExclusiveConentc.vue'


export default {
    name:'Exclusive',
    components:{
        Title,
        ExclusiveConent,
        ExclusiveConenta,
        ExclusiveConentb,
        ExclusiveConentc,
      

    }
}
</script>

<style lang="less" scoped>
.exclusice{
    margin-bottom: 40px;
}
</style>