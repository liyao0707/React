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
// import App from './基础知识/07-state状态'

// 08-富文本
// import App from './基础知识/08-富文本'

// 09-属性props
// import App from './基础知识/09-属性props/09-属性props'

// 10-受控组件与非受控组件
// import App from './基础知识/10-受控与非受控'

// 11-1 组件通信-父子通讯
// import App from './基础知识/11-组件通信/1-父子通信';

// 11-2 表单域组件
// import App from './基础知识/11-组件通信/2-表单域组件';

// 11-3 非父子组件通信-状态提升(中间人模式)
// import App from './基础知识/11-组件通信/3-非父子通信-中间人模式';

// 11-4 非父子组件通信-订阅发布模式
// import App from './基础知识/11-组件通信/4-非父子通信-订阅发布模式';

// 11-5 非父子组件通信-context方案跨组件通信
// import App from './基础知识/11-组件通信/5-非组件通信-context方案';

// 12-插槽
// import App from './基础知识/12-插槽';


// 13-1 类组件生命周期-初始化
// import App from './基础知识/13-生命周期/1-类组件生命周期-初始化';

// 13-2 类组件生命周期-更新中
// import App from './基础知识/13-生命周期/2-类组件生命周期-更新中';

// 13-3 类组件生命周期-销毁
// import App from './基础知识/13-生命周期/3-类组件生命周期-销毁'


// 13-4 类组件新生命周期一
// import App from './基础知识/13-生命周期/4-类组件新生命周期一'

// 13-5 类组件新生命周期二
// import App from './基础知识/13-生命周期/5-类组件新生命周期二'

// 13-6 性能提升
// import App from './基础知识/13-生命周期/6-性能提升'

// 14-1 Hooks-useState
// import App from './基础知识/14-Hooks/1-useState'

// 14-2 Hooks-useEffct
// import App from './基础知识/14-Hooks/2-useEffect'

// 14-3 Hooks-useCallback
// import App from './基础知识/14-Hooks/3-useCallback'

// 14-4 Hooks-useMemo
// import App from './基础知识/14-Hooks/4-useMemo'

// 14-5 Hooks-useRef
// import App from './基础知识/14-Hooks/5-useRef'

// 14-6 Hooks-useContext
// import App from './基础知识/14-Hooks/6-useContext'

// 14-7 Hooks-useReducer
// import App from './基础知识/14-Hooks/7-useReducer'

// 14-8 Hooks-自定义Hooks
// import App from './基础知识/14-Hooks/8-自定义Hooks'

// 15-1 路由
// import App from './基础知识/15-路由/App'

// 2.进阶知识-Redux
// import App from './2.进阶知识-Redux/view/App'

// 3.进阶知识-react-Redux
import App from './3.进阶知识-react-Redux/views/App';

// ReactDom.render(<App></App>, document.getElementById('root'))
ReactDom.render(
    // StrictMode打开React的严格模式
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
    ,
    document.getElementById('root'))