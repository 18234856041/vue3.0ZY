const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置别名
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'))   //set第一个参数：设置的别名，第二个参数：设置的路径
    },
    devServer: {
        // 本地ip地址
        host: '0.0.0.0',
        port: 9527,
        open: false, // 是否启动后自动打开
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://192.168.1.104:8888/json/',
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
};