"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6461],{96461:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"members-audit-container"},[r("header",[r("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),r("main",[r("van-tabs",{staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[r("van-tab",{attrs:{title:"审核列表("+e.reviewList.length+")"}},[r("ul",{staticClass:"review-list"},[e._l(e.reviewList,(function(t,n){return r("li",{key:n,staticClass:"review-list-item"},[r("ReviewListRow",{attrs:{source:t,showOperation:""},on:{fail:function(r){return e.verifydenyAPI(t.instructor_info.iid)},success:function(r){return e.verifyApproveAPI(t.instructor_info.iid)},click:function(r){return e.goToDetail(t)}}})],1)})),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.reviewList.length<=0,expression:"reviewList.length <= 0"}]})],2)]),r("van-tab",{attrs:{title:"已审核"}},[r("ul",{staticClass:"review-list"},[e._l(e.approvedList,(function(t,n){return r("li",{key:n,staticClass:"review-list-item"},[r("ReviewListRow",{attrs:{source:t,status:""},on:{click:function(r){return e.goToDetail(t)}}})],1)})),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.approvedList.length<=0,expression:"approvedList.length <= 0"}]})],2)])],1)],1)])},i=[],s=r(16198),a=(r(35666),r(41539),r(78783),r(33948),r(76711)),o={components:{ReviewListRow:function(){return r.e(7868).then(r.bind(r,87868))},NoRecord:function(){return r.e(5847).then(r.bind(r,35847))}},data:function(){return{keyword:"",active:2,aid:"",reviewList:[],approvedList:[]}},created:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMemberMe();case 2:e.initListData();case 3:case"end":return t.stop()}}),t)})))()},methods:{verifyApproveAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={iid:e,mtids:0},r.next=3,t.$request("association.verifyApprove",n);case 3:i=r.sent,console.log("成员审核-通过_APIres :>> ",i),t.initListData();case 6:case"end":return r.stop()}}),r)})))()},verifydenyAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={iid:e,mtids:0},r.next=3,t.$request("association.verifyApprove",n);case 3:i=r.sent,console.log("成员审核-失败API_res :>> ",i),t.initListData();case 6:case"end":return r.stop()}}),r)})))()},goToDetail:function(e){console.log("row :>> ",e),this.$router.push({path:"/membersAuditDetails",query:{iid:e.instructor_info.iid,aid:e.aid}})},getMemberMe:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.aid=e.$store.getters.associationInfoCurrent.id;case 1:case"end":return t.stop()}}),t)})))()},initListData:function(){this.instructorVerifyListAPI(this.aid,0),this.instructorVerifyListAPI(this.aid,1)},instructorVerifyListAPI:function(e,t){var r=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i={aid:e,status:t},n.next=3,r.$request("instructor.instructorVerifyList",i);case 3:s=n.sent,console.log("验证-列表API_res :>> ",s),0===t&&(r.reviewList=s),1===t&&(r.approvedList=s);case 7:case"end":return n.stop()}}),n)})))()},onSearch:function(){this.reviewList=(0,a.o1)(this.reviewList,this.keyword),this.approvedList=(0,a.o1)(this.approvedList,this.keyword)},onClear:function(){console.log("onClear :>> "),this.initListData()}}},c=o,u=r(1001),l=(0,u.Z)(c,n,i,!1,null,"5c11525b",null),f=l.exports},76711:function(e,t,r){r.d(t,{e9:function(){return n},fS:function(){return o},i_:function(){return s},o1:function(){return a},rm:function(){return i}});r(41539),r(54747),r(74916),r(15306);function n(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var i=function(e,t){var r=new Date(Date.parse(e)),n=new Date(Date.parse(t));return r>n},s=function(e,t,r){switch(t){case"H":case"h":if("H"===r||"h"===r)return e;if("M"===r||"m"===r)return 60*e;if("S"===r||"s"===r)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return e/60;if("M"===r||"m"===r)return e;if("S"===r||"s"===r)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return e/60/60;if("M"===r||"m"===r)return e/60;if("S"===r||"s"===r)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=[];return e.forEach((function(e){var i=e[r].indexOf(t);i>-1&&n.push(e)})),n},o=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}}}]);
//# sourceMappingURL=6461-legacy.5bbab1be.js.map