import{_ as s,o as n,c as a,S as e}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"进阶知识 - redux-thunk","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/Redux/5.1-Redux中间件redux-thunk.md","filePath":"guide/reactbasics/进阶知识/Redux/5.1-Redux中间件redux-thunk.md"}'),l={name:"guide/reactbasics/进阶知识/Redux/5.1-Redux中间件redux-thunk.md"},p=e(`<h1 id="进阶知识-redux-thunk" tabindex="-1">进阶知识 - redux-thunk <a class="header-anchor" href="#进阶知识-redux-thunk" aria-label="Permalink to &quot;进阶知识 - redux-thunk&quot;">​</a></h1><h3 id="异步提交action" tabindex="-1">异步提交action <a class="header-anchor" href="#异步提交action" aria-label="Permalink to &quot;异步提交action&quot;">​</a></h3><blockquote><p>React提供一个异步修改中间件的方式 使用插件 <code>redux-thunk</code> 可以异步修改action</p></blockquote><ul><li><p><strong>安装</strong> : <code>npm install redux-thunk</code></p></li><li><p><strong>applyMiddleware</strong> : 可以支持注册一些第三方的插件库来写异步的action</p></li></ul><p><code>createStore(Reducer, applyMiddleware(插件))</code></p><ul><li><strong>action</strong> :注册完<code>redux-thunk</code>插件会，异步提交action的话内部需要返回一个回调函数，回调函数里面有个形参<code>dispatch函数</code>，异步请求需要在action里面写，在需要调用处理action的时候，使用形参<code>dispatch</code>就可以实现异步调用啦</li></ul><p><code>Store.dispatch((dispatch)=&gt;{dispatch({})})</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/News.jsx</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useEffect, useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导出全局状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">import Store from &quot;../../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导入发布操作事件</span></span>
<span class="line"><span style="color:#A6ACCD;">import { TabbleHide, TabbleShow, NewList } from &quot;../../Redux/Action&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function News(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 进入隐藏底部栏 离开显示底部栏</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [newList, setnewList] = useState(Store.getState().NewReducers.newList);</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果没有列表数据 就去Action任务里面调用接口异步拿到数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Store.getState().NewReducers.newList.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 调用异步action</span></span>
<span class="line"><span style="color:#A6ACCD;">      Store.dispatch(NewList());</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;Store有数据&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Store.dispatch(TabbleShow()); //组件销毁 显示</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 内部需要自己订阅 来接收数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  Store.subscribe(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(Store.getState().NewReducers.newList);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setnewList(Store.getState().NewReducers.newList);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      News</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* &lt;div&gt;{props.location.query.id}&lt;/div&gt; */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {newList.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;div key={item.id}&gt;{item.videoName}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      })}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /Redux/Action --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export const NewList = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 异步请求方法在这里写  需要返回一个回调函数 里面形参dispatch可以调用修改action </span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- store.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {</span></span>
<span class="line"><span style="color:#A6ACCD;">  applyMiddleware,</span></span>
<span class="line"><span style="color:#A6ACCD;">  legacy_createStore as createStore,</span></span>
<span class="line"><span style="color:#A6ACCD;">  combineReducers,</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Thunk from &quot;redux-thunk&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = combineReducers({</span></span>
<span class="line"><span style="color:#A6ACCD;">  TabbleReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  AddReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  NewReducers,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建全局状态仓库对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = createStore(Reducer, applyMiddleware(Thunk)); //applyMiddleware()可以注册支持一些第三方的库来写异步action</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default Store;</span></span></code></pre></div>`,8),t=[p];function o(c,r,i,A,C,d){return n(),a("div",null,t)}const D=s(l,[["render",o]]);export{y as __pageData,D as default};
