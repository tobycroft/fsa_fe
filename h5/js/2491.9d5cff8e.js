"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2491],{52491:function(A,e,s){s.r(e),s.d(e,{default:function(){return i}});var t=function(){var A=this,e=A.$createElement,s=A._self._c||e;return s("div",{staticClass:"avatar-upload-container flex-start"},[s("el-upload",{ref:"upload",staticClass:"avatar-uploader flex-center",class:{"square-style":"square"===A.shape},attrs:{action:"#","show-file-list":!1,"on-success":A.handleAvatarSuccess,"before-upload":A.beforeAvatarUpload,"http-request":A.submitUpload,multiple:!1}},[A.imageUrl?s("van-image",{staticClass:"avatar",style:{width:"100%",height:"100%"},attrs:{src:A.imageUrl,fit:"fill"}}):s("van-image",{style:{width:"100%",height:"100%"},attrs:{src:A.defaultSrc}})],1),s("p",{staticClass:"describe-style"},[A._v(A._s(A.title))]),s("input",{staticClass:"file-input-style",attrs:{type:"file",name:"file"},on:{change:A.changeFile}})],1)},a=[],g={props:{src:{type:String,default:""},title:{type:String,default:"点击上传头像"},defaultSrc:{type:String,default:s(43706)},shape:{type:String,default:""}},watch:{src(A){""!==A&&(this.imageUrl=A)}},data(){return{fileList:[],imageUrl:""}},created(){""!==this.src&&(this.imageUrl=this.src)},methods:{async changeFile(A){await this.beforeAvatarUpload(A.target.files[0]),this.file&&this.submitUpload()},handleAvatarSuccess(A,e,s){console.log("文件上传成功时的钩子_handleAvatarSuccess :>> ",A,e,s)},beforeAvatarUpload(A){console.log("上传文件之前的钩子_beforeAvatarUpload :>> ",A),this.file=A},async submitUpload(){const A={file:this.file},e=await this.$request("aoss.fileUpload",A);console.log("覆盖默认的上传行为_res :>> ",e),this.imageUrl=e,this.change()},change(){this.$emit("change",this.imageUrl)}}},l=g,r=s(1001),c=(0,r.Z)(l,t,a,!1,null,"63a9d4e7",null),i=c.exports},43706:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=2491.9d5cff8e.js.map