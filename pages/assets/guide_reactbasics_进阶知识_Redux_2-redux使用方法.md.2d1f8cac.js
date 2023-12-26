import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const D=JSON.parse('{"title":"进阶知识 - Redux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/Redux/2-redux使用方法.md","filePath":"guide/reactbasics/进阶知识/Redux/2-redux使用方法.md"}'),p={name:"guide/reactbasics/进阶知识/Redux/2-redux使用方法.md"},e=l(`<h1 id="进阶知识-redux" tabindex="-1">进阶知识 - Redux <a class="header-anchor" href="#进阶知识-redux" aria-label="Permalink to &quot;进阶知识 - Redux&quot;">​</a></h1><h4 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h4><blockquote><p>其实就是<code>useReducer + 订阅发布模式</code> 的结合,<code>createStore()</code> 有几个方法供我们使用，用来操作方法，获取仓库状态，订阅、发布信息，</p></blockquote><ul><li><p><strong>dispatch()</strong> ：<code>发布者信息</code> 修改仓库状态的方法,传入不同的数据，更改不同状态在Reducer方法里面</p></li><li><p><strong>subscribe(()=&gt;{})</strong> : <code>订阅者信息</code> 利用callback回调函数，来操作逻辑.当 <code>dispatch方法</code>调用的时候，该方法里的callback函数会执行，从而可以操作一些逻辑来获取仓库状态来更改组件自己内部的状态。</p></li><li></li><li><p><strong>getState()</strong> : 可以获取仓库里面的状态对象</p></li><li><p><strong>replaceReducer()</strong> :</p></li><li><p><strong>createStore(Reducer,data)</strong> : 创建全局状态仓库的方法，内部需要传入一个 <code>Reducer处理方法</code>，一个<code>初始化对象</code></p></li><li><p><strong>销毁subscribe</strong> ：<code>subscribe</code>订阅者信息 会返回一个实例对象函数，在用这个实例函数,就可以<code>销毁</code>这个订阅事件 <code>let unsubscribe = Store.subscribe(()=&gt;{})</code><code>unsubscribe() 销毁订阅者信息</code></p></li></ul><div class="tip custom-block"><p class="custom-block-title">/Redux/Store | /Redux/Action , 全局状态仓库|action操作对象</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- /Redux/Store.jsx   --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { legacy_createStore as createStore } from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建Reducer处理方法 跟useReducer 一模一样的用法 有两个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">// 一个老值 一个action操作 需要返回一个对象值</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = (oldData, Action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(Action);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建一个新对象来操作数据 尽量不要在原数据操作</span></span>
<span class="line"><span style="color:#A6ACCD;">  const NewData = { ...oldData };</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (Action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;TabbleHide&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      NewData.TabbleShow = !NewData.TabbleShow;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return NewData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;TabbleShow&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      NewData.TabbleShow = !NewData.TabbleShow;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return NewData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return oldData;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 初始化数据</span></span>
<span class="line"><span style="color:#A6ACCD;">const data = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  TabbleShow: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建全局状态仓库对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = createStore(Reducer, data); //跟useReducer一样 传一个方法 一个初始化对象</span></span>
<span class="line"><span style="color:#A6ACCD;">export default Store;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /Redux/Action.jsx  发布者需要传入action操作对象--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">//Store状态仓库的任务</span></span>
<span class="line"><span style="color:#A6ACCD;">// 底部栏关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">export const TabbleHide = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;TabbleHide&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 底部栏显示</span></span>
<span class="line"><span style="color:#A6ACCD;">export const TabbleShow = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;TabbleShow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">/Tabble/index 底部栏组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useMemo, useState, useCallback } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useHistory } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//导入Redux全局管理仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">import Store from &quot;../../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Style from &quot;../CSS/tabber/index.module.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Style, &quot;css变量&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Store, &quot;全局状态管理仓库&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Tabber() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let [Activeindex, SetActiveindex] = useState(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">  let [routerlist] = useState([</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;首页&quot;, url: &quot;/Home&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { name: &quot;我的&quot;, url: &quot;/Wode&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 跳转方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  const History = useHistory();</span></span>
<span class="line"><span style="color:#A6ACCD;">  const HanderRouter = useCallback((url) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    History.push(url);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 底部列表</span></span>
<span class="line"><span style="color:#A6ACCD;">  const tabberlist = useMemo(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return routerlist.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">          className={\`\${Style.item} \${</span></span>
<span class="line"><span style="color:#A6ACCD;">            Activeindex === index ? Style.Active : &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">          key={index}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            SetActiveindex(index);</span></span>
<span class="line"><span style="color:#A6ACCD;">            HanderRouter(item.url);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {item.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [routerlist, Activeindex, HanderRouter]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //Store仓库的数据改变不会触发视图更新，所以我们还得将仓库状态转成私有状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  //getState()方法可以拿到仓库状态对象</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [TabbleShow, setTabbleShow] = useState(Store.getState().TabbleShow);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 订阅信息来修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  Store.subscribe(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTabbleShow(Store.getState().TabbleShow);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div className={Style.Tabber}&gt;{TabbleShow &amp;&amp; tabberlist}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">路由组件&amp;页面组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- /router/Routeriew.jsx 路由组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HashRouter, Switch, Route, Redirect } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Wode from &quot;./Wode&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import News from &quot;./News&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Notdefunt from &quot;./404&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Tabber from &quot;./../tabber&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Routerview extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Route path=&quot;/Home&quot; component={Home}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Route path=&quot;/Wode&quot; component={Wode}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Route path=&quot;/News&quot; component={News}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Redirect from=&quot;/&quot; to=&quot;/Home&quot; exact&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Route component={Notdefunt}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Tabber&gt;&lt;/Tabber&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/HashRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /router/Home Home组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Home(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const HanderRouter = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.history.push({ pathname: &quot;/News&quot;, query: { id: &quot;1&quot; } });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;Home&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          HanderRouter();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        前往新闻业</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /router/Wode.jsx Wode组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Wode() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;Wode&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /router/News.jsx News组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useEffect } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导出全局状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">import Store from &quot;../../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导入发布操作事件</span></span>
<span class="line"><span style="color:#A6ACCD;">import { TabbleHide, TabbleShow } from &quot;../../Redux/Action&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function News(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props, &quot;News&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 进入隐藏底部栏 离开显示底部栏</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 发布者信息</span></span>
<span class="line"><span style="color:#A6ACCD;">    Store.dispatch(TabbleHide()); //隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Store.dispatch(TabbleShow()); //组件销毁 显示</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      News</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;{props.location.query.id}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">App.jsx 根组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Routerview from &quot;./router/Routerview&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Routerview&gt;&lt;/Routerview&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,ducument.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="核心代码" tabindex="-1">核心代码 <a class="header-anchor" href="#核心代码" aria-label="Permalink to &quot;核心代码&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- store.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { legacy_createStore as createStore } from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = (oldData, Action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const NewData = { ...oldData };</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (Action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;TabbleHide&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      NewData.TabbleShow = !NewData.TabbleShow;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return NewData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;TabbleShow&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      NewData.TabbleShow = !NewData.TabbleShow;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return NewData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return oldData;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const data = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  TabbleShow: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建全局状态仓库对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = createStore(Reducer, data); </span></span>
<span class="line"><span style="color:#A6ACCD;">export default Store;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Tabble/index.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Store from &quot;../../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//Store仓库的数据改变不会触发视图更新，所以我们还得将仓库状态转成私有状态,getState()方法可以拿到仓库状态对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const [TabbleShow, setTabbleShow] = useState(Store.getState().TabbleShow);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 订阅信息来修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">Store.subscribe(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTabbleShow(Store.getState().TabbleShow);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Tabble/News.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Store from &quot;../../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 发布者信息</span></span>
<span class="line"><span style="color:#A6ACCD;">    Store.dispatch(TabbleHide()); //隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Store.dispatch(TabbleShow()); //组件销毁 显示</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">}, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Actions.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 底部栏关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">export const TabbleHide = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;TabbleHide&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 底部栏显示</span></span>
<span class="line"><span style="color:#A6ACCD;">export const TabbleShow = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;TabbleShow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div>`,10),o=[e];function t(c,r,A,C,i,u){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
