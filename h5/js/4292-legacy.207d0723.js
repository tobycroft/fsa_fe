"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4292],{54292:function(a,e,t){t.r(e),t.d(e,{default:function(){return f}});var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"step-two-container"},[t("div",{staticClass:"form-style"},[t("van-form",[t("CardForm",{staticClass:"form-item"},[t("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:a.formData.cert,callback:function(e){a.$set(a.formData,"cert",e)},expression:"formData.cert"}})],1),t("CardForm",{staticClass:"form-item"},[t("van-field",{attrs:{name:"email",label:"电子邮箱",placeholder:"请输入电子邮箱"},model:{value:a.formData.mail,callback:function(e){a.$set(a.formData,"mail",e)},expression:"formData.mail"}})],1),t("CardForm",{staticClass:"form-item"},[t("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称"},model:{value:a.formData.work_address,callback:function(e){a.$set(a.formData,"work_address",e)},expression:"formData.work_address"}})],1),t("CardForm",{staticClass:"form-item"},[t("van-field",{attrs:{name:"job",label:"职务",placeholder:"请输入工作职务"},model:{value:a.formData.job,callback:function(e){a.$set(a.formData,"job",e)},expression:"formData.job"}})],1),t("CardForm",{staticClass:"form-item"},[t("van-field",{attrs:{name:"jobTitle",label:"职称",placeholder:"请输入职称"},model:{value:a.formData.title,callback:function(e){a.$set(a.formData,"title",e)},expression:"formData.title"}})],1),t("CardForm",{staticClass:"form-item"},[t("div",{on:{click:function(e){a.showPopup=!0}}},[t("van-field",{staticClass:"not-disable-style",attrs:{name:"area",label:"所在区域",placeholder:"请选择所在区域",disabled:""},model:{value:a.formData.location,callback:function(e){a.$set(a.formData,"location",e)},expression:"formData.location"}})],1)]),t("CardForm",{staticClass:"form-item"},[t("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":""},model:{value:a.formData.address,callback:function(e){a.$set(a.formData,"address",e)},expression:"formData.address"}})],1)],1)],1),t("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:a.showPopup,callback:function(e){a.showPopup=e},expression:"showPopup"}},[t("van-area",{attrs:{title:"标题","area-list":a.areaList},on:{cancel:function(e){a.showPopup=!1},confirm:a.confirm}})],1)],1)},r=[],s=t(66347),l=(t(41539),t(78783),t(33948),t(68309),t(62149)),n={components:{CardForm:function(){return t.e(4221).then(t.bind(t,4221))}},props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{idCard:"",email:"",workUnits:"",job:"",jobTitle:"",area:"",address:"",areaList:l.H,showPopup:!1}},mounted:function(){console.log("this.areaList :>> ",this.areaList)},methods:{confirm:function(a){console.log("areaArr :>> ",a);var e,t="",o=(0,s.Z)(a);try{for(o.s();!(e=o.n()).done;){var r=e.value;t+="".concat(r.name," ")}}catch(l){o.e(l)}finally{o.f()}this.formData.location=t,this.showPopup=!1}}},i=n,c=t(43736),m=(0,c.Z)(i,o,r,!1,null,"724f6e76",null),f=m.exports}}]);
//# sourceMappingURL=4292-legacy.207d0723.js.map