"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5],{20005:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduction-platform-container"},[n("van-image",{staticClass:"bg-style",attrs:{src:s(28638)}}),n("article",[n("Logo",{staticClass:"logo-style",attrs:{imgUrl:t.unionDetails.logo?t.unionDetails.logo:"",size:250,round:"",border:""}}),n("Card",{staticClass:"introduction-box",attrs:{radius:16}},[n("p",{staticClass:"introduction-title"},[t._v(t._s(t.unionDetails.name))]),n("p",{staticClass:"introduction-content"},[t._v(t._s(t.unionDetails.info))])]),n("van-tabs",{ref:"tabs",staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"平台简介"}},[n("van-image",{staticClass:"members-the-list-img",attrs:{src:t.unionDetails.poster}})],1),t.hashDomain(t.associationInfo.import_type,"fj")?n("van-tab",{attrs:{title:"讲师公示"}},[n("div",{staticClass:"tab-content"},[n("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入讲师名称",shape:"round"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),n("p",{staticClass:"main-talker-box-label"},[t._v(" 全部主讲人("+t._s(t.mainTalkerList.length)+") ")]),n("ul",{staticClass:"main-talker-list"},t._l(t.mainTalkerList,(function(t,e){return n("li",{key:e,staticClass:"main-talker-item"},[n("MainTalker",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,patrolDistricts:t.area_count,activitySession:t.lecture_count,participation:t.sum_visitor}})],1)})),0)],1)]):t._e(),t.hashDomain(t.associationInfo.import_type,"gt")?n("van-tab",{attrs:{title:"成员单位"}},[n("div",{staticClass:"tab-content"},[n("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入成员单位名称",shape:"round"},on:{search:t.onSearchHostUnit,clear:t.hostInfoSearchAPI},model:{value:t.keywordHostUnit,callback:function(e){t.keywordHostUnit=e},expression:"keywordHostUnit"}}),n("p",{staticClass:"main-talker-box-label"},[t._v(" 全部成员单位("+t._s(t.hostUnitList.length)+") ")]),n("van-list",{staticClass:"main-talker-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:function(e){return t.hostInfoSearchAPI(t.currentTradeUnionID)}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.hostUnitList,(function(t,e){return n("div",{key:e,staticClass:"main-talker-item"},[n("hostUnitList",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,employee:t.employee,student:t.student}})],1)})),0)],1)]):t._e()],1)],1)],1)},a=[],i=s(76711),r={components:{Logo:()=>s.e(2860).then(s.bind(s,12860)),Card:()=>s.e(3314).then(s.bind(s,53314)),MembersList:()=>s.e(1962).then(s.bind(s,1962)),MainTalker:()=>s.e(1297).then(s.bind(s,21297)),hostUnitList:()=>s.e(6267).then(s.bind(s,6267))},data(){return{page:{limit:10,page:1,name:"",aid:-1},loading:!1,finished:!1,active:0,keyword:"",keywordHostUnit:"",mainTalkerList:[],currentTradeUnionID:null,unionDetails:{},hostUnitList:[],associationInfo:{},lastPage:null,total:0}},async created(){this.associationInfo=this.$store.getters.associationInfo,this.currentTradeUnionID=this.associationInfo.id,this.obtainTradeUnionAPI(this.currentTradeUnionID),this.mentorListAPI(this.currentTradeUnionID)},updated(){this.$refs.tabs.resize()},methods:{hashDomain:i.og,onSearch(t){console.log("val :>> ",t),this.mainTalkerList=(0,i.o1)(this.mainTalkerList,t,"name")},onSearchHostUnit(t){this.hostUnitList=[],console.log("val :>> ",t),this.page.name=t,this.hostInfoSearchAPI(this.currentTradeUnionID)},onClear(){this.page.name="",this.hostUnitList=[],this.mentorListAPI(this.currentTradeUnionID),this.hostInfoSearchAPI(this.currentTradeUnionID)},async obtainTradeUnionAPI(t){const e={id:t},s=await this.$request("association.obtainTradeUnion",e);console.log("获取某个工会API_res :>> ",s),this.unionDetails=s},async mentorListAPI(t){const e={aid:t},s=await this.$request("instructor.mentorList",e);console.log("导师列表API_res :>> ",s),this.mainTalkerList=(0,i.Ef)(s)},async hostInfoSearchAPI(t){this.page.aid=t;const e=this.page,s=await this.$request("host.hostInfoSearch",e);if(this.total=s.total,this.lastPage=s.last_page,console.log("获取主办方信息列表API_res :>> ",s),this.page.page>this.lastPage)this.finished=!0;else{for(const t of s.data)this.hostUnitList.push(t);this.page.page+=1,this.loading=!1,(s.data.length<this.limit||!s)&&(this.finished=!0)}}}},o=r,l=s(1001),c=(0,l.Z)(o,n,a,!1,null,"fdc2f564",null),h=c.exports},76711:function(t,e,s){function n(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}s.d(e,{Ef:function(){return l},Y_:function(){return h},e9:function(){return n},fS:function(){return o},i_:function(){return i},o1:function(){return r},og:function(){return c},rm:function(){return a}});const a=(t,e)=>{let s=new Date(Date.parse(t)),n=new Date(Date.parse(e));return s>n},i=(t,e,s)=>{switch(e){case"H":case"h":if("H"===s||"h"===s)return t;if("M"===s||"m"===s)return 60*t;if("S"===s||"s"===s)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===s||"h"===s)return t/60;if("M"===s||"m"===s)return t;if("S"===s||"s"===s)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===s||"h"===s)return t/60/60;if("M"===s||"m"===s)return t/60;if("S"===s||"s"===s)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},r=(t,e,s="name")=>{const n=[];return t.forEach((t=>{const a=t[s].indexOf(e);a>-1&&n.push(t)})),n},o=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),l=t=>{const e=[];for(const s in t)e.push(t[s]);return e.reverse()},c=(t,e)=>{console.log("importType :>> ",t);let s="";return"default"!==t&&"a"!==t||(s="fj"),"gt"===t&&(s="gt"),s===e},h=t=>{switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}},28638:function(t,e,s){t.exports=s.p+"img/introduction_platform_bg.fe089f1a.png"}}]);
//# sourceMappingURL=5.9f684e98.js.map