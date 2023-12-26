import{_ as s,o as n,c as a,S as e}from"./chunks/framework.6bb1a485.js";const _=JSON.parse('{"title":"基础知识 - 性能提升","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/14-生命周期/14.6-性能提升.md","filePath":"guide/reactbasics/基础知识/14-生命周期/14.6-性能提升.md"}'),l={name:"guide/reactbasics/基础知识/14-生命周期/14.6-性能提升.md"},t=e(`<h1 id="基础知识-性能提升" tabindex="-1">基础知识 - 性能提升 <a class="header-anchor" href="#基础知识-性能提升" aria-label="Permalink to &quot;基础知识 - 性能提升&quot;">​</a></h1><h3 id="性能提升" tabindex="-1">性能提升 <a class="header-anchor" href="#性能提升" aria-label="Permalink to &quot;性能提升&quot;">​</a></h3><ul><li><strong>shouldComponentUpdate</strong></li></ul><blockquote><p>控制组件 自身 或 子组件 是否需要更新，尤其是在子组件多的情况下，需要进行优化</p></blockquote><ul><li><strong>PureComponent</strong></li></ul><blockquote><p>React提供了这个方法, 他会自动帮我们检测,新老属性|状态 ,做对比来决定<code>shouldcomponentUpdata</code> ,来返回true 跟 false ,从而决定要不要呼叫<code>render</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { PureComponent, Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends PureComponent {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = { title: 1 };</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidUpdate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;componentDidMount&quot;);//多次点击不会执行</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">              title: &quot;前端猛男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          点击</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {this.state.title}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;);)</span></span></code></pre></div>`,7),o=[t];function p(c,r,i,C,A,d){return n(),a("div",null,o)}const D=s(l,[["render",p]]);export{_ as __pageData,D as default};
