import{_ as t,G as c,o as r,c as D,L as a,w as l,a as s,k as o,U as p}from"./chunks/framework.30c2cbf4.js";const y="/ljtcode/java/1571652681276.png",A="/ljtcode/java/1571655104091.png",C="/ljtcode/java/1571732060388.png",F="/ljtcode/java/1571735388181.png",e="/ljtcode/java/1571735465100.png",i="/ljtcode/java/1571735607347.png",E="/ljtcode/java/1571735715977.png",u="/ljtcode/java/1571735904991.png",d="/ljtcode/java/1571736824748.png",h="/ljtcode/java/1571743818653.png",g="/ljtcode/java/1571744627663.png",f="/ljtcode/java/1571746088704.png",m="/ljtcode/java/1571794778139.png",b="/ljtcode/java/1571817059527.png",v="/ljtcode/java/1571817085047.png",T="/ljtcode/java/1571817628904.png",S="/ljtcode/java/1571818176635.png",_="/ljtcode/java/1571818465276.png",x="/ljtcode/java/1571818597998.png",B="/ljtcode/java/1571818747880.png",j="/ljtcode/java/1571905221097.png",q="/ljtcode/java/1571880094854.png",k="/ljtcode/java/1571901607504.png",Cs=JSON.parse('{"title":"1 线程状态","description":"","frontmatter":{},"headers":[],"relativePath":"audition/java/多线程.md","filePath":"audition/java/多线程.md","lastUpdated":null}'),w={name:"audition/java/多线程.md"},P=p("",62),I=p("",4),V=p("",1),N=p("",9),R=p("",5),L=p("",5),M=p("",5),O=p("",54),H=p("",4),U=p("",4),K=p("",4),z=p("",164),W={start:"5"},G=o("strong",null,"自旋",-1),J=p("",24),Q=p("",8),$=p("",3),Y=p("",6),Z=p("",6),X=p("",4),ss=o("strong",null,"分段锁",-1),ns=o("p",null,"(因为需要进行两次hash操作)。",-1),as=p("",6),ls=p("",3),ps=p("",94);function os(es,ts,cs,rs,Ds,ys){const n=c("font");return r(),D("div",null,[P,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**获取线程池的方法**")]),_:1}),s("："),I,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**ExecutorService中的常见方法**")]),_:1}),s("："),V,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例1**")]),_:1}),s("：演示newCachedThreadPool方法所获取到的线程池的特点"),N,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例2**")]),_:1}),s("：演示newFixedThreadPool方法所获取到的线程池的特点"),R,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例3**")]),_:1}),s("：演示newSingleThreadExecutor方法所获取到的线程池的特点"),L,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例4**")]),_:1}),s("： 演示newSingleThreadScheduledExecutor方法所获取到的线程池的特点(初始化一个具有一个线程的线程池)"),M,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例5**")]),_:1}),s("： 演示newSingleThreadScheduledExecutor方法所获取到的线程池的特点(支持定时及周期性任务执行)"),O,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例演示1**")]),_:1}),s("：演示ThreadPoolExecutor.AbortPolicy任务处理策略"),H,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例演示2**")]),_:1}),s("：演示ThreadPoolExecutor.DiscardPolicy任务处理策略"),U,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例演示3**")]),_:1}),s("：演示ThreadPoolExecutor.DiscardOldestPolicy任务处理策略"),K,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例演示4**")]),_:1}),s("：演示ThreadPoolExecutor.CallerRunsPolicy任务处理策略"),z,o("ol",W,[o("li",null,[s("线程1重新获取内存值V作为当前A的值，并重新计算想要修改的新值。此时对线程1来说，A = 11，B = 12。这个重新尝试的过程被称为"),a(n,{color:"red",size:"4"},{default:l(()=>[G]),_:1}),s("。")])]),J,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例1**")]),_:1}),s("：演示HashMap线程不安全"),Q,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例2**")]),_:1}),s("：演示Hashtable线程安全"),$,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**Hashtable保证线程安全的原理**")]),_:1}),s("："),Y,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**案例3**")]),_:1}),s("：演示ConcurrentHashMap线程安全"),Z,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**ConcurrentHashMap中的重要成员变量**")]),_:1}),X,o("p",null,[s("元素所在的Segment即可(这种锁被称为"),a(n,{size:"3",color:"red"},{default:l(()=>[ss]),_:1}),s(")，其他Segment无需加锁，从而产生锁竞争的概率大大减小，提高了并发读写的效率。该种实现方式的缺点是hash过程比普通的HashMap要长")]),ns,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**ConcurrentHashMap的put方法源码分析**")]),_:1}),as,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**ConcurrentHashMap中的重要成员变量**")]),_:1}),ls,a(n,{color:"blue",size:"3"},{default:l(()=>[s("**ConcurrentHashMap的put方法源码分析**")]),_:1}),ps])}const Fs=t(w,[["render",os]]);export{Cs as __pageData,Fs as default};
