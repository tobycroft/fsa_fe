"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2506],{2506:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-search",{attrs:{placeholder:"请输入主办方关键词"},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),n("div",{staticClass:"gap"}),n("div",{staticClass:"container"},e._l(e.hostList,(function(t,r){return n("div",{key:t.id,staticClass:"section",class:{"one-style":0===r},on:{click:function(n){return e.handleSelect(t.id,t.name)}}},[n("span",{staticClass:"char"},[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"no-more"},[e._v("没有更多了~")]),n("div",{staticClass:"bottom-gap"})],1)},s=[],a=(n(80333),n(37662)),i={components:{},data(){return{searchKeyword:"",page:{limit:10,pageNo:1},hostList:[]}},created(){this.associationInfoListAPI()},methods:{handleSelect(e,t){sessionStorage.setItem("selectAssociation",JSON.stringify({id:e,name:t})),this.$router.back()},async associationInfoListAPI(){const e=await this.$request("association.associationInfoList");this.hostList=(0,a.Ef)(e)},handleAdd(){this.$router.push({path:"/adminAddtUnit"})}}},o=i,c=n(43736),u=(0,c.Z)(o,r,s,!1,null,"68a49598",null),l=u.exports},80333:function(e,t,n){var r=n(20144);t["Z"]=new r["default"]},37662:function(e,t,n){function r(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}n.d(t,{Ef:function(){return c},Y_:function(){return l},e9:function(){return r},fS:function(){return o},i_:function(){return a},o1:function(){return i},og:function(){return u},rm:function(){return s}});const s=(e,t)=>{let n=new Date(Date.parse(e)),r=new Date(Date.parse(t));return n>r},a=(e,t,n)=>{switch(t){case"H":case"h":if("H"===n||"h"===n)return e;if("M"===n||"m"===n)return 60*e;if("S"===n||"s"===n)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return e/60;if("M"===n||"m"===n)return e;if("S"===n||"s"===n)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return e/60/60;if("M"===n||"m"===n)return e/60;if("S"===n||"s"===n)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},i=(e,t,n="name")=>{const r=[];return e.forEach((e=>{const s=e[n].indexOf(t);s>-1&&r.push(e)})),r},o=e=>e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),c=e=>{const t=[];for(const n in e)t.push(e[n]);return t.reverse()},u=(e,t)=>{console.log("importType :>> ",e);let n="";return"default"!==e&&"a"!==e||(n="fj"),"gt"===e&&(n="gt"),n===t},l=e=>{switch(e){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=2506.fd1c54a1.js.map