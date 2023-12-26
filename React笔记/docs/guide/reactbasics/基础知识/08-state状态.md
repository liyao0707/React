# 基础知识-组件的数据挂载方式

### 状态 `state`
>
> `类似vue的data()数据源泉` 状态就是组件描述某种情况显示的数据,由组件自己控制维护,使用状态的目的就是自己为了在不同的情况下让组件显示不同的数据

```
<!-- 固定写法 -->
 state = {  //创建数据
    a:1
 }
 //调用数据
 console.log(this.state.a) // 1
```

### 修改状态 `this.setState()`
>
> 不能直接操作修改数据 React是无法感知的 需要使用`this.setState()`方法来修改 state状态里面的数据 这点类似小程序

> **setState 接收第二个参数  是个回调函数 数据跟真实Dom更新完毕之后 就会触发回调**

>**只要setState方法修改状态 就会触发组件render()函数重新调用更新 render函数内部立即调用的方法也会随着更新调用**

```
<!-- 固定方法 -->
 this.setState({ a:2 }, () => { }) 
 console.log(this.state.a) // 2
```

+ **创建状态** `state = { a:1}`
+ **调用状态** `this.state.a`
+ **修改状态** `this.setState({ a:1 })`

::: tip 注意事项

```
17 版本之前
setState 在同步中 是异步更新状态 (数据 真实Dom)` 
setState 在异步中 是同步更新状态 (数据 真实Dom)`

18 版本之后
setState 都是异步的状态
```

:::

### 状态小Demo

::: tip 状态体验

```

import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {

  // 设置初始状态 固定写法
  state = {
    Show:false
  }

  render() {
    return (
      <div>
        <div>前端猛男</div>
            <button onClick={ async() => {
                // 修改数据状态 this.setState() 固定方法
                   await this.setState({
                      Show:!this.state.Show
                   })
                // 调用状态
                  console.log(this.state.Show?'点赞一下':'取消点赞')
            }}>
                 {this.state.Show?'取消点赞':'点赞'}
            </button>
      </div>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'))

```

:::

### 数组列表渲染
>
> 1.如果想在页面是跟vue里面的 v-for 一样动态循环出来标签的话 需要用到 `map` 方法 ，里面返回一个标签数组，直接插入到 {  } 里面 ,react会帮我们自动join一下 不需要我们自己手动join

>2.同时也跟vue一样 需要有一个唯一的 `key` 值 设置key值 是为了列表的重排跟复用， 提升性能
::: tip map循环列表

```

import React, { Component } from 'react'
import ReactDom from 'react-dom'
class App extends Component {

  // 设置初始状态 固定写法
  state = {
    list:['111','222','333']
  }

  render() {
    //利用map循环 返回一组标签数组 每个标签必须有一个唯一的 key值
    // key值 是为了列表的重排跟复用， 设置key值 提升性能
    const liArray = this.state.list.map((item,index)=> <li key={ index }> { item } </li>)
    return (
      <div>
            //插入liArray标签数组 React帮我们自动join了一下 不需要我们手动join
            <ul>
                { liArray }
            </ul>
      </div>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'))

```

:::

### 增删小Demo

::: tip 最好不要直接在原数据上面操作 深拷贝一份原数据 在这个基础上修改

```

import React, { Component } from 'react'
import ReactDom from 'react-dom'
// 增删小demo
class App extends Component{
    //创建Ref应用属性
    MyRef = React.createRef()
    //状态源
    state = {
       list:['1','2','3']
    }

    // 增加方法
    Addli = () => {
        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
        let NewList = [...this.state.list] // 写法一
        // let NewList = this.state.list.slice() // 写法二
        // let NewList = this.state.list.concat() // 写法三

        // 插入输入框的值
        NewList.push(this.MyRef.current.value) 
        // 修改状态
        this.setState({
            list:NewList
        })
    }

    // 删除方法
    RemoveLi = (index) => {
        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
        let NewList = this.state.list.slice()  // 写法一
        // let NewList = this.state.list.concat() // 写法二
        // let NewList = [...this.state.list] // 写法三

        //删除当前数据
        NewList.splice(index, 1)
        // 修改状态
        this.setState({ 
            list:NewList
        })
    }
    
    render() {
        // 构建标签数组 标签里面也可以操作方法
        let liArray = this.state.list.map((item, index) => {
            return (
                <li key={ index }>
                    { item }
                    <button onClick={ ()=> this.RemoveLi(index) }>删除</button>
                </li> 
            )
        })
        return (<div>
            <input ref= { this.MyRef }></input> <button onClick={ ()=> this.Addli() }>添加</button>
            <ul>
                { liArray }
            </ul>
        </div>)
    }
}
ReactDom.render(<App/>,document.getElementById('root'))

```

:::

### 条件渲染

```

// 条件判断一： 是否有该元素  类似v-if  
{this.state.list.length === 0 ? <div>暂无数据 类似v-if</div> : null}

// 条件判断二： 是否显示隐藏  类似v-show
<div className={ this.state.list.length === 0?'':'hidden' }>暂无数据 类似v-show</div>
```

::: tip 小demo

```
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import '../public/css/01-组件的样式.css'

class App3 extends Component{
    MyRef = React.createRef()
    state = {
       list:['1','2','3']
    }
    // 增加方法
    Addli = () => {
        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
        let NewList = [...this.state.list] // 写法一
        // 插入输入框的值
        NewList.push(this.MyRef.current.value) 
        // 修改原数据
        this.setState({
            list:NewList
        })
        this.MyRef.current.value = '' //清空输入框
    }

    // 删除方法
    RemoveLi = (index) => {
        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
        let NewList = this.state.list.slice()  // 写法一
        NewList.splice(index, 1)
        // 修改原数据
        this.setState({ 
            list:NewList
        })
    }
    
    render() {
        // 构建标签数组 标签里面也可以操作方法
        let liArray = this.state.list.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    <button onClick={()=>this.RemoveLi(index)}>删除</button>
                </li> 
                
            )
        })
        return (
        <div>
            <input ref= { this.MyRef }></input> <button onClick={ ()=> this.Addli() }>添加</button>
            <ul>
                { liArray }
            </ul>
            
            {/* 条件判断一： 是否有该元素  类似v-if  */}
            {this.state.list.length === 0 ? <div>暂无数据 类似v-if</div> : null}
            {/* 条件判断二： 是否显示隐藏  类似v-show*/}
            <div className={ this.state.list.length === 0?'':'hidden' }>暂无数据 类似v-show</div>
        </div>)
    }
}
ReactDom.render(<App/>,document.getElementById('root'))
```

:::
