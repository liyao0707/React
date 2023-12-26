import{_ as s,o as n,c as a,S as l}from"./chunks/framework.6bb1a485.js";const d=JSON.parse('{"title":"基础知识 - 非父子组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/12-组件通信/12.4-非父子通信-订阅发布模式.md","filePath":"guide/reactbasics/基础知识/12-组件通信/12.4-非父子通信-订阅发布模式.md"}'),p={name:"guide/reactbasics/基础知识/12-组件通信/12.4-非父子通信-订阅发布模式.md"},e=l(`<h1 id="基础知识-非父子组件通信" tabindex="-1">基础知识 - 非父子组件通信 <a class="header-anchor" href="#基础知识-非父子组件通信" aria-label="Permalink to &quot;基础知识 - 非父子组件通信&quot;">​</a></h1><h3 id="订阅发布模式" tabindex="-1">订阅发布模式 <a class="header-anchor" href="#订阅发布模式" aria-label="Permalink to &quot;订阅发布模式&quot;">​</a></h3><blockquote><p>订阅者 调用中间平台的<code>订阅方法</code> 将订阅回调函数存储到<code>中间平台</code> 发布者调用<code>发布方法</code> 循环 中间平台存储的订阅回调函数 传递数据给订阅回调函数 订阅者接收数据</p></blockquote><ul><li><strong>订阅者：</strong> 将一个回调函数存储到中间平台 利用回调函数的形式接收发布的值</li><li><strong>发布者：</strong> 循环调用 中间平台 存储的订阅回调函数 将发布的数据传给回调函数</li><li><strong>中间平台：</strong> 存储订阅者传递过来的回调函数</li></ul><div class="tip custom-block"><p class="custom-block-title">订阅发布模式小demo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 中间平台</span></span>
<span class="line"><span style="color:#A6ACCD;">const Bus = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    list: [],//存储订阅者回调</span></span>
<span class="line"><span style="color:#A6ACCD;">    //订阅方法 </span></span>
<span class="line"><span style="color:#A6ACCD;">    Subscribe(callback){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.list.push(callback) //存储订阅回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    //发布方法 </span></span>
<span class="line"><span style="color:#A6ACCD;">    Publish(value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 循环调用订阅回调函数 传递发布信息</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.list.forEach(callback =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">           callback &amp;&amp; callback(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 订阅者1</span></span>
<span class="line"><span style="color:#A6ACCD;">Bus.Subscribe((value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// 订阅者2</span></span>
<span class="line"><span style="color:#A6ACCD;">Bus.Subscribe((value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// 发布者</span></span>
<span class="line"><span style="color:#A6ACCD;">Bus.Publish(&#39;发布内容&#39;)</span></span></code></pre></div></div><h4 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 中间平台</span></span>
<span class="line"><span style="color:#A6ACCD;">const Bus = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    list: [],//存储订阅者回调</span></span>
<span class="line"><span style="color:#A6ACCD;">    //订阅方法 </span></span>
<span class="line"><span style="color:#A6ACCD;">    Subscribe(callback){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.list.push(callback) //存储订阅回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    //发布方法 </span></span>
<span class="line"><span style="color:#A6ACCD;">    Publish(value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 循环调用订阅回调函数 传递发布信息</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.list.forEach(callback =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">           callback &amp;&amp; callback(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件Childen1 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Childen1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const {name,content} = props</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 调用发布方法发布数据 </span></span>
<span class="line"><span style="color:#A6ACCD;">            Bus.Publish(content)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {name}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 子组件Childen2 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class Childen2 extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        content:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        Bus.Subscribe((value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setState({content:value})</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 调用订阅方法 注册订阅回调函数到中间平台 </span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {this.state.content}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 通过父组件中间人的形式 来传递数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         { this.state.list.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             return &lt;Childen1 key={item.id} {...item}&gt;&lt;/Childen1&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">        }) }      </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Childen2&gt;&lt;/Childen2&gt;        </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&lt;App/&gt;,ducoment.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,7),o=[e];function c(t,C,i,A,r,y){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
