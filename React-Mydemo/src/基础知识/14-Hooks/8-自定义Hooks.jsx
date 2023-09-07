/**
 * @useMemo
 * @注解 : 跟useCallback效果差不多,只不过内部回调函数需要一个返回值，返还给实例
 */

import React, { useState, useMemo } from "react";
// 自定义Hooks
const useFilterList = (list, value) => {
  const FilterList = useMemo(
    () => list.filter((item) => item.includes(value)),
    [list, value]
  );
  return {
    FilterList,
  };
};

export default function App() {
  const [list, setlist] = useState(["1", "2"]);
  const [value, setvalue] = useState("");

  // 调用自定义hooks 并解构出来数据FilterList
  const { FilterList } = useFilterList(list, value);
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
        {FilterList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
