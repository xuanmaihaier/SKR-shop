<template>
  <div class="titleWarp">
    <h2 class="sub_title">
      <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">
            <slot></slot>
          </font>
      </font>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.titleWarp {
  padding-top: 81px;
  position: relative;
  height: 200px;
  min-width: 1240px;
  .sub_title {
    font-family: "ProximaNova-Thin", "yg740";
    font-size: 44px;
    color: #000;
    text-align: center;
    line-height: 100%;
    text-transform: uppercase;
  }
}
</style>