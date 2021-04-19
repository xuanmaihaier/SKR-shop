<template>
  <div class="joinMember">
    <!-- 注册步骤提示图片 -->
    <JoinStep  :successed='successed'/>
    <!-- 注册信息填写 -->
    <InfoTable @successedBtn='getVal'/>
  </div>
</template>

<script>
import InfoTable from './childrenComps/InfoTable.vue'
import JoinStep from './childrenComps/JoinStep.vue'
export default {
  components: { JoinStep, InfoTable},
  name:'JoinMember',
  data() {
    return {
      successed:false
    }
  },
  methods: {
    getVal(val){
      this.successed = val
    }
  },
}
</script>

<style lang="less" scoped>
.joinMember{
  margin: 0 auto 180px;
  width: 1240px;
}
</style>