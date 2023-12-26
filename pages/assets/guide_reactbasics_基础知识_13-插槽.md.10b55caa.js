import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识-插槽","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/13-插槽.md","filePath":"guide/reactbasics/基础知识/13-插槽.md"}'),p={name:"guide/reactbasics/基础知识/13-插槽.md"},e=l(`<h1 id="基础知识-插槽" tabindex="-1">基础知识-插槽 <a class="header-anchor" href="#基础知识-插槽" aria-label="Permalink to &quot;基础知识-插槽&quot;">​</a></h1><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><blockquote><p>类似 vue 的solt 可以在组件里面写入内容 在子组件那边利用<code>this.props.children</code>方法展示出来</p></blockquote><blockquote><p>可以动态组件内部内容 有一定的组件通讯效果</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReacDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Childer = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 插槽数据 在{ }插入的时候react帮我们做了处理</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props.children);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 直接插入会全部渲染出来 可以使用[索引] 来取需要的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {props.children}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {props.children[0]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    show: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 组件内部写内容|标签 叫做插槽 在 子组件通过this.props.children 方法可以渲染出值 固定方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Childer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">            onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">              this.setState({ show: !this.state.show });</span></span>
<span class="line"><span style="color:#A6ACCD;">            }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            111111</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;button&gt;222&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Childer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Childer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;button&gt;333&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;button&gt;4444&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Childer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        {this.state.show &amp;&amp; &quot;我出来了&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,5),t=[e];function o(c,r,C,i,A,d){return n(),a("div",null,t)}const h=s(p,[["render",o]]);export{y as __pageData,h as default};
