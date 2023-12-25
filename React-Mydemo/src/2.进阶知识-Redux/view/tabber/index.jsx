import React, { useMemo, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
//导入Redux全局管理仓库
import Store from "../../Redux/store";
import Style from "../CSS/tabber/index.module.css";
console.log(Store.getState(), "全局状态管理仓库");
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
  const [TabbleShow, setTabbleShow] = useState(
    Store.getState().TabbleReducer.TabbleShow
  );
  // 订阅信息来修改状态
  Store.subscribe(() => {
    // 修改状态
    setTabbleShow(Store.getState().TabbleReducer.TabbleShow);
  });
  return <div className={Style.Tabber}>{TabbleShow && tabberlist}</div>;
}
