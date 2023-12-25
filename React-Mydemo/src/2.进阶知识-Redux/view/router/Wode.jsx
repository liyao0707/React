import React, { useState } from "react";
import Store from "../../Redux/store";
import { AddText } from "../../Redux/Action";

export default function Wode(props) {
  let [list] = useState(["河南", "上海", "深圳", "杭州"]);
  const Handeritem = (item) => {
    // 修改地址信息
    Store.dispatch(AddText(item)); //同步情况下 dispatch方法是需要一个js对象
    props.history.push("/Home");
  };
  const listview = list.map((item) => {
    return (
      <li style={{ margin: 10 }} key={item} onClick={() => Handeritem(item)}>
        {item}
      </li>
    );
  });
  console.log(listview, "111111111");
  return (
    <div>
      <ul>{listview}</ul>
    </div>
  );
}
