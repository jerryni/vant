(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{401:function(s,a,n){"use strict";n.r(a);var l={created:function(){this.content=unescape("%3Ch2%3EQuickstart%3C/h2%3E%0A%3Ch3%3EStarter%20kit%3C/h3%3E%0A%3Cp%3EUse%20%3Ca%20href%3D%22https%3A//github.com/vuejs/vue-cli%22%3Evue-cli%3C/a%3E%20to%20create%20a%20vant%20project.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-shell%22%3Evue%20init%20youzan/vue-cli-template-vant%20projectName%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Ch4%3ENPM%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-shell%22%3Enpm%20i%20vant%20-S%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EYARN%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-shell%22%3Eyarn%20add%20vant%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECDN%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20import%20style%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Elink%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Erel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22stylesheet%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ehref%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22https%3A//unpkg.com/vant/lib/vant-css/index.css%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20import%20script%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22https%3A//unpkg.com/vue/dist/vue.min.js%22%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22undefined%22%3E%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22https%3A//unpkg.com/vant/lib/vant.min.js%22%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22undefined%22%3E%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3E1.%20Use%20%3Ca%20href%3D%22https%3A//github.com/ant-design/babel-plugin-import%22%3Ebabel-plugin-import%3C/a%3E%20%28Recommended%29%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20babel-plugin-import%3C/span%3E%0Anpm%20i%20babel-plugin-import%20-D%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20set%20babel%20config%20in%20.babelrc%20or%20babel-loader%3C/span%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20Note%3A%20Don%27t%20set%20libraryDirectory%20if%20you%20are%20using%20webpack%201.%3C/span%3E%0A%7B%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22plugins%22%3C/span%3E%3A%20%5B%0A%20%20%20%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%22import%22%3C/span%3E%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22libraryName%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22vant%22%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22libraryDirectory%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22es%22%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22style%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%5D%0A%20%20%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThen%20you%20can%20import%20components%20from%20vant%2C%20equivalent%20to%20import%20manually%20below.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Button%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3EIf%20you%20are%20using%20TypeScript%uFF0Cplease%20use%20%3Ca%20href%3D%22https%3A//github.com/Brooooooklyn/ts-import-plugin%22%3Ets-import-plugin%3C/a%3E%20instead%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch4%3E2.%20Manually%20import%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Button%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/button%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/vant-css/base.css%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/vant-css/button.css%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E3.%20Import%20all%20components%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vant%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/vant-css/index.css%27%3C/span%3E%3B%0A%0AVue.use%28Vant%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3EIf%20you%20configured%20babel-plugin-import%2C%20you%20won%27t%20be%20allowed%20to%20import%20all%20components.%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch3%3ERem%20units%3C/h3%3E%0A%3Cp%3EVant%20use%20%3Ccode%3Epx%3C/code%3E%20as%20size%20units%20by%20default%uFF0Cyou%20can%20use%20tools%20such%20as%20%3Ccode%3Epostcss-pxtorem%3C/code%3E%20to%20transform%20units%20to%20%3Ccode%3Erem%3C/code%3E.%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Ca%20href%3D%22https%3A//github.com/cuth/postcss-pxtorem%22%3Epostcss-pxtorem%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href%3D%22https%3A//github.com/amfe/lib-flexible%22%3Elib-flexible%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3Epostcss%20config%20example%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplugins%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27autoprefixer%27%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebrowsers%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Android%20%26gt%3B%3D%204.0%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27iOS%20%26gt%3B%3D%207%27%3C/span%3E%5D%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27postcss-pxtorem%27%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ErootValue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E37.5%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EpropList%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27*%27%3C/span%3E%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A")}},t=n(0),p=Object(t.a)(l,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);a.default=p.exports}}]);