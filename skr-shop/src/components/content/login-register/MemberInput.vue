<template>
  <!-- 用户名密码输入框 -->
  <div class="MemberInput">
    <p>
      <label :for="id"><slot></slot></label>
      <input
        :type="type"
        :id="id"
        :placeholder="placeholder"
        @focus="showText" 
        @blur="hideText"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: "MemberInput",
  methods: {
    showText(e) {
      e.target.placeholder = "";
    },
    hideText(e) {
      if (e.target.id == "user") {
        e.target.placeholder = "请输入您的用户名";
      } else if (e.target.id == "password") {
        e.target.placeholder = "请输入您的密码";
      }
    },
    showImg() {
      this.imgShow = !this.imgShow;
    },
  },
  props: {
    type: String,
    id: String,
    placeholder: String,
  },
};
</script>

<style lang="less" scoped>
.MemberInput {
  p {
    height: 40px;
    label {
      display: inline-block;
      width: 105px;
      height: 100%;
      line-height: 40px;
      color: #333;
    }
    input {
      width: 420px;
      height: 100%;
      line-height: 38px;
      padding-left: 20px;
      background-color: #f2f2f2;
      border: 1px solid #f2f2f2;
      font-size: 14px;
      font-family: "ProximaNova-Regular", "yg740";
      outline: none;
      &:focus {
        background-color: #fff;
        border: 1px solid #000;
      }
    }
  }
}
.mt20 {
  margin-top: 20px;
  height: 50px;
}
</style>