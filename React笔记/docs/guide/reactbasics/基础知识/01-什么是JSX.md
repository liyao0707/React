# 基础知识-什么是JSX

+ **什么是JSX？**

> 在React里面有一种语法叫 `JSX` , JSX将HTML语法直接加入到Js中，在通过翻译器转换到纯JS后再浏览器执行。
> 在JavaScript里面写标签 语法叫做JSX  `JSX = JavaScript + XML`
> 编译转换是由Babel的JSX编译器实现
:::tip Babel转义过程

```
import React from 'react';
import ReactDom from 'react-dom';
<!-- 转义前 -->
ReactDom.render(<div>我是内容</div>,document.getElementById('root'))
<!-- 转义后 -->
ReactDom.render(React.createElement('div',
{   id:'ID名',
    class:'class名'
},'我是内容'),
document.getElementById('root'))
```
<!-- ![Alt text](./../../public/images/JSX注解.jpg) -->
:::
