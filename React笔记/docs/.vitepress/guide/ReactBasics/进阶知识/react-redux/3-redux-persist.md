# 进阶知识 - redux-persist

## redux-persist
>
> 通过一些配置  就可以让store里面的数据持久化存储

### 方法 配置

+ **persistConfig** ： 配置信息
  + **key** ：用于存储的key值
  + **storage** 持久化存储引擎，默认是localStorage
  + **whitelist**： 数组。 白名单 指定永久存储reducer的状态
  + **blacklist**:  黑名单。 不持久化指定reducer的状态

+ **persistReducer()** ：两个参数 `一个配置 一个自定义的reducer` ，传入返回一个经过`persist` 处理过的新的 `persistReducer`

+ **persistStore()** : 传入store，返回一个持久化存储的对象

### 案例

```
<!-- store.jsx -->
import {  createStore, combineReducers,  } from "redux";
import { HomeReducer } from "./Reducers/Home";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// reducer模块化合并，将模块化的reducer 合并成一个大Reducer
const Reducer = combineReducers({ HomeReducer });

// 持久化储存配置
const persistConfig = {
  key: "MyRoot", //储存的key
  storage,
  whitelist: ["HomeReducer"], //白名单 指定永久存储reducer的状态
  blacklist: [""], // 黑名单，不持久化指定reducer的状态
};

// 持久化存储Reducer
const persistedReducer = persistReducer(persistConfig, Reducer);

// 导出普通Store
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
);
// 导出持久存储的Store
export const persistor = persistStore(store);


<!-- App.jsx -->
import { Provider } from "react-redux";
import { store, persistor } from "../Redux/store";
import Home from "./home";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  return (
    <Provider store={store}>
     <!-- 包裹根元素 -->
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};
export default App;

```
