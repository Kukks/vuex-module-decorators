(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{64:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p"),t._m(1),e("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The way we use the MyModule class is different from classical object-oriented programming\nand similar to how "),e("a",{attrs:{href:"https://npmjs.com/vue-class-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-class-component"),e("OutboundLink")],1),t._v(" works.\nWe use the class itself as module, not an object "),e("em",[t._v("constructed")]),t._v(" by the class")]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("All the usual ways of accessing the module works -")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#define-a-module"}},[this._v("Define a module")])]),s("li",[s("a",{attrs:{href:"#use-in-store"}},[this._v("Use in store")])]),s("li",[s("a",{attrs:{href:"#access-state"}},[this._v("Access State")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"define-a-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-a-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Define a module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To define a module, create a class that extends from "),s("code",[this._v("VuexModule")]),this._v("\nand "),s("strong",[this._v("must be")]),this._v(" decorated with "),s("code",[this._v("Module")]),this._v(" decorator")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// eg. /app/store/mymodule.ts")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Module"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" VuexModule"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'vuex-module-decorators'")]),t._v("\n\n@Module\n"),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("VuexModule")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    someField"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'somedata'")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("CAREFUL")]),t._v(" "),e("p",[t._v("There is a "),e("code",[t._v("Module")]),t._v(" class in the "),e("code",[t._v("vuex")]),t._v(" package too, which is "),e("strong",[t._v("not")]),t._v(" a decorator\nMake sure you import correct Module decorator from from "),e("code",[t._v("vuex-module-decorators")]),e("br"),t._v("\n❌ "),e("code",[t._v("import {Module} from 'vuex'")]),e("br"),t._v("\n✔️ "),e("code",[t._v("import {Module} from 'vuex-module-decorators'")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-in-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-in-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Use in store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In you store, you use the "),s("code",[this._v("MyModule")]),this._v(" class itself as a module.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyModule "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'~/store/mymodule'")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Vuex"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    modules"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        myMod"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyModule\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("new MyModule()")]),this._v(" ❌")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"access-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Access State")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("Import The store")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'~/store'")]),t._v("\n\nstore"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myMod"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Use "),e("code",[t._v("this.$store")]),t._v(" if in component")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myMod"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField\n")])])])])])}],!1,null,null,null);n.options.__file="getting-started.md";s.default=n.exports}}]);