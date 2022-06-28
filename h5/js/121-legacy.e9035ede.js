"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[121],{60121:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"introduction-platform-container"},[r("van-image",{staticClass:"bg-style",attrs:{src:e(28638)}}),r("article",[r("Logo",{staticClass:"logo-style",attrs:{imgUrl:t.unionDetails.logo?t.unionDetails.logo:"",size:250,round:"",border:""}}),r("Card",{staticClass:"introduction-box",attrs:{radius:16}},[r("p",{staticClass:"introduction-title"},[t._v(t._s(t.unionDetails.name))]),r("p",{staticClass:"introduction-content"},[t._v(t._s(t.unionDetails.info))])]),r("van-tabs",{ref:"tabs",staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[r("van-tab",{attrs:{title:"平台简介"}},[r("van-image",{staticClass:"members-the-list-img",attrs:{src:t.unionDetails.poster}})],1),t.hashDomain(t.associationInfo.import_type,"fj")?r("van-tab",{attrs:{title:"讲师公示"}},[r("div",{staticClass:"tab-content"},[r("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入讲师名称",shape:"round"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.keywordMain,callback:function(n){t.keywordMain=n},expression:"keywordMain"}}),r("p",{staticClass:"main-talker-box-label"},[t._v("全部主讲人("+t._s(t.totalMain)+")")]),r("MainList",{ref:"mainList",attrs:{aid:t.currentTradeUnionID,keyword:t.keywordMain},on:{changeTotal:t.changeTotalMain}})],1)]):t._e(),t.hashDomain(t.associationInfo.import_type,"gt")?r("van-tab",{attrs:{title:"成员单位"}},[r("div",{staticClass:"tab-content"},[r("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入成员单位名称",shape:"round"},on:{search:t.onSearchHostUnit,clear:t.hostSearchClear},model:{value:t.keywordHost,callback:function(n){t.keywordHost=n},expression:"keywordHost"}}),r("p",{staticClass:"main-talker-box-label"},[t._v("全部成员单位("+t._s(t.totalHost)+")")]),r("HostUnitList",{ref:"hostUnitList",attrs:{aid:t.currentTradeUnionID,keyword:t.keywordHost},on:{changeTotal:t.changeTotalHost}})],1)]):t._e()],1)],1)],1)},a=[],o=e(16198),i=(e(35666),e(41539),e(78783),e(33948),e(76711)),s={components:{Logo:function(){return e.e(2860).then(e.bind(e,12860))},Card:function(){return e.e(3314).then(e.bind(e,53314))},MainList:function(){return e.e(550).then(e.bind(e,20550))},HostUnitList:function(){return e.e(7306).then(e.bind(e,67306))}},data:function(){return{totalHost:0,keywordHost:"",totalMain:0,keywordMain:"",active:0,mainTalkerList:[],currentTradeUnionID:null,unionDetails:{},hostUnitList:[],associationInfo:{}}},created:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.associationInfo=t.$store.getters.associationInfo,t.currentTradeUnionID=t.associationInfo.id,t.obtainTradeUnionAPI(t.currentTradeUnionID);case 3:case"end":return n.stop()}}),n)})))()},updated:function(){this.$refs.tabs.resize()},methods:{hashDomain:i.og,onSearch:function(){this.$refs.mainList.onSearch()},onClear:function(){var t=this;this.keywordMain="",setTimeout((function(){t.$refs.mainList.onSearch()}),100)},onSearchHostUnit:function(){this.$refs.hostUnitList.onSearch()},hostSearchClear:function(){var t=this;this.keywordHost="",setTimeout((function(){t.$refs.hostUnitList.onSearch()}),100)},changeTotalHost:function(t){this.totalHost=t},changeTotalMain:function(t){this.totalMain=t},obtainTradeUnionAPI:function(t){var n=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={id:t},e.next=3,n.$request("association.obtainTradeUnion",r);case 3:a=e.sent,console.log("获取某个工会API_res :>> ",a),n.unionDetails=a;case 6:case"end":return e.stop()}}),e)})))()},mentorListAPI:function(t){var n=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={aid:t},e.next=3,n.$request("instructor.mentorList",r);case 3:a=e.sent,console.log("导师列表API_res :>> ",a),n.mainTalkerList=(0,i.Ef)(a);case 6:case"end":return e.stop()}}),e)})))()}}},c=s,u=e(1001),l=(0,u.Z)(c,r,a,!1,null,"02e1bd3f",null),f=l.exports},76711:function(t,n,e){e.d(n,{Ef:function(){return c},Y_:function(){return l},e9:function(){return r},fS:function(){return s},i_:function(){return o},o1:function(){return i},og:function(){return u},rm:function(){return a}});e(41539),e(54747),e(74916),e(15306);function r(t,n){return t&&n?t/n*100:(console.log("percentage函数参数异常: :>> ",t,n),0)}var a=function(t,n){var e=new Date(Date.parse(t)),r=new Date(Date.parse(n));return e>r},o=function(t,n,e){switch(n){case"H":case"h":if("H"===e||"h"===e)return t;if("M"===e||"m"===e)return 60*t;if("S"===e||"s"===e)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===e||"h"===e)return t/60;if("M"===e||"m"===e)return t;if("S"===e||"s"===e)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===e||"h"===e)return t/60/60;if("M"===e||"m"===e)return t/60;if("S"===e||"s"===e)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},i=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return t.forEach((function(t){var a=t[e].indexOf(n);a>-1&&r.push(t)})),r},s=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(t){var n=[];for(var e in t)n.push(t[e]);return n.reverse()},u=function(t,n){console.log("importType :>> ",t);var e="";return"default"!==t&&"a"!==t||(e="fj"),"gt"===t&&(e="gt"),e===n},l=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}},28638:function(t,n,e){t.exports=e.p+"img/introduction_platform_bg.fe089f1a.png"}}]);
//# sourceMappingURL=121-legacy.e9035ede.js.map