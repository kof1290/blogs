(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{435:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《javascript高级程序设计》"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《javascript高级程序设计》","aria-hidden":"true"}},[t._v("#")]),t._v(" 《JavaScript高级程序设计》")]),t._v(" "),s("p",[t._v("javascript书籍中的经典，里面非常多细节解释的十分详细，而且有些晦涩难懂的概念，比如js面向对象、原型链、继承等，也能层层递进，深入浅出。忍不住赞叹：写的太棒了！")]),t._v(" "),s("h2",{attrs:{id:"javascript语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript语言","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript语言")]),t._v(" "),s("p",[t._v("浏览器宿主中的JavaScript = ECMAScript + DOM + BOM")]),t._v(" "),s("ul",[s("li",[t._v("ECMAScript 核心语言功能\n"),s("ul",[s("li",[t._v("语法")]),t._v(" "),s("li",[t._v("类型")]),t._v(" "),s("li",[t._v("语句")]),t._v(" "),s("li",[t._v("关键字")]),t._v(" "),s("li",[t._v("保留字")]),t._v(" "),s("li",[t._v("操作符")]),t._v(" "),s("li",[t._v("对象")])])]),t._v(" "),s("li",[t._v("DOM（文档对象模型） 提供访问和操作网页内容的方法与接口\n"),s("ul",[s("li",[t._v("DOM视图 DOM节点（Node类型）\n"),s("ul",[s("li",[t._v("DOM查找")]),t._v(" "),s("li",[t._v("DOM操作")])])]),t._v(" "),s("li",[t._v("DOM事件\n"),s("ul",[s("li",[t._v("事件捕获 document -> div")]),t._v(" "),s("li",[t._v("事件冒泡 div -> document")])])]),t._v(" "),s("li",[t._v("DOM样式 CSS")])])]),t._v(" "),s("li",[t._v("BOM（浏览器对象模型） 与浏览器交互的方法与接口\n"),s("ul",[s("li",[t._v("window\n"),s("ul",[s("li",[t._v("history")]),t._v(" "),s("li",[t._v("document 唯一一个既属于BOM又属于DOM的对象")]),t._v(" "),s("li",[t._v("navigator")]),t._v(" "),s("li",[t._v("screen")]),t._v(" "),s("li",[t._v("location")])])]),t._v(" "),s("li",[t._v("cookie")]),t._v(" "),s("li",[t._v("XMLHttpRequest")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("js 是ECMAScript的具体实现。其定义了包含语法、关键字等，但不包括与浏览器相关的API。\njs引擎不是独立运行的，它运行在宿主环境中。web宿主环境就是浏览器。")])]),t._v(" "),s("h3",{attrs:{id:"标签的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签的位置","aria-hidden":"true"}},[t._v("#")]),t._v(" 标签的位置")]),t._v(" "),s("ul",[s("li",[t._v("遇到"),s("code",[t._v("<script>")]),t._v("会暂停解析html + 浏览器遇到"),s("code",[t._v("<body>")]),t._v("标签才开始呈现内容 = script应该放在body的最后")])]),t._v(" "),s("h2",{attrs:{id:"js数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" JS数据类型")]),t._v(" "),s("p",[t._v("从属于ECMAScript规范定义。从技术角度讲，"),s("code",[t._v("函数在ECMAScript中是对象，不是一种数据结构")]),t._v("。（笔者注：所以js语言可以很好的实践函数式编程思想。关于函数式编程思想可以看笔者另外一篇笔记："),s("router-link",{attrs:{to:"/react/function-program.html"}},[t._v("函数式编程")]),t._v("）")],1),t._v(" "),s("ul",[s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("null")]),t._v(" "),s("li",[t._v("string")]),t._v(" "),s("li",[t._v("number")]),t._v(" "),s("li",[t._v("boolean")]),t._v(" "),s("li",[t._v("object")])]),t._v(" "),s("h3",{attrs:{id:"基本类型-引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本类型-引用类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本类型/引用类型")]),t._v(" "),s("p",[t._v("JS变量松散，只是在特定时间用于保存特定值的一个名字。即不存在定义某个变量时必须保存何种数据类型")]),t._v(" "),s("ul",[s("li",[t._v("基本类型\n"),s("ul",[s("li",[t._v("复制直接拷贝副本")])])]),t._v(" "),s("li",[t._v("引用类型\n"),s("ul",[s("li",[s("code",[t._v("复制的是指针，指针指向真实的内存")]),t._v("（js是无法获取以及操作内存，只能通过指针代理）")]),t._v(" "),s("li",[t._v("当覆盖新的值时，指针指向新对象")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以上解释了这个赋值问题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b和a指向同一个内存地址")]),t._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" aget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b被指向新的内存地址，断开了与a的联系")]),t._v("\n")])])]),s("h3",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),s("p",[t._v("函数是对象，函数名是指针（函数名代理着内存）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下都是等价的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种方式较为明显的诠释了实质：函数是对象，函数名是指针")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" add "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a + b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[t._v("指有权访问另一个函数作用域中的变量的函数。原理：")]),t._v(" "),s("ul",[s("li",[t._v("后台执行环境中，闭包的作用域链包含自己的作用域、包含函数的作用域和全局作用域。")]),t._v(" "),s("li",[t._v("通常函数的作用域及其所有变量都会在函数执行结束后被销毁。")]),t._v(" "),s("li",[t._v("但是，当函数返回一个闭包时，这个函数的作用域将会一直在内存中保存，直到闭包不存在为止。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addThird")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该函数能访问另外一个函数作用域的变量：c、d")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addThird")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16")]),t._v("\n")])])]),s("h2",{attrs:{id:"dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),s("p",[t._v("是针对HTML和XML文档的一个API。")]),t._v(" "),s("h4",{attrs:{id:"节点层次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点层次","aria-hidden":"true"}},[t._v("#")]),t._v(" 节点层次")]),t._v(" "),s("ul",[s("li",[t._v("Node 所有节点都继承自Node类型\n"),s("ul",[s("li",[t._v("节点属性：nodeType/nodeName/nodeValue")]),t._v(" "),s("li",[t._v("DOM操作：appendChild()/replaceChild()/removeChild()/insertBefore()")]),t._v(" "),s("li",[t._v("属性操作：getAttribute()/setAttribute()/removeAttribute()")]),t._v(" "),s("li",[t._v("遍历节点树：firstChild/lastChild/childNodes/parentNode/nextSibling/previousSibling")])])]),t._v(" "),s("li",[t._v("Document\n"),s("ul",[s("li",[t._v("查找Node\n"),s("ul",[s("li",[t._v("getElementById()")]),t._v(" "),s("li",[t._v("getElementByName()")]),t._v(" "),s("li",[t._v("getElementByTagName()")])])]),t._v(" "),s("li",[t._v("创建Node\n"),s("ul",[s("li",[t._v("createElement()")]),t._v(" "),s("li",[t._v("createTextNode()")])])])])]),t._v(" "),s("li",[t._v("Element")]),t._v(" "),s("li",[t._v("Text")])]),t._v(" "),s("h4",{attrs:{id:"dom扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM扩展")]),t._v(" "),s("ul",[s("li",[t._v("选择符API 从此不再需要getElementBy...\n"),s("ul",[s("li",[t._v("querySelector")]),t._v(" "),s("li",[t._v("querySelectorAll")]),t._v(" "),s("li",[t._v("matchsSelector")])])]),t._v(" "),s("li",[t._v("HTML5\n"),s("ul",[s("li",[t._v("getElementByClassName")]),t._v(" "),s("li",[t._v("classList\n"),s("ul",[s("li",[t._v("add")]),t._v(" "),s("li",[t._v("contains")]),t._v(" "),s("li",[t._v("remove")]),t._v(" "),s("li",[t._v("toggle")])])]),t._v(" "),s("li",[t._v("postMessage")]),t._v(" "),s("li",[t._v("拖放事件 dragstart/drag/dragend/dragenter/dragover/dragleave")]),t._v(" "),s("li",[t._v("audio/video")]),t._v(" "),s("li",[t._v("hashchange/popstate")])])]),t._v(" "),s("li",[t._v("DOM2/DOM3\n"),s("ul",[s("li",[t._v("style属性")]),t._v(" "),s("li",[t._v("手动绑定/解除事件")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myDiv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementByClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myDiv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmyDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmyDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v("\n")])])]),s("h4",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("ul",[s("li",[t._v("事件类型\n"),s("ul",[s("li",[t._v("UI\n"),s("ul",[s("li",[t._v("load")]),t._v(" "),s("li",[t._v("resize")]),t._v(" "),s("li",[t._v("scroll")])])]),t._v(" "),s("li",[t._v("焦点\n"),s("ul",[s("li",[t._v("blur")]),t._v(" "),s("li",[t._v("focus")])])]),t._v(" "),s("li",[t._v("鼠标与滚轮\n"),s("ul",[s("li",[t._v("click")]),t._v(" "),s("li",[t._v("dbclick")]),t._v(" "),s("li",[t._v("mousedown")]),t._v(" "),s("li",[t._v("mouseenter")]),t._v(" "),s("li",[t._v("...")])])]),t._v(" "),s("li",[t._v("键盘\n"),s("ul",[s("li",[t._v("keydown")]),t._v(" "),s("li",[t._v("keypress")]),t._v(" "),s("li",[t._v("keyup")])])]),t._v(" "),s("li",[t._v("复合事件（虚拟键盘用到）\n"),s("ul",[s("li",[t._v("compositionstart")]),t._v(" "),s("li",[t._v("compositionupdate")]),t._v(" "),s("li",[t._v("compositionend")])])]),t._v(" "),s("li",[t._v("变动事件\n"),s("ul",[s("li",[t._v("DOMNodeInserted")])])]),t._v(" "),s("li",[t._v("HTML5事件\n"),s("ul",[s("li",[t._v("hashchange")]),t._v(" "),s("li",[t._v("contextmenu")]),t._v(" "),s("li",[t._v("DOMContentLoaded（形成dom树之后就会触发）")]),t._v(" "),s("li",[t._v("beforeunload")]),t._v(" "),s("li",[t._v("readstatechange")])])]),t._v(" "),s("li",[t._v("触摸与手势事件\n"),s("ul",[s("li",[t._v("触摸：touchstart/touchmove/touchend/touchcancel")]),t._v(" "),s("li",[t._v("手势：gesturestart/gesturechange/gestureend")])])])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM0事件处理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myBtn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbtn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM2事件处理，好处：可以添加多个事件处理程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myBtn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbtn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后为false，代表冒泡阶段捕获")]),t._v("\n")])])]),s("h2",{attrs:{id:"html5-javascirpt-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html5-javascirpt-api","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML5 JavaScirpt API")]),t._v(" "),s("ul",[s("li",[t._v("requestAnimationFrame")]),t._v(" "),s("li",[t._v("Page Visible API\n"),s("ul",[s("li",[t._v("IntersectionObserver")])])]),t._v(" "),s("li",[t._v("Geolocation API")]),t._v(" "),s("li",[t._v("File API\n"),s("ul",[s("li",[t._v("e.target.files\n"),s("ul",[s("li",[t._v("name")]),t._v(" "),s("li",[t._v("size")]),t._v(" "),s("li",[t._v("type")]),t._v(" "),s("li",[t._v("lastModifieDate")])])]),t._v(" "),s("li",[t._v("FileReader（可以想象为文件系统的XMLHttpRequest）")]),t._v(" "),s("li",[t._v("对象URL createObjectURL")]),t._v(" "),s("li",[t._v("结合拖放事件 e.dataTransfer.files")]),t._v(" "),s("li",[t._v("FormData")])])]),t._v(" "),s("li",[t._v("Web Worker")])])])},[],!1,null,null,null);a.default=e.exports}}]);