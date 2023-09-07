/**
 * @useState
 * @注解 函数式组件里面的状态, 在`useState`方法里面传入初始值, 他会返回一个数组，里面
 * 有两个值 一个是数据 一个是修改的函数方法，通过数组解构使用
 */

import React, { useState } from "react";
const App = () => {
  console.log(useState("前端"));
  // 一个数据 一个修改方法
  const [Name, setName] = useState("前端"); //传入初始化值 返回一个数组
  const [list, setlist] = useState(["111", "222"]);
  const [text, settext] = useState("");

  // 修改
  const HanderSetName = (value) => {
    // 调用修改方法会触发页面数据更新
    setName(value);
  };

  // 删除方法
  const HanderRemove = (index) => {
    // 不要直接操作原数据
    const newList = [...list];
    newList.splice(index, 1);
    setlist(newList);
  };

  // 添加方法
  const HanderPush = () => {
    setlist([...list, text]);
  };

  // 修改绑定数据
  const HanderChangeText = (event) => {
    settext(event.target.value);
  };
  return (
    <div>
      <button onClick={() => HanderSetName("前端猛男")}>点击</button>
      {Name}

      <ul>
        <input
          value={text}
          onChange={(event) => HanderChangeText(event)}
        ></input>{" "}
        <button onClick={() => HanderPush()}>添加</button>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item} <button onClick={() => HanderRemove(index)}>删除</button>
            </li>
          );
        })}
      </ul>

      {list.length === 0 && "没有数据了"}
    </div>
  );
};

export default App;
