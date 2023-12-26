import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.2-useState.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.2-useState.md"}'),e={name:"guide/reactbasics/基础知识/15-Hooks/15.2-useState.md"},t=l(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="usestate-状态函数" tabindex="-1">useState 状态函数 <a class="header-anchor" href="#usestate-状态函数" aria-label="Permalink to &quot;useState 状态函数&quot;">​</a></h3><blockquote><ol><li>函数式组件里面的<code>状态</code>, 在<code>useState</code>方法里面<code>传入初始值</code>, 他会<code>返回一个数组</code>，里面有两个值<code>一个是数据</code> <code>一个是修改数据的方法</code>，通过数组解构使用。 <code>const [Name, setName] = useState(&quot;前端&quot;);</code></li></ol></blockquote><blockquote><ol start="2"><li>调用修改数据的方法，会重新执行一遍这个函数组件，触发页面更新;</li></ol></blockquote><div class="tip custom-block"><p class="custom-block-title">小Demo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(useState(&quot;前端&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 一个数据 一个修改方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [Name, setName] = useState(&quot;前端&quot;); //传入初始化值 返回一个数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [list, setlist] = useState([&quot;111&quot;, &quot;222&quot;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [text, settext] = useState(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 修改</span></span>
<span class="line"><span style="color:#A6ACCD;">  const HanderSetName = (value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 调用修改方法会触发页面数据更新</span></span>
<span class="line"><span style="color:#A6ACCD;">    setName(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 删除方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  const HanderRemove = (index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不要直接操作原数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    const newList = [...list];</span></span>
<span class="line"><span style="color:#A6ACCD;">    newList.splice(index, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setlist(newList);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 添加方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  const HanderPush = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setlist([...list, text]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 修改绑定数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  const HanderChangeText = (event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    settext(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; HanderSetName(&quot;前端猛男&quot;)}&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {Name}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">          value={text}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onChange={(event) =&gt; HanderChangeText(event)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;&lt;/input&gt;{&quot; &quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={() =&gt; HanderPush()}&gt;添加&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {item} &lt;button onClick={() =&gt; HanderRemove(index)}&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          );</span></span>
<span class="line"><span style="color:#A6ACCD;">        })}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {list.length === 0 &amp;&amp; &quot;没有数据了&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,ducoment.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,5),p=[t];function o(c,i,C,A,r,u){return n(),a("div",null,p)}const d=s(e,[["render",o]]);export{y as __pageData,d as default};
