// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");

const SmsClient = tencentcloud.sms.v20190711.Client;

const clientConfig = {
  credential: {
    secretId: "AKID0nMlurg0VypQkqI83qQkwvo11mOnurVd",
    secretKey: "MXXP1V5R2Z6OdcIMD2K0ToKICqPukLr7",
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "sms.tencentcloudapi.com",
    },
  },
};
function RndNum(n) {
  let rnd = "";
  for (var i = 0; i < n; i++)
    rnd += Math.floor(Math.random() * 10);
  return rnd;
}

// 六位验证码
let VerificationCode = RndNum(6);
// 倒计时 没有写

const client = new SmsClient(clientConfig);
const params = {
  "PhoneNumberSet": [
    "+8617551084001"
  ],
  "TemplateID": "928353",
  "Sign": "崔耀的个人博客",
  "TemplateParamSet": [
    VerificationCode
  ],
  "SmsSdkAppid": "1400508860"
};
client.SendSms(params).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("error", err);
  }
);