"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4603],{74603:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-tel-container"},[s("header",[s("p",{staticClass:"bind-tel-title"},[t._v("已绑定的手机号：")]),s("p",{staticClass:"bind-tel-number"},[t._v(" "+t._s(t.hostMenberMe.tel?t.hostMenberMe.tel:"-")+" ")])]),s("article",[s("p",{staticClass:"form-title"},[t._v("更换的新手机号")]),s("van-form",{on:{submit:t.onSubmit}},[s("CardForm",{staticClass:"card-form-style"},[s("InputTel",{attrs:{type:"tel"},on:{submit:t.onChangePhone}})],1),s("CardForm",{staticClass:"card-form-style"},[s("InputTel",{attrs:{type:"validation",tel:t.tel},on:{submit:t.onChangeValicode}})],1),s("van-button",{staticClass:"submit-btn",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 确定修改并返回 ")])],1)],1)])},n=[],o={components:{CardForm:()=>s.e(4221).then(s.bind(s,4221)),InputTel:()=>s.e(9452).then(s.bind(s,29452))},data(){return{hostMenberMe:{},tel:"",code:""}},created(){this.initData()},methods:{initData(){this.hostMenberMe=this.$store.getters.hostMenberMe},onChangePhone(t){this.tel=t},onChangeValicode(t){this.code=t},handleValiDator(){return""===this.tel?(this.$toast("请输入手机号!"),!1):""!==this.code||(this.$toast("请输入验证码"),!1)},async hostMemberEditAPI(){const t={hid:this.hostMenberMe.hid,nickname:this.hostMenberMe.name,tel:this.tel,code:this.code},e=await this.$request("host.hostMemberEdit",t);console.log("res :>> ",e),this.$toast("修改成功!"),setTimeout((()=>{this.$router.go(-1)}),100)},onSubmit(){this.handleValiDator()&&(console.log("submit",this.tel,this.code),this.hostMemberEditAPI())}}},a=o,r=s(43736),h=(0,r.Z)(a,i,n,!1,null,"763fe500",null),l=h.exports}}]);
//# sourceMappingURL=4603.8a05c40a.js.map