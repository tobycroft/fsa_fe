"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5255],{15255:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speaker-information-changes-container"},[n("header",[n("Steps",{ref:"steps",attrs:{activeStep:t.activeStep},on:{change:t.changeSteps}})],1),n("main",[0===t.activeStep?n("StepOne",{attrs:{source:t.instructorInfo},on:{nextStep:t.next}}):t._e(),1===t.activeStep?n("StepTwo",{attrs:{source:t.instructorInfo},on:{nextStep:t.next}}):t._e(),2===t.activeStep?n("StepThree"):t._e()],1)])},r=[],s=n(16198),o=(n(35666),n(41539),n(78783),n(33948),{components:{Steps:function(){return n.e(5499).then(n.bind(n,95499))},StepOne:function(){return n.e(2319).then(n.bind(n,72319))},StepTwo:function(){return Promise.all([n.e(2149),n.e(6133)]).then(n.bind(n,36133))},StepThree:function(){return n.e(1659).then(n.bind(n,91659))}},data:function(){return{activeStep:0,iid:null,aid:null,instructorInfo:{}}},created:function(){var t=this.$route.query;this.iid=t.iid?t.iid:this.$store.getters.accountIdInfo.iid,this.aid=t.aid?t.aid:this.$store.getters.associationInfo.id,this.instructorInfoGetAPI(this.iid)},methods:{instructorInfoGetAPI:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i={id:t},n.next=3,e.$request("instructor.instructorInfoGet",i);case 3:r=n.sent,console.log("根据ID获取讲师验证详情API_res :>> ",r),e.instructorInfo=r,console.log("debug :>> ",e.instructorInfo);case 7:case"end":return n.stop()}}),n)})))()},next:function(){this.instructorInfoGetAPI(this.iid),this.$refs.steps.next(),this.instructorVerifyGetMeAPI(this.aid)},changeSteps:function(t){console.log("当前步骤 :>> ",t),this.activeStep=t},onSubmit:function(t){console.log("submit",t)}}}),c=o,u=n(1001),a=(0,u.Z)(c,i,r,!1,null,"46628154",null),h=a.exports}}]);
//# sourceMappingURL=5255-legacy.cfddbcb4.js.map