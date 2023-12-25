/**
 * @Redux 全局状态管理
 * @注解 Redux相当于 订阅发布模式 + useReducer 的结合
 */

// combineReducers({reducer}) 模块化
import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import Thunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import TabbleReducer from "./Reducers/TabbleHide";
import AddReducer from "./Reducers/AddText";
import NewReducers from "./Reducers/NewReducers";
// combineReducers({reducer}) 模块化 将抽离出去的reducer 合并到一起成为一个大的reducer，方便模块化开发
const Reducer = combineReducers({
  TabbleReducer,
  AddReducer,
  NewReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //配置 redux-devtools 可视化追踪工具
// 创建全局状态仓库对象
const Store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(Thunk, ReduxPromise))
); //applyMiddleware()可以注册支持一些第三方的库来写异步action

// 原理
// const Store = QDMNCreateStore(Reducer, data);

export default Store;

/**
 * @redux基础原理
 */

function QDMNCreateStore(reducer, data = {}) {
  // 订阅数组
  const CallList = [];
  // 初始数据对象
  let State = reducer(data, {}); //第一次初始值就是 reducer方法内部默认返回的
  // 订阅方法
  function subscribe(callback) {
    CallList.push(callback);
  }
  // 发布方法
  function dispatch(action) {
    // 先调用reducer处理方法 获取到最新的数据 然后在callback通知
    State = reducer(State, action); //初始对象跟action操作对象  获取最新状态
    for (const i in CallList) {
      CallList[i] && CallList[i]();
    }
  }

  // 获取仓库对象方法
  function getState() {
    return State;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}
