"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9086],{89086:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preach-regional-coverage-number-rank-container"},[r("TopList",{attrs:{list:e.topListCoverCmp,showTitle:!1}})],1)},o=[],i=r(48534),c=r(66347),s=(r(35666),r(41539),r(78783),r(33948),r(54747),r(68309),r(92222),r(37662)),a={components:{TopList:function(){return r.e(5944).then(r.bind(r,5944))}},computed:{topListCoverCmp:function(){var e=this,t=[];return this.coverList.forEach((function(r){console.log("item :>> ",r);var n,o=(0,c.Z)(t);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(i.name===r.city)return void(i.value+=r.sum_visitor)}}catch(s){o.e(s)}finally{o.f()}t.push({label:e.handleAreaText(r),value:"".concat(r.sum_visitor,"人")})})),console.log("排行榜:覆盖arr :>> ",t),t}},data:function(){return{coverList:[]}},created:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.getters.associationInfo&&e.$store.getters.associationInfo.id){t.next=3;break}return t.next=3,e.$store.dispatch("association/associationInfoDomainAPI");case 3:e.coverListAPI();case 4:case"end":return t.stop()}}),t)})))()},methods:{handleAreaText:function(e){var t=this.$store.getters.associationInfo.model_type;switch(t){case"district":return"".concat(e.district).concat(e.street);default:return"".concat(e.province).concat(e.city).concat(e.district).concat(e.street)}},coverListAPI:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.getters.associationInfo.id,n=(0,s.Y_)(e.$store.getters.associationInfo.model_type),o={aid:r,type:n},t.next=5,e.$request("common.coverList",o);case 5:i=t.sent,console.log("覆盖列表API_res :>> ",i),e.coverList=i;case 8:case"end":return t.stop()}}),t)})))()}}},u=a,f=r(43736),l=(0,f.Z)(u,n,o,!1,null,"a990ab9a",null),h=l.exports},37662:function(e,t,r){r.d(t,{Ef:function(){return a},Y_:function(){return f},e9:function(){return n},fS:function(){return s},i_:function(){return i},o1:function(){return c},og:function(){return u},rm:function(){return o}});r(41539),r(54747),r(74916),r(15306);function n(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var o=function(e,t){var r=new Date(Date.parse(e)),n=new Date(Date.parse(t));return r>n},i=function(e,t,r){switch(t){case"H":case"h":if("H"===r||"h"===r)return e;if("M"===r||"m"===r)return 60*e;if("S"===r||"s"===r)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return e/60;if("M"===r||"m"===r)return e;if("S"===r||"s"===r)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return e/60/60;if("M"===r||"m"===r)return e/60;if("S"===r||"s"===r)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},c=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=[];return e.forEach((function(e){var o=e[r].indexOf(t);o>-1&&n.push(e)})),n},s=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},a=function(e){var t=[];for(var r in e)t.push(e[r]);return t.reverse()},u=function(e,t){console.log("importType :>> ",e);var r="";return"default"!==e&&"a"!==e||(r="fj"),"gt"===e&&(r="gt"),r===t},f=function(e){switch(e){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=9086-legacy.9d50950f.js.map