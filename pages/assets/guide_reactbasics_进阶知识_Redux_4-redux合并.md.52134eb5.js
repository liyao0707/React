import{_ as s,o as a,c as n,S as e}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"进阶知识 - Redux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/Redux/4-redux合并.md","filePath":"guide/reactbasics/进阶知识/Redux/4-redux合并.md"}'),l={name:"guide/reactbasics/进阶知识/Redux/4-redux合并.md"},p=e(`<h1 id="进阶知识-redux" tabindex="-1">进阶知识 - Redux <a class="header-anchor" href="#进阶知识-redux" aria-label="Permalink to &quot;进阶知识 - Redux&quot;">​</a></h1><h3 id="将模块抽离合并-combinereducers" tabindex="-1">将模块抽离合并 combineReducers <a class="header-anchor" href="#将模块抽离合并-combinereducers" aria-label="Permalink to &quot;将模块抽离合并 combineReducers&quot;">​</a></h3><blockquote><p>Redux <code>combineReducers()</code>可以将模块化抽离的 reducer合并到一起。每一块Reducer处理方法可以是一个单独的文件，最后在合并到一起成为一个新的大Reducer</p></blockquote><p>combineReducers({reducer1,reducer2})</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- /Reducers/AddText --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const AddReducer = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  oldState = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    AddText: &quot;河南&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  Action</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let NewState = { ...oldState };</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (Action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;AddText&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      NewState.AddText = Action.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return NewState;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return oldState;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">export default AddReducer;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- /Reducers/TabbleHide.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Tabble = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  oldData = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    TabbleShow: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  Action</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(Action);</span></span>
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
<span class="line"><span style="color:#A6ACCD;">export default Tabble;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- store.js --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { legacy_createStore as createStore, combineReducers } from &quot;redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import TabbleReducer from &quot;./Reducers/TabbleHide&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import AddReducer from &quot;./Reducers/AddText&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// combineReducers({reducer}) 模块化 将抽离出去的reducer 合并到一起成为一个大的reducer，方便模块化开发</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = combineReducers({</span></span>
<span class="line"><span style="color:#A6ACCD;">  TabbleReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  AddReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建全局状态仓库对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = createStore(Reducer);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 使用数据 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Store.getState().AddReducer.AddText</span></span>
<span class="line"><span style="color:#A6ACCD;">Store.getState().TabbleReducer.TabbleShow</span></span></code></pre></div>`,5),o=[p];function c(t,r,A,C,i,d){return a(),n("div",null,o)}const y=s(l,[["render",c]]);export{D as __pageData,y as default};
