/**
 * @useContext
 * @注解 跟类组件的写法差不多,父级没变, 只不过子级的写法不同了，只需要将创建的`createContext()`实例对象传入`useContext()`里面，
 * 返回的数据，就是供应商组件是定义的数据跟方法,直接调用就行了
 *
 * @createContext React.createContext() 可以创建一个跨组件实例对象
 * @Provider <React.createContext().Provider value={ { 数据|方法 } }> </React.createContext().Provider>
 * 用来包裹父组件根元素标签 标签上有个value属性 可以定义全局数据 子组件可以用里面定义的数据和方法
 */

import React, { useContext, useState } from "react";
// 创建context对象
const ContextDom = React.createContext();
const Childen1 = (props) => {
  const { name, content } = props;

  // 将创建的content对象传入进去,可以获得 或 供应商组件上 定义的方法 属性
  const Context = useContext(ContextDom);
  return (
    <div
      onClick={() => {
        //   调用形参上面 根元素provider定义的方法 将数据传递过去进行更改
        Context.ChangeContent(content);
      }}
    >
      {name}
    </div>
  );
};
const Childen2 = () => {
  // 将创建的content对象传入进去,可以获得 或 供应商组件上 定义的方法 属性
  const Context = useContext(ContextDom);
  console.log(Context);

  return <div>{Context.content}</div>;
};

export default function App() {
  const [list, setlist] = useState([
    { id: 1, name: "前端猛男1", content: "我是前端猛男1" },
    { id: 2, name: "前端猛男2", content: "我是前端猛男2" },
    { id: 3, name: "前端猛男3", content: "我是前端猛男3" },
    { id: 4, name: "前端猛男4", content: "我是前端猛男4" },
  ]);
  const [content, setcontent] = useState("");
  return (
    // 用实例对象的Provider属性 包裹根元素 标签上有一个value属性用来定义数据
    // 子组件可以访问到value传递过去的数据
    <ContextDom.Provider
      value={{
        title: "前端猛男",
        content: content, //动态绑定传递的值
        ChangeContent: (content) => {
          // 子组件调用此方法修改传递过来的数据 来更新组件
          setcontent(content);
        },
      }}
    >
      <div>
        {list.map((item) => {
          return <Childen1 key={item.id} {...item}></Childen1>;
        })}
        <Childen2></Childen2>
      </div>
    </ContextDom.Provider>
  );
}
