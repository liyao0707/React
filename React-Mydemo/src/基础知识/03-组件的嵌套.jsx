/**
 * @组件之间的嵌套
 * @注意 一个根组件下 只能嵌套一层组件 不能一个组件里面无限往下嵌套 如果想嵌套到该组件下面
 *       就在该组件里面的根元素里面嵌套 
 */

import React, { Component } from 'react'
class NavBarChild extends Component{
    render(){ return (<div>我是NavBar组件里面的子组件</div>)}
}
class NavBar extends Component {
    render() {
        // 如果想在当前组件里面嵌套组件  就在该组件的根元素里面嵌套
        return (
            <div>
                我是NavBar组件
                <NavBarChild></NavBarChild>
            </div>
        )
    }
}
class SideBar extends Component{
    render(){ return(<div>我是SideBar组件</div>)}
}

const Footer   = () => (<div>我是Footer组件</div>)
    
export default class App extends Component {
  render() {
      return (
        // 根组件
          <div>
             {/* 组件之间的嵌套 */}
              <NavBar></NavBar> 
              <SideBar></SideBar>
              <Footer></Footer>
              {/* 正确写法 看NavBar类组件里面的嵌套*/}

              {/* 错误写法 不能多层嵌套 */}
              {/* <NavBar> 
                    <div>1111</div>
                  </NavBar> */
              }
        </div>
    )
  }
}
