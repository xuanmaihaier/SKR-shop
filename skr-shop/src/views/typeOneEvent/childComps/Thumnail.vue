<template>
  <div class="thumnail">
    <div class="issue_lst">
      <ul>
        <li v-for="(item, index) in shopList" @click="onDetail(item.id)">
          <a href="javascript: void(0);"
            ><img :src="item.img" alt="" />

            <p class="multiline">{{ item.title }}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <div id="components-pagination-demo-mini">
        <a-pagination
          size="small"
          :total="100"
          @change="onChange"
          :current="pages"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getImg } from "network/getImg.js";
export default {
  props: {
    // 父组件接收的值 btn按钮的值
    list: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      shopList: [],
      listAll: [],
      pages: 1,
    };
  },
  created() {
    if (this.list == "All") {
      this.getImg_("鞋类", 5, 7);
      this.getImg_("服饰", 5, 7);
      this.getImg_("配件", 5, 6);
      this.getImg_("儿童专区", 5, 6);
    } else {
      this.getImg_(this.list, 1, 10);
    }
  },
  methods: {
    async getImg_(parent_name, start, end) {
      const res = await getImg({ parent_name, start, end });
      if (this.list == "All") {
        this.shopList = this.shopList.concat(res);
        this.listAll = this.shopList;
      } else {
        (this.shopList = []), (this.shopList = this.shopList.concat(res));
      }
      // console.log(this.shopList);
      // console.log(this.listAll);
    },
    onChange(page) {
      this.pages = page;
      if (this.list != "All") {
        let starts = (page - 1) * 10 + 1;
        let ends = starts + 10 - 1;
        this.getImg_(this.list, starts, ends);
      }
      // console.log(this.shopList);
    },
    onDetail(Id) {
      this.$router.push(`/details/${Id}`);
    },
  },
  watch: {
    list() {
      this.pages = 1;
      if (this.list == "All") {
        this.shopList = this.listAll;
      } else {
        this.getImg_(this.list, 1, 10);
      }
    },
  },
};
</script>

<style lang='less' scoped>
.thumnail {
  width: 100%;
  height: auto;
}
.issue_lst {
  width: 85%;
  margin: auto;
  ul {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    li {
      width: 18%;
      // margin: 0 0 55px 20px;
      margin-bottom: 10px;
      a {
        width: 100%;
        img {
          width: 100%;
        }
        .multiline {
          text-align: center;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}

.pagination {
  width: 85%;
  margin: auto;
  #components-pagination-demo-mini .ant-pagination:not(:last-child) {
    margin-bottom: 24px;
  }
  .ant-pagination {
    display: flex;
    justify-content: center;
  }
}
</style>