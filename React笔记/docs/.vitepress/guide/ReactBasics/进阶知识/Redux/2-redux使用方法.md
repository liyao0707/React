# 进阶知识 - Redux

#### 使用方法
>
>其实就是`useReducer + 订阅发布模式` 的结合,`createStore()` 有几个方法供我们使用，用来操作方法，获取仓库状态，订阅、发布信息，

+ **dispatch()** ：`发布者信息` 修改仓库状态的方法,传入不同的数据，更改不同状态在Reducer方法里面

+ **subscribe(()=>{})** : `订阅者信息` 利用callback回调函数，来操作逻辑.当 `dispatch方法`调用的时候，该方法里的callback函数会执行，从而可以操作一些逻辑来获取仓库状态来更改组件自己内部的状态。

+
+ **getState()** : 可以获取仓库里面的状态对象

+ **replaceReducer()** :

+ **createStore(Reducer,data)** : 创建全局状态仓库的方法，内部需要传入一个 `Reducer处理方法`，一个`初始化对象`

+ **销毁subscribe** ：`subscribe`订阅者信息 会返回一个实例对象函数，在用这个实例函数,就可以`销毁`这个订阅事件
` let unsubscribe = Store.subscribe(()=>{}) `
`unsubscribe() 销毁订阅者信息`
:::tip /Redux/Store |  /Redux/Action , 全局状态仓库|action操作对象

```
<!-- /Redux/Store.jsx   -->
import { legacy_createStore as createStore } from "redux";
// 创建Reducer处理方法 跟useReducer 一模一样的用法 有两个参数
// 一个老值 一个action操作 需要返回一个对象值
const Reducer = (oldData, Action) => {
  console.log(Action);
  // 创建一个新对象来操作数据 尽量不要在原数据操作
  const NewData = { ...oldData };
  switch (Action.type) {
    case "TabbleHide":
      NewData.TabbleShow = !NewData.TabbleShow;
      return NewData;
    case "TabbleShow":
      NewData.TabbleShow = !NewData.TabbleShow;
      return NewData;
    default:
      return oldData;
  }
};
// 初始化数据
const data = {
  TabbleShow: true,
};
// 创建全局状态仓库对象
const Store = createStore(Reducer, data); //跟useReducer一样 传一个方法 一个初始化对象
export default Store;


<!-- /Redux/Action.jsx  发布者需要传入action操作对象-->
//Store状态仓库的任务
// 底部栏关闭
export const TabbleHide = () => {
  return {
    type: "TabbleHide",
  };
};
// 底部栏显示
export const TabbleShow = () => {
  return {
    type: "TabbleShow",
  };
};
```

:::

:::tip /Tabble/index 底部栏组件

```
import React, { useMemo, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
//导入Redux全局管理仓库
import Store from "../../Redux/store";
import Style from "../CSS/tabber/index.module.css";
console.log(Style, "css变量");
console.log(Store, "全局状态管理仓库");
export default function Tabber() {
  let [Activeindex, SetActiveindex] = useState(0);
  let [routerlist] = useState([
    { name: "首页", url: "/Home" },
    { name: "我的", url: "/Wode" },
  ]);

  // 跳转方法
  const History = useHistory();
  const HanderRouter = useCallback((url) => {
    History.push(url);
  }, []);
  // 底部列表
  const tabberlist = useMemo(() => {
    return routerlist.map((item, index) => {
      return (
        <div
          className={`${Style.item} ${
            Activeindex === index ? Style.Active : ""
          }`}
          key={index}
          onClick={() => {
            SetActiveindex(index);
            HanderRouter(item.url);
          }}
        >
          {item.name}
        </div>
      );
    });
  }, [routerlist, Activeindex, HanderRouter]);

  //Store仓库的数据改变不会触发视图更新，所以我们还得将仓库状态转成私有状态
  //getState()方法可以拿到仓库状态对象
  const [TabbleShow, setTabbleShow] = useState(Store.getState().TabbleShow);
  // 订阅信息来修改状态
  Store.subscribe(() => {
    // 修改状态
    setTabbleShow(Store.getState().TabbleShow);
  });
  return <div className={Style.Tabber}>{TabbleShow && tabberlist}</div>;
}

```

:::

::: tip 路由组件&页面组件

```
<!-- /router/Routeriew.jsx 路由组件 -->
import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Wode from "./Wode";
import News from "./News";
import Notdefunt from "./404";
import Tabber from "./../tabber";
export default class Routerview extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Wode" component={Wode}></Route>
            <Route path="/News" component={News}></Route>
            <Redirect from="/" to="/Home" exact></Redirect>
            <Route component={Notdefunt}></Route>
          </Switch>
          <Tabber></Tabber>
        </HashRouter>
      </div>
    );
  }
}


<!-- /router/Home Home组件 -->
import React from "react";
export default function Home(props) {
  console.log(props);

  const HanderRouter = () => {
    props.history.push({ pathname: "/News", query: { id: "1" } });
  };
  return (
    <div>
      <p>Home</p>
      <button
        onClick={() => {
          HanderRouter();
        }}
      >
        前往新闻业
      </button>
    </div>
  );
}

<!-- /router/Wode.jsx Wode组件 -->
import React from "react";
export default function Wode() {
  return <div>Wode</div>;
}


<!-- /router/News.jsx News组件 -->
import React, { useEffect } from "react";
// 导出全局状态仓库
import Store from "../../Redux/store";
// 导入发布操作事件
import { TabbleHide, TabbleShow } from "../../Redux/Action";
export default function News(props) {
  console.log(props, "News");
  // 进入隐藏底部栏 离开显示底部栏
  useEffect(() => {
    // 发布者信息
    Store.dispatch(TabbleHide()); //隐藏
    return () => {
      Store.dispatch(TabbleShow()); //组件销毁 显示
    };
  }, []);
  return (
    <div>
      News
      <div>{props.location.query.id}</div>
    </div>
  );
}

```

:::

:::tip App.jsx 根组件

```

import React from "react";
import ReactDom from 'react-dom';
import Routerview from "./router/Routerview";
export default function App() {
  return (
    <div>
      <Routerview></Routerview>
    </div>
  );
}
ReactDom.render(<App/>,ducument.getElementById('root'))

```

:::

### 核心代码

```
<!-- store.jsx -->
import { legacy_createStore as createStore } from "redux";
const Reducer = (oldData, Action) => {
  const NewData = { ...oldData };
  switch (Action.type) {
    case "TabbleHide":
      NewData.TabbleShow = !NewData.TabbleShow;
      return NewData;
    case "TabbleShow":
      NewData.TabbleShow = !NewData.TabbleShow;
      return NewData;
    default:
      return oldData;
  }
};
const data = {
  TabbleShow: true,
};
// 创建全局状态仓库对象
const Store = createStore(Reducer, data); 
export default Store;

<!-- Tabble/index.jsx -->
import Store from "../../Redux/store";
//Store仓库的数据改变不会触发视图更新，所以我们还得将仓库状态转成私有状态,getState()方法可以拿到仓库状态对象
const [TabbleShow, setTabbleShow] = useState(Store.getState().TabbleShow);
  // 订阅信息来修改状态
Store.subscribe(() => {
  // 修改状态
  setTabbleShow(Store.getState().TabbleShow);
});

<!-- Tabble/News.jsx -->
import Store from "../../Redux/store";
useEffect(() => {
    // 发布者信息
    Store.dispatch(TabbleHide()); //隐藏
    return () => {
      Store.dispatch(TabbleShow()); //组件销毁 显示
    };
}, []);

<!-- Actions.jsx -->
// 底部栏关闭
export const TabbleHide = () => {
  return {
    type: "TabbleHide",
  };
};
// 底部栏显示
export const TabbleShow = () => {
  return {
    type: "TabbleShow",
  };
};
```
