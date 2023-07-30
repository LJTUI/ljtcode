import{_ as t,o as e,c as o,U as a}from"./chunks/framework.a7865f90.js";const f=JSON.parse('{"title":"sringBoot","description":"","frontmatter":{},"headers":[],"relativePath":"audition/java/springBoot.md","filePath":"audition/java/springBoot.md","lastUpdated":null}'),i={name:"audition/java/springBoot.md"},l=a('<h1 id="sringboot" tabindex="-1">sringBoot <a class="header-anchor" href="#sringboot" aria-label="Permalink to &quot;sringBoot&quot;">​</a></h1><h2 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h2><h2 id="解耦" tabindex="-1">解耦 <a class="header-anchor" href="#解耦" aria-label="Permalink to &quot;解耦&quot;">​</a></h2><p>server层及Dao层的实现类交给IOC容器管理，添加注解<code>@component</code> 为Controller及Service主图运行时依赖的对象,添加注解<code>@Autowired</code></p><p>Bean的声明，要把某个对象交给IOC容器管理，需要在对应的类上加上如下注解之一</p><table><thead><tr><th style="text-align:left;">注解</th><th style="text-align:left;">说明</th><th style="text-align:left;">位置</th></tr></thead><tbody><tr><td style="text-align:left;">@Component</td><td style="text-align:left;">声明bean的基础注解</td><td style="text-align:left;">不属于以下三类时，用此注解</td></tr><tr><td style="text-align:left;">@Service</td><td style="text-align:left;">@Component的衍生注解</td><td style="text-align:left;">标注在控制器上</td></tr><tr><td style="text-align:left;">@Controller</td><td style="text-align:left;">@Component的衍生注解</td><td style="text-align:left;">标注在业务类上</td></tr><tr><td style="text-align:left;">@Repository</td><td style="text-align:left;">@Component的衍生注解</td><td style="text-align:left;">标注在数据访问上</td></tr></tbody></table><p>一个接口有多个实现类时依赖的对象具体是哪个 <code>@Autowired</code>注解，默认是按照类型进行，存在多个想同类型的bean，会报错 解决： <code>@Primary</code> 提高优先级 <code>@Autowired+@Qualifier(&quot;类名&quot;)</code><code>@Resource(name = &quot;类名&quot;)</code></p><p>@Resource与@Autowired区别 <code>@Resource(name = &quot;类名&quot;)</code>注解，默认是按照名称进行，是JDK里的 <code>@Autowired</code>注解，默认是按照类型进行，是Spring框架的</p><h2 id="aop" tabindex="-1">AOP <a class="header-anchor" href="#aop" aria-label="Permalink to &quot;AOP&quot;">​</a></h2><p>面向切面编程，面向方面编程，面向特定方法编程</p><p>连接点：JoinPoint，可以被AOP控制的方法 通知：Advice，那些重复的逻辑，也就是共性功能 切入点：PointCut，匹配连接点的条件，通知仅会在切入点方法执行时被应用 切面：Aspect，描述通知与切入点的对应关系（通知+切入点） 目标对象：Target通知所应用的对象</p><h2 id="aop通知的类型" tabindex="-1">AOP通知的类型 <a class="header-anchor" href="#aop通知的类型" aria-label="Permalink to &quot;AOP通知的类型&quot;">​</a></h2><ul><li>@Around：环绕通知，在目标方法前后执行</li><li>@Before：前置通知，在目标方法前执行</li><li>@After：后置通知，在目标方法后执行，无论是否有异常都会执行</li><li>@AfterReturning：返回后通知，在目标方法前后执行，有异常不会执行</li><li>@AfterThrowing：异常通知，方法发生异常后执行</li></ul><h2 id="aop通知的顺序-多个切面类的执行顺序" tabindex="-1">AOP通知的顺序，多个切面类的执行顺序 <a class="header-anchor" href="#aop通知的顺序-多个切面类的执行顺序" aria-label="Permalink to &quot;AOP通知的顺序，多个切面类的执行顺序&quot;">​</a></h2><ul><li>和类名自动排序有关</li><li>运行前类名越靠前AOP越先执行，运行后类名越靠后AOP越先执行</li><li>可用<code>@Order(num)</code>控制执行顺序</li></ul><h2 id="spring获取bean对象" tabindex="-1">spring获取Bean对象 <a class="header-anchor" href="#spring获取bean对象" aria-label="Permalink to &quot;spring获取Bean对象&quot;">​</a></h2><ul><li>默认情况下，项目启动时，会把bean都创建好放在ioc容器中</li></ul><h2 id="springboot原理" tabindex="-1">springboot原理 <a class="header-anchor" href="#springboot原理" aria-label="Permalink to &quot;springboot原理&quot;">​</a></h2><ul><li><p>起步依赖，maven的依赖传递</p></li><li><p>自动配置：原理</p><ol><li>@SpringBootApplication，工程引导类，三部分组成 <ol><li>@SpringBootConfiguration，与@Configuration作用相同，用来声明当前也是一个配置类</li><li>@ComponentScan：组件扫描，默认扫描当前引导类所在包及其子包</li><li>@EnableAutoConfiguration：SpringBoot实现自动化配置的核心注解</li><li>@EnableAutoConfiguration底层封装了一个@Import注解，@Import注解实现了一个类AutoConfigurationImportSelect实现类，实现其中的一个selectImports的方法，返回值是需要将哪些类交给IOC容器管理</li><li>@Conditional开头的类，条件判断</li></ol></li></ol></li><li><p>@Conditional类，按照一定的条件进行判断，在满足给定条件后才会注册对应的bean对象到Spring IOC容器中</p><ul><li>@ConditionalOnClass：判断当前环境中是否有对应的字节码文件，才注册bean到IOC容器中</li><li>@ConditionalOnMissingBean：判断当前环境中是否有对应的bean，才注册bean到IOC容器中</li><li>@ConditionalOnProperty：判断配置文件中有对应属性和值，，才注册bean到IOC容器中</li></ul></li></ul>',19),n=[l];function r(d,s,p,c,u,h){return e(),o("div",null,n)}const b=t(i,[["render",r]]);export{f as __pageData,b as default};
