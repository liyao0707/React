import{_ as s,o as e,c as n,S as a}from"./chunks/framework.739ae78b.js";const y=JSON.parse('{"title":"进阶知识 - redux-persist","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/react-redux/3-redux-persist.md","filePath":"guide/reactbasics/进阶知识/react-redux/3-redux-persist.md"}'),l={name:"guide/reactbasics/进阶知识/react-redux/3-redux-persist.md"},p=a(`<h1 id="进阶知识-redux-persist" tabindex="-1">进阶知识 - redux-persist <a class="header-anchor" href="#进阶知识-redux-persist" aria-label="Permalink to &quot;进阶知识 - redux-persist&quot;">​</a></h1><h2 id="redux-persist" tabindex="-1">redux-persist <a class="header-anchor" href="#redux-persist" aria-label="Permalink to &quot;redux-persist&quot;">​</a></h2><blockquote><p>通过一些配置 就可以让store里面的数据持久化存储</p></blockquote><h3 id="方法-配置" tabindex="-1">方法 配置 <a class="header-anchor" href="#方法-配置" aria-label="Permalink to &quot;方法 配置&quot;">​</a></h3><ul><li><p><strong>persistConfig</strong> ： 配置信息</p><ul><li><strong>key</strong> ：用于存储的key值</li><li><strong>storage</strong> 持久化存储引擎，默认是localStorage</li><li><strong>whitelist</strong>： 数组。 白名单 指定永久存储reducer的状态</li><li><strong>blacklist</strong>: 黑名单。 不持久化指定reducer的状态</li></ul></li><li><p><strong>persistReducer()</strong> ：两个参数 <code>一个配置 一个自定义的reducer</code> ，传入返回一个经过<code>persist</code> 处理过的新的 <code>persistReducer</code></p></li><li><p><strong>persistStore()</strong> : 传入store，返回一个持久化存储的对象</p></li></ul><h3 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- store.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {  createStore, combineReducers,  } from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { HomeReducer } from &quot;./Reducers/Home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { persistStore, persistReducer } from &quot;redux-persist&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import storage from &quot;redux-persist/lib/storage&quot;; // defaults to localStorage for web</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// reducer模块化合并，将模块化的reducer 合并成一个大Reducer</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = combineReducers({ HomeReducer });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 持久化储存配置</span></span>
<span class="line"><span style="color:#A6ACCD;">const persistConfig = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  key: &quot;MyRoot&quot;, //储存的key</span></span>
<span class="line"><span style="color:#A6ACCD;">  storage,</span></span>
<span class="line"><span style="color:#A6ACCD;">  whitelist: [&quot;HomeReducer&quot;], //白名单 指定永久存储reducer的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  blacklist: [&quot;&quot;], // 黑名单，不持久化指定reducer的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 持久化存储Reducer</span></span>
<span class="line"><span style="color:#A6ACCD;">const persistedReducer = persistReducer(persistConfig, Reducer);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 导出普通Store</span></span>
<span class="line"><span style="color:#A6ACCD;">export const store = createStore(</span></span>
<span class="line"><span style="color:#A6ACCD;">  persistedReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  composeEnhancers(applyMiddleware(thunk, promise))</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导出持久存储的Store</span></span>
<span class="line"><span style="color:#A6ACCD;">export const persistor = persistStore(store);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Provider } from &quot;react-redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { store, persistor } from &quot;../Redux/store&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &quot;./home&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { PersistGate } from &quot;redux-persist/integration/react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Provider store={store}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;!-- 包裹根元素 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;PersistGate loading={null} persistor={persistor}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Home /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/PersistGate&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span></code></pre></div>`,7),t=[p];function o(r,c,i,u,C,A){return e(),n("div",null,t)}const D=s(l,[["render",o]]);export{y as __pageData,D as default};
