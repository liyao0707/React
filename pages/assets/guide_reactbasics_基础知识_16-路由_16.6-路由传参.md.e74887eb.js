import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.6-路由传参.md","filePath":"guide/reactbasics/基础知识/16-路由/16.6-路由传参.md"}'),p={name:"guide/reactbasics/基础知识/16-路由/16.6-路由传参.md"},t=l(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="路由传参" tabindex="-1">路由传参 <a class="header-anchor" href="#路由传参" aria-label="Permalink to &quot;路由传参&quot;">​</a></h3><ul><li><ol><li><strong>动态路由传参</strong> ：</li></ol></li></ul><blockquote><p>在Route组件上path属性里面以<code>/:key</code>的占位符写法，在<code>&lt;NavLink /&gt;组件</code> to属性上 动态拼接就可以啦。接收方：取值用 <code>props.match.params</code></p></blockquote><ul><li><ol start="2"><li><strong>路由传参query | state</strong> ：<code>{pathname:&#39;路径名&#39;, query|state:{id:&#39;&#39;,name:&#39;&#39;}</code></li></ol></li></ul><blockquote><p><code>props.history | useHistory()</code>.push方面里面传入一个对象，对象有两个属性, <code>一个pathname</code>，一个 <code>query|state</code>, <strong>pathname</strong> 是跳转路径，<strong>query|state</strong> 是传参对象。</p></blockquote><blockquote><p><strong>接收方：</strong> query 在props.location.query里面取 ，state 在props.location.state里面取</p></blockquote><div class="tip custom-block"><p class="custom-block-title">动态路由传参</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- list1.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useMemo, useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { NavLink ,useHistory} from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function List(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list, setlist] = useState([</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;前端猛男&quot;, id: 1 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;前端猛男2&quot;, id: 2 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;前端猛男3&quot;, id: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 动态路由传参</span></span>
<span class="line"><span style="color:#A6ACCD;">  const listView = useMemo(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li key={item.id}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {/*动态路由传参*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;NavLink</span></span>
<span class="line"><span style="color:#A6ACCD;">            to={\`/News/\${item.id}/\${item.name}\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {item.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/NavLink&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [list]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        动态路由传参:</span></span>
<span class="line"><span style="color:#A6ACCD;">        {listView}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- News.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function News(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props, &quot;News文件&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 动态路由在match属性里面取</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { id, name } = props.match.params;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      新闻</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;id：{id}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;name：{name}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Home.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import list1 from &quot;./Home/list1&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Home() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/Home/list1&quot; component={list1}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 如果从匹配到从/Home页面过来，就重定向到list1组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Redirect from=&quot;/Home&quot; to=&quot;/Home/list1&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 如果没有匹配的路由 显示404组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./tabber/news&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          {/* 动态路由传参需要来path上以/:key名的形式来定义占位数据 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/News/:id/:name&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx 根组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">improt ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import IndexRouter from &quot;./view/一级路由与多级路由/IndexRouter&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">路由传参 query | state</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- list1.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useMemo, useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { NavLink ,useHistory} from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function List(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list, setlist] = useState([</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;前端猛男&quot;, id: 1 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;前端猛男2&quot;, id: 2 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;前端猛男3&quot;, id: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 路由传参 query | state</span></span>
<span class="line"><span style="color:#A6ACCD;">  const Hisotry = useHistory();</span></span>
<span class="line"><span style="color:#A6ACCD;">  const listView2 = useMemo(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li key={item.id} onClick={() =&gt; RouterPush(item)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {item.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [list]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const RouterPush = (item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1. query传参</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.history.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">       pathname: &quot;/News&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       query: { id: item.id, name: item.name },</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2. state传参</span></span>
<span class="line"><span style="color:#A6ACCD;">    Hisotry.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">      pathname: &quot;/News&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: { id: item.id, name: item.name },</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        路由传参( query | state):</span></span>
<span class="line"><span style="color:#A6ACCD;">        {listView2}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- News.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function News(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props, &quot;News文件&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // query 在location.query里面取</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { id, name } = props.location.query;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // state 在location.state里面取</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { id, name } = props.location.state;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      新闻</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;id：{id}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;name：{name}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Home.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import list1 from &quot;./Home/list1&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Home() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/Home/list1&quot; component={list1}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 如果从匹配到从/Home页面过来，就重定向到list1组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Redirect from=&quot;/Home&quot; to=&quot;/Home/list1&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* 如果没有匹配的路由 显示404组件 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- IndexRouter.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Route, Switch, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./tabber/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./tabber/news&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NotFounted from &quot;./tabber/NotFounted&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function IndexRouter(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;/News&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route path=&quot;&quot; component={NotFounted}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx 根组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">improt ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import IndexRouter from &quot;./view/一级路由与多级路由/IndexRouter&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/IndexRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,9),o=[t];function e(c,r,A,i,C,u){return n(),a("div",null,o)}const m=s(p,[["render",e]]);export{D as __pageData,m as default};
