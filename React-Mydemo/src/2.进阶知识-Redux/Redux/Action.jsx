/**
 * @Store状态仓库的任务
 *
 * @同步请求 返回一个js对象
 * @异步请求 返回一个函数
 */
import axios from "axios";

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

// 地区显示文字

export const AddText = (value) => {
  return {
    type: "AddText",
    value,
  };
};

// redux-thunk写法
// 异步请求 applyMiddleware(Thunk) 注册之后Action 里面可以返回一个函数
export const NewList = () => {
  // 异步请求方法在这里写
  return (dispatch) => {
    axios
      .get(
        "/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&ci=239&channelId=4"
      )
      .then((res) => {
        dispatch({ type: "Newlist", newList: res.data.data.hot });
      });
  };
};

// redux-promise写法
// 返回一个promise对象就可以啦  源码内部会调用then方法 最终拿到一个对象
export const NewList2 = async () => {
  // 异步请求方法在这里写
  return axios
    .get(
      "/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&ci=239&channelId=4"
    )
    .then((res) => {
      return { type: "Newlist", newList: res.data.data.hot };
    });
};
// redux-promise async await写法
export const NewList3 = async () => {
  // 异步请求方法在这里写
  const list = await axios
    .get(
      "/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&ci=239&channelId=4"
    )
    .then((res) => {
      return { type: "Newlist", newList: res.data.data.hot };
    });
  return list;
};
