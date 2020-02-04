(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{258:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"简单的实现-vue-之响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的实现-vue-之响应式"}},[s._v("#")]),s._v(" 简单的实现 Vue 之响应式")]),s._v(" "),a("p",[s._v("上代码就完事了")]),s._v(" "),a("h2",{attrs:{id:"mvvm-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-js"}},[s._v("#")]),s._v(" MVVM.js")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//提供了全局的Vue 模版\nfunction Vue(options) {\n    //对象 {text:'hello world!'} \n\n    this.data = options.data;\n    var data = options.data;\n    //发布者 例如data 中text发生了变化，发布通知到订阅者\n    observe(data, this);\n    //this Vue的实例 包含着data\n    var dom = new Compiple(document.getElementById(options.el), this);\n    //编译完后，将dom返回倒app中\n    document.getElementById(options.el).appendChild(dom);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"observe-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observe-js"}},[s._v("#")]),s._v(" Observe.js")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function defineReactive(vm, key, value) {\n    let dep = new Dep();\n\n    Object.defineProperty(vm, key, {\n        get() {\n            //添加订阅者watcher到主题对象Dep\n            if (Dep.target) {\n                //js浏览器单线程特性，保证在一个时间内只有一个监听器使用\n                dep.addSub(Dep.target)\n            }\n            return value;\n        },\n        set(newVal) {\n            if (newVal === value) return value;\n            value = newVal;\n            //作为发布者发出通知\n            dep.notify();\n        }\n    })\n}\n\nfunction observe(obj, vm) {\n    Object.keys(obj).forEach(key => {\n        defineReactive(vm, key, obj[key])\n    })\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"dep-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dep-js"}},[s._v("#")]),s._v(" Dep.js")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Dep {\n    constructor() {\n        this.subs = [];\n    }\n    addSub(sub) {\n        this.subs.push(sub)\n    }\n    notify() {\n        this.subs.forEach(sub => {\n            sub.update()\n        })\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"compile-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-js"}},[s._v("#")]),s._v(" Compile.js")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Compiple {\n    constructor(node, vm) {\n        if (node) {\n            this.$frag = this.nodeToFragment(node, vm);\n            return this.$frag;\n        }\n    }\n    nodeToFragment(node, vm) {\n        var self = this;\n        var frag = document.createDocumentFragment();\n        var child;\n        while (child = node.firstChild) {\n            self.compileElement(child, vm);\n            frag.append(child)\n        }\n        return frag;\n    }\n    compileElement(node, vm) {\n        var reg = /\\{\\{(.*)\\}\\}/;\n        //节点类型为元素；\n        if (node.nodeType === 1) {\n            var attr = node.attributes;\n            for (var i = 0; i < attr.length; i++) {\n                //获取v-model绑定的属性名\n                if (attr[i].nodeName == \"v-model\") {\n                    var name = attr[i].nodeValue;\n                    node.addEventListener(\"input\", function(e) {\n                        //给相应的data属性赋值，进而触发该属性的set方法\n                        vm[name] = e.target.value;\n                    })\n                }\n                //node.value = vm[name];将data的值赋值给该node\n                new Watcher(vm, node, name, 'value')\n            }\n        }\n        if (node.nodeType === 3) {\n            //获取匹配的字符串\n            if (reg.test(node.nodeValue)) {\n                var name = RegExp.$1;\n                name = name.trim();\n                // node.nodeValue = vm[name];将data的值赋值给node\n                new Watcher(vm, node, name, 'nodeValue')\n            }\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcher"}},[s._v("#")]),s._v(" Watcher")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Watcher {\n    constructor(vm, node, name, type) {\n        Dep.target = this;\n        this.vm = vm;\n        this.node = node;\n        this.type = type;\n        this.name = name;\n        this.update();\n        Dep.target = null;\n    }\n    update() {\n            this.get();\n            //对应的哪行node节点 {{text}}[nodeValue] = (new Vue())['text']\n            this.node[this.type] = this.value;\n        }\n        //获取data的属性\n    get() {\n        this.value = this.vm[this.name]\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);