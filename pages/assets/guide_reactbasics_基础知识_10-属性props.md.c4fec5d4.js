import{_ as s,o as n,c as a,S as p}from"./chunks/framework.739ae78b.js";const d=JSON.parse('{"title":"基础知识 - 属性props","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/10-属性props.md","filePath":"guide/reactbasics/基础知识/10-属性props.md"}'),l={name:"guide/reactbasics/基础知识/10-属性props.md"},o=p(`<h1 id="基础知识-属性props" tabindex="-1">基础知识 - 属性props <a class="header-anchor" href="#基础知识-属性props" aria-label="Permalink to &quot;基础知识 - 属性props&quot;">​</a></h1><h3 id="组件传参props" tabindex="-1">组件传参props <a class="header-anchor" href="#组件传参props" aria-label="Permalink to &quot;组件传参props&quot;">​</a></h3><blockquote><p>类似vue 的父传子 我们在组件上 已 <code>key = &#39;value&#39;</code> 的形式 将数据传递过去 ， 在组件内部使用 <code>this.props</code> 接收</p></blockquote><ul><li><strong>发送 :</strong> <code>&lt;NavBar title=&#39;首页&#39;/&gt;</code> <code>&lt;NavBar { ...obj }/&gt;</code></li></ul><blockquote><p>如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写</p></blockquote><ul><li><strong>接收 :</strong> <code>NavBar组件内 this.props</code> 也可以解构取值 <code>let { } = this.props</code></li></ul><blockquote><p>函数式组件 直接形参接收 不限制形参名 业界通写props</p></blockquote><div class="tip custom-block"><p class="custom-block-title">父页面</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NavBar from &#39;./compontent/NavBar组件&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;他的&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            show:false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 组件传参 除字符串外 其它类型 得 插值形式 传递 { } */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                首页</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;NavBar title=&#39;首页&#39; show= { false }&gt;&lt;/NavBar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                我的</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;NavBar {...obj}&gt;&lt;/NavBar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">子页面 ./compontent/NavBar组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 类组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class NavBar extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 写法一 解构</span></span>
<span class="line"><span style="color:#A6ACCD;">        let { title ,show} = this.props</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 写法二 直接this.props.属性名 调用 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                { title }</span></span>
<span class="line"><span style="color:#A6ACCD;">                我是接收过来的值: {this.props.title} </span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                { show &amp;&amp; &lt;div&gt;我是传过来的布尔值判断&lt;/div&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 函数式组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default const NavBar = (props) =&gt; { </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 函数式组件传参 接收一个形参接收  叫什么无所谓 业界通写props</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { title,show} = props</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {title}  { show?&#39;显示&#39;:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><h4 id="proptyps-类型约束" tabindex="-1">propTyps 类型约束 <a class="header-anchor" href="#proptyps-类型约束" aria-label="Permalink to &quot;propTyps 类型约束&quot;">​</a></h4><blockquote><p>react 设计了一个库 供我们来约束类型 <code>prop-types</code></p></blockquote><div class="tip custom-block"><p class="custom-block-title">类组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import DemoTypes from &#39;prop-types&#39;; //约束类型库</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;!-- 类组件 --&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;!-- 两种写法类属性  --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">// 写法一 类属性关键字 static Es7写法</span></span>
<span class="line"><span style="color:#A6ACCD;">    static propTypes = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title:DemoTypes.string //string类型</span></span>
<span class="line"><span style="color:#A6ACCD;">        show:DemoTypes.bool  //Boolean类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 写法二 直接挂载到类上  Es6写法</span></span>
<span class="line"><span style="color:#A6ACCD;">App.propTypes = {  //类属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    title:DemoTypes.string //string类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:DemoTypes.bool  //Boolean类型</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">函数式组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import DemoTypes from &#39;prop-types&#39;; //约束类型库</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 函数式组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt;{ }</span></span>
<span class="line"><span style="color:#A6ACCD;">// 直接挂载到函数组件上</span></span>
<span class="line"><span style="color:#A6ACCD;">App.propTypes = {  //类属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    title:DemoTypes.string //string类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:DemoTypes.bool  //Boolean类型</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><h4 id="default-默认值" tabindex="-1">default 默认值 <a class="header-anchor" href="#default-默认值" aria-label="Permalink to &quot;default 默认值&quot;">​</a></h4><blockquote><p>可以给传参属性props 设默认值</p></blockquote><div class="tip custom-block"><p class="custom-block-title">类组件 两种写法类属性</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import DemoTypes from &#39;prop-types&#39;; //约束类型库</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">// 写法一 类属性关键字 static Es7写法</span></span>
<span class="line"><span style="color:#A6ACCD;">    static defaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title:&#39;默认值&#39; //string类型</span></span>
<span class="line"><span style="color:#A6ACCD;">        show:true  //Boolean类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 写法一 解构</span></span>
<span class="line"><span style="color:#A6ACCD;">        let { title ,show} = this.props</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 写法二 直接this.props.属性名 调用 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                { title }</span></span>
<span class="line"><span style="color:#A6ACCD;">                我是接收过来的值: {this.props.title} </span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                { show &amp;&amp; &lt;div&gt;我是传过来的布尔值判断&lt;/div&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 写法二  直接挂载到类上  Es6写法</span></span>
<span class="line"><span style="color:#A6ACCD;">App.defaultProps = {  //类属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    title:&#39;默认值&#39; //string类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:true  //Boolean类型</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">函数式组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const App = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { title,show} = props</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {title}  { show?&#39;显示&#39;:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 直接挂载到函数组件上</span></span>
<span class="line"><span style="color:#A6ACCD;">App.defaultProps = {  //类属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    title:&#39;默认值&#39; //string类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:true  //Boolean类型</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><h3 id="综合小demo" tabindex="-1">综合小Demo <a class="header-anchor" href="#综合小demo" aria-label="Permalink to &quot;综合小Demo&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">父页面</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import NavBar from &#39;./compontent/NavBar组件&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;他的&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            show:false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 组件传参 除字符串外 其它类型 得 插值形式 传递 { } */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                首页</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;NavBar title=&#39;首页&#39; show= { false }&gt;&lt;/NavBar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 如果对象里面的属性 跟 组件内部定义的接收名字一样 可以利用展开运算符简写 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                我的</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;NavBar {...obj}&gt;&lt;/NavBar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">类组件写法 - 子组件( ./compontent/NavBar组件 )</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import DemoTypes from &#39;prop-types&#39;; //约束类型库</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class NavBar extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 写法一 Es7 类属性关键字 static 写法 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //  propsTypes(类属性名 类型约束) 固定名写法  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static propTypes = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">        title: DemoTyps.string,</span></span>
<span class="line"><span style="color:#A6ACCD;">        show:DemoTyps.bool</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //  defaultProps(类属性名 属性默认值) 固定名写法  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static defaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        show:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 写法一 解构</span></span>
<span class="line"><span style="color:#A6ACCD;">        let { title ,show} = this.props</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 写法二 直接this.props.属性名 调用 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    我是接收过来的值: {this.props.title} </span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                {/* 做判断 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">                { show &amp;&amp; title }</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 写法二 Es6类属性 挂载写法 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// propTypes (类属性名 约束类型) 固定写法  </span></span>
<span class="line"><span style="color:#A6ACCD;">NavBar.propTypes = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title:DemoTyps.string,</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:DemoTyps.bool</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// defaultProps (类属性名 属性默认值) 固定写法</span></span>
<span class="line"><span style="color:#A6ACCD;">NavBar.defaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">函数式组件写法 - 子组件( ./compontent/NavBar组件 )</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import DemoTypes from &#39;prop-types&#39;; //约束类型库</span></span>
<span class="line"><span style="color:#A6ACCD;">export default const NavBar2 = (props) =&gt; { </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 函数式组件传参 接收一个形参接收  叫什么无所谓 业界通写props</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { title,show} = props</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {title}  { show?&#39;显示&#39;:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置约束   挂载到函数身上就行了 固定写法</span></span>
<span class="line"><span style="color:#A6ACCD;">NavBar2.propTypes = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title:DemoTyps.string,</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:DemoTyps.bool</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置默认值  挂载到函数身上就行了 固定写法</span></span>
<span class="line"><span style="color:#A6ACCD;">NavBar2.defaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    show:true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></div>`,21),e=[o];function t(c,r,i,C,A,y){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{d as __pageData,m as default};
