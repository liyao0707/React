import{_ as s,o as n,c as a,S as l}from"./chunks/framework.739ae78b.js";const D=JSON.parse('{"title":"基础知识-组件的嵌套","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/04-组件的嵌套.md","filePath":"guide/reactbasics/基础知识/04-组件的嵌套.md"}'),p={name:"guide/reactbasics/基础知识/04-组件的嵌套.md"},e=l(`<h1 id="基础知识-组件的嵌套" tabindex="-1">基础知识-组件的嵌套 <a class="header-anchor" href="#基础知识-组件的嵌套" aria-label="Permalink to &quot;基础知识-组件的嵌套&quot;">​</a></h1><h3 id="组件的嵌套" tabindex="-1">组件的嵌套 <a class="header-anchor" href="#组件的嵌套" aria-label="Permalink to &quot;组件的嵌套&quot;">​</a></h3><blockquote><p>一个根元素标签 <code>只能嵌套一层组件</code> 如果想在组件下面继续嵌套，就<code>需要在该组件的根元素下面嵌套组件</code> 不能子组件下面嵌套 <code>孙子组件|标签|内容</code></p></blockquote><div class="tip custom-block"><p class="custom-block-title">组件嵌套</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React , { Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// NavBarChild组件</span></span>
<span class="line"><span style="color:#A6ACCD;">class NavBarChild extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){ return (&lt;div&gt;我是NavBar组件里面的子组件&lt;/div&gt;)}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// NavBar组件</span></span>
<span class="line"><span style="color:#A6ACCD;">class NavBar extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 如果想在当前组件里面嵌套组件  就在该组件的根元素里面嵌套</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                //我是NavBarChild组件</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;NavBarChild&gt;&lt;/NavBarChild&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// SideBar组件</span></span>
<span class="line"><span style="color:#A6ACCD;">class SideBar extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){ return(&lt;div&gt;我是SideBar组件&lt;/div&gt;)}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Footer组件</span></span>
<span class="line"><span style="color:#A6ACCD;">const Footer   = () =&gt; (&lt;div&gt;我是Footer组件&lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// App根组件</span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 根组件</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 组件之间的嵌套</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;NavBar&gt;&lt;/NavBar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;SideBar&gt;&lt;/SideBar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;Footer&gt;&lt;/Footer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              //正确写法 看NavBar类组件里面的嵌套</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              // 错误写法 不能多层嵌套 </span></span>
<span class="line"><span style="color:#A6ACCD;">               &lt;NavBar&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">                  &lt;div&gt;1111&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">               &lt;/NavBar&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">React.render(&lt;App/&gt; , document.getElementById(&#39;root&#39;))</span></span></code></pre></div></div>`,4),t=[e];function o(c,r,C,i,A,d){return n(),a("div",null,t)}const _=s(p,[["render",o]]);export{D as __pageData,_ as default};
