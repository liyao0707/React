import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const h=JSON.parse('{"title":"基础知识-事件绑定","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/06-事件绑定.md","filePath":"guide/reactbasics/基础知识/06-事件绑定.md"}'),p={name:"guide/reactbasics/基础知识/06-事件绑定.md"},o=l(`<h1 id="基础知识-事件绑定" tabindex="-1">基础知识-事件绑定 <a class="header-anchor" href="#基础知识-事件绑定" aria-label="Permalink to &quot;基础知识-事件绑定&quot;">​</a></h1><h3 id="事件绑定" tabindex="-1">事件绑定 <a class="header-anchor" href="#事件绑定" aria-label="Permalink to &quot;事件绑定&quot;">​</a></h3><blockquote><p>事件名的首字母一定要大写 比如 onClick onChange 等等</p></blockquote><div class="tip custom-block"><p class="custom-block-title">事件绑定写法</p><ul><li><strong>匿名函数写法：</strong> <code>onClick = { ()=&gt;{ } }</code> 里面逻辑写多 不宜维护</li><li><strong>this调用写法：</strong> <code>onClick = { this.hander2 }</code> 调用类里面的方法 会存在指向问题</li><li><strong>匿名函数内部调用写法：</strong> <code>onClick = { () =&gt; { this.hander3() } }</code> 调用类里面的方法 不会存在指向问题</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // es7 定义属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    c = 111</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // es6 定义属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.c = 111</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // es6 定义方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    hander2() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;add2事件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // es7 定义方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    hander3 = () =&gt; { </span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;add3事件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    hander4 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;add4事件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 事件绑定</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {/* 匿名函数写法 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={() =&gt; { console.log(&#39;add1事件&#39;) }}&gt;add1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {/* this调用写法  这些写法会在后面产生this指向问题*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={ this.hander2 }&gt;add2&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={ this.hander3 }&gt;add3&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {/* 匿名函数内部调用法   不会产生this指向问题*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={()=&gt;{ this.hander4() }}&gt;add4&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;, document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="this指向问题" tabindex="-1"><strong>this指向问题</strong> <a class="header-anchor" href="#this指向问题" aria-label="Permalink to &quot;**this指向问题**&quot;">​</a></h3><blockquote><p>在没改变this指向之前 方法内部的这个this他不知道指向谁 这时 <code>this = undefined</code> 需要<code>改变this指向</code> 调用方法时改变一下当前方法的this 为当前的类 这样才能保证this不报错</p></blockquote><blockquote><p><code>bind</code>方法需要调用才会改变 正好符合了React绑定事件不能立即调用的原则 <strong>(推荐！)</strong></p><p><strong><code>onClick = { this.hander2.bind(this) } 改变方法内部的this为当前this</code></strong></p></blockquote><blockquote><p><code>call apply</code> 方法都需要立即调用才行 而React不能一进来就调用 这样是绑不上事件的 <strong>(不推荐 )</strong></p></blockquote><blockquote><p><code>箭头函数永远指向它当前的实例</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // es7 定义属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    c = 111</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">    // es6 定义属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.c = 111</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // es6 定义方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    hander2() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //1. 如果不改变this指向的话 这边调用this.c这个属性会报错  应为这个方法内部的this他不知道指向谁 需要在调用方法的时候将它的this指向为当前的this</span></span>
<span class="line"><span style="color:#A6ACCD;">             在没改变指向之前 这里的this = undefined </span></span>
<span class="line"><span style="color:#A6ACCD;">        //2. 改变了this指向 这里才可以指向当前这个App类 调用属性方法 都不会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;add2事件&#39;,this.c)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 事件绑定</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {/* 匿名函数写法  不会产生this指向问题*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={() =&gt; { console.log(&#39;add1事件&#39;) }}&gt;add1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {/* this调用写法  这些写法会在后面产生this指向问题*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={ this.hander2.bind(this) }&gt;add2&lt;/button&gt;  {/* 改变了this指向  this = App(当前类) */}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={ this.hander3 }&gt;add3&lt;/button&gt;{/* 没改变this指向  this=undefined*/}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {/* 匿名函数内部调用法   不会产生this指向问题*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;button onClick={()=&gt;{ this.hander4() }}&gt;add4&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;, document.getElementById(&#39;root&#39;))</span></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><blockquote><ol><li>React 并不会真正的绑定事件到每一个元素身上 而是采用事件代理的模式绑到了根节点上</li></ol></blockquote><blockquote><ol start="2"><li>原生事件的<code>Event对象</code> 在React中也是有的 只不过<code>React模仿了一套Event对象</code>给我们使用</li></ol></blockquote>`,13),t=[o];function e(c,i,r,C,A,d){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{h as __pageData,D as default};
