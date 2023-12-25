import React from "react";

export default function News(props) {
  console.log(props, "News文件");
  // 动态路由在match属性里面取
  // const { id, name } = props.match.params;

  // query 在location.query里面取
  // const { id, name } = props.location.query;

  // state 在location.state里面取
  const { id, name } = props.location.state;

  return (
    <div>
      新闻
      <div>id：{id}</div>
      <div>name：{name}</div>
    </div>
  );
}
