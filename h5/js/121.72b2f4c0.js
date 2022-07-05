"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[121],{60121:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"introduction-platform-container"},[s("van-image",{staticClass:"bg-style",attrs:{src:n(28638)}}),s("article",[s("Logo",{staticClass:"logo-style",attrs:{imgUrl:t.unionDetails.logo?t.unionDetails.logo:"",size:250,round:"",border:""}}),s("Card",{staticClass:"introduction-box",attrs:{radius:16}},[s("p",{staticClass:"introduction-title"},[t._v(t._s(t.unionDetails.name))]),s("p",{staticClass:"introduction-content"},[t._v(t._s(t.unionDetails.info))])]),s("van-tabs",{ref:"tabs",staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tab",{attrs:{title:"平台简介"}},[s("van-image",{staticClass:"members-the-list-img",attrs:{src:t.unionDetails.poster}})],1),t.hashDomain(t.associationInfo.import_type,"fj")?s("van-tab",{attrs:{title:"讲师公示"}},[s("div",{staticClass:"tab-content"},[s("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入讲师名称",shape:"round"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.keywordMain,callback:function(e){t.keywordMain=e},expression:"keywordMain"}}),s("p",{staticClass:"main-talker-box-label"},[t._v("全部主讲人("+t._s(t.totalMain)+")")]),s("MainList",{ref:"mainList",attrs:{aid:t.currentTradeUnionID,keyword:t.keywordMain},on:{changeTotal:t.changeTotalMain}})],1)]):t._e(),t.hashDomain(t.associationInfo.import_type,"gt")?s("van-tab",{attrs:{title:"成员单位"}},[s("div",{staticClass:"tab-content"},[s("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入成员单位名称",shape:"round"},on:{search:t.onSearchHostUnit,clear:t.hostSearchClear},model:{value:t.keywordHost,callback:function(e){t.keywordHost=e},expression:"keywordHost"}}),s("p",{staticClass:"main-talker-box-label"},[t._v("全部成员单位("+t._s(t.totalHost)+")")]),s("HostUnitList",{ref:"hostUnitList",attrs:{aid:t.currentTradeUnionID,keyword:t.keywordHost},on:{changeTotal:t.changeTotalHost}})],1)]):t._e()],1)],1)],1)},a=[],o=n(76711),i={components:{Logo:()=>n.e(2860).then(n.bind(n,12860)),Card:()=>n.e(3314).then(n.bind(n,53314)),MainList:()=>n.e(550).then(n.bind(n,20550)),HostUnitList:()=>n.e(6541).then(n.bind(n,16541))},data(){return{totalHost:0,keywordHost:"",totalMain:0,keywordMain:"",active:0,mainTalkerList:[],currentTradeUnionID:null,unionDetails:{},hostUnitList:[],associationInfo:{}}},async created(){this.associationInfo=this.$store.getters.associationInfo,this.currentTradeUnionID=this.associationInfo.id,this.obtainTradeUnionAPI(this.currentTradeUnionID)},updated(){this.$refs.tabs.resize()},methods:{hashDomain:o.og,onSearch(){this.$refs.mainList.onSearch()},onClear(){this.keywordMain="",setTimeout((()=>{this.$refs.mainList.onSearch()}),100)},onSearchHostUnit(){this.$refs.hostUnitList.onSearch()},hostSearchClear(){this.keywordHost="",setTimeout((()=>{this.$refs.hostUnitList.onSearch()}),100)},changeTotalHost(t){this.totalHost=t},changeTotalMain(t){this.totalMain=t},async obtainTradeUnionAPI(t){const e={id:t},n=await this.$request("association.obtainTradeUnion",e);console.log("获取某个工会API_res :>> ",n),this.unionDetails=n},async mentorListAPI(t){const e={aid:t},n=await this.$request("instructor.mentorList",e);console.log("导师列表API_res :>> ",n),this.mainTalkerList=(0,o.Ef)(n)}}},r=i,c=n(1001),l=(0,c.Z)(r,s,a,!1,null,"02e1bd3f",null),u=l.exports},76711:function(t,e,n){function s(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}n.d(e,{Ef:function(){return c},Y_:function(){return u},e9:function(){return s},fS:function(){return r},i_:function(){return o},o1:function(){return i},og:function(){return l},rm:function(){return a}});const a=(t,e)=>{let n=new Date(Date.parse(t)),s=new Date(Date.parse(e));return n>s},o=(t,e,n)=>{switch(e){case"H":case"h":if("H"===n||"h"===n)return t;if("M"===n||"m"===n)return 60*t;if("S"===n||"s"===n)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return t/60;if("M"===n||"m"===n)return t;if("S"===n||"s"===n)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return t/60/60;if("M"===n||"m"===n)return t/60;if("S"===n||"s"===n)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},i=(t,e,n="name")=>{const s=[];return t.forEach((t=>{const a=t[n].indexOf(e);a>-1&&s.push(t)})),s},r=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),c=t=>{const e=[];for(const n in t)e.push(t[n]);return e.reverse()},l=(t,e)=>{console.log("importType :>> ",t);let n="";return"default"!==t&&"a"!==t||(n="fj"),"gt"===t&&(n="gt"),n===e},u=t=>{switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}},28638:function(t,e,n){t.exports=n.p+"img/introduction_platform_bg.fe089f1a.png"}}]);
//# sourceMappingURL=121.72b2f4c0.js.map