// 导入react 组件
import React from 'react';

/**
 * @类组件
 * @注意 ：必须继承React.Component 且里面必须有一个render方法 render方法里面需要有一个返回值
 */
// 只有继承的话它才是一个类组件 不继承就是一个简单的类
class App extends React.Component{
    // 必须要有一个render方法 并需要返回标签 | 内容
    render() {
        return (
            <div>我是App类组件</div>
        )
    }
}

export default App