(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6792],{36792:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"data-show-container"},[r("van-swipe",{ref:"swipe",attrs:{"show-indicators":!1,immediate:!1},on:{change:t.changeSwipe}},[r("van-swipe-item",[r("TopList",{staticClass:"card-row-style",attrs:{title:"近期宣讲区域列表",list:t.recentPreachAreaListCmp,showSort:!1},on:{click:t.goToPreachingArea}})],1),r("van-swipe-item",[r("TopList",{staticClass:"card-row-style",attrs:{title:"近期承办单位列表",list:t.topListUndertakeCmp,showSort:!1},on:{click:t.goToRecentUndertakingUnit}})],1),r("van-swipe-item",[r("TableList",{staticClass:"card-row-style",attrs:{title:"近期宣讲详情",columns:t.cloumnListRecentAboutDetails,list:t.preachListRecentAboutDetailsCmp,showSort:!1},on:{click:t.goToRecentAboutDetails}})],1),r("van-swipe-item",[r("TopList",{attrs:{title:"宣讲区域覆盖人数排名",list:t.topListCoverCmp},on:{click:t.goToPreachRegionalCoverageNumberRank}})],1),r("van-swipe-item",[r("TableList",{staticClass:"card-row-style",attrs:{title:"授课老师宣讲数据排名",columns:t.cloumnListPreach,list:t.instructorListCmp},on:{click:t.goToTeacherSpeakingRank}})],1),r("van-swipe-item",[r("ColumnChart",{staticClass:"card-row-style",attrs:{title:"新增宣讲覆盖人数",list:t.dateCoverListCmp},on:{click:t.goToAddPreachCovers}})],1)],1)],1)},i=[],o=r(48534),s=r(66347),a=r(95082),c=(r(35666),r(41539),r(78783),r(33948),r(9653),r(54747),r(68309),r(92222),r(37662)),u={components:{TabsNum:function(){return r.e(7529).then(r.bind(r,56173))},TopList:function(){return r.e(5944).then(r.bind(r,5944))},ColumnChart:function(){return r.e(4095).then(r.bind(r,81662))},TableList:function(){return r.e(2916).then(r.bind(r,62916))}},props:{active:{type:Number,default:0,required:!0}},computed:{recentPreachAreaListCmp:function(){var t=this,e=[];return this.recentList.forEach((function(r){e.push({label:t.handleAreaText(r),value:t.handleDateFormat(r.start_date)})})),e},topListUndertakeCmp:function(){var t=this,e=[];return this.recentList.forEach((function(r){e.push({label:r.host_info.name,value:t.handleDateFormat(r.start_date)})})),console.log("近期承办单位列表arr :>> ",e),e},preachListRecentAboutDetailsCmp:function(){var t=[];return this.recentList.forEach((function(e){t.push((0,a.Z)((0,a.Z)({},e.instructor_info),{},{title:e.title,visitor:"".concat(e.visitor,"人")}))})),console.log("近期宣讲详情arr :>> ",t),t},topListCoverCmp:function(){var t=this,e=[];return this.coverList.forEach((function(r){console.log("item :>> ",r);var n,i=(0,s.Z)(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.name===r.city)return void(o.value+=r.sum_visitor)}}catch(a){i.e(a)}finally{i.f()}e.push({label:t.handleAreaText(r),value:"".concat(r.sum_visitor,"人")})})),console.log("排行榜:覆盖arr :>> ",e),e},instructorListCmp:function(){console.log("debug :>> ",this.instructorList);var t=[];for(var e in this.instructorList)t.push({rankingName:"第".concat(parseInt(e)+1,"名"),name:this.instructorList[e].instructor_info?this.instructorList[e].instructor_info.name:"",visitorStr:"".concat(this.instructorList[e].instructor_info?this.instructorList[e].sum_visitor:0,"人"),roundStr:"".concat(this.instructorList[e].host_time,"场")});return t},dateCoverListCmp:function(){var t=this,e=[];return this.dateCoverList.forEach((function(r){e.push({label:t.$dateFormat(r.g_date,"m/dd"),num:r.sum_visitor}),console.log("arr :>> ",e)})),e}},data:function(){return{cloumnListPreach:[{label:"姓名",keyName:"name"},{label:"听课人数",keyName:"visitorStr"},{label:"场次",keyName:"roundStr"}],topListUndertake:[{label:"福州市台江区上海街道社区",value:"2022年2月25日"},{label:"福州市台江区上海街道社区",value:"2022年2月25日"},{label:"福州市台江区上海街道社区",value:"2022年2月25日"},{label:"福州市台江区上海街道社区",value:"2022年2月25日"}],cloumnListRecentAboutDetails:[{label:"宣讲主题",keyName:"title"},{label:"主讲人",keyName:"name",width:70},{label:"听课人数",keyName:"visitor",width:80}],recentList:[],coverList:[],instructorList:[],dateCoverList:[]}},created:function(){this.recentListAPI(),this.coverListAPI(),this.instructorListAPI(),this.dateCoverListAPI()},methods:{changeSwipe:function(t){this.$emit("change",t)},activeSwipe:function(t){this.$refs.swipe.swipeTo(t)},recentListAPI:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.getters.associationInfo.id,n={aid:r},e.next=4,t.$request("lecture.recentList",n);case 4:i=e.sent,console.log("近期列表API_res :>> ",i),t.recentList=i;case 7:case"end":return e.stop()}}),e)})))()},coverListAPI:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.getters.associationInfo.id,n=(0,c.Y_)(t.$store.getters.associationInfo.model_type),i={aid:r,type:n},e.next=5,t.$request("common.coverList",i);case 5:o=e.sent,console.log("覆盖列表API_res :>> ",o),t.coverList=o;case 8:case"end":return e.stop()}}),e)})))()},instructorListAPI:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.getters.associationInfo.id,n={aid:r},e.next=4,t.$request("lecture.instructorList",n);case 4:i=e.sent,console.log("授课老师排名列表API_res :>> ",i),t.instructorList=i;case 7:case"end":return e.stop()}}),e)})))()},dateCoverListAPI:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.getters.associationInfo.id,n={type:"none",aid:r},e.next=4,t.$request("lecture.dateCoverList",n);case 4:i=e.sent,console.log("日期覆盖列表API_res :>> ",i),t.dateCoverList=i;case 7:case"end":return e.stop()}}),e)})))()},handleDateFormat:function(t){return this.$dateFormat(t,"yyyy年mm月dd日")},handleAreaText:function(t){var e=this.$store.getters.associationInfo.model_type;switch(e){case"district":return"".concat(t.district).concat(t.street);default:return"".concat(t.province).concat(t.city).concat(t.district).concat(t.street)}},goToPreachingArea:function(){this.$router.push({path:"/preachingArea"})},goToRecentUndertakingUnit:function(){this.$router.push({path:"/recentUndertakingUnit"})},goToRecentAboutDetails:function(){this.$router.push({path:"/recentAboutDetails"})},goToPreachRegionalCoverageNumberRank:function(){this.$router.push({path:"/preachRegionalCoverageNumberRank"})},goToTeacherSpeakingRank:function(){this.$router.push({path:"/teacherSpeakingRank"})},goToAddPreachCovers:function(){this.$router.push({path:"/addPreachCovers"})}}},l=u,h=r(43736),f=(0,h.Z)(l,n,i,!1,null,"719b21a8",null),p=f.exports},53111:function(t,e,r){var n=r(1702),i=r(84488),o=r(41340),s=r(81361),a=n("".replace),c="["+s+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(t){return function(e){var r=o(i(e));return 1&t&&(r=a(r,u,"")),2&t&&(r=a(r,l,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},50863:function(t,e,r){var n=r(1702);t.exports=n(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,r){"use strict";var n=r(19781),i=r(17854),o=r(1702),s=r(54705),a=r(31320),c=r(92597),u=r(79587),l=r(47976),h=r(52190),f=r(57593),p=r(47293),m=r(8006).f,v=r(31236).f,d=r(3070).f,g=r(50863),b=r(53111).trim,L="Number",w=i[L],y=w.prototype,C=i.TypeError,k=o("".slice),A=o("".charCodeAt),I=function(t){var e=f(t,"number");return"bigint"==typeof e?e:P(e)},P=function(t){var e,r,n,i,o,s,a,c,u=f(t,"number");if(h(u))throw C("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=b(u),e=A(u,0),43===e||45===e){if(r=A(u,2),88===r||120===r)return NaN}else if(48===e){switch(A(u,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=k(u,2),s=o.length,a=0;a<s;a++)if(c=A(o,a),c<48||c>i)return NaN;return parseInt(o,n)}return+u};if(s(L,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var _,T=function(t){var e=arguments.length<1?0:w(I(t)),r=this;return l(y,r)&&p((function(){g(r)}))?u(Object(e),r,T):e},N=n?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;N.length>R;R++)c(w,_=N[R])&&!c(T,_)&&d(T,_,v(w,_));T.prototype=y,y.constructor=T,a(i,L,T)}},38880:function(t,e,r){var n=r(82109),i=r(47293),o=r(45656),s=r(31236).f,a=r(19781),c=i((function(){s(1)})),u=!a||c;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},49337:function(t,e,r){var n=r(82109),i=r(19781),o=r(53887),s=r(45656),a=r(31236),c=r(86135);n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=s(t),i=a.f,u=o(n),l={},h=0;while(u.length>h)r=i(n,e=u[h++]),void 0!==r&&c(l,e,r);return l}})},95082:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(47941),r(82526),r(57327),r(41539),r(38880),r(54747),r(49337);var n=r(82482);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=6792-legacy.e7fa8547.js.map