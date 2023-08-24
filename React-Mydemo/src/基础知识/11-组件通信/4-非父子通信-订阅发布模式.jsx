/**
 * @订阅发布模式
 * @订阅 利用回调函数的形式接收发布的值 将一个回调函数存储到中间平台
 * @发布 循环调用 中间平台 存储的订阅回调函数 将发布的数据传给回调函数
 * @中间平台 存储订阅者传递过来的回调函数
 * @注解 订阅者 调用中间平台的订阅方法 将订阅回调函数存储到中间平台  发布者调用发布方法循环 中间
 * 平台存储的订阅回调函数 传递数据给订阅回调函数 订阅者接收数据
 */
import React, { Component } from 'react';

// 中间平台
const Bus = {
    list: [],//存储订阅者回调
    //订阅方法 
    Subscribe(callback){
        console.log(this)
        this.list.push(callback) //存储订阅回调函数
    },
    //发布方法 
    Publish(value){
        // 循环调用订阅回调函数 传递发布信息
        this.list.forEach(callback => {
           callback && callback(value)
        });
    }
}
// // 订阅者1
// Bus.Subscribe((value) => {
//     console.log(value)
// })
// // 订阅者2
// Bus.Subscribe((value) => {
//     console.log(value)
// })
// // 发布者
// Bus.Publish('发布内容')

const Childen1 = (props) => {
    const {name,content} = props
    return (
        <div onClick={() => {
            // 调用发布方法发布数据 
            Bus.Publish(content)
        }}>
            {name}
        </div>
    )
}
class Childen2 extends Component {
    state = {
        content:''
    }
    constructor() {
        super()
        Bus.Subscribe((value) => {
            this.setState({content:value})
        })
    }
    render() {
        return (
        // 调用订阅方法 注册订阅回调函数到中间平台 
            <div>
                {this.state.content}
        </div>
    )
    }
}
export default class App extends Component {
    state = {
        list: [
            {id:1,name:'前端猛男1',content:'我是前端猛男1'},
            {id:2,name:'前端猛男2',content:'我是前端猛男2'},
            {id:3,name:'前端猛男3',content:'我是前端猛男3'},
            {id:4,name:'前端猛男4',content:'我是前端猛男4'},
        ],
    }
  render() {
    return (
    // 通过父组件中间人的形式 来传递数据
    <div>
         { this.state.list.map((item) => {
             return <Childen1 key={item.id} {...item}></Childen1> 
        }) }      
        <Childen2></Childen2>        
      </div>
    )
  }
}
