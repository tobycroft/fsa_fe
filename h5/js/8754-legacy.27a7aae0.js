(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8754],{48754:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"active-dynamic-details-container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"active_detail_box"},[r("div",{staticClass:"title_top"},[r("div",{staticStyle:{display:"flex","align-items":"center"}},[r("h3",[t._v(t._s(t.eventDetails.title))]),t.isAdmin&&t.canEdit?r("span",{staticStyle:{"margin-left":"10px","text-decoration":"underline",color:"#1989ff","font-size":"12px","flex-shrink":"0"},on:{click:function(e){return t.$router.push("/activityDetail?type=association&id="+t.id)}}},[t._v("编辑")]):t._e()]),r("p",[t._v(" 主讲人:"+t._s(t.eventDetails.instructor_info?t.eventDetails.instructor_info.name:"")+" ")])]),r("div",{staticClass:"flex active-section first"},[r("span",{staticClass:"t-char"},[t._v("活动标签")]),r("div",t._l(t.eventDetails.tag_info,(function(e){return r("div",{key:e.id,staticClass:"tag"},[t._v(" "+t._s(e.name)+" ")])})),0)]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("举办单位")]),r("div",{staticClass:"v-char"},[t._v(" "+t._s(t.eventDetails&&t.eventDetails.host_info?t.eventDetails.host_info.name:"")+" ")])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("活动时间")]),r("div",{staticClass:"v-char"},[t._v(t._s(t.yearsMonthsCmp))])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("活动时长")]),r("div",{staticClass:"v-char"},[t._v(t._s(t.activityTimeCmp)+"小时")])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("活动地点")]),r("div",{staticClass:"v-char"},[t._v(t._s(t.areaCmp))])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("活动类型")]),r("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.type))])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("形式标签")]),r("div",{staticClass:"v-char"},[t._v(" "+t._s(t.eventDetails.tagform_info?t.eventDetails.tagform_info.name:"")+" ")])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("对象标签")]),r("div",{staticClass:"v-char"},[t._v(" "+t._s(t.eventDetails.tagrole_info?t.eventDetails.tagrole_info.name:"")+" ")])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("上报数据单位")]),r("div",{staticClass:"v-char"},[t._v(" "+t._s(t.eventDetails.dataunit_info&&t.eventDetails.dataunit_info.length?t.eventDetails.dataunit_info[0].name:"")+" ")])]),r("div",{staticClass:"flex active-section"},[r("span",{staticClass:"t-char"},[t._v("参与人数")]),r("div",{staticClass:"v-char"},[t._v(t._s(t.eventDetails.visitor))])])]),r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[t._v("现场照片")]),r("Card",{staticClass:"card-style"},[r("ul",{staticClass:"flex flex-wrap"},t._l(t.record2List,(function(e,s){return r("li",{key:s,staticClass:"card-photo-style"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.record2List.length>0,expression:"record2List.length > 0"}],attrs:{imgUrl:t.handleImgEmptyUrl(e),width:200,height:200}})],1)})),0),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.record2List||!t.record2List.length,expression:"!record2List || !record2List.length"}]})],1)],1),r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[t._v("活动补充材料")]),r("Card",{staticClass:"card-style"},[r("ul",{staticClass:"flex flex-wrap"},t._l(t.record2List2,(function(e,s){return r("li",{key:s,staticClass:"card-photo-style"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.record2List2.length>0,expression:"record2List2.length > 0"}],attrs:{imgUrl:t.handleImgEmptyUrl(e),width:200,height:200}})],1)})),0),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.record2List2||!t.record2List2.length,expression:"!record2List2 || !record2List2.length"}]})],1)],1),t.eventDetails.poster_img?r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[t._v("活动海报")]),r("Card",{staticClass:"card-style flex-center"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:t.eventDetails.poster_img,expression:"eventDetails.poster_img"}],attrs:{imgUrl:t.handleImgEmptyUrl(t.eventDetails.poster_img),width:240,height:340}}),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!t.eventDetails.poster_img,expression:"!eventDetails.poster_img"}]})],1)],1):t._e(),r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[t._v("听众评价")]),r("Card",{staticClass:"card-style"},[r("NoRecord")],1)],1)]),r("div",{staticClass:"bottom-wrap-box flex"},[r("div",{staticClass:"btn-white",on:{click:function(e){return t.reqLectureVerifyAPI(-1)}}},[t._v("拒绝备案")]),r("div",{staticClass:"btn-blue",on:{click:function(e){return t.reqLectureVerifyAPI(1)}}},[t._v("通过备案")])])])},i=[],n=r(48534),a=(r(35666),r(41539),r(78783),r(33948),r(92222),r(9653),r(74916),r(4723),r(39714),r(57327),r(37662)),c={components:{Card:function(){return r.e(166).then(r.bind(r,80248))},Avatar:function(){return r.e(4179).then(r.bind(r,4179))},Logo:function(){return r.e(2882).then(r.bind(r,17079))},NoRecord:function(){return r.e(6006).then(r.bind(r,76006))}},computed:{isAdmin:function(){return this.$store.state.user.accountIdInfo.is_admin},areaCmp:function(){var t=this.$store.getters.associationInfo.model_type;switch(t){case"district":return"".concat(this.eventDetails.district).concat(this.eventDetails.street);default:return"".concat(this.eventDetails.city).concat(this.eventDetails.district).concat(this.eventDetails.street)}},yearsMonthsCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:yyyy年mm月dd日 HH:MM")},weekCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dddd")},dayCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dd")},timeCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:HH:MM")},activityTimeCmp:function(){return Number((0,a.i_)(this.eventDetails.duration,"s","h").toString().match(/^\d+(?:\.\d{0,2})?/))}},data:function(){return{show:!1,id:null,eventDetails:{instructor_info:{}},lecturePermissions:{},record2List:[],record2List2:[],canEdit:!1}},created:function(){this.id=this.$route.query.id,this.eventDetailsAPI(this.id),this.lecturePermissionsAPI(this.id),this.lectureRecord2ListAPI(this.id),this.lectureRecord2List2API(this.id),this.lectureInfoEditableAPI(this.id)},methods:{lectureInfoEditableAPI:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$request("lecture.lectureInfoEditable",{id:t});case 2:s=r.sent,e.canEdit=s.auth;case 4:case"end":return r.stop()}}),r)})))()},handleImgEmptyUrl:function(t){return t||""},reqLectureVerifyAPI:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={aid:e.$store.getters.associationInfo.id,id:e.id,status:t},r.next=3,e.$request("lecture.reqLectureVerify",s);case 3:e.$toast("操作成功"),e.$router.back(-1);case 5:case"end":return r.stop()}}),r)})))()},eventDetailsAPI:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={id:t},r.next=3,e.$request("lecture.eventDetails",s);case 3:i=r.sent,console.log("讲座模块-获取信息(活动详情)API_res :>> ",i),e.eventDetails=i;case 6:case"end":return r.stop()}}),r)})))()},lecturePermissionsAPI:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={lid:t},r.next=3,e.$request("lecture.lecturePermissions",s);case 3:i=r.sent,console.log("讲座模块-权限API_res :>> ",i),e.lecturePermissions=i;case 6:case"end":return r.stop()}}),r)})))()},lectureRecord2ListAPI:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={lid:t,type:"现场记录"},r.next=3,e.$request("lecture.lectureRecord2List",s);case 3:i=r.sent,e.record2List=i[t]?i[t].filter((function(t){return 0==t.indexOf("http")})):[];case 5:case"end":return r.stop()}}),r)})))()},lectureRecord2List2API:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={lid:t,type:"活动补充材料"},r.next=3,e.$request("lecture.lectureRecord2List",s);case 3:i=r.sent,e.record2List2=i[t]?i[t].filter((function(t){return 0==t.indexOf("http")})):[];case 5:case"end":return r.stop()}}),r)})))()}}},o=c,l=r(43736),u=(0,l.Z)(o,s,i,!1,null,"482fb0b4",null),d=u.exports},53111:function(t,e,r){var s=r(1702),i=r(84488),n=r(41340),a=r(81361),c=s("".replace),o="["+a+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t){return function(e){var r=n(i(e));return 1&t&&(r=c(r,l,"")),2&t&&(r=c(r,u,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},50863:function(t,e,r){var s=r(1702);t.exports=s(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,r){"use strict";var s=r(19781),i=r(17854),n=r(1702),a=r(54705),c=r(31320),o=r(92597),l=r(79587),u=r(47976),d=r(52190),v=r(57593),f=r(47293),h=r(8006).f,m=r(31236).f,p=r(3070).f,_=r(50863),g=r(53111).trim,C="Number",x=i[C],w=x.prototype,y=i.TypeError,I=n("".slice),b=n("".charCodeAt),D=function(t){var e=v(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,s,i,n,a,c,o,l=v(t,"number");if(d(l))throw y("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=g(l),e=b(l,0),43===e||45===e){if(r=b(l,2),88===r||120===r)return NaN}else if(48===e){switch(b(l,1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+l}for(n=I(l,2),a=n.length,c=0;c<a;c++)if(o=b(n,c),o<48||o>i)return NaN;return parseInt(n,s)}return+l};if(a(C,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var N,A=function(t){var e=arguments.length<1?0:x(D(t)),r=this;return u(w,r)&&f((function(){_(r)}))?l(Object(e),r,A):e},E=s?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;E.length>R;R++)o(x,N=E[R])&&!o(A,N)&&p(A,N,m(x,N));A.prototype=w,w.constructor=A,c(i,C,A)}},4723:function(t,e,r){"use strict";var s=r(46916),i=r(27007),n=r(19670),a=r(17466),c=r(41340),o=r(84488),l=r(58173),u=r(31530),d=r(97651);i("match",(function(t,e,r){return[function(e){var r=o(this),i=void 0==e?void 0:l(e,t);return i?s(i,e,r):new RegExp(e)[t](c(r))},function(t){var s=n(this),i=c(t),o=r(e,s,i);if(o.done)return o.value;if(!s.global)return d(s,i);var l=s.unicode;s.lastIndex=0;var v,f=[],h=0;while(null!==(v=d(s,i))){var m=c(v[0]);f[h]=m,""===m&&(s.lastIndex=u(i,a(s.lastIndex),l)),h++}return 0===h?null:f}]}))},37662:function(t,e,r){"use strict";r.d(e,{Ef:function(){return c},Y_:function(){return l},e9:function(){return s},fS:function(){return a},i_:function(){return i},o1:function(){return n},og:function(){return o}});r(41539),r(54747),r(74916),r(15306);function s(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}var i=function(t,e,r){switch(e){case"H":case"h":if("H"===r||"h"===r)return t;if("M"===r||"m"===r)return 60*t;if("S"===r||"s"===r)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return t/60;if("M"===r||"m"===r)return t;if("S"===r||"s"===r)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return t/60/60;if("M"===r||"m"===r)return t/60;if("S"===r||"s"===r)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},n=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",s=[];return t.forEach((function(t){var i=t[r].indexOf(e);i>-1&&s.push(t)})),s},a=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(t){var e=[];for(var r in t)e.push(t[r]);return e.reverse()},o=function(t,e){console.log("importType :>> ",t);var r="";return"default"!==t&&"a"!==t||(r="fj"),"gt"===t&&(r="gt"),r===e},l=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=8754-legacy.27a7aae0.js.map