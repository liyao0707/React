import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const y=JSON.parse('{"title":"基础知识 生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/14-生命周期/14.3-类组件生命周期-销毁.md","filePath":"guide/reactbasics/基础知识/14-生命周期/14.3-类组件生命周期-销毁.md"}'),p={name:"guide/reactbasics/基础知识/14-生命周期/14.3-类组件生命周期-销毁.md"},e=l(`<h1 id="基础知识-生命周期" tabindex="-1">基础知识 生命周期 <a class="header-anchor" href="#基础知识-生命周期" aria-label="Permalink to &quot;基础知识 生命周期&quot;">​</a></h1><h3 id="类组件生命周期-销毁" tabindex="-1">类组件生命周期-销毁 <a class="header-anchor" href="#类组件生命周期-销毁" aria-label="Permalink to &quot;类组件生命周期-销毁&quot;">​</a></h3><blockquote><p><strong>componentWillUnmount：</strong> 在组件被销毁的时候 会触发这个周期 可以在这个周期里面做一些 清除定时器 解绑Dom事件 等等</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">class Child extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 组件初始化后生命周期</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(1111);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 组件销毁生命周期</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentWillUnmount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;销毁componentWillUnmount&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    clearInterval(this.timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;Child&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    show: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({ show: !this.state.show });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          点击</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {this.state.show &amp;&amp; &lt;Child&gt;&lt;/Child&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,4),o=[e];function t(c,r,i,C,A,D){return n(),a("div",null,o)}const _=s(p,[["render",t]]);export{y as __pageData,_ as default};
