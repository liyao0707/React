/**
 * @类组件生命周期 - 销毁
 * @componentWillUnmount 在组件被销毁的时候 会触发这个周期  可以在这个周期里面做一些 清除定时器 解绑Dom事件 等等
 */

import React, { Component } from "react";

class Child extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(1111);
    }, 1000);
  }
  // 组件销毁生命周期
  componentWillUnmount() {
    console.log("销毁componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    return <div>Child</div>;
  }
}
export default class App extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          点击
        </button>
        {this.state.show && <Child></Child>}
      </div>
    );
  }
}
