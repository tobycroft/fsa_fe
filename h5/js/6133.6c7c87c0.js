"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6133],{36133:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"step-two-container"},[s("div",{staticClass:"form-style"},[s("van-form",{on:{submit:t.onSubmit}},[s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称"},model:{value:t.workUnits,callback:function(e){t.workUnits=e},expression:"workUnits"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:t.idCard,callback:function(e){t.idCard=e},expression:"idCard"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{type:"tel",name:"tel",label:"通讯方式",placeholder:"请输入通讯方式",rules:[{required:!0,message:"请输入通讯方式"}]},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),s("CardForm",{staticClass:"form-item"},[s("div",{on:{click:function(e){t.showPopup=!0}}},[s("van-field",{staticClass:"not-disable-style",attrs:{name:"area",label:"所在区域",placeholder:"请选择所在区域",disabled:""},model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1)]),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),s("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[t._v(" 保存修改 ")])],1)],1),s("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[s("van-area",{attrs:{title:"标题","area-list":t.areaList},on:{cancel:function(e){t.showPopup=!1},confirm:t.confirm}})],1)],1)},i=[],r=s(62149),o={components:{CardForm:()=>s.e(7329).then(s.bind(s,77329))},props:{source:{type:Object,default:()=>{}}},watch:{source(){this.initData()}},data(){return{iid:"",aid:"",workUnits:"",idCard:"",tel:"",area:"",address:"",areaList:r.H,mtid:null,showPopup:!1}},created(){this.initData()},methods:{onSubmit(t){console.log("values :>> ",t),this.updateLecturerInformationAPI()},confirm(t){console.log("areaArr :>> ",t),this.area="";for(const e of t)this.area+=`${e.name} `;this.showPopup=!1},initData(){this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfo.id,console.log("this.source :>> ",this.source),this.workUnits=this.source.work_address,this.idCard=this.source.cert,this.tel=this.source.tel,this.area=this.source.location,this.address=this.source.address,this.mtid=this.source.mtid},async updateLecturerInformationAPI(){const t={img:this.source.img,name:this.source.name,gender:`${this.source.gender}`,mail:this.source.mail,job:this.source.job,title:this.source.title,cert:this.source.cert,work_address:this.workUnits,tel:this.tel,location:this.area,address:this.address,mtid:this.mtid,iid:this.iid,aid:this.aid,is_admin:!0},e=await this.$request("instructor.instructorVerifyEdit",t);console.log("工会功能-更新讲师信息API_res :>> ",e),this.nextStep()},nextStep(){this.$emit("nextStep")}}},n=o,l=s(1001),d=(0,l.Z)(n,a,i,!1,null,"9e21a246",null),c=d.exports}}]);
//# sourceMappingURL=6133.6c7c87c0.js.map