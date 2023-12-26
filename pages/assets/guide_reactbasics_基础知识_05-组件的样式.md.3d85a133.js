import{_ as s,o as a,c as n,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识-组件的样式","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/05-组件的样式.md","filePath":"guide/reactbasics/基础知识/05-组件的样式.md"}'),p={name:"guide/reactbasics/基础知识/05-组件的样式.md"},e=l(`<h1 id="基础知识-组件的样式" tabindex="-1">基础知识-组件的样式 <a class="header-anchor" href="#基础知识-组件的样式" aria-label="Permalink to &quot;基础知识-组件的样式&quot;">​</a></h1><h3 id="插值" tabindex="-1">插值 <a class="header-anchor" href="#插值" aria-label="Permalink to &quot;插值&quot;">​</a></h3><ul><li><strong>插值写法 { }</strong></li></ul><blockquote><p>如果想在标签里面 添加 <code>变量|运算|表达式</code> 等等 需要用到 插值写法{ } <code>{变量|运算|表达式 }</code></p></blockquote><div class="tip custom-block"><p class="custom-block-title">插值写法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 变量</span></span>
<span class="line"><span style="color:#A6ACCD;">        let MyName = &#39;前端猛男&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            //插值写法</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                {10 + 20}</span></span>
<span class="line"><span style="color:#A6ACCD;">                {MyName}</span></span>
<span class="line"><span style="color:#A6ACCD;">                {true?&#39;true&#39;:&#39;false&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt; , document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="组件的样式" tabindex="-1">组件的样式 <a class="header-anchor" href="#组件的样式" aria-label="Permalink to &quot;组件的样式&quot;">​</a></h3><ul><li><strong>行内样式</strong></li></ul><blockquote><p>React 如果想在虚拟DOM中写入样式 必须在 <code>插值语法</code> 里面写入一个 <code>样式对象</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 样式对象 耦合属性需要驼峰命名 </span></span>
<span class="line"><span style="color:#A6ACCD;">        let StyleObj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            backgroundColor: &#39;red&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            fontSize:20</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            //需要在插值写法里面写入一个样式对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 写法一 插入样式对象  行内样式*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div style={StyleObj}&gt;插入样式对象&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 写法二 直接写入对象  行内样式*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div style={{ backgroundColor: &#39;#000&#39;,color:&#39;#fff&#39;}}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     直接写入对象</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt; , document.getElementById(&#39;root&#39;))</span></span></code></pre></div><ul><li><strong>外部样式</strong></li></ul><blockquote><p>可以将css文件导入进来 直接用样式名 <code>注意： class名 要写成 className</code> 应为class 已经被 Es6类关键字 暂用啦</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- css文件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.active {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#MyName {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: aqua;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- JSX文件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//导入css文件</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;css文件路径&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            //直接写样式名</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                //class → className</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div className=&#39;active&#39;&gt;外部样式class名&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div id=&#39;MyName&#39;&gt;外部样式id名&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt; , document.getElementById(&#39;root&#39;))</span></span></code></pre></div><p>注意： <code>class</code> 要写成 <code>className</code></p><h3 id="见解" tabindex="-1">见解 <a class="header-anchor" href="#见解" aria-label="Permalink to &quot;见解&quot;">​</a></h3><blockquote><p>React推荐我们使用 <code>行内样式</code> 应为React觉得每个组件都是一个独立的整体</p></blockquote><blockquote><p>但是在开发中我们使用<code>外部样式</code>的机会更多 需要注意的就是 <code>class → className</code> (应为毕竟是在写JS代码 会受到JS的规则 他认为 class 是 关键字 (类))</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div className=&#39;active&#39;&gt;外部样式class名&lt;/div&gt;</span></span></code></pre></div>`,17),o=[e];function c(t,r,i,C,A,d){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{D as __pageData,m as default};
