import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const u=JSON.parse('{"title":"基础知识-组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/12-组件通信/12.2-表单域组件.md","filePath":"guide/reactbasics/基础知识/12-组件通信/12.2-表单域组件.md"}'),p={name:"guide/reactbasics/基础知识/12-组件通信/12.2-表单域组件.md"},e=l(`<h1 id="基础知识-组件通信" tabindex="-1">基础知识-组件通信 <a class="header-anchor" href="#基础知识-组件通信" aria-label="Permalink to &quot;基础知识-组件通信&quot;">​</a></h1><h3 id="表单中的组件" tabindex="-1">表单中的组件 <a class="header-anchor" href="#表单中的组件" aria-label="Permalink to &quot;表单中的组件&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">父子通信写法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React,{Component} from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 表单组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Inputlabel = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;label&gt;{ props.label}&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input value={props.value} type={props.type} onChange={(event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                props.onChange(event.target.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }}&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;前端猛男&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            password:&#39;123&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //  登录</span></span>
<span class="line"><span style="color:#A6ACCD;">     login = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.state)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 重置</span></span>
<span class="line"><span style="color:#A6ACCD;">    rever = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            password:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Inputlabel label=&#39;用户名&#39; type=&quot;text&quot; value={this.state.name} onChange={(value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                        name:value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    })</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;&lt;/Inputlabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Inputlabel label=&#39;密码&#39; type=&quot;password&quot; value={this.state.password} onChange={(value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                     this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                        password:value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    })</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;&lt;/Inputlabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={this.login}&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={this.rever}&gt;重置&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">ref版写法</p><p><code>ref属性放在组件上可以获取到这个的实例 从而可以操作组件内部的一些数据跟方法</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React,{Component} from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class Inputlabel2 extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        InputValue:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 清空方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    clear = ()=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({ InputValue:&#39;&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 设置值方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    SetInputValue = (value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({ InputValue:value})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;label&gt;{ this.props.label}&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input value={this.state.InputValue} type={this.props.type} onChange={(event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                            InputValue:event.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                        })</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    username = React.createRef()</span></span>
<span class="line"><span style="color:#A6ACCD;">    password = React.createRef()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;!-- 通过ref来调用组件内部的方法来操作组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //  登录</span></span>
<span class="line"><span style="color:#A6ACCD;">    login = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.username.current.SetInputValue(&#39;前端猛男&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.password.current.SetInputValue(&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 重置</span></span>
<span class="line"><span style="color:#A6ACCD;">    rever = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.username.current.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.password.current.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Inputlabel2 label=&#39;用户名&#39; type=&#39;text&#39; ref={this.username}&gt;&lt;/Inputlabel2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Inputlabel2 label=&#39;密码&#39; type=&#39;password&#39; ref={this.password}&gt;&lt;/Inputlabel2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={this.login}&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={this.rever}&gt;重置&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,4),t=[e];function o(c,C,r,A,i,y){return n(),a("div",null,t)}const g=s(p,[["render",o]]);export{u as __pageData,g as default};
