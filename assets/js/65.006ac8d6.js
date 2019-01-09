(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{199:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("一个项目从0到1过程中，首先一个难点是完成项目框架搭建，每次新建项目花大部分时间在配置上。所以可以在这方面做一些有益团队的工作。本文从官网项目角度思考，借助vue-cli工具，整理实践出本脚手架，"),a("a",{attrs:{href:"https://github.com/lq782655835/official-website-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码见这里"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("思考内容：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("笔者部门前端主要使用Vue技术栈，本脚手架选型时依然选择Vue作为基础。考虑到官网需要在搜索引擎中提高曝光率，所以"),a("code",[t._v("SEO特性")]),t._v("必须添加。本脚手架使用Vue官方推荐的SSR集成解决方案"),a("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt"),a("OutboundLink")],1),t._v("作为项目基础。使用本脚手架开发，需要提前学习Nuxt相关知识。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("ul",[t._m(5),t._v(" "),a("li",[a("code",[t._v("scss")]),t._v(": 设置css格局。通过"),a("a",{attrs:{href:"https://github.com/shakacode/sass-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-resources-loader"),a("OutboundLink")],1),t._v("更方便操作scss的变量和mixin,所有页面默认引入，不需要额外@import")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)]),t._v(" "),a("pre",[t._v("|-- official-website-template\n    |-- nuxt.config.js                   -- nuxt配置\n    |-- package.json                     -- 项目依赖以及npm脚本\n    |-- assets\n    |   |-- css                          -- scss\n    |   |   |-- global.scss              -- 全局css\n    |   |   |-- reset.scss               -- reset css\n    |   |   |-- variables.scss           -- 全局scss变量或mixin\n    |   |-- img                          -- 图片存放，icon组件会默认找到该文件夹\n    |   |-- svg                          -- svg存放，icon组件会默认找到该文件夹\n    |-- components                       -- 组件\n    |   |-- u-footer.vue                 -- 页尾布局占位\n    |   |-- u-header.vue                 -- 页头导航占位\n    |   |-- common                       -- 全局Vue组件，该文件夹下的组件自动导入，文件名为组件名\n    |   |   |-- u-banner.vue             -- 轮播组件\n    |   |   |-- u-button.vue\n    |   |   |-- u-icon.vue               -- 提供快捷本地图片访问\n    |   |   |-- u-input.vue\n    |   |   |-- u-link.vue               -- 统一站内/站外导航组件\n    |   |   |-- u-modal.vue\n    |   |   |-- u-section.vue\n    |   |   |-- u-select-option.vue\n    |   |   |-- u-select.vue\n    |   |   |-- u-tab.vue\n    |   |   |-- u-tabs.vue\n    |   |-- index                        -- 页面逻辑组件\n    |-- layouts                          -- Nuxt结构，全局模板\n    |   |-- default.vue\n    |-- pages                            -- Nuxt结构，页面路由route\n    |   |-- index.vue\n    |-- plugins                          -- Nuxt结构，插件\n    |   |-- third.js                     -- 第三方插件导入\n    |   |-- vue-global.js                -- vue全局导入\n    |-- static                           -- Nuxt结构，静态文件\n    |   |-- favicon.ico\n    |-- store                            -- Nuxt结构，Vuex\n    |   |-- index.js\n    |-- utils                            -- 工具库\n        |-- api.js                       -- api层\n        |-- http.js                      -- 基础http请求\n\n")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("这里包括开发规范配置以及提交规范配置。统一的团队代码规范十分重要，可以使得大家代码都一致，同时减少出错。通过一些工具，将代码规范整合在本脚手架中。详细内容可以看笔者相关文章"),a("a",{attrs:{href:"https://github.com/lq782655835/blogs/issues/8",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint + stylelint + prettier + husky团队规范"),a("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("每个项目都需要用到组件库，特别是后台管理类系统，一个好的组件库能让效率提高很多。但目前市场上的大部分组件库，设计的时候就主打大而全，这就造成改动其中的逻辑或样式十分困难。笔者从官网业务角度思考，常用的组件库就link，button，icon，input，select等几个组件，而且不同官网项目，样式差别较大，样式修改不可避免。所以本脚手架封装常用的组件，都是轻量级单文件，修改十分方便。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("SPA应用有站内链接(router-link)和站外链接(a)，该组件针对此进行统一。同时该组件也是button，icon组件的基础")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("官网中最常用组件之一。该组件除常规支持颜色大小设置，应该也支持link导航功能。")]),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("在官网中，经常会使用到视觉给出的图片或者线上图片地址。图片种类也很丰富，有svg，png，gif等，另外图片有站内链接，站外链接或不链接。所以很有必要对图片做统一处理。")]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("常用组件，都是轻量级，略。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"官网脚手架思考与实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网脚手架思考与实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 官网脚手架思考与实践")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("官网技术选型")])]),this._v(" "),s("li",[s("p",[this._v("项目目录结构")])]),this._v(" "),s("li",[s("p",[this._v("代码规范约束")])]),this._v(" "),s("li",[s("p",[this._v("官网组件库思考")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-官网技术选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-官网技术选型","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 官网技术选型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 目录结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("做一个好的脚手架，需要思考"),s("code",[this._v("项目结构合理性")]),this._v("。好的结构让开发者迅速定位，并且代码分明别类，干净整洁。这里基于Nuxt架构的layout，pages，store，plugins结构，加入scss，img，svg，components，api结构(存放结构不一定在同一级)，丰富官网必备内容。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("layout/pages/store/plugins")]),this._v(": nuxt框架结构，十分好用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("img/svg")]),this._v(": 官网有大量本地图片，有png，gif，jpg以及特殊的svg，有些图片有点击事件，有些站外链接，有些站内链接。这里定义他们的存放位置，一个原因使得结构清晰，更重要的是能将所有本地图片合成一个icon组件，方便统一调用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("components")]),this._v(": 基础组件和页面组件，都是轻量级文件。u-link/u-icon等做了重点优化，具体看下章节。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("api")]),this._v(": 官网相对请求较少，但基本都会有接口调用，故统一放api.js中。本脚手架也使用"),s("code",[this._v("async/await")]),this._v("语法糖，帮助解决‘回调地狱’。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-代码规范约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码规范约束","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 代码规范约束")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("prettier")]),t._v(": 对所有代码统一格式化，使得代码看上去干净整洁。")]),t._v(" "),a("li",[a("code",[t._v("eslint")]),t._v("和"),a("code",[t._v("stylelint")]),t._v(": 对js及css做规则约束，防止出现语法方面错误。")]),t._v(" "),a("li",[a("code",[t._v("husky")]),t._v(": 对提交的代码验证，不通过则不允许提交到远程仓库，保证了git仓库的整洁。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-官网组件库思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-官网组件库思考","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 官网组件库思考")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"u-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#u-link","aria-hidden":"true"}},[this._v("#")]),this._v(" u-link")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/demo"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("站内链接"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.baidu.com"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("target")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("站外链接"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"u-button"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#u-button","aria-hidden":"true"}},[this._v("#")]),this._v(" u-button")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("color")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("primary"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Button组件"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("color")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("primary"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.baidu.com"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("target")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Button组件"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"u-icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#u-icon","aria-hidden":"true"}},[this._v("#")]),this._v(" u-icon")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-icon")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("close"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("scale")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("4"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.baidu.com"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-icon")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.png"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-icon")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.baidu.com/pics/1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"u-input-u-select-u-modal-u-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#u-input-u-select-u-modal-u-tab","aria-hidden":"true"}},[this._v("#")]),this._v(" u-input/u-select/u-modal/u-tab/...")])}],!1,null,null,null);e.options.__file="think-cli-official-website.md";s.default=e.exports}}]);