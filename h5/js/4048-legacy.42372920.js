"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4048],{4048:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-preach-covers-container"},[r("ColumnChart",{attrs:{list:e.listCmp,showTitle:!1}})],1)},s=[],a=r(16198),o=(r(35666),r(41539),r(78783),r(33948),r(54747),{components:{ColumnChart:function(){return r.e(2197).then(r.bind(r,92197))}},computed:{listCmp:function(){var e=this,t=[];return this.list.forEach((function(r){t.push({label:e.$dateFormat(r.g_date,"m/dd"),num:r.sum_visitor}),console.log("arr :>> ",t)})),t}},data:function(){return{list:[]}},created:function(){this.dateCoverListAPI()},methods:{dateCoverListAPI:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={type:"none"},t.next=3,e.$request("lecture.dateCoverList",r);case 3:n=t.sent,console.log("日期覆盖列表API_res :>> ",n),e.list=n;case 6:case"end":return t.stop()}}),t)})))()}}}),i=o,u=r(1001),c=(0,u.Z)(i,n,s,!1,null,"7db49e50",null),l=c.exports}}]);
//# sourceMappingURL=4048-legacy.42372920.js.map