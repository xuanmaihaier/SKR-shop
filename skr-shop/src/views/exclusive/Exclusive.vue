<template>
  <div>
      <Title><p> EXCLUSIVE </p></Title>

      <ExclusiveConent/>
      <ExclusiveConenta/>
  </div>
</template>

<script>
import Title from 'components/common/title/Title.vue'
import ExclusiveConent from './childComps/ExclusiveConent.vue'
import ExclusiveConenta from './childComps/ExclusiveConenta.vue'
export default {
    name:'Exclusive',
    components:{
        Title,
        ExclusiveConent,
        ExclusiveConenta

    }
}
</script>

<style>

</style>