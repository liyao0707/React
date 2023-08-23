const commonPath = '/.vitepress/guide'
const viewPath = '/ReactBasics'
const children1 = '/基础知识'
export default {
    text: 'React', //一级标题的名称
    collapsible: true, //是否允许折叠侧边菜单栏
    collapsed: false, //当前菜单栏进入页面时是否自动展开
    // 二级菜单列表
    items: [
        //  text：二级标题的名称  link:二级标题的路由地址
        { text: '入门问答', link: `${commonPath}/${viewPath}/` },
        { text: '构建环境', link: `${commonPath}/${viewPath}/index2` },
        {
            text: "基础知识", link: `${commonPath}/${viewPath}/${children1}/index`,
            collapsible: false, collapsed: false,
            items: [
                { text: '1. 什么是JSX', link: `${commonPath}/${viewPath}/${children1}/01-什么是JSX` },
                { text: '2. 类组件', link: `${commonPath}/${viewPath}/${children1}/02-类组件` },
                { text: '3. 函数式组件', link: `${commonPath}/${viewPath}/${children1}/03-函数式组件` },
                { text: '4. 组件的嵌套', link: `${commonPath}/${viewPath}/${children1}/04-组件的嵌套` },
                { text: '5. 组件的样式', link: `${commonPath}/${viewPath}/${children1}/05-组件的样式` },
                { text: '6. 事件绑定', link: `${commonPath}/${viewPath}/${children1}/06-事件绑定` },
                { text: '7. ref应用', link: `${commonPath}/${viewPath}/${children1}/07-ref应用` },
                { text: '8. state状态', link: `${commonPath}/${viewPath}/${children1}/08-state状态` },
                { text: '9. 富文本', link: `${commonPath}/${viewPath}/${children1}/09-富文本` },
                { text: '10. props属性', link: `${commonPath}/${viewPath}/${children1}/10-属性props` },
                { text: '10.1 属性(props)与状态(state) 的区别 ', link: `${commonPath}/${viewPath}/${children1}/10.1-属性与状态的区别` },
                { text: '11. 受控组件与非受控组件', link: `${commonPath}/${viewPath}/${children1}/11-受控与非受控` }
            ]
        }
    ]
}
