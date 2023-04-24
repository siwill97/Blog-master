(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{538:function(s,t,a){"use strict";a.r(t);var n=a(11),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[s._v("#")]),s._v(" 原型链")]),s._v(" "),a("ul",[a("li",[s._v("概念：JS里面的对象可能会有父对象，父对象还会有父对象")]),s._v(" "),a("li",[s._v("根本：原型链的根本是继承"),a("br"),s._v("\n对象中几乎都有一个 "),a("code",[s._v("__proto__")]),s._v(" 属性，指向他的父对象，可以实现让该对象访问到父对象种的相关属性")]),s._v(" "),a("li",[s._v("根对象："),a("code",[s._v("Object.prototype")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// arr.__proto__: Array.prototype")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// arr.__proto__.__proto__: 根对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Animal")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Animal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cat.__proto__: Animal.prototype")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cat.__proto__.__proto__: 根对象")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[s._v("#")]),s._v(" 闭包")]),s._v(" "),a("h3",{attrs:{id:"变量作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量作用域"}},[s._v("#")]),s._v(" 变量作用域")]),s._v(" "),a("ul",[a("li",[s._v("概念：一个变量可以使用的范围叫做变量作用域")]),s._v(" "),a("li",[s._v("全局作用域：最外层的作用域")]),s._v(" "),a("li",[s._v("独立作用域：JS中还可以通过函数创建出一个独立的作用域，其中函数可以嵌套，所以作用域也可以嵌套")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'haha'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// f1函数内部的变量 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("变量的声名和赋值是在两个不同时期的"),a("br"),s._v("\nfn函数执行的时候，首先找到函数内部所有的变量、函数声名，把他们放在作用域中，给变量一个初始值undefined"),a("br"),s._v("\n然后逐条执行代码，在执行代码的过程中，如果有赋值语句，对变量进行赋值")])]),s._v(" "),a("h3",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[s._v("#")]),s._v(" 作用域链")]),s._v(" "),a("ul",[a("li",[s._v("概念：由于作用域是相对于变量而言的，而如果存在多级作用域，那变量的查找过程就叫做变量的作用域链")]),s._v(" "),a("li",[s._v("意义：查找变量\n"),a("ul",[a("li",[s._v("确定变量来自于那个作用域")]),s._v(" "),a("li",[s._v("变量是否可以访问")])])]),s._v(" "),a("li",[s._v("难点：看上一级作用域，不是看函数在哪里调用，而是看函数在哪里编写，因为这种特别，我们通常会把作用域说成是词法作用域")])]),s._v(" "),a("blockquote",[a("p",[s._v("查看当前作用域，如果当前作用域声名了这个变量，就确定结果，然后查找当前作用域的上级作用域，也就是当前函数的上级函数，看看上级函数中有没有声名，直到全局作用域为止，如果全局作用域中也没有，我们就认为这个变量没声明")])]),s._v(" "),a("h3",{attrs:{id:"闭包的产生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的产生"}},[s._v("#")]),s._v(" 闭包的产生")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" f1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("一般认为函数执行完毕，变量就会释放")]),s._v(" "),a("li",[s._v("但是由于js引擎发现匿名函数要使用a变量，所以a变量并不能得到释放，而是把a变量放在匿名函数可以访问到的地方去了。")]),s._v(" "),a("li",[s._v("a变量存在于f1函数可以访问到的地方，此时a变量只能被f1函数访问")]),s._v(" "),a("li",[s._v("再次执行fn会初始化一个新的a变量")]),s._v(" "),a("li",[s._v("可以通过 "),a("code",[s._v("f1 = null")]),s._v(" 来释放f1里面保存的a变量")])]),s._v(" "),a("h3",{attrs:{id:"闭包的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的应用场景"}},[s._v("#")]),s._v(" 闭包的应用场景")]),s._v(" "),a("ul",[a("li",[s._v("模块化")]),s._v(" "),a("li",[s._v("防止变量被破坏")])])])}),[],!1,null,null,null);t.default=r.exports}}]);