import axios from "axios";

export const TextShow = () => {
  return {
    type: "show",
  };
};

export const TextHide = () => {
  return {
    type: "hide",
  };
};

export const SetText = (text) => {
  return {
    type: "text",
    text,
  };
};

// react-thunk写法
export const NewListThunk = () => {
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

// react-promise 写法
export const NewListPromise = () => {
  return axios
    .get(
      "/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&ci=239&channelId=4"
    )
    .then((res) => {
      return { type: "Newlist", newList: res.data.data.hot };
    });
};

// 清空
export const delectList = () => {
  return { type: "remove" };
};
