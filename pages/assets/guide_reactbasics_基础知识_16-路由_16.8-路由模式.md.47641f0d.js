import{_ as s,o as n,c as a,S as t}from"./chunks/framework.6bb1a485.js";const D=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.8-路由模式.md","filePath":"guide/reactbasics/基础知识/16-路由/16.8-路由模式.md"}'),o={name:"guide/reactbasics/基础知识/16-路由/16.8-路由模式.md"},l=t(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="路由模式" tabindex="-1">路由模式 <a class="header-anchor" href="#路由模式" aria-label="Permalink to &quot;路由模式&quot;">​</a></h3><ul><li><p><strong>HashRouter</strong> : 路径带<code>#</code>的模式，不会像后端发起请求</p></li><li><p><strong>BrowserRouter</strong> : 路径不带<code>#</code>的模式，会像后端发起请求，如果没有配置相应的页面，页面会报404</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 路由模块</span></span>
<span class="line"><span style="color:#A6ACCD;">import {</span></span>
<span class="line"><span style="color:#A6ACCD;">  HashRouter,</span></span>
<span class="line"><span style="color:#A6ACCD;">  BrowserRouter,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Route,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Switch,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Redirect,</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./tabber/news&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./tabber/wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- BrowserRouter模式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const isToken = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return localStorage.getItem(&quot;token&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;BrowserRouter&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            path=&quot;/Wode/Wode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            render={() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              isToken() ? &lt;Wode /&gt; : &lt;Redirect from=&quot;/&quot; to=&quot;/&quot;&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          &gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/News&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- HashRouter模式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const isToken = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return localStorage.getItem(&quot;token&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            path=&quot;/Wode/Wode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            render={() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              isToken() ? &lt;Wode /&gt; : &lt;Redirect from=&quot;/&quot; to=&quot;/&quot;&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          &gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/News&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,4),e=[l];function p(c,r,i,C,A,u){return n(),a("div",null,e)}const d=s(o,[["render",p]]);export{D as __pageData,d as default};
