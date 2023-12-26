import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const y=JSON.parse('{"title":"基础知识 - Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/15-Hooks/15.3-useEffect.md","filePath":"guide/reactbasics/基础知识/15-Hooks/15.3-useEffect.md"}'),e={name:"guide/reactbasics/基础知识/15-Hooks/15.3-useEffect.md"},o=l(`<h1 id="基础知识-hooks" tabindex="-1">基础知识 - Hooks <a class="header-anchor" href="#基础知识-hooks" aria-label="Permalink to &quot;基础知识 - Hooks&quot;">​</a></h1><h3 id="useeffect-处理函数" tabindex="-1">useEffect 处理函数 <a class="header-anchor" href="#useeffect-处理函数" aria-label="Permalink to &quot;useEffect 处理函数&quot;">​</a></h3><blockquote><ol><li>函数式组件没有生命周期，但是可以使用 <code>useEffect</code> 来完成一些类似生命周期的事情</li></ol></blockquote><blockquote><ol start="2"><li>它内部有两个参数 1. <code>回调函数</code> 2.<code>依赖对象数组</code>, 这个方法会进来 <code>首次注册执行调用</code> , 里面可以写异步请求等等。如果没有依赖项, 那么他就只会调用一个，如果有依赖项，当依赖项的数据改变时，他会再次触发回调函数，从而实现类似类组件生命周期的效果。</li></ol></blockquote><blockquote><ol start="3"><li>如果想实现销毁周期效果，需要在参数一: <code>回调函数内部里面 return 一个回调函数出去</code> 这个return的回调函数里面可以写一些需要销毁时候的事情 在组件被销毁的时候会调用执行</li></ol></blockquote><blockquote><ol start="4"><li><code>useEffect</code> 可以多次调用注册</li></ol></blockquote><blockquote><ol start="5"><li><code>useEffect</code> 是会在整个页面渲染完才会调用的</li></ol></blockquote><div class="tip custom-block"><p class="custom-block-title">小Demo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState, useEffect } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Child子组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Child = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [Name, setName] = useState(&quot;前端&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [Age, setAge] = useState(20);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 注册方法 可以多次调用 ,第二个参数传空数组 代表没有依赖项，只会调用一次</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;销毁时调用&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      clearInterval(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 依赖 Name</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;依赖项的数据Name变化也会随着调用&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;111&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [Name]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 依赖 Age</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;依赖项的数据Age变化也会随着调用&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;222&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [Age]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; setName(&quot;前端猛男&quot;)}&gt;Name{Name}改变&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; setAge(Age + 1)}&gt;Age{Age}改变&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App根组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = ()=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [Show, setShow] = useState(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; setShow(!Show)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {Show ? &quot;隐藏&quot; : &quot;显示&quot;}Child组件</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* 组件显示隐藏 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {Show &amp;&amp; &lt;Child Show={Show}&gt;&lt;/Child&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,ducoment.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,8),t=[o];function p(c,A,r,C,i,u){return n(),a("div",null,t)}const d=s(e,[["render",p]]);export{y as __pageData,d as default};
