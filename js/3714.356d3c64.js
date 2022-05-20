"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3714],{63714:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lecturer-management-container"},[n("header",[n("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),n("main",[n("p",{staticClass:"main-talker-box-label"},[e._v(" 全部主讲人("+e._s(e.mainTalkerList.length)+") ")]),n("ul",{staticClass:"main-talker-list"},e._l(e.mainTalkerList,(function(t,r){return n("li",{key:r,staticClass:"main-talker-item"},[n("MainTalker",{attrs:{avatarUrl:e.handleStrEmpty(t.img),userName:e.handleStrEmpty(t.name),patrolDistricts:t.area_count,activitySession:t.lecture_count,participation:t.sum_visitor,showMore:!0},on:{update:function(n){return e.onUpdateMainTalker(t)},delete:function(n){return e.onDeleteMainTalker(t.id)}}})],1)})),0)])])},a=[],i=n(76711),s={components:{MainTalker:()=>n.e(1297).then(n.bind(n,21297))},data(){return{keyword:"",currentTradeUnionID:null,mainTalkerList:[],iid:null,aid:null}},async created(){await this.getMemberMe(),await this.getsIDTheUnionAPI(),this.mentorListAPI(this.currentTradeUnionID)},methods:{getMemberMe(){this.aid=this.$store.getters.accountIdInfo.aid},onUpdateMainTalker(e){console.log("MainTalker修改:>>",e),this.$router.push({path:"/speakerInformationChanges",query:{iid:e.id,aid:this.aid}})},onDeleteMainTalker(e){console.log("MainTalker删除:>>"),this.$dialog.confirm({title:"删除操作",message:"您将删除该主讲人信息，是否继续？"}).then((()=>{console.log("确认删除 :>>"),this.instructorAssociationDelAPI(e,this.aid)})).catch((()=>{console.log("取消删除 :>>")}))},handleStrEmpty(e){return e||""},async getsIDTheUnionAPI(){const e=await this.$request("association.getsIDTheUnion");console.log("获取当前工会的ID_API_res :>> ",e),this.currentTradeUnionID=e},async mentorListAPI(e){const t={aid:e},n=await this.$request("instructor.mentorList",t);console.log("导师列表API_res :>> ",n),this.mainTalkerList=n},async instructorAssociationDelAPI(e,t){const n={iid:e,aid:t},r=await this.$request("instructor.instructorAssociationDel",n);console.log("工会-讲师-删除API_res :>> ",r),this.mentorListAPI(this.currentTradeUnionID)},onSearch(){this.mainTalkerList=(0,i.o1)(this.mainTalkerList,this.keyword)},onClear(){console.log("onClear :>> "),this.mentorListAPI(this.currentTradeUnionID)}}},o=s,l=n(1001),c=(0,l.Z)(o,r,a,!1,null,"7c738d88",null),u=c.exports},76711:function(e,t,n){function r(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}n.d(t,{e9:function(){return r},i_:function(){return i},o1:function(){return s},rm:function(){return a}});const a=(e,t)=>{let n=new Date(Date.parse(e)),r=new Date(Date.parse(t));return n>r},i=(e,t,n)=>{switch(t){case"H":case"h":if("H"===n||"h"===n)return e;if("M"===n||"m"===n)return 60*e;if("S"===n||"s"===n)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return e/60;if("M"===n||"m"===n)return e;if("S"===n||"s"===n)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return e/60/60;if("M"===n||"m"===n)return e/60;if("S"===n||"s"===n)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},s=(e,t,n="name")=>{const r=[];return e.forEach((e=>{const a=e[n].indexOf(t);a>-1&&r.push(e)})),r}}}]);
//# sourceMappingURL=3714.356d3c64.js.map