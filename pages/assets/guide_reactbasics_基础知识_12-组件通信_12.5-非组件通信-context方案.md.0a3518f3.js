import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const u=JSON.parse('{"title":"基础知识 - 跨组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/12-组件通信/12.5-非组件通信-context方案.md","filePath":"guide/reactbasics/基础知识/12-组件通信/12.5-非组件通信-context方案.md"}'),p={name:"guide/reactbasics/基础知识/12-组件通信/12.5-非组件通信-context方案.md"},e=l(`<h1 id="基础知识-跨组件通信" tabindex="-1">基础知识 - 跨组件通信 <a class="header-anchor" href="#基础知识-跨组件通信" aria-label="Permalink to &quot;基础知识 - 跨组件通信&quot;">​</a></h1><h3 id="context方案" tabindex="-1">context方案 <a class="header-anchor" href="#context方案" aria-label="Permalink to &quot;context方案&quot;">​</a></h3><blockquote><p>通过包裹的方式 在provider(供应商)value属性上面定义数据|方法 ，Consumer(消费者) 内部调用回调函数 利用回调的形参 来获取数据|方法</p></blockquote><ul><li><strong>createContext()方法 :</strong> <code>const ContextDom = React.createContext()</code></li></ul><blockquote><p>可以创建一个跨组件实例对象</p></blockquote><ul><li><strong>Provider属性：</strong> <code>&lt;ContextDom.Provider value={ { 数据|方法 } }&gt; &lt;div&gt;父组件根元素&lt;/div&gt; &lt;/ContextDom.Provider&gt;</code></li></ul><blockquote><p>用来包裹父组件根元素标签 标签上有个value属性 可以定义全局数据 子组件可以用里面定义的数据和方法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const ContextDom = React.createContext();</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &quot;&quot;, //需要传递的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 用实例对象的Provider属性 包裹根元素 标签上有一个value属性用来定义数据</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 子组件可以访问到value传递过去的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ContextDom.Provider</span></span>
<span class="line"><span style="color:#A6ACCD;">            value={{</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &quot;前端猛男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            content: this.state.content, //动态绑定传递的值</span></span>
<span class="line"><span style="color:#A6ACCD;">            ChangeContent: (content) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 子组件调用此方法修改传递过来的数据 来更新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">                    content: content,</span></span>
<span class="line"><span style="color:#A6ACCD;">                });</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">          }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                App</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ContextDom.Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li><strong>Consumer属性：</strong> <code>&lt;ContextDom.Consumer&gt;{ (Context)=&gt; 子组件根元素标签 }&lt;/ContextDom.Consumer&gt;</code></li></ul><blockquote><p>用来包裹需要接收的子元素的根标签 内部需要一个回调函数 函数的返回值是子组件的根标签 回调函数的形参 就是包裹父组件<code>Provider标签上面value属性</code>里面定义的数据|方法 可以调用上面定义的方法 修改父组件定义与value属性绑定的数据 从而让父组件刷新 子组件也相应的跟着变化</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const ContextDom = React.createContext();</span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { name, content } = props;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 包裹 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {(Context) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(Context);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">            onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">              Context.ChangeContent(content);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {name}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">class Childen2 extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 包裹 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {(Context) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(Context);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &lt;div&gt;{Context.content}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="综合小demo" tabindex="-1">综合小Demo <a class="header-anchor" href="#综合小demo" aria-label="Permalink to &quot;综合小Demo&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &quot;react&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建context对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const ContextDom = React.createContext();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { name, content } = props;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 用实例对象的Consumer属性 包裹需要通信的子组件的跟元素 他内部是个回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 内部需要返回我们的根元素标签 形参就是传过来的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        (Context) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(Context);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return (</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 调用形参上面 根元素provider定义的方法 将数据传递过去进行更改</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        Context.ChangeContent(content);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {name}</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            );</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">class Childen2 extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 用实例对象的Consumer属性 包裹需要通信的子组件的跟元素 他内部是个回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 内部需要返回我们的根元素标签 形参就是传过来的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        { </span></span>
<span class="line"><span style="color:#A6ACCD;">            (Context) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(Context);</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 调用形参上面 父组件Provider定义的值</span></span>
<span class="line"><span style="color:#A6ACCD;">                return &lt;div&gt;{Context.content}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            } </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ContextDom.Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    list: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 1, name: &quot;前端猛男1&quot;, content: &quot;我是前端猛男1&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 2, name: &quot;前端猛男2&quot;, content: &quot;我是前端猛男2&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 3, name: &quot;前端猛男3&quot;, content: &quot;我是前端猛男3&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 4, name: &quot;前端猛男4&quot;, content: &quot;我是前端猛男4&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &quot;&quot;, //需要传递的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 用实例对象的Provider属性 包裹根元素 标签上有一个value属性用来定义数据</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 子组件可以访问到value传递过去的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ContextDom.Provider value={ {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &quot;前端猛男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          content: this.state.content, //动态绑定传递的值</span></span>
<span class="line"><span style="color:#A6ACCD;">          ChangeContent: (content) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 子组件调用此方法修改传递过来的数据 来更新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">              content: content,</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        } }</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;!-- 根源素标签 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {this.state.list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    return &lt;Childen1 key={item.id} {...item}&gt;&lt;/Childen1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">                })}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Childen2&gt;&lt;/Childen2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ContextDom.Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,ducoment.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,13),o=[e];function t(c,C,A,r,i,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
