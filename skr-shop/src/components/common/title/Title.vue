<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Title"
}
</script>

<style lang="less" scoped>
.title{
  p{
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin:60px 0 20px 0;
    font-weight: 100;
  }
}
</style>