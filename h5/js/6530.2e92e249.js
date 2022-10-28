"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6530],{86530:function(i,e,t){t.r(e),t.d(e,{default:function(){return c}});var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"active-dynamic-container"},[t("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:i.onSearch,clear:i.onClear},model:{value:i.keyword,callback:function(e){i.keyword=e},expression:"keyword"}}),t("van-tabs",{attrs:{animated:""},on:{change:i.changeTabs},model:{value:i.activeTab,callback:function(e){i.activeTab=e},expression:"activeTab"}},[t("van-tab",{attrs:{title:"全部"}},[t("van-list",{staticClass:"list-style",attrs:{finished:i.finishedDynamic,"finished-text":"没有更多了"},on:{load:i.onLoadDynamic},model:{value:i.loadingDynamic,callback:function(e){i.loadingDynamic=e},expression:"loadingDynamic"}},i._l(i.activeDynamicList,(function(e){return t("div",{key:e.id,on:{click:function(t){return i.goToDetail(e)}}},[t("ActiveRow",{staticClass:"active-row-style",attrs:{data:e}})],1)})),0)],1),t("van-tab",{attrs:{title:"已备案"}},[t("van-list",{staticClass:"list-style",attrs:{finished:i.finishedCertain,"finished-text":"没有更多了"},on:{load:i.onLoadCertain},model:{value:i.loadingCertain,callback:function(e){i.loadingCertain=e},expression:"loadingCertain"}},i._l(i.listBeforeCertainTime,(function(e){return t("div",{key:e.id,on:{click:function(t){return i.goToDetail(e)}}},[t("ActiveRow",{staticClass:"active-row-style",attrs:{data:e}})],1)})),0)],1),t("van-tab",{attrs:{title:"已提交"}},[t("van-list",{staticClass:"list-style",attrs:{finished:i.finishedPeriod,"finished-text":"没有更多了"},on:{load:i.onLoadPeriod},model:{value:i.loadingPeriod,callback:function(e){i.loadingPeriod=e},expression:"loadingPeriod"}},i._l(i.listAfterCertainPeriodTime,(function(e){return t("div",{key:e.id,on:{click:function(t){return i.goToDetail(e)}}},[t("ActiveRow",{staticClass:"active-row-style",attrs:{data:e}})],1)})),0)],1)],1)],1)},s=[],n={components:{ActiveRow:()=>t.e(6177).then(t.bind(t,16177))},data(){return{keyword:"",activeTab:null,loadingDynamic:!1,finishedDynamic:!1,loadingCertain:!1,finishedCertain:!1,loadingPeriod:!1,finishedPeriod:!1,pageDynamic:{limit:10,pageNo:1},pageCertain:{limit:10,pageNo:1},pagePeriod:{limit:10,pageNo:1},aid:null,activeDynamicList:[],listBeforeCertainTime:[],listAfterCertainPeriodTime:[],type:"association"}},async created(){this.aid=this.$store.getters.associationInfo.id,this.initListData()},methods:{async onLoadDynamic(){const i=await this.listLectureAPI(this.aid,this.pageDynamic.pageNo,this.pageDynamic.limit,this.keyword),e=i.data;if(e.length<=0)this.finishedDynamic=!0;else{for(const i of e)this.activeDynamicList.push(i);this.pageDynamic.pageNo+=1,this.loadingDynamic=!1,this.pageDynamic.pageNo>=i.last_page&&(this.finishedDynamic=!0)}},async onLoadCertain(){const i=await this.listBeforeCertainTimeAPI(this.aid,this.pageCertain.pageNo,this.pageCertain.limit,this.$dateFormat(new Date,"yyyy-mm-dd")),e=i.data;if(!e.length>0)this.finishedCertain=!0;else{for(const i of e)this.listBeforeCertainTime.push(i);this.pageCertain.pageNo+=1,this.loadingCertain=!1,this.pageCertain.pageNo>=i.last_page&&(this.finishedCertain=!0)}},async onLoadPeriod(){const i=await this.listAfterCertainPeriodTimeAPI(this.aid,this.pagePeriod.pageNo,this.pagePeriod.limit,this.$dateFormat(new Date,"yyyy-mm-dd")),e=i.data;if(console.log("list :>> ",e),e.length<=0)this.finishedPeriod=!0;else{for(const i of e)this.listAfterCertainPeriodTime.push(i);this.pagePeriod.pageNo+=1,this.loadingPeriod=!1,this.pagePeriod.pageNo>=i.last_page&&(this.finishedPeriod=!0)}},initListData(){},changeTabs(i){switch(console.log("params :>> ",i),i){case 0:break;case 1:break;case 2:break;default:console.log("Error :>> ","changeTabs参数异常");break}},async listLectureAPI(i,e,t,a){console.log("this.keyword :>> ",this.keyword);const s={title:this.keyword,aid:i,page:e,limit:t,start_date:a,type:this.type},n=await this.$request("common.lectureInfoSearch",s);return console.log("讲座模块-获取列表(活动列表)API_res :>> ",n),n},async listBeforeCertainTimeAPI(i,e,t,a){const s={title:this.keyword,aid:i,page:e,limit:t,start_date:a,type:this.type},n=await this.$request("lecture.listBeforeCertainTime",s);return console.log("讲座模块-某个时间段前的列表(活动列表)API_res :>> ",n),n},async listAfterCertainPeriodTimeAPI(i,e,t,a){const s={title:this.keyword,aid:i,page:e,limit:t,start_date:a,type:this.type},n=await this.$request("lecture.listAfterCertainPeriodTime",s);return console.log("讲座模块-某个时间段后的列表(活动列表)API_res :>> ",n),n},goToDetail(i){console.log("param :>> ",i),this.$router.push({path:"/activeDynamicDetails",query:{id:i.id}})},initLoadConfig(){this.activeDynamicList=[],this.listBeforeCertainTime=[],this.listAfterCertainPeriodTime=[],this.pageDynamic.pageNo=1,this.pageCertain.pageNo=1,this.pagePeriod.pageNo=1,this.loadingDynamic=!0,this.loadingCertain=!0,this.loadingPeriod=!0,this.finishedDynamic=!1,this.finishedCertain=!1,this.finishedPeriod=!1},onSearch(){this.initLoadConfig(),this.onLoadDynamic()},onClear(){console.log("onClear :>> "),this.initLoadConfig(),this.onLoadDynamic()}}},o=n,r=t(1001),l=(0,r.Z)(o,a,s,!1,null,"7423be88",null),c=l.exports}}]);
//# sourceMappingURL=6530.2e92e249.js.map