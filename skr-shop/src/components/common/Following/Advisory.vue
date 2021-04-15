<template>
  <div class="advisory">
    <!-- 咨询服务 -->
    <div class="adv">
      <h2>咨询服务</h2>
    </div>
    <!-- 头部表格 -->
    <div class="fromStep">
      <ul>
        <li class="step_li" v-for="(item, index) in adv_headText" :key="index">
          <span class="step">{{ item.step }}</span>
          <i> <a-icon type="snippets" /> </i>
          <strong>
            <span>{{ item.term }}</span>
          </strong>
          <p>{{ item.items }}</p>
        </li>
      </ul>
    </div>
    <!-- 注意事项 -->
    <div class="note">
      <h3>※申请店铺咨询时的注意事项</h3>
      <p>
        1.如果您申请商店咨询，我们将在内部审查后通知您进入商店的可能性和合同程序。
      </p>
      <p>
        2.办理入住手续可能需要一段时间，因此请避免注册重复，并避免与MD联络以及通过客户中心查询可用性。
      </p>
      <p>
        3. W.
        Concept基于真正的处理方式，只有设计和生产自己的品牌公司才可以进入商店。（不允许进入商店买卖品牌或处理假货）
      </p>
      <p>
        4.必须指定负责人以促进产品管理（MD）和订单管理（交货/
        CS处理），如果不能这样做，则可能会拒绝接纳。
      </p>
    </div>
    <!-- 表单 -->
   
     <advForm/>
  </div>
</template>

<script>
import advForm from './AdvForm'
export default {
  components:{
    advForm,
  },
  data() {
    return {
      adv_headText: [
        {
          step: "步骤01",
          term: "填写合作伙伴/进入申请",
          items: "请申请隶属关系/进入",
        },
        {
          step: "步骤02",
          term: "查看并与负责人联系",
          items:
            "在每个领域的负责人审核之后，如果商店合适，我们将通过电话或电子邮件与您联系",
        },
        {
          step: "步骤03",
          term: "条件咨询及合同签订",
          items: "在讨论合伙的细节和条件后，订立合同",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.advisory {
  width: 100%;
}
.adv {
  width: 100%;
  height: 200px;
  padding-top: 81px;
  text-align: center;
}
.adv > h2 {
  font-size: 44px;
}

.fromStep {
  width: 80%;
  height: 184px;
  text-align: center;
  margin: 0 auto 20px;
  ul {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .step_li {
      position: relative;
      height: 100%;
      flex: 1;
      border: 1px solid #d9d9d9;
      padding: 0 20px;
      .step {
        position: absolute;
        top: 5%;
        left: 5%;
        color: #a5a5a5;
        font-size: 14px;
      }
      i {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-style: normal;
        font-size: 36px;
      }
      strong {
        display: inline-block;
        margin: 90px 0 6px;
        font-size: 16px;
      }
      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
  ul::after,
  ul::before {
    position: absolute;
    top: 50%;
    display: inline-block;
    content: ">";
    width: 30px;
    height: 30px;
    line-height: 1;
    text-align: center;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 50%;
    font-size: 24px;
    color: #d9d9d9;
    z-index: 2;
  }
  ul::before {
    left: 32.2%;
    background-color: #fff;
  }
  ul::after {
    left: 65.3%;
  }
}
// 注意事项
.note {
  width: 80%;
  padding: 40px 42px;
  margin: 0 auto 70px;
  background-color: #eee;
  font-size: 14px;
  line-height: 24px;
  h3 {
    padding-bottom: 15px;
  }
}

</style>