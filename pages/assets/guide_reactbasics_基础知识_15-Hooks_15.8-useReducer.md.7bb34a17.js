import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.8-useReducer.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.8-useReducer.md"}'),p={name:"guide/reactbasics/基础知识/15-Hooks/15.8-useReducer.md"},e=l(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="usereducer" tabindex="-1">useReducer <a class="header-anchor" href="#usereducer" aria-label="Permalink to &quot;useReducer&quot;">​</a></h3><blockquote><p><code>useReducer</code>需要传递两个数据 一个<code>处理方法 Reducer()</code> 一个 <code>初始化数据对象 interReducer</code> 他会返还一个数组里面有两个值，<code>数据state</code> 跟 <code>修改调用方法 dispath()</code> 。</p><p>这个<code>修改方法dispath()</code> 需要传入一个对象。 调用 <code>修改方法dispath()</code>, 在<code>处理方法Reducer()</code>里面可以接收到<code>修改方法dispath()</code> 传递过来的对象, 根据传过的对象修改数据,并<code>返回一个数据对象</code>就可以了</p></blockquote><blockquote><p>这是Hooks内部提供的一种通讯方式 在多层嵌套组件中 需要 跟<code>useContext</code> 配合</p></blockquote><div class="tip custom-block"><p class="custom-block-title">小demo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useReducer } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改方法  两个参数 1.老数据值 2.传过来的数据对象</span></span>
<span class="line"><span style="color:#A6ACCD;">// 在里面修改数据 需要返回一个新的数据对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer = (oldState, action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(oldState, action);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 不要在原来的数据上改，搞一个新数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  const newState = { ...oldState };</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (action.Type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;jian&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      newState.num--;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newState;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &quot;jia&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      newState.num++;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return newState;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return oldState;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 初始化数据对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const interReducer = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  num: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(useReducer(Reducer, interReducer));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 传入方法 跟初始化数据对象 会返回一个数组 里面包含初始化数据 跟 修改调用方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [state, dispath] = useReducer(Reducer, interReducer);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* 调用方法 传递数据对象过去 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          dispath({</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: &quot;jian&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        减</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {state.num}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          dispath({</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: &quot;jia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        加</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h4 id="组建通信" tabindex="-1">组建通信 <a class="header-anchor" href="#组建通信" aria-label="Permalink to &quot;组建通信&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">useReducer + useContext 来实现组件通信</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useReducer,  useContext } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义方法</span></span>
<span class="line"><span style="color:#A6ACCD;">const Reducer2 = (oldState, action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let newlist = { ...oldState };</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 接收传递过来的值并修改  --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  newlist.content = action.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return newlist;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义初始化数据</span></span>
<span class="line"><span style="color:#A6ACCD;">const interState2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  list: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 1, name: &quot;前端猛男1&quot;, content: &quot;我是前端猛男1&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 2, name: &quot;前端猛男2&quot;, content: &quot;我是前端猛男2&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 3, name: &quot;前端猛男3&quot;, content: &quot;我是前端猛男3&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 4, name: &quot;前端猛男4&quot;, content: &quot;我是前端猛男4&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  content: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建context对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const ContextDom = React.createContext();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { name, content } = props;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 从上面结构出来dispath方法 调用并传递过去修改值 </span></span>
<span class="line"><span style="color:#A6ACCD;">  const { dispath } = useContext(ContextDom);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispath({ value: content });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {name}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen2 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 解构state数据, 在根元素里面调用属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { state } = useContext(ContextDom);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;{state.content}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [state, dispath] = useReducer(Reducer2, interState2);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 直接将state状态 跟 dispath 方法放上去</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ContextDom.Provider</span></span>
<span class="line"><span style="color:#A6ACCD;">      value={{</span></span>
<span class="line"><span style="color:#A6ACCD;">        state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispath,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {state.list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &lt;Childen1 key={item.id} {...item}&gt;&lt;/Childen1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Childen2&gt;&lt;/Childen2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ContextDom.Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,7),o=[e];function t(c,C,A,r,i,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{y as __pageData,u as default};
