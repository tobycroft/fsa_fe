"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1175],{61175:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speaker-information-changes-container"},[n("header",[n("Steps",{ref:"steps",attrs:{activeStep:e.activeStep},on:{change:e.changeSteps}})],1),n("main",[0===e.activeStep?n("StepOne",{attrs:{source:e.instructorInfo},on:{nextStep:e.next}}):e._e(),1===e.activeStep?n("StepTwo",{attrs:{source:e.instructorInfo},on:{nextStep:e.next}}):e._e(),2===e.activeStep?n("StepThree"):e._e()],1)])},i=[],s=n(16198),o=(n(35666),n(41539),n(78783),n(33948),{components:{Steps:function(){return n.e(5499).then(n.bind(n,95499))},StepOne:function(){return n.e(2463).then(n.bind(n,82463))},StepTwo:function(){return Promise.all([n.e(2149),n.e(5227)]).then(n.bind(n,45227))},StepThree:function(){return n.e(1659).then(n.bind(n,91659))}},data:function(){return{activeStep:0,iid:null,aid:null,instructorInfo:{}}},created:function(){var e=this.$route.query;this.iid=e.iid?e.iid:this.$store.getters.accountIdInfo.iid,this.aid=e.aid?e.aid:this.$store.getters.associationInfo.id,this.instructorVerifyGetMeAPI(this.aid)},methods:{instructorVerifyGetMeAPI:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={aid:e},n.next=3,t.$request("instructor.instructorVerifyGetMe",r);case 3:i=n.sent,console.log("根据ID获取讲师验证详情API_res :>> ",i),t.instructorInfo=i;case 6:case"end":return n.stop()}}),n)})))()},next:function(){this.$refs.steps.next(),this.instructorVerifyGetMeAPI(this.aid)},changeSteps:function(e){console.log("当前步骤 :>> ",e),this.activeStep=e},onSubmit:function(e){console.log("submit",e)}}}),c=o,a=n(1001),u=(0,a.Z)(c,r,i,!1,null,"75a6a65d",null),h=u.exports}}]);
//# sourceMappingURL=1175-legacy.5c2cd111.js.map