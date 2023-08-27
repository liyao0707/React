/**
 * @类组件生命周期 初始化
 * @componentWillMount Dom树初始化创建前 这时候获取不到Dom节点 但是可以最后修改 state状态
 * @componentDidMount Dom树初始化创建完毕 这时候可以获取到Dom节点 可以做一些请求 依赖dom节点 等等
 * @render 属于Dom执行中 正在对Dom树进行操作
 * @UNSAFE_ 可以去除componentWillMount控制台黄色警告 官方不建议用componentWillMount这个周期 应为优先级比较低在执行的时候 会被其它高优先级的替代掉
 * @执行顺序 componentWillMount → render → componentDidMount
 */

import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "前端",
  };
  // 初始化创建前 UNSAFE_ 可以去除控制台黄色警告 官方不建议 用这个周期 应为优先级比较低
  // 在执行的时候 会被其它高优先级的替代掉 官方快弃用这个周期了
  UNSAFE_componentWillMount() {
    console.log(
      "WillMount",
      this.state,
      "初始化前",
      document.getElementById("Myid")
    );
    // 在执行render函数之前 还可以最后修改数据
    this.setState({ name: "前端猛男" });
  }
  // 初始化创建后
  componentDidMount() {
    console.log(
      "DidMount",
      this.state,
      "初始化后",
      document.getElementById("Myid")
    );
  }
  render() {
    console.log("执行Dom处理中");
    return (
      <div>
        <div id="Myid">{this.state.name}</div>
      </div>
    );
  }
}
