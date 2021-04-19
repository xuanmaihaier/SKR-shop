<template>
  <!-- 2 -->
  <div class="exclusive_wantneed">
   <div class="tit_wantneed">
      <Title>
      <div class="tit_wrap">
        <p>WANT.NEED</p>
        <a-button> + ALL <span>(10943)</span></a-button>
      </div>
    </Title>
   </div>
    <ul class="thumbnail_list">
      <a-card hoverable v-for="(item, index) in wantneedList" :key="index">
        <img
          slot="cover"
          alt="example"
          :src="item.img"
        />
        <a-card-meta title=" ">
          <template slot="description">
              <p class="front">{{item.title}}</p> 
            </template>
          <template slot="description">
              <p>www.stride.fun</p>
          </template>
          <template slot="description">
            <div class="price">
              <p><span class="discount_after">{{item.special_price}}</span> <span class="discount">{{item.price}}</span></p>
              <span class="percent">{{parseInt((item.special_price/item.price)*100)}}%</span>
            </div>
          </template>
        </a-card-meta>
      </a-card>
    </ul>
  </div>
</template>

<script>

import Title from "components/common/title/Title.vue";
import {getTypeOneList} from 'network/getList.js'
export default {
  components: { Title },
  data() {
    return {
      wantneedList:[]
    }
  },
  created() {
    this.getTypeOneList_()
  },
  methods: {
    async getTypeOneList_(){
      const {res} =await getTypeOneList("服饰")
      this.wantneedList=res.slice(200,208)
   
    }
  },
};
</script>

<style lang="less" scoped>
.exclusive_wantneed {
  min-width: 1240px;
  margin-top: 7%;
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
</style>