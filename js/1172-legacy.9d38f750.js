"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1172],{21172:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preach-regional-coverage-number-rank-container"},[r("TopList",{attrs:{list:e.topListCoverCmp,showTitle:!1}})],1)},c=[],o=r(16198),i=r(62032),s=(r(35666),r(41539),r(78783),r(33948),r(54747),r(68309),r(92222),{components:{TopList:function(){return r.e(6185).then(r.bind(r,16185))}},computed:{topListCoverCmp:function(){var e=this,t=[];return this.coverList.forEach((function(r){console.log("item :>> ",r);var n,c=(0,i.Z)(t);try{for(c.s();!(n=c.n()).done;){var o=n.value;if(o.name===r.city)return void(o.value+=r.sum_visitor)}}catch(s){c.e(s)}finally{c.f()}t.push({label:e.handleAreaText(r),value:"".concat(r.sum_visitor,"人")})})),console.log("排行榜:覆盖arr :>> ",t),t}},data:function(){return{coverList:[]}},created:function(){this.coverListAPI()},methods:{handleAreaText:function(e){return"".concat(e.province).concat(e.city).concat(e.district).concat(e.street)},coverListAPI:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("lecture.coverList");case 2:r=t.sent,console.log("覆盖列表API_res :>> ",r),e.coverList=r;case 5:case"end":return t.stop()}}),t)})))()}}}),a=s,u=r(1001),l=(0,u.Z)(a,n,c,!1,null,"30dabcc8",null),h=l.exports}}]);
//# sourceMappingURL=1172-legacy.9d38f750.js.map