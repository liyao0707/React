import{_ as s,o as a,c as n,S as l}from"./chunks/framework.739ae78b.js";const b=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.4-useCallback.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.4-useCallback.md"}'),t={name:"guide/reactbasics/基础知识/15-Hooks/15.4-useCallback.md"},e=l(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h1 id="usecallback" tabindex="-1">useCallback <a class="header-anchor" href="#usecallback" aria-label="Permalink to &quot;useCallback&quot;">​</a></h1><blockquote><ol><li>每当我们更改数据的时候 函数式组件都会被重新调用一次，里面的方法都会重新创建，从而比较浪费性能, <code>useCallback</code>解决的这个问题</li></ol></blockquote><blockquote><ol start="2"><li>他有两个参数: 一 <code>回调函数</code>， 二 <code>依赖对象数组</code></li></ol></blockquote><blockquote><ol start="3"><li>如果不传递依赖对象，那么这个函数永远用的是缓存的那一份，无论函数组件重新调用多少次,当前无依赖函数都不会重新创建。如果传递了依赖对象，当依赖对象改变的时候，函数组件重新执行，依赖当前对象的函数会被重新创建,从而拿到最新的数据,而其他使用<code>useCallback</code>创建的非依赖当前数据的函数不会重新创建,从而提升性能</li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState, useCallback } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [name, setname] = useState(&quot;前端&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 无依赖对象 函数缓存 其它函数组件重新调用 该组件也不会重新创建</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handername = useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 依赖对象name 每次name改变 该函数组件重新执行 创建当前函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 但是其它useCallback非依赖name useCallback创建的方法不会被重新创建</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handername2 = useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [name]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 每次有数据更新 该以下函数都会被重新创建</span></span>
<span class="line"><span style="color:#A6ACCD;">  const fn = (value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setname(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  const hander = () =&gt; {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; handername(&quot;前端猛男&quot;)}&gt;打印name - 无依赖&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; setname(&quot;前端猛男&quot;)}&gt;改变{name}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; handername2(&quot;前端猛男&quot;)}&gt;打印name - 有依赖&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {&quot;函数会重新整个调用：&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={() =&gt; fn(&quot;前端猛男1&quot;)}&gt;改变会重新执行函数组件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={() =&gt; fn(&quot;前端猛男2&quot;)}&gt;改变会重新执行函数组件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={() =&gt; hander()}&gt;递增打印&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,6),o=[e];function p(c,C,r,i,A,u){return a(),n("div",null,o)}const k=s(t,[["render",p]]);export{b as __pageData,k as default};
