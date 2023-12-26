import SideConfig from "./SideConfig/SideConfig"
// 配置文件
export default {
    base: '/',//服务器打包路径
    title: 'React教学', //浏览器的title
    description: '前端猛男', //会转换成为meta标签
    lang: "zh-CN", //设置页面的标记语言
    head: [ //设置浏览器的图标
        ["link", { rel: "前端猛男的logo", href: "./public/images/logo.jpg" }]
    ],
    outDir: 'D:/学习干货/前端/React/pages', //打包目录文件 默认是dist
    //主题配置
    themeConfig: {
        siteTitle: '前端猛男的博客', //顶部导航栏的标题
        logo: './public/images/logo.jpg', //顶部导航栏标题前的图标
        //配置顶部导航栏的路由 右侧 
        nav: [
            { text: 'React基础', link: '/.vitepress/guide/ReactBasics/index', activeMatch: '/.vitepress/guide/ReactBasics/' }, //text：名字  link:跳转到哪里的路由 activeMatch:匹配跳转路由的高亮 通常跟link一致
            {
                text: 'React进阶', //导航栏名字
                // 二级下拉导航栏
                items: [
                    { text: "二级标题", link: '/.vitepress/guide/ReactBasics/' },
                    { text: "二级标题2", link: '/.vitepress/guide/ReactBasics/index2.md' }
                ]
            } //text：名字  link:跳转到哪里的路由 activeMatch:匹配跳转路由的高亮 通常跟link一致
        ],
        //顶部导航栏右侧关联社交平台的或仓库代码等等的路由
        socialLinks: [
            { icon: 'github', link: 'https://gitee.com/li-yao20010707/react-learning-notes---r' } //icon：应用名字  link:跳转的路由地址
        ],
        // 左侧边导航栏的路由
        sidebar: {
            // 当前文件下的路由 用来当做key
            "/": SideConfig
        },
        //右侧边导航栏的标题
        outlineTitle: {},
        // 首页最底部的配置 (主要用来声明版权)
        footer: {
            message: '好好加油吧,少年！', //声明版权的信息
            copyright: 'Copyright © 2023-8-10 ' //版权编号
        }
    }
}