# 进阶知识 - Redux

### 将模块抽离合并 combineReducers
>
> Redux `combineReducers()`可以将模块化抽离的 reducer合并到一起。每一块Reducer处理方法可以是一个单独的文件，最后在合并到一起成为一个新的大Reducer

combineReducers({reducer1,reducer2})

```

<!-- /Reducers/AddText -->
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

<!-- /Reducers/TabbleHide.jsx -->
const Tabble = (
  oldData = {
    TabbleShow: true,
  },
  Action
) => {
  console.log(Action);
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



<!-- store.js -->
import { legacy_createStore as createStore, combineReducers } from "redux";
import TabbleReducer from "./Reducers/TabbleHide";
import AddReducer from "./Reducers/AddText";
// combineReducers({reducer}) 模块化 将抽离出去的reducer 合并到一起成为一个大的reducer，方便模块化开发
const Reducer = combineReducers({
  TabbleReducer,
  AddReducer,
});
// 创建全局状态仓库对象
const Store = createStore(Reducer);

<!-- 使用数据 -->
Store.getState().AddReducer.AddText
Store.getState().TabbleReducer.TabbleShow
```
