/**
 * @state状态 组件的数据挂载方式
 * @state 设置初始状态  state = { a:1 } 固定写法
 * @setState 修改状态 this.setState({ a:2 }) 固定修改方法 不能直接修改数据状态 react是无法感知的
 * @使用state 直接 this.state.a  直接调用里面的数据就可以了
 */

import React, { Component } from "react";
import "../public/css/01-组件的样式.css";
class App extends Component {
  // 设置初始状态 固定写法
  state = {
    Show: false,
    list: ["111", "222", "333"],
  };
  render() {
    // 利用map循环 返回一组标签数组 标签需要有唯一的key
    // key值 是为了列表的重排跟复用， 设置key值 提升性能
    const liArray = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div>
        <div>前端猛男</div>
        <button
          onClick={async () => {
            // 最好不要这样写 不要直接操作数据 可以会照成不可预期的后果
            // this.state.Show?this.state.list.push("+++"):this.state.list.pop()

            // 最好不要跟原数据使用同一个内存指向
            let list = [...this.state.list];
            //  let list = this.state.list.slice() //官方写法
            this.state.Show ? list.push("+++") : list.pop();

            // 修改数据状态 this.setState() 固定方法
            await this.setState({
              Show: !this.state.Show,
              list: list,
            });
            console.log(this.state.Show ? "点赞一下" : "取消点赞");
          }}
        >
          {this.state.Show ? "取消点赞" : "点赞"}
        </button>

        {/* 直接插入 liArray标签数组  react会帮我们自动join一下*/}
        <ul>{liArray}</ul>
      </div>
    );
  }
}

/**
 * @增删小demo
 */
class App2 extends Component {
  MyRef = React.createRef();
  state = {
    list: ["1", "2", "3"],
  };

  // 增加方法
  Addli = () => {
    // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
    let NewList = [...this.state.list]; // 写法一
    // let NewList = this.state.list.slice() // 写法二
    // let NewList = this.state.list.concat() // 写法三

    // 插入输入框的值
    NewList.push(this.MyRef.current.value);
    // 修改原数据
    this.setState({
      list: NewList,
    });
    this.MyRef.current.value = ""; //清空输入框
  };

  // 删除方法
  RemoveLi = (index) => {
    // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
    let NewList = this.state.list.slice(); // 写法一
    // let NewList = this.state.list.concat() // 写法二
    // let NewList = [...this.state.list] // 写法三
    NewList.splice(index, 1);
    // 修改原数据
    this.setState({
      list: NewList,
    });
  };

  render() {
    // 构建标签数组 标签里面也可以操作方法
    let liArray = this.state.list.map((item, index) => {
      return (
        <li key={index}>
          {item}
          <button onClick={() => this.RemoveLi(index)}>删除</button>
        </li>
      );
    });
    return (
      <div>
        <input ref={this.MyRef}></input>{" "}
        <button onClick={() => this.Addli()}>添加</button>
        <ul>{liArray}</ul>
      </div>
    );
  }
}

/**
 * @条件渲染
 */
class App3 extends Component {
  MyRef = React.createRef();
  state = {
    list: ["1", "2", "3"],
  };

  // 增加方法
  Addli = () => {
    // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
    let NewList = [...this.state.list]; // 写法一
    // 插入输入框的值
    NewList.push(this.MyRef.current.value);
    // 修改原数据
    this.setState({
      list: NewList,
    });
    this.MyRef.current.value = ""; //清空输入框
  };

  // 删除方法
  RemoveLi = (index) => {
    // 最好深拷贝 不要直接操作原数据 会有不可预知的风险
    let NewList = this.state.list.slice(); // 写法一
    NewList.splice(index, 1);
    // 修改原数据
    this.setState({
      list: NewList,
    });
  };

  render() {
    // 构建标签数组 标签里面也可以操作方法
    let liArray = this.state.list.map((item, index) => {
      return (
        <li key={index}>
          {item}
          <button onClick={() => this.RemoveLi(index)}>删除</button>
        </li>
      );
    });
    return (
      <div>
        <input ref={this.MyRef}></input>{" "}
        <button onClick={() => this.Addli()}>添加</button>
        <ul>{liArray}</ul>
        {/* 条件判断一： 是否有该元素  类似v-if  */}
        {this.state.list.length === 0 ? <div>暂无数据 类似v-if</div> : null}
        {/* 条件判断二： 是否显示隐藏  类似v-show*/}
        <div className={this.state.list.length === 0 ? "" : "hidden"}>
          暂无数据 类似v-show
        </div>
      </div>
    );
  }
}
// export default App
// export default App2
export default App3;
