module.exports = {
    // 选项...
    // publicPath: '/demo2',
    devServer: {
      port: 8001, // 端口号
      host: "localhost", // 主机名 127.0.0.1, 真机 0.0.0.0
      https: false,
      open: true,
      proxy: {
        // 开发环境代理配置
        [process.env.VUE_APP_BASE_API]: {
          // target: 'http://localhost:8002',
          target: process.env.VUE_APP_SERVICE_URL,
          changeOrigin: true, // 开启代理服务器
          pathRewrite: {
            // 请求/dev-api/db.json 最终会请求到http://localhost:8002/db.json
            [ '^' + process.env.VUE_APP_BASE_API]: ''
          }
        }
      }
    },
  
    lintOnSave: false, // 关闭格式检查
    outputDir: "dist", // 打包目录
    assetsDir: "assets",
    indexPath: "index.html",
    productionSourceMap: false // 打包后不产生.map
    // filenameHashing: false, // 文件名不使用hash值
  
  }
  