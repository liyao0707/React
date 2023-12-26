import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识 - 新生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/14-生命周期/14.5-类组件新生命周期二.md","filePath":"guide/reactbasics/基础知识/14-生命周期/14.5-类组件新生命周期二.md"}'),e={name:"guide/reactbasics/基础知识/14-生命周期/14.5-类组件新生命周期二.md"},p=l(`<h1 id="基础知识-新生命周期" tabindex="-1">基础知识 - 新生命周期 <a class="header-anchor" href="#基础知识-新生命周期" aria-label="Permalink to &quot;基础知识 - 新生命周期&quot;">​</a></h1><h3 id="getsnapshotbeforeupdate-类的新生命周期" tabindex="-1">getSnapshotBeforeUpdate - 类的新生命周期 <a class="header-anchor" href="#getsnapshotbeforeupdate-类的新生命周期" aria-label="Permalink to &quot;getSnapshotBeforeUpdate - 类的新生命周期&quot;">​</a></h3><blockquote><ol><li><code>getSnapshotBeforeUpdate</code> 可以取代 <code>componentWillUpdate</code></li></ol></blockquote><blockquote><ol start="2"><li>一个执行在 <code>render</code> 后 <code>componentDidUpdate</code> 之前的生命周期 ，这个生命周期可以拿到数据没改变之前的状态,这里它无限接近 <code>componentDidUpdate</code></li></ol></blockquote><blockquote><ol start="3"><li>它内部需要返回一个值，作为 <code>componentDidUpdate</code> 的<code>第三个参数</code></li></ol></blockquote><div class="tip custom-block"><p class="custom-block-title">高度小demo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Myref = React.createRef();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  state = { list: [1, 2, 3, 4, 5, 6, 7] };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  getSnapshotBeforeUpdate(oldProps, oldState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;getSnapshotBeforeUpdate&quot;, oldProps, oldState);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.Myref.current.scrollHeight; //返回我们原数据的高度</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 第三个值是 getSnapshotBeforeUpdate 返回的</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidUpdate(oldProps, oldState, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 用我们的新高度 减去我们之前的高度 定位到之前的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;componentDidUpdate&quot;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.Myref.current.scrollTop += this.Myref.current.scrollHeight - value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;render&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">              list: [...[10, 11, 12, 13, 14, 15, 16], ...this.state.list],</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          新数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul</span></span>
<span class="line"><span style="color:#A6ACCD;">          ref={this.Myref}</span></span>
<span class="line"><span style="color:#A6ACCD;">          style={{ height: &quot;300px&quot;, overflow: &quot;auto&quot;, background: &quot;red&quot; }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {this.state.list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return (</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;li style={{ height: 80 }} key={item}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {item}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            );</span></span>
<span class="line"><span style="color:#A6ACCD;">          })}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,6),o=[p];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
