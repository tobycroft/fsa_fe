"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2707],{32707:function(t,r,e){e.r(r),e.d(r,{default:function(){return l}});var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"teacher-speaking-rank-container"},[e("TableList",{attrs:{showTitle:!1,columns:t.cloumnListPreach,list:t.instructorListCmp}})],1)},s=[],i=e(16198),c=(e(35666),e(41539),e(78783),e(33948),e(68309),{components:{TableList:function(){return e.e(5646).then(e.bind(e,25646))}},computed:{instructorListCmp:function(){var t=[];for(var r in this.instructorList)t.push({rankingName:"第".concat(parseInt(r)+1,"名"),name:this.instructorList[r].instructor_info.name,visitorStr:"".concat(this.instructorList[r].visitor,"人"),roundStr:"".concat(this.instructorList[r].host_time,"场")});return t}},data:function(){return{cloumnListPreach:[{label:"姓名",keyName:"name"},{label:"听课人数",keyName:"visitorStr"},{label:"场次",keyName:"roundStr"}],instructorList:[]}},created:function(){this.instructorListAPI()},methods:{instructorListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$request("lecture.instructorList");case 2:e=r.sent,console.log("授课老师排名列表API_res :>> ",e),t.instructorList=e;case 5:case"end":return r.stop()}}),r)})))()}}}),o=c,a=e(1001),u=(0,a.Z)(o,n,s,!1,null,"74031fa4",null),l=u.exports}}]);
//# sourceMappingURL=2707-legacy.9ace7eea.js.map