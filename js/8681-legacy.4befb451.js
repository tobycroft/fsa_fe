"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8681],{18681:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speaker-information-changes-container"},[n("header",[n("Steps",{ref:"steps",attrs:{activeStep:t.activeStep},on:{change:t.changeSteps}})],1),n("main",[0===t.activeStep?n("StepOne",{attrs:{source:t.instructorInfo},on:{nextStep:t.next}}):t._e(),1===t.activeStep?n("StepTwo",{attrs:{source:t.instructorInfo},on:{nextStep:t.next}}):t._e(),2===t.activeStep?n("StepThree"):t._e()],1)])},i=[],s=n(16198),o=(n(35666),n(41539),n(78783),n(33948),{components:{Steps:function(){return n.e(5499).then(n.bind(n,95499))},StepOne:function(){return n.e(6371).then(n.bind(n,76371))},StepTwo:function(){return Promise.all([n.e(2149),n.e(2115)]).then(n.bind(n,22115))},StepThree:function(){return n.e(5090).then(n.bind(n,25090))}},data:function(){return{activeStep:0,iid:null,aid:null,instructorInfo:{}}},created:function(){this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfoCurrent.id,this.instructorVerifyById(this.iid,this.aid)},methods:{instructorVerifyById:function(t,e){var n=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={id:t,aid:e},r.next=3,n.$request("instructor.instructorVerifyById",i);case 3:s=r.sent,console.log("根据ID获取讲师验证详情API_res :>> ",s),n.instructorInfo=s;case 6:case"end":return r.stop()}}),r)})))()},next:function(){this.$refs.steps.next(),this.instructorVerifyById(this.iid,this.aid)},changeSteps:function(t){console.log("当前步骤 :>> ",t),this.activeStep=t},onSubmit:function(t){console.log("submit",t)}}}),c=o,u=n(1001),a=(0,u.Z)(c,r,i,!1,null,"9bfcfa4c",null),h=a.exports}}]);
//# sourceMappingURL=8681-legacy.4befb451.js.map