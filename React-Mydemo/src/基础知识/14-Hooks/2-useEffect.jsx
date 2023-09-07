/**
 * @useEffect
 * @注解 函数式组件没有生命周期，但是可以使用 `useEffect` 来完成一些类似生命周期的事情，
 * 它内部有两个参数 1. 回调函数 2.依赖对象数组, 这个方法会首次进来注册调用,里面可以写异步请求等等，如果没有依赖项
 * 那么他就只会调用一个，如果有依赖项，当依赖项的数据改变时，他会再次触发回调函数，从而实现类似
 * 类组件生命周期的效果。如果想实现销毁周期效果，需要在参数一:回调函数内部里面 return 一个回调函数出去 这个函数
 * 里面可以写一些需要销毁时候的事情 在组件被销毁的时候会调用执行
 */

import React, { useState, useEffect } from "react";
const Child = () => {
  const [Name, setName] = useState("前端");
  const [Age, setAge] = useState(20);
  // 注册方法 可以多次调用 ,第二个参数传空数组 代表没有依赖项，只会调用一次
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(1);
    }, 1000);
    return () => {
      console.log("销毁时调用");
      clearInterval(timer);
    };
  }, []);
  // 依赖 Name
  useEffect(() => {
    console.log("依赖项的数据Name变化也会随着调用");
    return () => {
      console.log("111");
    };
  }, [Name]);
  // 依赖 Age
  useEffect(() => {
    console.log("依赖项的数据Age变化也会随着调用");
    return () => {
      console.log("222");
    };
  }, [Age]);
  return (
    <div>
      <button onClick={() => setName("前端猛男")}>Name{Name}改变</button>
      <button onClick={() => setAge(Age + 1)}>Age{Age}改变</button>
    </div>
  );
};
export default function App() {
  const [Show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!Show)}>
        {Show ? "隐藏" : "显示"}Child组件
      </button>
      {/* 组件显示隐藏 */}
      {Show && <Child Show={Show}></Child>}
    </div>
  );
}
