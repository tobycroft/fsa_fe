(self["webpackChunkhome_research_screen"]=self["webpackChunkhome_research_screen"]||[]).push([[243],{5243:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-container"},[r("el-scrollbar",{staticClass:"scrollbar-style",style:{height:"100vh"}},[r("div",{staticClass:"scrollbar-content-style"},[r("header",[r("div",{staticClass:"title-content-box"},[r("p",{staticClass:"title-level-one"},[t._v(t._s(t.associationInfo.name))]),r("p",{staticClass:"title-level-two"},[t._v("数智化管理平台")])])]),r("main",{staticClass:"flex align-start"},[r("div",[r("ul",{staticClass:"list-style"},[r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"近期活动区域列表",listData:t.recentPreachAreaListCmp,checkedList:t.preachingAreaCheckedList},on:{changeCheck:t.onPreachingAreaChangeCheck}},[r("TableList",{attrs:{columnsList:t.recentPreachAreaListColumns,listData:t.recentPreachAreaListCmp,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"近期承办单位列表"}},[r("TableList",{attrs:{columnsList:t.recentUndertakingUnitListColumns,listData:t.recentUndertakingUnitListCmp,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"近期活动详情"}},[r("TableList",{attrs:{columnsList:t.recentAboutDetailsColumns,listData:t.recentAboutDetailsCmp,overflow:""}})],1)],1)])]),r("div",{staticClass:"main-box"},[r("TitleCard",{staticClass:"title-card-style",attrs:{title:"活动覆盖人次："+t.coverTotalNumber+"人"}}),r("MapProjection",{attrs:{dataSource:t.mapProjection_DataSource}})],1),r("div",[r("ul",{staticClass:"list-style"},[r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"活动区域覆盖人次排名",radioList:t.coverListCheckedList},on:{changeRadio:t.getCoverListCmp}},[r("TableList",{attrs:{columnsList:t.coverListColumns,listData:t.coverListCmp,showHeader:!1,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"授课老师数据排名"}},[r("TableList",{attrs:{columnsList:t.instructorColumns,listData:t.instructorList,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"新增活动覆盖人次"}},[r("CoverPeopleTotal",{attrs:{dataSource:t.coverPeopleTotal_DataSource,xAxisData:t.coverPeopleTotal_xAxisData}})],1)],1)])])])])])],1)},n=[],a=r(6198),s=(r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337),r(3796));function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r(2032),u=(r(5666),r(8783),r(3948),r(2222),r(1249),r(8309),{components:{ListCard:function(){return r.e(925).then(r.bind(r,2925))},TableList:function(){return r.e(318).then(r.bind(r,9318))},TitleCard:function(){return r.e(196).then(r.bind(r,8196))},CoverPeopleTotal:function(){return r.e(354).then(r.bind(r,6354))},MapProjection:function(){return r.e(476).then(r.bind(r,4476))}},computed:{recentPreachAreaListCmp:function(){var t,e=[],r=this.preachingAreaCheckedList[0].checked,i=this.preachingAreaCheckedList[1].checked,n=this.preachingAreaCheckedList[2].checked,a=this.preachingAreaCheckedList[3].checked,s=(0,l.Z)(this.recentList);try{for(s.s();!(t=s.n()).done;){var o=t.value;console.log("区域 :>> ","".concat(o.province).concat(o.city).concat(o.district).concat(o.street)),e.push({areaName:"".concat(r?o.province:"").concat(i?o.city:"").concat(n?o.district:"").concat(a?o.street:""),date:this.$dateFormat(o.start_date,"yyyy-mm-dd")})}}catch(c){s.e(c)}finally{s.f()}return e},recentUndertakingUnitListCmp:function(){var t=this,e=[];return this.recentList.forEach((function(r){e.push(c(c({},r.host_info),{},{date:t.$dateFormat(r.start_date,"UTC:yyyy-mm-dd")}))})),console.log("近期承办单位列表arr :>> ",e),e},recentAboutDetailsCmp:function(){var t=[];return this.recentList.forEach((function(e){t.push(c(c({},e.instructor_info),{},{title:e.title,visitor:"".concat(e.visitor,"人")}))})),console.log("近期活动详情arr :>> ",t),t},coverPeopleTotal_DataSource:function(){var t=[];return this.dateCoverList.forEach((function(e){t.push(e.sum_visitor)})),console.log("新增活动覆盖人次-数据arr :>> ",t),t},coverPeopleTotal_xAxisData:function(){var t=this,e=[];return this.dateCoverList.forEach((function(r){e.push(t.$dateFormat(r.g_date,"m/dd"))})),console.log("新增活动覆盖人次-X轴标题arr :>> ",e),e},mapProjection_DataSource:function(){return this.handleLevel(this.associationInfo.model_type)}},data:function(){return{coverListCmp:[],recentPreachAreaListColumns:[{label:"区域名称",value:"areaName",align:"left"},{label:"日期",value:"date",width:60}],recentUndertakingUnitListColumns:[{label:"单位名称",value:"name",align:"left"},{label:"日期",value:"date",width:60}],recentAboutDetailsColumns:[{label:"活动主题",value:"title",align:"left"},{label:"主讲人",value:"name",width:40},{label:"听课人次",value:"visitor",width:50,align:"right"}],coverListColumns:[{label:"名次",value:"rankingName",width:40},{label:"覆盖区域名称",value:"areaName",align:"center"},{label:"区域覆盖人次",value:"visitorStr",width:55,align:"right"}],instructorColumns:[{label:"名次",value:"rankingName"},{label:"姓名",value:"name"},{label:"听课人次",value:"visitorStr",width:48,align:"right"},{label:"场次",value:"roundStr",align:"right"}],recentList:[],coverList:[],instructorList:[],dateCoverList:[],dateCoverCityList:[],dateCoverDistrictList:[],dateCoverStreetList:[],coverTotalNumber:0,associationInfo:{},preachingAreaCheckedList:[{label:"省",value:"province",checked:!0},{label:"市",value:"city",checked:!0},{label:"区",value:"district",checked:!0},{label:"街道",value:"street",checked:!0}],coverListCheckedList:[{label:"市",value:"city",checked:!0},{label:"区",value:"district",checked:!1},{label:"街道",value:"street",checked:!1}]}},created:function(){this.preachingAreaCheckedList=this.$store.getters.preachingAreaCheckedList,this.coverListCheckedList=this.$store.getters.coverListCheckedList,this.$store.dispatch("association/associationInfoDomainAPI")},watch:{"$store.getters.associationInfo":function(t){this.associationInfo=t;var e=t.id;this.recentListAPI(e),this.instructorListAPI(e),this.dateCoverListAPI(e),this.coverListCityAPI(e),this.coverListDistrictAPI(e),this.coverListStreetAPI(e),this.coverTotalNumberAPI(e)}},mounted:function(){this.associationInfo=this.$store.getters.associationInfo,this.getCoverListCmp()},methods:{getCoverListCmp:function(){var t=arguments,e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:"city",r.next=3,e.$request("lecture.rankingPeople",{area:i});case 3:n=r.sent,e.coverListCmp=n.map((function(t,e){return{rankingName:"第".concat(e+1,"名"),areaName:t.Title,visitorStr:t.SumVisitor}}));case 5:case"end":return r.stop()}}),r)})))()},recentListAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("lecture.recentList",i);case 3:n=r.sent,console.log("近期列表API_res :>> ",n),n.forEach((function(t){t.date=e.$dateFormat(t.date,"yyyy-mm-dd"),console.log("item.date :>> ",t.date)})),e.recentList=n;case 7:case"end":return r.stop()}}),r)})))()},handleCoverList:function(t){console.log("覆盖列表API_res :>> ",t),this.coverList=t},instructorListAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("lecture.instructorList",i);case 3:for(a in n=r.sent,n)n[a].rankingName="第".concat(parseInt(a)+1,"名"),n[a].name=n[a].instructor_info?n[a].instructor_info.name:"",n[a].visitorStr="".concat(n[a].sum_visitor,"人"),n[a].roundStr="".concat(n[a].host_time,"场");console.log("授课老师排名列表API_res :>> ",n),e.instructorList=n;case 7:case"end":return r.stop()}}),r)})))()},dateCoverListAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={type:"none",aid:t},r.next=3,e.$request("lecture.dateCoverList",i);case 3:n=r.sent,console.log("日期覆盖列表res :>> ",n),e.dateCoverList=n;case 6:case"end":return r.stop()}}),r)})))()},coverTotalNumberAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("lecture.coverTotalNumber",i);case 3:n=r.sent,console.log("覆盖总人次API_res :>> ",n),e.coverTotalNumber=n;case 6:case"end":return r.stop()}}),r)})))()},coverListCityAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("lecture.coverListCity",i);case 3:n=r.sent,console.log("res :>> ",n),e.dateCoverCityList=n;case 6:case"end":return r.stop()}}),r)})))()},coverListDistrictAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("lecture.coverListDistrict",i);case 3:n=r.sent,console.log("res :>> ",n),e.dateCoverDistrictList=n;case 6:case"end":return r.stop()}}),r)})))()},coverListStreetAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("lecture.coverListStreet",i);case 3:n=r.sent,console.log("res :>> ",n),e.dateCoverStreetList=n;case 6:case"end":return r.stop()}}),r)})))()},handleLevel:function(t){var e=[];switch(t){case"province":this.handleCoverList(this.dateCoverCityList),this.dateCoverCityList.forEach((function(t){t.city&&""!==t.city&&e.push({name:t.city,value:t.sum_visitor})}));break;case"city":this.handleCoverList(this.dateCoverDistrictList),this.dateCoverDistrictList.forEach((function(t){t.district&&""!==t.district&&e.push({name:t.district,value:t.sum_visitor})}));break;case"district":this.handleCoverList(this.dateCoverStreetList),this.dateCoverStreetList.forEach((function(t){t.street&&""!==t.street&&e.push({name:t.street,value:t.sum_visitor})}));break;default:break}return console.log("地图-图表数据arr :>> ",e),e},onPreachingAreaChangeCheck:function(t,e){var r,i=(0,l.Z)(this.preachingAreaCheckedList);try{for(i.s();!(r=i.n()).done;){var n=r.value;n.value===e.value&&(n.checked=t)}}catch(a){i.e(a)}finally{i.f()}this.$store.commit("viewFilter/setPreachingAreaCheckedList",this.preachingAreaCheckedList)},onCoverListChangeCheck:function(t,e){var r,i=(0,l.Z)(this.coverListCheckedList);try{for(i.s();!(r=i.n()).done;){var n=r.value;n.value===e.value&&(n.checked=t)}}catch(a){i.e(a)}finally{i.f()}this.$store.commit("viewFilter/setCoverListCheckedList",this.coverListCheckedList)}}}),h=u,v=r(1001),d=(0,v.Z)(h,i,n,!1,null,"7777ff76",null),f=d.exports},5003:function(t,e,r){var i=r(2109),n=r(7293),a=r(5656),s=r(1236).f,o=r(9781),c=n((function(){s(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(a(t),e)}})},9337:function(t,e,r){var i=r(2109),n=r(9781),a=r(3887),s=r(5656),o=r(1236),c=r(6135);i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,i=s(t),n=o.f,l=a(i),u={},h=0;while(l.length>h)r=n(i,e=l[h++]),void 0!==r&&c(u,e,r);return u}})},2032:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1703);var i=r(8936);function n(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,i.Z)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(c)throw s}}}}}}]);
//# sourceMappingURL=243-legacy.5a3cdc79.js.map