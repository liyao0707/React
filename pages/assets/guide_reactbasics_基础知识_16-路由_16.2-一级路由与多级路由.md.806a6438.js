import{_ as s,o as n,c as a,S as t}from"./chunks/framework.6bb1a485.js";const m=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.2-一级路由与多级路由.md","filePath":"guide/reactbasics/基础知识/16-路由/16.2-一级路由与多级路由.md"}'),l={name:"guide/reactbasics/基础知识/16-路由/16.2-一级路由与多级路由.md"},e=t(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="一级路由与多级路由" tabindex="-1">一级路由与多级路由 <a class="header-anchor" href="#一级路由与多级路由" aria-label="Permalink to &quot;一级路由与多级路由&quot;">​</a></h3><blockquote><p>其实都是一样的,最好遵循我们的目录结构去走,方便我们后期维护</p></blockquote><ul><li><strong>HashRouter</strong> ： 路由模式组件会创建Hash模式的路由</li><li><strong>Route</strong> ：路由组件，会创建路由表出来。 属性： <code>path</code>: 路由url地址, <code>component</code>: 文件路径地址</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 路由组件 IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 路由模块</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./tabber/news&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./tabber/wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* Hash模式 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 路由表 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;!-- 一级路由 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path={&quot;/Home&quot;} component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path={&quot;/News&quot;} component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;!-- 多级路由 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path={&quot;/Wode/Wode&quot;} component={Wode}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导入自己封装的路由组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import IndexRouter from &quot;./view/一级路由与多级路由/IndexRouter&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;IndexRouter&gt;&lt;/IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,5),o=[e];function p(c,r,i,A,C,u){return n(),a("div",null,o)}const D=s(l,[["render",p]]);export{m as __pageData,D as default};
