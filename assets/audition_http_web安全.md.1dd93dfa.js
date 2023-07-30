import{_ as e,o,c as i,U as l}from"./chunks/framework.a7865f90.js";const p=JSON.parse('{"title":"安全","description":"","frontmatter":{},"headers":[],"relativePath":"audition/http/web安全.md","filePath":"audition/http/web安全.md","lastUpdated":null}'),t={name:"audition/http/web安全.md"},a=l('<h1 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h1><h2 id="xss" tabindex="-1">xss <a class="header-anchor" href="#xss" aria-label="Permalink to &quot;xss&quot;">​</a></h2><p>XSS（Cross-Site Scripting）在受害者的<code>浏览器中注入恶意脚本</code>，盗取存储在客户端的cookie或者其他网站用于识别客户端身份的敏感信息。</p><p>XSS 攻击通常可以分为三种类型：</p><ol><li>反射型 XSS 攻击</li></ol><p>反射型 XSS 攻击通常发生在搜索引擎等 Web 应用程序中，攻击者会利用<code>搜索表单等功能，向服务器提交恶意代码</code>，服务器将恶意代码作为响应返回给用户的浏览器，浏览器解释执行该代码，导致攻击成功。例如，攻击者可以构造包含恶意代码的链接，引诱用户点击该链接，从而触发攻击。</p><ol start="2"><li>存储型 XSS 攻击</li></ol><p>存储型 XSS 攻击通常发生在社交网站、留言板、博客等 Web 应用程序中，攻击者会<code>将恶意代码存储在服务器上</code>，当其他用户访问包含恶意代码的页面时，恶意代码会从服务器返回并在其浏览器中执行，导致攻击成功。例如，攻击者可以在博客评论区中提交恶意代码，当其他用户浏览该博客时，恶意代码会从服务器返回并在其浏览器中执行，从而实现攻击。</p><ol start="3"><li>DOM 型 XSS 攻击</li></ol><p>DOM 型 XSS 攻击通常发生在 Web 应用程序中，攻击者会通过<code>修改 Web 页面的 DOM (文档对象模型) 来触发攻击</code>，而不是从服务器返回恶意代码。这种攻击通常需要用户与 Web 应用程序交互，例如在搜索框中输入特定的恶意代码。例如，攻击者可以构造包含恶意代码的搜索字符串，当用户输入该字符串并提交搜索表单时，恶意代码会在其浏览器中执行，从而实现攻击。</p><p>为了防止 XSS 攻击，可以采取以下措施：</p><ol><li>对用户输入的数据进行过滤和验证，防止恶意代码注入。</li><li>对输出到 Web 页面的数据进行编码，避免恶意代码在浏览器中执行。</li><li>使用 Content Security Policy (CSP) 策略，限制页面中可以执行的脚本。</li><li>使用 HttpOnly 和 Secure 标记，防止 Cookie 被窃取。</li><li>对于前端框架和第三方组件，要及时更新到最新版本，避免已知的安全漏洞。</li></ol><h2 id="web安全有哪些方面" tabindex="-1">web安全有哪些方面 <a class="header-anchor" href="#web安全有哪些方面" aria-label="Permalink to &quot;web安全有哪些方面&quot;">​</a></h2><p>Web安全是指保护Web应用程序和Web服务器免受各种安全威胁的一系列措施。Web安全覆盖了很多方面，包括但不限于以下几个方面：</p><ol><li>身份认证和授权：身份认证是验证用户身份的过程，而授权是确定用户是否有权访问某些资源的过程。Web应用程序必须对用户进行身份认证和授权，以确保只有授权的用户才能访问敏感信息和功能。</li><li>输入验证和过滤：Web应用程序必须对用户输入进行验证和过滤，以确保输入数据符合预期格式和范围，并且不包含恶意代码或攻击负载。输入验证和过滤可以有效地防止SQL注入、跨站点脚本（XSS）等攻击。</li><li>数据保护和加密：Web应用程序必须保护用户的敏感信息，如用户名、密码、信用卡号等。数据保护和加密可以使用加密协议（如SSL/TLS）来加密数据传输，也可以使用加密算法对数据进行加密和解密。</li><li>安全配置和管理：Web服务器和Web应用程序必须采取安全的配置和管理策略，以确保应用程序和服务器免受各种攻击。这包括配置文件权限、日志记录、漏洞扫描和修复、安全审计等方面。</li><li>网络安全：Web应用程序的安全还涉及网络安全，包括网络拓扑、网络协议、网络访问控制等方面。这可以确保Web应用程序免受网络层面的攻击，如拒绝服务攻击（DoS）、端口扫描等。</li><li>应用程序架构和设计：Web应用程序的架构和设计也可以影响安全性。例如，使用安全的框架、设计模式和最佳实践，可以降低应用程序受攻击的风险。</li><li>社交工程和恶意行为：Web安全还需要考虑社交工程和恶意行为，如钓鱼、恶意软件等。用户教育和意识提高可以帮助减少这些攻击的风险。</li></ol><h2 id="csrf和xss" tabindex="-1">CSRF和XSS <a class="header-anchor" href="#csrf和xss" aria-label="Permalink to &quot;CSRF和XSS&quot;">​</a></h2><p>CSRF（Cross-Site Request Forgery）和XSS（Cross-Site Scripting）都是常见的安全漏洞，存在于 Web 应用程序中。 CSRF 是一种攻击方式，攻击者通过利用<strong>用户当前已经登录的身份</strong>，<strong>伪造请求并以用户的名义</strong>执行恶意操作。 XSS 是指攻击者将<strong>恶意脚本</strong>注入到网页中，使其在用户浏览器中执行。</p><h2 id="csrf-cross-site-request-forgery-跨站请求伪造" tabindex="-1">CSRF（Cross-Site Request Forgery）跨站请求伪造 <a class="header-anchor" href="#csrf-cross-site-request-forgery-跨站请求伪造" aria-label="Permalink to &quot;CSRF（Cross-Site Request Forgery）跨站请求伪造&quot;">​</a></h2><p>CSRF（Cross-Site Request Forgery）攻击通常通过以下步骤实施：</p><ul><li>攻击者创建恶意网页：攻击者创建一个包含恶意代码的网页，其中包含<code>对目标网站的请求</code>。</li><li>用户访问恶意网页：攻击者通过各种方式<code>诱使用户访问恶意网页</code>，例如通过电子邮件、社交媒体、钓鱼链接等方式。</li><li>用户在目标网站已登录的情况下访问恶意网页：由于<code>用户在目标网站已经登录</code>，<code>浏览器中保存了用户的会话信息（例如Cookie）</code>。</li><li>恶意请求发送：恶意网页中的恶意代码会自动<code>触发用户的浏览器向目标网站发送请求</code>，这些请求包含攻击者精心构造的参数和数据。</li><li>目标网站接收请求并执行：目标网站接收到请求后，由于<code>浏览器在发送请求时会自动附上用户的会话信息，导致目标网站无法区分正常请求和恶意请求。</code></li><li>攻击成功：目标网站在没有足够的验证措施的情况下，执行了攻击者所发送的恶意请求，可能导致不可预料的危害。</li></ul><h2 id="防范-csrf-攻击的措施" tabindex="-1">防范 CSRF 攻击的措施： <a class="header-anchor" href="#防范-csrf-攻击的措施" aria-label="Permalink to &quot;防范 CSRF 攻击的措施：&quot;">​</a></h2><ul><li>验证来源，CSRF令牌：在每个用户请求中包含一个随机生成的CSRF令牌，并在服务器端进行验证。只有在令牌验证通过的情况下，才执行请求。</li><li>启用 <code>SameSite 属性</code>：设置 Cookie 的 SameSite 属性为 &quot;Strict&quot; 或 &quot;Lax&quot;，以<code>限制 Cookie 的跨站请求。</code></li><li>验证请求方法</li><li><code>添加验证码</code></li></ul><h2 id="防范-xss-攻击的措施" tabindex="-1">防范 XSS 攻击的措施： <a class="header-anchor" href="#防范-xss-攻击的措施" aria-label="Permalink to &quot;防范 XSS 攻击的措施：&quot;">​</a></h2><ul><li><code>输入验证和过滤</code>：对于用户输入的数据，进行输入验证和过滤，确保只接受符合预期格式的数据</li><li><code>输出转义</code>：在将用户输入的数据输出到网页时，进行合适的转义，将特殊字符转换为其对应的 HTML 实体，避免被解释为可执行的脚本。</li><li>内容安全策略（CSP）：使用内容安全策略来限制网页中可以执行的脚本和资源。</li><li>HttpOnly 标记：<code>将敏感的 Cookie 标记为 HttpOnly</code>，这样它们就无法通过 JavaScript 访问。</li><li>安全编码实践：遵循安全编码实践，包括对输入进行严格验证、不信任外部数据、及时更新软件和框架等，以减少潜在的安全漏洞。</li></ul><h2 id="sql注入" tabindex="-1">SQL注入 <a class="header-anchor" href="#sql注入" aria-label="Permalink to &quot;SQL注入&quot;">​</a></h2><p>Sql 注入攻击，是通过将恶意的 Sql查询或添加语句插入到应用的输入参数中，再在后台 Sql服务器上解析执行进行的攻击</p>',26),r=[a];function s(c,S,d,n,h,b){return o(),i("div",null,r)}const q=e(t,[["render",s]]);export{p as __pageData,q as default};
