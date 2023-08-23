/**
 * @富文本 dangerouslySetInnerHTML
 * @用法 它接收一个对象 对象里面有一个属性 __html 
 * @注解 可以将一段Html文本 转换成为页面标签
 */

import React, { Component } from 'react'

export default class App extends Component {
    state = {
        content:'<ul><li>1111</li><li>222</li><li>333</li></ul>'
    }
  render() {
      return (
          <div>
              {/* 富文本 dangerouslySetInnerHTML属性  */}
            <div dangerouslySetInnerHTML={
                {
                    __html:this.state.content
                }
            }>
            </div>
        </div>
    )
  }
}
