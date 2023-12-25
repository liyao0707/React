import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk"; //配置thunk形式
import promise from "redux-promise"; //配置promise形式
import { HomeReducer } from "./Reducers/Home";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// 持久化储存配置
const persistConfig = {
  key: "MyRoot", //储存的key
  storage,
  // whitelist: ["HomeReducer"], //白名单 指定永久存储reducer的状态
  // blacklist: [""], // 黑名单，不持久化指定reducer的状态
};

// reducer模块化合并，将模块化的reducer 合并成一个大Reducer
const Reducer = combineReducers({ HomeReducer });

// 持久化存储Reducer
const persistedReducer = persistReducer(persistConfig, Reducer);

//配置 redux-devtools 可视化追踪工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 导出普通Store
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
);

// 导出持久存储的Store
export const persistor = persistStore(store);
