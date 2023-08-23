/**
 * @受控组件与非受控组件
 * @受控 基于state状态 让react来处理的组件 数据双向绑定 属于受控组件
 * @非受控 通过 ref属性 获取到值 数据是单向的 没法修改 叫 非受控组件
 */



/**
 * @表单中的受控组件与非受控组件
 */

import React, { Component } from 'react'

// 非受控组件
 class App extends Component {
    // 通过ref获取值 非受控组件虽然可以使用defaultValue设置默认值 但是value属性是写死绑定的
    // 无法更改 且无法传递子组件数据 视图数据还不会更新
 MyInput  = React.createRef()
  render() {
    return (
        <div>
            <input ref={this.MyInput} type="text" value='1111' defaultValue='默认值' />
            <button onClick={() => {
                console.log(this.MyInput.current.value)
            }}>确认</button>
            <button onClick={() => {
                this.MyInput.current.value = ''
            }}>重置</button>
            <Child value={this.MyInput.current}></Child>
      </div>
    )
  }
}
export default App

// 受控组件
class App2 extends Component {
    // 通过value绑定状态值 利用onChange事件和setState方法 去修改状态里面的值
    // 从而达到双向数据绑定 是被React状态所控制的 所以叫 受控组件 也可以传递子组件数据 触发子组件render更新
    state = {
         InputValue:'默认值'
     }
  render() {
    return (
        <div>
            {/* 在react里面 onChange跟onInput 事件的效果是一样的 */}
            {/* 利用onChange事件 把输入框里面的值赋值给状态 状态接受到之后 在重新赋值给input组件 */}
            <input value={this.state.InputValue} onChange={(event) => {
                this.setState({
                   InputValue:event.target.value
               })
            }}></input>
            <button onClick={() => {
                console.log(this.state.InputValue)
            }}>确认</button>
            <button onClick={() => {
                 this.setState({
                   InputValue:''
               })
            }}>重置</button>

            <Child value={this.state.InputValue}></Child>
        </div>
    )
  }
}

const Child = (props) => {
    console.log(props.value)
    return <div>我是子组件child 接收到值：{ props.value}</div>
}

// export default App2
