// 页面入口文件

import React from 'react';
// ReactDom 可以帮我们把React组件渲染到页面上去 ，它是从react-dom中引入的 而不是react
import ReactDom from 'react-dom';

/**
 * @render方法
 * @参数1 ：需要插入的内容  || 需要插入的html标签
 * @参数2 ：需要插入到指定的标签下
 * @注解 ： ReactDom 中有一个render方法，功能就是把组件渲染比并且构造DOM树，然后插入到页面某个特定的元素上
 */
// 写法一  ：插入的内容
// ReactDom.render(11111111111, document.getElementById('root'))
// ReactDom.render("11111111111", document.getElementById('root'))

// 写法二  ：插入一段html标签
// ReactDom.render(<div>我是插入的标签</div>, document.getElementById('root'))

//01- 写法三.1  ：插入类组件 不需要new这个类 直接导入进来 当做标签写进去
// import App from './基础知识/01-class类组件';

//02- 写法三.2  ：插入函数式组件
// import App from './基础知识/02-函数式组件';

//03- 组件的嵌套
// import App from './基础知识/03-组件的嵌套';

//04-组件的样式
// import App from './基础知识/04-组件的样式';

// 05-事件绑定
// import App from './基础知识/05-事件绑定'

// 06-ref的应用
// import App from './基础知识/06-ref的应用'

// 07-state状态
import App from './基础知识/07-state状态'
// ReactDom.render(<App></App>, document.getElementById('root'))
ReactDom.render(
    // StrictMode打开React的严格模式
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
    ,
    document.getElementById('root'))