import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const u=JSON.parse('{"title":"进阶知识 - redux-promise","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/Redux/5.2-Redux中间件redux-promise.md","filePath":"guide/reactbasics/进阶知识/Redux/5.2-Redux中间件redux-promise.md"}'),e={name:"guide/reactbasics/进阶知识/Redux/5.2-Redux中间件redux-promise.md"},p=l(`<h1 id="进阶知识-redux-promise" tabindex="-1">进阶知识 - redux-promise <a class="header-anchor" href="#进阶知识-redux-promise" aria-label="Permalink to &quot;进阶知识 - redux-promise&quot;">​</a></h1><h3 id="redux-promise" tabindex="-1">redux-promise <a class="header-anchor" href="#redux-promise" aria-label="Permalink to &quot;redux-promise&quot;">​</a></h3><blockquote><p>React提供一个异步修改中间件的方式 使用插件 <code>redux-promise</code> 可以异步修改action</p></blockquote><ul><li><p><strong>安装</strong> : <code>npm install redux-promise</code></p></li><li><p><strong>applyMiddleware</strong> : 可以支持注册一些第三方的插件库来写异步的action&gt; React提供一个异步修改中间件的方式 使用插件 <code>redux-promise</code> 可以异步修改action</p></li></ul><p><code>createStore(Reducer, applyMiddleware(插件))</code></p><ul><li><p><strong>安装</strong> : <code>npm install redux-promise</code></p></li><li><p><strong>action</strong> :注册完<code>redux-promise</code>插件，异步提交action的话内部需要 <code>返回一个promise对象</code>就可以啦，在异步请求里面直接<code>return action任务</code></p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 写法一  返回一个promise对象--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Stort.subscribe( </span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">         resolve(&#39;1&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- action任务 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type:&quot;newlist&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        value:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 写法二 async await 返回action对象--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Stort.subscribe( (async()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = await axios</span></span>
<span class="line"><span style="color:#A6ACCD;">    .get(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&amp;ci=239&amp;channelId=4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return { type: &quot;Newlist&quot;, newList: res.data.data.hot };</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  return list;</span></span>
<span class="line"><span style="color:#A6ACCD;">})())</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">示例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/News.jsx</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useEffect, useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Store from &quot;../../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { TabbleHide, TabbleShow, NewList2 } from &quot;../../Redux/Action&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function News(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [newList, setnewList] = useState(Store.getState().NewReducers.newList);</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果没有列表数据 就去Action任务里面调用接口异步拿到数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Store.getState().NewReducers.newList.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 调用异步action</span></span>
<span class="line"><span style="color:#A6ACCD;">      Store.dispatch(NewList2());</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /Redux/Action --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// redux-promise写法</span></span>
<span class="line"><span style="color:#A6ACCD;">// 返回一个promise对象就可以啦  源码内部会调用then方法 最终拿到一个对象</span></span>
<span class="line"><span style="color:#A6ACCD;">export const NewList2 = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 异步请求方法在这里写</span></span>
<span class="line"><span style="color:#A6ACCD;">  return axios</span></span>
<span class="line"><span style="color:#A6ACCD;">    .get(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&amp;ci=239&amp;channelId=4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return { type: &quot;Newlist&quot;, newList: res.data.data.hot };</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// redux-promise async await写法</span></span>
<span class="line"><span style="color:#A6ACCD;">export const NewList3 = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 异步请求方法在这里写</span></span>
<span class="line"><span style="color:#A6ACCD;">  const list = await axios</span></span>
<span class="line"><span style="color:#A6ACCD;">    .get(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&amp;ci=239&amp;channelId=4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return { type: &quot;Newlist&quot;, newList: res.data.data.hot };</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  return list;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- store.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {</span></span>
<span class="line"><span style="color:#A6ACCD;">  applyMiddleware,</span></span>
<span class="line"><span style="color:#A6ACCD;">  legacy_createStore as createStore,</span></span>
<span class="line"><span style="color:#A6ACCD;">  combineReducers,</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Thunk from &quot;redux-thunk&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReduxPromise from &quot;redux-promise&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = combineReducers({</span></span>
<span class="line"><span style="color:#A6ACCD;">  TabbleReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  AddReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  NewReducers,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建全局状态仓库对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = createStore(Reducer, applyMiddleware(Thunk,ReduxPromise)); //applyMiddleware()可以注册支持一些第三方的库来写异步action</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default Store;</span></span></code></pre></div></div>`,8),o=[p];function t(c,r,i,A,C,d){return n(),a("div",null,o)}const D=s(e,[["render",t]]);export{u as __pageData,D as default};
