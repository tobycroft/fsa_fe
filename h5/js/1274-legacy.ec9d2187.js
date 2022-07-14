"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1274],{1274:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"step-one-container"},[r("div",{staticClass:"form-style"},[r("van-form",{on:{submit:e.onSubmit}},[r("AvatarUpload",{staticClass:"form-item",attrs:{src:e.avatarUrl},on:{change:e.changeAvatarUpload}}),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"请输入真实姓名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"radio",label:"性别"},scopedSlots:e._u([{key:"input",fn:function(){return[r("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[r("van-radio",{attrs:{name:"1"}},[e._v("男")]),r("van-radio",{attrs:{name:"0"}},[e._v("女")])],1)]},proxy:!0}])})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"email",label:"电子邮件",placeholder:"请输入邮箱地址"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"jobTitle",label:"职务",placeholder:"请输入职务"},model:{value:e.jobTitle,callback:function(t){e.jobTitle=t},expression:"jobTitle"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"jobTerm",label:"职称",placeholder:"请输入职称"},model:{value:e.jobTerm,callback:function(t){e.jobTerm=t},expression:"jobTerm"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{value:e.instructorTitleCmp,name:"mtid",label:"讲师标签",placeholder:"请选择讲师标签",readonly:""},on:{click:function(t){e.showSelectThe=!0}}})],1),r("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[e._v(" 下一步 ")])],1)],1),r("SelectThe",{attrs:{show:e.showSelectThe,list:e.instructorTitleList,active:e.mtid},on:{"update:show":function(t){e.showSelectThe=t},change:e.onSelectTheChange,save:function(t){e.showSelectThe=!1}}})],1)},a=[],n=r(16198),o=r(62032),s=(r(35666),r(41539),r(78783),r(33948),r(68309),{components:{AvatarUpload:function(){return r.e(2491).then(r.bind(r,52491))},CardForm:function(){return r.e(7329).then(r.bind(r,77329))},SelectThe:function(){return r.e(7509).then(r.bind(r,37509))}},props:{source:{type:Object,default:function(){}}},computed:{instructorTitleCmp:function(){var e,t=(0,o.Z)(this.instructorTitleList);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(r.id===this.mtid)return r.name}}catch(i){t.e(i)}finally{t.f()}}},data:function(){return{avatarUrl:"",userName:"",gender:"1",tel:"",email:"",jobTitle:"",jobTerm:"",mtid:null,iid:"",aid:"",showSelectThe:!1,instructorTitleList:[]}},watch:{source:function(){this.initData()}},created:function(){this.initData()},methods:{onSubmit:function(e){e.avatarUrl=this.avatarUrl,console.log("values :>> ",e),this.updateLecturerInformationAPI()},initData:function(){console.log("this.source :>> ",this.source),this.avatarUrl=this.source.img,this.userName=this.source.name,this.gender="".concat(this.source.gender),this.tel=this.source.phone,this.email=this.source.mail&&"",this.jobTitle=this.source.job&&"",this.jobTerm=this.source.title&&"",this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfo.id,this.instructorTitleListAPI(this.aid)},changeAvatarUpload:function(e){this.avatarUrl=e},updateLecturerInformationAPI:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("this.mtid :>> ",e.mtid),r={img:e.avatarUrl,name:e.userName,gender:e.gender,mail:e.email,job:e.jobTitle,title:e.jobTerm,cert:e.source.instructor_info.cert,work_address:e.source.instructor_info.work_address,tel:e.tel,location:e.source.instructor_info.location,address:e.source.instructor_info.address,mtid:e.mtid,iid:e.iid,aid:e.aid,is_admin:!0},t.next=4,e.$request("instructor.updateLecturerInformation",r);case 4:i=t.sent,console.log("工会功能-更新讲师信息API_res :>> ",i),e.nextStep();case 7:case"end":return t.stop()}}),t)})))()},nextStep:function(){this.$emit("nextStep")},instructorTitleListAPI:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:e},r.next=3,t.$request("instructor.instructorTitleList",i);case 3:a=r.sent,console.log("获取职称列表API_res :>> ",a),t.instructorTitleList=a;case 6:case"end":return r.stop()}}),r)})))()},onSelectTheChange:function(e){this.mtid=e.id}}}),c=s,l=r(1001),u=(0,l.Z)(c,i,a,!1,null,"4cf547ff",null),d=u.exports}}]);
//# sourceMappingURL=1274-legacy.ec9d2187.js.map