<template>
  <!-- 2 -->
  <div class="exclusive_wantneed">
   <div class="tit_wantneed">
      <Title>
      <div class="tit_wrap" >
        <p>WANT.NEED</p>
        <a-button @click="handleClick"> + ALL <span>(10943)</span></a-button>
      </div>
    </Title>
   </div>
    <ul class="thumbnail_list">
      <a-card hoverable v-for="(item, index) in $store.state.getImgs.getImgListd" :key="index" @click="clickHandle(item.id)">
        <img
          slot="cover"
          alt="example"
          :src="item.img"
        />
       <a-card-meta :title="item.title">
            <template slot="description"> www.stride.fun </template>
          </a-card-meta>
      </a-card>
    </ul>
  </div>
</template>

<script>
import Title from "components/common/title/Title.vue";

export default {
  components: { Title },
    created() {
    this.$store.dispatch('initGetImgd',{parent_name:'服饰',start:19,end:26})
  },
  methods: {
    handleClick(){
      this.$router.push(`/wdna`)
    },
    clickHandle(id){
       this.$router.push(`/details/${id}`)
    }
  },
};
</script>

<style lang="less" scoped>
.exclusive_wantneed {
  .tit_wantneed{
    transform: translateY(-100%);
  }

  .tit_wrap {
    .ant-btn {
      padding: 0 20px 0 18px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      color: rgb(170, 167, 167);
    }
    .ant-btn:hover {
      border-color: #ccc;
      color: rgb(104, 102, 102);
    }
  }
  .thumbnail_list {
    width: 100%;
    display: flex;
    .ant-card {
      width: calc(100% / 8 - 20px);
      margin: 0 10px;
      /deep/.ant-card-body {
        padding: 0;
        font-size: 14px;
        .price{
            display: flex;
            justify-content: space-between;
            padding: 15px 5px 0;
            .discount_after{
                font-weight: 500;
                color: #333;
                padding-right: 15px;
            }
            .discount{
                text-decoration: line-through;
            }
            .percent{
                color: red;
                font-size: 16px;
            }
        }
        .front{
            color: #000;
        }
      }
    }
  }
}
/deep/.ant-card-meta-title{
  padding-top: 5px;
  font-size: 13px;
}
</style>