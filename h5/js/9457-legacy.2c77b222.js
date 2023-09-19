"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9457],{59457:function(A,e,t){t.r(e),t.d(e,{default:function(){return Q}});var B=function(){var A=this,e=A.$createElement,B=A._self._c||e;return B("div",{staticClass:"host-edit-container"},[B("van-form",{on:{submit:A.onSubmit}},[B("AvatarUpload",{staticClass:"avatar-upload-style",attrs:{title:"点击更改单位标志",src:A.icon,defaultSrc:t(63592),shape:"square"},on:{change:A.changeAvatar}}),B("CardForm",{staticClass:"card-form-style"},[B("van-field",{attrs:{name:"name",label:"名称",placeholder:"请输入单位全称",rules:[{required:!0,message:"请输入单位全称"}]},model:{value:A.name,callback:function(e){A.name=e},expression:"name"}})],1),B("CardForm",{staticClass:"card-form-style"},[B("van-field",{attrs:{name:"nickname",label:"经办人姓名",placeholder:"请输入经办人姓名",rules:[{required:!0,message:"请输入经办人姓名"}]},model:{value:A.nickname,callback:function(e){A.nickname=e},expression:"nickname"}})],1),B("CardForm",{staticClass:"card-form-style"},[B("van-field",{attrs:{name:"tel",label:"经办人手机号",placeholder:"请输入经办人手机号",disabled:""},scopedSlots:A._u([{key:"button",fn:function(){return[B("div",{staticClass:"change-phone-btn",on:{click:function(e){return A.$router.push("editPhone")}}},[A._v(" 修改手机号 ")])]},proxy:!0}]),model:{value:A.tel,callback:function(e){A.tel=e},expression:"tel"}})],1),B("CardForm",{staticClass:"card-form-style"},[B("van-field",{attrs:{name:"student",label:"学生人数",placeholder:"请输入学生人数",rules:[{required:!0,message:"请输入学生人数"}]},model:{value:A.student,callback:function(e){A.student=e},expression:"student"}})],1),B("CardForm",{staticClass:"card-form-style"},[B("van-field",{attrs:{name:"employee",label:"教职工人数",placeholder:"请输入教职工人数",rules:[{required:!0,message:"请输入教职工人数"}]},model:{value:A.employee,callback:function(e){A.employee=e},expression:"employee"}})],1),B("div",{staticClass:"submit-btn-box"},[B("van-button",{staticClass:"submit-btn",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[A._v(" 修改 ")])],1)],1)],1)},g=[],n=t(48534),a=(t(35666),t(41539),t(78783),t(33948),t(74916),t(15306),t(68309),{components:{AvatarUpload:function(){return t.e(7975).then(t.bind(t,37975))},CardForm:function(){return t.e(4221).then(t.bind(t,4221))}},watch:{"$store.getters.hostMenberMe":function(){this.setEchoHostInfo()},"$store.getters.hostInfo":function(){this.setEchoHostInfo()}},data:function(){return{aid:null,hid:null,icon:"",name:"",nickname:"",tel:"",student:"",employee:""}},created:function(){this.initData()},methods:{initData:function(){var A=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.aid=A.$store.getters.associationInfo.id,t=A.$store.dispatch("host/hostMemberMeAPI",A.aid),A.hid=A.$store.getters.hostMenberMe.hid,t||A.$dialog.alert({title:"暂无权限",message:"当前账户暂无主办方管理权限!"}).then((function(){A.$router.replace({path:"/"})})),A.$store.dispatch("host/hostInfoGetAPI",A.hid),A.setEchoHostInfo();case 6:case"end":return e.stop()}}),e)})))()},setEchoHostInfo:function(){var A=this.$store.getters.hostMenberMe,e=this.$store.getters.hostInfo;console.log("设置表单回显数据 :>> ",A,e),this.icon=e.icon,this.name=e.name,this.nickname=A.name,this.tel=A.tel,this.student=e.student,this.employee=e.employee},changeAvatar:function(A){console.log("头像图片地址 :>> ",A),this.icon=A},hostInfoEditAPI:function(A){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var B,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:B={id:e.hid,icon:e.icon,name:A.name,info:"",img:"",employee:A.employee,student:A.student},g=e.$request("host.hostInfoEdit",B),console.log("修改主办方信息API_res :>> ",g),e.$toast("修改成功!");case 4:case"end":return t.stop()}}),t)})))()},hostMemberEditNicknameAPI:function(A,e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function B(){var g,n;return regeneratorRuntime.wrap((function(B){while(1)switch(B.prev=B.next){case 0:return g={hid:A,nickname:e},B.next=3,t.$request("host.hostMemberEditNickname",g);case 3:n=B.sent,console.log("res :>> ",n);case 5:case"end":return B.stop()}}),B)})))()},onSubmit:function(A){console.log("submit",A),this.hostInfoEditAPI(A),this.hostMemberEditNicknameAPI(this.hid,this.nickname)}}}),s=a,o=t(43736),C=(0,o.Z)(s,B,g,!1,null,"b4485082",null),Q=C.exports},63592:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=9457-legacy.2c77b222.js.map