/**
 * @useRef
 * @注解 跟类里面的用法一样，返还一个实例,里面有个current属性,就是我们所需要的。
 * 它还有另一个用法 ，创建一个类似状态的变量
 */

import React, { useState, useRef } from "react";

export default function App() {
  const [Value, setValue] = useState("");
  const MyRef = useRef(null); //创建ref属性实例
  const [num, setnum] = useState(0);
  // 创建一个数据
  const MyRefvalue = useRef(0);
  const handerAdd = () => {
    setnum(num + 1);
    // 修改数据
    MyRefvalue.current++;
  };
  return (
    <div>
      <input
        ref={MyRef}
        value={Value}
        onChange={() => {
          setValue(MyRef.current.value);
        }}
      ></input>
      {Value}

      <div>
        <button onClick={() => handerAdd()}>Add</button>
        {num}- {MyRefvalue.current}
      </div>
    </div>
  );
}
