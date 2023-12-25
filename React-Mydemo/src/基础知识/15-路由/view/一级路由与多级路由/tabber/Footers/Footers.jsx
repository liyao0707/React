import React, { useMemo, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../../../../../public/css/01-组件的样式.css";
export default function Footers(props) {
  // console.log(props);
  const [list] = useState([
    { name: "首页", url: "/Home" },
    { name: "新闻", url: "/News" },
    { name: "我的", url: "/Wode/Wode" },
  ]);
  const [Acitiveindex, setAcitiveindex] = useState(0);
  // 声明式导航
  const RouteList = useMemo(
    () =>
      list.map((item) => (
        <li>
          {/* to要跳转的地址  activeClassName属性会自动检测高亮 */}
          <NavLink to={item.url} activeClassName="Myactive">
            {item.name}
          </NavLink>
        </li>
      )),
    []
  );

  // 创建Hooks useHistory钩子实例方法
  const History = useHistory();
  //编程式导航
  const Router2 = useMemo(
    () =>
      list.map((item, index) => (
        <li
          style={{ color: Acitiveindex === index ? "red" : "" }}
          key={index}
          onClick={() => {
            setAcitiveindex(index);
            History.push(item.url);
          }}
        >
          {item.name}
        </li>
      )),
    [Acitiveindex]
  );
  return (
    <div>
      <div style={{ margin: "20px" }}>
        声明式导航
        {RouteList}
      </div>
      <div style={{ margin: "20px" }}>
        编程式导航
        {Router2}
      </div>
    </div>
  );
}
