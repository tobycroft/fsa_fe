"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5801],{75801:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-two-container"},[e("div",{staticClass:"form-style"},[e("van-form",[e("CardForm",{staticClass:"form-item"},[e("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:t.cert,callback:function(a){t.cert=a},expression:"cert"}})],1),e("CardForm",{staticClass:"form-item"},[e("van-field",{attrs:{name:"email",label:"电子邮箱",placeholder:"请输入电子邮箱"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("CardForm",{staticClass:"form-item"},[e("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称"},model:{value:t.work_address,callback:function(a){t.work_address=a},expression:"work_address"}})],1),e("CardForm",{staticClass:"form-item"},[e("van-field",{attrs:{name:"job",label:"职务",placeholder:"请输入工作职务"},model:{value:t.job,callback:function(a){t.job=a},expression:"job"}})],1),e("CardForm",{staticClass:"form-item"},[e("van-field",{attrs:{name:"jobTitle",label:"职称",placeholder:"请输入职称"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}})],1),e("CardForm",{staticClass:"form-item"},[e("div",{on:{click:function(a){t.showPopup=!0}}},[e("van-field",{staticClass:"not-disable-style",attrs:{name:"area",label:"所在区域",placeholder:"请选择所在区域",disabled:""},model:{value:t.location,callback:function(a){t.location=a},expression:"location"}})],1)]),e("CardForm",{staticClass:"form-item"},[e("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":""},model:{value:t.address,callback:function(a){t.address=a},expression:"address"}})],1)],1)],1),e("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.showPopup,callback:function(a){t.showPopup=a},expression:"showPopup"}},[e("van-area",{attrs:{title:"标题","area-list":t.areaList},on:{cancel:function(a){t.showPopup=!1},confirm:t.confirm}})],1)],1)},o=[],i=e(80333),r=e(62149),l={components:{CardForm:()=>e.e(4221).then(e.bind(e,4221))},data(){return{cert:"",email:"",work_address:"",job:"",title:"",location:"",address:"",areaList:r.H,showPopup:!1}},mounted(){i.Z.$on("getEchoData",(t=>{this.instructorVerifyById(t)})),i.Z.$on("initData",(()=>{this.initData()}))},methods:{initData(){this.cert="",this.email="",this.work_address="",this.job="",this.title="",this.location="",this.address=""},async instructorVerifyById(t){const a=this.$store.getters.associationInfo.id,e={id:t,aid:a},s=await this.$request("instructor.instructorVerifyById",e),o=s.instructor_info;console.log("根据ID获取讲师验证详情API_res :>> ",o),this.cert=o.cert,this.email=o.mail,this.work_address=o.work_address,this.job=o.job,this.title=o.title,this.location=o.location,this.address=o.address},confirm(t){console.log("areaArr :>> ",t),this.location="";for(const a of t)this.location+=`${a.name} `;this.showPopup=!1}}},n=l,c=e(43736),d=(0,c.Z)(n,s,o,!1,null,"44fa0c08",null),m=d.exports},80333:function(t,a,e){var s=e(20144);a["Z"]=new s["default"]}}]);
//# sourceMappingURL=5801.ac19e818.js.map