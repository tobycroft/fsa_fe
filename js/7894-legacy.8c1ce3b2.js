"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7894],{17894:function(t,r,n){n.r(r),n.d(r,{default:function(){return h}});var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"teacher-speaking-rank-container"},[n("TableList",{attrs:{showTitle:!1,columns:t.cloumnListPreach,list:t.instructorListCmp}})],1)},s=[],i=n(16198),c=(n(35666),n(41539),n(78783),n(33948),n(68309),{components:{TableList:function(){return n.e(5646).then(n.bind(n,25646))}},computed:{instructorListCmp:function(){var t=[];for(var r in this.instructorList)t.push({rankingName:"第".concat(parseInt(r)+1,"名"),name:this.instructorList[r].instructor_info?this.instructorList[r].instructor_info.name:"",visitorStr:"".concat(this.instructorList[r].instructor_info?this.instructorList[r].sum_visitor:0,"人"),roundStr:"".concat(this.instructorList[r].host_time,"场")});return t}},data:function(){return{cloumnListPreach:[{label:"姓名",keyName:"name"},{label:"听课人数",keyName:"visitorStr"},{label:"场次",keyName:"roundStr"}],instructorList:[]}},created:function(){this.instructorListAPI()},methods:{instructorListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$request("lecture.instructorList");case 2:n=r.sent,console.log("授课老师排名列表API_res :>> ",n),t.instructorList=n;case 5:case"end":return r.stop()}}),r)})))()}}}),o=c,u=n(1001),a=(0,u.Z)(o,e,s,!1,null,"15d7ccf8",null),h=a.exports}}]);
//# sourceMappingURL=7894-legacy.8c1ce3b2.js.map