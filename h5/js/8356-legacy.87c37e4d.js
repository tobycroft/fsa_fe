"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8356],{48356:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-search",{attrs:{placeholder:"请输入主办方关键词"},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),n("div",{staticClass:"gap"}),n("div",{staticClass:"container"},t._l(t.hostList,(function(e,r){return n("div",{key:e.id,staticClass:"section",class:{"one-style":0===r},on:{click:function(n){return t.handleSelect(e.id,e.name)}}},[n("span",{staticClass:"char"},[t._v(t._s(e.name))])])})),0),n("div",{staticClass:"no-more"},[t._v("没有更多了~")]),n("div",{staticClass:"bottom-gap"}),n("div",{staticClass:"btn-bottom",on:{click:t.handleAdd}},[t._v("新建")])],1)},s=[],a=n(9726),i=n(16198),o=(n(35666),n(91742)),c=n(76711),u={components:{},data:function(){return{searchKeyword:"",page:{limit:10,pageNo:1},hostList:[]}},created:function(){this.reqHostList()},methods:{handleSelect:function(t,e){o.Z.$emit("hostObj",{id:t,name:e}),this.$router.back()},reqHostList:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$store.getters.associationInfo.id,r={aid:n},e.next=4,t.$request("host.hostList",r);case 4:s=e.sent,console.log("主办方列表 :>> ",(0,a.Z)(s)),t.hostList=(0,c.Ef)(s);case 7:case"end":return e.stop()}}),e)})))()},handleAdd:function(){this.$router.push({path:"/adminAddtUnit"})}}},f=u,l=n(1001),d=(0,l.Z)(f,r,s,!1,null,"83939f9a",null),h=d.exports},91742:function(t,e,n){var r=n(20144);e["Z"]=new r["default"]},76711:function(t,e,n){n.d(e,{Ef:function(){return c},Y_:function(){return f},e9:function(){return r},fS:function(){return o},i_:function(){return a},o1:function(){return i},og:function(){return u},rm:function(){return s}});n(41539),n(54747),n(74916),n(15306);function r(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}var s=function(t,e){var n=new Date(Date.parse(t)),r=new Date(Date.parse(e));return n>r},a=function(t,e,n){switch(e){case"H":case"h":if("H"===n||"h"===n)return t;if("M"===n||"m"===n)return 60*t;if("S"===n||"s"===n)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return t/60;if("M"===n||"m"===n)return t;if("S"===n||"s"===n)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return t/60/60;if("M"===n||"m"===n)return t/60;if("S"===n||"s"===n)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},i=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return t.forEach((function(t){var s=t[n].indexOf(e);s>-1&&r.push(t)})),r},o=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(t){var e=[];for(var n in t)e.push(t[n]);return e.reverse()},u=function(t,e){console.log("importType :>> ",t);var n="";return"default"!==t&&"a"!==t||(n="fj"),"gt"===t&&(n="gt"),n===e},f=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=8356-legacy.87c37e4d.js.map