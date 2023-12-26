import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const D=JSON.parse('{"title":"基础知识 - 生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/14-生命周期/14.2-类组件生命周期-更新中.md","filePath":"guide/reactbasics/基础知识/14-生命周期/14.2-类组件生命周期-更新中.md"}'),p={name:"guide/reactbasics/基础知识/14-生命周期/14.2-类组件生命周期-更新中.md"},e=l(`<h1 id="基础知识-生命周期" tabindex="-1">基础知识 - 生命周期 <a class="header-anchor" href="#基础知识-生命周期" aria-label="Permalink to &quot;基础知识 - 生命周期&quot;">​</a></h1><h3 id="类的生命周期-更新中" tabindex="-1">类的生命周期-更新中 <a class="header-anchor" href="#类的生命周期-更新中" aria-label="Permalink to &quot;类的生命周期-更新中&quot;">​</a></h3><ul><li><strong>componentWillUpdate</strong> : <code>即将弃用</code></li></ul><blockquote><p>数据更新前触发 优先级比较低 会被其它高的优先级覆盖 <code>不推荐</code></p></blockquote><ul><li><strong>componentDidUpdate</strong> :</li></ul><blockquote><p>数据更新后触发 推荐 有三个形参 <code>老的属性</code> <code>老的状态,getSnapshotBeforeUpdate周期返回的数据</code></p></blockquote><ul><li><strong>shouldComponentUpdate</strong> ： <code>性能优化周期函数</code></li></ul><blockquote><p>控制是否需要组件更新 return true|false true需要 false不需要 有两个参数 新的属性 新的状态</p></blockquote><ul><li><strong>componentWillReceiveProps</strong> : <code>即将弃用</code></li></ul><blockquote><p>父组件更新 就会触发子组件这个周期函数 他可以最早拿到父组件传递过来的数据 有一个参数 新的属性</p></blockquote><ul><li><strong>render</strong> :</li></ul><blockquote><p>每次数据更新都会触发render函数</p></blockquote><ul><li><strong>UNSAFE_</strong> :</li></ul><blockquote><p>可以去除componentWillUpdate 的黄色警告</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">class Child extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = { title: &quot;1-&quot; };</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 父组件传递过来的属性改变 就会触发这个周期  实际上父组件只要更新就会触发</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 这个周期可以可以最早拿到传递过来的数据 可以将传递过来的状态 转换为组件私有</span></span>
<span class="line"><span style="color:#A6ACCD;">  UNSAFE_componentWillReceiveProps(nextProps) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;-------------componentWillReceiveProps----------&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: this.state.title + nextProps.title,</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;{this.state.title}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &quot;前端猛男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 更新前 也是不太建议在这里面操作 官方即将弃用</span></span>
<span class="line"><span style="color:#A6ACCD;">  UNSAFE_componentWillUpdate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.state.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;-------------UNSAFE_componentWillUpdate----------&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 更新后 有两个参数 老的属性 老的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidUpdate(oldProps, oldState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(oldProps, oldState);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.state.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否需要更新  有两个参数 新的属性 新的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  shouldComponentUpdate(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.state 老的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    // nextState 新的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(nextProps, nextState, &quot;是否需要组件更新周期&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.state.name !== nextState.name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;render函数&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({ name: &quot;前端弱男&quot; });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          点击</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Child title={this.state.name}&gt;&lt;/Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div><h4 id="shouldcomponentupdate-性能优化案例" tabindex="-1">shouldComponentUpdate 性能优化案例 <a class="header-anchor" href="#shouldcomponentupdate-性能优化案例" aria-label="Permalink to &quot;shouldComponentUpdate 性能优化案例&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">只有相等的组件 才会触发更新 其它都被阻止了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Child extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 如果没有性能优化 子组件将会重复渲染多次 造成浪费的内存使用</span></span>
<span class="line"><span style="color:#A6ACCD;">  shouldComponentUpdate(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 首次老值 或 新值不同 才会更新渲染  只会触发两次调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.props.current === this.props.index ||</span></span>
<span class="line"><span style="color:#A6ACCD;">      nextProps.current === nextProps.index</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;render&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">        style={{</span></span>
<span class="line"><span style="color:#A6ACCD;">          width: &quot;100px&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          height: &quot;100px&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          border:</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.props.current === this.props.index</span></span>
<span class="line"><span style="color:#A6ACCD;">              ? &quot;1px solid red&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              : &quot;1px solid&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          float: &quot;left&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          margin: 10,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class App2 extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],</span></span>
<span class="line"><span style="color:#A6ACCD;">    current: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;number&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          value={this.state.current}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onChange={(Event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({ current: Number(Event.target.value) });</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div style={{ overflow: &quot;hidden&quot; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {this.state.list.map((item, index) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Child</span></span>
<span class="line"><span style="color:#A6ACCD;">              key={item}</span></span>
<span class="line"><span style="color:#A6ACCD;">              current={this.state.current}</span></span>
<span class="line"><span style="color:#A6ACCD;">              index={index}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;&lt;/Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App2/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h4 id="执行顺序" tabindex="-1">执行顺序 <a class="header-anchor" href="#执行顺序" aria-label="Permalink to &quot;执行顺序&quot;">​</a></h4><blockquote><p>render(首次进入) shouldComponentUpdate → componentWillUpdate → render → componentWillReceiveProps → 子render → componentDidMountUpdate</p></blockquote><h3 id="老生命周期的一些问题" tabindex="-1">老生命周期的一些问题 <a class="header-anchor" href="#老生命周期的一些问题" aria-label="Permalink to &quot;老生命周期的一些问题&quot;">​</a></h3><ul><li><strong>componentWillMount</strong> :</li></ul><blockquote><p>在ssr中 这个周期方法会被多次调用 重复触发多遍， 同时在这里如果绑定事件 将无法解绑 导致内存泄露 变得不够安全高效 从而逐步废弃</p></blockquote><ul><li><strong>componentWillReceiveProps</strong> :</li></ul><blockquote><p>外部组件多次 频繁更新传入多次不同的props 会导致不必要的异步请求</p></blockquote><ul><li><strong>componentWillupdate</strong> ：</li></ul><blockquote><p>更新前记录Dom状态 可能会做一些处理 与 componentDidUpdate 相隔时间太久 会导致转态不可信</p></blockquote>`,26),o=[e];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const y=s(p,[["render",t]]);export{D as __pageData,y as default};
