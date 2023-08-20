/**
 * @插值写法 
 * @注解 { 表达式|变量|运算 等等 } 只需要在标签里面 用插值的方式就可以在页面上渲染内容啦
 */

/**
 * @组件的样式
 * @行内样式  React 如果想在虚拟DOM中写入样式 必须在 `插值语法` 里面写入一个 `样式对象`
 * @外部样式 可以将css文件导入进来 直接用样式名 注意： class名 要写成 className  应为class已经被 class类暂用啦
 * 在16.2之前会报错 在之后的版本会发出一些警告但不影响使用
 */

import React, { Component } from 'react'

// 导入外部样式
import '../public/css/01-组件的样式.css'
export default class App extends Component {
    render() {
        let MyName = '前端猛男';
        // 样式对象 耦合属性需要驼峰命名 
        let StyleObj = {
            backgroundColor: 'red',
            fontSize:20
        }
        return (
            <div> 
                {10 + 20}
                {MyName}
                {true ? 'true' : 'false'}
                {/* 写法一 插入样式对象  行内样式*/}
                <div style={StyleObj}>插入样式对象</div>
                {/* 写法二 直接写入对象  行内样式*/}
                <div style={{ backgroundColor: '#000',color:'#fff'}}>直接写入对象</div>
           
                {/* 外部样式 */}
                <div className='active'>外部样式class名</div>
                <div id='MyName'>外部样式id名</div>
            </div>
        )
  }
}

