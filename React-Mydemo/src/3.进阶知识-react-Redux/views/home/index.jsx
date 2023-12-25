import { connect } from "react-redux";
import {
  TextShow,
  TextHide,
  NewListThunk,
  NewListPromise,
  delectList,
  SetText,
} from "../../Redux/action";
import { useEffect, useMemo } from "react";
const Home = (props) => {
  console.log(props);
  let {
    SetText,
    text,
    status,
    list,
    TextShow,
    TextHide,
    NewListThunk,
    NewListPromise,
    delectList,
  } = props;
  useEffect(() => {
    if (props.list.length == 0) {
      // NewListThunk();
    }
  }, []);
  const newList = useMemo(() => {
    return list.map((item) => <li key={item.id}>{item.nm}</li>);
  }, [list]);
  return (
    <div>
      <div>{status && "内容"}</div>
      <button
        onClick={() => {
          TextShow();
        }}
      >
        显示文本
      </button>
      <button
        onClick={() => {
          TextHide();
        }}
      >
        隐藏文本
      </button>

      <div>
        <ul>{newList}</ul>
        <button
          onClick={() => {
            NewListThunk();
          }}
        >
          react-thunk方式获取
        </button>
        <button
          onClick={() => {
            NewListPromise();
          }}
        >
          react-promise方式获取
        </button>
        <button
          onClick={() => {
            delectList();
          }}
        >
          清空
        </button>
      </div>
      <div>{text} </div>
      <button
        onClick={() => {
          SetText("前端");
        }}
      >
        设置前端
      </button>
      <button
        onClick={() => {
          SetText("猛男");
        }}
      >
        设置猛男
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.HomeReducer,
  };
};
const mapDispacthToProps = {
  TextShow,
  TextHide,
  NewListThunk,
  NewListPromise,
  delectList,
  SetText,
};
export default connect(mapStateToProps, mapDispacthToProps)(Home);
// connect调用会返回一个函数,返回的函数需要传入一个组件，再次调用就可以将我们的组件变成高阶组件 - 容器组件
// connect需要两个参数，一个回调函数 跟 对象
// 回调函数需要内部需要return你需要传入你组件内需要的状态数据
// 对象里面定义你需要dispatch操作的方法 直接调用 无需在dispatch  connect帮您自动dispatch
