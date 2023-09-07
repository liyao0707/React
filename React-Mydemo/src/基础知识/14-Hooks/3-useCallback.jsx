/**
 * @useCallback记忆函数
 * @注解 每当我们更改数据的时候 函数式组件都会被重新调用一次，里面的方法都会重新
 * 创建，从而比较浪费性能, `useCallback`解决的这个问题,他有两个参数: 一 `回调函数`
 * 二 `依赖对象数组` 如果不传递依赖对象，那么这个函数永远用的是缓存的那一份，如果传递了依赖对象
 * 当依赖对象改变的时候，函数组件重新执行,依赖当前对象的函数才会被重新创建,而其他使用`useCallback`创建的有依赖的函数不会重新创建,从而提升性能
 */

import React, { useState, useCallback } from "react";

export default function App() {
  const [name, setname] = useState("前端");
  // 无依赖对象 函数缓存 其它函数组件重新调用 该组件也不会重新创建
  const handername = useCallback(() => {
    console.log(name);
  }, []);

  // 依赖对象name 每次name改变 该函数组件重新执行 创建当前函数
  // 但是其它useCallback非依赖name useCallback创建的方法不会被重新创建
  const handername2 = useCallback(() => {
    console.log(name);
  }, [name]);

  // 每次有数据更新 该以下函数都会被重新创建
  const fn = (value) => {
    setname(value);
  };
  const hander = () => {};
  return (
    <div>
      <button onClick={() => handername("前端猛男")}>打印name - 无依赖</button>
      <button onClick={() => setname("前端猛男")}>改变{name}</button>
      <button onClick={() => handername2("前端猛男")}>打印name - 有依赖</button>
      <div>
        {"函数会重新整个调用："}
        <button onClick={() => fn("前端猛男1")}>改变会重新执行函数组件</button>
        <button onClick={() => fn("前端猛男2")}>改变会重新执行函数组件</button>
        <button onClick={() => hander()}>递增打印</button>
      </div>
    </div>
  );
}
