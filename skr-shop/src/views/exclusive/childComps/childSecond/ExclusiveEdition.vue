<template>
  <div class="exclusive_edition">
    <Title>
      <p>EDITION</p>
    </Title>
    <ul>
      <a-card hoverable style="width: 240px" v-for="(item) in 3" :key="item">
        <img
          slot="cover"
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
        <a-card-meta title="Europe Street beat">
          <template slot="description"> www.instagram.com </template>
        </a-card-meta>
      </a-card>
    </ul>
  </div>
</template>

<script>
import Title from "components/common/title/Title.vue";
export default {
  components: { Title },
};
</script>

<style lang="less" scoped>

</style>