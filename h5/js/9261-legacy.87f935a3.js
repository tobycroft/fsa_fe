"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9261],{19261:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"active-dynamic-container",class:{"hide-tab":!this.uid}},[i("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("van-tabs",{attrs:{animated:""},on:{change:e.onSearch},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("van-tab",{attrs:{title:"全部"}},[i("van-list",{staticClass:"list-style",attrs:{finished:e.finishedDynamic,"finished-text":"没有更多了"},on:{load:e.onLoadDynamic},model:{value:e.loadingDynamic,callback:function(t){e.loadingDynamic=t},expression:"loadingDynamic"}},e._l(e.activeDynamicList,(function(t,n){return i("div",{key:n,on:{click:function(i){return e.goToDetail(t)}}},[i("ActiveRow",{staticClass:"active-row-style",attrs:{data:t}})],1)})),0)],1),i("van-tab",{attrs:{title:"已备案"}},[i("van-list",{staticClass:"list-style",attrs:{finished:e.finishedCertain,"finished-text":"没有更多了"},on:{load:e.onLoadCertain},model:{value:e.loadingCertain,callback:function(t){e.loadingCertain=t},expression:"loadingCertain"}},e._l(e.listBeforeCertainTime,(function(t,n){return i("div",{key:n,on:{click:function(i){return e.goToDetail(t)}}},[i("ActiveRow",{staticClass:"active-row-style",attrs:{data:t}})],1)})),0)],1),i("van-tab",{attrs:{title:"未备案"}},[i("van-list",{staticClass:"list-style",attrs:{finished:e.finishedPeriod,"finished-text":"没有更多了"},on:{load:e.onLoadPeriod},model:{value:e.loadingPeriod,callback:function(t){e.loadingPeriod=t},expression:"loadingPeriod"}},e._l(e.listAfterCertainPeriodTime,(function(t,n){return i("div",{key:n,on:{click:function(i){return e.goToDetail(t)}}},[i("ActiveRow",{staticClass:"active-row-style",attrs:{data:t}})],1)})),0)],1)],1)],1)},a=[],r=i(66347),o=i(48534),s=(i(35666),i(41539),i(78783),i(33948),i(37662),{components:{ActiveRow:function(){return i.e(9876).then(i.bind(i,19876))}},data:function(){return{keyword:"",activeTab:null,loadingDynamic:!1,finishedDynamic:!1,loadingCertain:!1,finishedCertain:!1,loadingPeriod:!1,finishedPeriod:!1,pageDynamic:{limit:10,pageNo:1},pageCertain:{limit:10,pageNo:1},pagePeriod:{limit:10,pageNo:1},aid:null,activeDynamicList:[],listBeforeCertainTime:[],listAfterCertainPeriodTime:[],type:"association"}},computed:{uid:function(){return this.$store.getters.loginInfo.uid}},created:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.aid=e.$store.getters.associationInfo.id,e.initListData();case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){this.uid||(this.activeTab=1)},methods:{onLoadDynamic:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var i,n,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("common.lectureAssociationList",{aid:e.aid,page:e.pageDynamic.pageNo,limit:e.pageDynamic.limit,title:e.keyword});case 2:if(i=t.sent,n=i.data,!(n.length<=0)){t.next=7;break}return e.finishedDynamic=!0,t.abrupt("return");case 7:1==e.pageDynamic.pageNo&&(e.activeDynamicList=[]),a=(0,r.Z)(n);try{for(a.s();!(o=a.n()).done;)s=o.value,e.activeDynamicList.push(s)}catch(c){a.e(c)}finally{a.f()}e.pageDynamic.pageNo+=1,e.loadingDynamic=!1,e.pageDynamic.pageNo>=i.last_page&&(e.finishedDynamic=!0);case 13:case"end":return t.stop()}}),t)})))()},onLoadCertain:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var i,n,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("common.lectureAssociationList",{aid:e.aid,page:e.pageCertain.pageNo,limit:e.pageCertain.limit,status:1,title:e.keyword});case 2:if(i=t.sent,n=i.data,!(!n.length>0)){t.next=7;break}return e.finishedCertain=!0,t.abrupt("return");case 7:1==e.pageCertain.pageNo&&(e.listBeforeCertainTime=[]),a=(0,r.Z)(n);try{for(a.s();!(o=a.n()).done;)s=o.value,e.listBeforeCertainTime.push(s)}catch(c){a.e(c)}finally{a.f()}e.pageCertain.pageNo+=1,e.loadingCertain=!1,e.pageCertain.pageNo>=i.last_page&&(e.finishedCertain=!0);case 13:case"end":return t.stop()}}),t)})))()},onLoadPeriod:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var i,n,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("common.lectureAssociationList",{aid:e.aid,page:e.pagePeriod.pageNo,limit:e.pagePeriod.limit,status:0,title:e.keyword});case 2:if(i=t.sent,n=i.data,!(n.length<=0)){t.next=7;break}return e.finishedPeriod=!0,t.abrupt("return");case 7:1==e.pagePeriod.pageNo&&(e.listAfterCertainPeriodTime=[]),a=(0,r.Z)(n);try{for(a.s();!(o=a.n()).done;)s=o.value,e.listAfterCertainPeriodTime.push(s)}catch(c){a.e(c)}finally{a.f()}e.pagePeriod.pageNo+=1,e.loadingPeriod=!1,e.pagePeriod.pageNo>=i.last_page&&(e.finishedPeriod=!0);case 13:case"end":return t.stop()}}),t)})))()},initListData:function(){},changeTabs:function(e){switch(console.log("params :>> ",e),e){case 0:break;case 1:break;case 2:break;default:console.log("Error :>> ","changeTabs参数异常");break}},listLectureAPI:function(e,t,i,n){var a=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("this.keyword :>> ",a.keyword),o={title:a.keyword,aid:e,page:t,limit:i,start_date:n,type:a.type},r.next=4,a.$request("common.lectureInfoSearch",o);case 4:return s=r.sent,console.log("讲座模块-获取列表(活动列表)API_res :>> ",s),r.abrupt("return",s);case 7:case"end":return r.stop()}}),r)})))()},listBeforeCertainTimeAPI:function(e,t,i,n){var a=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={title:a.keyword,aid:e,page:t,limit:i,start_date:n,type:a.type},r.next=3,a.$request("lecture.listBeforeCertainTime",o);case 3:return s=r.sent,console.log("讲座模块-某个时间段前的列表(活动列表)API_res :>> ",s),r.abrupt("return",s);case 6:case"end":return r.stop()}}),r)})))()},listAfterCertainPeriodTimeAPI:function(e,t,i,n){var a=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={title:a.keyword,aid:e,page:t,limit:i,start_date:n,type:a.type},r.next=3,a.$request("lecture.listAfterCertainPeriodTime",o);case 3:return s=r.sent,console.log("讲座模块-某个时间段后的列表(活动列表)API_res :>> ",s),r.abrupt("return",s);case 6:case"end":return r.stop()}}),r)})))()},goToDetail:function(e){},initLoadConfig:function(){this.activeDynamicList=[],this.listBeforeCertainTime=[],this.listAfterCertainPeriodTime=[],this.pageDynamic.pageNo=1,this.pageCertain.pageNo=1,this.pagePeriod.pageNo=1,this.loadingDynamic=!0,this.loadingCertain=!0,this.loadingPeriod=!0,this.finishedDynamic=!1,this.finishedCertain=!1,this.finishedPeriod=!1},onSearch:function(){this.initLoadConfig(),1===this.activeTab?this.onLoadCertain():2===this.activeTab?this.onLoadPeriod():this.onLoadDynamic()},onClear:function(){console.log("onClear :>> "),this.initLoadConfig(),1===this.activeTab?this.onLoadCertain():2===this.activeTab?this.onLoadPeriod():this.onLoadDynamic()}}}),c=s,u=i(43736),l=(0,u.Z)(c,n,a,!1,null,"32015aac",null),d=l.exports},37662:function(e,t,i){i.d(t,{Ef:function(){return s},Y_:function(){return u},e9:function(){return n},fS:function(){return o},i_:function(){return a},o1:function(){return r},og:function(){return c}});i(41539),i(54747),i(74916),i(15306);function n(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var a=function(e,t,i){switch(t){case"H":case"h":if("H"===i||"h"===i)return e;if("M"===i||"m"===i)return 60*e;if("S"===i||"s"===i)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===i||"h"===i)return e/60;if("M"===i||"m"===i)return e;if("S"===i||"s"===i)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===i||"h"===i)return e/60/60;if("M"===i||"m"===i)return e/60;if("S"===i||"s"===i)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},r=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=[];return e.forEach((function(e){var a=e[i].indexOf(t);a>-1&&n.push(e)})),n},o=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},s=function(e){var t=[];for(var i in e)t.push(e[i]);return t.reverse()},c=function(e,t){console.log("importType :>> ",e);var i="";return"default"!==e&&"a"!==e||(i="fj"),"gt"===e&&(i="gt"),i===t},u=function(e){switch(e){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=9261-legacy.87f935a3.js.map