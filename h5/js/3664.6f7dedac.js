"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3664],{53664:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"speaker-information-changes-container"},[i("header",[i("Steps",{ref:"steps",attrs:{activeStep:t.activeStep},on:{change:t.changeSteps}})],1),i("main",[0===t.activeStep?i("StepOne",{attrs:{source:t.instructorInfo},on:{nextStep:t.next}}):t._e(),1===t.activeStep?i("StepTwo",{attrs:{source:t.instructorInfo},on:{nextStep:t.next}}):t._e(),2===t.activeStep?i("StepThree"):t._e()],1)])},n=[],r={components:{Steps:()=>i.e(5499).then(i.bind(i,95499)),StepOne:()=>i.e(2463).then(i.bind(i,82463)),StepTwo:()=>Promise.all([i.e(2149),i.e(5227)]).then(i.bind(i,45227)),StepThree:()=>i.e(1659).then(i.bind(i,91659))},data(){return{activeStep:0,iid:null,aid:null,instructorInfo:{}}},created(){const t=this.$route.query;this.iid=t.iid?t.iid:this.$store.getters.accountIdInfo.iid,this.aid=t.aid?t.aid:this.$store.getters.associationInfo.id,this.instructorVerifyById(this.iid,this.aid)},methods:{async instructorVerifyById(t,e){const i={id:t,aid:e},s=await this.$request("instructor.instructorVerifyById",i);console.log("根据ID获取讲师验证详情API_res :>> ",s),this.instructorInfo=s},next(){this.$refs.steps.next(),this.instructorVerifyById(this.iid,this.aid)},changeSteps(t){console.log("当前步骤 :>> ",t),this.activeStep=t},onSubmit(t){console.log("submit",t)}}},o=r,a=i(1001),c=(0,a.Z)(o,s,n,!1,null,"2738db01",null),h=c.exports}}]);
//# sourceMappingURL=3664.6f7dedac.js.map