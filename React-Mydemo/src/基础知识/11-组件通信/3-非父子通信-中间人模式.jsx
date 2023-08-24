/**
 * @状态提升 (中间人模式)
 * @注解 多个子组件将自己共享的状态 交给父组件 在父组件上改变这个状态后通过props将状态分发给子组件
 */

import React, { Component } from 'react'

const Childen1 = (props) => {
    const {name,content,ClickContent} = props
    return (
        // 传递数据给父组件 父组件接收到之后 传给Childen2组件
        <div onClick={() => {
            ClickContent(content)
        }}>
            {name}
        </div>
    )
}
const Childen2 = (props) => {
    const {Content} = props
    return (
        // 接收父组件中转传递过来的值
        <div>
            {Content}
        </div>
    )
}
export default class App extends Component {
    state = {
        list: [
            {id:1,name:'前端猛男1',content:'我是前端猛男1'},
            {id:2,name:'前端猛男2',content:'我是前端猛男2'},
            {id:3,name:'前端猛男3',content:'我是前端猛男3'},
            {id:4,name:'前端猛男4',content:'我是前端猛男4'},
        ],
        Content:'' //共享的内容
    }
  render() {
    return (
    // 通过父组件中间人的形式 来传递数据
    <div>
         { this.state.list.map((item) => {
             return <Childen1 key={item.id} {...item} ClickContent={(Content) => {
                // 接收子级传来的数据 赋值给共享状态
                 this.setState({ Content: Content })
            }}></Childen1> 
        }) }      
        <Childen2 Content={this.state.Content}></Childen2>        
      </div>
    )
  }
}
