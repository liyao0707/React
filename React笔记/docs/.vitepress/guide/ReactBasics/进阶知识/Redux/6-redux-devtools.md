# 进阶知识 redux-devTools

### redux-devTools插件
>
> 浏览器可视化redux数据追踪插件，配置好之后可以在浏览器上可视化查看数据的变化
>
+ **浏览器插件市场安装** ：搜索`redux-devTools`，查询并安装

+ **项目配置** ：在项目`store文件`里面 配置如下代码
  
```
import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";

//配置 redux-devtools 可视化追踪工具 做环境判断
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建全局状态仓库对象
const Store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(Thunk, ReduxPromise))
); //包裹中间件插件

```
