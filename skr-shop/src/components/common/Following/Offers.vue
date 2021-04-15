<template>
  <div class="offters">
    <!-- 招聘信息 -->
    <div class="offters_text">
      <h2>招聘信息</h2>
    </div>
    <div class="off_pic">
      <img :src="img" alt="" />
    </div>
    <div class="off_text">
      <h3>招聘程序</h3>
      <p>每次筛选的成功申请者公告均单独进行。</p>
      <p>如果申请表中有任何虚假信息，入场可能会被取消。</p>
    </div>
    <div class="steps">
      <a-steps :current="1" size="small">
        <a-step title="收到文件" />
        <a-step title="面试" />
        <a-step title="第二次面试" />
        <a-step title="加入" />
      </a-steps>

      <div class="step_head">
        <a-row class="steps_row">
        <a-col :span="12">
          <p>薪资条件</p>
          <p>根据公司章程-最终面试后的决定</p>
        </a-col>
        <a-col :span="12">
          <p>工作地点</p>
          <p>首尔特别市江南区德黑兰路14街16号5楼（线馆驿三洞）</p>
        </a-col>
      </a-row>
      </div>
    </div>

    <div class="claim">
      <h3>应用</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("assets/img/following/img-recruit.jpg"),
    };
  },
};
</script>

<style lang="less" scoped>
.offters {
  width: 100%;
  .offters_text {
    width: 80%;
    padding-top: 81px;
    height: 200px;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-size: 44px;
      color: #000;
    }
  }
  .off_pic,
  .off_text,
  .steps,
  .claim,
  .step_head {
    width: 80%;
    margin: 0 auto 30px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .off_text {
    font-size: 16px;
    text-align: left;
    h3 {
      font-weight: 700;
      font-size: 24px;
    }
  }
  .step_head{
    width: 80%;
  }
  .steps {
    text-align: left;
    height: 30px;
    .steps_row{
      height: 60px;
      border: 1px solid yellow;
      display: block;
      padding-top: 6px;
      padding-left: 30px;
      margin: 20px auto;
      position: relative;
    }
    .steps_row::after,
    .steps_row::before{
      content: "";
      display: inline-block;
      position: absolute;
      top: 10px;
      width: 1px ;
      height: 80%;
      background-color: #ccc;
    }
    .steps_row::before{
      left: 0;
    }
    .steps_row::after{
      left: 50%;
    }
  }
  .claim{
    border-bottom: 2px solid #333;
    height: 60px;
    margin-top: 150px;
    text-align: left;
    h3{
      font-size: 24px;
    }
  }
}
</style>