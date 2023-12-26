import{_ as s,o as a,c as n,S as l}from"./chunks/framework.6bb1a485.js";const u=JSON.parse('{"title":"基础知识 - 路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reactbasics/基础知识/16-路由/16.10-反向代理.md","filePath":"guide/reactbasics/基础知识/16-路由/16.10-反向代理.md"}'),e={name:"guide/reactbasics/基础知识/16-路由/16.10-反向代理.md"},p=l(`<h1 id="基础知识-路由" tabindex="-1">基础知识 - 路由 <a class="header-anchor" href="#基础知识-路由" aria-label="Permalink to &quot;基础知识 - 路由&quot;">​</a></h1><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><blockquote><p>一般请求数据的话,浏览器之间是有同源策略跨域限制的。但是两个服务器之间请求数据的话，是没有跨域限制的，我们用本地的服务器去代理我们请求对方的服务器，然后对方服务器响应数据到我们本地的服务器上，然后浏览器请求我们本地的服务器，这样就实现了<code>反向代理</code>,就不会跨域啦</p></blockquote><blockquote><p><code>src/setupProxy.js</code>, 在src目录下创建一个<code>setupProxy.js</code>p配置文件,固定名字不可以乱起。</p></blockquote><ul><li><strong>安装插件</strong></li></ul><p><code>npm install http-proxy-middleware</code></p><ul><li><strong>createProxyMiddleware</strong>: 配置信息 <ul><li><code>target</code> ：需要代理的目标服务器地址</li><li><code>changeOrigin</code>: 是否开启</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- /src/setupProxy --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const { createProxyMiddleware } = require(&#39;http-proxy-middleware&#39;) // 引入请求代理模块</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = function (app) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //注册中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">    app.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;/ajax&#39;, //需要代理的路径 /ajax路径以下的都会被中转代理 (/ajax/login , /ajax/seesoin) </span></span>
<span class="line"><span style="color:#A6ACCD;">        createProxyMiddleware({</span></span>
<span class="line"><span style="color:#A6ACCD;">            target: &#39;https://i.maoyan.com&#39;, //需要代理的服务器地址</span></span>
<span class="line"><span style="color:#A6ACCD;">            changeOrigin: true, //是否开启</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //可以多次注册中间件 设置不同的反向代理</span></span>
<span class="line"><span style="color:#A6ACCD;">    app.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;/api&#39;, //需要代理的路径 /api路径以下的都会被中转代理 (/api/login , /api/seesoin) </span></span>
<span class="line"><span style="color:#A6ACCD;">        createProxyMiddleware({</span></span>
<span class="line"><span style="color:#A6ACCD;">            target: &#39;https://i.maoyan.com&#39;, //需要代理的服务器地址</span></span>
<span class="line"><span style="color:#A6ACCD;">            changeOrigin: true, //是否开启</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- App.jsx --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useEffect } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ReactDom from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = ()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 请求数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    axios</span></span>
<span class="line"><span style="color:#A6ACCD;">      .get(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;/api/mmdb/movie/v3/list/hot.json?ct=%E9%B9%A4%E5%A3%81&amp;ci=239&amp;channelId=4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(res, &quot;请求数据&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;App&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDom.render(&quot;&lt;App/&gt;&quot;,document.getElementById(&#39;root&#39;))</span></span></code></pre></div>`,8),o=[p];function t(c,r,i,A,C,d){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{u as __pageData,D as default};
