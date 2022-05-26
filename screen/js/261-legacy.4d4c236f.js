(self["webpackChunkhome_research_screen"]=self["webpackChunkhome_research_screen"]||[]).push([[261],{62261:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-container"},[r("el-scrollbar",{staticClass:"scrollbar-style",style:{height:"100vh"}},[r("div",{staticClass:"scrollbar-content-style"},[r("header",[r("div",{staticClass:"title-content-box"},[r("p",{staticClass:"title-level-one"},[t._v("福建省家庭教育")]),r("p",{staticClass:"title-level-two"},[t._v("数智化管理平台")])])]),r("main",{staticClass:"flex align-start"},[r("div",[r("ul",{staticClass:"list-style"},[r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"近期宣讲区域列表",listData:t.recentPreachAreaListCmp}},[r("TableList",{attrs:{columnsList:t.recentPreachAreaListColumns,listData:t.recentPreachAreaListCmp,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"近期承办单位列表"}},[r("TableList",{attrs:{columnsList:t.recentUndertakingUnitListColumns,listData:t.recentUndertakingUnitListCmp,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"近期宣讲详情"}},[r("TableList",{attrs:{columnsList:t.recentAboutDetailsColumns,listData:t.recentAboutDetailsCmp,overflow:""}})],1)],1)])]),r("div",{staticClass:"main-box"},[r("TitleCard",{staticClass:"title-card-style",attrs:{title:"宣讲覆盖人数："+t.coverTotalNumber+"人"}}),r("MapProjection",{attrs:{dataSource:t.mapProjection_DataSource}})],1),r("div",[r("ul",{staticClass:"list-style"},[r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"宣讲区域覆盖人数排名"}},[r("TableList",{attrs:{columnsList:t.coverListColumns,listData:t.coverList,showHeader:!1,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"授课老师宣讲数据排名"}},[r("TableList",{attrs:{columnsList:t.instructorColumns,listData:t.instructorList,overflow:""}})],1)],1),r("li",{staticClass:"list-item"},[r("ListCard",{attrs:{title:"新增宣讲覆盖人数"}},[r("CoverPeopleTotal",{attrs:{dataSource:t.coverPeopleTotal_DataSource,xAxisData:t.coverPeopleTotal_xAxisData}})],1)],1)])])])])])],1)},a=[],i=r(16198);r(47941),r(82526),r(57327),r(41539),r(38880),r(54747),r(49337);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(41817),r(32165),r(78783),r(33948),r(21703);var l=r(48936);function u(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,l.Z)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,i=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(s)throw i}}}}r(78975),r(92222),r(68309);var v={components:{ListCard:function(){return r.e(898).then(r.bind(r,84898))},TableList:function(){return r.e(318).then(r.bind(r,99318))},TitleCard:function(){return r.e(196).then(r.bind(r,28196))},CoverPeopleTotal:function(){return r.e(175).then(r.bind(r,47175))},MapProjection:function(){return r.e(522).then(r.bind(r,28522))}},computed:{recentPreachAreaListCmp:function(){var t,e=[],r=u(this.recentList);try{for(r.s();!(t=r.n()).done;){var n=t.value;console.log("区域 :>> ","".concat(n.province).concat(n.city).concat(n.district).concat(n.street)),e.push({areaName:"".concat(n.province).concat(n.city).concat(n.district).concat(n.street),date:n.date})}}catch(a){r.e(a)}finally{r.f()}return e},recentUndertakingUnitListCmp:function(){var t=[];return this.recentList.forEach((function(e){t.push(c(c({},e.host_info),{},{date:e.date}))})),console.log("近期承办单位列表arr :>> ",t),t},recentAboutDetailsCmp:function(){var t=[];return this.recentList.forEach((function(e){t.push(c(c({},e.instructor_info),{},{title:e.title,visitor:e.visitor}))})),console.log("近期宣讲详情arr :>> ",t),t},coverPeopleTotal_DataSource:function(){var t=[];return this.dateCoverList.forEach((function(e){t.push(e.visitor)})),console.log("新增宣讲覆盖人数-数据arr :>> ",t),t},coverPeopleTotal_xAxisData:function(){var t=this,e=[];return this.dateCoverList.forEach((function(r){e.push(t.$dateFormat(r.date,"m/dd"))})),console.log("新增宣讲覆盖人数-X轴标题arr :>> ",e),e},mapProjection_DataSource:function(){var t=[];return this.coverList.forEach((function(e){console.log("item :>> ",e);var r,n=u(t);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(a.name===e.city)return void(a.value+=e.visitor)}}catch(i){n.e(i)}finally{n.f()}t.push({name:e.city,value:e.visitor})})),console.log("地图-图表数据arr :>> ",t),t}},data:function(){return{recentPreachAreaListColumns:[{label:"区域名称",value:"areaName",align:"left"},{label:"日期",value:"date",width:60}],recentUndertakingUnitListColumns:[{label:"单位名称",value:"name",align:"left"},{label:"日期",value:"date",width:60}],recentAboutDetailsColumns:[{label:"宣讲主题",value:"title",align:"left"},{label:"主讲人",value:"name",width:40},{label:"听课人数",value:"visitor",width:40}],coverListColumns:[{label:"名次",value:"rankingName",width:40},{label:"覆盖区域名称",value:"areaName",align:"left"},{label:"区域覆盖人数",value:"visitorStr",width:40}],instructorColumns:[{label:"名次",value:"rankingName"},{label:"姓名",value:"name"},{label:"听课人数",value:"visitorStr"},{label:"场次",value:"roundStr"}],recentList:[],coverList:[],instructorList:[],dateCoverList:[],coverTotalNumber:0}},mounted:function(){this.recentListAPI(),this.coverListAPI(),this.instructorListAPI(),this.dateCoverListAPI(),this.coverTotalNumberAPI()},methods:{recentListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("lecture.recentList");case 2:r=e.sent,console.log("近期列表API_res :>> ",r),r.forEach((function(e){e.date=t.$dateFormat(e.date,"yyyy-mm-dd"),console.log("item.date :>> ",e.date)})),t.recentList=r;case 6:case"end":return e.stop()}}),e)})))()},coverListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("lecture.coverList");case 2:for(n in r=e.sent,r)r[n].areaName="".concat(r[n].province).concat(r[n].city).concat(r[n].district).concat(r[n].street),r[n].rankingName="第".concat(parseInt(n)+1,"名"),r[n].visitorStr="".concat(r[n].visitor,"人");console.log("覆盖列表API_res :>> ",r),t.coverList=r;case 6:case"end":return e.stop()}}),e)})))()},instructorListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("lecture.instructorList");case 2:for(n in r=e.sent,r)r[n].rankingName="第".concat(parseInt(n)+1,"名"),r[n].name=r[n].instructor_info.name,r[n].visitorStr="".concat(r[n].visitor,"人"),r[n].roundStr="".concat(r[n].host_time,"场");console.log("授课老师排名列表API_res :>> ",r),t.instructorList=r;case 6:case"end":return e.stop()}}),e)})))()},dateCoverListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={type:"none"},e.next=3,t.$request("lecture.dateCoverList",r);case 3:n=e.sent,console.log("日期覆盖列表res :>> ",n),t.dateCoverList=n;case 6:case"end":return e.stop()}}),e)})))()},coverTotalNumberAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("lecture.coverTotalNumber");case 2:r=e.sent,console.log("覆盖总人数API_res :>> ",r),t.coverTotalNumber=r;case 5:case"end":return e.stop()}}),e)})))()}}},f=v,m=r(1001),d=(0,m.Z)(f,n,a,!1,null,"f43131f4",null),h=d.exports},49337:function(t,e,r){var n=r(82109),a=r(19781),i=r(53887),o=r(45656),s=r(31236),c=r(86135);n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),a=s.f,l=i(n),u={},v=0;while(l.length>v)r=a(n,e=l[v++]),void 0!==r&&c(u,e,r);return u}})}}]);
//# sourceMappingURL=261-legacy.4d4c236f.js.map