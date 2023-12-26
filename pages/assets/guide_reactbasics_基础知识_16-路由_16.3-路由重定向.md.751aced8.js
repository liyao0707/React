import{_ as s,o as n,c as a,S as o}from"./chunks/framework.6bb1a485.js";const D=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.3-路由重定向.md","filePath":"guide/reactbasics/基础知识/16-路由/16.3-路由重定向.md"}'),t={name:"guide/reactbasics/基础知识/16-路由/16.3-路由重定向.md"},e=o(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="重定向" tabindex="-1">重定向 <a class="header-anchor" href="#重定向" aria-label="Permalink to &quot;重定向&quot;">​</a></h3><ul><li><p><strong>Switch</strong> ：路由开关组件。 React会自动帮我们检测重定向地址， 最好包裹着路由， 配套使用 。会自动检测<code>Redirect组件</code> <code>Route组件</code></p></li><li><p><strong>Redirect</strong> ：重定向组件。 <code>from属性</code> 设置匹配内容 去匹配url的内容, <code>to属性</code> 匹配成功重定向要去往的页面， <code>exact属性</code> 精准查询属性 。</p></li></ul><blockquote><p>设置之后，会精准去匹配<code>from属性</code>里面设置的内容，如果没<code>exact属性</code>，则模糊匹配<code>from属性</code>里面设置的内容</p></blockquote><ul><li><strong>Route</strong> : 路由组件。 如果<code>没设置path属性</code> 或者<code>path属性为空</code> 或 <code>设置*</code>，当去往的url地址无效时，会自动重定向到 <code>component属性</code> 里面的组件页面</li></ul><div class="tip custom-block"><p class="custom-block-title">Redirect重定向 与 Route重定向</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 路由组件 IndexRouter.jsx --&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">          {/* 当没有匹配的路由时 path=&quot;&quot;|&quot;*&quot; 或不设置 会去往这个页面 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;*&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 模糊匹配  from模糊匹配内容  to去往的地址 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 当url有模糊匹配的内容时 他会去往to设置的页面 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* &lt;Redirect from={&quot;/&quot;} to={&quot;/Home&quot;}&gt;&lt;/Redirect&gt; */}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 精准匹配 exact属性  只有完全匹配才会去往 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,6),l=[e];function p(c,r,i,A,C,u){return n(),a("div",null,l)}const m=s(t,[["render",p]]);export{D as __pageData,m as default};
