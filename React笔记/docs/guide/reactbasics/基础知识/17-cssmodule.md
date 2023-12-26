# 基础知识 - css模块化

### CSSModule
>
>`名字.module.css` css 也可以进行模块化，防止与协同开发的人员覆盖样式。只需要在创建css文件的时候，文件名后缀前面加上 `.module`就可以啦

> `名字.module.css` 文件导入进来是一个对象，里面是react替我们处理加密过的css类名。
>

>`:global(类名){ }` 如果想在`名字.module.css`里面使用公用全局样式的话，使用 `:global` 包裹一个类名就变回原来普通css文件的类名啦

```
<!-- list.module.css -->
.active {
    color: aqua;
}
//全局
:global(.Myactive){ 
    color:red;
}

<!-- App.jsx -->
improt ReactDom from 'react-dom';
import "./public/css/01-组件的样式.css";
//导入模块化样式
import style from "./public/css/list.module.css"; 
const App = ()=>{
    return (
      {/* 也可以也多个类名 空格拼接就行啦 */}
      <div className={style.active + " aaaa"}>css模块化</div>

      <div className="Myactive">我是:global</div>
    )
}

ReactDom.render("<App/>",document.getElementById('root'))
```
