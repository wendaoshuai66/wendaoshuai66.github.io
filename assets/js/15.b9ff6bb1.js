(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{220:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-补充"}},[s._v("#")]),s._v(" Linux 补充")]),s._v(" "),t("h2",{attrs:{id:"认识-linux-环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识-linux-环境"}},[s._v("#")]),s._v(" 认识 Linux 环境")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/Linux.png",alt:"网卡的配置文件"}}),s._v("\n##远程登录 Linux 系统")]),s._v(" "),t("p",[s._v("一般的 Linux 系统都是用来做服务器来使用的，所以我们必须要操作它，服务器之所以叫做服务器是因为上面跑着很多服务，服务永不停止，这样才能在有需要的时候提供一些功能。如果不能远程登录到服务器上去，那么程序就没法部署上去。因为现在的服务器大多数都在机房或者都是云服务器，所以需要远程连接登录上去。")]),s._v(" "),t("h3",{attrs:{id:"远程登录协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程登录协议"}},[s._v("#")]),s._v(" 远程登录协议")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ssh root@192.168.0.104\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("ssh 远程登录到服务器，退出")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("exit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"不同操作系统下远程登录的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同操作系统下远程登录的方式"}},[s._v("#")]),s._v(" 不同操作系统下远程登录的方式")]),s._v(" "),t("p",[s._v("windows")]),s._v(" "),t("p",[s._v("1 老牌的终端软件 putty")]),s._v(" "),t("p",[s._v("2."),t("a",{attrs:{href:"https://xshell.en.softonic.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("XShell"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("3."),t("a",{attrs:{href:"https://cmder.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cmder"),t("OutboundLink")],1),s._v(" (比较推荐在微软 Terminal 出之前)\nLinux 和 MacOS")]),s._v(" "),t("p",[s._v("Linux 和 MacOS 的终端里面登录都自带了 ssh 命令，可以通过 ssh 命令来登录远程服务器。")]),s._v(" "),t("h3",{attrs:{id:"scp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[s._v("#")]),s._v(" scp")]),s._v(" "),t("p",[s._v("scp 是 Linux 上的一个命令，Mac 也可以使用。这个命令的主要作用就是远程复制文件。")]),s._v(" "),t("p",[s._v("这个命令使用的是加密连接，和 ssh 加密的通道一样。")]),s._v(" "),t("p",[s._v("远程复制文件的三种姿势")]),s._v(" "),t("p",[s._v("1.本地文件复制到远程服务器上")]),s._v(" "),t("p",[s._v("把本地文件复制到远程服务器上是部署的一个基本操作，通过 scp 命令可以完成：")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//scp 文件名 服务器的用户名@服务器的ip:复制到的路径\n//如果上传的是目录: scp -r 文件名 服务器的用户名@服务器的ip:复制到的路径\nscp test.zip root@192.168.0.104:/test//上面命令的意思是把本地的test.zip文件复制到远程\n//服务器的/test目录去。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2.远程服务器的文件复制到本地")]),s._v(" "),t("p",[s._v("scp 是一个远程复制文件命令，当然也可以从远程复制到本地。复制到本地很简单：")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//scp 服务器的用户名@服务器的ip:文件路径 复制到的路径\n\n//如果上传的是目录: scp -r 服务器的用户名@服务器的ip:文件路径 复制到的路径\n\n\n scp -r root@192.168.0.104:~/test ~/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("3.远程服务器文件复制到远程服务器")]),s._v(" "),t("p",[s._v("这种方式指的是一个远程服务器的文件复制到另一个远程服务器上，而且只需要在本地执行。可想而知这个命令的强大。")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n//scp 服务器的用户名@服务器的ip:文件路径 服务器的用户名@服务器的ip:复制到的路径\n\n//scp -r 服务器的用户名@服务器的ip:文件路径 服务器的用户名@服务器的ip:复制到的路径\n\nscp -r root@192.168.0.104:~/test root@192.168.0.106:~/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("help")]),s._v(" "),t("p",[s._v("更多的 scp 命令语法可以通过查看帮助文档来学习。")]),s._v(" "),t("p",[s._v("但是 scp –help 命令提供的是简单文档")]),s._v(" "),t("h2",{attrs:{id:"网络管理命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络管理命令"}},[s._v("#")]),s._v(" 网络管理命令")]),s._v(" "),t("h3",{attrs:{id:"查看-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-ip"}},[s._v("#")]),s._v(" 查看 ip")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ifconfig //非常古老的\n\nip addr//新版本（centos 7版本以上）\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"有时候-ip-地址找不到的启动网卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有时候-ip-地址找不到的启动网卡"}},[s._v("#")]),s._v(" 有时候 ip 地址找不到的启动网卡")]),s._v(" "),t("p",[s._v("如果有时候我们要重启网卡，一定要在图形化界面上重启，如果在终端中远程登录，就是直接掉线。")]),s._v(" "),t("p",[s._v("网卡的配置文件：/etc/sysconfig/network-scripts/ifcfg- [name]\n查看网卡的配置文件 cat /etc/sysconfig/network-scripts/ifcfg- [name] 如图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/onboot.png",alt:"网卡的配置文件"}})]),s._v(" "),t("p",[s._v("安装的过程没有激活网卡 ONBOOT = “no”需要 vi 修改")]),s._v(" "),t("p",[s._v("关闭网卡：ifdown 网卡名称")]),s._v(" "),t("p",[s._v("启动网卡：ifup 网卡名称")]),s._v(" "),t("h3",{attrs:{id:"route"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#route"}},[s._v("#")]),s._v(" route")]),s._v(" "),t("p",[s._v("若果 route 没有找到，可以一下两种方式解决")]),s._v(" "),t("p",[s._v("第一种方式")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//因为都是以前的命令所以找不到，可以安装\nyum install net-tools\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("第二种方式")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ip route\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("route 命令用于帮助诊断网络。当局域网访问不了互联网的时候，我们首先使用 ping 命令执行下，如果没有得到返回，那么可能就是网络出了问题，那么就可以使用 route 命令查看一下路由配置对不对。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/route.png",alt:"route"}})]),s._v(" "),t("p",[s._v("Destination：路由名称。")]),s._v(" "),t("p",[s._v("Gateway：表示网关。")]),s._v(" "),t("p",[s._v("Genmask：表示通过网关可以达到什么样的网段。")]),s._v(" "),t("p",[s._v("Ifce：Interface，表示网络走的是什么网卡。")]),s._v(" "),t("h3",{attrs:{id:"查询-linux-网络端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询-linux-网络端口"}},[s._v("#")]),s._v(" 查询 Linux 网络端口")]),s._v(" "),t("h4",{attrs:{id:"ss-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ss-命令"}},[s._v("#")]),s._v(" ss 命令")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ss -an //输出进程的信息就会包括端口号\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ss.png",alt:"ss"}})]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ss-anp //显示使用网络的进程\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ssAnp.png",alt:"ss-anp"}})]),s._v(" "),t("p",[s._v("使用管道机制查询单个网络端口")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ss -anp | grep 80\nss -an | grep 80\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"netstat-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netstat-命令"}},[s._v("#")]),s._v(" netstat 命令")]),s._v(" "),t("p",[s._v("netstat 命令和 ss 命令用法相同。")]),s._v(" "),t("h2",{attrs:{id:"linux-进程管理相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-进程管理相关命令"}},[s._v("#")]),s._v(" Linux 进程管理相关命令")]),s._v(" "),t("h3",{attrs:{id:"top-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top-命令"}},[s._v("#")]),s._v(" top 命令")]),s._v(" "),t("p",[s._v("top 命令相当于 windows 的任务管理器，显示所有进程的状态。属于动态")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/top.png",alt:"top"}})]),s._v(" "),t("h3",{attrs:{id:"ps-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps-命令"}},[s._v("#")]),s._v(" ps 命令")]),s._v(" "),t("p",[s._v("ps 命令用于显示当前进程 (process) 的状态,查看当前操作系统某一瞬间净化才能的状态.")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ps.png",alt:"ps"}})]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ps 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义\n-A 列出所有的行程\n-w 显示加宽可以显示较多的资讯\n-au 显示较详细的资讯\n-aux 显示所有包含其他使用者的行程\nau(x) 输出格式 :\nUSER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND\nUSER: 行程拥有者\nPID: pid\n%CPU: 占用的 CPU 使用率\n%MEM: 占用的记忆体使用率\nVSZ: 占用的虚拟记忆体大小\nRSS: 占用的记忆体大小\nTTY: 终端的次要装置号码 (minor device number of tty)\nSTAT: 该行程的状态:\nD: 无法中断的休眠状态 (通常 IO 的进程)\nR: 正在执行中\nS: 静止状态\nT: 暂停执行\nZ: 不存在但暂时无法消除\nW: 没有足够的记忆体分页可分配\n<: 高优先序的行程\nN: 低优先序的行程\nL: 有记忆体分页分配并锁在记忆体内 (实时系统或捱A I/O)\nSTART: 行程开始时间\nTIME: 执行的时间\nCOMMAND:所执行的指令\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h4",{attrs:{id:"ps-aux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps-aux"}},[s._v("#")]),s._v(" ps aux")]),s._v(" "),t("p",[s._v("如图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/psAux.png",alt:"ps aux"}})]),s._v(" "),t("p",[s._v("1.user：表示这个进程是以哪一个用户启动的。")]),s._v(" "),t("p",[s._v("2.command：进程的权限，是在用户身上继承下来的，如果以 root 身份启动，那么这个进程会获得 root 用户的所有权限。")]),s._v(" "),t("p",[s._v("3.pid：进程编号")]),s._v(" "),t("p",[s._v("4.stat : 当前一瞬间，进程的状态。(S：休眠状态，Z：僵尸状态(父进程已经死掉了，子进程没有被操作系统及时的回收))")]),s._v(" "),t("p",[s._v("特殊的进程：1 号进程是用来管理其他进程的，这个进程是杀不了的，1 号进程是所有其他进程的父进程，如果父进程死了，子进程一块死掉。")]),s._v(" "),t("p",[s._v("####查找特定的进程")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ps aux | grep 服务名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("管道命令 ‘|’ 符号： 把前面命令产生的结果，传给后面的命令")]),s._v(" "),t("p",[s._v("1.ps aux ：查看当前操作系统某一个瞬间所有进程的状态。")]),s._v(" "),t("p",[s._v("2.grep 服务名：筛选，在上面命令的结果中筛选出指定服务名的进程")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/psGrep.png",alt:"查找特定的进程"}})]),s._v(" "),t("p",[s._v("显示了三个服务，但是只有上面两个是 sshd 的服务，第一个是父进程，第二个是子进程，第三个是 grep 查找的服务。")]),s._v(" "),t("h5",{attrs:{id:"区分父进程和子进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区分父进程和子进程"}},[s._v("#")]),s._v(" 区分父进程和子进程")]),s._v(" "),t("p",[s._v("看 pid，谁的 pid 小，谁就有可能是父进程。")]),s._v(" "),t("h3",{attrs:{id:"杀死进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#杀死进程"}},[s._v("#")]),s._v(" 杀死进程")]),s._v(" "),t("h4",{attrs:{id:"kill-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill-命令"}},[s._v("#")]),s._v(" kill 命令")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kill 进程的pid\n\nkill -9 进程的pid //强制杀死进程\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("原理： kill 功能是向操作系统发一个信号过去，linux 操作系统有 32 种信号(各有各的用途)，-9 就表示 9 号信号，9 号信号的意思就是强制关闭一个进程。不加 -9 就是让进程自行退出的信号。")]),s._v(" "),t("h4",{attrs:{id:"pkill-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pkill-命令"}},[s._v("#")]),s._v(" pkill 命令")]),s._v(" "),t("p",[s._v("pkill 命令和 kill 类似，主要是 pkill 后面跟的是进程的名称，kill 后面跟的是进程的 pid。")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kill 进程的名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"w-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#w-命令"}},[s._v("#")]),s._v(" w 命令")]),s._v(" "),t("p",[s._v("显示当前谁登陆了远程服务器上。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/w.png",alt:"w"}})]),s._v(" "),t("h3",{attrs:{id:"last-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-命令"}},[s._v("#")]),s._v(" last 命令")]),s._v(" "),t("p",[s._v("账号所有的登陆历史")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("last\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示上 10 条")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("last -n 10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("登陆失败的")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("lastb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"linux-怎么管理服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-怎么管理服务"}},[s._v("#")]),s._v(" Linux 怎么管理服务")]),s._v(" "),t("h3",{attrs:{id:"查看服务名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看服务名"}},[s._v("#")]),s._v(" 查看服务名")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl status 服务名 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"停止服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止服务"}},[s._v("#")]),s._v(" 停止服务")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl stop 服务名 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"开启服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启服务"}},[s._v("#")]),s._v(" 开启服务")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl start 服务名 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"重启服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启服务"}},[s._v("#")]),s._v(" 重启服务")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl restart 服务名 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"重新加载一个服务的配置文件-不是通用的-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新加载一个服务的配置文件-不是通用的-nginx"}},[s._v("#")]),s._v(" 重新加载一个服务的配置文件(不是通用的 nginx)")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl reload 服务名 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"操作系统概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统概述"}},[s._v("#")]),s._v(" 操作系统概述")]),s._v(" "),t("h3",{attrs:{id:"古老的操作系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#古老的操作系统"}},[s._v("#")]),s._v(" 古老的操作系统")]),s._v(" "),t("p",[s._v("古老的 Dos 系统，它是 windows 系统的前身，最早的 windows 是构建在 Dos 系统下面的，作为 Dos 系统的一种增强型界面。后来 windows95 出现之后，windows 就独立了，它不依赖 Dos 了，反而 Dos 就成为了一个子系统嵌入到 windows 中，一直到今天(现在的终端不是 Dos 了，但是一直使用着 Dos 的命令)。")]),s._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" windows")]),s._v(" "),t("p",[s._v("windows 作为中国普遍的操作系统是适用于工作和娱乐的。但是在开发环境下相对于 Mac 和 Linux 就有些欠缺，windows 的终端也没有 Mac 和 Linux 强大。")]),s._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),t("p",[s._v("Linux 系统是一个开源的操作系统，适合程序员做开发。Linux 的桌面不是很成熟，但是服务器系统是非常强大的。")]),s._v(" "),t("h3",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" MacOS")]),s._v(" "),t("p",[s._v("MacOS 应该是程序员中最普遍使用的操作系统了，有着成熟的桌面同时终端也非常强大，适合程序员做开发")]),s._v(" "),t("h2",{attrs:{id:"行编辑器-vi-vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行编辑器-vi-vim"}},[s._v("#")]),s._v(" 行编辑器 vi/vim")]),s._v(" "),t("p",[s._v("由于我们是远程登录到 Linux 服务器，又因为远程服务器并没有图形化界面，所以在编辑器方面 vim 是一个神奇。vim 是 vi 的增强版。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/vi-vim-cheat-sheet-sch.gif",alt:"vim"}})]),s._v(" "),t("p",[s._v("1.vim 三种模式：命令模式、插入模式、编辑模式。使用 ESC 或 i 或：来切换模式。")]),s._v(" "),t("p",[s._v("2.命令模式下")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n:q  退出\n\n:q! 强制退出\n\n:wq 保存并退出\n\n:set number  显示行号\n\n:set nonumber  隐藏行号\n\n/host  在文档中查找host 按n跳到查找下一个，shift+n查找上一个\n\nyyp  复制光标所在行，并粘贴\n\nh(左移一个字符←)、j(下一行↓)、k(上一行↑)、l(右移一个字符→)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"下载命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载命令"}},[s._v("#")]),s._v(" 下载命令")]),s._v(" "),t("p",[s._v("在终端中的下载命令有两个。")]),s._v(" "),t("p",[s._v("1.wget")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wget url 下载\n\nwget -c url ：断点续传，下载失败了，执行这个会在断开的地方下载。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("2.curl")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl url 下载\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("curl 功能更加强大，可以控制 http 头")]),s._v(" "),t("h2",{attrs:{id:"linux-帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-帮助"}},[s._v("#")]),s._v(" Linux 帮助")]),s._v(" "),t("p",[s._v("1.命令 -h：显示帮助。")]),s._v(" "),t("p",[s._v("2.man 命令：显示命令的帮助文档。这个 man 命令实际上是一个小数据库，存放着各种命令的帮助文档。")]),s._v(" "),t("h2",{attrs:{id:"常用的终端快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的终端快捷键"}},[s._v("#")]),s._v(" 常用的终端快捷键")]),s._v(" "),t("p",[s._v("ctrl + s：暂停屏幕输出：不要轻易的挂起终端，可能会导致一个服务启动失败。")]),s._v(" "),t("p",[s._v("ctrl + c：结束正在运行的程序(ping,telnet 等)")]),s._v(" "),t("p",[s._v("ctrl + d：结束输入或退出 shell")]),s._v(" "),t("p",[s._v("ctrl + q：恢复屏幕输出。")]),s._v(" "),t("p",[s._v("ctrl + l：清屏，等同于 Clear。")]),s._v(" "),t("p",[s._v("ctrl + a/ctrl + e 快速移动光标到行首/行尾。")])])}),[],!1,null,null,null);a.default=n.exports}}]);