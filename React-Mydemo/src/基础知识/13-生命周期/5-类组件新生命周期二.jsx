/**
 * @getSnapshotBeforeUpdate
 * @注解 一个执行在render后 componentDidUpdate 之前的生命周期 ，这个生命周期可以拿到数据没改变之前的状态
 * 这里它无限接近componentDidUpdate，它内部需要返回一个值，作为 componentDidUpdate 的第三个参数
 * @取代 他可以取代 componentWillUpdate
 */

import React, { Component } from "react";

export default class App extends Component {
  Myref = React.createRef();
  state = { list: [1, 2, 3, 4, 5, 6, 7] };
  getSnapshotBeforeUpdate(oldProps, oldState) {
    console.log("getSnapshotBeforeUpdate", oldProps, oldState);
    return this.Myref.current.scrollHeight; //返回我们原数据的高度
  }
  // 第三个值是 getSnapshotBeforeUpdate 返回的
  componentDidUpdate(oldProps, oldState, value) {
    //  用我们的新高度 减去我们之前的高度 定位到之前的位置
    console.log("componentDidUpdate", value);
    this.Myref.current.scrollTop += this.Myref.current.scrollHeight - value;
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [...[10, 11, 12, 13, 14, 15, 16], ...this.state.list],
            });
          }}
        >
          新数据
        </button>
        <ul
          ref={this.Myref}
          style={{ height: "300px", overflow: "auto", background: "red" }}
        >
          {this.state.list.map((item) => {
            return (
              <li style={{ height: 80 }} key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
