"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7326],{27326:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lecturer-home-container"},[i("div",{staticClass:"background-box"}),i("main",[i("HostInfo",{attrs:{hostInfo:t.hostInfo}}),i("div",{staticClass:"card-button-box flex"},[i("CardButton",{attrs:{title:"历史活动补录",describe:"过往活动 添加记录"},on:{click:function(e){return t.$router.push({path:"/historicalEventsCollection",query:{host:!0}})}}}),i("CardButton",{attrs:{color:"#E0E6F9",title:"新开活动备案",describe:"新建全新的活动",imgUrl:s(58146)},nativeOn:{click:function(e){return t.$router.push("/newActivitiesHost")}}})],1),i("div",{staticClass:"my-activities-box"},[i("div",{staticClass:"my-activities-header-box flex"},[i("p",{staticClass:"title-style"},[t._v(" 我的活动 "),t.lectureListCount?[t._v(" ("+t._s(t.lectureListCount)+")")]:t._e()],2),i("van-popover",{attrs:{trigger:"click",actions:t.actions},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[i("van-button",{staticClass:"filter-btn-style",attrs:{round:""}},[i("van-image",{staticClass:"filter-icon-style",attrs:{src:s(43455)}}),t._v(" "+t._s(t.searchParams.str)+" ")],1)]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}})],1),i("ul",{staticClass:"my-activitie-list"},t._l(t.lectureList,(function(e,s){return i("li",{key:s,staticClass:"my-activitie-item"},[i("MyActivities",{attrs:{lecture:e},nativeOn:{click:function(s){return t.goActivityDetail(e.id)}}})],1)})),0)])],1)])},r=[],o={components:{HostInfo:()=>s.e(4751).then(s.bind(s,94751)),CardButton:()=>s.e(9919).then(s.bind(s,89919)),MyActivities:()=>s.e(2605).then(s.bind(s,92605))},computed:{lecturerInfo(){return this.$store.state.lecturer.lecturerInfo}},data(){return{showPopover:!1,actions:[{text:"全部"},{text:"已备案"},{text:"已提交"}],searchParams:{limit:10,page:1},lectureList:[],lectureListCount:0,aid:null,iid:null,hid:null,hostInfo:{}}},watch:{$route(t,e){"/lecturerHome"===t.path&&this.initData()}},created(){this.initData();const t=this.$store.getters.lecturerInfo,e=this.$store.getters.associationInfo;this.aid=e.id,this.iid=t.id},methods:{goActivityDetail(t){this.$router.push({path:"/activityDetail",query:{id:t,type:"host"}})},initData(){this.aid=this.$store.getters.associationInfo.id,this.iid=this.$store.getters.accountIdInfo.iid,this.$store.getters.hostMenberMe||this.$dialog.alert({title:"暂无权限",message:"当前账户暂无主办方管理权限!"}).then((()=>{this.$router.replace({path:"/"})})),this.hid=this.$store.getters.hostMenberMe.hid,this.$store.dispatch("host/hostInfoGetAPI",this.hid).then((t=>{console.log("主办方单位信息_res :>> ",t),this.hostInfo=t,this.getLectureList(),this.getLectureListCount()}))},async getLectureList(){const t=await this.$request("common.listLecture",{...this.searchParams,aid:this.aid,iid:this.iid,hid:this.$store.getters.hostMenberMe.hid,type:"host"});this.lectureList=t},async getLectureListCount(){const t=this.$store.getters.associationInfo.id,e=await this.$request("lecture.listLectureCount",{type:"all",filter:"host",hid:this.hid,aid:t});this.lectureListCount=e},onSelect(t){this.searchParams.str=t.text,this.searchParams.page=1,this.getLectureList(),this.getLectureListCount()},goToActivitiesComplement(){this.$dialog.alert({title:"公告",message:"数据正在升级维护中，暂不开放"}).then((()=>{}))}}},a=o,n=s(1001),c=(0,n.Z)(a,i,r,!1,null,"9d443310",null),h=c.exports},43455:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAYAAABYQRdDAAAAAXNSR0IArs4c6QAAAyFJREFUSEvtlUtoXVUUhv9/5Xhyk4BSfJSACoKU4L0ke+8LijM7dFBBfKDpQCmWEhHSga3UV0sb8DUR1JEtETsUkY4cOahFUOl5JCYS08QG8XWNhiQcQ6/J2Ut2SS5Vb9BbJw5cs332Wt/Ze6+1/sV6vd7rvT8hIsOqehNJQed2SVW/BHAwTdNzNMYcFJGXAVwDgME6ZaqqkvSqerEoirvpnPuCZM17fwHAi977ZqdQEbEi8gKAsizLJwL0V5LhCU4vLi4eiKJIO4X29fXdXKlUwqHgvT8SoJ+SvMt7/62q7snzPO8QGjnnXiL5dIgry/J+WmsfJXmSZLeqfrS2tjY8MzPzyz8FG2OGReR1kjcC+KTRaNzHer1+nff+OMmnSDZV9a00TZ8D8NvfgY0xRkTeBVAD8IP3fm+e52cvZ9o5d7uqvi0i9wBoeO8PZ1kWnLe1gYGB63t7e8dJ3quq6wAOra6unpybm2tulQ8HBwd3R1EUnG5V1UkA+9I0TdpRq9VqHMfxMZKjACoAThVF8ezs7OzPwb9Vk8Gxu7t7P4BXSFa892fW19efnJqaavwZbIzZKyKvkexX1XNlWY5MTExMb/n9odDDlXp6esZEZL+qhi4Zy7IsNEbLarXaLXEcf0CyrqrfeO9H8jz/EECrFP/SPdVq9Y44jsdF5E5VvdBsNmvT09OtpIVqEZHTALrKsjxUFMUb4R2v/HHblrTWHg8doqp+Y2Ojf3Jy8qetIGvt8yJyIqyXl5d3zs/Pt/baXv+KwH0icmqzmG/L83xha885d5TksbBOkqTtodp+dM49TnL8f2gQiP/wmxpjHuvq6npnM1G78jy/rJWbOnF12bfWPkDyvTBaVPWRpaWlMwsLC5f+FXRoaGhXFEVnVXUngK/KshxdWVn5OICdc2MkgzSWSZJE7QRn2yFnrX0GwGGSO1T1O1U94L0/H0XRmyQfUtUf0zTt7wgapqu19oiIjKrqDgCLAD4HsBtAD4D30zR9uFNo8A/gERE5CuDaTakMo/h7VX0wy7LzVwMNMWKM2SMiYdzcoKpfk3w1SZLPthsLvwM8CqfyjlxsbgAAAABJRU5ErkJggg=="},58146:function(t,e,s){t.exports=s.p+"img/activities_record.b285aa93.png"}}]);
//# sourceMappingURL=7326.8cedc38f.js.map