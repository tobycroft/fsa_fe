"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6075],{86075:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preach-regional-coverage-number-rank-container"},[n("TopList",{attrs:{list:e.topListCoverCmp,showTitle:!1}})],1)},o=[],i=n(16198),a=n(62032),c=(n(35666),n(41539),n(78783),n(33948),n(54747),n(68309),n(92222),{components:{TopList:function(){return n.e(6185).then(n.bind(n,16185))}},computed:{topListCoverCmp:function(){var e=this,t=[];return this.coverList.forEach((function(n){console.log("item :>> ",n);var r,o=(0,a.Z)(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.name===n.city)return void(i.value+=n.visitor)}}catch(c){o.e(c)}finally{o.f()}t.push({label:e.handleAreaText(n),value:"".concat(n.visitor,"人")})})),console.log("排行榜:覆盖arr :>> ",t),t}},data:function(){return{coverList:[]}},created:function(){this.coverListAPI()},methods:{handleAreaText:function(e){return"".concat(e.province).concat(e.city).concat(e.district).concat(e.street)},coverListAPI:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("lecture.coverList");case 2:n=t.sent,console.log("覆盖列表API_res :>> ",n),e.coverList=n;case 5:case"end":return t.stop()}}),t)})))()}}}),u=c,s=n(1001),l=(0,s.Z)(u,r,o,!1,null,"5d2007c8",null),f=l.exports},62032:function(e,t,n){n.d(t,{Z:function(){return o}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(21703);var r=n(48936);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw a}}}}}}]);
//# sourceMappingURL=6075-legacy.234e2d37.js.map