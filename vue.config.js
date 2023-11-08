const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // 设定为./后这样打出来的包可以被部署在任意路径
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    host: '127.0.0.1',
    // 配置端口号
    port: 8088,
    // 配置允许域名，因为我自己弄内网穿透所有要用
    allowedHosts: 'all',
  },
});
