"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1274],{1274:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step-one-container"},[i("div",{staticClass:"form-style"},[i("van-form",{on:{submit:t.onSubmit}},[i("AvatarUpload",{staticClass:"form-item",attrs:{src:t.avatarUrl},on:{change:t.changeAvatarUpload}}),i("CardForm",{staticClass:"form-item"},[i("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"请输入真实姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),i("CardForm",{staticClass:"form-item"},[i("van-field",{attrs:{name:"radio",label:"性别"},scopedSlots:t._u([{key:"input",fn:function(){return[i("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[i("van-radio",{attrs:{name:"1"}},[t._v("男")]),i("van-radio",{attrs:{name:"0"}},[t._v("女")])],1)]},proxy:!0}])})],1),i("CardForm",{staticClass:"form-item"},[i("van-field",{attrs:{name:"email",label:"电子邮件",placeholder:"请输入邮箱地址"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("CardForm",{staticClass:"form-item"},[i("van-field",{attrs:{name:"jobTitle",label:"职务",placeholder:"请输入职务"},model:{value:t.jobTitle,callback:function(e){t.jobTitle=e},expression:"jobTitle"}})],1),i("CardForm",{staticClass:"form-item"},[i("van-field",{attrs:{name:"jobTerm",label:"职称",placeholder:"请输入职称"},model:{value:t.jobTerm,callback:function(e){t.jobTerm=e},expression:"jobTerm"}})],1),i("CardForm",{staticClass:"form-item"},[i("van-field",{attrs:{value:t.instructorTitleCmp,name:"mtid",label:"讲师标签",placeholder:"请选择讲师标签",readonly:""},on:{click:function(e){t.showSelectThe=!0}}})],1),i("van-button",{staticClass:"btn-style",attrs:{round:"",block:"",type:"info","native-type":"submit",required:""}},[t._v(" 下一步 ")])],1)],1),i("SelectThe",{attrs:{show:t.showSelectThe,list:t.instructorTitleList,active:t.mtid},on:{"update:show":function(e){t.showSelectThe=e},change:t.onSelectTheChange,save:function(e){t.showSelectThe=!1}}})],1)},a=[],r={components:{AvatarUpload:()=>i.e(2491).then(i.bind(i,52491)),CardForm:()=>i.e(7329).then(i.bind(i,77329)),SelectThe:()=>i.e(7509).then(i.bind(i,37509))},props:{source:{type:Object,default:()=>{}}},computed:{instructorTitleCmp(){for(const t of this.instructorTitleList)if(t.id===this.mtid)return t.name}},data(){return{avatarUrl:"",userName:"",gender:"1",tel:"",email:"",jobTitle:"",jobTerm:"",mtid:null,iid:"",aid:"",showSelectThe:!1,instructorTitleList:[]}},watch:{source(){this.initData()}},created(){this.initData()},methods:{onSubmit(t){t.avatarUrl=this.avatarUrl,console.log("values :>> ",t),this.updateLecturerInformationAPI()},initData(){console.log("this.source :>> ",this.source),this.avatarUrl=this.source.img,this.userName=this.source.name,this.gender=`${this.source.gender}`,this.tel=this.source.phone,this.email=this.source.mail&&"",this.jobTitle=this.source.job&&"",this.jobTerm=this.source.title&&"",this.iid=this.$store.getters.accountIdInfo.iid,this.aid=this.$store.getters.associationInfo.id,this.instructorTitleListAPI(this.aid)},changeAvatarUpload(t){this.avatarUrl=t},async updateLecturerInformationAPI(){console.log("this.mtid :>> ",this.mtid);const t={img:this.avatarUrl,name:this.userName,gender:this.gender,mail:this.email,job:this.jobTitle,title:this.jobTerm,cert:this.source.instructor_info.cert,work_address:this.source.instructor_info.work_address,tel:this.tel,location:this.source.instructor_info.location,address:this.source.instructor_info.address,mtid:this.mtid,iid:this.iid,aid:this.aid,is_admin:!0},e=await this.$request("instructor.updateLecturerInformation",t);console.log("工会功能-更新讲师信息API_res :>> ",e),this.nextStep()},nextStep(){this.$emit("nextStep")},async instructorTitleListAPI(t){const e={aid:t},i=await this.$request("instructor.instructorTitleList",e);console.log("获取职称列表API_res :>> ",i),this.instructorTitleList=i},onSelectTheChange(t){this.mtid=t.id}}},o=r,n=i(1001),l=(0,n.Z)(o,s,a,!1,null,"4cf547ff",null),c=l.exports}}]);
//# sourceMappingURL=1274.197abb3b.js.map