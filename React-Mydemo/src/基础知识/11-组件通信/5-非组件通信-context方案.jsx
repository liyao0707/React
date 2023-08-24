/**
 * @跨组件通信 context方案
 * @createContext React.createContext() 可以创建一个跨组件实例对象
 * @Provider <React.createContext().Provider value={ { 数据|方法 } }> </React.createContext().Provider>
 * 用来包裹父组件根元素标签 标签上有个value属性 可以定义全局数据 子组件可以用里面定义的数据和方法
 * @Consumer  <ContextDom.Consumer>{ (Context)=>组件根元素标签 }</ContextDom.Consumer>
 * 用来包裹子元素的根标签 内部需要一个回调函数 函数的返回值是子组件的根标签 回调函数的形参 就是包裹父组件
 * Provider标签上面value属性里面定义的数据|方法 可以调用上面定义的方法 修改父组件定义与value属性绑定的数据
 * 从而让父组件刷新 子组件也相应的跟着变化
 */

import React, { Component } from "react";
// 创建context对象
const ContextDom = React.createContext();

const Childen1 = (props) => {
  const { name, content } = props;
  return (
    // 用实例对象的Consumer属性 包裹需要通信的子组件的跟元素 他内部是个回调函数
    // 内部需要返回我们的根元素标签 形参就是传过来的数据
    <ContextDom.Consumer>
      {(Context) => {
        console.log(Context);
        return (
          <div
            onClick={() => {
              //   调用形参上面 根元素provider定义的方法 将数据传递过去进行更改
              Context.ChangeContent(content);
            }}
          >
            {name}
          </div>
        );
      }}
    </ContextDom.Consumer>
  );
};
class Childen2 extends Component {
  render() {
    return (
      // 用实例对象的Consumer属性 包裹需要通信的子组件的跟元素 他内部是个回调函数
      // 内部需要返回我们的根元素标签 形参就是传过来的数据
      <ContextDom.Consumer>
        {(Context) => {
          console.log(Context);
          // 调用形参上面 父组件Provider定义的值
          return <div>{Context.content}</div>;
        }}
      </ContextDom.Consumer>
    );
  }
}

export default class App extends Component {
  state = {
    list: [
      { id: 1, name: "前端猛男1", content: "我是前端猛男1" },
      { id: 2, name: "前端猛男2", content: "我是前端猛男2" },
      { id: 3, name: "前端猛男3", content: "我是前端猛男3" },
      { id: 4, name: "前端猛男4", content: "我是前端猛男4" },
    ],
    content: "", //需要传递的数据
  };
  render() {
    return (
      // 用实例对象的Provider属性 包裹根元素 标签上有一个value属性用来定义数据
      // 子组件可以访问到value传递过去的数据
      <ContextDom.Provider
        value={{
          title: "前端猛男",
          content: this.state.content, //动态绑定传递的值
          ChangeContent: (content) => {
            // 子组件调用此方法修改传递过来的数据 来更新组件
            this.setState({
              content: content,
            });
          },
        }}
      >
        <div>
          {this.state.list.map((item) => {
            return <Childen1 key={item.id} {...item}></Childen1>;
          })}
          <Childen2></Childen2>
        </div>
      </ContextDom.Provider>
    );
  }
}
