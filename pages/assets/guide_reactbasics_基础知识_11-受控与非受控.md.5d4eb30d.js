import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const y=JSON.parse('{"title":"基础知识-受控组件与非受控组件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/11-受控与非受控.md","filePath":"guide/reactbasics/基础知识/11-受控与非受控.md"}'),e={name:"guide/reactbasics/基础知识/11-受控与非受控.md"},t=l(`<h1 id="基础知识-受控组件与非受控组件" tabindex="-1">基础知识-受控组件与非受控组件 <a class="header-anchor" href="#基础知识-受控组件与非受控组件" aria-label="Permalink to &quot;基础知识-受控组件与非受控组件&quot;">​</a></h1><h3 id="表单中的受控组件与非受控组件" tabindex="-1">表单中的受控组件与非受控组件 <a class="header-anchor" href="#表单中的受控组件与非受控组件" aria-label="Permalink to &quot;表单中的受控组件与非受控组件&quot;">​</a></h3><blockquote><p>可以把input 理解为是一个组件是 react封装的一个组件 通过 <code>ref</code>属性拿到的数据 <code>是非受控的</code> 通过<code>state</code>状态 双向绑定的 是 <code>受控的</code></p></blockquote><blockquote><p><strong>简单理解为</strong>: 被state状态所操控的组件 叫做<code>受控组件</code> 没有被state状态操控的组件 叫做<code>非受控组件</code></p><p><strong>广泛说法为：</strong> React组件的数据渲染是否被调用者传递的<code>props</code>完全控制， 控制则为受控组件 否则非受控组件</p></blockquote><h5 id="_1-非受控组件" tabindex="-1">1. 非受控组件 <a class="header-anchor" href="#_1-非受控组件" aria-label="Permalink to &quot;1. 非受控组件&quot;">​</a></h5><blockquote><p>通过<code>ref属性</code>获取值 非受控组件虽然可以使用defaultValue设置默认值 但是value属性是写死绑定的 无法更改 且无法传递子组件数据 视图数据还不会更新</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    MyInput  = React.createRef()</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input ref={this.MyInput} type=&quot;text&quot; value=&#39;1111&#39; defaultValue=&#39;默认值&#39; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    console.log(this.MyInput.current.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;确认&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.MyInput.current.value = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;重置&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Child value={this.MyInput.current}&gt;&lt;/Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const Child = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(props.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;我是子组件child 接收到值：{ props.value}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div><h5 id="_2-受控组件" tabindex="-1">2. 受控组件 <a class="header-anchor" href="#_2-受控组件" aria-label="Permalink to &quot;2. 受控组件&quot;">​</a></h5><blockquote><p>基于<code>state状态</code> 让react来处理的组件 数据双向绑定 属于受控组件</p></blockquote><blockquote><p>通过<code>state状态</code> 给value绑定状态值 利用<code>onChange事件</code>和<code>setState方法</code> 去修改状态里面的值 ,从而达到双向数据绑定 是被React状态所控制的 所以叫 <code>受控组件</code> 也可以传递子组件数据 触发组件render()函数更新</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">         InputValue:&#39;默认值&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 在react里面 onChange跟onInput 事件的效果是一样的 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 利用onChange事件 把输入框里面的值赋值给状态 状态接受到之后 在重新赋值给input组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input value={this.state.InputValue} onChange={(event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                    InputValue:event.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    console.log(this.state.InputValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;确认&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                    InputValue:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;重置&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Child value={this.state.InputValue}&gt;&lt;/Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Child = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(props.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;我是子组件child 接收到值：{ props.value}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h3><p>在React input组件中 <code>onChange事件</code> 跟 <code>onIpunt事件</code> 的效果是一样的</p>`,13),p=[t];function o(c,r,i,C,A,d){return n(),a("div",null,p)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
