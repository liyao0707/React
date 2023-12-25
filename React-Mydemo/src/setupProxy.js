/**
 * @反向代理
 * @安装 npm i http-proxt-middleware
 * @createProxyMiddleware 配置信息
 */

// 引入请求代理模块
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    //注册中间件
    app.use(
        '/ajax', //需要代理的路径 /ajax路径以下的都会被中转代理 (/ajax/login , /ajax/seesoin) 
        createProxyMiddleware({
            target: 'https://i.maoyan.com', //需要代理的服务器地址
            changeOrigin: true, //是否开启
        })
    );

    //可以多次注册中间件 设置不同的反向代理
    app.use(
        '/api', //需要代理的路径 /api路径以下的都会被中转代理 (/api/login , /api/seesoin) 
        createProxyMiddleware({
            target: 'https://i.maoyan.com', //需要代理的服务器地址
            changeOrigin: true, //是否开启
        })
    )
}