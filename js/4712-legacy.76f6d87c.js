"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4712],{94712:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"root"},[r("van-search",{attrs:{placeholder:"请输入主讲人名字"},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),r("div",{staticClass:"container"},[r("p",{staticClass:"title"},[e._v("全部主讲人("+e._s(e.teacherCount)+")")]),e._l(e.mentorList,(function(t){return r("div",{key:t.id,staticClass:"box-teacher",on:{click:function(r){return e.handleChose(t.id)}}},[r("van-image",{staticClass:"avatar-img",attrs:{src:t.img}}),r("span",{staticClass:"name"},[e._v(e._s(t.name))])],1)}))],2),r("div",{staticClass:"no-more"},[e._v("没有更多了~")]),r("div",{staticClass:"bottom-wrap"},[r("div",{staticClass:"bottom-gap"}),r("div",{staticClass:"btn-bottom",on:{click:e.handleAddTeacher}},[e._v("新建主讲人")])])],1)},a=[],s=r(16198),i=(r(35666),r(91742)),c={components:{},data:function(){return{searchKeyword:"",page:{limit:10,pageNo:1},mentorList:[]}},computed:{teacherCount:function(){return this.mentorList.length}},created:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMemberMe();case 2:r=t.sent,e.reqMentorListApi(r);case 4:case"end":return t.stop()}}),t)})))()},methods:{handleChose:function(e){i.Z.$emit("mainTeacherId",e),this.$router.back()},getMemberMe:function(){return this.$store.getters.accountIdInfo.aid},reqMentorListApi:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={aid:e},r.next=3,t.$request("instructor.mentorList",n);case 3:a=r.sent,console.log("导师列表 :>> ",a),t.mentorList=a;case 6:case"end":return r.stop()}}),r)})))()},handleAddTeacher:function(){this.$router.push({path:"/adminAddMainTeacher"})}}},o=c,u=r(1001),h=(0,u.Z)(o,n,a,!1,null,"86557306",null),l=h.exports},91742:function(e,t,r){var n=r(20144);t["Z"]=new n["default"]}}]);
//# sourceMappingURL=4712-legacy.76f6d87c.js.map