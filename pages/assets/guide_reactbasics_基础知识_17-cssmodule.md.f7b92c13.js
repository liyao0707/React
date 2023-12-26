import{_ as s,o as a,c as n,S as l}from"./chunks/framework.739ae78b.js";const m=JSON.parse('{"title":"基础知识 - css模块化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/17-cssmodule.md","filePath":"guide/reactbasics/基础知识/17-cssmodule.md"}'),e={name:"guide/reactbasics/基础知识/17-cssmodule.md"},o=l(`<h1 id="基础知识-css模块化" tabindex="-1">基础知识 - css模块化 <a class="header-anchor" href="#基础知识-css模块化" aria-label="Permalink to &quot;基础知识 - css模块化&quot;">​</a></h1><h3 id="cssmodule" tabindex="-1">CSSModule <a class="header-anchor" href="#cssmodule" aria-label="Permalink to &quot;CSSModule&quot;">​</a></h3><blockquote><p><code>名字.module.css</code> css 也可以进行模块化，防止与协同开发的人员覆盖样式。只需要在创建css文件的时候，文件名后缀前面加上 <code>.module</code>就可以啦</p></blockquote><blockquote><p><code>名字.module.css</code> 文件导入进来是一个对象，里面是react替我们处理加密过的css类名。</p></blockquote><blockquote><p><code>:global(类名){ }</code> 如果想在<code>名字.module.css</code>里面使用公用全局样式的话，使用 <code>:global</code> 包裹一个类名就变回原来普通css文件的类名啦</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- list.module.css --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.active {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: aqua;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//全局</span></span>
<span class="line"><span style="color:#A6ACCD;">:global(.Myactive){ </span></span>
<span class="line"><span style="color:#A6ACCD;">    color:red;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">improt ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;./public/css/01-组件的样式.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//导入模块化样式</span></span>
<span class="line"><span style="color:#A6ACCD;">import style from &quot;./public/css/list.module.css&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">const App = ()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* 也可以也多个类名 空格拼接就行啦 */}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div className={style.active + &quot; aaaa&quot;}&gt;css模块化&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div className=&quot;Myactive&quot;&gt;我是:global&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&quot;&lt;App/&gt;&quot;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,6),c=[o];function p(t,r,i,d,C,A){return a(),n("div",null,c)}const y=s(e,[["render",p]]);export{m as __pageData,y as default};
