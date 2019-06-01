module.exports = {
  runtimeCompiler: true,
  publicPath: "/", // 设置打包文件相对路径
  devServer: {
    // host: 'localhost',
    port: 8071,
    // open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8100/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
