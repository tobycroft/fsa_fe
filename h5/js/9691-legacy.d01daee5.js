"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9691],{39691:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"step-two-container"},[a("div",{staticClass:"form-style"},[a("van-form",{on:{submit:e.onSubmit}},[a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称"},model:{value:e.workUnits,callback:function(t){e.workUnits=t},expression:"workUnits"}})],1),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{type:"tel",name:"tel",label:"通讯方式",placeholder:"请输入通讯方式",rules:[{required:!0,message:"请输入通讯方式"}]},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1),a("CardForm",{staticClass:"form-item"},[a("div",{on:{click:function(t){e.showPopup=!0}}},[a("van-field",{staticClass:"not-disable-style",attrs:{name:"area",label:"所在区域",placeholder:"请选择所在区域",disabled:""},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}})],1)]),a("CardForm",{staticClass:"form-item"},[a("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[e._v(" 保存修改 ")])],1)],1),a("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[a("van-area",{attrs:{title:"标题","area-list":e.areaList},on:{cancel:function(t){e.showPopup=!1},confirm:e.confirm}})],1)],1)},r=[],i=a(48534),o=a(66347),n=(a(35666),a(41539),a(78783),a(33948),a(68309),a(62149)),c={components:{CardForm:function(){return a.e(4221).then(a.bind(a,4221))}},props:{source:{type:Object,default:function(){}}},watch:{source:function(){this.initData()}},data:function(){return{iid:"",aid:"",workUnits:"",idCard:"",tel:"",area:"",address:"",areaList:n.H,mtid:null,showPopup:!1}},created:function(){this.initData()},methods:{onSubmit:function(e){console.log("values :>> ",e),this.updateLecturerInformationAPI()},confirm:function(e){console.log("areaArr :>> ",e),this.area="";var t,a=(0,o.Z)(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;this.area+="".concat(s.name," ")}}catch(r){a.e(r)}finally{a.f()}this.showPopup=!1},initData:function(){this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfo.id,console.log("this.source :>> ",this.source),this.workUnits=this.source.work_address,this.idCard=this.source.cert,this.tel=this.source.tel,this.area=this.source.location,this.address=this.source.address,this.mtid=this.source.mtid},updateLecturerInformationAPI:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={img:e.source.img,name:e.source.name,gender:"".concat(e.source.gender),mail:e.source.mail,job:e.source.job,title:e.source.title,cert:e.source.cert,work_address:e.workUnits,tel:e.tel,location:e.area,address:e.address,mtid:e.mtid,iid:e.iid,aid:e.aid,is_admin:!0},t.next=3,e.$request("instructor.instructorVerifyEdit",a);case 3:s=t.sent,console.log("工会功能-更新讲师信息API_res :>> ",s),e.nextStep();case 6:case"end":return t.stop()}}),t)})))()},nextStep:function(){this.$emit("nextStep")}}},l=c,d=a(43736),u=(0,d.Z)(l,s,r,!1,null,"9e21a246",null),m=u.exports}}]);
//# sourceMappingURL=9691-legacy.d01daee5.js.map