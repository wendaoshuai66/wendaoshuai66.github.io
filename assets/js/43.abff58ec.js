(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{246:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vue-原理解析之-nexttick-探索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-原理解析之-nexttick-探索"}},[s._v("#")]),s._v(" vue 原理解析之 nextTick 探索")]),s._v(" "),e("p",[s._v("nextTick 是 Vue 的一个核心实现,在了解 nextTick 之前，先 js 运行机制")]),s._v(" "),e("h2",{attrs:{id:"js-运行机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-运行机制"}},[s._v("#")]),s._v(" JS 运行机制")]),s._v(" "),e("p",[s._v("js 执行是单线程，它是基于事件循环的，事件循环它分为以下步骤：")]),s._v(" "),e("p",[s._v("1.所有同步任务都会在主线程上执行，形成一个执行栈（execution context stack）。")]),s._v(" "),e("p",[s._v("2.在主线程之外；还存在一个 “任务队列”（task queue）。只要异步任务有了运行结果，就在 “任务队列中”放置一个事件")]),s._v(" "),e("p",[s._v("3.一旦同步任务执行完毕，系统就会读取“任务队列”；看看里面有哪些异步事件；那些对应的异步任务；于是结束等待；进入执行栈，开始执行")]),s._v(" "),e("p",[s._v("4.主线程会不段的重复第三步")]),s._v(" "),e("p",[s._v("主线程的执行过程就是一个 tick，而所有的异步结果都是通过 “任务队列” 来调度。 消息队列中存放的是一个个的任务（task）。 规范中规定 task 分为两大类，分别是 macro task 和 micro task，并且每个 macro task 结束后，都要清空所有的 micro task。")]),s._v(" "),e("p",[s._v("在浏览器环境中，常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate；常见的 micro task 有 MutationObsever 和 Promise.then。")]),s._v(" "),e("p",[s._v("在 Nodejs 事件循环机制中，有任务两个队列：Macrotask 队列和 Microtask 队列。在一个事件循环里，这两个队列会分两步执行，第一步会固定地执行一个（且仅一个）Macrotask 任务，第二步会执行整个 Microtask 队列中的所有任务。并且，在执行 Microtask 队列任务的时候，也允许加入新的 Microtask 任务，直到所有 Microtask 任务全部执行完毕，才会结束循环。 Macrotasks 一般包括: setTimeout, setInterval, setImmediate, I/O, UI rendering； Microtasks 一般包括: process.nextTick, Promises, Object.observe, MutationObserver。")]),s._v(" "),e("p",[s._v("上代码")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("setTimeout(function() {\n        console.log(5);\n    }, 0);\n    setImmediate(function() {\n        console.log(6);\n    });\n    new Promise(function(resolve) {\n        console.log(1);\n        resolve();\n        console.log(2);\n    }).then(function() {\n        console.log(4);\n    });\n    console.log('打酱油');\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var i = 0;\n//microtask\nnew Promise((function (resolve, reject) {\n    resolve("ok")\n})).then(function () {\n    i++;\n    console.log("2⃣️", i);\n})\n//UI\n$("#test").html(i);\n//macrotask\nsetTimeout(function () {\n    i++;\n    console.log("3⃣️", i);\n}, 0)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"vue-的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的实现"}},[s._v("#")]),s._v(" Vue 的实现")]),s._v(" "),e("p",[s._v("在 Vue 源码 2.5+ 后，nextTick 的实现单独有一个 JS 文件来维护它，它的源码并不多，总共也就 100 多行。接下来我们来看一下它的实现，在 src/core/util/next-tick.js 中：")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import { noop } from 'shared/util'\nimport { handleError } from './error'\nimport { isIOS, isNative } from './env'\n\nconst callbacks = []\nlet pending = false\n\nfunction flushCallbacks () {\n  pending = false\n  const copies = callbacks.slice(0)\n  callbacks.length = 0\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]()\n  }\n}\n\n// Here we have async deferring wrappers using both microtasks and (macro) tasks.\n// In < 2.4 we used microtasks everywhere, but there are some scenarios where\n// microtasks have too high a priority and fire in between supposedly\n// sequential events (e.g. #4521, #6690) or even between bubbling of the same\n// event (#6566). However, using (macro) tasks everywhere also has subtle problems\n// when state is changed right before repaint (e.g. #6813, out-in transitions).\n// Here we use microtask by default, but expose a way to force (macro) task when\n// needed (e.g. in event handlers attached by v-on).\nlet microTimerFunc\nlet macroTimerFunc\nlet useMacroTask = false\n\n// Determine (macro) task defer implementation.\n// Technically setImmediate should be the ideal choice, but it's only available\n// in IE. The only polyfill that consistently queues the callback after all DOM\n// events triggered in the same loop is by using MessageChannel.\n/* istanbul ignore if */\nif (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  macroTimerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} else if (typeof MessageChannel !== 'undefined' && (\n  isNative(MessageChannel) ||\n  // PhantomJS\n  MessageChannel.toString() === '[object MessageChannelConstructor]'\n)) {\n  const channel = new MessageChannel()\n  const port = channel.port2\n  channel.port1.onmessage = flushCallbacks\n  macroTimerFunc = () => {\n    port.postMessage(1)\n  }\n} else {\n  /* istanbul ignore next */\n  macroTimerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n\n// Determine microtask defer implementation.\n/* istanbul ignore next, $flow-disable-line */\nif (typeof Promise !== 'undefined' && isNative(Promise)) {\n  const p = Promise.resolve()\n  microTimerFunc = () => {\n    p.then(flushCallbacks)\n    // in problematic UIWebViews, Promise.then doesn't completely break, but\n    // it can get stuck in a weird state where callbacks are pushed into the\n    // microtask queue but the queue isn't being flushed, until the browser\n    // needs to do some other work, e.g. handle a timer. Therefore we can\n    // \"force\" the microtask queue to be flushed by adding an empty timer.\n    if (isIOS) setTimeout(noop)\n  }\n} else {\n  // fallback to macro\n  microTimerFunc = macroTimerFunc\n}\n\n/**\n * Wrap a function so that if any code inside triggers state change,\n * the changes are queued using a (macro) task instead of a microtask.\n */\nexport function withMacroTask (fn: Function): Function {\n  return fn._withTask || (fn._withTask = function () {\n    useMacroTask = true\n    const res = fn.apply(null, arguments)\n    useMacroTask = false\n    return res\n  })\n}\n\nexport function nextTick (cb?: Function, ctx?: Object) {\n  let _resolve\n  callbacks.push(() => {\n    if (cb) {\n      try {\n        cb.call(ctx)\n      } catch (e) {\n        handleError(e, ctx, 'nextTick')\n      }\n    } else if (_resolve) {\n      _resolve(ctx)\n    }\n  })\n  if (!pending) {\n    pending = true\n    if (useMacroTask) {\n      macroTimerFunc()\n    } else {\n      microTimerFunc()\n    }\n  }\n  // $flow-disable-line\n  if (!cb && typeof Promise !== 'undefined') {\n    return new Promise(resolve => {\n      _resolve = resolve\n    })\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br")])]),e("p",[s._v("next-tick.js 申明了 microTimerFunc 和 macroTimerFunc 2 个变量，它们分别对应的是 micro task 的函数和 macro task 的函数。对于 macro task 的实现，优先检测是否支持原生 setImmediate，这是一个高版本 IE 和 Edge 才支持的特性，不支持的话再去检测是否支持原生的 MessageChannel，如果也不支持的话就会降级为 setTimeout 0；而对于 micro task 的实现，则检测浏览器是否原生支持 Promise，不支持的话直接指向 macro task 的实现。")]),s._v(" "),e("p",[s._v("next-tick.js 对外暴露了 2 个函数，先来看 nextTick，这就是我们在上一节执行 nextTick(flushSchedulerQueue) 所用到的函数。它的逻辑也很简单，把传入的回调函数 cb 压入 callbacks 数组，最后一次性地根据 useMacroTask 条件执行 macroTimerFunc 或者是 microTimerFunc，而它们都会在下一个 tick 执行 flushCallbacks，flushCallbacks 的逻辑非常简单，对 callbacks 遍历，然后执行相应的回调函数。")]),s._v(" "),e("p",[s._v("这里使用 callbacks 而不是直接在 nextTick 中执行回调函数的原因是保证在同一个 tick 内多次执行 nextTick，不会开启多个异步任务，而把这些异步任务都压成一个同步任务，在下一个 tick 执行完毕。")]),s._v(" "),e("p",[s._v("nextTick 函数最后还有一段逻辑：")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" if (!cb && typeof Promise !== 'undefined') {\n  return new Promise(resolve => {\n    _resolve = resolve\n  })\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("这是当 nextTick 不传 cb 参数的时候，提供一个 Promise 化的调用，比如：")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nextTick().then(() => {})\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("当 _resolve 函数执行，就会跳到 then 的逻辑中。")]),s._v(" "),e("p",[s._v("next-tick.js 还对外暴露了 withMacroTask 函数，它是对函数做一层包装，确保函数执行过程中对数据任意的修改，触发变化执行 nextTick 的时候强制走 macroTimerFunc。比如对于一些 DOM 交互事件，如 v-on 绑定的事件回调函数的处理，会强制走 macro task。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("为了让 flush 动作能在当前 Task 结束后尽可能早的开始，Vue 会优先尝试将任务 micro-task 队列，具体来说，在浏览器环境中 Vue 会优先尝试使用 MutationObserver API 或 Promise，如果两者都不可用，则 fallback 到 setTimeout。")])])}),[],!1,null,null,null);n.default=t.exports}}]);