(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{480:function(a,s,e){"use strict";e.r(s);var n=e(29),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" NPM")]),a._v(" "),e("blockquote",[e("p",[a._v("npm")])]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#npm"}},[a._v("NPM")]),e("ul",[e("li",[e("a",{attrs:{href:"#修改全局模块的安装路径"}},[a._v("修改全局模块的安装路径")])]),e("li",[e("a",{attrs:{href:"#npm-vs-yarn"}},[a._v("npm vs yarn")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"修改全局模块的安装路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改全局模块的安装路径"}},[a._v("#")]),a._v(" 修改全局模块的安装路径")]),a._v(" "),e("p",[a._v("之前遇到的问题：想把shell从bash换成zsh（有炫酷的UI以及其他优点【待补充】），后来发现npm全局安装的包居然用命令行执行不起来，显示："),e("code",[a._v("zsh: command not found: xxx")])]),a._v(" "),e("p",[a._v("解决方法：")]),a._v(" "),e("p",[a._v("1、新建另外一个存放全局包的文件夹（因为考虑到npm默认的全局安装文件夹可能在MAC上会出现权限问题）")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir ~/.npm-global\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("2、设置npm的安装目录")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm config set prefix '~/.npm-global'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("3、进入~/.zshrc，并加入")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("export PATH=~/.npm-global/bin:$PATH\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("4、使环境变量生效")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("source ~/.profile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("综上，"),e("code",[a._v("npm install -g")]),a._v("安装的模块就会到该用户名字下面的"),e("code",[a._v("~/.npm-global")]),a._v("目录了，还有一个好处是做到了用户隔离。")]),a._v(" "),e("h2",{attrs:{id:"npm-vs-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-vs-yarn"}},[a._v("#")]),a._v(" npm vs yarn")]),a._v(" "),e("p",[e("code",[a._v("npm")]),a._v("是Node.js中"),e("code",[a._v("默认的包管理工具")])]),a._v(" "),e("p",[e("code",[a._v("yarn")]),a._v("是Facebook和Google联合推出的"),e("code",[a._v("新的JS包管理工具")])]),a._v(" "),e("p",[e("code",[a._v("yarn")]),a._v("有以下优点：")]),a._v(" "),e("ul",[e("li",[a._v("速度快\n"),e("ul",[e("li",[a._v("并行安装、离线模式")])])]),a._v(" "),e("li",[a._v("版本锁定\n"),e("ul",[e("li",[a._v("yarn.lock")])])]),a._v(" "),e("li",[a._v("更简洁的输出")]),a._v(" "),e("li",[a._v("语义化的命令")])])])}),[],!1,null,null,null);s.default=t.exports}}]);