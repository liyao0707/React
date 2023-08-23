/**
 * @属性props 组件传参
 * @注解 类似vue里面的父传子 在组件上以 key='value' 发送 在 组件内 this.props接收
 */

import React, { Component } from 'react'
import NavBar from './compontent/NavBar组件'
export default class App extends Component {
    render() {
        let obj = {
            title: '他的',
            show:false
      }
    return (
        <div>
            App
            {/* 组件传参 除字符串外 其它类型 得 插值形式 传递 { } */}
            <div>
                首页
                <NavBar title='首页' show= { false }></NavBar>
            </div>

            <div>
                发布
                <NavBar title='发布' ></NavBar>
            </div>
            <div>
                我的
                <NavBar title='我的' ></NavBar>
            </div>
            {/* 如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写 */}
            <div>
                他的
                <NavBar {...obj}></NavBar>
            </div>
      </div>
    )
  }
}
