"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8861],{42548:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"step-one-container"},[r("div",{staticClass:"form-style"},[r("van-form",{on:{submit:e.onSubmit}},[r("AvatarUpload",{staticClass:"form-item",attrs:{src:e.avatarUrl},on:{change:e.changeAvatarUpload}}),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"请输入真实姓名",rules:[{required:!0,message:"请输入真实姓名"}]},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"radio",label:"性别",rules:[{required:!0,message:"请选择性别"}]},scopedSlots:e._u([{key:"input",fn:function(){return[r("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[r("van-radio",{attrs:{name:"1"}},[e._v("男")]),r("van-radio",{attrs:{name:"0"}},[e._v("女")])],1)]},proxy:!0}])})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"email",label:"电子邮件",placeholder:"请输入邮箱地址",rules:[{required:!0,message:"请输入邮箱地址"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"jobTitle",label:"职务",placeholder:"请输入职务",rules:[{required:!0,message:"请输入职务"}]},model:{value:e.jobTitle,callback:function(t){e.jobTitle=t},expression:"jobTitle"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"jobTerm",label:"职称",placeholder:"请输入职称",rules:[{required:!0,message:"请输入职称"}]},model:{value:e.jobTerm,callback:function(t){e.jobTerm=t},expression:"jobTerm"}})],1),r("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[e._v(" 下一步 ")])],1)],1)])},i=[],s=r(16198),n=(r(35666),r(41539),r(78783),r(33948),r(68309),{components:{AvatarUpload:function(){return r.e(8348).then(r.bind(r,68348))},CardForm:function(){return r.e(7329).then(r.bind(r,77329))}},props:{source:{type:Object,default:function(){}}},data:function(){return{avatarUrl:"",userName:"",gender:"1",tel:"",email:"",jobTitle:"",jobTerm:"",iid:"",aid:""}},watch:{source:function(){this.initData()}},created:function(){this.initData()},methods:{onSubmit:function(e){e.avatarUrl=this.avatarUrl,console.log("values :>> ",e),this.updateLecturerInformationAPI()},initData:function(){console.log("this.source :>> ",this.source),this.avatarUrl=this.source.img,this.userName=this.source.name,this.gender="".concat(this.source.gender),this.tel=this.source.phone,this.email=this.source.instructor_info.mail,this.jobTitle=this.source.instructor_info.job,this.jobTerm=this.source.instructor_info.title,this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfoCurrent.id},changeAvatarUpload:function(e){this.avatarUrl=e},updateLecturerInformationAPI:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={img:e.avatarUrl,name:e.userName,gender:e.gender,mail:e.email,job:e.jobTitle,title:e.jobTerm,cert:e.source.instructor_info.cert,work_address:e.source.instructor_info.work_address,tel:e.tel,location:e.source.instructor_info.location,address:e.source.instructor_info.address,mtids:"",iid:e.iid,aid:e.aid,is_admin:!0},t.next=3,e.$request("instructor.updateLecturerInformation",r);case 3:a=t.sent,console.log("工会功能-更新讲师信息API_res :>> ",a),e.nextStep();case 6:case"end":return t.stop()}}),t)})))()},nextStep:function(){this.$emit("nextStep")}}}),o=n,l=r(1001),c=(0,l.Z)(o,a,i,!1,null,"4d442682",null),u=c.exports}}]);
//# sourceMappingURL=8861-legacy.9089b1e8.js.map