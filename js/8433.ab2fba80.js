"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8433],{78433:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-container"},[s("Steps",{ref:"steps",attrs:{activeStep:t.activeStep},on:{change:t.changeSteps}}),s("StepOne",{directives:[{name:"show",rawName:"v-show",value:0===t.activeStep,expression:"activeStep === 0"}],attrs:{formData:t.form},on:{"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e}}}),s("StepTwo",{directives:[{name:"show",rawName:"v-show",value:1===t.activeStep,expression:"activeStep === 1"}],attrs:{formData:t.form},on:{"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e}}}),s("StepThree",{directives:[{name:"show",rawName:"v-show",value:2===t.activeStep,expression:"activeStep === 2"}],attrs:{formData:t.form},on:{"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e}}}),s("div",{staticClass:"footer"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.activeStep<2,expression:"activeStep < 2"}],staticClass:"step-operation-box flex"},[s("van-button",{staticClass:"btn-style",attrs:{round:"",plain:""},on:{click:t.previous}},[t._v(" 上一步 ")]),s("van-button",{staticClass:"btn-style",attrs:{round:"",type:"info"},on:{click:t.next}},[t._v(" 下一步 ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.activeStep,expression:"activeStep === 2"}],staticClass:"flex-center"},[s("van-button",{staticClass:"btn-back-style",attrs:{round:""},on:{click:function(e){return t.$router.replace("/")}}},[t._v("立即返回")])],1)])],1)},o=[],i={components:{Steps:()=>s.e(5499).then(s.bind(s,95499)),StepOne:()=>s.e(6693).then(s.bind(s,56693)),StepTwo:()=>Promise.all([s.e(2149),s.e(2186)]).then(s.bind(s,82186)),StepThree:()=>s.e(4041).then(s.bind(s,84041))},data(){return{activeStep:0,form:{img:"",gender:"",mail:"",job:"",title:"",cert:"",work_address:"",tel:"",location:"",address:"",name:""}}},methods:{previous(){this.$refs.steps.previous()},checkFormData(){return 0==this.activeStep?this.form.img?this.form.name?this.form.gender?!(!this.form.tel||11!=this.form.tel.length)||(this.$toast("请输入手机号码"),!1):(this.$toast("请选择性别！"),!1):(this.$toast("请输入真实姓名！"),!1):(this.$toast("请上传导师头像！"),!1):1==this.activeStep?this.form.cert?this.form.mail?this.form.work_address?this.form.job?this.form.title?this.form.location?!!this.form.address||(this.$toast("请输入详细的地址信息"),!1):(this.$toast("请选择所在区域"),!1):(this.$toast("请输入职称"),!1):(this.$toast("请输入工作职务"),!1):(this.$toast("请输入工作单位名称"),!1):(this.$toast("请输入电子邮箱"),!1):(this.$toast("请输入身份证号码"),!1):void 0},next(){this.checkFormData()&&("1"==this.activeStep?this.$request("instructor.instructorVerfyAdd",this.form).then((t=>{this.$refs.steps.next(),setTimeout((()=>{this.$router.replace("/")}),3e3)})):this.$refs.steps.next())},changeSteps(t){this.activeStep=t},onSubmit(t){console.log("submit",t)}}},r=i,n=s(1001),c=(0,n.Z)(r,a,o,!1,null,"81701b72",null),h=c.exports}}]);
//# sourceMappingURL=8433.ab2fba80.js.map