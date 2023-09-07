import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import list1 from "./Home/list1";
import list2 from "./Home/list2";
import NotFounted from "./NotFounted";

export default function Home() {
  return (
    <div>
      {/* 当前页面嵌套了两个路由 */}
      <Switch>
        <Route path="/Home/list1" component={list1}></Route>
        <Route path="/Home/list2" component={list2}></Route>

        {/* 如果从匹配到从/Home页面过来，就重定向到list1组件 */}
        <Redirect from="/Home" to="/Home/list1" exact></Redirect>

        {/* 如果没有匹配的路由 显示404组件 */}
        <Route component={NotFounted}></Route>
      </Switch>
    </div>
  );
}
