/**
 * @ref应用 获取真实Dom节点
 * @标签 给标签设置 ref="MyRef" 可以通过 this.refs.MyRef ref可以获取到应用的真实Dom
 * @组件 给组件设置 ref="MyRef" 可以通过 this.refs.MyRef ref可以获取到组件对象
 * @新的写法 React.createRef() 创建一个Ref应用 挂载到 Ref属性上 严格模式下推荐
 * 创建 MyRef = React.createRef()  
 * 挂载 ref = { this.MyRef }
 * 调用 this.MyRef.current  创建的Ref应用上面有个current属性 它的值就是Dom|组件对象
 */

import React, { Component } from 'react'
export default class App extends Component {

 // 创建一个ref应用 将MyRef属性挂载到Dom节点上
    MyRef2 = React.createRef()
  render() {
    return (
        <div>
            {/* 写法一  直接写Ref属性  不推荐*/}
            {/* 严格模式下会报错 vscode提示即将弃用 */}
            <input ref="MyRef"></input>
            {/* 直接this.refs.ref应用名 调用 */}
            <button onClick={ ()=>{ console.log(this.refs.MyRef) }}>add</button>
        
            {/* 写法二 挂载Ref应用  新的写法 推荐*/}
            <input ref={this.MyRef2}></input>
            {/* 直接this.MyRef2.current 调用 */}
            <button onClick={ ()=>{ console.log(this.MyRef2.current) }}>add</button>
        </div>
    )
  }
}
