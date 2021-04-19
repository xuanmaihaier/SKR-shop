<template>
  <div class="thumnail">
    <div class="issue_lst">
      <ul>
        <li v-for="(item, index) in 10">
          <a href="javascript: void(0);"
            ><img
              src="//image.wconcept.co.kr/images/disp_issue/T210414112317_48S.jpg"
              alt=""
            />
            <div><img src="" alt="" /></div>
            <p class="lst-titke">FILLCHIC</p>
            <p class="multiline">필시크 21 SPRING 오픈</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <div id="components-pagination-demo-mini">
        <a-pagination size="small" :total="100" />
      </div>
    </div>
    <h1>{{list}}</h1>
  </div>
</template>

<script>
export default {
  props:{
    // 父组件接收的值 btn按钮的值
    list:{
      type:String,
      default: ''
    }
  },
  methods:{
    
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
        .lst-titke {
          text-align: center;
          font-size: 14px;
          color: #333;
        }
        .multiline {
          text-align: center;
          font-size: 12px;
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