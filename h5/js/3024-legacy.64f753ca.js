"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3024],{33024:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"members-audit-container"},[r("header",[r("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),r("main",[r("van-tabs",{staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[r("van-tab",{attrs:{title:"审核列表("+e.reviewList.length+")"}},[r("ul",{staticClass:"review-list"},[e._l(e.reviewList,(function(t,n){return r("li",{key:n,staticClass:"review-list-item"},[r("ReviewListRow",{attrs:{source:t,showOperation:""},on:{fail:function(r){return e.verifydenyAPI(t.instructor_info.iid)},success:function(r){return e.handleApprove(t.instructor_info.iid)},click:function(r){return e.goToDetail(t)}}})],1)})),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.reviewList.length<=0,expression:"reviewList.length <= 0"}]})],2)]),r("van-tab",{attrs:{title:"已审核"}},[r("ul",{staticClass:"review-list"},[e._l(e.approvedList,(function(t,n){return r("li",{key:n,staticClass:"review-list-item"},[r("ReviewListRow",{attrs:{source:t,status:""},on:{click:function(r){return e.goToDetail(t)}}})],1)})),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.approvedList.length<=0,expression:"approvedList.length <= 0"}]})],2)])],1)],1),r("SelectThe",{attrs:{show:e.showSelectThe,list:e.instructorTitleList,active:e.activeSelectThe},on:{"update:show":function(t){e.showSelectThe=t},change:e.onSelectTheChange,save:e.onSave}})],1)},i=[],s=r(16198),o=(r(35666),r(41539),r(78783),r(33948),r(76711)),a={components:{ReviewListRow:function(){return r.e(2339).then(r.bind(r,52339))},NoRecord:function(){return r.e(5847).then(r.bind(r,35847))},SelectThe:function(){return r.e(7509).then(r.bind(r,37509))}},data:function(){return{keyword:"",active:2,aid:"",iid:"",reviewList:[],approvedList:[],showSelectThe:!1,instructorTitleList:[],activeSelectThe:null}},created:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMemberMe();case 2:e.initListData(),e.instructorTitleListAPI(e.aid);case 4:case"end":return t.stop()}}),t)})))()},methods:{handleApprove:function(e){this.iid=e,this.instructorTitleList.length>0?this.showSelectThe=!0:this.verifyApproveAPI(e)},verifyApproveAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.$store.getters.associationInfo.id,i={aid:n,iid:e},r.next=4,t.$request("association.verifyApprove",i);case 4:s=r.sent,console.log("成员审核-通过_APIres :>> ",s),t.$toast.success("审核操作成功"),t.iid=null,t.activeSelectThe=null,t.showSelectThe=!1,t.initListData();case 11:case"end":return r.stop()}}),r)})))()},verifydenyAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.$store.getters.associationInfo.id,i={aid:n,iid:e,mtids:0},r.next=4,t.$request("association.verifydeny",i);case 4:s=r.sent,console.log("成员审核-失败API_res :>> ",s),t.initListData();case 7:case"end":return r.stop()}}),r)})))()},goToDetail:function(e){console.log("row :>> ",e),this.$router.push({path:"/membersAuditDetails",query:{iid:e.instructor_info.iid,aid:e.aid}})},getMemberMe:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.aid=e.$store.getters.associationInfo.id;case 1:case"end":return t.stop()}}),t)})))()},initListData:function(){this.instructorVerifyListAPI(this.aid,0),this.instructorVerifyListAPI(this.aid,1)},instructorVerifyListAPI:function(e,t){var r=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i={aid:e,status:t},n.next=3,r.$request("instructor.instructorVerifyList",i);case 3:s=n.sent,console.log("验证-列表API_res :>> ",s),0===t&&(r.reviewList=s),1===t&&(r.approvedList=s);case 7:case"end":return n.stop()}}),n)})))()},onSearch:function(){this.reviewList=(0,o.o1)(this.reviewList,this.keyword),this.approvedList=(0,o.o1)(this.approvedList,this.keyword)},onClear:function(){console.log("onClear :>> "),this.initListData()},instructorTitleListAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={aid:e},r.next=3,t.$request("instructor.instructorTitleList",n);case 3:i=r.sent,console.log("获取职称列表API_res :>> ",i),t.instructorTitleList=i;case 6:case"end":return r.stop()}}),r)})))()},onSelectTheChange:function(e){this.activeSelectThe=e.id,console.log("this.activeSelectThe :>> ",this.activeSelectThe)},onSave:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.activeSelectThe){t.next=3;break}return e.$toast("请选择身份"),t.abrupt("return");case 3:return t.next=5,e.instructorAssociationMtidAPI(e.iid,e.aid,e.activeSelectThe);case 5:e.verifyApproveAPI(e.iid);case 6:case"end":return t.stop()}}),t)})))()},instructorAssociationMtidAPI:function(e,t,r){var n=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var s,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s={iid:e,aid:t,mtid:r},i.next=3,n.$request("instructor.instructorAssociationMtid",s);case 3:return o=i.sent,console.log("修改mtid_API_res :>> ",o),i.abrupt("return",o);case 6:case"end":return i.stop()}}),i)})))()}}},c=a,u=r(1001),l=(0,u.Z)(c,n,i,!1,null,"7ddfa3c6",null),h=l.exports},76711:function(e,t,r){r.d(t,{Ef:function(){return c},Y_:function(){return l},e9:function(){return n},fS:function(){return a},i_:function(){return s},o1:function(){return o},og:function(){return u},rm:function(){return i}});r(41539),r(54747),r(74916),r(15306);function n(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var i=function(e,t){var r=new Date(Date.parse(e)),n=new Date(Date.parse(t));return r>n},s=function(e,t,r){switch(t){case"H":case"h":if("H"===r||"h"===r)return e;if("M"===r||"m"===r)return 60*e;if("S"===r||"s"===r)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return e/60;if("M"===r||"m"===r)return e;if("S"===r||"s"===r)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return e/60/60;if("M"===r||"m"===r)return e/60;if("S"===r||"s"===r)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=[];return e.forEach((function(e){var i=e[r].indexOf(t);i>-1&&n.push(e)})),n},a=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(e){var t=[];for(var r in e)t.push(e[r]);return t.reverse()},u=function(e,t){console.log("importType :>> ",e);var r="";return"default"!==e&&"a"!==e||(r="fj"),"gt"===e&&(r="gt"),r===t},l=function(e){switch(e){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=3024-legacy.64f753ca.js.map