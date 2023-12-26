import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.9-自定义Hooks.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.9-自定义Hooks.md"}'),o={name:"guide/reactbasics/基础知识/15-Hooks/15.9-自定义Hooks.md"},e=l(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="自定义hooks" tabindex="-1">自定义hooks <a class="header-anchor" href="#自定义hooks" aria-label="Permalink to &quot;自定义hooks&quot;">​</a></h3><blockquote><ol><li>可以将一些 复用的逻辑 或者组件里面复杂的逻辑，抽离出来放在自定义hooks里面</li></ol></blockquote><blockquote><ol start="2"><li>自定义hooks 必须以 <code>use</code> 开头，如果不遵循的话,无法判断某个函数对其内部Hook的调用，React将无法自动检查你的Hook是否违反了Hook的规则 ，React不知道你是组件，还是自义定Hooks，</li></ol></blockquote><blockquote><ol start="3"><li>组件变量名<code>首字母大写</code> ， 自定义hooks变量前面必须加上 <code>use</code></li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState, useMemo } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 自定义Hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">const useFilterList = (list, value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const FilterList = useMemo(</span></span>
<span class="line"><span style="color:#A6ACCD;">    () =&gt; list.filter((item) =&gt; item.includes(value)),</span></span>
<span class="line"><span style="color:#A6ACCD;">    [list, value]</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    FilterList,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list, setlist] = useState([&quot;1&quot;, &quot;2&quot;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [value, setvalue] = useState(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 调用自定义hooks 并解构出来数据FilterList</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { FilterList } = useFilterList(list, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={value}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onChange={(event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          setvalue(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          setlist([...list, value]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        添加</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {FilterList.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &lt;li key={index}&gt;{item}&lt;/li&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,6),t=[e];function p(c,i,r,C,A,u){return n(),a("div",null,t)}const d=s(o,[["render",p]]);export{D as __pageData,d as default};
