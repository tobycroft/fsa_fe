"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3309],{3309:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction-platform-container"},[a("van-image",{staticClass:"bg-style",attrs:{src:n(28638)}}),a("article",[a("Logo",{staticClass:"logo-style",attrs:{imgUrl:t.unionDetails.logo,size:250,round:"",border:""}}),a("Card",{staticClass:"introduction-box",attrs:{radius:16}},[a("p",{staticClass:"introduction-title"},[t._v(t._s(t.unionDetails.name))]),a("p",{staticClass:"introduction-content"},[t._v(t._s(t.unionDetails.info))])]),a("van-tabs",{ref:"tabs",staticClass:"tabs-style",attrs:{color:"#0077FF"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"成员名单"}},[a("van-image",{staticClass:"members-the-list-img",attrs:{src:t.unionDetails.poster}})],1),a("van-tab",{attrs:{title:"讲师公示"}},[a("div",{staticClass:"tab-content"},[a("van-search",{staticClass:"search-style",attrs:{placeholder:"请输入讲师名称",shape:"round"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("p",{staticClass:"main-talker-box-label"},[t._v(" 全部主讲人("+t._s(t.mainTalkerList.length)+") ")]),a("ul",{staticClass:"main-talker-list"},t._l(t.mainTalkerList,(function(t,e){return a("li",{key:e,staticClass:"main-talker-item"},[a("MainTalker",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,patrolDistricts:t.area_count,activitySession:t.lecture_count,participation:t.sum_visitor}})],1)})),0)],1)])],1)],1)],1)},s=[],i=n(76711),r={components:{Logo:()=>n.e(2860).then(n.bind(n,12860)),Card:()=>n.e(3314).then(n.bind(n,53314)),MembersList:()=>n.e(1962).then(n.bind(n,1962)),MainTalker:()=>n.e(1297).then(n.bind(n,21297))},data(){return{active:0,memberList:[{label:"会长",list:["郑 捷"]},{label:"副会长",list:["郑晓生","连 榕","朱晓勤","林 藩","李中斌"]},{label:"监事会",list:["张荣伟","姚 翔","林苍松"]},{label:"秘书长",list:["涂少云","蔡剑秀","陈仁德","林高龙"]},{label:"常务理事",list:["陈银花","许松青","徐正平","黄爱玲","高 华","程 勇","程 英","黄 青","欧 萍","唐 琪","潘凌艳","贾丽萍","陈 曦"]},{label:"理事",list:["孟宪梅","廖禄香","王白蓉","陈 云","赵继容","邓惠明","王 霏","张庆守","姜燕琴","江 征","吴选兴","黄卉靓","张 萍","陈小英","江化林","钱沁芳","詹锦华","涂林春","谭 敏","唐  薇","杨  清","周雪英","黄莉华","黄 静","刘 辉","林捷冬","童家富","罗晋球","林金云","官蔚岚","林  珍","王 瑾","王  斌","陈秀兰","林  芳","徐晓玫","朱永铭","吴 昊","吴 明","陈兆漫","朱贲峰","蔡慧君","程英莲","刘祖金","邱晨旭","林红玉","郭正光","黄荣生","陈明兴","王永红","王少帼","邓兰勤","卢小群","刘姬焰","张 栩"]}],keyword:"",mainTalkerList:[],currentTradeUnionID:null,unionDetails:{}}},async created(){await this.getsIDTheUnionAPI(),this.obtainTradeUnionAPI(this.currentTradeUnionID),this.mentorListAPI(this.currentTradeUnionID)},updated(){this.$refs.tabs.resize()},methods:{onSearch(t){console.log("val :>> ",t),this.mainTalkerList=(0,i.o1)(this.mainTalkerList,t,"name")},onClear(){this.mentorListAPI(this.currentTradeUnionID)},async getsIDTheUnionAPI(){this.currentTradeUnionID=this.$store.getters.associationInfoCurrent.id},async obtainTradeUnionAPI(t){const e={id:t},n=await this.$request("association.obtainTradeUnion",e);console.log("获取某个工会API_res :>> ",n),this.unionDetails=n},async mentorListAPI(t){const e={aid:t},n=await this.$request("instructor.mentorList",e);console.log("导师列表API_res :>> ",n),this.mainTalkerList=n}}},o=r,l=n(1001),c=(0,l.Z)(o,a,s,!1,null,"34c2d6a9",null),u=c.exports},76711:function(t,e,n){function a(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}n.d(e,{e9:function(){return a},fS:function(){return o},i_:function(){return i},o1:function(){return r},rm:function(){return s}});const s=(t,e)=>{let n=new Date(Date.parse(t)),a=new Date(Date.parse(e));return n>a},i=(t,e,n)=>{switch(e){case"H":case"h":if("H"===n||"h"===n)return t;if("M"===n||"m"===n)return 60*t;if("S"===n||"s"===n)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===n||"h"===n)return t/60;if("M"===n||"m"===n)return t;if("S"===n||"s"===n)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===n||"h"===n)return t/60/60;if("M"===n||"m"===n)return t/60;if("S"===n||"s"===n)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},r=(t,e,n="name")=>{const a=[];return t.forEach((t=>{const s=t[n].indexOf(e);s>-1&&a.push(t)})),a},o=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},28638:function(t,e,n){t.exports=n.p+"img/introduction_platform_bg.fe089f1a.png"}}]);
//# sourceMappingURL=3309.10b8f87b.js.map