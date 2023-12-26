import{_ as s,o as n,c as a,S as t}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.4-路由嵌套.md","filePath":"guide/reactbasics/基础知识/16-路由/16.4-路由嵌套.md"}'),l={name:"guide/reactbasics/基础知识/16-路由/16.4-路由嵌套.md"},o=t(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="路由嵌套-子级路由" tabindex="-1">路由嵌套 = 子级路由 <a class="header-anchor" href="#路由嵌套-子级路由" aria-label="Permalink to &quot;路由嵌套 =  子级路由&quot;">​</a></h3><blockquote><p>两个路由在一起并级上下排列 叫 <code>同级路由</code> ,在路由组件内部 在写路由 叫<code>嵌套路由(子级路由)</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 嵌套路由组件(子级路由) Home.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import list1 from &quot;./Home/list1&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import list2 from &quot;./Home/list2&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Home() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      首页</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* 当前页面嵌套了两个路由 或在Home组件下嵌套显示 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/Home/list1&quot; component={list1}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/Home/list2&quot; component={list2}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 如果从匹配到从/Home页面过来，就重定向到list2组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Redirect from=&quot;/Home&quot; to=&quot;/Home/list1&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 如果没有匹配的路由 显示404组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 路由组件 IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 路由模块</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./tabber/news&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./tabber/wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* Hash模式 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 被Switch组件包裹之后，React会自动帮我们检测重定向地址 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 路由表 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/News&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Wode/Wode&quot; component={Wode}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 当没有匹配的路由时 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;*&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;!-- 搜索/ 重定向到Home组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 根组件App.jsx --&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,4),p=[o];function e(c,r,i,A,C,u){return n(),a("div",null,p)}const m=s(l,[["render",e]]);export{y as __pageData,m as default};
