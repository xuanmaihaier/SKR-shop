<template>
  <div class="loading">
    <transition name="loading">
      <div class="loadingImg" v-if="loadingStatus"></div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Loading",
  computed:{
    ...mapState(['loadingStatus'])
  }
};
</script>

<style lang="less" scoped>
.loadingImg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("~assets/img/loading/loading.gif") no-repeat center center
    #2b2c2f;
  z-index: 999999;
  opacity: 0.8;
}

.loading-enter,
.loading-leave-to {
  opacity: 0;
}

.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s;
}
</style>