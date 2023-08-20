/**
 * @事件绑定 on事件名
 * @注意 事件名的首字母一定要大写 比如 onClick onChange 等等
 * @匿名函数写法  逻辑多 维护不好
 * @this调用写法 会产生this指向问题
 * @匿名函数内部调用写法  推荐写法 不会产生指向问题
 */

import React, { Component } from 'react'

export default class App extends Component {
    // es7 定义属性
    c = 111;
    constructor() {
        super()
    // es6 定义属性
        this.c = 222
    }
    // es6 定义方法
    hander2() {
        // 如果不改变this指向的话 这边调用this.c这个属性会报错  应为这个方法内部的this他不知道指向谁 需要在调用方法的时候将它的this指向为当前的this
        // 在没改变指向之前 这里的this = undefined 
        // 改变了this指向 这里才可以指向当前这个App类 调用属性方法 都不会报错
        console.log('add2事件',this.c)
    }
    // es7 定义方法
    hander3 = () => { 
        console.log('add3事件',this.c)
        
    }
    hander4 = () => {
        console.log('add4事件',this.c)
    }
  render() {
      return (
        // 事件绑定
        <div>
              <input type="text" />
              {/* 匿名函数写法 */}
              <button onClick={() => { console.log('add1事件',this.c) }}>add1</button>

              {/* this调用写法  这些写法会在后面产生this指向问题*/}
              <button onClick={this.hander2.bind(this)}>add2</button>  {/* 改变了this指向  this = App(当前类) */}
              <button onClick={ this.hander3 }>add3</button>{/* 没改变this指向  this= undefined*/}
              {/* 匿名函数内部调用法   不会产生this指向问题*/}
              <button onClick={()=>{ this.hander4() }}>add4</button>
      </div>
    )
    }
}
