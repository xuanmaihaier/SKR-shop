<template>
  <div class="BrandInfo">
    <div class="brand_info_item">
      <p>{{ $route.params.id }}专区</p>
      <span>www.stride.fun</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandInfo",
};
</script>

<style lang="less" scoped>
.BrandInfo {
  .brand_info_item {
    width: 80%;
    margin: 0 auto;
    background: #5a5a5a;
    color: #fff;
    height: 296px;
    padding: 45px 35px 0 47px;
    p{
      font-size: 40px;
      font-weight: 200;
      padding-bottom: 30px;
    }
  }
}
</style>