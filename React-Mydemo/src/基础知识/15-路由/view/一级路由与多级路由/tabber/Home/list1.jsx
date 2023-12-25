import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../../../../../public/css/01-组件的样式.css";
import style from "../../../../../../public/css/list.module.css";

import axios from "axios";
export default function List(props) {
  console.log(style);
  // 请求数据
  useEffect(() => {
    axios
      .get(
        "/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&ci=239&channelId=4"
      )
      .then((res) => {
        console.log(res, "请求数据");
      });
  }, []);

  console.log(props);
  const [list, setlist] = useState([
    { name: "前端猛男", id: 1 },
    { name: "前端猛男2", id: 2 },
    { name: "前端猛男3", id: 3 },
  ]);

  // 1. 动态路由传参
  const listView = useMemo(() => {
    return list.map((item) => {
      return (
        <li key={item.id}>
          {/* 动态路由传参 */}
          <NavLink
            to={`/News/${item.id}/${item.name}`}
            activeClassName="Myactive"
          >
            {item.name}
          </NavLink>
        </li>
      );
    });
  }, [list]);

  // 2. 路由传参 query | state
  const Hisotry = useHistory();
  const listView2 = useMemo(() => {
    return list.map((item) => {
      return (
        <li key={item.id} onClick={() => RouterPush(item)}>
          {item.name}
        </li>
      );
    });
  }, [list]);
  const RouterPush = (item) => {
    // 1. query传参
    // props.history.push({
    //   pathname: "/News",
    //   query: { id: item.id, name: item.name },
    // });
    // 2. state传参
    Hisotry.push({
      pathname: "/News",
      state: { id: item.id, name: item.name },
    });
  };
  return (
    <div>
      <ul>
        动态路由传参:
        {listView}
      </ul>
      <ul>
        路由传参( query | state):
        {listView2}
      </ul>
      {/* 也可以多个类名 空格拼接就行啦 */}
      <div className={style.active + " aaaa"}>css模块化</div>

      <div className="Myactive">我是:global</div>
    </div>
  );
}
