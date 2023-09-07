import React from "react";
// 导入自己封装的路由组件
import IndexRouter from "./view/一级路由与多级路由/IndexRouter";
import Footers from "./view/一级路由与多级路由/tabber/Footers/Footers";
export default function App() {
  return (
    <div>
      <IndexRouter>
        {/* 路由组件必须放在HashRoute组件里面 这边利用插槽放进去 */}
        <Footers></Footers>
      </IndexRouter>
    </div>
  );
}
