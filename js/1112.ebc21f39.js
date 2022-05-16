"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1112],{21112:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"active-dynamic-details-container"},[a("div",{staticClass:"background-box"}),a("div",{staticClass:"container"},[a("div",{staticClass:"header flex-start"},[a("div",{staticClass:"header-left"},[e._v(e._s(e.dayCmp))]),a("div",{staticClass:"header-right"},[a("van-tag",{attrs:{type:"primary",size:"large "}},[e._v(e._s(e.areaCmp))]),a("p",{staticClass:"header-date-style"},[e._v(" "+e._s(e.yearsMonthsCmp)+" "+e._s(e.weekCmp)+" "+e._s(e.activityTimeCmp)+"小时 ")])],1)]),a("Card",{staticClass:"basic-infor-box"},[a("div",{staticClass:"basic-info-headre"},[a("p",{staticClass:"basic-info-title"},[e._v(e._s(e.eventDetails.title))]),a("div",{staticClass:"tag-box-style"},e._l(e.eventDetails.dataunit_info,(function(t){return a("van-tag",{key:t.id,staticClass:"tag-style",attrs:{type:"primary",size:"medium"}},[e._v(e._s(t.name))])})),1)]),a("div",{staticClass:"basic-info-main"},[a("div",{staticClass:"basic-info-main-row flex-start"},[a("p",{staticClass:"basic-info-main-row-label"},[e._v("举办单位:")]),a("p",{staticClass:"basic-info-main-row-value"},[e._v(" "+e._s(e.eventDetails&&e.eventDetails.host_info?e.eventDetails.host_info.name:"")+" ")])]),a("div",{staticClass:"basic-info-main-row flex-start"},[a("p",{staticClass:"basic-info-main-row-label"},[e._v("维护方:")]),a("p",{staticClass:"basic-info-main-row-value"},[e._v(" "+e._s(e.lecturePermissions.name?e.lecturePermissions.name:"暂无维护方")+" ")])])])]),a("div",{staticClass:"card-box"},[a("p",{staticClass:"card-title-style"},[e._v("主讲人")]),a("Card",{staticClass:"card-style flex-start"},[a("Avatar",{attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.instructor_info.img),width:120,height:161}}),a("p",{staticClass:"username-style"},[e._v(" "+e._s(e.eventDetails.instructor_info.name)+" ")])],1)],1),a("div",{staticClass:"card-box"},[a("p",{staticClass:"card-title-style"},[e._v("现场照片")]),a("Card",{staticClass:"card-style"},[a("ul",{staticClass:"flex flex-wrap"},e._l(e.record2List,(function(t,s){return a("li",{key:s,staticClass:"card-photo-style"},[a("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.record2List.length>0,expression:"record2List.length > 0"}],attrs:{imgUrl:e.handleImgEmptyUrl(t),width:200,height:200}})],1)})),0),a("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.record2List>0,expression:"!record2List > 0"}]})],1)],1),a("div",{staticClass:"card-box"},[a("p",{staticClass:"card-title-style"},[e._v("举办单位反馈表&主讲人承诺书")]),a("div",{staticClass:"flex"},[a("Card",{staticClass:"card-style card-style-average flex-center"},[a("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.eventDetails.file1,expression:"eventDetails.file1"}],staticClass:"card-photo-style",attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.file1),width:240,height:340}}),a("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.eventDetails.file1,expression:"!eventDetails.file1"}]})],1),a("Card",{staticClass:"card-style card-style-average flex-center"},[a("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.eventDetails.file2,expression:"eventDetails.file2"}],staticClass:"card-photo-style",attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.file2),width:240,height:340}}),a("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.eventDetails.file2,expression:"!eventDetails.file2"}]})],1)],1)]),a("div",{staticClass:"card-box"},[a("p",{staticClass:"card-title-style"},[e._v("活动海报")]),a("Card",{staticClass:"card-style flex-center"},[a("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.eventDetails.poster_img,expression:"eventDetails.poster_img"}],attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.poster_img),width:240,height:340}}),a("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.eventDetails.poster_img,expression:"!eventDetails.poster_img"}]})],1)],1),a("div",{staticClass:"card-box"},[a("p",{staticClass:"card-title-style"},[e._v("听众评价")]),a("Card",{staticClass:"card-style"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"comments-list"},e._l(6,(function(t,i){return a("li",{key:i,staticClass:"comments-item flex-start align-start"},[a("Logo",{attrs:{imgUrl:s(82064),size:65,round:""}}),a("div",{staticClass:"comments-info-box"},[a("p",{staticClass:"comments-username-style"},[e._v("李思怡")]),a("p",{staticClass:"comments-content-style"},[e._v(" 这场讲座，让我了解双减之后家长应该做什么，对我帮助很大。 ")])])],1)})),0),a("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}]})],1)],1)],1)])},i=[],r=s(76711),l={components:{Card:()=>s.e(3314).then(s.bind(s,53314)),Avatar:()=>s.e(799).then(s.bind(s,799)),Logo:()=>s.e(433).then(s.bind(s,90433)),NoRecord:()=>s.e(5847).then(s.bind(s,35847))},computed:{areaCmp(){return`${this.eventDetails.city}${this.eventDetails.street}`},yearsMonthsCmp(){return this.$dateFormat(this.eventDetails.date,"yyyy/mm")},weekCmp(){return this.$dateFormat(this.eventDetails.date,"dddd")},dayCmp(){return this.$dateFormat(this.eventDetails.date,"dd")},activityTimeCmp(){return Number((0,r.i_)(this.eventDetails.duration,"s","h").toString().match(/^\d+(?:\.\d{0,2})?/))}},data(){return{show:!1,id:null,eventDetails:{instructor_info:{}},lecturePermissions:{},record2List:[]}},created(){this.id=this.$route.query.id,this.eventDetailsAPI(this.id),this.lecturePermissionsAPI(this.id),this.lectureRecord2ListAPI(this.id)},methods:{handleImgEmptyUrl(e){return e||""},async eventDetailsAPI(e){const t={id:e},s=await this.$request("lecture.eventDetails",t);console.log("讲座模块-获取信息(活动详情)API_res :>> ",s),this.eventDetails=s},async lecturePermissionsAPI(e){const t={lid:e},s=await this.$request("lecture.lecturePermissions",t);console.log("讲座模块-权限API_res :>> ",s),this.lecturePermissions=s},async lectureRecord2ListAPI(e){const t={lid:e},s=await this.$request("lecture.lectureRecord2List",t);console.log("记录2列表API_res :>> ",s),this.record2List=s[1]}}},n=l,c=s(1001),o=(0,c.Z)(n,a,i,!1,null,"2eb009c2",null),d=o.exports},76711:function(e,t,s){function a(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}s.d(t,{e9:function(){return a},i_:function(){return r},o1:function(){return l},rm:function(){return i}});const i=(e,t)=>{let s=new Date(Date.parse(e)),a=new Date(Date.parse(t));return s>a},r=(e,t,s)=>{switch(t){case"H":case"h":if("H"===s||"h"===s)return e;if("M"===s||"m"===s)return 60*e;if("S"===s||"s"===s)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===s||"h"===s)return e/60;if("M"===s||"m"===s)return e;if("S"===s||"s"===s)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===s||"h"===s)return e/60/60;if("M"===s||"m"===s)return e/60;if("S"===s||"s"===s)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},l=(e,t,s="name")=>{const a=[];return e.forEach((e=>{const i=e[s].indexOf(t);i>-1&&a.push(e)})),a}},82064:function(e,t,s){e.exports=s.p+"img/avatar_test.cea140b9.png"}}]);
//# sourceMappingURL=1112.ebc21f39.js.map