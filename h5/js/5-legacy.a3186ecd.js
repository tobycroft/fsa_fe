"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5],{20005:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"introduction-platform-container"},[r("van-image",{staticClass:"bg-style",attrs:{src:n(28638)}}),r("article",[r("Logo",{staticClass:"logo-style",attrs:{imgUrl:t.unionDetails.logo?t.unionDetails.logo:"",size:250,round:"",border:""}}),r("Card",{staticClass:"introduction-box",attrs:{radius:16}},[r("p",{staticClass:"introduction-title"},[t._v(t._s(t.unionDetails.name))]),r("p",{staticClass:"introduction-content"},[t._v(t._s(t.unionDetails.info))])]),r("van-tabs",{ref:"tabs",staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[r("van-tab",{attrs:{title:"平台简介"}},[r("van-image",{staticClass:"members-the-list-img",attrs:{src:t.unionDetails.poster}})],1),t.hashDomain(t.associationInfo.import_type,"fj")?r("van-tab",{attrs:{title:"讲师公示"}},[r("div",{staticClass:"tab-content"},[r("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入讲师名称",shape:"round"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),r("p",{staticClass:"main-talker-box-label"},[t._v(" 全部主讲人("+t._s(t.mainTalkerList.length)+") ")]),r("ul",{staticClass:"main-talker-list"},t._l(t.mainTalkerList,(function(t,e){return r("li",{key:e,staticClass:"main-talker-item"},[r("MainTalker",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,patrolDistricts:t.area_count,activitySession:t.lecture_count,participation:t.sum_visitor}})],1)})),0)],1)]):t._e(),t.hashDomain(t.associationInfo.import_type,"gt")?r("van-tab",{attrs:{title:"成员单位"}},[r("div",{staticClass:"tab-content"},[r("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入成员单位名称",shape:"round"},on:{search:t.onSearchHostUnit,clear:t.hostInfoSearchAPI},model:{value:t.keywordHostUnit,callback:function(e){t.keywordHostUnit=e},expression:"keywordHostUnit"}}),r("p",{staticClass:"main-talker-box-label"},[t._v(" 全部成员单位("+t._s(t.hostUnitList.length)+") ")]),r("van-list",{staticClass:"main-talker-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:function(e){return t.hostInfoSearchAPI(t.currentTradeUnionID)}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.hostUnitList,(function(t,e){return r("div",{key:e,staticClass:"main-talker-item"},[r("hostUnitList",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,employee:t.employee,student:t.student}})],1)})),0)],1)]):t._e()],1)],1)],1)},a=[],i=n(62032),s=n(16198),o=(n(35666),n(41539),n(78783),n(33948),n(68309),n(76711)),c={components:{Logo:function(){return n.e(2860).then(n.bind(n,12860))},Card:function(){return n.e(3314).then(n.bind(n,53314))},MembersList:function(){return n.e(1962).then(n.bind(n,1962))},MainTalker:function(){return n.e(1297).then(n.bind(n,21297))},hostUnitList:function(){return n.e(6267).then(n.bind(n,6267))}},data:function(){return{page:{limit:10,page:1,name:"",aid:-1},loading:!1,finished:!1,active:0,keyword:"",keywordHostUnit:"",mainTalkerList:[],currentTradeUnionID:null,unionDetails:{},hostUnitList:[],associationInfo:{},lastPage:null,total:0}},created:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.associationInfo=t.$store.getters.associationInfo,t.currentTradeUnionID=t.associationInfo.id,t.obtainTradeUnionAPI(t.currentTradeUnionID),t.mentorListAPI(t.currentTradeUnionID);case 4:case"end":return e.stop()}}),e)})))()},updated:function(){this.$refs.tabs.resize()},methods:{hashDomain:o.og,onSearch:function(t){console.log("val :>> ",t),this.mainTalkerList=(0,o.o1)(this.mainTalkerList,t,"name")},onSearchHostUnit:function(t){this.hostUnitList=[],console.log("val :>> ",t),this.page.name=t,this.hostInfoSearchAPI(this.currentTradeUnionID)},onClear:function(){this.page.name="",this.hostUnitList=[],this.mentorListAPI(this.currentTradeUnionID),this.hostInfoSearchAPI(this.currentTradeUnionID)},obtainTradeUnionAPI:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={id:t},n.next=3,e.$request("association.obtainTradeUnion",r);case 3:a=n.sent,console.log("获取某个工会API_res :>> ",a),e.unionDetails=a;case 6:case"end":return n.stop()}}),n)})))()},mentorListAPI:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={aid:t},n.next=3,e.$request("instructor.mentorList",r);case 3:a=n.sent,console.log("导师列表API_res :>> ",a),e.mainTalkerList=(0,o.Ef)(a);case 6:case"end":return n.stop()}}),n)})))()},hostInfoSearchAPI:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,a,s,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.page.aid=t,r=e.page,n.next=4,e.$request("host.hostInfoSearch",r);case 4:if(a=n.sent,e.total=a.total,e.lastPage=a.last_page,console.log("获取主办方信息列表API_res :>> ",a),!(e.page.page>e.lastPage)){n.next=11;break}return e.finished=!0,n.abrupt("return");case 11:s=(0,i.Z)(a.data);try{for(s.s();!(o=s.n()).done;)c=o.value,e.hostUnitList.push(c)}catch(u){s.e(u)}finally{s.f()}e.page.page+=1,e.loading=!1,(a.data.length<e.limit||!a)&&(e.finished=!0);case 16:case"end":return n.stop()}}),n)})))()}}},u=c,l=n(1001),f=(0,l.Z)(u,r,a,!1,null,"fdc2f564",null),h=f.exports},76711:function(t,e,n){n.d(e,{Ef:function(){return c},Y_:function(){return l},e9:function(){return r},fS:function(){return o},i_:function(){return i},o1:function(){return s},og:function(){return u},rm:function(){return a}});n(41539),n(54747),n(74916),n(15306);function r(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}var a=function(t,e){var n=new Date(Date.parse(t)),r=new Date(Date.parse(e));return n>r},i=function(t,e,n){switch(e){case"H":case"h":if("H"===n||"h"===n)return t;if("M"===n||"m"===n)return 60*t;if("S"===n||"s"===n)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return t/60;if("M"===n||"m"===n)return t;if("S"===n||"s"===n)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return t/60/60;if("M"===n||"m"===n)return t/60;if("S"===n||"s"===n)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return t.forEach((function(t){var a=t[n].indexOf(e);a>-1&&r.push(t)})),r},o=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(t){var e=[];for(var n in t)e.push(t[n]);return e.reverse()},u=function(t,e){console.log("importType :>> ",t);var n="";return"default"!==t&&"a"!==t||(n="fj"),"gt"===t&&(n="gt"),n===e},l=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}},28638:function(t,e,n){t.exports=n.p+"img/introduction_platform_bg.fe089f1a.png"}}]);
//# sourceMappingURL=5-legacy.a3186ecd.js.map