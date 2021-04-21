<!--
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-16 20:11:50
 * @LastEditTime: 2021-04-20 22:19:20
 * @LastEditors: He Xiantao
-->
<template>
  <div class="select">
    <a-select default-value="days" style="width: 120px" @change="handleChange">
      <a-select-option value="days">
        日常的
      </a-select-option>
      <a-select-option value="weekend">
        每周
      </a-select-option>
      <a-select-option value="mounth">
        每月一次
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
<style>
.select{
  float: right;
}
</style>
