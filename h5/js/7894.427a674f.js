"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7894],{17894:function(t,s,r){r.r(s),r.d(s,{default:function(){return a}});var i=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"teacher-speaking-rank-container"},[r("TableList",{attrs:{showTitle:!1,columns:t.cloumnListPreach,list:t.instructorListCmp}})],1)},e=[],n={components:{TableList:()=>r.e(569).then(r.bind(r,90569))},computed:{instructorListCmp(){const t=[];for(const s in this.instructorList)t.push({rankingName:`第${parseInt(s)+1}名`,name:this.instructorList[s].instructor_info?this.instructorList[s].instructor_info.name:"",visitorStr:`${this.instructorList[s].instructor_info?this.instructorList[s].sum_visitor:0}人`,roundStr:`${this.instructorList[s].host_time}场`});return t}},data(){return{cloumnListPreach:[{label:"姓名",keyName:"name"},{label:"听课人数",keyName:"visitorStr"},{label:"场次",keyName:"roundStr"}],instructorList:[]}},created(){this.instructorListAPI()},methods:{async instructorListAPI(){const t=await this.$request("lecture.instructorList");console.log("授课老师排名列表API_res :>> ",t),this.instructorList=t}}},o=n,c=r(1001),u=(0,c.Z)(o,i,e,!1,null,"15d7ccf8",null),a=u.exports}}]);
//# sourceMappingURL=7894.427a674f.js.map