import{_ as s,o as n,c as a,S as e}from"./chunks/framework.739ae78b.js";const d=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.7-useContext.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.7-useContext.md"}'),t={name:"guide/reactbasics/基础知识/15-Hooks/15.7-useContext.md"},o=e(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="usecontext" tabindex="-1">useContext <a class="header-anchor" href="#usecontext" aria-label="Permalink to &quot;useContext&quot;">​</a></h3><blockquote><p>跟类组件的写法差不多,父级没变, 只不过子级的写法不同了，只需要将创建的<code>createContext()</code>实例对象传入<code>useContext()</code>里面，<code>useContext()</code>返回的数据，就是供应商组件是定义的数据跟方法,直接调用就行了</p></blockquote><blockquote><p><strong>createContext ：</strong> <code>React.createContext()</code> 可以创建一个跨组件实例对象</p></blockquote><blockquote><p><strong>Provider ：</strong> <code>&lt;React.createContext().Provider value={ { 数据|方法 } }&gt; &lt;/React.createContext().Provider&gt;</code>, 用来包裹父组件根元素标签 标签上有个 <code>value属性</code> 可以定义全局数据 子组件可以用里面定义的数据和方法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useContext, useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建context对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const ContextDom = React.createContext();</span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { name, content } = props;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 将创建的content对象传入进去,可以获得 或 供应商组件上 定义的方法 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  const Context = useContext(ContextDom);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   调用形参上面 根元素provider定义的方法 将数据传递过去进行更改</span></span>
<span class="line"><span style="color:#A6ACCD;">        Context.ChangeContent(content);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {name}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen2 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 将创建的content对象传入进去,可以获得 或 供应商组件上 定义的方法 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  const Context = useContext(ContextDom);</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(Context);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;{Context.content}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list, setlist] = useState([</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 1, name: &quot;前端猛男1&quot;, content: &quot;我是前端猛男1&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 2, name: &quot;前端猛男2&quot;, content: &quot;我是前端猛男2&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 3, name: &quot;前端猛男3&quot;, content: &quot;我是前端猛男3&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { id: 4, name: &quot;前端猛男4&quot;, content: &quot;我是前端猛男4&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [content, setcontent] = useState(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 用实例对象的Provider属性 包裹根元素 标签上有一个value属性用来定义数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 子组件可以访问到value传递过去的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ContextDom.Provider</span></span>
<span class="line"><span style="color:#A6ACCD;">      value={{</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &quot;前端猛男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        content: content, //动态绑定传递的值</span></span>
<span class="line"><span style="color:#A6ACCD;">        ChangeContent: (content) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 子组件调用此方法修改传递过来的数据 来更新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">          setcontent(content);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &lt;Childen1 key={item.id} {...item}&gt;&lt;/Childen1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Childen2&gt;&lt;/Childen2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ContextDom.Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,6),l=[o];function p(c,C,r,i,A,u){return n(),a("div",null,l)}const y=s(t,[["render",p]]);export{d as __pageData,y as default};
