import{_ as s,o as n,c as e,S as a}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识-ref应用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/07-ref应用.md","filePath":"guide/reactbasics/基础知识/07-ref应用.md"}'),l={name:"guide/reactbasics/基础知识/07-ref应用.md"},t=a(`<h1 id="基础知识-ref应用" tabindex="-1">基础知识-ref应用 <a class="header-anchor" href="#基础知识-ref应用" aria-label="Permalink to &quot;基础知识-ref应用&quot;">​</a></h1><h3 id="ref应用" tabindex="-1">ref应用 <a class="header-anchor" href="#ref应用" aria-label="Permalink to &quot;ref应用&quot;">​</a></h3><ul><li><strong>标签上设置 <code>ref=&#39;MyRef&#39;</code></strong></li></ul><blockquote><p><code>&lt;div ref=&#39;MyRef&#39;&gt;&lt;/div&gt;</code> 可以通过 <code>this.refs.MyRef</code> ref可以获取到应用的真实Dom</p></blockquote><ul><li><strong>组件上设置 <code>ref=&#39;MyRef&#39;</code></strong></li></ul><blockquote><p><code>&lt;NavBar ref=&#39;MyRef&#39;&gt;&lt;/NavBar&gt;</code> 可以通过 <code>this.refs.MyRef</code> ref可以获取到组件对象</p></blockquote><ul><li><strong>新的写法</strong> <code>React.createRef()</code></li></ul><blockquote><ol><li><code>MyRef2 = React.createRef()</code> 创建一个ref应用</li><li><code>&lt;div ref = { this.MyRef2 } &gt;&lt;/div&gt;</code> 挂载到ref上</li><li><code>this.MyRef2.current</code> 调用 里面有个 <code>current</code>属性 它的值就是 Dom节点 | 组件对象</li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"> // 创建一个ref应用 将MyRef属性挂载到Dom节点上</span></span>
<span class="line"><span style="color:#A6ACCD;">  MyRef2 = React.createRef()</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 写法一  直接写Ref属性  不推荐*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input ref=&quot;MyRef&quot;&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* this.refs.MyRef 调用 */}   </span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 严格模式下会报错 vscode提示即将弃用 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={ ()=&gt;{ console.log(this.refs.MyRef) }}&gt;add&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 写法二 挂载Ref应用  新的写法 推荐*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input ref={this.MyRef2}&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* this.MyRef2.current 调用 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={ ()=&gt;{ console.log(this.MyRef2.current) }}&gt;add&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 非严格模式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;, document.getElementById(&#39;root&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 严格模式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 开启严格模式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;React.StrictMode&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;App/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/React.StrictMode&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,9),o=[t];function p(c,r,i,C,A,d){return n(),e("div",null,o)}const u=s(l,[["render",p]]);export{y as __pageData,u as default};
