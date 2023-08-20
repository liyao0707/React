# 基础知识-ref应用

### ref应用

+ **标签上设置 `ref='MyRef'`**

> `<div ref='MyRef'></div>` 可以通过 `this.refs.MyRef` ref可以获取到应用的真实Dom

+ **组件上设置 `ref='MyRef'`**

> `<NavBar ref='MyRef'></NavBar>` 可以通过 `this.refs.MyRef` ref可以获取到组件对象

+ **新的写法** `React.createRef()`
  
>1. `MyRef2 = React.createRef()` 创建一个ref应用
>2. `<div ref = { this.MyRef2 } ></div>` 挂载到ref上
>3. `this.MyRef2.current` 调用 里面有个 `current`属性 它的值就是 Dom节点 | 组件对象

```
import React, { Component } from 'react'
import ReactDom from 'react-dom';

class App extends Component {
 // 创建一个ref应用 将MyRef属性挂载到Dom节点上
  MyRef2 = React.createRef()
  render() {
    return (
        <div>
            {/* 写法一  直接写Ref属性  不推荐*/}
            <input ref="MyRef"></input>
            {/* this.refs.MyRef 调用 */}   
            {/* 严格模式下会报错 vscode提示即将弃用 */}
            <button onClick={ ()=>{ console.log(this.refs.MyRef) }}>add</button>
        
            {/* 写法二 挂载Ref应用  新的写法 推荐*/}
            <input ref={this.MyRef2}></input>
            {/* this.MyRef2.current 调用 */}
            <button onClick={ ()=>{ console.log(this.MyRef2.current) }}>add</button>
        </div>
    )
  }
}
<!-- 非严格模式 -->
ReactDom.render(<App/>, document.getElementById('root'))

<!-- 严格模式 -->
ReactDom.render(
    <!-- 开启严格模式 -->
    <React.StrictMode>
        <App/>
    </React.StrictMode>
,document.getElementById('root'))
```
