(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{292:function(t,e,a){t.exports=a.p+"assets/img/img-1.d40483b0.png"},293:function(t,e,a){t.exports=a.p+"assets/img/img-2.5a55bb63.png"},471:function(t,e,a){"use strict";a.r(e);var r=a(29),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),r("h2",{attrs:{id:"react-16以前"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-16以前"}},[t._v("#")]),t._v(" React 16以前")]),t._v(" "),r("p",[r("img",{attrs:{src:a(292),alt:"alt"}})]),t._v(" "),r("h3",{attrs:{id:"挂载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),r("p",[t._v("constructor -> componentWillMount -> render -> componentDidMount")]),t._v(" "),r("h3",{attrs:{id:"更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),r("h4",{attrs:{id:"props值发生更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#props值发生更新"}},[t._v("#")]),t._v(" props值发生更新")]),t._v(" "),r("p",[t._v("componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate")]),t._v(" "),r("h4",{attrs:{id:"state值发生更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state值发生更新"}},[t._v("#")]),t._v(" state值发生更新")]),t._v(" "),r("p",[t._v("shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate")]),t._v(" "),r("h3",{attrs:{id:"卸载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),r("p",[t._v("componentWillUnmount")]),t._v(" "),r("h2",{attrs:{id:"react-16及以后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-16及以后"}},[t._v("#")]),t._v(" React 16及以后")]),t._v(" "),r("p",[r("img",{attrs:{src:a(293),alt:"alt"}})]),t._v(" "),r("h3",{attrs:{id:"挂载-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挂载-2"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),r("p",[t._v("constructor -> getDerivedStateFromProps -> render -> componentDidMount")]),t._v(" "),r("h3",{attrs:{id:"更新-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新-2"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),r("h4",{attrs:{id:"props、state值发生更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#props、state值发生更新"}},[t._v("#")]),t._v(" props、state值发生更新")]),t._v(" "),r("p",[t._v("getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate")]),t._v(" "),r("h3",{attrs:{id:"forceupdate-调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forceupdate-调用"}},[t._v("#")]),t._v(" forceUpdate()调用")]),t._v(" "),r("p",[t._v("getDerivedStateFromProps -> render -> getSnapshotBeforeUpdate -> componentDidUpdate")]),t._v(" "),r("h3",{attrs:{id:"卸载-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载-2"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),r("p",[t._v("componentWillUnmount")]),t._v(" "),r("h2",{attrs:{id:"删除三个生命周期钩子的原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除三个生命周期钩子的原因"}},[t._v("#")]),t._v(" 删除三个生命周期钩子的原因")]),t._v(" "),r("p",[t._v("标记为不安全的3个生命周期钩子："),r("code",[t._v("componentWillMount")]),t._v("、"),r("code",[t._v("componentWillReceiveProps")]),t._v("、"),r("code",[t._v("componentWillUpdate")]),t._v("。")]),t._v(" "),r("p",[t._v("官方解释原因：Fiber结构考虑。")]),t._v(" "),r("blockquote",[r("p",[t._v("react v16采用了 Fiber结构 表示 virtual dom，使得可在构建阶段被打断。对于"),r("code",[t._v("componentWillMount")]),t._v("、"),r("code",[t._v("componentWillReceiveProps")]),t._v("、"),r("code",[t._v("componentWillUpdate")]),t._v("也许"),r("strong",[t._v("不能保证只触发一次")]),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"取代的两个生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#取代的两个生命周期"}},[t._v("#")]),t._v(" 取代的两个生命周期")]),t._v(" "),r("h3",{attrs:{id:"getderivedstatefromprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),r("p",[t._v("执行时机：首次挂载、每次更新都会执行")]),t._v(" "),r("p",[t._v("使用：返回一个对象来更新当前state值，不更新时返回null")]),t._v(" "),r("blockquote",[r("p",[t._v("注意：因为是静态方法，所以不能用this")])]),t._v(" "),r("h3",{attrs:{id:"getsnapshotbeforeupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")]),t._v(" "),r("p",[t._v("执行时机：每次DOM真正渲染前")]),t._v(" "),r("h2",{attrs:{id:"生命周期说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期说明"}},[t._v("#")]),t._v(" 生命周期说明")]),t._v(" "),r("h3",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),r("p",[t._v("可以通过"),r("code",[t._v("shouldComponentUpdate")]),t._v("比较新、旧的props、state来决定"),r("strong",[t._v("是否执行render方法")]),t._v("。（"),r("strong",[t._v("但传下来的props依然是会更新的")]),t._v("）")]),t._v(" "),r("h2",{attrs:{id:"参考链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React新生命周期图谱（官方文档）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/zhangwx6/article/details/81667631",target:"_blank",rel:"noopener noreferrer"}},[t._v("React新生命周期-三个钩子删除原因"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);