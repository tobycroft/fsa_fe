(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7529],{67529:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lecturer-home-container"},[i("div",{staticClass:"background-box"}),i("main",[i("LecturerInfo"),i("div",{staticClass:"card-button-box flex"},[i("CardButton",{attrs:{title:"历史活动补录",describe:"过往活动 添加记录"},on:{click:function(e){return t.$router.push("/historicalEventsCollection")}}}),i("CardButton",{attrs:{color:"#E0E6F9",title:"新开活动备案",describe:"新建全新的活动",imgUrl:r(58146)},nativeOn:{click:function(e){return t.$router.push("/newActivities")}}})],1),i("div",{staticClass:"my-activities-box"},[i("div",{staticClass:"my-activities-header-box flex"},[i("p",{staticClass:"title-style"},[t._v(" 我的活动 "),t.lectureListCount?[t._v(" ("+t._s(t.lectureListCount)+")")]:t._e()],2),i("van-popover",{attrs:{trigger:"click",actions:t.actions},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[i("van-button",{staticClass:"filter-btn-style",attrs:{round:""}},[i("van-image",{staticClass:"filter-icon-style",attrs:{src:r(43455)}}),t._v(" "+t._s(t.searchParams.str)+" ")],1)]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}})],1),i("ul",{staticClass:"my-activitie-list"},t._l(t.lectureList,(function(e,r){return i("li",{key:r,staticClass:"my-activitie-item"},[i("MyActivities",{attrs:{lecture:e},nativeOn:{click:function(r){return t.goActivityDetail(e.id)}}})],1)})),0)])],1)])},n=[],s=r(4367),c=r(16198),o=(r(35666),r(41539),r(78783),r(33948),r(74916),r(15306),{components:{LecturerInfo:function(){return r.e(612).then(r.bind(r,40612))},CardButton:function(){return r.e(2551).then(r.bind(r,12551))},MyActivities:function(){return r.e(2203).then(r.bind(r,52203))}},computed:{lecturerInfo:function(){return this.$store.state.lecturer.lecturerInfo}},data:function(){return{showPopover:!1,actions:[{text:"全部"},{text:"已备案"},{text:"已提交"}],searchParams:{limit:10,page:1},lectureList:[],lectureListCount:0,aid:null,iid:null}},watch:{$route:function(t,e){"/lecturerHome"===t.path&&this.initData()}},created:function(){this.initData();var t=this.$store.getters.lecturerInfo;this.aid=t.aid,this.iid=t.id},methods:{goActivityDetail:function(t){this.$router.push("/activityDetail?id="+t)},initData:function(){var t=this;this.aid=this.$store.getters.associationInfo.id,this.iid=this.$store.getters.accountIdInfo.iid,this.$store.dispatch("lecturer/getLecturerInfo",this.aid).then((function(e){404!==e.code?(1!==e.status&&t.$dialog.alert({title:"暂无权限",message:"当前账户暂无导师权限!"}).then((function(){t.$router.replace({path:"/"})})),t.getLectureList(),t.getLectureListCount()):t.$router.replace("/selectInfo")}))},getLectureList:function(){var t=this;return(0,c.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("lecture.lectureInstructorList",(0,s.Z)((0,s.Z)({},t.searchParams),{},{aid:t.aid,iid:t.iid}));case 2:r=e.sent,console.log("获取活动列表_res :>> ",r),t.lectureList=r.data;case 5:case"end":return e.stop()}}),e)})))()},getLectureListCount:function(){var t=this;return(0,c.Z)(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.getters.associationInfo.id,e.next=3,t.$request("lecture.listLectureCount",{type:"all",filter:"instructor",iid:t.iid,aid:r});case 3:i=e.sent,t.lectureListCount=i;case 5:case"end":return e.stop()}}),e)})))()},onSelect:function(t){this.searchParams.str=t.text,this.searchParams.page=1,this.getLectureList(),this.getLectureListCount()},goToActivitiesComplement:function(){this.$dialog.alert({title:"公告",message:"数据正在升级维护中，暂不开放"}).then((function(){}))}}}),a=o,u=r(1001),l=(0,u.Z)(a,i,n,!1,null,"ca686a14",null),f=l.exports},38880:function(t,e,r){var i=r(82109),n=r(47293),s=r(45656),c=r(31236).f,o=r(19781),a=n((function(){c(1)})),u=!o||a;i({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return c(s(t),e)}})},49337:function(t,e,r){var i=r(82109),n=r(19781),s=r(53887),c=r(45656),o=r(31236),a=r(86135);i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,i=c(t),n=o.f,u=s(i),l={},f=0;while(u.length>f)r=n(i,e=u[f++]),void 0!==r&&a(l,e,r);return l}})},43455:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAYAAABYQRdDAAAAAXNSR0IArs4c6QAAAyFJREFUSEvtlUtoXVUUhv9/5Xhyk4BSfJSACoKU4L0ke+8LijM7dFBBfKDpQCmWEhHSga3UV0sb8DUR1JEtETsUkY4cOahFUOl5JCYS08QG8XWNhiQcQ6/J2Ut2SS5Vb9BbJw5cs332Wt/Ze6+1/sV6vd7rvT8hIsOqehNJQed2SVW/BHAwTdNzNMYcFJGXAVwDgME6ZaqqkvSqerEoirvpnPuCZM17fwHAi977ZqdQEbEi8gKAsizLJwL0V5LhCU4vLi4eiKJIO4X29fXdXKlUwqHgvT8SoJ+SvMt7/62q7snzPO8QGjnnXiL5dIgry/J+WmsfJXmSZLeqfrS2tjY8MzPzyz8FG2OGReR1kjcC+KTRaNzHer1+nff+OMmnSDZV9a00TZ8D8NvfgY0xRkTeBVAD8IP3fm+e52cvZ9o5d7uqvi0i9wBoeO8PZ1kWnLe1gYGB63t7e8dJ3quq6wAOra6unpybm2tulQ8HBwd3R1EUnG5V1UkA+9I0TdpRq9VqHMfxMZKjACoAThVF8ezs7OzPwb9Vk8Gxu7t7P4BXSFa892fW19efnJqaavwZbIzZKyKvkexX1XNlWY5MTExMb/n9odDDlXp6esZEZL+qhi4Zy7IsNEbLarXaLXEcf0CyrqrfeO9H8jz/EECrFP/SPdVq9Y44jsdF5E5VvdBsNmvT09OtpIVqEZHTALrKsjxUFMUb4R2v/HHblrTWHg8doqp+Y2Ojf3Jy8qetIGvt8yJyIqyXl5d3zs/Pt/baXv+KwH0icmqzmG/L83xha885d5TksbBOkqTtodp+dM49TnL8f2gQiP/wmxpjHuvq6npnM1G78jy/rJWbOnF12bfWPkDyvTBaVPWRpaWlMwsLC5f+FXRoaGhXFEVnVXUngK/KshxdWVn5OICdc2MkgzSWSZJE7QRn2yFnrX0GwGGSO1T1O1U94L0/H0XRmyQfUtUf0zTt7wgapqu19oiIjKrqDgCLAD4HsBtAD4D30zR9uFNo8A/gERE5CuDaTakMo/h7VX0wy7LzVwMNMWKM2SMiYdzcoKpfk3w1SZLPthsLvwM8CqfyjlxsbgAAAABJRU5ErkJggg=="},58146:function(t,e,r){"use strict";t.exports=r.p+"img/activities_record.b285aa93.png"},4367:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});r(47941),r(82526),r(57327),r(41539),r(38880),r(54747),r(49337);var i=r(23796);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=7529-legacy.eaef8e58.js.map