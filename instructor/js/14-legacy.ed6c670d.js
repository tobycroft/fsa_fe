"use strict";(self["webpackChunkhome_research_screen"]=self["webpackChunkhome_research_screen"]||[]).push([[14],{2014:function(t,e,i){i.r(e),i.d(e,{default:function(){return o}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-verification-code-container flex"},[i("div",{staticClass:"flex-start"},[i("p",{staticClass:"label-style"},[t._v("验证码")]),i("div",[i("el-input",{staticClass:"el-input-style",attrs:{placeholder:"请输验证码",value:t.value},on:{input:t.onInput}})],1)]),i("el-button",{staticClass:"btn-style",attrs:{type:"text",disabled:t.disabled},on:{click:t.onGetVerificationCode}},[t._v(" "+t._s(t.disabled?"重新获取验证码("+t.timeNum+")":"获取验证码")+" ")])],1)},s=[],l={props:{value:{type:String,default:""}},data:function(){return{timer:null,timeNum:null,disabled:!1}},beforeDestroy:function(){this.cancelDisablButton()},methods:{onGetVerificationCode:function(){var t=this;console.log("获取验证码 :>> "),this.$emit("send"),this.disableButton(),this.timer=setInterval((function(){t.timeNum<=1&&t.cancelDisablButton(),t.timeNum--}),1e3)},disableButton:function(){this.disabled=!0,this.timeNum=60},cancelDisablButton:function(){clearInterval(this.timer),this.disabled=!1},onInput:function(t){this.$emit("update:value",t)}}},a=l,u=i(1001),c=(0,u.Z)(a,n,s,!1,null,"2839c56b",null),o=c.exports}}]);
//# sourceMappingURL=14-legacy.ed6c670d.js.map