/**
 * @属性props 组件传参
 * @注解 类似vue里面的父传子 在组件上以 key='value' 发送 在 组件内 this.props接收
 * @propsTypes  属性验证 类属性 可以约束传过来的类型  react 提供了一个类型库供我们使用 @prop-types
 * @defaultProps 属性默认值  
*/

import React, { Component } from 'react'
import DemoTyps from 'prop-types'

/**
 * @函数式组件 
 */ 
const NavBar2 = (props) => { 
    // 函数式组件传参 接收一个形参接收  叫什么无所谓 业界通写props
    let { title,show} = props
    return (
        <div>
          {title}  { show?'显示':''}
        </div>
    )
}
// 设置约束   挂载到函数身上就行了 固定写法
NavBar2.propTypes = {
    title:DemoTyps.string,
    show:DemoTyps.bool
}
// 设置默认值  挂载到函数身上就行了 固定写法
NavBar2.defaultProps = {
    show:true
}



/**
 * @类组件 
 */ 
class NavBar extends Component {
    // 对象属性
    a = 1  
    
    // 类属性(关键字static)   propsTypes(类属性名 类型约束) 固定名写法  Es7
    static propTypes = {  
        title: DemoTyps.string,
        show:DemoTyps.bool
    }
    // 类属性(关键字static)   defaultProps(类属性名 属性默认值) 固定名写法  Es7
    static defaultProps = {
        show:true
    }
  render() {
        console.log(this.props)
        // 写法一 解构
        let { title ,show} = this.props
        return (
            <div>
                {/* 写法二 直接this.props.属性名 调用 */}
                <div>
                { title }
                我是接收过来的值: {this.props.title} 
                </div> 
                { show && <div>我是传过来的布尔值判断</div>}
        </div>
        )
    }
}
// Es6 类属性
// propTypes (类属性名 约束类型) 固定写法  
NavBar.propTypes = {
    title:DemoTyps.string,
    show:DemoTyps.bool
}
// defaultProps (类属性名 属性默认值) 固定写法
NavBar.defaultProps = {
    show:true
}

// export default NavBar
export default NavBar2
