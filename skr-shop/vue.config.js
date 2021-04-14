const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve("src"),
        "components": resolve("src/components"),
        "views": resolve("src/views"),
        "store": resolve("src/store"),
        "assets": resolve("src/assets"),
        "utils": resolve("src/utils"),
        "router": resolve("src/router"),
        "api": resolve("src/api"),
      }
    }
  },
  // 配置代理
  devServer: {
    proxy: {
      '/dev-api': {
        // target: 'http://192.168.1.138:3000/',
        target: 'http://192.168.1.144:3000/', //备用服务器
        // target:' http://www.stride.fun:80', 
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      },
    },
    open: true
  },
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/params.less')
      ]
    }
  },

}