(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{151:function(t,e,n){var a=n(216);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,i);a.locals&&(t.exports=a.locals)},216:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n.demo-pagination .van-pagination {\n    margin: 5px 0;\n    width: 100%;\n}\n.demo-pagination .van-doc-demo-block {\n    padding: 0 15px;\n}\n.demo-pagination .van-doc-demo-block__title {\n    padding-left: 0;\n}\n",""])},217:function(t,e,n){"use strict";var a=n(151);n.n(a).a},402:function(t,e,n){"use strict";n.r(e);var a={i18n:{"zh-CN":{title2:"简单模式",title3:"",prevText:"上一页",nextText:"下一页"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",prevText:"Prev",nextText:"Next"}},data:function(){return{currentPage1:1,currentPage2:1,currentPage3:1}}},i=(n(217),n(0)),r=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("basicUsage")}},[n("van-pagination",{attrs:{"total-items":24,"items-per-page":5,"previous-text":t.$t("prevText"),"next-text":t.$t("nextText")},model:{value:t.currentPage1,callback:function(e){t.currentPage1=e},expression:"currentPage1"}})],1),n("demo-block",{attrs:{title:t.$t("title2")}},[n("van-pagination",{attrs:{"page-count":12,"previous-text":t.$t("prevText"),"next-text":t.$t("nextText"),mode:"simple",size:"small"},model:{value:t.currentPage2,callback:function(e){t.currentPage2=e},expression:"currentPage2"}})],1),n("demo-block",{attrs:{title:t.$t("title3")}},[n("van-pagination",{attrs:{"force-ellipses":"","total-items":125,"show-page-size":3,"previous-text":t.$t("prevText"),"next-text":t.$t("nextText")},model:{value:t.currentPage3,callback:function(e){t.currentPage3=e},expression:"currentPage3"}})],1)],1)},[],!1,null,null,null);e.default=r.exports}}]);