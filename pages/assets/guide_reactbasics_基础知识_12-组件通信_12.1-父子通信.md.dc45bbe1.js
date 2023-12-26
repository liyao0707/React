import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识 - 组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/12-组件通信/12.1-父子通信.md","filePath":"guide/reactbasics/基础知识/12-组件通信/12.1-父子通信.md"}'),p={name:"guide/reactbasics/基础知识/12-组件通信/12.1-父子通信.md"},e=l(`<h1 id="基础知识-组件通信" tabindex="-1">基础知识 - 组件通信 <a class="header-anchor" href="#基础知识-组件通信" aria-label="Permalink to &quot;基础知识 - 组件通信&quot;">​</a></h1><h3 id="父子通信" tabindex="-1">父子通信 <a class="header-anchor" href="#父子通信" aria-label="Permalink to &quot;父子通信&quot;">​</a></h3><blockquote><p>传递数据(父传子) 与 传递方法(子传父)</p></blockquote><h4 id="父传子" tabindex="-1">父传子 <a class="header-anchor" href="#父传子" aria-label="Permalink to &quot;父传子&quot;">​</a></h4><blockquote><p>父组件在组件上 传递数据可以了 利用属性<code>props</code>接收 类组件 接收用<code>this.props</code> 函数式组件 接收用 <code>形参</code></p></blockquote><h4 id="子传父" tabindex="-1">子传父 <a class="header-anchor" href="#子传父" aria-label="Permalink to &quot;子传父&quot;">​</a></h4><blockquote><p>父组件传递一个方法过去(回调函数) <code>&lt;div Fn={()=&gt;{ }}&gt;&lt;div/&gt;</code> 就说明 这个组件需要 <code>子传父</code></p><p>子组件通过调用就可以传递数据了 类组件<code>this.props.Fn()</code> 函数式组件 <code>形参调用</code></p></blockquote><h4 id="小demo" tabindex="-1">小Demo <a class="header-anchor" href="#小demo" aria-label="Permalink to &quot;小Demo&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件 类组件--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App2 extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 子传父 调用传递过来的方法 向父组件通信  利用了callback原理</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.props.Fn1(&#39;类组件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt; 类组件点击 &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件 函数式组件--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const App3 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 子传父 调用传递过来的方法 向父组件通信  利用了callback原理</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                props.Fn2(&#39;函数式组件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }}&gt;函数式组件点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        show:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    App3Fn = (text) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 参数是 子组件传回来的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(text)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({ show:!this.state.show})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;!-- 组件1 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;App2 title=&#39;数据&#39; Fn1={(text) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // 参数是 子组件传回来的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">                    console.log(text)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.setState({ show:!this.state.show})</span></span>
<span class="line"><span style="color:#A6ACCD;">                }}&gt;&lt;/App2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;!-- 组件2 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;App3 title=&#39;数据2&#39; Fn2={ this.App3Fn }&gt;&lt;/App3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {  this.state.show &amp;&amp; &#39;内容显示&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,9),o=[e];function t(c,r,i,A,C,d){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{y as __pageData,h as default};
