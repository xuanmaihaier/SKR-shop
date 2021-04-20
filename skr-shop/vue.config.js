/*
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-12 17:42:12
 * @LastEditTime: 2021-04-19 17:30:39
 * @LastEditors: He Xiantao
 */
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
        "network":resolve("src/network")
      }
    }
  },
  // 配置代理
  devServer: {
    open: true,
    proxy: {
      '/dev-api': {
        target: 'http://192.168.1.121:3000/',
        // target: 'http://192.168.1.144:3000/',
        // target:' http://www.stride.fun:80', 
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      },
    },
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