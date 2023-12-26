import{_ as s,o as n,c as a,S as e}from"./chunks/framework.6bb1a485.js";const _=JSON.parse('{"title":"基础知识 - 富文本","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/09-富文本.md","filePath":"guide/reactbasics/基础知识/09-富文本.md"}'),l={name:"guide/reactbasics/基础知识/09-富文本.md"},t=e(`<h1 id="基础知识-富文本" tabindex="-1">基础知识 - 富文本 <a class="header-anchor" href="#基础知识-富文本" aria-label="Permalink to &quot;基础知识 - 富文本&quot;">​</a></h1><h3 id="dangerouslysetinnerhtml" tabindex="-1">dangerouslySetInnerHTML <a class="header-anchor" href="#dangerouslysetinnerhtml" aria-label="Permalink to &quot;dangerouslySetInnerHTML&quot;">​</a></h3><blockquote><p>可以将一段Html标签文本转换成为标签</p></blockquote><ul><li><strong>用法 ：</strong> 标签上有个属性 <code>dangerouslySetInnerHTML</code> 他接收一个 <code>对象</code> 对象里面有个属性 <code>__html</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div dangerouslySetInnerHTML = { { __html:文本值 } }&gt; &lt;/div&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        content:&#39;&lt;ul&gt;&lt;li&gt;1111&lt;/li&gt;&lt;li&gt;222&lt;/li&gt;&lt;li&gt;333&lt;/li&gt;&lt;/ul&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            //富文本 dangerouslySetInnerHTML属性  </span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div dangerouslySetInnerHTML={</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    __html:this.state.content</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,6),o=[t];function p(c,r,i,d,C,A){return n(),a("div",null,o)}const y=s(l,[["render",p]]);export{_ as __pageData,y as default};
