"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1655],{11655:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"active-dynamic-container"},[i("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("van-tabs",{attrs:{animated:""},on:{change:e.changeTabs},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("van-tab",{attrs:{title:"全部"}},[i("ul",{staticClass:"list-style"},e._l(e.activeDynamicList,(function(t){return i("li",{key:t.id,on:{click:function(i){return e.goToDetail(t)}}},[i("ActiveRow",{staticClass:"active-row-style",attrs:{data:t}})],1)})),0)]),i("van-tab",{attrs:{title:"已备案"}},[i("ul",{staticClass:"list-style"},e._l(e.listBeforeCertainTime,(function(t){return i("li",{key:t.id,on:{click:function(i){return e.goToDetail(t)}}},[i("ActiveRow",{staticClass:"active-row-style",attrs:{data:t}})],1)})),0),i("div",{staticClass:"list-style"})]),i("van-tab",{attrs:{title:"已提交"}},[i("ul",{staticClass:"list-style"},e._l(e.listAfterCertainPeriodTime,(function(t){return i("li",{key:t.id,on:{click:function(i){return e.goToDetail(t)}}},[i("ActiveRow",{staticClass:"active-row-style",attrs:{data:t}})],1)})),0)])],1)],1)},a=[],n=i(16198),s=(i(35666),i(41539),i(78783),i(33948),i(76711)),o={components:{ActiveRow:function(){return i.e(6177).then(i.bind(i,16177))}},data:function(){return{keyword:"",activeTab:null,page:{limit:999999999,pageNo:1},aid:null,activeDynamicList:[],listBeforeCertainTime:[],listAfterCertainPeriodTime:[]}},created:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.aid=e.$store.getters.associationInfoCurrent.id,e.initListData();case 2:case"end":return t.stop()}}),t)})))()},methods:{initListData:function(){this.listLectureAPI(this.aid,this.page.pageNo,this.page.limit),this.listBeforeCertainTimeAPI(this.aid,this.page.pageNo,this.page.limit,this.$dateFormat(new Date,"yyyy-mm-dd")),this.listAfterCertainPeriodTimeAPI(this.aid,this.page.pageNo,this.page.limit,this.$dateFormat(new Date,"yyyy-mm-dd"))},changeTabs:function(e){switch(console.log("params :>> ",e),e){case 0:this.listLectureAPI(this.aid,this.page.pageNo,this.page.limit);break;case 1:this.listBeforeCertainTimeAPI(this.aid,this.page.pageNo,this.page.limit,this.$dateFormat(new Date,"yyyy-mm-dd"));break;case 2:this.listAfterCertainPeriodTimeAPI(this.aid,this.page.pageNo,this.page.limit,this.$dateFormat(new Date,"yyyy-mm-dd"));break;default:console.log("Error :>> ","changeTabs参数异常");break}},listLectureAPI:function(e,t,i,r){var a=this;return(0,n.Z)(regeneratorRuntime.mark((function n(){var s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={aid:e,page:t,limit:i,start_date:r},n.next=3,a.$request("lecture.listLecture",s);case 3:o=n.sent,console.log("讲座模块-获取列表(活动列表)API_res :>> ",o),a.activeDynamicList=o;case 6:case"end":return n.stop()}}),n)})))()},listBeforeCertainTimeAPI:function(e,t,i,r){var a=this;return(0,n.Z)(regeneratorRuntime.mark((function n(){var s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={aid:e,page:t,limit:i,start_date:r},n.next=3,a.$request("lecture.listBeforeCertainTime",s);case 3:o=n.sent,console.log("讲座模块-某个时间段前的列表(活动列表)API_res :>> ",o),a.listBeforeCertainTime=o;case 6:case"end":return n.stop()}}),n)})))()},listAfterCertainPeriodTimeAPI:function(e,t,i,r){var a=this;return(0,n.Z)(regeneratorRuntime.mark((function n(){var s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={aid:e,page:t,limit:i,start_date:r},n.next=3,a.$request("lecture.listAfterCertainPeriodTime",s);case 3:o=n.sent,console.log("讲座模块-某个时间段后的列表(活动列表)API_res :>> ",o),a.listAfterCertainPeriodTime=o;case 6:case"end":return n.stop()}}),n)})))()},goToDetail:function(e){console.log("param :>> ",e),this.$router.push({path:"/activeDynamicDetails",query:{id:e.id}})},onSearch:function(){this.activeDynamicList=(0,s.o1)(this.activeDynamicList,this.keyword,"title"),this.listBeforeCertainTime=(0,s.o1)(this.listBeforeCertainTime,this.keyword,"title"),this.listAfterCertainPeriodTime=(0,s.o1)(this.listAfterCertainPeriodTime,this.keyword,"title"),""===this.keyword&&this.initListData()},onClear:function(){console.log("onClear :>> "),this.initListData()}}},c=o,l=i(1001),u=(0,l.Z)(c,r,a,!1,null,"364232a2",null),h=u.exports},76711:function(e,t,i){i.d(t,{Ef:function(){return c},e9:function(){return r},fS:function(){return o},i_:function(){return n},o1:function(){return s},rm:function(){return a}});i(41539),i(54747),i(74916),i(15306);function r(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var a=function(e,t){var i=new Date(Date.parse(e)),r=new Date(Date.parse(t));return i>r},n=function(e,t,i){switch(t){case"H":case"h":if("H"===i||"h"===i)return e;if("M"===i||"m"===i)return 60*e;if("S"===i||"s"===i)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===i||"h"===i)return e/60;if("M"===i||"m"===i)return e;if("S"===i||"s"===i)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===i||"h"===i)return e/60/60;if("M"===i||"m"===i)return e/60;if("S"===i||"s"===i)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},s=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return e.forEach((function(e){var a=e[i].indexOf(t);a>-1&&r.push(e)})),r},o=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(e){var t=[];for(var i in e)t.push(e[i]);return t.reverse()}}}]);
//# sourceMappingURL=1655-legacy.141de997.js.map