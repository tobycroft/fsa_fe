"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1007],{21007:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"active-dynamic-details-container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"active_detail_box"},[s("div",{staticClass:"title_top"},[s("h3",[t._v(t._s(t.eventDetails.title))]),s("p",[t._v(" 主讲人:"+t._s(t.eventDetails.instructor_info?t.eventDetails.instructor_info.name:"")+" ")])]),s("div",{staticClass:"flex active-section first"},[s("span",{staticClass:"t-char"},[t._v("活动标签")]),s("div",t._l(t.eventDetails.tag_info,(function(e){return s("div",{key:e.id,staticClass:"tag"},[t._v(t._s(e.name))])})),0)]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("举办单位")]),s("div",{staticClass:"v-char"},[t._v(" "+t._s(t.eventDetails&&t.eventDetails.host_info?t.eventDetails.host_info.name:"")+" ")])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动时间")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.yearsMonthsCmp))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动时长")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.activityTimeCmp)+"小时")])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动地点")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.areaCmp))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动类型")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.type))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("形式标签")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.tagform_info?t.eventDetails.tagform_info.name:""))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("对象标签")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.tagrole_info?t.eventDetails.tagrole_info.name:""))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("上报数据单位")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.dataunit_info&&t.eventDetails.dataunit_info.length?t.eventDetails.dataunit_info[0].name:""))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("参与人数")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.visitor))])])]),s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("现场照片")]),s("Card",{staticClass:"card-style"},[s("ul",{staticClass:"flex flex-wrap"},t._l(t.record2List,(function(e,i){return s("li",{key:i,staticClass:"card-photo-style"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.record2List.length>0,expression:"record2List.length > 0"}],attrs:{imgUrl:t.handleImgEmptyUrl(e),width:200,height:200}})],1)})),0),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.record2List||!t.record2List.length,expression:"!record2List || !record2List.length"}]})],1)],1),s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("举办单位反馈表&主讲人承诺书")]),s("div",{staticClass:"flex"},[s("Card",{staticClass:"card-style card-style-average flex-center"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.file1,expression:"eventDetails.file1"}],staticClass:"card-photo-style",attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.file1),width:240,height:340}}),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.file1,expression:"!eventDetails.file1"}]})],1),s("Card",{staticClass:"card-style card-style-average flex-center"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.file2,expression:"eventDetails.file2"}],staticClass:"card-photo-style",attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.file2),width:240,height:340}}),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.file2,expression:"!eventDetails.file2"}]})],1)],1)]),t.eventDetails.poster_img?s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("活动海报")]),s("Card",{staticClass:"card-style flex-center"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.poster_img,expression:"eventDetails.poster_img"}],attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.poster_img),width:240,height:340}}),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.poster_img,expression:"!eventDetails.poster_img"}]})],1)],1):t._e(),s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("听众评价")]),s("Card",{staticClass:"card-style"},[s("NoRecord")],1)],1)]),s("div",{staticClass:"bottom-wrap-box flex"},[s("div",{staticClass:"btn-white",on:{click:function(e){return t.reqLectureVerifyAPI(-1)}}},[t._v("拒绝备案")]),s("div",{staticClass:"btn-blue",on:{click:function(e){return t.reqLectureVerifyAPI(1)}}},[t._v("已备案")])])])},a=[],r=s(37662),n={components:{Card:()=>s.e(248).then(s.bind(s,80248)),Avatar:()=>s.e(4179).then(s.bind(s,4179)),Logo:()=>s.e(7079).then(s.bind(s,17079)),NoRecord:()=>s.e(6006).then(s.bind(s,76006))},computed:{areaCmp(){const t=this.$store.getters.associationInfo.model_type;switch(t){case"district":return`${this.eventDetails.district}${this.eventDetails.street}`;default:return`${this.eventDetails.city}${this.eventDetails.district}${this.eventDetails.street}`}},yearsMonthsCmp(){return this.$dateFormat(this.eventDetails.start_date,"UTC:yyyy年mm月dd日 HH:MM")},weekCmp(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dddd")},dayCmp(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dd")},timeCmp(){return this.$dateFormat(this.eventDetails.start_date,"UTC:HH:MM")},activityTimeCmp(){return Number((0,r.i_)(this.eventDetails.duration,"s","h").toString().match(/^\d+(?:\.\d{0,2})?/))}},data(){return{show:!1,id:null,eventDetails:{instructor_info:{}},lecturePermissions:{},record2List:[]}},created(){this.id=this.$route.query.id,this.eventDetailsAPI(this.id),this.lecturePermissionsAPI(this.id),this.lectureRecord2ListAPI(this.id)},methods:{handleImgEmptyUrl(t){return t||""},async reqLectureVerifyAPI(t){const e={aid:this.$store.getters.associationInfo.id,id:this.id,status:t};await this.$request("lecture.reqLectureVerify",e),this.$toast("操作成功")},async eventDetailsAPI(t){const e={id:t},s=await this.$request("lecture.eventDetails",e);console.log("讲座模块-获取信息(活动详情)API_res :>> ",s),this.eventDetails=s},async lecturePermissionsAPI(t){const e={lid:t},s=await this.$request("lecture.lecturePermissions",e);console.log("讲座模块-权限API_res :>> ",s),this.lecturePermissions=s},async lectureRecord2ListAPI(t){const e={lid:t},s=await this.$request("lecture.lectureRecord2List",e);console.log("记录2列表API_res :>> ",s),this.record2List=s[1]}}},c=n,l=s(43736),o=(0,l.Z)(c,i,a,!1,null,"77e51d49",null),v=o.exports},37662:function(t,e,s){function i(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}s.d(e,{Ef:function(){return l},Y_:function(){return v},e9:function(){return i},fS:function(){return c},i_:function(){return r},o1:function(){return n},og:function(){return o},rm:function(){return a}});const a=(t,e)=>{let s=new Date(Date.parse(t)),i=new Date(Date.parse(e));return s>i},r=(t,e,s)=>{switch(e){case"H":case"h":if("H"===s||"h"===s)return t;if("M"===s||"m"===s)return 60*t;if("S"===s||"s"===s)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===s||"h"===s)return t/60;if("M"===s||"m"===s)return t;if("S"===s||"s"===s)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===s||"h"===s)return t/60/60;if("M"===s||"m"===s)return t/60;if("S"===s||"s"===s)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},n=(t,e,s="name")=>{const i=[];return t.forEach((t=>{const a=t[s].indexOf(e);a>-1&&i.push(t)})),i},c=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),l=t=>{const e=[];for(const s in t)e.push(t[s]);return e.reverse()},o=(t,e)=>{console.log("importType :>> ",t);let s="";return"default"!==t&&"a"!==t||(s="fj"),"gt"===t&&(s="gt"),s===e},v=t=>{switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=1007.f85370a0.js.map