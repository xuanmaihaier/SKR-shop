<template>
  <div class="privacy">
    <!-- 隐私政策 -->
    <div class="privacy_text">
      <h2>隐私政策</h2>
    </div>
    <div class="main_text">
      <p>
        Double U Concept Korea
        Co.，Ltd.（以下简称``公司''）重视用户信息并遵守相关法律法规。
      </p>
      <p>
        因此，公司已根据《信息和通信网络使用促进和信息保护法》和《个人信息保护法》等相关法律制定了个人信息处理政策，并在公司网站上进行了披露，以便用户可以随时轻松浏览。
      </p>
      <p>
        本政策可能会根据公司政策不时更改，如果重要内容发生更改，我们将通过网站通知用户，以便用户可以检查更改。
      </p>
    </div>
    <div class="rule">
      <a-row>
        <a-col :span="8">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </a-col>
        <a-col :span="8">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </a-col>
        <a-col :span="8">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </a-col>
      </a-row>
    </div>
    <div class="first_gen">
      <h3>第一条总则</h3>
      <p>
        1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
      </p>
      <p>
        2.公司遵守相关法律法规，安全处理有价值用户的个人信息。通过个人信息处理政策，公司告知使用用户提供的个人信息的目的和方法，以及正在采取哪些措施来保护个人信息。
      </p>
      <p>
        3.公司在网站的第一个屏幕上披露隐私政策，以便用户可以随时轻松查看它。
      </p>
      <p>
        4.为了不断改进个人信息处理策略，建立了修改个人信息处理策略的必要步骤，并且在进行修改时，通过版本管理，用户可以轻松地查看修改后的事项。
      </p>
    </div>
    <div class="first_gen">
      <h3>第二条总则</h3>
      <p>
        1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
      </p>

      <a-table :columns="columns" bordered >
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"> Name</span>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "类型" },
        },
        {
          title: "收集目的",
        },
        {
          title: "分配",
        },
        {
          title: "收集物品",
        },
      ],
    
    };
  },
};
</script>

<style lang="less" scoped>
.privacy {
  width: 100%;
  .privacy_text {
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
  .main_text {
    width: 80%;
    margin: 0 auto 20px;
  }
  .rule {
    position: relative;
    width: 80%;
    margin: 0 auto 20px;
    padding: 20px;
    background-color: #f8f8f8;
  }
  .rule::before,
  .rule::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 15px;
    width: 1px;
    height: 80%;
    background-color: #ccc;
  }
  .rule::before {
    left: 30%;
  }
  .rule::after {
    right: 40%;
  }
  .first_gen {
    width: 80%;
    margin: 20px auto;
  }
}
</style>