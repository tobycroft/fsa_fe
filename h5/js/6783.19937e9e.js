"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6783],{96783:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"data-coard-container"},[r("div",{staticClass:"background-box"},[r("van-image",{attrs:{src:t.$store.getters.associationInfo.img,fit:"cover"}}),r("div",{staticClass:"data-board-style"},[r("div",{staticClass:"blur-style"}),r("van-image",{staticClass:"data-board-bg-style",attrs:{src:a(91872)}})],1)],1),r("article",[r("Card",{staticClass:"page-box-style",attrs:{radius:40}},[r("DataBoardCard",{attrs:{coverTotalNumber:t.coverTotalNumber,preachTotalNumber:t.preachTotalNumber,areaCoverage:t.areaCoverage}}),r("TabsNum",{staticClass:"tabs-num-style",attrs:{list:t.tabsList,active:t.active},on:{change:t.tabsNumChange}}),r("DataShow",{ref:"dataShow",attrs:{active:t.active},on:{change:t.changeDataShow}})],1)],1)])},s=[],o=a(76711),n={components:{Card:()=>a.e(3314).then(a.bind(a,53314)),IconTitle:()=>a.e(9832).then(a.bind(a,9832)),TimeUpdate:()=>a.e(9075).then(a.bind(a,99075)),NumUnit:()=>a.e(9968).then(a.bind(a,79968)),TabsNum:()=>a.e(4787).then(a.bind(a,64787)),DataBoardCard:()=>a.e(1511).then(a.bind(a,41511)),DataShow:()=>a.e(1738).then(a.bind(a,71738))},data(){return{tabsList:["近期区域","承办单位","宣讲详情","区域覆盖","授课排名","新增人数"],coverTotalNumber:0,preachTotalNumber:0,areaCoverage:0,active:0,bgLoad:!1,associationInfo:{}}},async created(){this.$store.getters.associationInfo&&this.$store.getters.associationInfo.id||await this.$store.dispatch("association/associationInfoDomainAPI"),this.associationInfo=this.$store.getters.associationInfo,this.coverTotalNumberAPI(),this.preachTotalNumberAPI(),this.areaCoverageAPI()},methods:{hashDomain:o.og,tabsNumChange(t){console.log("tabsNum_val :>> ",t),this.active=t,this.$refs.dataShow.activeSwipe(this.active)},changeDataShow(t){console.log("DataShow_val :>> ",t),this.active=t},async coverTotalNumberAPI(){const t=this.$store.getters.associationInfo.id,e={aid:t},a=await this.$request("lecture.coverTotalNumber",e);console.log("覆盖总人数API_res :>> ",a),this.coverTotalNumber=a},async preachTotalNumberAPI(){const t=this.$store.getters.associationInfo.id,e={type:"all",aid:t},a=await this.$request("lecture.preachTotalNumber",e);console.log("宣讲总场次API_res :>> ",a),this.preachTotalNumber=a},async areaCoverageAPI(){const t=this.$store.getters.associationInfo.id,e={aid:t},a=await this.$request("lecture.areaCoverage",e);console.log("区域覆盖率API_res :>> ",a),this.areaCoverage=a}}},i=n,c=a(1001),u=(0,c.Z)(i,r,s,!1,null,"328a1ce0",null),l=u.exports},76711:function(t,e,a){function r(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}a.d(e,{Ef:function(){return c},Y_:function(){return l},e9:function(){return r},fS:function(){return i},i_:function(){return o},o1:function(){return n},og:function(){return u},rm:function(){return s}});const s=(t,e)=>{let a=new Date(Date.parse(t)),r=new Date(Date.parse(e));return a>r},o=(t,e,a)=>{switch(e){case"H":case"h":if("H"===a||"h"===a)return t;if("M"===a||"m"===a)return 60*t;if("S"===a||"s"===a)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===a||"h"===a)return t/60;if("M"===a||"m"===a)return t;if("S"===a||"s"===a)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===a||"h"===a)return t/60/60;if("M"===a||"m"===a)return t/60;if("S"===a||"s"===a)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},n=(t,e,a="name")=>{const r=[];return t.forEach((t=>{const s=t[a].indexOf(e);s>-1&&r.push(t)})),r},i=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),c=t=>{const e=[];for(const a in t)e.push(t[a]);return e.reverse()},u=(t,e)=>{console.log("importType :>> ",t);let a="";return"default"!==t&&"a"!==t||(a="fj"),"gt"===t&&(a="gt"),a===e},l=t=>{switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}},91872:function(t,e,a){t.exports=a.p+"img/data_board_bg.39e99e74.png"}}]);
//# sourceMappingURL=6783.19937e9e.js.map