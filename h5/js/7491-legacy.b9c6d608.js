"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7491],{37491:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recent-undertaking-unit-container"},[n("TopList",{attrs:{showTitle:!1,list:t.topListUndertakeCmp,showSort:!1}})],1)},s=[],a=n(16198),i=(n(35666),n(41539),n(78783),n(33948),n(54747),n(68309),{components:{TopList:function(){return n.e(6185).then(n.bind(n,16185))}},computed:{topListUndertakeCmp:function(){var t=this,e=[];return this.recentList.forEach((function(n){e.push({label:n.host_info.name,value:t.handleDateFormat(n.start_date)})})),console.log("近期承办单位列表arr :>> ",e),e}},data:function(){return{recentList:[]}},created:function(){this.recentListAPI()},methods:{handleDateFormat:function(t){return this.$dateFormat(t,"yyyy年mm月dd日")},recentListAPI:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$store.getters.associationInfo.id,r={aid:n},e.next=4,t.$request("lecture.recentList",r);case 4:s=e.sent,console.log("近期列表API_res :>> ",s),t.recentList=s;case 7:case"end":return e.stop()}}),e)})))()}}}),o=i,c=n(1001),u=(0,c.Z)(o,r,s,!1,null,"f2a66a7e",null),h=u.exports}}]);
//# sourceMappingURL=7491-legacy.b9c6d608.js.map