"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9284],{29284:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"members-audit-container"},[i("header",[i("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),i("main",[i("van-tabs",{staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("van-tab",{attrs:{title:"审核列表("+e.reviewList.length+")"}},[i("ul",{staticClass:"review-list"},[e._l(e.reviewList,(function(t,s){return i("li",{key:s,staticClass:"review-list-item"},[i("ReviewListRow",{attrs:{source:t,showOperation:""},on:{fail:function(i){return e.verifydenyAPI(t.instructor_info.iid)},success:function(i){return e.verifyApproveAPI(t.instructor_info.iid)},click:function(i){return e.goToDetail(t)}}})],1)})),i("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.reviewList.length<=0,expression:"reviewList.length <= 0"}]})],2)]),i("van-tab",{attrs:{title:"已审核"}},[i("ul",{staticClass:"review-list"},[e._l(e.approvedList,(function(t,s){return i("li",{key:s,staticClass:"review-list-item"},[i("ReviewListRow",{attrs:{status:""},on:{click:function(i){return e.goToDetail(t)}}})],1)})),i("NoRecord",{directives:[{name:"show",rawName:"v-show",value:e.approvedList.length<=0,expression:"approvedList.length <= 0"}]})],2)])],1)],1)])},r=[],n=i(76711),o={components:{ReviewListRow:()=>i.e(7607).then(i.bind(i,77607)),NoRecord:()=>i.e(5847).then(i.bind(i,35847))},data(){return{keyword:"",active:2,aid:"",reviewList:[],approvedList:[]}},async created(){await this.getMemberMe(),this.initListData()},methods:{async verifyApproveAPI(e){const t={iid:e,mtids:0},i=await this.$request("association.verifyApprove",t);console.log("成员审核-通过_APIres :>> ",i),this.instructorVerifyListAPI(this.aid,1)},async verifydenyAPI(e){const t={iid:e,mtids:0},i=await this.$request("association.verifyApprove",t);console.log("成员审核-失败API_res :>> ",i),this.instructorVerifyListAPI(this.aid,0)},goToDetail(e){console.log("row :>> ",e),this.$router.push({path:"/membersAuditDetails",query:{iid:e.instructor_info.iid,aid:e.aid}})},async getMemberMe(){this.aid=this.$store.getters.accountIdInfo.aid},initListData(){this.instructorVerifyListAPI(this.aid,0),this.instructorVerifyListAPI(this.aid,1)},async instructorVerifyListAPI(e,t){const i={aid:e,status:t},s=await this.$request("instructor.instructorVerifyList",i);console.log("验证-列表API_res :>> ",s),0===t&&(this.reviewList=s),1===t&&(this.approvedList=s)},onSearch(){this.reviewList=(0,n.o1)(this.reviewList,this.keyword),this.approvedList=(0,n.o1)(this.approvedList,this.keyword)},onClear(){console.log("onClear :>> "),this.initListData()}}},a=o,c=i(1001),u=(0,c.Z)(a,s,r,!1,null,"28ee6e58",null),l=u.exports},76711:function(e,t,i){function s(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}i.d(t,{e9:function(){return s},i_:function(){return n},o1:function(){return o},rm:function(){return r}});const r=(e,t)=>{let i=new Date(Date.parse(e)),s=new Date(Date.parse(t));return i>s},n=(e,t,i)=>{switch(t){case"H":case"h":if("H"===i||"h"===i)return e;if("M"===i||"m"===i)return 60*e;if("S"===i||"s"===i)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===i||"h"===i)return e/60;if("M"===i||"m"===i)return e;if("S"===i||"s"===i)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===i||"h"===i)return e/60/60;if("M"===i||"m"===i)return e/60;if("S"===i||"s"===i)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},o=(e,t,i="name")=>{const s=[];return e.forEach((e=>{const r=e[i].indexOf(t);r>-1&&s.push(e)})),s}}}]);
//# sourceMappingURL=9284.80f65eca.js.map