"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7386],{37386:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-container"},[s("Steps",{ref:"steps",attrs:{activeStep:e.activeStep},on:{change:e.changeSteps}}),s("StepOne",{directives:[{name:"show",rawName:"v-show",value:0===e.activeStep,expression:"activeStep === 0"}],ref:"stepOne"}),s("selectInfo",{directives:[{name:"show",rawName:"v-show",value:1===e.activeStep,expression:"activeStep === 1"}],on:{goNext:e.next,goBack:e.previous}}),s("StepTwo",{directives:[{name:"show",rawName:"v-show",value:2===e.activeStep,expression:"activeStep === 2"}],ref:"stepTwo"}),s("div",{staticClass:"footer"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.activeStep||2==e.activeStep,expression:"activeStep == 0 || activeStep == 2"}],staticClass:"step-operation-box flex"},[s("van-button",{staticClass:"btn-style",attrs:{round:"",plain:""},on:{click:e.previous}},[e._v("上一步")]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:0==e.activeStep,expression:"activeStep == 0"}],staticClass:"btn-style",attrs:{round:"",type:"info"},on:{click:e.next}},[e._v("下一步")]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:2==e.activeStep,expression:"activeStep == 2"}],staticClass:"btn-style",attrs:{round:"",type:"info"},on:{click:e.handleSubmitBack}},[e._v("完成并返回")])],1)])],1)},a=[],r={components:{Steps:()=>s.e(5499).then(s.bind(s,95499)),StepOne:()=>s.e(4659).then(s.bind(s,34659)),StepTwo:()=>Promise.all([s.e(2149),s.e(2070)]).then(s.bind(s,32070)),StepThree:()=>s.e(1432).then(s.bind(s,91432)),selectInfo:()=>s.e(329).then(s.bind(s,329))},data(){return{activeStep:0}},methods:{async handleSubmitBack(){const e={img:this.$refs.stepOne.img,name:this.$refs.stepOne.userName,gender:this.$refs.stepOne.gender,tel:this.$refs.stepOne.tel,cert:this.$refs.stepTwo.cert,mail:this.$refs.stepTwo.email,work_address:this.$refs.stepTwo.work_address,job:this.$refs.stepTwo.job,title:this.$refs.stepTwo.title,location:this.$refs.stepTwo.location,address:this.$refs.stepTwo.address};await this.reqInstructorVerfyAdd(e),this.$router.back()},async reqInstructorVerfyAdd(e){await this.$request("instructor.instructorVerfyAdd",e)},previous(){this.$refs.steps.previous()},next(){this.$refs.steps.next()},changeSteps(e){console.log("当前步骤 :>> ",e),this.activeStep=e},onSubmit(e){console.log("submit",e)}}},n=r,o=s(1001),c=(0,o.Z)(n,i,a,!1,null,"368c39b2",null),p=c.exports}}]);
//# sourceMappingURL=7386.e4e11bab.js.map