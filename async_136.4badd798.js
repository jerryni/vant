(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{144:function(t,e,a){var n=a(202);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(18)(n,o);n.locals&&(t.exports=n.locals)},202:function(t,e,a){(t.exports=a(19)(!1)).push([t.i,"\n.demo-search .van-search__action div {\n    padding: 0 10px;\n}\n",""])},203:function(t,e,a){"use strict";var n=a(144);a.n(n).a},413:function(t,e,a){"use strict";a.r(e);var n={i18n:{"zh-CN":{title2:"监听对应事件",title3:"自定义行动按钮",placeholder:"请输入商品名称"},"en-US":{title2:"Listen to Events",title3:"Custom Button",placeholder:"Placeholder"}},data:function(){return{value:""}},methods:{onSearch:function(){this.$toast(this.value)},onCancel:function(){this.$toast(this.$t("cancel"))}}},o=(a(203),a(0)),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",[a("demo-block",{attrs:{title:t.$t("basicUsage")}},[a("van-search",{attrs:{placeholder:t.$t("placeholder")},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("demo-block",{attrs:{title:t.$t("title2")}},[a("form",{attrs:{action:"/"}},[a("van-search",{attrs:{placeholder:t.$t("placeholder"),"show-action":""},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),a("demo-block",{attrs:{title:t.$t("title3")}},[a("van-search",{attrs:{"show-action":""},on:{search:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v(t._s(t.$t("search")))])])],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);