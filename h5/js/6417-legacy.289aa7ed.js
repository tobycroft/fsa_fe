"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6417],{56417:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lecturer-management-container"},[n("header",[n("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),n("main",[n("p",{staticClass:"main-talker-box-label"},[e._v("全部主讲人("+e._s(e.total)+")")]),n("van-list",{staticClass:"main-talker-list",attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.mainTalkerList,(function(t,r){return n("li",{key:r,staticClass:"main-talker-item"},[n("MainTalker",{attrs:{avatarUrl:e.handleStrEmpty(t.img),userName:e.handleStrEmpty(t.name),patrolDistricts:t.area_count,activitySession:t.host_time,participation:t.sum_visitor,tagName:t.member_tag_name,showMore:!0},on:{update:function(n){return e.onUpdateMainTalker(t)},delete:function(n){return e.onDeleteMainTalker(t.id)}}})],1)})),0)],1)])},a=[],i=n(62032),o=n(16198),s=(n(35666),n(41539),n(78783),n(33948),n(76711),{components:{MainTalker:function(){return n.e(5080).then(n.bind(n,85080))}},data:function(){return{keyword:"",currentTradeUnionID:null,mainTalkerList:[],iid:null,aid:null,limit:10,page:1,total:0,loading:!1,finished:!1,last_page:0}},created:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMemberMe();case 2:e.currentTradeUnionID=e.$store.getters.associationInfo.id;case 3:case"end":return t.stop()}}),t)})))()},methods:{onLoad:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.mentorListAPI(e.currentTradeUnionID,e.limit,e.page,e.keyword);case 2:n=t.sent,e.total=n.total,e.last_page=n.last_page,r=(0,i.Z)(n.data);try{for(r.s();!(a=r.n()).done;)o=a.value,e.mainTalkerList.push(o)}catch(s){r.e(s)}finally{r.f()}e.loading=!1,e.page>=e.last_page&&(e.finished=!0),e.page+=1;case 10:case"end":return t.stop()}}),t)})))()},getMemberMe:function(){this.aid=this.$store.getters.associationInfo.id},onUpdateMainTalker:function(e){console.log("MainTalker修改:>>",e),this.$router.push({path:"/speakerInformationChanges",query:{iid:e.id,aid:this.aid}})},onDeleteMainTalker:function(e){var t=this;console.log("MainTalker删除:>>"),this.$dialog.confirm({title:"删除操作",message:"您将删除该主讲人信息，是否继续？"}).then((function(){console.log("确认删除 :>>"),t.instructorAssociationDelAPI(e,t.aid)})).catch((function(){console.log("取消删除 :>>")}))},handleStrEmpty:function(e){return e||""},mentorListAPI:function(e,t,n,r){var a=this;return(0,o.Z)(regeneratorRuntime.mark((function i(){var o,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o={aid:e,limit:t,page:n,name:r},i.next=3,a.$request("instructor.instructorInfoSearch",o);case 3:return s=i.sent,console.log("导师列表API_res :>> ",s),i.abrupt("return",s);case 6:case"end":return i.stop()}}),i)})))()},instructorAssociationDelAPI:function(e,t){var n=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={iid:e,aid:t},r.next=3,n.$request("instructor.instructorAssociationDel",a);case 3:i=r.sent,console.log("工会-讲师-删除API_res :>> ",i),n.mentorListAPI(n.currentTradeUnionID);case 6:case"end":return r.stop()}}),r)})))()},onSearch:function(){this.page=1,this.mainTalkerList=[],this.onLoad()},onClear:function(){console.log("onClear :>> "),this.page=1,this.mainTalkerList=[],this.keyword="",this.onLoad()}}}),u=s,c=n(1001),l=(0,c.Z)(u,r,a,!1,null,"3b4f9bb2",null),f=l.exports},76711:function(e,t,n){n.d(t,{Ef:function(){return u},Y_:function(){return l},e9:function(){return r},fS:function(){return s},i_:function(){return i},o1:function(){return o},og:function(){return c},rm:function(){return a}});n(41539),n(54747),n(74916),n(15306);function r(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var a=function(e,t){var n=new Date(Date.parse(e)),r=new Date(Date.parse(t));return n>r},i=function(e,t,n){switch(t){case"H":case"h":if("H"===n||"h"===n)return e;if("M"===n||"m"===n)return 60*e;if("S"===n||"s"===n)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return e/60;if("M"===n||"m"===n)return e;if("S"===n||"s"===n)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return e/60/60;if("M"===n||"m"===n)return e/60;if("S"===n||"s"===n)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return e.forEach((function(e){var a=e[n].indexOf(t);a>-1&&r.push(e)})),r},s=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},u=function(e){var t=[];for(var n in e)t.push(e[n]);return t.reverse()},c=function(e,t){console.log("importType :>> ",e);var n="";return"default"!==e&&"a"!==e||(n="fj"),"gt"===e&&(n="gt"),n===t},l=function(e){switch(e){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=6417-legacy.289aa7ed.js.map