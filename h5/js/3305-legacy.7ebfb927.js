"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3305],{93305:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lecturer-info-container flex-start align-start"},[n("Avatar",{attrs:{imgUrl:t.lecturerInfo.img?t.lecturerInfo.img:"https://static.familyeducation.org.cn/fsa/20220801/4b731779096b53ff052a3237ea8888e4.png",width:160,height:215}}),n("div",{staticClass:"lecturer-info-right"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-start"},[n("p",{staticClass:"lecturer-info-username"},[t._v(t._s(t.lecturerInfo.name))]),t.mtidsName?n("IdentityTag",{attrs:{title:t.mtidsName}}):t._e()],1),n("van-button",{staticClass:"editor-btn-style",attrs:{size:"small",round:""},on:{click:t.goToInformationChange}},[n("van-image",{staticClass:"btn-icon-style",attrs:{src:r(30500)}}),t._v(" 编辑资料 ")],1)],1),n("ul",{staticClass:"lecturer-data-list flex-start"},["district"!==t.$store.getters.associationInfo.model_type?n("li",{staticClass:"lecturer-data-item"},[n("p",{staticClass:"item-value"},[t._v(t._s(t.lecturerInfo.area_count))]),n("p",{staticClass:"item-label"},[t._v("巡讲区县")])]):t._e(),n("li",{staticClass:"lecturer-data-item"},[n("p",{staticClass:"item-value"},[t._v(t._s(t.lecturerInfo.lecture_count))]),n("p",{staticClass:"item-label"},[t._v("活动场次")])]),n("li",{staticClass:"lecturer-data-item"},[n("p",{staticClass:"item-value"},[t._v(t._s(t.lecturerInfo.sum_visitor))]),n("p",{staticClass:"item-label"},[t._v("学员人数")])])])])],1)},s=[],a=r(48534),i=(r(35666),r(41539),r(78783),r(33948),r(68309),{components:{Avatar:function(){return r.e(1244).then(r.bind(r,4179))},IdentityTag:function(){return r.e(9226).then(r.bind(r,59226))}},data:function(){return{instructorInfoGet:null,mtidsName:""}},computed:{lecturerInfo:function(){return this.$store.state.lecturer.lecturerInfo}},created:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$store.getters.accountIdInfo.iid,n=t.$store.getters.associationInfo.id,!r||!n){e.next=9;break}return e.next=5,t.instructorInfoGetAPI(n,r);case 5:t.instructorInfoGet=e.sent,s=t.instructorInfoGet.mtid,console.log("instructorInfoGetMtid :>> ",s),s&&t.instructorTitleGetAPI("".concat(s));case 9:case"end":return e.stop()}}),e)})))()},methods:{goToInformationChange:function(){var t=this.$store.getters.lecturerInfo.id;this.$router.push({path:"/speakerInformationChanges",query:{iid:t}})},instructorInfoGetAPI:function(t,e){var r=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={aid:t,id:e},n.next=3,r.$request("instructor.instructorInfoGet",s);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},instructorTitleGetAPI:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={mtid:t},r.next=3,e.$request("instructor.instructorTitleGet",n);case 3:s=r.sent,console.log("res :>> ",s),e.mtidsName=s.name;case 6:case"end":return r.stop()}}),r)})))()}}}),o=i,c=r(43736),u=(0,c.Z)(o,n,s,!1,null,"68de9c80",null),l=u.exports},30500:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARZJREFUOE+t1DFKA0EUBuAvYGHhETyCpaWNYGNnoYWdrRhRK/UEWghGUBAsLBRsApYKtt7Aq6QzoDzJyBgmuxs3U+7CN//+82Y72q0zdHGCm6A6LbzAAkrrEFdtwE/MjQXqtgH3cD0GDqYFj7GIIwxxgF6Gnk8DXiJ6itXH9giNpIFe4LQpmGMpUI7+hqwDo/Q77EyYhuhwP39XBQb2hM2K0foZlSZgEyx6i8P5s0oJ/42Vbso8Hmo+s5gsxcwTLuAFKxWd3WK36romsAlWHJNShzPDUodvWKv4jEbJ8g6/ZoWlhJPAd6yO7mvUco/lmv9nPw6lBAa2jgFilKKWqtNP+wwD/MBStvMrtkZYPN7Ac02y9PrxG/qcOSNoRPqmAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=3305-legacy.7ebfb927.js.map