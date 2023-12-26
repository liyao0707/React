import{_ as s,o as a,c as n,S as e}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"高级组件-react-redux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/进阶知识/react-redux/2-原理.md","filePath":"guide/reactbasics/进阶知识/react-redux/2-原理.md"}'),l={name:"guide/reactbasics/进阶知识/react-redux/2-原理.md"},p=e(`<h1 id="高级组件-react-redux" tabindex="-1">高级组件-react-redux <a class="header-anchor" href="#高级组件-react-redux" aria-label="Permalink to &quot;高级组件-react-redux&quot;">​</a></h1><h2 id="react-redux原理" tabindex="-1">react-redux原理 <a class="header-anchor" href="#react-redux原理" aria-label="Permalink to &quot;react-redux原理&quot;">​</a></h2><blockquote><p>就是函数内部返回一个函数，接收传过来一个组件，将函数传递过来的数据跟方法 利用父传子传递给需要的组件，返回一个新的组件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const Mycom = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;自定义高阶组件&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const MyConnect = (cb, obj) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 获取返回的值</span></span>
<span class="line"><span style="color:#A6ACCD;">  const value = cb();</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 返回一个函数 接收一个组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (Mycomponent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //  把组件本身的props 属性传递给内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Mycomponent {...value} {...props} {...obj}&gt;&lt;/Mycomponent&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">export default MyConnect(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return { a: 1, b: 2 };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { c() {}, d() {} }</span></span>
<span class="line"><span style="color:#A6ACCD;">)(Mycom);</span></span></code></pre></div>`,4),t=[p];function o(c,r,i,C,A,d){return a(),n("div",null,t)}const _=s(l,[["render",o]]);export{y as __pageData,_ as default};
