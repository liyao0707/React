/**
 * @路由
 * @HashRouter 路由模式组件会创建Hash模式的路由
 * @Route 路由组件 会创建路由表出来 属性：`path`: 路由url地址, `component`: 文件路径地址
 * @Switch 路由开关组件 React会自动帮我们检测重定向地址 最好包裹着路由 配套使用
 * @Redirect 重定向组件 from 设置模糊匹配内容 去匹配url的内容,to 匹配成功要去往的页面
 */
import React from "react";
// 路由模块
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// 页面
import Home from "./tabber/Home";
import News from "./tabber/news";
import Wode from "./tabber/wode";
import NotFounted from "./tabber/NotFounted";
export default function IndexRouter(props) {
  // console.log(props);
  const isToken = () => {
    return localStorage.getItem("token");
  };
  return (
    <div>
      {/* Hash模式 */}
      <HashRouter>
        {/* 被Switch组件包裹之后，React会自动帮我们检测重定向地址 */}
        <Switch>
          {/* 路由表 */}
          <Route path="/Home" component={Home}></Route>
          {/* render属性 接收一个回调函数必需返回一个组件 可以在里面处理逻辑 从而达到拦截效果 */}
          <Route
            path="/Wode/Wode"
            render={() =>
              isToken() ? <Wode /> : <Redirect from="/" to="/"></Redirect>
            }
          ></Route>

          {/* 动态路由传参需要来path上以/:key名的形式来定义占位数据 */}
          {/* <Route path="/News/:id/:name" component={News}></Route> */}
          {/* 路由传参 正常的路径就行 不需要占位符 */}
          <Route path="/News" component={News}></Route>

          {/* 模糊匹配  from模糊匹配内容  to去往的地址 */}
          {/* 当url有模糊匹配的内容时 他会去往to设置的页面 */}
          {/* <Redirect from={"/"} to={"/Home"}></Redirect> */}

          {/* 精准匹配 exact属性  只有完全匹配才会去往 */}
          <Redirect from="/" to="/Home" exact></Redirect>

          {/* 当没有匹配的路由时 path=""|"*" 或不设置 会去往这个页面 */}
          <Route path="" component={NotFounted}></Route>
        </Switch>

        {/* 利用插槽将footer组件包裹在HashRouret组件内 */}
        {props.children}
      </HashRouter>
    </div>
  );
}
