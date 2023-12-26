import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const D=JSON.parse('{"title":"基础知识 - 生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/14-生命周期/14.1-类组件生命周期-初始化.md","filePath":"guide/reactbasics/基础知识/14-生命周期/14.1-类组件生命周期-初始化.md"}'),o={name:"guide/reactbasics/基础知识/14-生命周期/14.1-类组件生命周期-初始化.md"},e=l(`<h1 id="基础知识-生命周期" tabindex="-1">基础知识 - 生命周期 <a class="header-anchor" href="#基础知识-生命周期" aria-label="Permalink to &quot;基础知识 - 生命周期&quot;">​</a></h1><h3 id="类组件的生命周期" tabindex="-1">类组件的生命周期 <a class="header-anchor" href="#类组件的生命周期" aria-label="Permalink to &quot;类组件的生命周期&quot;">​</a></h3><blockquote><p>每个组件都是有生命的 从创建到销毁这一系列的过程 叫做 &#39;生命周期&#39;;</p></blockquote><ul><li><strong>componentWillMount:</strong> <code>即将弃用</code></li></ul><blockquote><p>Dom树初始化创建前 这时候获取不到Dom节点 但是可以最后修改 state状态</p></blockquote><ul><li><strong>componentDidMount:</strong> <code>主用</code></li></ul><blockquote><p>Dom树初始化创建完毕 这时候可以获取到Dom节点 可以做一些请求 依赖dom节点 等等</p></blockquote><ul><li><strong>render:</strong></li></ul><blockquote><p>属于Dom执行中 正在对Dom树进行操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReacDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &quot;前端&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 初始化创建前</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentWillMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;WillMount&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;初始化前&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.getElementById(&quot;Myid&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 在执行render函数之前 还可以最后修改数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setState({ name: &quot;前端猛男&quot; });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 初始化创建后</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;DidMount&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;初始化后&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.getElementById(&quot;Myid&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;执行Dom处理中&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div id=&quot;Myid&quot;&gt;{this.state.name}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">UNSAFE_</p><p>UNSAFE_ 可以去除控制台黄色警告 官方不建议 用这个周期 应为优先级比较低 在执行的时候 会被其它高优先级的替代掉</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//在componentWillMount加上UNSAFE_ </span></span>
<span class="line"><span style="color:#A6ACCD;">UNSAFE_componentWillMount() { }</span></span></code></pre></div></div><h4 id="执行顺序" tabindex="-1">执行顺序 <a class="header-anchor" href="#执行顺序" aria-label="Permalink to &quot;执行顺序&quot;">​</a></h4><blockquote><p>componentWillMount → render → componentDidMount</p></blockquote>`,13),p=[e];function t(c,i,r,A,C,u){return n(),a("div",null,p)}const m=s(o,[["render",t]]);export{D as __pageData,m as default};
