<template>
  <div>
      <Title><p> EXCLUSIVE </p></Title>

      <ExclusiveConent/>
  </div>
</template>

<script>
import Title from 'components/common/title/Title.vue'
import ExclusiveConent from './childComps/ExclusiveConent.vue'
export default {
    name:'Exclusive',
    components:{
        Title,
        ExclusiveConent

    }
}
</script>

<style>

</style>