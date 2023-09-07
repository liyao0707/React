/**
 * @useMemo
 * @注解 : 跟useCallback效果差不多,只不过内部回调函数需要一个返回值，返还给实例
 */

import React, { useState, useMemo } from "react";

export default function App() {
  const [list, setlist] = useState(["1", "2"]);
  const [value, setvalue] = useState("");
  // 当依赖值改变时 会重新创建 并返回一个值
  // 如果依赖项是空数组，则只会创建一次，以后每次拿的都是老记忆函数
  const FilterList = useMemo(
    () => list.filter((item) => item.includes(value)),
    [list, value]
  );
  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setvalue(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setlist([...list, value]);
        }}
      >
        添加
      </button>

      <ul>
        {/* 直接使用变量渲染标签 */}
        {FilterList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
