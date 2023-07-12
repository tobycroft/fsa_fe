"use strict";(self["webpackChunkhome_research_screen"]=self["webpackChunkhome_research_screen"]||[]).push([[385],{3385:function(t,e,s){s.r(e),s.d(e,{default:function(){return n}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-container"},[s("el-scrollbar",{staticClass:"scrollbar-style",style:{height:"100vh"}},[s("div",{staticClass:"scrollbar-content-style"},[s("header",[s("div",{staticClass:"title-content-box"},[s("p",{staticClass:"title-level-one"},[t._v(t._s(t.associationInfo.name))]),s("p",{staticClass:"title-level-two"},[t._v("数智化管理平台")])])]),s("main",{staticClass:"flex align-start"},[s("div",[s("ul",{staticClass:"list-style"},[s("li",{staticClass:"list-item"},[s("ListCard",{attrs:{title:"近期宣讲区域列表",listData:t.recentPreachAreaListCmp,checkedList:t.preachingAreaCheckedList},on:{changeCheck:t.onPreachingAreaChangeCheck}},[s("TableList",{attrs:{columnsList:t.recentPreachAreaListColumns,listData:t.recentPreachAreaListCmp,overflow:""}})],1)],1),s("li",{staticClass:"list-item"},[s("ListCard",{attrs:{title:"近期承办单位列表"}},[s("TableList",{attrs:{columnsList:t.recentUndertakingUnitListColumns,listData:t.recentUndertakingUnitListCmp,overflow:""}})],1)],1),s("li",{staticClass:"list-item"},[s("ListCard",{attrs:{title:"近期宣讲详情"}},[s("TableList",{attrs:{columnsList:t.recentAboutDetailsColumns,listData:t.recentAboutDetailsCmp,overflow:""}})],1)],1)])]),s("div",{staticClass:"main-box"},[s("TitleCard",{staticClass:"title-card-style",attrs:{title:"宣讲覆盖人次："+t.coverTotalNumber+"人"}}),s("MapProjection",{attrs:{dataSource:t.mapProjection_DataSource}})],1),s("div",[s("ul",{staticClass:"list-style"},[s("li",{staticClass:"list-item"},[s("ListCard",{attrs:{title:"宣讲区域覆盖人次排名",checkedList:t.coverListCheckedList},on:{changeCheck:t.onCoverListChangeCheck}},[s("TableList",{attrs:{columnsList:t.coverListColumns,listData:t.coverListCmp,showHeader:!1,overflow:""}})],1)],1),s("li",{staticClass:"list-item"},[s("ListCard",{attrs:{title:"授课老师数据排名"}},[s("TableList",{attrs:{columnsList:t.instructorColumns,listData:t.instructorList,overflow:""}})],1)],1),s("li",{staticClass:"list-item"},[s("ListCard",{attrs:{title:"新增宣讲覆盖人次"}},[s("CoverPeopleTotal",{attrs:{dataSource:t.coverPeopleTotal_DataSource,xAxisData:t.coverPeopleTotal_xAxisData}})],1)],1)])])])])])],1)},a=[],r={components:{ListCard:()=>s.e(740).then(s.bind(s,5740)),TableList:()=>s.e(318).then(s.bind(s,9318)),TitleCard:()=>s.e(196).then(s.bind(s,8196)),CoverPeopleTotal:()=>s.e(354).then(s.bind(s,6354)),MapProjection:()=>s.e(476).then(s.bind(s,4476))},computed:{recentPreachAreaListCmp(){const t=[],e=this.preachingAreaCheckedList[0].checked,s=this.preachingAreaCheckedList[1].checked,i=this.preachingAreaCheckedList[2].checked,a=this.preachingAreaCheckedList[3].checked;for(const r of this.recentList)console.log("区域 :>> ",`${r.province}${r.city}${r.district}${r.street}`),t.push({areaName:`${e?r.province:""}${s?r.city:""}${i?r.district:""}${a?r.street:""}`,date:this.$dateFormat(r.start_date,"yyyy-mm-dd")});return t},recentUndertakingUnitListCmp(){const t=[];return this.recentList.forEach((e=>{t.push({...e.host_info,date:this.$dateFormat(e.start_date,"UTC:yyyy-mm-dd")})})),console.log("近期承办单位列表arr :>> ",t),t},recentAboutDetailsCmp(){const t=[];return this.recentList.forEach((e=>{t.push({name:this.getCaption(e.instructor_info.name),title:e.title,visitor:`${e.visitor}人`})})),console.log("近期宣讲详情arr :>> ",t),t},coverPeopleTotal_DataSource(){const t=[];return this.dateCoverList.forEach((e=>{t.push(e.sum_visitor)})),console.log("新增宣讲覆盖人次-数据arr :>> ",t),t},coverPeopleTotal_xAxisData(){const t=[];return this.dateCoverList.forEach((e=>{t.push(this.$dateFormat(e.g_date,"m/dd"))})),console.log("新增宣讲覆盖人次-X轴标题arr :>> ",t),t},mapProjection_DataSource(){return this.handleLevel(this.associationInfo.model_type)},coverListCmp(){const t=[],e=this.coverListCheckedList[0].checked,s=this.coverListCheckedList[1].checked,i=this.coverListCheckedList[2].checked;console.log("this.coverListCheckedList :>> ",this.coverListCheckedList);for(const a in this.coverList)t.push({areaName:`${e?this.coverList[a].city:""}${s?this.coverList[a].district:""}${i?this.coverList[a].street:""}`,rankingName:`第${parseInt(a)+1}名`,visitorStr:`${this.coverList[a].sum_visitor}人`});return console.log("arr :>> ",t),t}},data(){return{recentPreachAreaListColumns:[{label:"区域名称",value:"areaName",align:"left"},{label:"日期",value:"date",width:60}],recentUndertakingUnitListColumns:[{label:"单位名称",value:"name",align:"left"},{label:"日期",value:"date",width:60}],recentAboutDetailsColumns:[{label:"宣讲主题",value:"title",align:"left"},{label:"主讲人",value:"name",width:40},{label:"听课人次",value:"visitor",width:50,align:"right"}],coverListColumns:[{label:"名次",value:"rankingName",width:40},{label:"覆盖区域名称",value:"areaName",align:"center"},{label:"区域覆盖人次",value:"visitorStr",width:55,align:"right"}],instructorColumns:[{label:"名次",value:"rankingName"},{label:"姓名",value:"name"},{label:"听课人次",value:"visitorStr",width:48,align:"right"},{label:"场次",value:"roundStr",align:"right"}],recentList:[],coverList:[],instructorList:[],dateCoverList:[],dateCoverCityList:[],dateCoverDistrictList:[],dateCoverStreetList:[],coverTotalNumber:0,associationInfo:{},preachingAreaCheckedList:[{label:"省",value:"province",checked:!0},{label:"市",value:"city",checked:!0},{label:"区",value:"district",checked:!0},{label:"街道",value:"street",checked:!0}],coverListCheckedList:[{label:"市",value:"city",checked:!0},{label:"区",value:"district",checked:!0},{label:"街道",value:"street",checked:!0}]}},created(){this.preachingAreaCheckedList=this.$store.getters.preachingAreaCheckedList,this.coverListCheckedList=this.$store.getters.coverListCheckedList,this.$store.dispatch("association/associationInfoDomainAPI")},watch:{"$store.getters.associationInfo":function(t){this.associationInfo=t;const e=t.id;this.recentListAPI(e),this.instructorListAPI(e),this.dateCoverListAPI(e),this.coverListCityAPI(e),this.coverListDistrictAPI(e),this.coverListStreetAPI(e),this.coverTotalNumberAPI(e)}},mounted(){this.associationInfo=this.$store.getters.associationInfo},methods:{async recentListAPI(t){const e={aid:t},s=await this.$request("lecture.recentList",e);console.log("近期列表API_res :>> ",s),s.forEach((t=>{t.date=this.$dateFormat(t.date,"yyyy-mm-dd"),console.log("item.date :>> ",t.date)})),this.recentList=s},handleCoverList(t){console.log("覆盖列表API_res :>> ",t),this.coverList=t},async instructorListAPI(t){const e={aid:t},s=await this.$request("lecture.instructorList",e);for(const i in s)s[i].rankingName=`第${parseInt(i)+1}名`,s[i].name=this.getCaption(s[i].instructor_info.name),s[i].visitorStr=`${s[i].sum_visitor}人`,s[i].roundStr=`${s[i].host_time}场`;console.log("授课老师排名列表API_res :>> ",s),this.instructorList=s},async dateCoverListAPI(t){const e={type:"none",aid:t},s=await this.$request("lecture.dateCoverList",e);console.log("日期覆盖列表res :>> ",s),this.dateCoverList=s},async coverTotalNumberAPI(t){const e={aid:t},s=await this.$request("lecture.coverTotalNumber",e);console.log("覆盖总人次API_res :>> ",s),this.coverTotalNumber=s},async coverListCityAPI(t){const e={aid:t},s=await this.$request("lecture.coverListCity",e);console.log("res :>> ",s),this.dateCoverCityList=s},async coverListDistrictAPI(t){const e={aid:t},s=await this.$request("lecture.coverListDistrict",e);console.log("res :>> ",s),this.dateCoverDistrictList=s},async coverListStreetAPI(t){const e={aid:t},s=await this.$request("lecture.coverListStreet",e);console.log("res :>> ",s),this.dateCoverStreetList=s},handleLevel(t){const e=[];switch(t){case"province":this.handleCoverList(this.dateCoverCityList),this.dateCoverCityList.forEach((t=>{t.city&&""!==t.city&&e.push({name:t.city,value:t.sum_visitor})}));break;case"city":this.handleCoverList(this.dateCoverDistrictList),this.dateCoverDistrictList.forEach((t=>{t.district&&""!==t.district&&e.push({name:t.district,value:t.sum_visitor})}));break;case"district":this.handleCoverList(this.dateCoverStreetList),this.dateCoverStreetList.forEach((t=>{t.street&&""!==t.street&&e.push({name:t.street,value:t.sum_visitor})}));break;default:break}return console.log("地图-图表数据arr :>> ",e),e},onPreachingAreaChangeCheck(t,e){for(const s of this.preachingAreaCheckedList)s.value===e.value&&(s.checked=t);this.$store.commit("viewFilter/setPreachingAreaCheckedList",this.preachingAreaCheckedList)},onCoverListChangeCheck(t,e){for(const s of this.coverListCheckedList)s.value===e.value&&(s.checked=t);this.$store.commit("viewFilter/setCoverListCheckedList",this.coverListCheckedList)},getCaption(t){if(t){const e=t.lastIndexOf("--"),s=t.substring(e,t.length);return s}return""}}},o=r,c=s(1001),l=(0,c.Z)(o,i,a,!1,null,"51bf9c88",null),n=l.exports}}]);
//# sourceMappingURL=385.b5610044.js.map