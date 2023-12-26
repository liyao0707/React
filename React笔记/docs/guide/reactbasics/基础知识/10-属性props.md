# 基础知识 - 属性props

### 组件传参props

> 类似vue 的父传子 我们在组件上 已 `key = 'value'` 的形式 将数据传递过去 ， 在组件内部使用 `this.props` 接收

+ **发送 :**  `<NavBar title='首页'/>`  ` <NavBar { ...obj }/> `

>如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写

+ **接收 :**  `NavBar组件内 this.props` 也可以解构取值 ` let { } = this.props `  

> 函数式组件 直接形参接收 不限制形参名 业界通写props
::: tip 父页面

```
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import NavBar from './compontent/NavBar组件'
class App extends Component {
    render() {
        let obj = {
            title: '他的',
            show:false
      }
    return (
        <div>
            {/* 组件传参 除字符串外 其它类型 得 插值形式 传递 { } */}
            <div>
                首页
                <NavBar title='首页' show= { false }></NavBar>
            </div>
            {/* 如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写 */}
            <div>
                我的
                <NavBar {...obj}></NavBar>
            </div>
      </div>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'))
```

:::

::: tip 子页面 ./compontent/NavBar组件

```

<!-- 类组件 -->
export default class NavBar extends Component {
  render() {
        console.log(this.props)
        // 写法一 解构
        let { title ,show} = this.props
        return (
            <div>
                {/* 写法二 直接this.props.属性名 调用 */}
                <div>
                { title }
                我是接收过来的值: {this.props.title} 
                </div> 
                { show && <div>我是传过来的布尔值判断</div>}
        </div>
        )
    }
}

<!-- 函数式组件 -->
export default const NavBar = (props) => { 
    // 函数式组件传参 接收一个形参接收  叫什么无所谓 业界通写props
    let { title,show} = props
    return (
        <div>
          {title}  { show?'显示':''}
        </div>
    )
}
```

:::

#### propTyps 类型约束
>
> react 设计了一个库 供我们来约束类型 `prop-types`
::: tip 类组件

```
import React, { Component } from 'react';
import DemoTypes from 'prop-types'; //约束类型库
 <!-- 类组件 --> 
 <!-- 两种写法类属性  -->
class App extends Component {
// 写法一 类属性关键字 static Es7写法
    static propTypes = {
        title:DemoTypes.string //string类型
        show:DemoTypes.bool  //Boolean类型
    }
}
// 写法二 直接挂载到类上  Es6写法
App.propTypes = {  //类属性
    title:DemoTypes.string //string类型
    show:DemoTypes.bool  //Boolean类型
}
```

:::
::: tip 函数式组件

```
import DemoTypes from 'prop-types'; //约束类型库
<!-- 函数式组件 -->
const App = () =>{ }
// 直接挂载到函数组件上
App.propTypes = {  //类属性
    title:DemoTypes.string //string类型
    show:DemoTypes.bool  //Boolean类型
}
```

:::

#### default 默认值
>
> 可以给传参属性props 设默认值
::: tip 类组件 两种写法类属性

```
import React, { Component } from 'react';
import DemoTypes from 'prop-types'; //约束类型库
class App extends Component {
// 写法一 类属性关键字 static Es7写法
    static defaultProps = {
        title:'默认值' //string类型
        show:true  //Boolean类型
    }
    render() {
        // 写法一 解构
        let { title ,show} = this.props
        return (
            <div>
                {/* 写法二 直接this.props.属性名 调用 */}
                <div>
                { title }
                我是接收过来的值: {this.props.title} 
                </div> 
                { show && <div>我是传过来的布尔值判断</div>}
        </div>
        )
    }
}
// 写法二  直接挂载到类上  Es6写法
App.defaultProps = {  //类属性
    title:'默认值' //string类型
    show:true  //Boolean类型
}
```

:::
::: tip 函数式组件

```
const App = (props) => {
    let { title,show} = props
    return (
        <div>
          {title}  { show?'显示':''}
        </div>
    )
}
// 直接挂载到函数组件上
App.defaultProps = {  //类属性
    title:'默认值' //string类型
    show:true  //Boolean类型
}
```

:::

### 综合小Demo

:::tip 父页面

```
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import NavBar from './compontent/NavBar组件'
class App extends Component {
    render() {
        let obj = {
            title: '他的',
            show:false
      }
    return (
        <div>
            {/* 组件传参 除字符串外 其它类型 得 插值形式 传递 { } */}
            <div>
                首页
                <NavBar title='首页' show= { false }></NavBar>
            </div>
            {/* 如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写 */}
            <div>
                我的
                <NavBar {...obj}></NavBar>
            </div>
      </div>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'))
```

:::

::: tip  类组件写法 - 子组件( ./compontent/NavBar组件 )

```
import React, { Component } from 'react';
import DemoTypes from 'prop-types'; //约束类型库
export default class NavBar extends Component {

    <!-- 写法一 Es7 类属性关键字 static 写法 -->
    //  propsTypes(类属性名 类型约束) 固定名写法  
    static propTypes = {  
        title: DemoTyps.string,
        show:DemoTyps.bool
    }

    //  defaultProps(类属性名 属性默认值) 固定名写法  
    static defaultProps = {
        show:true
    }
  render() {
        console.log(this.props)
        // 写法一 解构
        let { title ,show} = this.props
        return (
            <div>
                {/* 写法二 直接this.props.属性名 调用 */}
                <div>
                    我是接收过来的值: {this.props.title} 
                </div> 
                {/* 做判断 */}
                { show && title }
        </div>
        )
    }
}

<!-- 写法二 Es6类属性 挂载写法 -->
// propTypes (类属性名 约束类型) 固定写法  
NavBar.propTypes = {
    title:DemoTyps.string,
    show:DemoTyps.bool
}
// defaultProps (类属性名 属性默认值) 固定写法
NavBar.defaultProps = {
    show:true
}
```

:::

::: tip  函数式组件写法 - 子组件( ./compontent/NavBar组件 )

```
import DemoTypes from 'prop-types'; //约束类型库
export default const NavBar2 = (props) => { 
    // 函数式组件传参 接收一个形参接收  叫什么无所谓 业界通写props
    let { title,show} = props
    return (
        <div>
          {title}  { show?'显示':''}
        </div>
    )
}
// 设置约束   挂载到函数身上就行了 固定写法
NavBar2.propTypes = {
    title:DemoTyps.string,
    show:DemoTyps.bool
}
// 设置默认值  挂载到函数身上就行了 固定写法
NavBar2.defaultProps = {
    show:true
}

```

:::
