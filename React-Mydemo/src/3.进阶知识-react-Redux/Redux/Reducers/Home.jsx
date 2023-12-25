let data = { status: true, list: [], text: "前端" };
export const HomeReducer = (oldData = data, action) => {
  let newData = { ...oldData };
  switch (action.type) {
    case "show":
      newData.status = true;
      return newData;
    case "hide":
      newData.status = false;
      return newData;
    case "Newlist":
      newData.list = action.newList;
      return newData;
    case "remove":
      newData.list = [];
      return newData;
    case "text":
      newData.text = action.text;
      return newData;
    default:
      return oldData; //用redux-persist持久化存储的时候  切记一定要返回老值
  }
};
