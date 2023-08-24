/**
 * @表单域组件
 */


/**
 * @父子通信版
 */
import React,{Component} from "react"
const Inputlabel = (props) => {
    return (
        <div>
            <label>{ props.label}</label>
            <input value={props.value} type={props.type} onChange={(event) => {
                props.onChange(event.target.value)
            }}></input>
        </div>
    )
}

 class App extends Component {
    state = {
            name: '前端猛男',
        password: '123',
        user: {
            a: 1,
            b:2
            }
            
    }
    //  登录
     login = () => {
         console.log(this.state)
        console.log(this.state.user)
    }
    // 重置
    rever = () => {
        this.setState({
            name: '',
            password:''
        })
    }
    render() {
        return (
            <div>
                <Inputlabel label='用户名' type="text" value={this.state.name} onChange={(value) => {
                    this.setState({
                        name: value,
                    })
                }}></Inputlabel>
                <Inputlabel label='密码' type="password" value={this.state.password} onChange={(value) => {
                     this.setState({
                        password:value
                    })
                }}></Inputlabel>

                <button onClick={this.login}>登录</button>
                <button onClick={this.rever}>重置</button>
            </div>
        )
    }
}
// export default App


/**
 * @ref版
 * @注解 ref属性放在组件上可以获取到这个的实例 从而可以操作组件内部的一些数据跟方法
 */
class Inputlabel2 extends Component {
    state = {
        InputValue:''
    }
    // 清空方法
    clear = ()=> {
        this.setState({ InputValue:''})
    }
    // 设置值方法
    SetInputValue = (value) => {
        this.setState({ InputValue:value})
    }
    render() {
        return (
            <div>
                <label>{ this.props.label}</label>
                <input value={this.state.InputValue} type={this.props.type} onChange={(event) => {
                        this.setState({
                            InputValue:event.target.value
                        })
                }}></input>
            </div>
        )
    }
}
class App2 extends Component {
    username = React.createRef()
    password = React.createRef()
    //  登录
    login = () => {
        this.username.current.SetInputValue('前端猛男')
        this.password.current.SetInputValue('123')
    }
    // 重置
    rever = () => {
        this.username.current.clear()
        this.password.current.clear()
    }
    render() {
        return (
            <div>
                <Inputlabel2 label='用户名' type='text' ref={this.username}></Inputlabel2>
                <Inputlabel2 label='密码' type='password' ref={this.password}></Inputlabel2>
                <button onClick={this.login}>登录</button>
                <button onClick={this.rever}>重置</button>
        </div>
        )
    }
}
export default App2