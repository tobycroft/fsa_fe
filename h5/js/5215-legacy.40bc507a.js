"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5215],{35215:function(t,e,r){r.r(e),r.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register-container"},[r("header",[r("Steps",{ref:"steps",attrs:{activeStep:t.activeStep},on:{change:t.changeSteps}})],1),r("main",[r("StepOne",{directives:[{name:"show",rawName:"v-show",value:0===t.activeStep,expression:"activeStep === 0"}],attrs:{formData:t.form},on:{"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e}}}),r("StepTwo",{directives:[{name:"show",rawName:"v-show",value:1===t.activeStep,expression:"activeStep === 1"}],attrs:{formData:t.form},on:{"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e}}}),r("StepThree",{directives:[{name:"show",rawName:"v-show",value:2===t.activeStep,expression:"activeStep === 2"}],attrs:{formData:t.form},on:{"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e}}})],1),r("div",{staticClass:"footer"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.activeStep<2,expression:"activeStep < 2"}],staticClass:"step-operation-box flex"},[r("van-button",{staticClass:"btn-style",attrs:{round:"",plain:""},on:{click:t.previous}},[t._v(" 上一步 ")]),r("van-button",{staticClass:"btn-style",attrs:{round:"",type:"info"},on:{click:t.next}},[t._v(" 下一步 ")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:2===t.activeStep,expression:"activeStep === 2"}],staticClass:"flex-center"},[r("van-button",{staticClass:"btn-back-style",attrs:{round:""},on:{click:function(e){return t.$router.replace("/")}}},[t._v("立即返回")])],1)])])},n=[],a=(r(41539),r(78783),r(33948),r(68309),r(74916),r(15306),{components:{Steps:function(){return r.e(5480).then(r.bind(r,85480))},StepOne:function(){return r.e(4728).then(r.bind(r,34728))},StepTwo:function(){return Promise.all([r.e(2149),r.e(4292)]).then(r.bind(r,54292))},StepThree:function(){return r.e(7558).then(r.bind(r,77558))}},data:function(){return{activeStep:0,form:{img:"",gender:"",mail:"",job:"",title:"",cert:"",work_address:"",tel:"",location:"",address:"",name:""},history:!1}},created:function(){var t=this.$route.query.history;this.history=t||!1,t&&this.backfillForm()},methods:{backfillForm:function(){var t=this.$store.getters.registerUserInfo;t.gender="".concat(t.gender),this.form=t},previous:function(){this.$refs.steps.previous()},checkFormData:function(){return 0==this.activeStep?this.form.name?!(!this.form.tel||11!=this.form.tel.length)||(this.$toast("请输入手机号码"),!1):(this.$toast("请输入真实姓名！"),!1):1==this.activeStep||void 0},next:function(){var t=this;if(this.checkFormData()){var e=this.$store.getters.associationInfo.id;this.form.aid=e,"1"==this.activeStep?this.$request("instructor.instructorVerfyAdd",this.form).then((function(e){t.$refs.steps.next(),setTimeout((function(){t.$router.replace("/")}),3e3)})):this.$refs.steps.next()}},changeSteps:function(t){this.activeStep=t},onSubmit:function(t){console.log("submit",t)}}}),i=a,o=r(43736),c=(0,o.Z)(i,s,n,!1,null,"08cb3992",null),u=c.exports}}]);
//# sourceMappingURL=5215-legacy.40bc507a.js.map