import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const y=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.5-useMemo.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.5-useMemo.md"}'),e={name:"guide/reactbasics/基础知识/15-Hooks/15.5-useMemo.md"},o=l(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo&quot;">​</a></h3><blockquote><ol><li>跟useCallback效果差不多,只不过<code>内部回调函数需要一个返回值</code>，返还给实例,类似 <code>vue的计算属性</code></li></ol></blockquote><blockquote><ol start="2"><li>有两个参数 <code>回调函数</code>，<code>依赖对象[]</code></li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState, useMemo } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list, setlist] = useState([&quot;1&quot;, &quot;2&quot;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [value, setvalue] = useState(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 当依赖值改变时 会重新创建 并返回一个值</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 如果依赖项是空数组，则只会创建一次，以后每次拿的都是老记忆函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  const FilterList = useMemo(</span></span>
<span class="line"><span style="color:#A6ACCD;">    () =&gt; list.filter((item) =&gt; item.includes(value)),</span></span>
<span class="line"><span style="color:#A6ACCD;">    [list, value]</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
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
<span class="line"><span style="color:#A6ACCD;">        {/* 直接使用变量渲染标签 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">        {FilterList.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &lt;li key={index}&gt;{item}&lt;/li&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,5),t=[o];function p(c,i,r,C,A,u){return n(),a("div",null,t)}const D=s(e,[["render",p]]);export{y as __pageData,D as default};
