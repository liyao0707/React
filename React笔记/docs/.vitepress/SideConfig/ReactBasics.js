const commonPath = '/.vitepress/guide'
const viewPath = '/ReactBasics'
const children1 = '/基础知识'
const children2 = '/进阶知识'
export default {
    text: 'React', //一级标题的名称
    collapsible: true, //是否允许折叠侧边菜单栏
    collapsed: false, //当前菜单栏进入页面时是否不自动展开
    // 二级菜单列表
    items: [
        //  text：二级标题的名称  link:二级标题的路由地址
        { text: '入门问答', link: `${commonPath}/${viewPath}/` },
        { text: '构建环境', link: `${commonPath}/${viewPath}/index2` },
        {
            text: "基础知识", link: `${commonPath}/${viewPath}/${children1}/index`,
            collapsed: false,
            collapsible: true,
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
                {
                    text: '10. 属性',
                    collapsed: true,
                    collapslible: false,
                    items: [
                        { text: '1. 属性props', link: `${commonPath}/${viewPath}/${children1}/10-属性props` },
                        { text: '2. 属性(props)与状态(state) 的区别 ', link: `${commonPath}/${viewPath}/${children1}/10.1-属性与状态的区别` },
                    ]

                },
                { text: '11. 受控组件与非受控组件', link: `${commonPath}/${viewPath}/${children1}/11-受控与非受控` },
                {
                    text: '12. 组件通信',
                    collapsed: true,
                    collapsible: false,
                    items: [
                        { text: '1. 父子通信', link: `${commonPath}/${viewPath}/${children1}/12-组件通信/12.1-父子通信` },
                        { text: '2. 表单域组件', link: `${commonPath}/${viewPath}/${children1}/12-组件通信/12.2-表单域组件` },
                        { text: '3. 非父子通信-中间人模式', link: `${commonPath}/${viewPath}/${children1}/12-组件通信/12.3-非父子通信-中间人模式` },
                        { text: '4. 非父子通信-订阅发布模式', link: `${commonPath}/${viewPath}/${children1}/12-组件通信/12.4-非父子通信-订阅发布模式` },
                        { text: '5. 非父子通信-跨组件通信context方案', link: `${commonPath}/${viewPath}/${children1}/12-组件通信/12.5-非组件通信-context方案` },
                    ]
                },
                { text: '13. 插槽', link: `${commonPath}/${viewPath}/${children1}/13-插槽` },
                {
                    text: '14. 生命周期',
                    collapsed: true,
                    collapsible: false,
                    items: [
                        { text: '1. 类组件生命周期-初始化 ', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.1-类组件生命周期-初始化` },
                        { text: '2. 类组件生命周期-更新中 ', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.2-类组件生命周期-更新中` },
                        { text: '3. 类组件生命周期-销毁 ', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.3-类组件生命周期-销毁` },
                        { text: '4. 类组件新生命周期-getDerivedStateFromProps ', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.4-类组件新生命周期一` },
                        { text: '5. 类组件新生命周期-getSnapshotBeforeUpdate', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.5-类组件新生命周期二` },
                        { text: '6. 性能提升', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.6-性能提升` },
                        { text: '7. 总结', link: `${commonPath}/${viewPath}/${children1}/14-生命周期/14.7-总结` },

                    ]
                },
                {
                    text: "15. Hooks",
                    collapsed: false,
                    collapsible: true,
                    items: [
                        { text: "1. 为什么使用Hooks ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.1-为什么使用Hooks` },
                        { text: "2. useState ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.2-useState` },
                        { text: "3. useEffect ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.3-useEffect` },
                        { text: "4. useCallback ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.4-useCallback` },
                        { text: "5. useMemo ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.5-useMemo` },
                        { text: "6. useRef ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.6-useRef` },
                        { text: "7. useContext ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.7-useContext` },
                        { text: "8. useReducer ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.8-useReducer` },
                        { text: "9. 自定义hooks ", link: `${commonPath}/${viewPath}/${children1}/15-Hooks/15.9-自定义Hooks` },

                    ]
                },
                {
                    text: '16. 路由',
                    collapsed: true,
                    collapsible: false,
                    items: [
                        { text: '1. 路由安装与介绍', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.1-安装与介绍` },
                        { text: '2. 一级路由与多级路由', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.2-一级路由与多级路由` },
                        { text: '3. 路由重定向', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.3-路由重定向` },
                        { text: '4. 路由嵌套', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.4-路由嵌套` },
                        { text: '5. 路由跳转', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.5-路由跳转` },
                        { text: '6. 路由传参', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.6-路由传参` },
                        { text: '7. 路由拦截', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.7-路由拦截` },
                        { text: '8. 路由模式', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.8-路由模式` },
                        { text: '9. withRouter', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.9-withRouter` },
                        { text: '10. 反向代理', link: `${commonPath}/${viewPath}/${children1}/16-路由/16.10-反向代理` },
                    ]
                },
                { text: '17. CSSModule', link: `${commonPath}/${viewPath}/${children1}/17-cssmodule` }
            ]
        },
        {
            text: '进阶知识',
            collapsed: false,
            collapsible: true,
            items: [
                {
                    text: '1. Redux',
                    collapsed: true,
                    collapsible: true,
                    items: [
                        { text: '1. 简介与安装', link: `${commonPath}/${viewPath}/${children2}/Redux/1-简介与安装` },
                        { text: '2. 使用方法', link: `${commonPath}/${viewPath}/${children2}/Redux/2-redux使用方法` },
                        { text: '3. redux原理', link: `${commonPath}/${viewPath}/${children2}/Redux/3-redux原理` },
                        { text: '4. redux合并', link: `${commonPath}/${viewPath}/${children2}/Redux/4-redux合并` },
                        {
                            text: '5. redux中间件',
                            collapsed: false,
                            collapsible: true,
                            items: [
                                { text: '1. redux-thunk', link: `${commonPath}/${viewPath}/${children2}/Redux/5.1-Redux中间件redux-thunk` },
                                { text: '2. redux-promise', link: `${commonPath}/${viewPath}/${children2}/Redux/5.2-Redux中间件redux-promise` },
                            ]
                        },
                    ]
                },
                {
                    text: '2. react-Redux',
                    collapsed: false,
                    collapsible: true,
                    items: [
                        { text: '1. 使用方法', link: `${commonPath}/${viewPath}/${children2}/react-redux/1-使用方法` },
                        { text: '2. 原理', link: `${commonPath}/${viewPath}/${children2}/react-redux/2-原理` },
                        { text: '3. 持久化存储', link: `${commonPath}/${viewPath}/${children2}/react-redux/3-redux-persist` },

                    ]
                }
            ]
        }
    ]
}
