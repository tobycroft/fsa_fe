"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6777],{36777:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("van-image",{attrs:{src:t.$store.getters.associationInfo.img,fit:"cover"}}),n("div",{staticClass:"login-from-box"},[n("Card",{staticClass:"card"},[n("div",{staticClass:"content"},[n("Logo",{attrs:{imgUrl:t.associationInfo.logo?t.associationInfo.logo:"",size:250,round:"",border:""}}),n("p",{staticClass:"title"},[t._v(" "+t._s(t.associationInfo.name?t.associationInfo.name:"暂无名称")+" ")]),n("van-divider",{staticClass:"divider"},[t._v("●")]),n("InputTel",{staticClass:"input-style",attrs:{type:"tel"},on:{submit:t.getInputTel}}),n("InputTel",{attrs:{type:"validation",tel:t.tel},on:{submit:t.getValidation}}),n("van-button",{staticClass:"login-btn",attrs:{round:"",type:"info"},on:{click:t.login}},[t._v("立即登录")]),n("p",{staticClass:"agreement"},[t._v(" 登录即同意 "),n("Link",{attrs:{linkUrl:"#;"}},[t._v(" 用户协议")]),t._v(" 和 "),n("Link",{attrs:{linkUrl:"#;"}},[t._v("隐私政策")]),t._v(" 首次登录将自动注册 ")],1)],1)])],1)],1)},i=[],o=n(16198),a=(n(35666),n(41539),n(78783),n(33948),n(74916),n(15306),n(76711)),s={components:{Card:function(){return n.e(3314).then(n.bind(n,53314))},Logo:function(){return n.e(2860).then(n.bind(n,12860))},InputTel:function(){return n.e(8319).then(n.bind(n,48319))},Link:function(){return n.e(6236).then(n.bind(n,76236))}},data:function(){return{tel:"",validateCode:"",associationInfo:{},bgLoad:!1}},created:function(){this.$store.dispatch("association/associationInfoDomainAPI"),this.associationInfo=this.$store.getters.associationInfo},methods:{hashDomain:a.og,getInputTel:function(t){this.tel=t},getValidation:function(t){this.validateCode=t},login:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.tel&&""!==t.validateCode){e.next=3;break}return t.$toast("手机号及验证码不能为空!"),e.abrupt("return");case 3:if(11==t.tel.length){e.next=6;break}return t.$toast("请输入正确的手机号码!"),e.abrupt("return");case 6:return e.next=8,t.$store.dispatch("user/getLoginInfo",{phone:t.tel,code:t.validateCode});case 8:return n=t.$store.getters.associationInfo.id,e.next=11,t.$store.dispatch("user/getAccountIdInfo",n);case 11:t.$router.replace("/");case 12:case"end":return e.stop()}}),e)})))()}}},c=s,u=n(1001),l=(0,u.Z)(c,r,i,!1,null,"4cd220d4",null),f=l.exports},76711:function(t,e,n){n.d(e,{Ef:function(){return c},Y_:function(){return l},e9:function(){return r},fS:function(){return s},i_:function(){return o},o1:function(){return a},og:function(){return u},rm:function(){return i}});n(41539),n(54747),n(74916),n(15306);function r(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}var i=function(t,e){var n=new Date(Date.parse(t)),r=new Date(Date.parse(e));return n>r},o=function(t,e,n){switch(e){case"H":case"h":if("H"===n||"h"===n)return t;if("M"===n||"m"===n)return 60*t;if("S"===n||"s"===n)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return t/60;if("M"===n||"m"===n)return t;if("S"===n||"s"===n)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return t/60/60;if("M"===n||"m"===n)return t/60;if("S"===n||"s"===n)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return t.forEach((function(t){var i=t[n].indexOf(e);i>-1&&r.push(t)})),r},s=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(t){var e=[];for(var n in t)e.push(t[n]);return e.reverse()},u=function(t,e){console.log("importType :>> ",t);var n="";return"default"!==t&&"a"!==t||(n="fj"),"gt"===t&&(n="gt"),n===e},l=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=6777-legacy.3ee45f11.js.map