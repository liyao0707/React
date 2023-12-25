// 地址修改信息

const AddReducer = (
  oldState = {
    AddText: "河南",
  },
  Action
) => {
  let NewState = { ...oldState };
  switch (Action.type) {
    case "AddText":
      NewState.AddText = Action.value;
      return NewState;
    default:
      return oldState;
  }
};

export default AddReducer;
