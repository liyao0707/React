/**
 * @useReducer
 * @注解 Hooks内部提供的一种通讯方式 在多层嵌套组件中 需要 跟`useContext` 配合
 *  `useReducer`需要传递两个数据 一个`处理方法` 一个 `初始化数据对象` 他会返还一个
 *  数组里面有两个值，`数据` 跟 `修改调用方法`  这个`修改方法` 需要传入一个对象,调用 `修改方法`,
 *  在`处理方法`里面接收传递过来的对象, 根据传过的对象修改数据,并返回一个数据对象就可以了
 */

import React, { useReducer, useContext } from "react";

// 修改方法  两个参数 1.老数据值 2.传过来的数据对象
// 在里面修改数据 需要返回一个新的数据对象
const Reducer = (oldState, action) => {
  console.log(oldState, action);
  // 不要在原来的数据上改，搞一个新数据
  const newState = { ...oldState };
  switch (action.Type) {
    case "jian":
      newState.num--;
      return newState;
    case "jia":
      newState.num++;
      return newState;
    default:
      return oldState;
  }
};

// 初始化数据对象
const interReducer = {
  num: 0,
};
function App() {
  console.log(useReducer(Reducer, interReducer));
  // 传入方法 跟初始化数据对象 会返回一个数组 里面包含初始化数据 跟 修改调用方法
  const [state, dispath] = useReducer(Reducer, interReducer);
  return (
    <div>
      {/* 调用方法 传递数据对象过去 */}
      <button
        onClick={() => {
          dispath({
            Type: "jian",
          });
        }}
      >
        减
      </button>
      {state.num}
      <button
        onClick={() => {
          dispath({
            Type: "jia",
          });
        }}
      >
        加
      </button>
    </div>
  );
}
// export default App

/**
 * @组件通信  useReducer + useContext
 */
// 方法
const Reducer2 = (oldState, action) => {
  let newlist = { ...oldState };
  newlist.content = action.value;
  return newlist;
};
// 初始化数据
const interState2 = {
  list: [
    { id: 1, name: "前端猛男1", content: "我是前端猛男1" },
    { id: 2, name: "前端猛男2", content: "我是前端猛男2" },
    { id: 3, name: "前端猛男3", content: "我是前端猛男3" },
    { id: 4, name: "前端猛男4", content: "我是前端猛男4" },
  ],
  content: "",
};
// 创建context对象
const ContextDom = React.createContext();
const Childen1 = (props) => {
  const { name, content } = props;
  // 从上面结构出来dispath方法 调用并传递过去修改值
  const { dispath } = useContext(ContextDom);
  return (
    <button
      onClick={() => {
        dispath({ value: content });
      }}
    >
      {name}
    </button>
  );
};
const Childen2 = () => {
  // 解构state数据, 在根元素里面调用
  const { state } = useContext(ContextDom);
  return <div>{state.content}</div>;
};
function App2() {
  const [state, dispath] = useReducer(Reducer2, interState2);
  return (
    // 直接将state状态 跟 dispath 方法放上去
    <ContextDom.Provider
      value={{
        state,
        dispath,
      }}
    >
      <div>
        {state.list.map((item) => {
          return <Childen1 key={item.id} {...item}></Childen1>;
        })}
        <Childen2></Childen2>
      </div>
    </ContextDom.Provider>
  );
}
export default App2;
