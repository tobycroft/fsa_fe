(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5124],{45124:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return v}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"active-dynamic-details-container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"active_detail_box"},[s("div",{staticClass:"title_top"},[s("h3",[t._v(t._s(t.eventDetails.title))]),s("p",[t._v(" 主讲人:"+t._s(t.eventDetails.instructor_info?t.eventDetails.instructor_info.name:"")+" ")])]),s("div",{staticClass:"flex active-section first"},[s("span",{staticClass:"t-char"},[t._v("活动标签")]),s("div",t._l(t.eventDetails.tag_info,(function(e){return s("div",{key:e.id,staticClass:"tag"},[t._v(t._s(e.name))])})),0)]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("举办单位")]),s("div",{staticClass:"v-char"},[t._v(" "+t._s(t.eventDetails&&t.eventDetails.host_info?t.eventDetails.host_info.name:"")+" ")])]),t._m(0),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动时长")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.activityTimeCmp)+"小时")])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动地点")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.areaCmp))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动类型")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.type))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("形式标签")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.tagform_info?t.eventDetails.tagform_info.name:""))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("对象标签")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.tagrole_info?t.eventDetails.tagrole_info.name:""))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("上报数据单位")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.dataunit_info&&t.eventDetails.dataunit_info.length?t.eventDetails.dataunit_info[0].name:""))])]),s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("参与人数")]),s("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.visitor))])])]),s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("现场照片")]),s("Card",{staticClass:"card-style"},[s("ul",{staticClass:"flex flex-wrap"},t._l(t.record2List,(function(e,r){return s("li",{key:r,staticClass:"card-photo-style"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.record2List.length>0,expression:"record2List.length > 0"}],attrs:{imgUrl:t.handleImgEmptyUrl(e),width:200,height:200}})],1)})),0),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.record2List||!t.record2List.length,expression:"!record2List || !record2List.length"}]})],1)],1),s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("举办单位反馈表&主讲人承诺书")]),s("div",{staticClass:"flex"},[s("Card",{staticClass:"card-style card-style-average flex-center"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.file1,expression:"eventDetails.file1"}],staticClass:"card-photo-style",attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.file1),width:240,height:340}}),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.file1,expression:"!eventDetails.file1"}]})],1),s("Card",{staticClass:"card-style card-style-average flex-center"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.file2,expression:"eventDetails.file2"}],staticClass:"card-photo-style",attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.file2),width:240,height:340}}),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.file2,expression:"!eventDetails.file2"}]})],1)],1)]),t.eventDetails.poster_img?s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("活动海报")]),s("Card",{staticClass:"card-style flex-center"},[s("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.poster_img,expression:"eventDetails.poster_img"}],attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.poster_img),width:240,height:340}}),s("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.poster_img,expression:"!eventDetails.poster_img"}]})],1)],1):t._e(),s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("听众评价")]),s("Card",{staticClass:"card-style"},[s("NoRecord")],1)],1)]),s("div",{staticClass:"bottom-wrap-box flex"},[s("div",{staticClass:"btn-white",on:{click:function(e){return t.reqLectureVerifyAPI(-1)}}},[t._v("拒绝备案")]),s("div",{staticClass:"btn-blue",on:{click:function(e){return t.reqLectureVerifyAPI(1)}}},[t._v("已备案")])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex active-section"},[s("span",{staticClass:"t-char"},[t._v("活动时间")]),s("div",{staticClass:"v-char"},[t._v("家教观念")])])}],a=s(16198),n=(s(35666),s(41539),s(78783),s(33948),s(92222),s(9653),s(74916),s(4723),s(39714),s(76711)),c={components:{Card:function(){return s.e(4821).then(s.bind(s,53314))},Avatar:function(){return s.e(3823).then(s.bind(s,72719))},Logo:function(){return s.e(2226).then(s.bind(s,12860))},NoRecord:function(){return s.e(5847).then(s.bind(s,35847))}},computed:{areaCmp:function(){var t=this.$store.getters.associationInfo.model_type;switch(t){case"district":return"".concat(this.eventDetails.district).concat(this.eventDetails.street);default:return"".concat(this.eventDetails.city).concat(this.eventDetails.district).concat(this.eventDetails.street)}},yearsMonthsCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:yyyy/mm")},weekCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dddd")},dayCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dd")},timeCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:HH:MM")},activityTimeCmp:function(){return Number((0,n.i_)(this.eventDetails.duration,"s","h").toString().match(/^\d+(?:\.\d{0,2})?/))}},data:function(){return{show:!1,id:null,eventDetails:{instructor_info:{}},lecturePermissions:{},record2List:[]}},created:function(){this.id=this.$route.query.id,this.eventDetailsAPI(this.id),this.lecturePermissionsAPI(this.id),this.lectureRecord2ListAPI(this.id)},methods:{handleImgEmptyUrl:function(t){return t||""},reqLectureVerifyAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r={aid:e.$store.getters.associationInfo.id,id:e.id,status:t},s.next=3,e.$request("lecture.reqLectureVerify",r);case 3:e.$toast("操作成功");case 4:case"end":return s.stop()}}),s)})))()},eventDetailsAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function s(){var r,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r={id:t},s.next=3,e.$request("lecture.eventDetails",r);case 3:i=s.sent,console.log("讲座模块-获取信息(活动详情)API_res :>> ",i),e.eventDetails=i;case 6:case"end":return s.stop()}}),s)})))()},lecturePermissionsAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function s(){var r,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r={lid:t},s.next=3,e.$request("lecture.lecturePermissions",r);case 3:i=s.sent,console.log("讲座模块-权限API_res :>> ",i),e.lecturePermissions=i;case 6:case"end":return s.stop()}}),s)})))()},lectureRecord2ListAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function s(){var r,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r={lid:t},s.next=3,e.$request("lecture.lectureRecord2List",r);case 3:i=s.sent,console.log("记录2列表API_res :>> ",i),e.record2List=i[1];case 6:case"end":return s.stop()}}),s)})))()}}},o=c,l=s(1001),u=(0,l.Z)(o,r,i,!1,null,"7ea6e99e",null),v=u.exports},53111:function(t,e,s){var r=s(1702),i=s(84488),a=s(41340),n=s(81361),c=r("".replace),o="["+n+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),v=function(t){return function(e){var s=a(i(e));return 1&t&&(s=c(s,l,"")),2&t&&(s=c(s,u,"")),s}};t.exports={start:v(1),end:v(2),trim:v(3)}},50863:function(t,e,s){var r=s(1702);t.exports=r(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,s){"use strict";var r=s(19781),i=s(17854),a=s(1702),n=s(54705),c=s(31320),o=s(92597),l=s(79587),u=s(47976),v=s(52190),d=s(57593),f=s(47293),h=s(8006).f,m=s(31236).f,p=s(3070).f,_=s(50863),C=s(53111).trim,g="Number",w=i[g],x=w.prototype,D=i.TypeError,y=a("".slice),I=a("".charCodeAt),N=function(t){var e=d(t,"number");return"bigint"==typeof e?e:b(e)},b=function(t){var e,s,r,i,a,n,c,o,l=d(t,"number");if(v(l))throw D("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=C(l),e=I(l,0),43===e||45===e){if(s=I(l,2),88===s||120===s)return NaN}else if(48===e){switch(I(l,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(a=y(l,2),n=a.length,c=0;c<n;c++)if(o=I(a,c),o<48||o>i)return NaN;return parseInt(a,r)}return+l};if(n(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:w(N(t)),s=this;return u(x,s)&&f((function(){_(s)}))?l(Object(e),s,E):e},R=r?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;R.length>k;k++)o(w,A=R[k])&&!o(E,A)&&p(E,A,m(w,A));E.prototype=x,x.constructor=E,c(i,g,E)}},4723:function(t,e,s){"use strict";var r=s(46916),i=s(27007),a=s(19670),n=s(17466),c=s(41340),o=s(84488),l=s(58173),u=s(31530),v=s(97651);i("match",(function(t,e,s){return[function(e){var s=o(this),i=void 0==e?void 0:l(e,t);return i?r(i,e,s):new RegExp(e)[t](c(s))},function(t){var r=a(this),i=c(t),o=s(e,r,i);if(o.done)return o.value;if(!r.global)return v(r,i);var l=r.unicode;r.lastIndex=0;var d,f=[],h=0;while(null!==(d=v(r,i))){var m=c(d[0]);f[h]=m,""===m&&(r.lastIndex=u(i,n(r.lastIndex),l)),h++}return 0===h?null:f}]}))},76711:function(t,e,s){"use strict";s.d(e,{Ef:function(){return o},Y_:function(){return u},e9:function(){return r},fS:function(){return c},i_:function(){return a},o1:function(){return n},og:function(){return l},rm:function(){return i}});s(41539),s(54747),s(74916),s(15306);function r(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}var i=function(t,e){var s=new Date(Date.parse(t)),r=new Date(Date.parse(e));return s>r},a=function(t,e,s){switch(e){case"H":case"h":if("H"===s||"h"===s)return t;if("M"===s||"m"===s)return 60*t;if("S"===s||"s"===s)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===s||"h"===s)return t/60;if("M"===s||"m"===s)return t;if("S"===s||"s"===s)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===s||"h"===s)return t/60/60;if("M"===s||"m"===s)return t/60;if("S"===s||"s"===s)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},n=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return t.forEach((function(t){var i=t[s].indexOf(e);i>-1&&r.push(t)})),r},c=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},o=function(t){var e=[];for(var s in t)e.push(t[s]);return e.reverse()},l=function(t,e){console.log("importType :>> ",t);var s="";return"default"!==t&&"a"!==t||(s="fj"),"gt"===t&&(s="gt"),s===e},u=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=5124-legacy.b73a27ce.js.map