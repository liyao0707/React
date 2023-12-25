const Tabble = (
  oldData = {
    TabbleShow: true,
  },
  Action
) => {
  console.log(Action);
  // 创建一个新对象来操作数据 尽量不要在原数据操作
  const NewData = { ...oldData };
  switch (Action.type) {
    case "TabbleHide":
      NewData.TabbleShow = !NewData.TabbleShow;
      return NewData;
    case "TabbleShow":
      NewData.TabbleShow = !NewData.TabbleShow;
      return NewData;
    default:
      return oldData;
  }
};
export default Tabble;
