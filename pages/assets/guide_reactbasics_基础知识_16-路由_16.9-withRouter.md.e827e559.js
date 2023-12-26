import{_ as s,o as n,c as a,S as t}from"./chunks/framework.739ae78b.js";const d=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.9-withRouter.md","filePath":"guide/reactbasics/基础知识/16-路由/16.9-withRouter.md"}'),o={name:"guide/reactbasics/基础知识/16-路由/16.9-withRouter.md"},l=t(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="withrouter" tabindex="-1">withRouter <a class="header-anchor" href="#withrouter" aria-label="Permalink to &quot;withRouter&quot;">​</a></h3><blockquote><p><code>withRouter</code>高阶组件，他可以将我们一些没有路由方面数据的组件 变成 有路由数据的组件, 从而增强组件的能力，他会返回一个新的组件。</p><p><code>import { withRouter } from &quot;react-router-dom&quot;;</code> <code>const A = withRouter(组件)</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- Home.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Route, Switch, Redirect, withRouter } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import list1 from &quot;./Home/list1&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import list2 from &quot;./Home/list2&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Home() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/Home/list1&quot; component={list1}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/Home/list2&quot; component={list2}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Redirect from=&quot;/Home&quot; to=&quot;/Home/list1&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* 组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;WithRouterFltem&gt;&lt;/WithRouterFltem&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 这样被包装一下 Fltem组件具备了一些路由方面的能力</span></span>
<span class="line"><span style="color:#A6ACCD;">const WithRouterFltem = withRouter(Fltem); //withRouter 会返回一个新的组件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Fltem = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //如果不被withRouter包裹一层 则props不具备跳转的能力</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;Fltem组件&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./tabber/wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Wode/Wode&quot; render={(props) =&gt; &lt;Wode {...props} /&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx 根组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &quot;react-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import IndexRouter from &quot;./view/一级路由与多级路由/IndexRouter&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,4),p=[l];function e(c,r,i,A,C,u){return n(),a("div",null,p)}const D=s(o,[["render",e]]);export{d as __pageData,D as default};
