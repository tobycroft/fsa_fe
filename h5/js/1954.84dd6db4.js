"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1954],{71954:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"root"},[r("van-search",{attrs:{placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),r("div",{staticClass:"container"},[r("p",{staticClass:"title"},[e._v("全部主讲人("+e._s(e.teacherCount)+")")]),e._l(e.mentorList,(function(t){return r("div",{key:t.id,staticClass:"box-teacher",on:{click:function(r){return e.handleChose(t.id)}}},[r("van-image",{staticClass:"avatar-img",attrs:{src:t.img}}),r("span",{staticClass:"name"},[e._v(e._s(t.name))])],1)}))],2),r("div",{staticClass:"no-more"},[e._v("没有更多了~")]),r("div",{staticClass:"bottom-wrap"},[r("div",{staticClass:"bottom-gap"}),r("div",{staticClass:"btn-bottom",on:{click:e.handleAddTeacher}},[e._v("新建主讲人")])])],1)},s=[],a=r(91742),i=r(76711),o={components:{},data(){return{searchKeyword:"",page:{limit:10,pageNo:1},mentorList:[],aid:""}},computed:{teacherCount(){return this.mentorList.length}},async created(){this.aid=await this.getMemberMe(),this.reqMentorListApi(this.aid)},methods:{onSearch(){this.mentorList=(0,i.o1)(this.mentorList,this.searchKeyword,"name")},handleChose(e){a.Z.$emit("mainTeacherId",e),this.$router.back()},getMemberMe(){return this.$store.getters.associationInfoCurrent.id},async reqMentorListApi(e){const t={aid:e},r=await this.$request("instructor.mentorList",t);console.log("导师列表 :>> ",r),this.mentorList=(0,i.Ef)(r)},handleAddTeacher(){this.$router.push({path:"/adminAddMainTeacher"})},onClear(){console.log("onClear :>> "),this.reqMentorListApi(this.aid)}}},c=o,u=r(1001),h=(0,u.Z)(c,n,s,!1,null,"87f713ce",null),l=h.exports},91742:function(e,t,r){var n=r(20144);t["Z"]=new n["default"]},76711:function(e,t,r){function n(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}r.d(t,{Ef:function(){return c},e9:function(){return n},fS:function(){return o},i_:function(){return a},o1:function(){return i},rm:function(){return s}});const s=(e,t)=>{let r=new Date(Date.parse(e)),n=new Date(Date.parse(t));return r>n},a=(e,t,r)=>{switch(t){case"H":case"h":if("H"===r||"h"===r)return e;if("M"===r||"m"===r)return 60*e;if("S"===r||"s"===r)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return e/60;if("M"===r||"m"===r)return e;if("S"===r||"s"===r)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return e/60/60;if("M"===r||"m"===r)return e/60;if("S"===r||"s"===r)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},i=(e,t,r="name")=>{const n=[];return e.forEach((e=>{const s=e[r].indexOf(t);s>-1&&n.push(e)})),n},o=e=>e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),c=e=>{const t=[];for(const r in e)t.push(e[r]);return t.reverse()}}}]);
//# sourceMappingURL=1954.84dd6db4.js.map