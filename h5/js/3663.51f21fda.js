"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3663],{23663:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lecturer-home-container"},[s("div",{staticClass:"background-box"}),s("main",[s("LecturerInfo"),s("div",{staticClass:"card-button-box flex"},[s("CardButton",{attrs:{title:"历史活动补录",describe:"过往活动 添加记录"},on:{click:function(e){return t.$router.push("/historicalEventsCollection")}}}),s("CardButton",{attrs:{color:"#E0E6F9",title:"新开活动备案",describe:"新建全新的活动",imgUrl:i(58146)},nativeOn:{click:function(e){return t.$router.push("/newActivities")}}})],1),s("div",{staticClass:"my-activities-box"},[s("div",{staticClass:"my-activities-header-box flex"},[s("p",{staticClass:"title-style"},[t._v(" 我的活动 "),t.lectureListCount?[t._v(" ("+t._s(t.lectureListCount)+")")]:t._e()],2),s("van-popover",{attrs:{trigger:"click",actions:t.actions},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[s("van-button",{staticClass:"filter-btn-style",attrs:{round:""}},[s("van-image",{staticClass:"filter-icon-style",attrs:{src:i(43455)}}),t._v(" "+t._s(t.searchParams.str)+" ")],1)]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}})],1),s("ul",{staticClass:"my-activitie-list"},t._l(t.lectureList,(function(e,i){return s("li",{key:i,staticClass:"my-activitie-item"},[s("MyActivities",{attrs:{lecture:e},nativeOn:{click:function(i){return t.goActivityDetail(e.id)}}})],1)})),0)])],1)])},r=[],a={components:{LecturerInfo:()=>i.e(7566).then(i.bind(i,57566)),CardButton:()=>i.e(2551).then(i.bind(i,12551)),MyActivities:()=>i.e(2203).then(i.bind(i,52203))},computed:{lecturerInfo(){return this.$store.state.lecturer.lecturerInfo}},data(){return{showPopover:!1,actions:[{text:"全部"},{text:"已备案"},{text:"已提交"}],searchParams:{limit:10,page:1},lectureList:[],lectureListCount:0,aid:null,iid:null}},watch:{$route(t,e){"/lecturerHome"===t.path&&this.initData()}},created(){this.initData();const t=this.$store.getters.lecturerInfo;this.aid=t.aid,this.iid=t.id},methods:{goActivityDetail(t){this.$router.push("/activityDetail?id="+t)},initData(){this.aid=this.$store.getters.associationInfo.id,this.iid=this.$store.getters.accountIdInfo.iid,this.$store.dispatch("lecturer/getLecturerInfo",this.aid).then((t=>{404!==t.code?(1!==t.status&&this.$dialog.alert({title:"暂无权限",message:"当前账户暂无导师权限!"}).then((()=>{this.$router.replace({path:"/"})})),this.getLectureList(),this.getLectureListCount()):this.$router.replace("/selectInfo")}))},async getLectureList(){const t=await this.$request("lecture.lectureInstructorList",{...this.searchParams,aid:this.aid,iid:this.iid});this.lectureList=t},async getLectureListCount(){const t=this.$store.getters.associationInfo.id,e=await this.$request("lecture.listLectureCount",{type:"all",filter:"instructor",iid:this.iid,aid:t});this.lectureListCount=e},onSelect(t){this.searchParams.str=t.text,this.searchParams.page=1,this.getLectureList(),this.getLectureListCount()},goToActivitiesComplement(){this.$dialog.alert({title:"公告",message:"数据正在升级维护中，暂不开放"}).then((()=>{}))}}},n=a,c=i(1001),o=(0,c.Z)(n,s,r,!1,null,"bc54de06",null),u=o.exports},43455:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAYAAABYQRdDAAAAAXNSR0IArs4c6QAAAyFJREFUSEvtlUtoXVUUhv9/5Xhyk4BSfJSACoKU4L0ke+8LijM7dFBBfKDpQCmWEhHSga3UV0sb8DUR1JEtETsUkY4cOahFUOl5JCYS08QG8XWNhiQcQ6/J2Ut2SS5Vb9BbJw5cs332Wt/Ze6+1/sV6vd7rvT8hIsOqehNJQed2SVW/BHAwTdNzNMYcFJGXAVwDgME6ZaqqkvSqerEoirvpnPuCZM17fwHAi977ZqdQEbEi8gKAsizLJwL0V5LhCU4vLi4eiKJIO4X29fXdXKlUwqHgvT8SoJ+SvMt7/62q7snzPO8QGjnnXiL5dIgry/J+WmsfJXmSZLeqfrS2tjY8MzPzyz8FG2OGReR1kjcC+KTRaNzHer1+nff+OMmnSDZV9a00TZ8D8NvfgY0xRkTeBVAD8IP3fm+e52cvZ9o5d7uqvi0i9wBoeO8PZ1kWnLe1gYGB63t7e8dJ3quq6wAOra6unpybm2tulQ8HBwd3R1EUnG5V1UkA+9I0TdpRq9VqHMfxMZKjACoAThVF8ezs7OzPwb9Vk8Gxu7t7P4BXSFa892fW19efnJqaavwZbIzZKyKvkexX1XNlWY5MTExMb/n9odDDlXp6esZEZL+qhi4Zy7IsNEbLarXaLXEcf0CyrqrfeO9H8jz/EECrFP/SPdVq9Y44jsdF5E5VvdBsNmvT09OtpIVqEZHTALrKsjxUFMUb4R2v/HHblrTWHg8doqp+Y2Ojf3Jy8qetIGvt8yJyIqyXl5d3zs/Pt/baXv+KwH0icmqzmG/L83xha885d5TksbBOkqTtodp+dM49TnL8f2gQiP/wmxpjHuvq6npnM1G78jy/rJWbOnF12bfWPkDyvTBaVPWRpaWlMwsLC5f+FXRoaGhXFEVnVXUngK/KshxdWVn5OICdc2MkgzSWSZJE7QRn2yFnrX0GwGGSO1T1O1U94L0/H0XRmyQfUtUf0zTt7wgapqu19oiIjKrqDgCLAD4HsBtAD4D30zR9uFNo8A/gERE5CuDaTakMo/h7VX0wy7LzVwMNMWKM2SMiYdzcoKpfk3w1SZLPthsLvwM8CqfyjlxsbgAAAABJRU5ErkJggg=="},58146:function(t,e,i){t.exports=i.p+"img/activities_record.b285aa93.png"}}]);
//# sourceMappingURL=3663.51f21fda.js.map