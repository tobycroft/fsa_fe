"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7380],{17380:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-preach-covers-container"},[s("ColumnChart",{attrs:{list:t.listCmp,showTitle:!1}})],1)},a=[],o={components:{ColumnChart:()=>s.e(2197).then(s.bind(s,92197))},computed:{listCmp(){const t=[];return this.list.forEach((e=>{t.push({label:this.$dateFormat(e.g_date,"m/dd"),num:e.sum_visitor}),console.log("arr :>> ",t)})),t}},data(){return{list:[]}},created(){this.dateCoverListAPI()},methods:{async dateCoverListAPI(){const t=this.$store.getters.associationInfo.id,e={type:"none",aid:t},s=await this.$request("lecture.dateCoverList",e);console.log("日期覆盖列表API_res :>> ",s),this.list=s}}},n=o,i=s(1001),l=(0,i.Z)(n,r,a,!1,null,"69f93aa6",null),c=l.exports}}]);
//# sourceMappingURL=7380.81f3f39b.js.map