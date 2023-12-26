import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const D=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.5-路由跳转.md","filePath":"guide/reactbasics/基础知识/16-路由/16.5-路由跳转.md"}'),o={name:"guide/reactbasics/基础知识/16-路由/16.5-路由跳转.md"},p=l(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="路由跳转" tabindex="-1">路由跳转 <a class="header-anchor" href="#路由跳转" aria-label="Permalink to &quot;路由跳转&quot;">​</a></h3><blockquote><p>有两种形式 <code>声明式导航</code> 和 <code>编程式导航</code></p></blockquote><ul><li><strong>声明式导航</strong> ： <code>&lt;NavLink to=&#39;地址&#39; activeClassName=&#39;Myactive&#39;&gt;&lt;/NavLink&gt;</code></li></ul><blockquote><p><code>to属性</code>: 是跳转的地址, <code>activeClassName属性</code>：高亮类名，react会自动高亮，该组件一定要放在<code>HashRouter组件</code>内</p></blockquote><ul><li><strong>编程式导航</strong> ：必须是在Route组件内的当前页面才能使用<code>props.history</code>方法。 <code>useHistory()</code> 可以脱离这个限制，可以在任何地方调转</li></ul><blockquote><ol><li>函数式组件用法: <code>props.history.push(&#39;地址&#39;)</code> | <code>useHistory()方法</code></li></ol></blockquote><blockquote><ol start="2"><li>类组件用法：<code>this.props.history.push(&#39;地址&#39;)</code></li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- Footer组件 Footer.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useMemo, useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { NavLink, useHistory } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;../../../../../../public/css/01-组件的样式.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Footers(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list] = useState([</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;首页&quot;, url: &quot;/Home&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;新闻&quot;, url: &quot;/News&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;我的&quot;, url: &quot;/Wode/Wode&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [Acitiveindex, setAcitiveindex] = useState(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 声明式导航</span></span>
<span class="line"><span style="color:#A6ACCD;">  const RouteList = useMemo(</span></span>
<span class="line"><span style="color:#A6ACCD;">    () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      list.map((item) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* to要跳转的地址  activeClassName属性会自动检测高亮 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;NavLink to={item.url} activeClassName=&quot;Myactive&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {item.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/NavLink&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )),</span></span>
<span class="line"><span style="color:#A6ACCD;">    []</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //编程式导航</span></span>
<span class="line"><span style="color:#A6ACCD;">  const History = useHistory(); // 创建Hooks useHistory钩子实例方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  const Router2 = useMemo(</span></span>
<span class="line"><span style="color:#A6ACCD;">    () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      list.map((item, index) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li</span></span>
<span class="line"><span style="color:#A6ACCD;">          style={{ color: Acitiveindex === index ? &quot;red&quot; : &quot;&quot; }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          key={index}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setAcitiveindex(index);</span></span>
<span class="line"><span style="color:#A6ACCD;">            History.push(item.url);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {item.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )),</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Acitiveindex]</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div style={{ margin: &quot;20px&quot; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        声明式导航</span></span>
<span class="line"><span style="color:#A6ACCD;">        {RouteList}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div style={{ margin: &quot;20px&quot; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        编程式导航</span></span>
<span class="line"><span style="color:#A6ACCD;">        {Router2}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- IndexRouter组件 IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./tabber/news&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./tabber/wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Footers from &quot;./tabber/Footers/Footers&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 路由表 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/News&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Wode/Wode&quot; component={Wode}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 利用插槽将footer组件包裹在HashRouret组件内 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        {props.children}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App根组件 App.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &quot;react-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 导入自己封装的路由组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import IndexRouter from &quot;./view/一级路由与多级路由/IndexRouter&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Footers from &quot;./view/一级路由与多级路由/tabber/Footers/Footers&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 路由组件必须放在HashRoute组件里面 这边利用插槽放进去 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Footers&gt;&lt;/Footers&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,9),t=[p];function e(c,r,i,A,C,u){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{D as __pageData,d as default};
