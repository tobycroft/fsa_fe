"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2276],{62276:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"step-two-container"},[a("div",{staticClass:"form-style"},[a("van-form",[a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:e.cert,callback:function(t){e.cert=t},expression:"cert"}})],1),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"email",label:"电子邮箱",placeholder:"请输入电子邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称"},model:{value:e.work_address,callback:function(t){e.work_address=t},expression:"work_address"}})],1),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"job",label:"职务",placeholder:"请输入工作职务"},model:{value:e.job,callback:function(t){e.job=t},expression:"job"}})],1),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"jobTitle",label:"职称",placeholder:"请输入职称"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("CardForm",{staticClass:"form-item"},[a("div",{on:{click:function(t){e.showPopup=!0}}},[a("van-field",{staticClass:"not-disable-style",attrs:{name:"area",label:"所在区域",placeholder:"请选择所在区域",disabled:""},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}})],1)]),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1)],1),a("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[a("van-area",{attrs:{title:"标题","area-list":e.areaList},on:{cancel:function(t){e.showPopup=!1},confirm:e.confirm}})],1)],1)},r=[],s=a(62032),i=a(16198),n=(a(35666),a(41539),a(78783),a(33948),a(68309),a(91742)),l=a(62149),c={components:{CardForm:function(){return a.e(7329).then(a.bind(a,77329))}},data:function(){return{cert:"",email:"",work_address:"",job:"",title:"",location:"",address:"",areaList:l.H,showPopup:!1}},mounted:function(){var e=this;n.Z.$on("getEchoData",(function(t){e.instructorVerifyById(t)})),n.Z.$on("initData",(function(){e.initData()}))},methods:{initData:function(){this.cert="",this.email="",this.work_address="",this.job="",this.title="",this.location="",this.address=""},instructorVerifyById:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function a(){var o,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.$store.getters.associationInfo.id,r={id:e,aid:o},a.next=4,t.$request("instructor.instructorVerifyById",r);case 4:s=a.sent,i=s.instructor_info,console.log("根据ID获取讲师验证详情API_res :>> ",i),t.cert=i.cert,t.email=i.mail,t.work_address=i.work_address,t.job=i.job,t.title=i.title,t.location=i.location,t.address=i.address;case 14:case"end":return a.stop()}}),a)})))()},confirm:function(e){console.log("areaArr :>> ",e),this.location="";var t,a=(0,s.Z)(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;this.location+="".concat(o.name," ")}}catch(r){a.e(r)}finally{a.f()}this.showPopup=!1}}},d=c,u=a(1001),m=(0,u.Z)(d,o,r,!1,null,"44fa0c08",null),f=m.exports},91742:function(e,t,a){var o=a(20144);t["Z"]=new o["default"]}}]);
//# sourceMappingURL=2276-legacy.f484f940.js.map