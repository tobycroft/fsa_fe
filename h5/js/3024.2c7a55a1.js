"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3024],{33024:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"members-audit-container"},[i("header",[i("van-search",{attrs:{background:"#fff",placeholder:"请输入主讲人名字"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),i("main",[i("van-tabs",{staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"审核列表("+t.reviewList.length+")"}},[i("ul",{staticClass:"review-list"},[t._l(t.reviewList,(function(e,s){return i("li",{key:s,staticClass:"review-list-item"},[i("ReviewListRow",{attrs:{source:e,showOperation:""},on:{fail:function(i){return t.verifydenyAPI(e.instructor_info.iid)},success:function(i){return t.handleApprove(e.instructor_info.iid)},click:function(i){return t.goToDetail(e)}}})],1)})),i("NoRecord",{directives:[{name:"show",rawName:"v-show",value:t.reviewList.length<=0,expression:"reviewList.length <= 0"}]})],2)]),i("van-tab",{attrs:{title:"已审核"}},[i("ul",{staticClass:"review-list"},[t._l(t.approvedList,(function(e,s){return i("li",{key:s,staticClass:"review-list-item"},[i("ReviewListRow",{attrs:{source:e,status:""},on:{click:function(i){return t.goToDetail(e)}}})],1)})),i("NoRecord",{directives:[{name:"show",rawName:"v-show",value:t.approvedList.length<=0,expression:"approvedList.length <= 0"}]})],2)])],1)],1),i("SelectThe",{attrs:{show:t.showSelectThe,list:t.instructorTitleList,active:t.activeSelectThe},on:{"update:show":function(e){t.showSelectThe=e},change:t.onSelectTheChange,save:t.onSave}})],1)},r=[],n=i(76711),o={components:{ReviewListRow:()=>i.e(2339).then(i.bind(i,52339)),NoRecord:()=>i.e(5847).then(i.bind(i,35847)),SelectThe:()=>i.e(7509).then(i.bind(i,37509))},data(){return{keyword:"",active:2,aid:"",iid:"",reviewList:[],approvedList:[],showSelectThe:!1,instructorTitleList:[],activeSelectThe:null}},async created(){await this.getMemberMe(),this.initListData(),this.instructorTitleListAPI(this.aid)},methods:{handleApprove(t){this.iid=t,this.instructorTitleList.length>0?this.showSelectThe=!0:this.verifyApproveAPI(t)},async verifyApproveAPI(t){const e=this.$store.getters.associationInfo.id,i={aid:e,iid:t},s=await this.$request("association.verifyApprove",i);console.log("成员审核-通过_APIres :>> ",s),this.$toast.success("审核操作成功"),this.iid=null,this.activeSelectThe=null,this.showSelectThe=!1,this.initListData()},async verifydenyAPI(t){const e=this.$store.getters.associationInfo.id,i={aid:e,iid:t,mtids:0},s=await this.$request("association.verifydeny",i);console.log("成员审核-失败API_res :>> ",s),this.initListData()},goToDetail(t){console.log("row :>> ",t),this.$router.push({path:"/membersAuditDetails",query:{iid:t.instructor_info.iid,aid:t.aid}})},async getMemberMe(){this.aid=this.$store.getters.associationInfo.id},initListData(){this.instructorVerifyListAPI(this.aid,0),this.instructorVerifyListAPI(this.aid,1)},async instructorVerifyListAPI(t,e){const i={aid:t,status:e},s=await this.$request("instructor.instructorVerifyList",i);console.log("验证-列表API_res :>> ",s),0===e&&(this.reviewList=s),1===e&&(this.approvedList=s)},onSearch(){this.reviewList=(0,n.o1)(this.reviewList,this.keyword),this.approvedList=(0,n.o1)(this.approvedList,this.keyword)},onClear(){console.log("onClear :>> "),this.initListData()},async instructorTitleListAPI(t){const e={aid:t},i=await this.$request("instructor.instructorTitleList",e);console.log("获取职称列表API_res :>> ",i),this.instructorTitleList=i},onSelectTheChange(t){this.activeSelectThe=t.id,console.log("this.activeSelectThe :>> ",this.activeSelectThe)},async onSave(){this.activeSelectThe?(await this.instructorAssociationMtidAPI(this.iid,this.aid,this.activeSelectThe),this.verifyApproveAPI(this.iid)):this.$toast("请选择身份")},async instructorAssociationMtidAPI(t,e,i){const s={iid:t,aid:e,mtid:i},r=await this.$request("instructor.instructorAssociationMtid",s);return console.log("修改mtid_API_res :>> ",r),r}}},a=o,c=i(1001),l=(0,c.Z)(a,s,r,!1,null,"7ddfa3c6",null),h=l.exports},76711:function(t,e,i){function s(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}i.d(e,{Ef:function(){return c},Y_:function(){return h},e9:function(){return s},fS:function(){return a},i_:function(){return n},o1:function(){return o},og:function(){return l},rm:function(){return r}});const r=(t,e)=>{let i=new Date(Date.parse(t)),s=new Date(Date.parse(e));return i>s},n=(t,e,i)=>{switch(e){case"H":case"h":if("H"===i||"h"===i)return t;if("M"===i||"m"===i)return 60*t;if("S"===i||"s"===i)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===i||"h"===i)return t/60;if("M"===i||"m"===i)return t;if("S"===i||"s"===i)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===i||"h"===i)return t/60/60;if("M"===i||"m"===i)return t/60;if("S"===i||"s"===i)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},o=(t,e,i="name")=>{const s=[];return t.forEach((t=>{const r=t[i].indexOf(e);r>-1&&s.push(t)})),s},a=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),c=t=>{const e=[];for(const i in t)e.push(t[i]);return e.reverse()},l=(t,e)=>{console.log("importType :>> ",t);let i="";return"default"!==t&&"a"!==t||(i="fj"),"gt"===t&&(i="gt"),i===e},h=t=>{switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=3024.2c7a55a1.js.map