# 进阶知识 - Redux

### Redux原理

```

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


const data = {};
const reducer = (oldstate,action)=>{
    ......操作
    return oldstate
}
const Store = QDMNCreateStore(reducer,data)
```
