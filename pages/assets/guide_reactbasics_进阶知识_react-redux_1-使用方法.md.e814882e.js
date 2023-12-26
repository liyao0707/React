import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const u=JSON.parse('{"title":"进阶知识 - reac-redux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/react-redux/1-使用方法.md","filePath":"guide/reactbasics/进阶知识/react-redux/1-使用方法.md"}'),p={name:"guide/reactbasics/进阶知识/react-redux/1-使用方法.md"},e=l(`<h1 id="进阶知识-reac-redux" tabindex="-1">进阶知识 - reac-redux <a class="header-anchor" href="#进阶知识-reac-redux" aria-label="Permalink to &quot;进阶知识 - reac-redux&quot;">​</a></h1><h2 id="react-redux" tabindex="-1">react-redux <a class="header-anchor" href="#react-redux" aria-label="Permalink to &quot;react-redux&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i react-redux</span></span></code></pre></div><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><blockquote><p>利用 <code>react-redux</code> 身上的两个组件(Provider,connecst)来完成全局redux数据交互, <code>provider</code>用于分发全局store, <code>connect</code> 用于将接收组件转化成<strong>高阶-容器组件</strong>，有<strong>两个参数</strong>，<strong>一个回调函数</strong>：用来接收全局store，并需要返回数据，<strong>一个对象</strong>：用来写入操作Dispatch的属性方法。<code>connect</code>容器组件 利用props传参的方式，供接收组件使用</p></blockquote><ul><li><strong>Provider：</strong> <code>供应商组件</code> 用于分发全局的store参数 供 <code>connect容器组件</code> 接收使用;</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Provider } from &quot;react-redux&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;"> import store from &quot;../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;Provider store={store}&gt; 根组件 &lt;/Provider&gt;</span></span></code></pre></div><ul><li><p><strong>connect：</strong> 高级容器组件，用于将接收方组件变成容器组件，就可以用props接收数据|方法并操作。两个参数：<code>回调参数，对象</code>，调用返回一个函数，将组件当参数传入进入并调用该方法，就可以获得一个高阶容器组件</p><ul><li><strong>1. 回调函数</strong> 回调函数接收一个形参(全局的store)，函数内部需要返回一个<strong>对象</strong>，对象就是接收组件内部需要用到的store数据，组件内部props接收使用</li><li><strong>2. 对象</strong> 对象的属性是需要操作的dispatch方法，省去使用dispatch，直接调用方法就可以了，组件内部props接收使用</li><li><strong>connect(function,object)返回值</strong> 调用会返回一个<strong>函数</strong>，这个<strong>函数接收一个参数</strong>，就是我们需要<strong>操作的组件</strong>，调用该函数，就可以获得一个高阶容器组件，组件内部就可以用props操作数据了</li></ul></li></ul><h4 id="小demo" tabindex="-1">小demo <a class="header-anchor" href="#小demo" aria-label="Permalink to &quot;小demo&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- store.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { applyMiddleware, createStore, combineReducers, compose } from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import thunk from &quot;redux-thunk&quot;; //配置thunk形式</span></span>
<span class="line"><span style="color:#A6ACCD;">import promise from &quot;redux-promise&quot;; //配置promise形式</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HomeReducer } from &quot;./Reducers/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = combineReducers({ HomeReducer }); // reducer模块化合并，将模块化的reducer 合并成一个大Reducer</span></span>
<span class="line"><span style="color:#A6ACCD;">//配置 redux-devtools 可视化追踪工具</span></span>
<span class="line"><span style="color:#A6ACCD;">const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导出Store</span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore(</span></span>
<span class="line"><span style="color:#A6ACCD;">  Reducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  composeEnhancers(applyMiddleware(thunk, promise))</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /Reducers/Home.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">let data = { status: true, list: [] };</span></span>
<span class="line"><span style="color:#A6ACCD;">export const HomeReducer = (oldData = data, action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let newData = { ...oldData };</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;show&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      newData.status = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;hide&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      newData.status = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;Newlist&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      newData.list = action.newList;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;remove&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      newData.list = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newData;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- action.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &quot;axios&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export const TextShow = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;show&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">export const TextHide = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;hide&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// react-thunk写法</span></span>
<span class="line"><span style="color:#A6ACCD;">export const NewListThunk = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (dispatch) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    axios</span></span>
<span class="line"><span style="color:#A6ACCD;">      .get(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&amp;ci=239&amp;channelId=4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatch({ type: &quot;Newlist&quot;, newList: res.data.data.hot });</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// react-promise 写法</span></span>
<span class="line"><span style="color:#A6ACCD;">export const NewListPromise = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return axios</span></span>
<span class="line"><span style="color:#A6ACCD;">    .get(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&amp;ci=239&amp;channelId=4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return { type: &quot;Newlist&quot;, newList: res.data.data.hot };</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 清空</span></span>
<span class="line"><span style="color:#A6ACCD;">export const delectList = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { type: &quot;remove&quot; };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /Redux/Home.jsx文件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { connect } from &quot;react-redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {</span></span>
<span class="line"><span style="color:#A6ACCD;">  TextShow,</span></span>
<span class="line"><span style="color:#A6ACCD;">  TextHide,</span></span>
<span class="line"><span style="color:#A6ACCD;">  NewListThunk,</span></span>
<span class="line"><span style="color:#A6ACCD;">  NewListPromise,</span></span>
<span class="line"><span style="color:#A6ACCD;">  delectList,</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &quot;../../Redux/action&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useEffect, useMemo } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Home = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  let {</span></span>
<span class="line"><span style="color:#A6ACCD;">    status,</span></span>
<span class="line"><span style="color:#A6ACCD;">    list,</span></span>
<span class="line"><span style="color:#A6ACCD;">    TextShow,</span></span>
<span class="line"><span style="color:#A6ACCD;">    TextHide,</span></span>
<span class="line"><span style="color:#A6ACCD;">    NewListThunk,</span></span>
<span class="line"><span style="color:#A6ACCD;">    NewListPromise,</span></span>
<span class="line"><span style="color:#A6ACCD;">    delectList,</span></span>
<span class="line"><span style="color:#A6ACCD;">  } = props;</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (props.list.length == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      NewListThunk();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const newList = useMemo(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return list.map((item) =&gt; &lt;li key={item.id}&gt;{item.nm}&lt;/li&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [list]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;{status &amp;&amp; &quot;内容&quot;}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          TextShow();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        显示文本</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          TextHide();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        隐藏文本</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul&gt;{newList}&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            NewListThunk();</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          react-thunk方式获取</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            NewListPromise();</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          react-promise方式获取</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            delectList();</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          清空</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const mapStateToProps = (state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...state.HomeReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const mapDispacthToProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  TextShow,</span></span>
<span class="line"><span style="color:#A6ACCD;">  TextHide,</span></span>
<span class="line"><span style="color:#A6ACCD;">  NewListThunk,</span></span>
<span class="line"><span style="color:#A6ACCD;">  NewListPromise,</span></span>
<span class="line"><span style="color:#A6ACCD;">  delectList,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">export default connect(mapStateToProps, mapDispacthToProps)(Home);</span></span>
<span class="line"><span style="color:#A6ACCD;">// connect调用会返回一个函数,返回的函数需要传入一个组件，再次调用就可以将我们的组件变成高阶组件 - 容器组件</span></span>
<span class="line"><span style="color:#A6ACCD;">// connect需要两个参数，一个回调函数 跟 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">// 回调函数需要内部需要return你需要传入你组件内需要的状态数据</span></span>
<span class="line"><span style="color:#A6ACCD;">// 对象里面定义你需要dispatch操作的方法 直接调用 无需在dispatch  connect帮您自动dispatch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /App.jsx文件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Provider } from &quot;react-redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import store from &quot;../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Provider store={store}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Home /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App /&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,11),o=[e];function t(c,r,C,A,i,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
