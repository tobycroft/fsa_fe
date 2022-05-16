"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8910],{28910:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-show-container"},[s("van-swipe",{ref:"swipe",attrs:{"show-indicators":!1,immediate:!1},on:{change:t.changeSwipe}},[s("van-swipe-item",[s("TopList",{staticClass:"card-row-style",attrs:{title:"近期宣讲区域列表",list:t.recentPreachAreaListCmp,showSort:!1},on:{click:t.goToPreachingArea}})],1),s("van-swipe-item",[s("TopList",{staticClass:"card-row-style",attrs:{title:"近期承办单位列表",list:t.topListUndertakeCmp,showSort:!1},on:{click:t.goToRecentUndertakingUnit}})],1),s("van-swipe-item",[s("TableList",{staticClass:"card-row-style",attrs:{title:"近期宣讲详情",columns:t.cloumnListRecentAboutDetails,list:t.preachListRecentAboutDetailsCmp,showSort:!1},on:{click:t.goToRecentAboutDetails}})],1),s("van-swipe-item",[s("TopList",{attrs:{title:"宣讲区域覆盖人数排名",list:t.topListCoverCmp},on:{click:t.goToPreachRegionalCoverageNumberRank}})],1),s("van-swipe-item",[s("TableList",{staticClass:"card-row-style",attrs:{title:"授课老师宣讲数据排名",columns:t.cloumnListPreach,list:t.instructorListCmp},on:{click:t.goToTeacherSpeakingRank}})],1),s("van-swipe-item",[s("ColumnChart",{staticClass:"card-row-style",attrs:{title:"新增宣讲覆盖人数",list:t.dateCoverListCmp},on:{click:t.goToAddPreachCovers}})],1)],1)],1)},r=[],a={components:{TabsNum:()=>s.e(1290).then(s.bind(s,71290)),TopList:()=>s.e(6185).then(s.bind(s,16185)),ColumnChart:()=>s.e(2197).then(s.bind(s,92197)),TableList:()=>s.e(5646).then(s.bind(s,25646))},props:{active:{type:Number,default:0,required:!0}},computed:{recentPreachAreaListCmp(){const t=[];return this.recentList.forEach((e=>{t.push({label:this.handleAreaText(e),value:this.handleDateFormat(e.date)})})),t},topListUndertakeCmp(){const t=[];return this.recentList.forEach((e=>{t.push({label:e.host_info.name,value:this.handleDateFormat(e.date)})})),console.log("近期承办单位列表arr :>> ",t),t},preachListRecentAboutDetailsCmp(){const t=[];return this.recentList.forEach((e=>{t.push({...e.instructor_info,title:e.title,visitor:`${e.visitor}人`})})),console.log("近期宣讲详情arr :>> ",t),t},topListCoverCmp(){const t=[];return this.coverList.forEach((e=>{console.log("item :>> ",e);for(const s of t)if(s.name===e.city)return void(s.value+=e.visitor);t.push({label:this.handleAreaText(e),value:`${e.visitor}人`})})),console.log("排行榜:覆盖arr :>> ",t),t},instructorListCmp(){const t=[];for(const e in this.instructorList)t.push({rankingName:`第${parseInt(e)+1}名`,name:this.instructorList[e].instructor_info.name,visitorStr:`${this.instructorList[e].visitor}人`,roundStr:`${this.instructorList[e].host_time}场`});return t},dateCoverListCmp(){const t=[];return this.dateCoverList.forEach((e=>{t.push({label:this.$dateFormat(e.date,"m/dd"),num:e.visitor}),console.log("arr :>> ",t)})),t}},data(){return{cloumnListPreach:[{label:"姓名",keyName:"name"},{label:"听课人数",keyName:"visitorStr"},{label:"场次",keyName:"roundStr"}],topListUndertake:[{label:"福州市台江区上海街道社区",value:"2022年2月25日"},{label:"福州市台江区上海街道社区",value:"2022年2月25日"},{label:"福州市台江区上海街道社区",value:"2022年2月25日"},{label:"福州市台江区上海街道社区",value:"2022年2月25日"}],cloumnListRecentAboutDetails:[{label:"宣讲主题",keyName:"title"},{label:"主讲人",keyName:"name"},{label:"听课人数",keyName:"visitor"}],recentList:[],coverList:[],instructorList:[],dateCoverList:[]}},created(){this.recentListAPI(),this.coverListAPI(),this.instructorListAPI(),this.dateCoverListAPI()},methods:{changeSwipe(t){this.$emit("change",t)},activeSwipe(t){this.$refs.swipe.swipeTo(t)},async recentListAPI(){const t=await this.$request("lecture.recentList");console.log("近期列表API_res :>> ",t),this.recentList=t},async coverListAPI(){const t=await this.$request("lecture.coverList");console.log("覆盖列表API_res :>> ",t),this.coverList=t},async instructorListAPI(){const t=await this.$request("lecture.instructorList");console.log("授课老师排名列表API_res :>> ",t),this.instructorList=t},async dateCoverListAPI(){const t={type:"none"},e=await this.$request("lecture.dateCoverList",t);console.log("日期覆盖列表API_res :>> ",e),this.dateCoverList=e},handleDateFormat(t){return this.$dateFormat(t,"yyyy年mm月dd日")},handleAreaText(t){return`${t.province}${t.city}${t.district}${t.street}`},goToPreachingArea(){this.$router.push({path:"/preachingArea"})},goToRecentUndertakingUnit(){this.$router.push({path:"/recentUndertakingUnit"})},goToRecentAboutDetails(){this.$router.push({path:"/recentAboutDetails"})},goToPreachRegionalCoverageNumberRank(){this.$router.push({path:"/preachRegionalCoverageNumberRank"})},goToTeacherSpeakingRank(){this.$router.push({path:"/teacherSpeakingRank"})},goToAddPreachCovers(){this.$router.push({path:"/addPreachCovers"})}}},o=a,n=s(1001),c=(0,n.Z)(o,i,r,!1,null,"6687b712",null),l=c.exports}}]);
//# sourceMappingURL=8910.b677cf9c.js.map