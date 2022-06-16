"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2463],{82463:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"step-one-container"},[r("div",{staticClass:"form-style"},[r("van-form",{on:{submit:t.onSubmit}},[r("AvatarUpload",{staticClass:"form-item",attrs:{src:t.avatarUrl},on:{change:t.changeAvatarUpload}}),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"请输入真实姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"radio",label:"性别"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[r("van-radio",{attrs:{name:"1"}},[t._v("男")]),r("van-radio",{attrs:{name:"0"}},[t._v("女")])],1)]},proxy:!0}])})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"email",label:"电子邮件",placeholder:"请输入邮箱地址"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"jobTitle",label:"职务",placeholder:"请输入职务"},model:{value:t.jobTitle,callback:function(e){t.jobTitle=e},expression:"jobTitle"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{name:"jobTerm",label:"职称",placeholder:"请输入职称"},model:{value:t.jobTerm,callback:function(e){t.jobTerm=e},expression:"jobTerm"}})],1),r("CardForm",{staticClass:"form-item"},[r("van-field",{attrs:{value:t.instructorTitleCmp,name:"mtid",label:"讲师标签",placeholder:"请选择讲师标签",readonly:""},on:{click:function(e){t.showSelectThe=!0}}})],1),r("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[t._v(" 下一步 ")])],1)],1),r("SelectThe",{attrs:{show:t.showSelectThe,list:t.instructorTitleList,active:t.mtid},on:{"update:show":function(e){t.showSelectThe=e},change:t.onSelectTheChange,save:function(e){t.showSelectThe=!1}}})],1)},a=[],n=r(16198),o=r(62032),s=(r(35666),r(41539),r(78783),r(33948),r(68309),{components:{AvatarUpload:function(){return r.e(2491).then(r.bind(r,52491))},CardForm:function(){return r.e(7329).then(r.bind(r,77329))},SelectThe:function(){return r.e(7509).then(r.bind(r,37509))}},props:{source:{type:Object,default:function(){}}},computed:{instructorTitleCmp:function(){var t,e=(0,o.Z)(this.instructorTitleList);try{for(e.s();!(t=e.n()).done;){var r=t.value;if(r.id===this.mtid)return r.name}}catch(i){e.e(i)}finally{e.f()}}},data:function(){return{avatarUrl:"",userName:"",gender:"1",tel:"",email:"",jobTitle:"",jobTerm:"",mtid:null,iid:"",aid:"",showSelectThe:!1,instructorTitleList:[]}},watch:{source:function(){this.initData()}},created:function(){this.initData()},methods:{onSubmit:function(t){t.avatarUrl=this.avatarUrl,console.log("values :>> ",t),this.updateLecturerInformationAPI()},initData:function(){console.log("this.source :>> ",this.source),this.avatarUrl=this.source.img,this.userName=this.source.name,this.gender="".concat(this.source.gender),this.tel=this.source.phone,this.email=this.source.instructor_info.mail,this.jobTitle=this.source.instructor_info.job,this.jobTerm=this.source.instructor_info.title,this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfo.id,this.instructorTitleListAPI(this.aid)},changeAvatarUpload:function(t){this.avatarUrl=t},updateLecturerInformationAPI:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("this.mtid :>> ",t.mtid),r={img:t.avatarUrl,name:t.userName,gender:t.gender,mail:t.email,job:t.jobTitle,title:t.jobTerm,cert:t.source.instructor_info.cert,work_address:t.source.instructor_info.work_address,tel:t.tel,location:t.source.instructor_info.location,address:t.source.instructor_info.address,mtid:t.mtid,iid:t.iid,aid:t.aid,is_admin:!0},e.next=4,t.$request("instructor.updateLecturerInformation",r);case 4:i=e.sent,console.log("工会功能-更新讲师信息API_res :>> ",i),t.nextStep();case 7:case"end":return e.stop()}}),e)})))()},nextStep:function(){this.$emit("nextStep")},instructorTitleListAPI:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={aid:t},r.next=3,e.$request("instructor.instructorTitleList",i);case 3:a=r.sent,console.log("获取职称列表API_res :>> ",a),e.instructorTitleList=a;case 6:case"end":return r.stop()}}),r)})))()},onSelectTheChange:function(t){this.mtid=t.id}}}),c=s,l=r(1001),u=(0,l.Z)(c,i,a,!1,null,"3a1a5db6",null),d=u.exports}}]);
//# sourceMappingURL=2463-legacy.e1950458.js.map