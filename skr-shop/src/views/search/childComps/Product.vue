<template>
  <div class="product">
    <ul>
      <li v-for="item in data" :key="item.id" @click="goToDetails(item.id)">
        <a-card hoverable style="width: 240px">
          <img slot="cover" alt="example" :src="item.img" />
          <a-card-meta :title="item.title">
            <template slot="description">
              <p class="activity">目前没有活动</p>
              <div class="price">
                <p>
                  <span class="original">￥{{ item.special_price }}</span
                  ><span class="discount">￥{{ item.price }}</span>
                </p>
                <span class="percentage"
                  >{{ 100 - Math.round(Math.abs(((item.special_price - item.price) / item.price) * 100))}}
                    %</span
                >
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </li>
      <!-- 透明盒子解决弹性布局最后一行问题 -->
      <aside v-for="i in 6" :key="i"></aside>
    </ul>
    <a-pagination :default-current="1" :total="6000" :pageSize="120" />
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function () {
    return {
      data: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.data = this.$store.state.SearchData;
      }, 700);
    },
    goToDetails(id) {
      this.$router.push(`/details/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 5vh 0;
    margin-top: 7vh;
    li {
      margin-bottom: 3vh;
    }
    aside {
      width: 12vw;
      height: 0;
    }
  }
}
/deep/ .ant-card {
  width: 12vw !important;
  margin-top: 1vh;
  // border: none ;
  .ant-card-body {
    padding: 0;
    margin: 1vh 0;
    padding-left: 0.3vw;
    .activity {
      color: #ccc;
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1vh;
      p {
        display: flex;
        align-items: center;
        .original {
          color: #000000d9;
          font-weight: bolder;
        }
        .discount {
          font-size: 1.2vh;
          margin-left: 1vw;
          text-decoration: line-through;
        }
      }
      .percentage {
        color: red;
        margin-right: 1vw;
      }
    }
  }
}
</style>