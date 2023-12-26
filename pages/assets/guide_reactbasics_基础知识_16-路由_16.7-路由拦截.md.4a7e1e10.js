import{_ as s,o as n,c as a,S as t}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.7-路由拦截.md","filePath":"guide/reactbasics/基础知识/16-路由/16.7-路由拦截.md"}'),o={name:"guide/reactbasics/基础知识/16-路由/16.7-路由拦截.md"},e=t(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="路由拦截" tabindex="-1">路由拦截 <a class="header-anchor" href="#路由拦截" aria-label="Permalink to &quot;路由拦截&quot;">​</a></h3><blockquote><p><code>Route组件</code> 里面有一个属性 <code>render</code> 他接收一个回掉函数，内部可以处理一些逻辑，需要返回一个组件值。 我们可以通过这种方法来完成路由拦截</p></blockquote><blockquote><p>但是render拦截 会将组件提前创建，会导致组件内部 props属性里面会缺少一些路由方面的数据,render属性的回调函数有个参数，这个参数就是路由放的一些数据，需要利用父传子将 数据传递过去，就可以啦。 <code>&lt;Route path=&quot;/Wode/Wode&quot; render={(props) =&gt; &lt;Wode {...props} /&gt; &lt;/Route&gt;</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./tabber/wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 判断条件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const isToken = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return localStorage.getItem(&quot;token&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 路由拦截 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* render属性 接收一个回调函数必需返回一个组件 可以在里面处理逻辑 从而达到拦截效果 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;!-- 但是 组件提前创建啦 我们需要将props 传递给Wode组件 要不然Wode组件props属性上没一些路由方法  --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route</span></span>
<span class="line"><span style="color:#A6ACCD;">            path=&quot;/Wode/Wode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            render={(props) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              isToken() ? &lt;Wode {...props} /&gt; : &lt;Redirect from=&quot;/&quot; to=&quot;/&quot;&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          &gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 精准匹配 exact属性  只有完全匹配才会去往 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 当没有匹配的路由时 path=&quot;&quot;|&quot;*&quot; 或不设置 会去往这个页面 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
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
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,5),l=[e];function p(c,r,i,A,C,u){return n(),a("div",null,l)}const y=s(o,[["render",p]]);export{D as __pageData,y as default};
