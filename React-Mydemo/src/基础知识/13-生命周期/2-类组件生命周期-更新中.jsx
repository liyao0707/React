/**
 * @类组件生命周期 更新中
 * @componentWillUpdate 数据更新前触发 优先级比较低 会被其它高的优先级覆盖 不推荐
 * @componentDidUpdate 数据更新后触发 有两个参数 新的属性 新的状态  推荐
 * @shouldcomponentUpdate 是否需要组件更新 return true|false  true需要 false不需要 有两个参数 新的属性 新的状态
 * @componentWillReceiveProps 父组件更新 就会触发子组件这个周期函数 他可以最早拿到传递过来的数据
 * @UNSAFE_ 可以去除componentWillUpdate 的黄色警告
 * @执行顺序 render首次进入  shouldComponentUpdate → componentWillUpdate → render → componentWillReceiveProps → componentDidMountUpdate
 */

import React, { Component } from "react";
class Child extends Component {
  state = { title: "1-" };
  // 父组件传递过来的属性改变 就会触发这个周期  实际上父组件只要更新就会触发
  // 这个周期可以可以最早拿到传递过来的数据 可以将传递过来的状态 转换为组件私有
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("-------------componentWillReceiveProps----------");
    this.setState({
      title: this.state.title + nextProps.title,
    });
  }
  render() {
    console.log("子render ");
    return <div>{this.state.title}</div>;
  }
}
class App extends Component {
  state = {
    name: "前端猛男",
  };
  // 更新前 也是不太建议在这里面操作 官方即将弃用
  UNSAFE_componentWillUpdate() {
    console.log(this.state.name);
    console.log("-------------UNSAFE_componentWillUpdate----------");
  }
  // 更新后 有两个参数 老的属性 老的状态
  componentDidUpdate(oldProps, oldState) {
    console.log(oldProps, oldState);
    console.log(this.state.name);
  }
  // 是否需要更新  有两个参数 新的属性 新的状态
  shouldComponentUpdate(nextProps, nextState) {
    // this.state 老的属性
    // nextState 新的属性
    console.log(nextProps, nextState, "是否需要组件更新周期");
    if (this.state.name !== nextState.name) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("render函数");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ name: "前端弱男" });
          }}
        >
          点击
        </button>
        <Child title={this.state.name}></Child>
      </div>
    );
  }
}
export default App;

/**
 * @shouldComponentUpdate 性能优化案例
 */
class Child2 extends Component {
  // 如果没有性能优化 子组件将会重复渲染多次 造成浪费的内存使用
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // 首次老值 或 新值不同 才会更新渲染  只会触发两次调用
    if (
      this.props.current === this.props.index ||
      nextProps.current === nextProps.index
    ) {
      return true;
    }

    return false;
  }
  render() {
    console.log("render");
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          border:
            this.props.current === this.props.index
              ? "1px solid red"
              : "1px solid",
          float: "left",
          margin: 10,
        }}
      ></div>
    );
  }
}
class App2 extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    current: 0,
  };
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.current}
          onChange={(Event) => {
            this.setState({ current: Number(Event.target.value) });
          }}
        ></input>

        <div style={{ overflow: "hidden" }}>
          {this.state.list.map((item, index) => (
            <Child2
              key={item}
              current={this.state.current}
              index={index}
            ></Child2>
          ))}
        </div>
      </div>
    );
  }
}

// export default App2;
