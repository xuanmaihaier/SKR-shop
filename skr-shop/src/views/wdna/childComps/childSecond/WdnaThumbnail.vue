<template>
  <div>
      <div class="thumbnail">
      <a-card hoverable v-for="(item) in 16" :key="item">
        <img
          slot="cover"
          alt="example"
          src="http://image.wconcept.co.kr/images/builder/PD4_372x208_20201223180909.jpg"
        />
        <a-card-meta title="Europe Street beat">
          <template slot="description"> www.instagram.com </template>
        </a-card-meta>
      </a-card>
    </div>
   <div class="paginations">
      <!-- defaultCurrent :默认的当前页数 
                total	数据总数
                defaultPageSize	默认的每页条数
            -->
        <a-pagination v-model="current" :total="32" :defaultPageSize="16" show-less-items />
   </div>
  </div>
</template>

<script>
export default {
    name:'WdnaThumbnail',
      data() {
    return {
      current: 1,
    };
  },

}
</script>

<style lang="less" scoped>
.thumbnail {
    padding: 50px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /deep/.ant-card {
        width: calc(100%/4 - 20px);
        margin-bottom: 20px;
    }
  }
  .paginations{
      padding-left: 50%;
      .ant-pagination{
          transform: translate(-50%,0);
          text-align: center;
      }
  }
</style>