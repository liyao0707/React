import{_ as s,o as n,c as a,S as e}from"./chunks/framework.6bb1a485.js";const y=JSON.parse('{"title":"基础知识 - 新生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/14-生命周期/14.4-类组件新生命周期一.md","filePath":"guide/reactbasics/基础知识/14-生命周期/14.4-类组件新生命周期一.md"}'),l={name:"guide/reactbasics/基础知识/14-生命周期/14.4-类组件新生命周期一.md"},t=e(`<h1 id="基础知识-新生命周期" tabindex="-1">基础知识 - 新生命周期 <a class="header-anchor" href="#基础知识-新生命周期" aria-label="Permalink to &quot;基础知识 - 新生命周期&quot;">​</a></h1><h3 id="类组件新生命周期-getderivedstatefromprops" tabindex="-1">类组件新生命周期-getDerivedStateFromProps <a class="header-anchor" href="#类组件新生命周期-getderivedstatefromprops" aria-label="Permalink to &quot;类组件新生命周期-getDerivedStateFromProps&quot;">​</a></h3><blockquote><ol><li><code>getDerivedStateFromProps</code> 跟 <code>componentDidUpdate</code> 一般配套使用</li></ol></blockquote><blockquote><ol start="2"><li><code>getDerivedStateFromProps</code> 在一定程度上 可以替代 <code>componentWillMount</code> 跟 <code>componentWillReceiveProps</code></li></ol></blockquote><blockquote><ol start="3"><li><code>static</code> : 它是类的私有方法, 需要在方法前面定义 <code>static</code> 方法内部需要返回一个对象作为新的state状态, 这个对象会自动匹配 <code>state状态</code>里面的数据做更改 ,需要先定义state状态</li></ol></blockquote><blockquote><ol start="4"><li>这个生命周期在初始化 跟 数据更改 都会触发, 就算多次触发,react会将多次调用合并为一次去修改数据</li></ol></blockquote><div class="tip custom-block"><p class="custom-block-title">小Demo - getDerivedStateFromProps</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">class Child extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = { type: 1, list: [&quot;111&quot;, &quot;222&quot;, &quot;333&quot;] };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 可以拿到最新的属性值 跟 状态 可以把父级的属性 赋值給自己内部的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  static getDerivedStateFromProps(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;子级的getDerivedStateFromProps&quot;, nextProps, nextState);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: nextProps.type,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 跟getDerivedStateFromProps配套使用  getDerivedStateFromProps不适合异步请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 可以在componentDidUpdate里面做  做数据对比不同的就可以异步请求 相同就return终止掉 从而提升性能</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 应该这个周期每次改变数据都会触发 但比getDerivedStateFromProps更合适一点，所以我们在这里面玩点花活</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidUpdate(oldProps, oldState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //  老数据跟新数据相同 就不异步请求了</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (oldState.type === this.state.type) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.state.type === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 模仿异步</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">          list: [&quot;111&quot;, &quot;222&quot;, &quot;333&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 模仿异步</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">          list: [&quot;444&quot;, &quot;555&quot;, &quot;666&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;componentDidUpdate&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {this.state.list.map((item) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li key={item}&gt;{item}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = { title: &quot;&quot;, type: 1 };</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 需要关键字static  内部需要return一个对象 需要定义初始化状态(可以是个空对象)</span></span>
<span class="line"><span style="color:#A6ACCD;">  static getDerivedStateFromProps(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;getDerivedStateFromProps&quot;, nextState);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这个方法虽然会被执行多次 但是React会把他们合并成为一次修改并返回</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 他会对比static里面的同名数据 去修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: nextState.title + &quot;前端猛男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({ title: &quot;A-&quot;, type: 1 });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          点击</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({ title: &quot;B-&quot;, type: 2 });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          点击2</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        {this.state.title}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Child type={this.state.type}&gt;&lt;/Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h3><ul><li><strong>getDerivedStateFromProps</strong> ：</li></ul><blockquote><p><code>getDerivedStateFromProps</code> 跟 <code>componentDidUpdate</code> 一般配套使用</p></blockquote><blockquote><p>需要在方法前面定义 <code>static</code> 方法内部需要返回一个对象, 需要定义 <code>state数据</code> 可以为空对象</p></blockquote><blockquote><p><code>getDerivedStateFromProps</code>不适合异步请求 , 可以在<code>componentDidUpdate</code>里面做, 做数据对比,不同的就可以异步请求, 相同就return终止掉, 从而提升性能 。 应为这个周期每次改变数据都会触发 但比<code>getDerivedStateFromProps</code>更合适一点，所以我们在这里面玩点花活</p></blockquote>`,12),p=[t];function o(c,r,i,C,A,D){return n(),a("div",null,p)}const u=s(l,[["render",o]]);export{y as __pageData,u as default};
