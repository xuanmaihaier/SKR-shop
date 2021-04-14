<template>
  <div>
    <!-- 咨询服务表单 -->
    <div class="fromMain">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        labelAlign="left"
        class="from_"
      >
        <!-- 第一行 -->
        <a-form-model-item label="查询分类">
          <a-select
            v-model="form.region"
            placeholder="选择查询类型"
            class="select_sort_30"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>

        <!-- 第二行 -->
        <a-form-model-item label="类别分类">
          <a-select
            v-model="form.region"
            placeholder="选择查询类型"
            class="select_sort_30"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
          <a-select
            v-model="form.region"
            placeholder="选择查询类型"
            class="select_sort_30"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item ref="name" label="公司名称">
          <a-input class="select_sort_80" />
        </a-form-model-item>

        <a-form-model-item ref="name" label="品牌">
          <a-input class="select_sort_80" />
        </a-form-model-item>

        <a-form-model-item ref="name" label="负责人">
          <a-input class="select_sort_50" />
        </a-form-model-item>
        <!-- 电话号码 -->
        <a-form-model-item label="电话号码">
          <a-select
            v-model="form.region"
            placeholder="02"
            class="select_sort_15"
          >
            <a-select-option value="shanghai"> 018 </a-select-option>
          </a-select>
          <a-input class="select_sort_15" />
          <a-input class="select_sort_15" />
        </a-form-model-item>

        <!-- 负责人手机号码 -->
        <a-form-model-item label="负责人手机号码">
          <a-select
            v-model="form.region"
            placeholder="02"
            class="select_sort_15"
          >
            <a-select-option value="shanghai"> 018 </a-select-option>
          </a-select>
          <a-input class="select_sort_15" />
          <a-input class="select_sort_15" />
        </a-form-model-item>

        <!-- 联系点子邮件 -->
        <a-form-model-item label="联系点子邮件">
          <a-input class="select_sort_15" /><span>@</span>
          <a-input class="select_sort_15" />
          <a-select
            v-model="form.region"
            placeholder="02"
            class="select_sort_15"
          >
            <a-select-option value="shanghai"> 直接输入 </a-select-option>
          </a-select>
        </a-form-model-item>

        <!-- 网站地址 -->
        <a-form-model-item ref="name" label="网站地址">
          <span>http://</span> <a-input class="select_sort_50" />
        </a-form-model-item>

        <a-form-model-item ref="name" label="公司地址" class="formAdress">
          <a-input class="select_sort_50" />
          <button class="find_btn">查找邮政编码</button>
          <a-input class="select_sort_40" />
          <a-input class="select_sort_40" />
        </a-form-model-item>

        <a-form-model-item label="关于我们">
          <a-input v-model="form.desc" type="textarea" class="form_textarea" />
        </a-form-model-item>

        <a-form-model-item label="产品类别">
          <a-radio-group v-model="form.resource">
            <a-radio value="1"> 国内产品经销 </a-radio>
            <a-radio value="2"> 收入 </a-radio>
            <a-radio value="3"> 自我生产 </a-radio>
          </a-radio-group>
        </a-form-model-item>

        <a-form-model-item label="销售方式">
          <a-radio-group v-model="form.resource">
            <a-radio> 寄售 </a-radio>
          </a-radio-group>
        </a-form-model-item>

        <a-form-model-item label="产品介绍">
          <a-input v-model="form.desc" type="textarea" class="form_textarea" />
        </a-form-model-item>

        <a-form-model-item ref="name" label="领带店进入状态">
          <a-input class="select_sort_100" />
        </a-form-model-item>

        <a-form-model-item ref="name" label="品牌介绍">
          <a-input class="select_sort_70" />
          <a-upload name="file" :multiple="true">
            <a-button class="find_btn">文件选择</a-button>
          </a-upload>
        </a-form-model-item>

        <div class="registered">
          <h5>防止自动注册</h5>
        </div>
      </a-form-model>
    </div>
    <div class="viewContent">
      <a-checkbox>同意收集和使用个人信息(必填)</a-checkbox>
      <a-button class="btn_micro" @click="showMask()">查看内容</a-button>
    </div>

    <!-- 申请取消 -->
    <div class="application">
      <a-button class="btn_cancel">取消</a-button>
      <a-button class="btn_appli" @click="promptInf()">申请</a-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
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
    promptInf(){
      this.$message.warning('请选择查询类型');
    }
  },
};
</script>

<style lang="less" scoped>
// 表单
.fromMain {
  width: 80%;
  margin: 0 auto 20px;
  border-top: 2px solid #000;
  padding: 20px 30px;
}
.from_ {
  width: 100%;
}
.select_sort_30 {
  width: 30%;
  margin: 0 5px;
}
.select_sort_80 {
  width: 80%;
  margin: 0 5px;
}
.select_sort_50 {
  width: 50%;
  margin: 0 5px;
}
.select_sort_15 {
  width: 15%;
  margin: 0 5px;
}
.select_sort_40 {
  width: 40%;
  margin: 0 5px;
}
.select_sort_70 {
  width: 70%;
  margin: 0 20px 0 5px;
}
.select_sort_100 {
  width: 100%;
}
.ant-form-item {
  width: 100%;
  margin: 0 auto;
  line-height: 68px;
  padding: 14px 60px;
  border-bottom: 1px solid #ccc;
}
/deep/.ant-form-item-control > span > input {
  background-color: #f2f2f2;
}

/deep/.ant-select-selection--single {
  background-color: #f2f2f2;
}
.find_btn {
  height: 32px;
  line-height: 32px;
  border: 0;
  padding: 0 30px;
  background-color: #7d7d7d;
  color: #fff;
}
.form_textarea {
  height: 50px;
  padding: 10px;
}
textarea {
  resize: none;
}
.registered {
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #ccc;
  text-indent: 50px;
}

.viewContent {
  width: 75%;
  height: 50px;
  margin: 0 auto;
  line-height: 2;
  padding: 13px 40px 0;
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
// 遮罩层
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
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
</style>