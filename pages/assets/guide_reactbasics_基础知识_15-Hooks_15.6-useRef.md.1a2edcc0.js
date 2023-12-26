import{_ as s,o as n,c as a,S as e}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.6-useRef.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.6-useRef.md"}'),l={name:"guide/reactbasics/基础知识/15-Hooks/15.6-useRef.md"},p=e(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="useref" tabindex="-1">useRef <a class="header-anchor" href="#useref" aria-label="Permalink to &quot;useRef&quot;">​</a></h3><blockquote><ol><li>跟类里面的用法一样，返还一个实例,里面有个current属性,就是我们所需要的。</li></ol></blockquote><blockquote><ol start="2"><li>它还有另一个用法 ，创建一个<code>类似状态的数据</code></li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState, useRef } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [Value, setValue] = useState(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const MyRef = useRef(null); //创建ref属性实例</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [num, setnum] = useState(0);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建一个数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  const MyRefvalue = useRef(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handerAdd = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setnum(num + 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 修改数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    MyRefvalue.current++;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">        ref={MyRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={Value}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onChange={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          setValue(MyRef.current.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {Value}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={() =&gt; handerAdd()}&gt;Add&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {num}- {MyRefvalue.current}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,5),o=[p];function t(c,r,i,A,C,u){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
