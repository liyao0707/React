/**
 * @组件通信
 * @父传子 在组件上写属性 传递数据过去 类组件用this.props接收就行了, 函数式组件用 形参
 * @子传父 在组件上写属性 传递一个方法(函数)过去 子组件 在里面接收调用 就可以向父级通信了
 */

import React, { Component } from 'react'

class App2 extends Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => {
                // 子传父 调用传递过来的方法 向父组件通信  利用了callback原理
                    this.props.Fn1('类组件')
                }}> 类组件点击 </button>
            </div>
        )
    }
}
const App3 = (props) => {
    console.log(props)
    return (
        // 子传父 调用传递过来的方法 向父组件通信  利用了callback原理
        <div>
            <button onClick={() => {
                props.Fn2('函数式组件')
            }}>函数式组件点击</button>
        </div>
    )
}
export default class App extends Component {
    state = {
        show:true
    }
    App3Fn = (text) => {
        // 参数是 子组件传回来的数据
         console.log(text)
        this.setState({ show:!this.state.show})
    }
  render() {
      return (
        // 在组件上传递数据叫做父传子
        // 在组件上传递方法说明 这个子组件需要 子传父 来回调内容给 父组件 
        <div>
            <App2 title='数据' Fn1={(text) => {
                 // 参数是 子组件传回来的数据
                console.log(text)
                this.setState({ show:!this.state.show})
              }}></App2>
              
              
            <App3 title='数据2' Fn2={ this.App3Fn}></App3>
            {  this.state.show && '内容显示' }
      </div>
    )
  }
}
