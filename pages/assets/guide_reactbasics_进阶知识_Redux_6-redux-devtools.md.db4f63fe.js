import{_ as s,o as e,c as a,S as n}from"./chunks/framework.739ae78b.js";const A=JSON.parse('{"title":"进阶知识 redux-devTools","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/Redux/6-redux-devtools.md","filePath":"guide/reactbasics/进阶知识/Redux/6-redux-devtools.md"}'),o={name:"guide/reactbasics/进阶知识/Redux/6-redux-devtools.md"},l=n(`<h1 id="进阶知识-redux-devtools" tabindex="-1">进阶知识 redux-devTools <a class="header-anchor" href="#进阶知识-redux-devtools" aria-label="Permalink to &quot;进阶知识 redux-devTools&quot;">​</a></h1><h3 id="redux-devtools插件" tabindex="-1">redux-devTools插件 <a class="header-anchor" href="#redux-devtools插件" aria-label="Permalink to &quot;redux-devTools插件&quot;">​</a></h3><blockquote><p>浏览器可视化redux数据追踪插件，配置好之后可以在浏览器上可视化查看数据的变化</p></blockquote><ul><li><p><strong>浏览器插件市场安装</strong> ：搜索<code>redux-devTools</code>，查询并安装</p></li><li><p><strong>项目配置</strong> ：在项目<code>store文件</code>里面 配置如下代码</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {</span></span>
<span class="line"><span style="color:#A6ACCD;">  applyMiddleware,</span></span>
<span class="line"><span style="color:#A6ACCD;">  legacy_createStore as createStore,</span></span>
<span class="line"><span style="color:#A6ACCD;">  combineReducers,</span></span>
<span class="line"><span style="color:#A6ACCD;">  compose,</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//配置 redux-devtools 可视化追踪工具 做环境判断</span></span>
<span class="line"><span style="color:#A6ACCD;">const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建全局状态仓库对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = createStore(</span></span>
<span class="line"><span style="color:#A6ACCD;">  Reducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  composeEnhancers(applyMiddleware(Thunk, ReduxPromise))</span></span>
<span class="line"><span style="color:#A6ACCD;">); //包裹中间件插件</span></span></code></pre></div>`,5),t=[l];function p(c,r,d,i,u,_){return e(),a("div",null,t)}const x=s(o,[["render",p]]);export{A as __pageData,x as default};
