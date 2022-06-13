"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4013],{14013:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"members-audit-container"},[i("header",[i("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),i("main",[i("van-tabs",{staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("van-tab",{attrs:{title:"审核列表("+e.reviewList.length+")"}},[i("ul",{staticClass:"review-list"},[e._l(e.reviewList,(function(t,n){return i("li",{key:n,staticClass:"review-list-item"},[i("ReviewListRow",{attrs:{source:t,showOperation:""},on:{fail:function(i){return e.verifydenyAPI(t.instructor_info.iid)},success:function(i){return e.handleApprove(t.instructor_info.iid)},click:function(i){return e.goToDetail(t)}}})],1)})),i("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.reviewList.length<=0,expression:"reviewList.length <= 0"}]})],2)]),i("van-tab",{attrs:{title:"已审核"}},[i("ul",{staticClass:"review-list"},[e._l(e.approvedList,(function(t,n){return i("li",{key:n,staticClass:"review-list-item"},[i("ReviewListRow",{attrs:{source:t,status:""},on:{click:function(i){return e.goToDetail(t)}}})],1)})),i("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.approvedList.length<=0,expression:"approvedList.length <= 0"}]})],2)])],1)],1),i("SelectThe",{attrs:{show:e.showSelectThe,list:e.associationTitleList,active:e.activeSelectThe},on:{"update:show":function(t){e.showSelectThe=t},change:e.onSelectTheChange,save:e.onSave}})],1)},r=[],s=i(16198),o=(i(35666),i(41539),i(78783),i(33948),i(76711)),a={components:{ReviewListRow:function(){return i.e(8801).then(i.bind(i,98801))},NoRecord:function(){return i.e(5847).then(i.bind(i,35847))},SelectThe:function(){return i.e(9701).then(i.bind(i,29701))}},data:function(){return{keyword:"",active:2,aid:"",iid:"",reviewList:[],approvedList:[],showSelectThe:!1,associationTitleList:[],activeSelectThe:null}},created:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMemberMe();case 2:e.initListData(),e.associationTitleListAPI(e.aid);case 4:case"end":return t.stop()}}),t)})))()},methods:{handleApprove:function(e){this.iid=e,this.associationTitleList.length>0?this.showSelectThe=!0:this.verifyApproveAPI(e)},verifyApproveAPI:function(e){var t=arguments,i=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,s,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:0,s=i.$store.getters.associationInfo.id,o={aid:s,iid:e,mtids:r},n.next=5,i.$request("association.verifyApprove",o);case 5:a=n.sent,console.log("成员审核-通过_APIres :>> ",a),i.$toast.success("审核操作成功"),i.iid=null,i.activeSelectThe=null,i.showSelectThe=!1,i.initListData();case 12:case"end":return n.stop()}}),n)})))()},verifydenyAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var n,r,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.$store.getters.associationInfo.id,r={aid:n,iid:e,mtids:0},i.next=4,t.$request("association.verifydeny",r);case 4:s=i.sent,console.log("成员审核-失败API_res :>> ",s),t.initListData();case 7:case"end":return i.stop()}}),i)})))()},goToDetail:function(e){console.log("row :>> ",e),this.$router.push({path:"/membersAuditDetails",query:{iid:e.instructor_info.iid,aid:e.aid}})},getMemberMe:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.aid=e.$store.getters.associationInfo.id;case 1:case"end":return t.stop()}}),t)})))()},initListData:function(){this.instructorVerifyListAPI(this.aid,0),this.instructorVerifyListAPI(this.aid,1)},instructorVerifyListAPI:function(e,t){var i=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={aid:e,status:t},n.next=3,i.$request("instructor.instructorVerifyList",r);case 3:s=n.sent,console.log("验证-列表API_res :>> ",s),0===t&&(i.reviewList=s),1===t&&(i.approvedList=s);case 7:case"end":return n.stop()}}),n)})))()},onSearch:function(){this.reviewList=(0,o.o1)(this.reviewList,this.keyword),this.approvedList=(0,o.o1)(this.approvedList,this.keyword)},onClear:function(){console.log("onClear :>> "),this.initListData()},associationTitleListAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n={aid:e},i.next=3,t.$request("association.associationTitleList",n);case 3:r=i.sent,console.log("获取职称列表API_res :>> ",r),t.associationTitleList=r;case 6:case"end":return i.stop()}}),i)})))()},onSelectTheChange:function(e){this.activeSelectThe=e.id,console.log("this.activeSelectThe :>> ",this.activeSelectThe)},onSave:function(){this.activeSelectThe?this.verifyApproveAPI(this.iid,this.activeSelectThe):this.$toast("请选择身份")}}},c=a,u=i(1001),l=(0,u.Z)(c,n,r,!1,null,"cff46cda",null),h=l.exports},76711:function(e,t,i){i.d(t,{Ef:function(){return c},e9:function(){return n},fS:function(){return a},i_:function(){return s},o1:function(){return o},og:function(){return u},rm:function(){return r}});i(41539),i(54747),i(74916),i(15306);function n(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var r=function(e,t){var i=new Date(Date.parse(e)),n=new Date(Date.parse(t));return i>n},s=function(e,t,i){switch(t){case"H":case"h":if("H"===i||"h"===i)return e;if("M"===i||"m"===i)return 60*e;if("S"===i||"s"===i)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===i||"h"===i)return e/60;if("M"===i||"m"===i)return e;if("S"===i||"s"===i)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===i||"h"===i)return e/60/60;if("M"===i||"m"===i)return e/60;if("S"===i||"s"===i)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},o=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=[];return e.forEach((function(e){var r=e[i].indexOf(t);r>-1&&n.push(e)})),n},a=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(e){var t=[];for(var i in e)t.push(e[i]);return t.reverse()},u=function(e,t){console.log("importType :>> ",e);var i="";return"default"!==e&&"a"!==e||(i="fj"),"gt"===e&&(i="gt"),i===t}}}]);
//# sourceMappingURL=4013-legacy.d4bb3257.js.map