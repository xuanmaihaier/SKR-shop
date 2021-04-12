module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css"}  //注意官网这里是style:true,这可能会导致报错。建议使用style:"css"
    ]
  ]
}
