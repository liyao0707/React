/**
 * @PureComponent
 * @注解 React提供了这个方法, 他会自动帮我们检测,新老属性|状态 ,做对比来决定shouldcomponentUpdata
 * 来返回true 跟 false ,从而决定要不要呼叫render
 */

import React, { PureComponent, Component } from "react";

export default class App extends PureComponent {
  state = { title: 1 };
  componentDidUpdate() {
    console.log("componentDidMount"); //多次点击不会执行
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              title: "前端猛男",
            });
          }}
        >
          点击
        </button>
        {this.state.title}
      </div>
    );
  }
}
