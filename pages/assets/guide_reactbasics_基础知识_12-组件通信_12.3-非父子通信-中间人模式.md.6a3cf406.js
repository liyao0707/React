import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识-非父子组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/12-组件通信/12.3-非父子通信-中间人模式.md","filePath":"guide/reactbasics/基础知识/12-组件通信/12.3-非父子通信-中间人模式.md"}'),p={name:"guide/reactbasics/基础知识/12-组件通信/12.3-非父子通信-中间人模式.md"},e=l(`<h1 id="基础知识-非父子组件通信" tabindex="-1">基础知识-非父子组件通信 <a class="header-anchor" href="#基础知识-非父子组件通信" aria-label="Permalink to &quot;基础知识-非父子组件通信&quot;">​</a></h1><h3 id="状态提升-中间人模式" tabindex="-1">状态提升（中间人模式） <a class="header-anchor" href="#状态提升-中间人模式" aria-label="Permalink to &quot;状态提升（中间人模式）&quot;">​</a></h3><blockquote><p>多个子组件将自己 <code>共享的状态</code> 交给父组件 在父组件上改变这个状态后<code>通过props</code> 将状态分发给子组件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件Childen1 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const {name,content,ClickContent} = props</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 传递数据给父组件 父组件接收到之后 传给Childen2组件</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ClickContent(content)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {name}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件Childen2 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen2 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const {Content} = props</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 接收父组件中转传递过来的值</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {Content}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        list: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {id:1,name:&#39;前端猛男1&#39;,content:&#39;我是前端猛男1&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">            {id:2,name:&#39;前端猛男2&#39;,content:&#39;我是前端猛男2&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">            {id:3,name:&#39;前端猛男3&#39;,content:&#39;我是前端猛男3&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">            {id:4,name:&#39;前端猛男4&#39;,content:&#39;我是前端猛男4&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        Content:&#39;&#39; //共享的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 通过父组件中间人的形式 来传递数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         { this.state.list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             return &lt;Childen1 key={item.id} {...item} ClickContent={(Content) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 接收子级传来的数据 赋值给共享状态</span></span>
<span class="line"><span style="color:#A6ACCD;">                 this.setState({ Content: Content })</span></span>
<span class="line"><span style="color:#A6ACCD;">            }}&gt;&lt;/Childen1&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">        }) }      </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Childen2 Content={this.state.Content}&gt;&lt;/Childen2&gt;        </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,ducoment.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,4),t=[e];function o(c,C,i,r,A,d){return n(),a("div",null,t)}const _=s(p,[["render",o]]);export{D as __pageData,_ as default};
