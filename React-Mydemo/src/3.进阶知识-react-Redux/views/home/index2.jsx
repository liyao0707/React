/**
 * @原理 react-redux
 */

const Mycom = (props) => {
  console.log(props);
  return <div>自定义高阶组件</div>;
};
const MyConnect = (cb, obj) => {
  // 获取返回的值
  const value = cb();
  // 返回一个函数 接收一个组件
  return (Mycomponent) => {
    //  把组件本身的props 属性传递给内部组件
    return (props) => {
      return (
        <div>
          <Mycomponent {...value} {...props} {...obj}></Mycomponent>;
        </div>
      );
    };
  };
};
export default MyConnect(
  () => {
    return { a: 1, b: 2 };
  },
  { c() {}, d() {} }
)(Mycom);
