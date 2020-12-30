(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{299:function(t,s,a){t.exports=a.p+"assets/img/img-1.50cbcb75.png"},466:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"setstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),n("blockquote",[n("p",[t._v("setState是同步的还是异步的？在什么场景下是同步？什么场景下是异步？")])]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#setstate"}},[t._v("setState")]),n("ul",[n("li",[n("a",{attrs:{href:"#特点一：浅合并"}},[t._v("特点一：浅合并")])]),n("li",[n("a",{attrs:{href:"#特点二：批量更新策略"}},[t._v("特点二：批量更新策略")])]),n("li",[n("a",{attrs:{href:"#总结"}},[t._v("总结")])]),n("li",[n("a",{attrs:{href:"#参考链接"}},[t._v("参考链接")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"特点一：浅合并"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特点一：浅合并"}},[t._v("#")]),t._v(" 特点一：浅合并")]),t._v(" "),n("p",[n("code",[t._v("this.setState({ comments })")]),t._v(" 完整保留了 "),n("code",[t._v("this.state.posts")]),t._v("，但完全替换换了 "),n("code",[t._v("this.state.comments")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"特点二：批量更新策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特点二：批量更新策略"}},[t._v("#")]),t._v(" 特点二：批量更新策略")]),t._v(" "),n("h3",{attrs:{id:"现象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),n("p",[n("strong",[t._v("在合成事件（或生命周期钩子函数）中，对同一个state基于上一次的值多次setState，只有一次的效果")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  state "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("batchUpdates")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div onClick"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("batchUpdates"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Counter is ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("h3",{attrs:{id:"更新机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新机制"}},[t._v("#")]),t._v(" 更新机制")]),t._v(" "),n("p",[t._v("当调用"),n("code",[t._v("setState")]),t._v("时：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("把 "),n("code",[t._v("newState")]),t._v(" 放入到 "),n("code",[t._v("当前组件实例")]),t._v(" 下的更新队列")])]),t._v(" "),n("li",[n("p",[t._v("判断：是否处于 "),n("code",[t._v("批量更新")]),t._v(" 的过程")]),t._v(" "),n("ul",[n("li",[t._v("若是，把 组件实例 push到 "),n("code",[t._v("dirtyComponents")]),t._v(" 中，等待更新")])])]),t._v(" "),n("li",[n("p",[t._v("否则，进行 "),n("code",[t._v("批量更新")]),t._v("，设置 状态标识位，调用 "),n("code",[t._v("transaction.perform()")])])]),t._v(" "),n("li",[n("p",[t._v("遍历"),n("code",[t._v("dirtyComponents")]),t._v("，调用"),n("code",[t._v("updateComponent")])])]),t._v(" "),n("li",[n("p",[t._v("事务结束时，会将 所有临时state 合并、计算出最新state（"),n("code",[t._v("flushBatchedUpdates")]),t._v("），调用生命周期方法来更新组件，"),n("code",[t._v("isBatchingUpdates = false")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(299),alt:"alt"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("strong",[t._v("事务（Transaction）")]),t._v(" 用 Wrapper 封装要执行的方法，暴露一个"),n("code",[t._v("perform")]),t._v("方法来调用原方法。")]),t._v(" "),n("blockquote",[n("p",[t._v("在Wrapper里定义 "),n("code",[t._v("initialize")]),t._v(" 和 "),n("code",[t._v("close")]),t._v(" 方法：它们 "),n("strong",[t._v("分别")]),t._v(" 会在 "),n("code",[t._v("指定方法")]),t._v(" 执行前、执行后执行。")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("* <pre>\n *                       wrappers (injected at creation time)\n *                                      +        +\n *                                      |        |\n *                    +-----------------|--------|--------------+\n *                    |                 v        |              |\n *                    |      +---------------+   |              |\n *                    |   +--|    wrapper1   |---|----+         |\n *                    |   |  +---------------+   v    |         |\n *                    |   |          +-------------+  |         |\n *                    |   |     +----|   wrapper2  |--------+   |\n *                    |   |     |    +-------------+  |     |   |\n *                    |   |     |                     |     |   |\n *                    |   v     v                     v     v   | wrapper\n *                    | +---+ +---+   +---------+   +---+ +---+ | invariants\n * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained\n * +-----------------\x3e|-|---|-|---|--\x3e|anyMethod|---|---|-|---|-|--------\x3e\n *                    | |   | |   |   |         |   |   | |   | |\n *                    | |   | |   |   |         |   |   | |   | |\n *                    | |   | |   |   |         |   |   | |   | |\n *                    | +---+ +---+   +---------+   +---+ +---+ |\n *                    |  initialize                    close    |\n *                    +-----------------------------------------+\n * </pre>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("方式")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("合成事件")]),t._v("、"),n("br"),n("strong",[t._v("生命周期函数")]),n("br"),t._v("（除了"),n("code",[t._v("componentDidUpdate")]),t._v("）")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("会触发一个大事务")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("异步")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("原生事件")]),t._v("、"),n("br"),n("strong",[t._v("setTimeout")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("执行时 "),n("strong",[t._v("不存在大事务")]),t._v("，会立即发起新的批量更新")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("同步")])])])]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("为什么state要批量更新？")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("避免不必要的重新渲染")]),t._v("，从而提升性能。")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("setState是异步还是同步的？")])]),t._v(" "),n("ul",[n("li",[t._v("同步的。但有时（合成事件、生命周期）表现出来是异步。")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("为什么在setTimeout方法中调用setState表现出来是同步？")])]),t._v(" "),n("ul",[n("li",[t._v("因为setTimeout已经完成了原组件的更新流程，不会放入"),n("code",[t._v("dirtyComponents")])])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("setState中传入一个Function，为何里面的state值是最新的？")])]),t._v(" "),n("ul",[n("li",[t._v("函数接收的state是上轮更新过的state。")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevState")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" prevState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])]),t._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000016805467#item-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("【React进阶系列】 setState机制"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/885743d7a094",target:"_blank",rel:"noopener noreferrer"}},[t._v("把setState整明白"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5aa25967518825558251f61f#heading-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("React - setState源码分析（小白可读）"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);