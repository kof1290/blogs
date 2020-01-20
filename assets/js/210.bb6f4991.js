(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{528:function(a,n,r){"use strict";r.r(n);var t=r(1),e=Object(t.a)({},function(){var a=this,n=a.$createElement,r=a._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"你必须知道的yarn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你必须知道的yarn","aria-hidden":"true"}},[a._v("#")]),a._v(" 你必须知道的yarn")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://code.fb.com/web/yarn-a-new-package-manager-for-javascript/",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn的起源"),r("OutboundLink")],1),a._v("已经解释了为什么要创建一个新的javascript包管理器，这里笔者也推荐大家从npm切换为yarn。npm4就不说了，速度太慢了，npm5借鉴了很多yarn的机制，比如简单的版本锁、重写cache模块等，减少了与yarn的差距。但依然有些地方做的不如yarn,"),r("a",{attrs:{href:"https://jobs.stratsys.com/blog/posts/9244-npm5-vs-yarn-which-one-is-better",target:"_blank",rel:"noopener noreferrer"}},[a._v("这篇文章"),r("OutboundLink")],1),a._v("记录了npm5和yarn的实验对比，结论是：在没有缓存时，yarn和npm5速度差不多；在有缓存时，yarn比npm5快2倍。")]),a._v(" "),r("h2",{attrs:{id:"yarn优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn优势","aria-hidden":"true"}},[a._v("#")]),a._v(" yarn优势")]),a._v(" "),r("p",[a._v("以下针对npm5前:")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("yarn 离线安装。")]),a._v("\n下载的时候 Yarn 缓存了所有的包以至于不需要再次从网络下载")]),a._v(" "),r("li",[r("code",[a._v("yarn并行下载，使得时间更快。")]),a._v("\n通过并行操作最大限度地提高资源利用率，以至于再次下载的时候安装时间比之前更快。npm5之前是等上一个安装完后再执行下一个，串行下载。")]),a._v(" "),r("li",[r("code",[a._v("yarn锁包yarn-lock，保证引用包正确。")]),a._v("\nyarn.lock 文件准确的锁定了所有被下载和项目依赖的包版本。通过这个文件，你能确定你的工程师团队的每一位成员都能安装准确的包，并且可以更容易的部署，而没有意外 bug出现。")])]),a._v(" "),r("h2",{attrs:{id:"指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 指令")]),a._v(" "),r("ul",[r("li",[a._v("常用\n"),r("ul",[r("li",[r("code",[a._v("yarn init")]),a._v("，初始化项目，相当于npm init。")]),a._v(" "),r("li",[r("code",[a._v("yarn install")]),a._v(" 简写为yarn ，相当于npm install（i），用来安装。")])]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("// 不生成 yarn.lock 鎖定文件，並且，如果需要更新則會失敗。\n// 服务器上编译通常加该参数，以保证yarn-lock.json一致\nyarn "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --frozen-lockfile\n")])])]),r("ul",[r("li",[r("p",[r("code",[a._v("yarn add")]),a._v(" ，安装模块，相当于npm install 。")])]),a._v(" "),r("li",[r("p",[r("code",[a._v("yarn run")]),a._v("，运行项目，相当于npm run。")])])])]),a._v(" "),r("li",[a._v("其他\n"),r("ul",[r("li",[r("code",[a._v("yarn remove")]),a._v("，卸载模块，相当于npm uninstall(un)。")]),a._v(" "),r("li",[r("code",[a._v("yarn upgrade")]),a._v("，更新模块，相当于npm update。")]),a._v(" "),r("li",[r("code",[a._v("yarn link")]),a._v(" 这指令需要在你想要依赖的依赖包中执行，该指令会注册成功一个package名称")]),a._v(" "),r("li",[r("code",[a._v("yarn link [package]")]),a._v(" 这指令应用到你的项目包中")])]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" react\n$ yarn "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v("\nsuccess Registered "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"react"')]),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/react-relay\n$ yarn "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" react\n")])])]),r("ul",[r("li",[r("code",[a._v("yarn bin")]),a._v(", 打印出执行脚本的位置，可以被yarn run执行。相当于npm bin")]),a._v(" "),r("li",[r("code",[a._v("yarn login/yarn publish")]),a._v(" npm登录和发布。相当于npm login/npm publish")]),a._v(" "),r("li",[r("code",[a._v("yarn cache clean")]),a._v("，清除缓存，相当于npm cache clean。")]),a._v(" "),r("li",[r("code",[a._v("yarn list")]),a._v(" 列出当前所有依赖的包")]),a._v(" "),r("li",[r("code",[a._v("yarn config list")]),a._v(" 显示所有配置设置")])]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("yarn config "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" version-git-tag 1.0.0\nyarn config get version-git-tag\nyarn config delete version-git-tag\n")])])])])]),a._v(" "),r("h2",{attrs:{id:"参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://auth0.com/blog/five-things-you-can-do-with-yarn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("5 things you can do with Yarn"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://yarnpkg.com/en/docs/cli/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Yarn - CLI Introduction"),r("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=e.exports}}]);