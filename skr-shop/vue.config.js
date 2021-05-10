/*
 * @Description: 
 * @Author: He XianTao
 * @Date: 2021-05-10 09:25:03
 * @LastEditTime: 2021-05-10 09:29:10
 * @LastEditors: He XianTao
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
        target: 'http://localhost:3000/',
        // target:' http://www.stride.fun:3000',
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
