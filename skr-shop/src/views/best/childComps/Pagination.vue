<template>
  <div id="components-pagination-demo-mini">
    <a-pagination size="small" :total="20" />
  </div>
</template>
<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
.ant-pagination-prev{
    display: none !important;
}
</style>
