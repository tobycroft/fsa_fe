"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5892],{35892:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step-two-container"},[s("div",{staticClass:"form-style"},[s("van-form",{on:{submit:e.onSubmit}},[s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称"},model:{value:e.workUnits,callback:function(t){e.workUnits=t},expression:"workUnits"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{type:"tel",name:"tel",label:"通讯方式",placeholder:"请输入通讯方式",rules:[{required:!0,message:"请输入通讯方式"}]},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),s("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[e._v(" 保存修改 ")])],1)],1),s("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[s("van-area",{attrs:{title:"标题","area-list":e.areaList},on:{cancel:function(t){e.showPopup=!1},confirm:e.confirm}})],1)],1)},a=[],i=s(48534),o=s(66347),n=(s(35666),s(41539),s(78783),s(33948),s(68309),s(62149)),c={components:{CardForm:function(){return s.e(4221).then(s.bind(s,4221))}},props:{source:{type:Object,default:function(){}}},watch:{source:function(){this.initData()}},data:function(){return{iid:"",aid:"",workUnits:"",idCard:"",tel:"",area:"",address:"",areaList:n.H,mtid:null,showPopup:!1}},created:function(){this.initData()},methods:{onSubmit:function(e){console.log("values :>> ",e),this.updateLecturerInformationAPI()},confirm:function(e){console.log("areaArr :>> ",e),this.area="";var t,s=(0,o.Z)(e);try{for(s.s();!(t=s.n()).done;){var r=t.value;this.area+="".concat(r.name," ")}}catch(a){s.e(a)}finally{s.f()}this.showPopup=!1},initData:function(){this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfo.id,console.log("this.source :>> ",this.source),this.workUnits=this.source.work_address,this.idCard=this.source.cert,this.tel=this.source.tel,this.area=this.source.location,this.address=this.source.address,this.mtid=this.source.mtid},updateLecturerInformationAPI:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={img:e.source.img,name:e.source.name,gender:"".concat(e.source.gender),mail:e.source.mail,job:e.source.job,title:e.source.title,cert:e.source.cert,work_address:e.workUnits,tel:e.tel,location:e.area,address:e.address,mtid:e.mtid,iid:e.iid,aid:e.aid,is_admin:!0},t.next=3,e.$request("instructor.instructorVerifyEdit",s);case 3:r=t.sent,console.log("工会功能-更新讲师信息API_res :>> ",r),e.nextStep();case 6:case"end":return t.stop()}}),t)})))()},nextStep:function(){this.$emit("nextStep")}}},l=c,d=s(43736),u=(0,d.Z)(l,r,a,!1,null,"a3abcc9c",null),m=u.exports}}]);
//# sourceMappingURL=5892-legacy.c5b98525.js.map