"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6075],{86075:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preach-regional-coverage-number-rank-container"},[r("TopList",{attrs:{list:e.topListCoverCmp,showTitle:!1}})],1)},o=[],i={components:{TopList:()=>r.e(6185).then(r.bind(r,16185))},computed:{topListCoverCmp(){const e=[];return this.coverList.forEach((t=>{console.log("item :>> ",t);for(const r of e)if(r.name===t.city)return void(r.value+=t.visitor);e.push({label:this.handleAreaText(t),value:`${t.visitor}人`})})),console.log("排行榜:覆盖arr :>> ",e),e}},data(){return{coverList:[]}},created(){this.coverListAPI()},methods:{handleAreaText(e){return`${e.province}${e.city}${e.district}${e.street}`},async coverListAPI(){const e=await this.$request("lecture.coverList");console.log("覆盖列表API_res :>> ",e),this.coverList=e}}},c=i,n=r(1001),a=(0,n.Z)(c,s,o,!1,null,"5d2007c8",null),l=a.exports}}]);
//# sourceMappingURL=6075.911ee218.js.map