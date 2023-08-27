/**
 * @getDerivedStateFromProps 新生命周期一
 * @注解 在初始化跟父组件更新 都会触发这个生命周期 它是类的私有方法 需要在方法前面定义
 * static 方法内部需要返回一个对象作为新的state状态 这个对象会自动匹配 state状态里面的数据做更改 需要先定义state状态 就算多次调用
 * React内部会合并成一次修改
 * @好处 getDerivedStateFromProps 跟 componentDidUpdate 配套使用，在一定程度上 可以替代 componentWillMount 跟 componentWillReceiveProps
 */

import React, { Component } from "react";
class Child extends Component {
  state = { type: 1, list: ["111", "222", "333"] };
  // 可以拿到最新的属性值 跟 状态 可以把父级的属性 赋值給自己内部的状态
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("子级的getDerivedStateFromProps", nextProps, nextState);
    return {
      type: nextProps.type,
    };
  }
  // 跟getDerivedStateFromProps配套使用  getDerivedStateFromProps不适合异步请求
  // 可以在componentDidUpdate里面做  做数据对比不同的就可以异步请求 相同就return终止掉 从而提升性能
  // 应该这个周期每次改变数据都会触发 但比getDerivedStateFromProps更合适一点，所以我们在这里面玩点花活
  componentDidUpdate(oldProps, oldState) {
    //  老数据跟新数据相同 就不异步请求了
    if (oldState.type === this.state.type) return;
    if (this.state.type === 1) {
      // 模仿异步
      setTimeout(() => {
        this.setState({
          list: ["111", "222", "333"],
        });
      }, 0);
    } else {
      // 模仿异步
      setTimeout(() => {
        this.setState({
          list: ["444", "555", "666"],
        });
      }, 0);
    }
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default class App extends Component {
  state = { title: "", type: 1 };
  // 需要关键字static  内部需要return一个对象 需要定义初始化状态(可以是个空对象)
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextState);
    // 这个方法虽然会被执行多次 但是React会把他们合并成为一次修改并返回
    // 他会对比static里面的同名数据 去修改状态
    return {
      title: nextState.title + "前端猛男",
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ title: "A-", type: 1 });
          }}
        >
          点击
        </button>
        <button
          onClick={() => {
            this.setState({ title: "B-", type: 2 });
          }}
        >
          点击2
        </button>

        {this.state.title}
        <Child type={this.state.type}></Child>
      </div>
    );
  }
}
