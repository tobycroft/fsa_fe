(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2634],{62634:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"active-dynamic-details-container"},[r("div",{staticClass:"background-box"}),r("div",{staticClass:"container"},[r("div",{staticClass:"header flex-start"},[r("div",{staticClass:"header-left"},[e._v(e._s(e.dayCmp))]),r("div",{staticClass:"header-right"},[r("van-tag",{attrs:{type:"primary",size:"large "}},[e._v(e._s(e.areaCmp))]),r("p",{staticClass:"header-date-style"},[e._v(" "+e._s(e.yearsMonthsCmp)+" "+e._s(e.weekCmp)+" "+e._s(e.timeCmp)+" "+e._s(e.activityTimeCmp)+"小时 ")])],1)]),r("Card",{staticClass:"basic-infor-box"},[r("div",{staticClass:"basic-info-headre"},[r("p",{staticClass:"basic-info-title"},[e._v(e._s(e.eventDetails.title))]),e.eventDetails.dataunit_info.length>0?r("div",{staticClass:"tag-box-style"},e._l(e.eventDetails.dataunit_info,(function(t){return r("van-tag",{key:t.id,staticClass:"tag-style",attrs:{type:"primary",size:"medium"}},[e._v(e._s(t.name))])})),1):e._e()]),r("div",{staticClass:"basic-info-main"},[r("div",{staticClass:"basic-info-main-row flex-start"},[r("p",{staticClass:"basic-info-main-row-label"},[e._v("举办单位:")]),r("p",{staticClass:"basic-info-main-row-value"},[e._v(" "+e._s(e.eventDetails&&e.eventDetails.host_info?e.eventDetails.host_info.name:"")+" ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"basic-info-main-row flex-start"},[r("p",{staticClass:"basic-info-main-row-label"},[e._v("维护方:")]),r("p",{staticClass:"basic-info-main-row-value"},[e._v(" "+e._s(e.lecturePermissions.name?e.lecturePermissions.name:"暂无维护方")+" ")])])])]),r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[e._v("主讲人")]),r("Card",{staticClass:"card-style flex-start"},[r("Avatar",{attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.instructor_info.img),width:120,height:161}}),r("p",{staticClass:"username-style"},[e._v(" "+e._s(e.eventDetails.instructor_info.name)+" ")])],1)],1),!!e.record2List>0?r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[e._v("现场照片")]),r("Card",{staticClass:"card-style"},[r("ul",{staticClass:"flex flex-wrap"},e._l(e.record2List,(function(t,s){return r("li",{key:s,staticClass:"card-photo-style"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.record2List.length>0,expression:"record2List.length > 0"}],attrs:{imgUrl:e.handleImgEmptyUrl(t),width:200,height:200}})],1)})),0),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.record2List>0,expression:"!record2List > 0"}]})],1)],1):e._e(),e.eventDetails.file1?r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[e._v("举办单位反馈表&主讲人承诺书")]),r("div",{staticClass:"flex"},[r("Card",{staticClass:"card-style card-style-average flex-center"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.eventDetails.file1,expression:"eventDetails.file1"}],staticClass:"card-photo-style",attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.file1),width:240,height:340}}),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.eventDetails.file1,expression:"!eventDetails.file1"}]})],1),r("Card",{staticClass:"card-style card-style-average flex-center"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.eventDetails.file2,expression:"eventDetails.file2"}],staticClass:"card-photo-style",attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.file2),width:240,height:340}}),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.eventDetails.file2,expression:"!eventDetails.file2"}]})],1)],1)]):e._e(),e.eventDetails.poster_img?r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[e._v("活动海报")]),r("Card",{staticClass:"card-style flex-center"},[r("Avatar",{directives:[{name:"show",rawName:"v-show",value:e.eventDetails.poster_img,expression:"eventDetails.poster_img"}],attrs:{imgUrl:e.handleImgEmptyUrl(e.eventDetails.poster_img),width:240,height:340}}),r("NoRecord",{directives:[{name:"show",rawName:"v-show",value:!e.eventDetails.poster_img,expression:"!eventDetails.poster_img"}]})],1)],1):e._e(),e._e()],1)])},a=[],i=r(16198),n=(r(35666),r(41539),r(78783),r(33948),r(92222),r(9653),r(74916),r(4723),r(39714),r(76711)),o={components:{Card:function(){return r.e(4821).then(r.bind(r,53314))},Avatar:function(){return r.e(3823).then(r.bind(r,72719))},Logo:function(){return r.e(2226).then(r.bind(r,12860))},NoRecord:function(){return r.e(5847).then(r.bind(r,35847))}},computed:{areaCmp:function(){return"".concat(this.eventDetails.city).concat(this.eventDetails.street)},yearsMonthsCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:yyyy/mm")},weekCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dddd")},dayCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:dd")},timeCmp:function(){return this.$dateFormat(this.eventDetails.start_date,"UTC:HH:MM")},activityTimeCmp:function(){return Number((0,n.i_)(this.eventDetails.duration,"s","h").toString().match(/^\d+(?:\.\d{0,2})?/))}},data:function(){return{show:!1,id:null,eventDetails:{instructor_info:{}},lecturePermissions:{},record2List:[]}},created:function(){this.id=this.$route.query.id,this.eventDetailsAPI(this.id),this.lecturePermissionsAPI(this.id),this.lectureRecord2ListAPI(this.id)},methods:{handleImgEmptyUrl:function(e){return e||""},eventDetailsAPI:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={id:e},r.next=3,t.$request("lecture.eventDetails",s);case 3:a=r.sent,console.log("讲座模块-获取信息(活动详情)API_res :>> ",a),t.eventDetails=a;case 6:case"end":return r.stop()}}),r)})))()},lecturePermissionsAPI:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={lid:e},r.next=3,t.$request("lecture.lecturePermissions",s);case 3:a=r.sent,console.log("讲座模块-权限API_res :>> ",a),t.lecturePermissions=a;case 6:case"end":return r.stop()}}),r)})))()},lectureRecord2ListAPI:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={lid:e},r.next=3,t.$request("lecture.lectureRecord2List",s);case 3:a=r.sent,console.log("记录2列表API_res :>> ",a),t.record2List=a[1];case 6:case"end":return r.stop()}}),r)})))()}}},c=o,l=r(1001),u=(0,l.Z)(c,s,a,!1,null,"1a0d6458",null),d=u.exports},53111:function(e,t,r){var s=r(1702),a=r(84488),i=r(41340),n=r(81361),o=s("".replace),c="["+n+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e){return function(t){var r=i(a(t));return 1&e&&(r=o(r,l,"")),2&e&&(r=o(r,u,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},50863:function(e,t,r){var s=r(1702);e.exports=s(1..valueOf)},81361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(e,t,r){"use strict";var s=r(19781),a=r(17854),i=r(1702),n=r(54705),o=r(31320),c=r(92597),l=r(79587),u=r(47976),d=r(52190),v=r(57593),f=r(47293),h=r(8006).f,m=r(31236).f,p=r(3070).f,g=r(50863),_=r(53111).trim,C="Number",w=a[C],y=w.prototype,x=a.TypeError,b=i("".slice),D=i("".charCodeAt),I=function(e){var t=v(e,"number");return"bigint"==typeof t?t:N(t)},N=function(e){var t,r,s,a,i,n,o,c,l=v(e,"number");if(d(l))throw x("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=_(l),t=D(l,0),43===t||45===t){if(r=D(l,2),88===r||120===r)return NaN}else if(48===t){switch(D(l,1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(i=b(l,2),n=i.length,o=0;o<n;o++)if(c=D(i,o),c<48||c>a)return NaN;return parseInt(i,s)}return+l};if(n(C,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var E,A=function(e){var t=arguments.length<1?0:w(I(e)),r=this;return u(y,r)&&f((function(){g(r)}))?l(Object(t),r,A):t},U=s?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;U.length>R;R++)c(w,E=U[R])&&!c(A,E)&&p(A,E,m(w,E));A.prototype=y,y.constructor=A,o(a,C,A)}},4723:function(e,t,r){"use strict";var s=r(46916),a=r(27007),i=r(19670),n=r(17466),o=r(41340),c=r(84488),l=r(58173),u=r(31530),d=r(97651);a("match",(function(e,t,r){return[function(t){var r=c(this),a=void 0==t?void 0:l(t,e);return a?s(a,t,r):new RegExp(t)[e](o(r))},function(e){var s=i(this),a=o(e),c=r(t,s,a);if(c.done)return c.value;if(!s.global)return d(s,a);var l=s.unicode;s.lastIndex=0;var v,f=[],h=0;while(null!==(v=d(s,a))){var m=o(v[0]);f[h]=m,""===m&&(s.lastIndex=u(a,n(s.lastIndex),l)),h++}return 0===h?null:f}]}))},76711:function(e,t,r){"use strict";r.d(t,{Ef:function(){return c},e9:function(){return s},fS:function(){return o},i_:function(){return i},o1:function(){return n},rm:function(){return a}});r(41539),r(54747),r(74916),r(15306);function s(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var a=function(e,t){var r=new Date(Date.parse(e)),s=new Date(Date.parse(t));return r>s},i=function(e,t,r){switch(t){case"H":case"h":if("H"===r||"h"===r)return e;if("M"===r||"m"===r)return 60*e;if("S"===r||"s"===r)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return e/60;if("M"===r||"m"===r)return e;if("S"===r||"s"===r)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return e/60/60;if("M"===r||"m"===r)return e/60;if("S"===r||"s"===r)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},n=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",s=[];return e.forEach((function(e){var a=e[r].indexOf(t);a>-1&&s.push(e)})),s},o=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(e){var t=[];for(var r in e)t.push(e[r]);return t.reverse()}}}]);
//# sourceMappingURL=2634-legacy.88b5de4f.js.map