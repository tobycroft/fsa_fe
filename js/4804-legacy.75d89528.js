"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4804],{14804:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"introduction-platform-container"},[r("van-image",{staticClass:"bg-style",attrs:{src:n(28638)}}),r("article",[r("Logo",{staticClass:"logo-style",attrs:{imgUrl:e.unionDetails.logo,size:250,round:"",border:""}}),r("Card",{staticClass:"introduction-box",attrs:{radius:16}},[r("p",{staticClass:"introduction-title"},[e._v(e._s(e.unionDetails.name))]),r("p",{staticClass:"introduction-content"},[e._v(e._s(e.unionDetails.info))])]),r("van-tabs",{ref:"tabs",staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[r("van-tab",{attrs:{title:"成员名单"}},[r("van-image",{staticClass:"members-the-list-img",attrs:{src:e.unionDetails.poster}})],1),r("van-tab",{attrs:{title:"讲师公示"}},[r("div",{staticClass:"tab-content"},[r("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入讲师名称",shape:"round"},on:{search:e.onSearch,clear:e.onClear},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),r("p",{staticClass:"main-talker-box-label"},[e._v(" 全部主讲人("+e._s(e.mainTalkerList.length)+") ")]),r("ul",{staticClass:"main-talker-list"},e._l(e.mainTalkerList,(function(e,t){return r("li",{key:t,staticClass:"main-talker-item"},[r("MainTalker",{attrs:{avatarUrl:e.img?e.img:"",userName:e.name,patrolDistricts:e.area_count,activitySession:e.lecture_count,participation:e.sum_visitor}})],1)})),0)],1)])],1)],1)],1)},a=[],i=n(16198),s=(n(35666),n(41539),n(78783),n(33948),n(76711)),o={components:{Logo:function(){return n.e(433).then(n.bind(n,90433))},Card:function(){return n.e(3314).then(n.bind(n,53314))},MembersList:function(){return n.e(1962).then(n.bind(n,1962))},MainTalker:function(){return n.e(1297).then(n.bind(n,21297))}},data:function(){return{active:0,memberList:[{label:"会长",list:["郑 捷"]},{label:"副会长",list:["郑晓生","连 榕","朱晓勤","林 藩","李中斌"]},{label:"监事会",list:["张荣伟","姚 翔","林苍松"]},{label:"秘书长",list:["涂少云","蔡剑秀","陈仁德","林高龙"]},{label:"常务理事",list:["陈银花","许松青","徐正平","黄爱玲","高 华","程 勇","程 英","黄 青","欧 萍","唐 琪","潘凌艳","贾丽萍","陈 曦"]},{label:"理事",list:["孟宪梅","廖禄香","王白蓉","陈 云","赵继容","邓惠明","王 霏","张庆守","姜燕琴","江 征","吴选兴","黄卉靓","张 萍","陈小英","江化林","钱沁芳","詹锦华","涂林春","谭 敏","唐  薇","杨  清","周雪英","黄莉华","黄 静","刘 辉","林捷冬","童家富","罗晋球","林金云","官蔚岚","林  珍","王 瑾","王  斌","陈秀兰","林  芳","徐晓玫","朱永铭","吴 昊","吴 明","陈兆漫","朱贲峰","蔡慧君","程英莲","刘祖金","邱晨旭","林红玉","郭正光","黄荣生","陈明兴","王永红","王少帼","邓兰勤","卢小群","刘姬焰","张 栩"]}],keyword:"",mainTalkerList:[],currentTradeUnionID:null,unionDetails:{}}},created:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getsIDTheUnionAPI();case 2:e.obtainTradeUnionAPI(e.currentTradeUnionID),e.mentorListAPI(e.currentTradeUnionID);case 4:case"end":return t.stop()}}),t)})))()},updated:function(){this.$refs.tabs.resize()},methods:{onSearch:function(e){console.log("val :>> ",e),this.mainTalkerList=(0,s.o1)(this.mainTalkerList,e,"name")},onClear:function(){this.mentorListAPI(this.currentTradeUnionID)},getsIDTheUnionAPI:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("association.getsIDTheUnion");case 2:n=t.sent,console.log("获取当前工会的ID_API_res :>> ",n),e.currentTradeUnionID=n;case 5:case"end":return t.stop()}}),t)})))()},obtainTradeUnionAPI:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={id:e},n.next=3,t.$request("association.obtainTradeUnion",r);case 3:a=n.sent,console.log("获取某个工会API_res :>> ",a),t.unionDetails=a;case 6:case"end":return n.stop()}}),n)})))()},mentorListAPI:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={aid:e},n.next=3,t.$request("instructor.mentorList",r);case 3:a=n.sent,console.log("导师列表API_res :>> ",a),t.mainTalkerList=a;case 6:case"end":return n.stop()}}),n)})))()}}},c=o,u=n(1001),l=(0,u.Z)(c,r,a,!1,null,"51fcdafd",null),f=l.exports},76711:function(e,t,n){n.d(t,{e9:function(){return r},fS:function(){return o},i_:function(){return i},o1:function(){return s},rm:function(){return a}});n(41539),n(54747),n(74916),n(15306);function r(e,t){return e&&t?e/t*100:(console.log("percentage函数参数异常: :>> ",e,t),0)}var a=function(e,t){var n=new Date(Date.parse(e)),r=new Date(Date.parse(t));return n>r},i=function(e,t,n){switch(t){case"H":case"h":if("H"===n||"h"===n)return e;if("M"===n||"m"===n)return 60*e;if("S"===n||"s"===n)return 60*e*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return e/60;if("M"===n||"m"===n)return e;if("S"===n||"s"===n)return 60*e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return e/60/60;if("M"===n||"m"===n)return e/60;if("S"===n||"s"===n)return e;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return e.forEach((function(e){var a=e[n].indexOf(t);a>-1&&r.push(e)})),r},o=function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}},28638:function(e,t,n){e.exports=n.p+"img/introduction_platform_bg.fe089f1a.png"}}]);
//# sourceMappingURL=4804-legacy.75d89528.js.map