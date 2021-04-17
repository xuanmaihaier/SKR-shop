<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
    <br />
  </div>
</template>
<script>
export default {
  name:"Breadcrumb",
  data() {
    const { lang } = this.$route.params;
    return {
      basePath: '',
      routes: [
        {
          path: 'home',
          breadcrumbName: 'home',
        },
        {
          path: 'secondary',
          breadcrumbName: 'secondary',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.ant-breadcrumb{
  text-align: center;
}
</style>