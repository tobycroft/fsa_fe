"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7121],{87121:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step-two-container"},[s("div",{staticClass:"form-style"},[s("van-form",{on:{submit:e.onSubmit}},[s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"workUnits",label:"工作单位",placeholder:"请输入工作单位名称",rules:[{required:!0,message:"请输入工作单位名称"}]},model:{value:e.workUnits,callback:function(t){e.workUnits=t},expression:"workUnits"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"请输入身份证号码",rules:[{required:!0,message:"请输入身份证号码"}]},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{type:"tel",name:"tel",label:"通讯方式",placeholder:"请输入通讯方式",rules:[{required:!0,message:"请输入通讯方式"}]},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1),s("CardForm",{staticClass:"form-item"},[s("div",{on:{click:function(t){e.showPopup=!0}}},[s("van-field",{staticClass:"not-disable-style",attrs:{name:"area",label:"所在区域",placeholder:"请选择所在区域",disabled:"",rules:[{required:!0,message:"请选择所在区域"}]},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}})],1)]),s("CardForm",{staticClass:"form-item"},[s("van-field",{attrs:{name:"address",rows:"2",autosize:"",label:"通讯地址",type:"textarea",maxlength:"50",placeholder:"请输入详细的地址信息","show-word-limit":"",rules:[{required:!0,message:"请输入详细的地址信息"}]},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),s("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[e._v(" 保存修改 ")])],1)],1),s("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[s("van-area",{attrs:{title:"标题","area-list":e.areaList},on:{cancel:function(t){e.showPopup=!1},confirm:e.confirm}})],1)],1)},a=[],i=s(62149),o={components:{CardForm:()=>s.e(7329).then(s.bind(s,77329))},props:{source:{type:Object,default:()=>{}}},watch:{source(){this.initData()}},data(){return{iid:"",workUnits:"",idCard:"",tel:"",area:"",address:"",areaList:i.H,showPopup:!1}},created(){this.initData(),console.log("debug :>> ",this.iid)},methods:{onSubmit(e){console.log("values :>> ",e),this.updateLecturerInformationAPI()},confirm(e){console.log("areaArr :>> ",e),this.area="";for(const t of e)this.area+=`${t.name} `;this.showPopup=!1},initData(){this.iid=this.$route.query.id,console.log("this.source :>> ",this.source),this.workUnits=this.source.instructor_info.work_address,this.idCard=this.source.instructor_info.cert,this.tel=this.source.instructor_info.tel,this.area=this.source.instructor_info.location,this.address=this.source.instructor_info.address},async updateLecturerInformationAPI(){const e={img:this.source.img,name:this.source.name,gender:`${this.source.gender}`,mail:this.source.instructor_info.mail,job:this.source.instructor_info.job,title:this.source.instructor_info.title,cert:this.idCard,work_address:this.workUnits,tel:this.tel,location:this.area,address:this.address,mtids:"",iid:this.iid,is_admin:!0},t=await this.$request("instructor.updateLecturerInformation",e);console.log("工会功能-更新讲师信息API_res :>> ",t),this.nextStep()},nextStep(){this.$emit("nextStep")}}},n=o,l=s(1001),c=(0,l.Z)(n,r,a,!1,null,"0fa0c2bf",null),d=c.exports}}]);
//# sourceMappingURL=7121.7088dbae.js.map