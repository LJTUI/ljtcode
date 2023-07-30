import{_ as o,o as e,c as a,U as l}from"./chunks/framework.a7865f90.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"audition/node/node的存储.md","filePath":"audition/node/node的存储.md","lastUpdated":null}'),i={name:"audition/node/node的存储.md"},t=l('<h2 id="_1-存储" tabindex="-1">1. 存储 <a class="header-anchor" href="#_1-存储" aria-label="Permalink to &quot;1. 存储&quot;">​</a></h2><p>cookie、localstorage和sessionStorage三者都是在开发中用到的临时存储客户端会话信息或者数据的方法</p><h3 id="存储的时间有效期不同" tabindex="-1">存储的时间有效期不同 <a class="header-anchor" href="#存储的时间有效期不同" aria-label="Permalink to &quot;存储的时间有效期不同&quot;">​</a></h3><ol><li>cookie的有效期是可以设置的，默认的情况下是关闭浏览器后失效</li><li>sessionStorage的有效期是仅保持在当前页面，关闭当前会话页或者浏览器后就会失效</li><li>localStorage的有效期是在不进行手动删除的情况下是一直有效的</li></ol><h3 id="存储的大小不同" tabindex="-1">存储的大小不同 <a class="header-anchor" href="#存储的大小不同" aria-label="Permalink to &quot;存储的大小不同&quot;">​</a></h3><ol><li>cookie的存储是4kb左右，存储量较小，一般页面最多存储20条左右信息</li><li>localStorage和sessionStorage的存储容量是5Mb(官方介绍，可能和浏览器有部分差异性)</li></ol><h3 id="与服务端的通信" tabindex="-1">与服务端的通信 <a class="header-anchor" href="#与服务端的通信" aria-label="Permalink to &quot;与服务端的通信&quot;">​</a></h3><ol><li>cookie会参与到与服务端的通信中，一般会携带在http请求的头部中，例如一些关键密匙验证等。</li><li>localStorage和sessionStorage是单纯的前端存储，不参与与服务端的通信</li></ol><h3 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h3><ol><li>cookie <ol><li>cookie的创建（修改和创建相同，创建同样名称会覆盖之前的）<code>document.cookie=&quot;username=John Doe&quot;</code></li><li>cookie的读取 <code>var x = document.cookie;</code></li><li>cookie的删除 <code>document.cookie = &quot;username=; expires=Thu, 01 Jan 1970 00:00:00 GMT&quot;;</code></li></ol></li><li>sessionStorage的相关操作 <ol><li>存储 <code>sessionStorage.setItem(&#39;数据名&#39;, &#39;数据值&#39;);</code></li><li>读取 <code>let data = sessionStorage.getItem(&#39;数据名&#39;);</code></li><li>清除 <code>sessionStorage.removeItem(&#39;数据名&#39;);</code></li><li>移除所有 <code>sessionStorage.clear();</code></li></ol></li><li>localStorage的相关操作 <ol><li>存储 <code>localStorage.setItem(&#39;数据名&#39;, &#39;数据值&#39;);</code></li><li>读取 <code>let data = localStorage.getItem(&#39;数据名&#39;);</code></li><li>清除 <code>localStorage.removeItem(&#39;数据名&#39;);</code></li><li>移除所有 <code>localStorage.clear();</code></li></ol></li></ol><h3 id="对于浏览器的支持" tabindex="-1">对于浏览器的支持 <a class="header-anchor" href="#对于浏览器的支持" aria-label="Permalink to &quot;对于浏览器的支持&quot;">​</a></h3><ol><li>cookie出现的时间较早，目前见到的浏览器都支持</li><li>localStorage和sessionStorage出现的时间较晚，对于版本较低的浏览器不支持(比如IE8版本以下的都不支持)</li></ol><h2 id="_2-什么是token-token是用来干嘛的" tabindex="-1">2. 什么是token？token是用来干嘛的 <a class="header-anchor" href="#_2-什么是token-token是用来干嘛的" aria-label="Permalink to &quot;2. 什么是token？token是用来干嘛的&quot;">​</a></h2><h3 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-label="Permalink to &quot;token&quot;">​</a></h3><p>是“令牌”的意思。Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。</p><h3 id="是用来干嘛的" tabindex="-1">是用来干嘛的 <a class="header-anchor" href="#是用来干嘛的" aria-label="Permalink to &quot;是用来干嘛的&quot;">​</a></h3><p>使用token机制的身份验证方法</p><ol><li>客户端使用用户名和密码请求登录 <strong>客户端 --&gt; 服务端</strong></li><li>服务端收到请求，验证用户名和密码 <strong>服务端验证 --&gt; 生成<em>token</em></strong></li><li>验证成功后，服务端会生成一个token，然后把这个token发送给客户端。 <strong>客户端 &lt;-<em>token</em>- 服务端</strong></li><li>客户端收到token后把它存储起来，可以放在cookie或者Local Storage（本地存储）里。 <strong>客户端存储<em>token</em></strong></li><li>客户端每次向服务端发送请求的时候都需要带上服务端发给的token。 <strong>客户端 -<em>token</em>-&gt; 服务端</strong></li><li>服务端收到请求，然后去验证客户端请求里面带着token，如果验证成功，就向客户端返回请求的数据。 <strong>客户端 &lt;-- 服务端验证<em>token</em></strong></li></ol><h3 id="token存在哪里" tabindex="-1">token存在哪里 <a class="header-anchor" href="#token存在哪里" aria-label="Permalink to &quot;token存在哪里&quot;">​</a></h3><ol><li>存localStorage里，后期每次请求接口都需要把他当做一个字段传给后台，会有xss攻击</li><li>存cookie里，会自动发送，缺点不能跨域，会有csrf攻击</li></ol><h2 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h2><p>Cookie是一种在客户端（浏览器）存储数据的机制，它允许服务器在浏览器中存储少量的数据，并在需要时读取这些数据。常见的使用场景包括用户认证、购物车、网站偏好设置等。</p><p>Cookie是由服务器发送给浏览器的一个小的文本文件，浏览器会将它保存在本地，以备将来使用。每次浏览器向服务器发送请求时，它都会将相应的Cookie信息发送给服务器。服务器可以读取Cookie中的数据，从而知道用户的身份、偏好设置等信息。</p><p>Cookie通常包含以下属性：</p><ul><li>名称（name）：Cookie的名称。</li><li>值（value）：Cookie中保存的数据。</li><li>过期时间（expires）：Cookie的过期时间。如果不设置，则在<strong>浏览器关闭时失效</strong>。</li><li>域（domain）：Cookie所属的域名。如果不设置，则默认为当前域名。</li><li>路径（path）：Cookie的使用路径。如果不设置，则默认为当前路径。</li><li>安全标志（secure）：表示该Cookie只能通过HTTPS连接传输。</li><li>HttpOnly标志（HttpOnly）：表示该Cookie只能通过HTTP协议访问，无法通过JavaScript脚本访问。</li></ul>',25),n=[t];function r(c,s,d,k,h,m){return e(),a("div",null,n)}const _=o(i,[["render",r]]);export{g as __pageData,_ as default};
