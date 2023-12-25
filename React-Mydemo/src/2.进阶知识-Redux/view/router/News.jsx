import React, { useEffect, useState } from "react";
// 导出全局状态仓库
import Store from "../../Redux/store";
// 导入发布操作事件
import { TabbleHide, TabbleShow, NewList, NewList2 } from "../../Redux/Action";
export default function News(props) {
  // 进入隐藏底部栏 离开显示底部栏
  const [newList, setnewList] = useState(Store.getState().NewReducers.newList);
  useEffect(() => {
    // 发布者信息
    Store.dispatch(TabbleHide()); //隐藏 同步请求 dispatch需要一个js对象
    // 如果没有列表数据 就去Action任务里面调用接口异步拿到数据
    if (Store.getState().NewReducers.newList.length === 0) {
      // 异步请求 dispatch 需要一个函数 redux-thunk
      //  发布异步信息
      Store.dispatch(NewList2());
    } else {
      console.log("Store有数据");
    }
    // 内部需要自己订阅 来接收数据  返回实例函数 调用实例函数可销毁订阅信息
    let unsubscribe = Store.subscribe(() => {
      console.log(Store.getState().NewReducers.newList);
      setnewList(Store.getState().NewReducers.newList);
    });
    return () => {
      Store.dispatch(TabbleShow()); //组件销毁 显示
      unsubscribe(); // 调用实例函数可销毁订阅信息
    };
  }, []);

  return (
    <div>
      News
      {/* <div>{props.location.query.id}</div> */}
      {newList.map((item) => {
        return <div key={item.id}>{item.videoName}</div>;
      })}
    </div>
  );
}
