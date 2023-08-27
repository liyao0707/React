/**
 * @插槽 this.props.children
 * @注解 在组件标签内部可以写入内容|标签 在子组件中调用 this.props.children 可以渲染出来内容
 * @好处 复用组件 可以动态组件内部内容  有一定的组件通讯效果
 */

import React, { Component } from "react";
const Childer = (props) => {
  // 插槽数据 在{ }插入的时候react帮我们做了处理
  console.log(props.children);
  return (
    // 直接插入会全部渲染出来 可以使用[索引] 来取需要的内容
    <div>
      {props.children}
      {props.children[0]}
    </div>
  );
};
export default class App extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      // 组件内部写内容|标签 叫做插槽 在 子组件通过this.props.children 方法可以渲染出值 固定方法
      <div>
        <Childer>
          <button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            111111
          </button>
          <button>222</button>
        </Childer>
        <Childer>
          <button>333</button>
          <button>4444</button>
        </Childer>

        {this.state.show && "我出来了"}
      </div>
    );
  }
}
