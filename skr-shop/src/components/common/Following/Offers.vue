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
      <div class="claim_form">
        <!-- 支援区域 -->
        <a-form-model
          :model="form"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="支援区域">
            <a-radio-group>
              <a-radio value="1"> 产品计划(w概念频道MD) </a-radio>
              <a-radio value="2"> 营销 </a-radio>
              <a-radio value="3"> 手术 </a-radio>
              <a-radio value="4"> 设计 </a-radio>
              <a-radio value="5"> 产品开发(前排) </a-radio>
              <a-radio value="6"> 它 </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <!-- 申请人姓名 -->
          <a-form-model-item ref="name" label="申请人姓名" prop="name">
            <a-input v-model="form.name" class="claim_input" />
          </a-form-model-item>
          <!-- 出生日期 -->
          <a-form-model-item ref="name" label="出生日期" prop="name">
            <a-input
              v-model="form.name"
              class="claim_input"
              placeholder=" 2021/4/15"
            />
          </a-form-model-item>
          <!-- 性别 -->
          <a-form-model-item label="性别">
            <a-radio-group>
              <a-radio value="1"> 男</a-radio>
              <a-radio value="2"> 女</a-radio>
            </a-radio-group>
          </a-form-model-item>

          <!-- 点子邮件 -->
          <a-form-model-item label="电子邮件">
            <a-input class="claim_pro_20" /><span>@ </span>
            <a-input class="claim_pro_20" />
            <a-select
              v-model="form.region"
              placeholder="直接输入"
              class="claim_pro_20"
            >
              <a-select-option value="shanghai"> 直接输入 </a-select-option>
            </a-select>
          </a-form-model-item>

          <!-- 手机号码 -->

          <a-form-model-item label="手机号码">
            <a-select
              v-model="form.region"
              placeholder="021"
              class="claim_pro_20"
            >
              <a-select-option value="shanghai"> 018 </a-select-option>
            </a-select>
            <a-input class="claim_pro_20" />
            <a-input class="claim_pro_20" />
          </a-form-model-item>
          <!-- 电话号码 -->
          <a-form-model-item label="电话号码">
            <a-select
              v-model="form.region"
              placeholder="021"
              class="claim_pro_20"
            >
              <a-select-option value="shanghai"> 018 </a-select-option>
            </a-select>
            <a-input class="claim_pro_20" />
            <a-input class="claim_pro_20" />
          </a-form-model-item>
          <!-- 期末教育 -->
          <a-form-model-item label="期末教育">
            <a-select
              v-model="form.region"
              placeholder="选择学术背景"
              class="claim_pro_20"
            >
              <a-select-option value="shanghai"> 选择学术背景 </a-select-option>
            </a-select>
            <a-radio-group>
              <a-radio value="1"> 已毕业</a-radio>
              <a-radio value="2"> 参加</a-radio>
              <a-radio value="2"> 休假</a-radio>
              <a-radio value="2"> 辍学</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <!-- 学校名 -->
          <a-form-model-item ref="name" label="学校名" prop="name">
            <a-input v-model="form.name" class="claim_input" />
          </a-form-model-item>
          <!-- 主要的 -->
          <a-form-model-item ref="name" label="主要的" prop="name">
            <a-input v-model="form.name" class="claim_input" />
          </a-form-model-item>
          <!-- 附上简历 -->
          <a-form-model-item ref="name" label="附上简历">
            <a-input class="claim_pro_70" />
            <a-upload name="file" :multiple="true">
              <a-button class="find_btn">文件选择</a-button>
            </a-upload>
          </a-form-model-item>
        </a-form-model>
      </div>
      <!-- 查看内容 -->
      <div class="viewContent">
        <a-checkbox>同意收集和使用个人信息(必填)</a-checkbox>
        <a-button class="btn_micro" @click="showMask()">查看内容</a-button>
      </div>
      <!-- 遮罩层 -->
      <div class="mask" v-if="isShowMask">
        <div class="mask_box">
          <div class="mBar">
            <h2>收集和使用个人信息(必填)</h2>
            <span @click="closeMask()">
              <a-icon type="close" class="mIco" />
            </span>
          </div>
          <!-- 表格 -->
          <a-table> </a-table>
        </div>
      </div>
      <!-- 申请取消 -->
      <div class="application">
        <a-button class="btn_cancel">取消</a-button>
        <a-button class="btn_appli" @click="promptInf()">申请</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("assets/img/following/img-recruit.jpg"),
      // form 表单
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      isShowMask: false,
    };
  },
  methods: {
    // 点击关闭遮罩层
    closeMask() {
      this.isShowMask = false;
    },
    // 点击开启遮罩层
    showMask() {
      this.isShowMask = true;
    },
    promptInf() {
      this.$message.warning("请选择查询类型");
    },
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
    border: 1px solid transparent;
    font-size: 16px;
    text-align: left;
    h3 {
      font-weight: 700;
      font-size: 24px;
    }
  }
  .step_head {
    width: 80%;
  }
  .steps {
    text-align: left;
    height: 30px;
    border: 1px solid transparent;
    .steps_row {
      height: 60px;
      display: block;
      padding-top: 6px;
      padding-left: 30px;
      margin: 20px auto;
      position: relative;
    }
    .steps_row::after,
    .steps_row::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 10px;
      width: 1px;
      height: 80%;
      background-color: #ccc;
    }
    .steps_row::before {
      left: 0;
    }
    .steps_row::after {
      left: 50%;
    }
  }
  .claim {
    /deep/.ant-form-item-control > span > input {
      background-color: #f2f2f2;
    }
    /deep/.ant-select-selection--single {
      background-color: #f2f2f2;
    }
    margin-top: 80px;
    text-align: left;
    h3 {
      font-size: 24px;
      border-bottom: 2px solid #333;
      display: block;
      padding-bottom: 10px;
    }
    .claim_form {
      width: 100%;
      margin: 10px auto;
      text-align: center;
      .ant-form-item {
        border-bottom: 1px solid #d9d9d9;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
      .claim_input {
        width: 50%;
        margin: 0 5px;
      }
      .claim_pro_20 {
        width: 20%;
        margin-right: 20px;
      }
      .claim_pro_30 {
        width: 30%;
        margin-right: 20px;
      }
      .claim_pro_50 {
        width: 50%;
        margin-right: 20px;
      }
      .claim_pro_70 {
        width: 70%;
        margin-right: 20px;
      }
      .find_btn {
        height: 32px;
        line-height: 32px;
        border: 0;
        padding: 0 30px;
        background-color: #7d7d7d;
        color: #fff;
      }
    }
  }
  .viewContent {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    line-height: 2;
    padding: 13px 200px 0;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
  }
  .btn_micro {
    min-width: 60px;
    padding: 0 8px;
    height: 20px;
    line-height: 18px;
    border: 1px solid #333;
    text-align: center;
    color: #000;
  }
}

.mask_box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 50%;
  background-color: #fff;
  overflow: hidden;
  min-width: 480px;
  padding: 40px;
  border: 1px solid #000;
  .mBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
    padding-bottom: 27px;
    h2 {
      font-size: 24px;
    }
    .mIco {
      font-size: 32px;
      color: #ccc;
    }
    .mIco:hover {
      cursor: pointer;
    }
  }
}

// 申请取消
.application {
  width: 100%;
  height: 50px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_cancel,
.btn_appli {
  min-width: 180px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
  border: 1px solid #000;
  border-radius: 0;
  color: #000;
}
.btn_appli {
  background-color: #000;
  color: #fff;
  margin-left: 20px;
}
</style>