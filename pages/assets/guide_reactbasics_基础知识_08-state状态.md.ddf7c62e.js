import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const d=JSON.parse('{"title":"基础知识-组件的数据挂载方式","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/08-state状态.md","filePath":"guide/reactbasics/基础知识/08-state状态.md"}'),p={name:"guide/reactbasics/基础知识/08-state状态.md"},e=l(`<h1 id="基础知识-组件的数据挂载方式" tabindex="-1">基础知识-组件的数据挂载方式 <a class="header-anchor" href="#基础知识-组件的数据挂载方式" aria-label="Permalink to &quot;基础知识-组件的数据挂载方式&quot;">​</a></h1><h3 id="状态-state" tabindex="-1">状态 <code>state</code> <a class="header-anchor" href="#状态-state" aria-label="Permalink to &quot;状态 \`state\`&quot;">​</a></h3><blockquote><p><code>类似vue的data()数据源泉</code> 状态就是组件描述某种情况显示的数据,由组件自己控制维护,使用状态的目的就是自己为了在不同的情况下让组件显示不同的数据</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 固定写法 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> state = {  //创建数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:1</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> //调用数据</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(this.state.a) // 1</span></span></code></pre></div><h3 id="修改状态-this-setstate" tabindex="-1">修改状态 <code>this.setState()</code> <a class="header-anchor" href="#修改状态-this-setstate" aria-label="Permalink to &quot;修改状态 \`this.setState()\`&quot;">​</a></h3><blockquote><p>不能直接操作修改数据 React是无法感知的 需要使用<code>this.setState()</code>方法来修改 state状态里面的数据 这点类似小程序</p></blockquote><blockquote><p><strong>setState 接收第二个参数 是个回调函数 数据跟真实Dom更新完毕之后 就会触发回调</strong></p></blockquote><blockquote><p><strong>只要setState方法修改状态 就会触发组件render()函数重新调用更新 render函数内部立即调用的方法也会随着更新调用</strong></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 固定方法 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> this.setState({ a:2 }, () =&gt; { }) </span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(this.state.a) // 2</span></span></code></pre></div><ul><li><strong>创建状态</strong> <code>state = { a:1}</code></li><li><strong>调用状态</strong> <code>this.state.a</code></li><li><strong>修改状态</strong> <code>this.setState({ a:1 })</code></li></ul><div class="tip custom-block"><p class="custom-block-title">注意事项</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">17 版本之前</span></span>
<span class="line"><span style="color:#A6ACCD;">setState 在同步中 是异步更新状态 (数据 真实Dom)\` </span></span>
<span class="line"><span style="color:#A6ACCD;">setState 在异步中 是同步更新状态 (数据 真实Dom)\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">18 版本之后</span></span>
<span class="line"><span style="color:#A6ACCD;">setState 都是异步的状态</span></span></code></pre></div></div><h3 id="状态小demo" tabindex="-1">状态小Demo <a class="header-anchor" href="#状态小demo" aria-label="Permalink to &quot;状态小Demo&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">状态体验</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 设置初始状态 固定写法</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Show:false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;前端猛男&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={ async() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 修改数据状态 this.setState() 固定方法</span></span>
<span class="line"><span style="color:#A6ACCD;">                   await this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                      Show:!this.state.Show</span></span>
<span class="line"><span style="color:#A6ACCD;">                   })</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 调用状态</span></span>
<span class="line"><span style="color:#A6ACCD;">                  console.log(this.state.Show?&#39;点赞一下&#39;:&#39;取消点赞&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 {this.state.Show?&#39;取消点赞&#39;:&#39;点赞&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="数组列表渲染" tabindex="-1">数组列表渲染 <a class="header-anchor" href="#数组列表渲染" aria-label="Permalink to &quot;数组列表渲染&quot;">​</a></h3><blockquote><p>1.如果想在页面是跟vue里面的 v-for 一样动态循环出来标签的话 需要用到 <code>map</code> 方法 ，里面返回一个标签数组，直接插入到 { } 里面 ,react会帮我们自动join一下 不需要我们自己手动join</p></blockquote><blockquote><p>2.同时也跟vue一样 需要有一个唯一的 <code>key</code> 值 设置key值 是为了列表的重排跟复用， 提升性能</p></blockquote><div class="tip custom-block"><p class="custom-block-title">map循环列表</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 设置初始状态 固定写法</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    list:[&#39;111&#39;,&#39;222&#39;,&#39;333&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //利用map循环 返回一组标签数组 每个标签必须有一个唯一的 key值</span></span>
<span class="line"><span style="color:#A6ACCD;">    // key值 是为了列表的重排跟复用， 设置key值 提升性能</span></span>
<span class="line"><span style="color:#A6ACCD;">    const liArray = this.state.list.map((item,index)=&gt; &lt;li key={ index }&gt; { item } &lt;/li&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            //插入liArray标签数组 React帮我们自动join了一下 不需要我们手动join</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                { liArray }</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="增删小demo" tabindex="-1">增删小Demo <a class="header-anchor" href="#增删小demo" aria-label="Permalink to &quot;增删小Demo&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">最好不要直接在原数据上面操作 深拷贝一份原数据 在这个基础上修改</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 增删小demo</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    //创建Ref应用属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    MyRef = React.createRef()</span></span>
<span class="line"><span style="color:#A6ACCD;">    //状态源</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       list:[&#39;1&#39;,&#39;2&#39;,&#39;3&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 增加方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    Addli = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险</span></span>
<span class="line"><span style="color:#A6ACCD;">        let NewList = [...this.state.list] // 写法一</span></span>
<span class="line"><span style="color:#A6ACCD;">        // let NewList = this.state.list.slice() // 写法二</span></span>
<span class="line"><span style="color:#A6ACCD;">        // let NewList = this.state.list.concat() // 写法三</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 插入输入框的值</span></span>
<span class="line"><span style="color:#A6ACCD;">        NewList.push(this.MyRef.current.value) </span></span>
<span class="line"><span style="color:#A6ACCD;">        // 修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">            list:NewList</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 删除方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    RemoveLi = (index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险</span></span>
<span class="line"><span style="color:#A6ACCD;">        let NewList = this.state.list.slice()  // 写法一</span></span>
<span class="line"><span style="color:#A6ACCD;">        // let NewList = this.state.list.concat() // 写法二</span></span>
<span class="line"><span style="color:#A6ACCD;">        // let NewList = [...this.state.list] // 写法三</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //删除当前数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        NewList.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 修改状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({ </span></span>
<span class="line"><span style="color:#A6ACCD;">            list:NewList</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 构建标签数组 标签里面也可以操作方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        let liArray = this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return (</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;li key={ index }&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    { item }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;button onClick={ ()=&gt; this.RemoveLi(index) }&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/li&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">            )</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input ref= { this.MyRef }&gt;&lt;/input&gt; &lt;button onClick={ ()=&gt; this.Addli() }&gt;添加&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                { liArray }</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div><h3 id="条件渲染" tabindex="-1">条件渲染 <a class="header-anchor" href="#条件渲染" aria-label="Permalink to &quot;条件渲染&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 条件判断一： 是否有该元素  类似v-if  </span></span>
<span class="line"><span style="color:#A6ACCD;">{this.state.list.length === 0 ? &lt;div&gt;暂无数据 类似v-if&lt;/div&gt; : null}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 条件判断二： 是否显示隐藏  类似v-show</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div className={ this.state.list.length === 0?&#39;&#39;:&#39;hidden&#39; }&gt;暂无数据 类似v-show&lt;/div&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">小demo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;../public/css/01-组件的样式.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App3 extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    MyRef = React.createRef()</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       list:[&#39;1&#39;,&#39;2&#39;,&#39;3&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 增加方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    Addli = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险</span></span>
<span class="line"><span style="color:#A6ACCD;">        let NewList = [...this.state.list] // 写法一</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 插入输入框的值</span></span>
<span class="line"><span style="color:#A6ACCD;">        NewList.push(this.MyRef.current.value) </span></span>
<span class="line"><span style="color:#A6ACCD;">        // 修改原数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">            list:NewList</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.MyRef.current.value = &#39;&#39; //清空输入框</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 删除方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    RemoveLi = (index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 最好深拷贝 不要直接操作原数据 会有不可预知的风险</span></span>
<span class="line"><span style="color:#A6ACCD;">        let NewList = this.state.list.slice()  // 写法一</span></span>
<span class="line"><span style="color:#A6ACCD;">        NewList.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 修改原数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({ </span></span>
<span class="line"><span style="color:#A6ACCD;">            list:NewList</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 构建标签数组 标签里面也可以操作方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        let liArray = this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return (</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {item}</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;button onClick={()=&gt;this.RemoveLi(index)}&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/li&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">            )</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input ref= { this.MyRef }&gt;&lt;/input&gt; &lt;button onClick={ ()=&gt; this.Addli() }&gt;添加&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                { liArray }</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 条件判断一： 是否有该元素  类似v-if  */}</span></span>
<span class="line"><span style="color:#A6ACCD;">            {this.state.list.length === 0 ? &lt;div&gt;暂无数据 类似v-if&lt;/div&gt; : null}</span></span>
<span class="line"><span style="color:#A6ACCD;">            {/* 条件判断二： 是否显示隐藏  类似v-show*/}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div className={ this.state.list.length === 0?&#39;&#39;:&#39;hidden&#39; }&gt;暂无数据 类似v-show&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,22),t=[e];function o(c,i,C,A,r,y){return n(),a("div",null,t)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
