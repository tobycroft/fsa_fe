"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7566],{57566:function(t,s,e){e.r(s),e.d(s,{default:function(){return n}});var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"lecturer-info-container flex-start align-start"},[i("Avatar",{attrs:{imgUrl:t.lecturerInfo.img?t.lecturerInfo.img:"",width:160,height:215}}),i("div",{staticClass:"lecturer-info-right"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-start"},[i("p",{staticClass:"lecturer-info-username"},[t._v(t._s(t.lecturerInfo.name))]),t.mtidsName?i("div",{staticClass:"identity-tag-style flex-center"},[i("van-image",{staticClass:"identity-tag-icon-style",attrs:{src:e(4156)}}),i("p",{staticClass:"identity-tag-name-style"},[t._v(t._s(t.mtidsName))])],1):t._e()]),i("van-button",{staticClass:"editor-btn-style",attrs:{size:"small",round:""},nativeOn:{click:function(s){return t.$router.push("/speakerInformationChanges")}}},[i("van-image",{staticClass:"btn-icon-style",attrs:{src:e(30500)}}),t._v(" 编辑资料 ")],1)],1),i("ul",{staticClass:"lecturer-data-list flex-start"},[i("li",{staticClass:"lecturer-data-item"},[i("p",{staticClass:"item-value"},[t._v(t._s(t.lecturerInfo.area_count))]),i("p",{staticClass:"item-label"},[t._v("巡讲区县")])]),i("li",{staticClass:"lecturer-data-item"},[i("p",{staticClass:"item-value"},[t._v(t._s(t.lecturerInfo.lecture_count))]),i("p",{staticClass:"item-label"},[t._v("活动场次")])]),i("li",{staticClass:"lecturer-data-item"},[i("p",{staticClass:"item-value"},[t._v(t._s(t.lecturerInfo.sum_visitor))]),i("p",{staticClass:"item-label"},[t._v("学员人数")])])])])],1)},r=[],a={components:{Avatar:()=>e.e(2719).then(e.bind(e,72719))},data(){return{instructorInfoGet:null,mtidsName:""}},computed:{lecturerInfo(){return this.$store.state.lecturer.lecturerInfo}},async created(){const t=this.$store.getters.accountIdInfo.iid,s=this.$store.getters.associationInfo.id;this.instructorInfoGet=await this.instructorInfoGetAPI(s,t);const e=this.instructorInfoGet.mtid;console.log("instructorInfoGetMtid :>> ",e),e&&this.instructorTitleGetAPI(`${e}`)},methods:{async instructorInfoGetAPI(t,s){const e={aid:t,id:s};return await this.$request("instructor.instructorInfoGet",e)},async instructorTitleGetAPI(t){const s={mtid:t},e=await this.$request("instructor.instructorTitleGet",s);console.log("res :>> ",e),this.mtidsName=e.name}}},A=a,l=e(1001),c=(0,l.Z)(A,i,r,!1,null,"52f1d0cf",null),n=c.exports},30500:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARZJREFUOE+t1DFKA0EUBuAvYGHhETyCpaWNYGNnoYWdrRhRK/UEWghGUBAsLBRsApYKtt7Aq6QzoDzJyBgmuxs3U+7CN//+82Y72q0zdHGCm6A6LbzAAkrrEFdtwE/MjQXqtgH3cD0GDqYFj7GIIwxxgF6Gnk8DXiJ6itXH9giNpIFe4LQpmGMpUI7+hqwDo/Q77EyYhuhwP39XBQb2hM2K0foZlSZgEyx6i8P5s0oJ/42Vbso8Hmo+s5gsxcwTLuAFKxWd3WK36romsAlWHJNShzPDUodvWKv4jEbJ8g6/ZoWlhJPAd6yO7mvUco/lmv9nPw6lBAa2jgFilKKWqtNP+wwD/MBStvMrtkZYPN7Ac02y9PrxG/qcOSNoRPqmAAAAAElFTkSuQmCC"},4156:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=7566.e4891a68.js.map