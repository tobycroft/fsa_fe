"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7386],{37386:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register-container"},[n("Steps",{ref:"steps",attrs:{activeStep:e.activeStep},on:{change:e.changeSteps}}),n("StepOne",{directives:[{name:"show",rawName:"v-show",value:0===e.activeStep,expression:"activeStep === 0"}],ref:"stepOne"}),n("selectInfo",{directives:[{name:"show",rawName:"v-show",value:1===e.activeStep,expression:"activeStep === 1"}],on:{goNext:e.next,goBack:e.previous}}),n("StepTwo",{directives:[{name:"show",rawName:"v-show",value:2===e.activeStep,expression:"activeStep === 2"}],ref:"stepTwo"}),n("div",{staticClass:"footer"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.activeStep||2==e.activeStep,expression:"activeStep == 0 || activeStep == 2"}],staticClass:"step-operation-box flex"},[n("van-button",{staticClass:"btn-style",attrs:{round:"",plain:""},on:{click:e.previous}},[e._v("上一步")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:0==e.activeStep,expression:"activeStep == 0"}],staticClass:"btn-style",attrs:{round:"",type:"info"},on:{click:e.next}},[e._v("下一步")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:2==e.activeStep,expression:"activeStep == 2"}],staticClass:"btn-style",attrs:{round:"",type:"info"},on:{click:e.handleSubmitBack}},[e._v("完成并返回")])],1)])],1)},r=[],a=n(16198),i=(n(35666),n(41539),n(78783),n(33948),{components:{Steps:function(){return n.e(5499).then(n.bind(n,95499))},StepOne:function(){return n.e(4659).then(n.bind(n,34659))},StepTwo:function(){return Promise.all([n.e(1946),n.e(7355)]).then(n.bind(n,67355))},StepThree:function(){return n.e(1432).then(n.bind(n,91432))},selectInfo:function(){return n.e(2819).then(n.bind(n,12819))}},data:function(){return{activeStep:0}},methods:{handleSubmitBack:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={img:e.$refs.stepOne.img,name:e.$refs.stepOne.userName,gender:e.$refs.stepOne.gender,tel:e.$refs.stepOne.tel,cert:e.$refs.stepTwo.cert,mail:e.$refs.stepTwo.email,work_address:e.$refs.stepTwo.work_address,job:e.$refs.stepTwo.job,title:e.$refs.stepTwo.title,location:e.$refs.stepTwo.location,address:e.$refs.stepTwo.address},t.next=3,e.reqInstructorVerfyAdd(n);case 3:e.$router.back();case 4:case"end":return t.stop()}}),t)})))()},reqInstructorVerfyAdd:function(e){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$request("instructor.instructorVerfyAdd",e);case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))()},previous:function(){this.$refs.steps.previous()},next:function(){this.$refs.steps.next()},changeSteps:function(e){console.log("当前步骤 :>> ",e),this.activeStep=e},onSubmit:function(e){console.log("submit",e)}}}),o=i,c=n(1001),u=(0,c.Z)(o,s,r,!1,null,"368c39b2",null),p=u.exports}}]);
//# sourceMappingURL=7386-legacy.7d6e0504.js.map