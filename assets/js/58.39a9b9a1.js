(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{251:function(v,_,t){v.exports=t.p+"assets/img/img-1.fc083da8.png"},514:function(v,_,t){"use strict";t.r(_);var r=t(29),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"d2-2019"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d2-2019"}},[v._v("#")]),v._v(" D2-2019")]),v._v(" "),r("blockquote",[r("p",[v._v("2019年12月14日，我在杭州和达希尔顿逸林酒店参加了第十四届D2前端技术论坛。虽然现在已过去半年多，最近认识到部分内容（如微前端）可能需要进行实践，所以把部分内容作重新回顾。")])]),v._v(" "),r("p",[v._v("那天听了三部分内容："),r("strong",[v._v("微前端")]),v._v("、"),r("strong",[v._v("Serverless")]),v._v("、"),r("strong",[v._v("wasm")]),v._v("。")]),v._v(" "),r("h2",{attrs:{id:"微前端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微前端"}},[v._v("#")]),v._v(" 微前端")]),v._v(" "),r("p",[r("strong",[v._v("微前端是一套前端架构体系，是 分治思想 和 望楼系统 的组合")]),v._v("。")]),v._v(" "),r("blockquote",[r("p",[v._v("“微前端”最初是在2016年由 ThoughtWorks 提出。")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(251),alt:"alt"}})]),v._v(" "),r("h3",{attrs:{id:"微前端体系构成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微前端体系构成"}},[v._v("#")]),v._v(" 微前端体系构成")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("基础设置")]),v._v(" "),r("ul",[r("li",[v._v("微应用的注册、消息机制、隔离机制")])])]),v._v(" "),r("li",[r("strong",[v._v("配置中心")]),v._v(" "),r("ul",[r("li",[v._v("版本管理、发布策略")])])]),v._v(" "),r("li",[r("strong",[v._v("观察工具")]),v._v(" "),r("ul",[r("li",[v._v("运维方面的可观察性工具。除了监控，可以方便查看系统运行状态，对问题进行跟踪、调试")])])])]),v._v(" "),r("h3",{attrs:{id:"微应用容器-应该具有的能力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微应用容器-应该具有的能力"}},[v._v("#")]),v._v(" “微应用容器”应该具有的能力")]),v._v(" "),r("p",[r("code",[v._v("主应用")]),v._v(" 会通过一个 "),r("code",[v._v("微应用容器")]),v._v(" 把 "),r("code",[v._v("微应用")]),v._v(" 异步加载进来。")]),v._v(" "),r("p",[v._v("其中的 "),r("code",[v._v("微应用容器")]),v._v(" 应该具备以下能力：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("安全性")])]),v._v(" "),r("li",[r("strong",[v._v("隔离性")]),v._v(" "),r("ul",[r("li",[v._v("隔离样式（ShadowDOM）")]),v._v(" "),r("li",[v._v("隔离JavaScript/DOM入侵")])])]),v._v(" "),r("li",[r("strong",[v._v("可通讯")]),v._v(" "),r("ul",[r("li",[v._v("路由管理：主应用配置路由，对应映射微应用")]),v._v(" "),r("li",[v._v("消息机制：微应用注册事件、主应用下发事件（微应用之间不允许通讯）")])])]),v._v(" "),r("li",[r("strong",[v._v("可见性")]),v._v(" "),r("ul",[r("li",[v._v("埋点监控、性能检测")])])]),v._v(" "),r("li",[r("strong",[v._v("容错性")]),v._v(" "),r("ul",[r("li",[v._v("加载失败的Fallback、容错、Error上报")])])])]),v._v(" "),r("h3",{attrs:{id:"微前端的价值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微前端的价值"}},[v._v("#")]),v._v(" 微前端的价值")]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("方面")]),v._v(" "),r("th",[v._v("优点")]),v._v(" "),r("th",[v._v("缺点")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("工程价值")]),v._v(" "),r("td",[v._v("1、单独构建、单独发布、热升级"),r("br"),v._v("2、不限技术栈"),r("br"),v._v("3、大型单页应用无限扩展"),r("br"),v._v("4、多团队合作"),r("br")]),v._v(" "),r("td",[v._v("1、体验有折损"),r("br"),v._v("2、维护成本高"),r("br"),v._v("3、管理版本/依赖复杂"),r("br"),v._v("4、粒度要合适"),r("br")])]),v._v(" "),r("tr",[r("td",[v._v("业务价值")]),v._v(" "),r("td",[v._v("对于ToB -> 功能性强 -> 客户定制化需求 -> 需要更灵活的业务整合能力")]),v._v(" "),r("td",[v._v("/")])])])]),v._v(" "),r("h3",{attrs:{id:"微前端需要关注的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微前端需要关注的问题"}},[v._v("#")]),v._v(" 微前端需要关注的问题")]),v._v(" "),r("p",[v._v("1、微应用的注册、异步加载和生命周期管理")]),v._v(" "),r("p",[v._v("2、微应用和主应用之间的消息机制")]),v._v(" "),r("blockquote",[r("ul",[r("li",[v._v("微应用之间不允许通讯；")]),v._v(" "),r("li",[v._v("微应用注册事件、主应用下发事件")])])]),v._v(" "),r("p",[v._v("3、微应用之间的隔离")]),v._v(" "),r("p",[v._v("4、公共依赖的库、版本管理")]),v._v(" "),r("p",[v._v("5、微应用独立调试")]),v._v(" "),r("h3",{attrs:{id:"衡量一个微前端是否友好的标准"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#衡量一个微前端是否友好的标准"}},[v._v("#")]),v._v(" 衡量一个微前端是否友好的标准")]),v._v(" "),r("ul",[r("li",[v._v("技术无关：无论是子应用还是主应用，都应该做到框架无感知")]),v._v(" "),r("li",[v._v("接入友好：子应用接入应该跟接入一个Iframe一样轻松自然")])])])}),[],!1,null,null,null);_.default=a.exports}}]);