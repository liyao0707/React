import{_ as s,o as a,c as n,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"进阶知识 - Redux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/Redux/3-redux原理.md","filePath":"guide/reactbasics/进阶知识/Redux/3-redux原理.md"}'),e={name:"guide/reactbasics/进阶知识/Redux/3-redux原理.md"},p=l(`<h1 id="进阶知识-redux" tabindex="-1">进阶知识 - Redux <a class="header-anchor" href="#进阶知识-redux" aria-label="Permalink to &quot;进阶知识 - Redux&quot;">​</a></h1><h3 id="redux原理" tabindex="-1">Redux原理 <a class="header-anchor" href="#redux原理" aria-label="Permalink to &quot;Redux原理&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function QDMNCreateStore(reducer, data = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 订阅数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  const CallList = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 初始数据对象</span></span>
<span class="line"><span style="color:#A6ACCD;">  let State = reducer(data, {}); //第一次初始值就是 reducer方法内部默认返回的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 订阅方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  function subscribe(callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    CallList.push(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 发布方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  function dispatch(action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 先调用reducer处理方法 获取到最新的数据 然后在callback通知</span></span>
<span class="line"><span style="color:#A6ACCD;">    State = reducer(State, action); //初始对象跟action操作对象  获取最新状态</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (const i in CallList) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      CallList[i] &amp;&amp; CallList[i]();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 获取仓库对象方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  function getState() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return State;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    subscribe,</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatch,</span></span>
<span class="line"><span style="color:#A6ACCD;">    getState,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const data = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">const reducer = (oldstate,action)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ......操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    return oldstate</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const Store = QDMNCreateStore(reducer,data)</span></span></code></pre></div>`,3),c=[p];function t(o,r,i,C,A,d){return a(),n("div",null,c)}const y=s(e,[["render",t]]);export{D as __pageData,y as default};
