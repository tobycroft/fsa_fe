"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[310],{80310:function(a,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"data-coard-container"},[r("div",{staticClass:"background-box"},[r("van-image",{attrs:{src:t(67774)}}),r("div",{staticClass:"data-board-style"},[r("div",{staticClass:"blur-style"}),r("van-image",{staticClass:"data-board-bg-style",attrs:{src:t(91872)}})],1)],1),r("article",[r("Card",{staticClass:"page-box-style",attrs:{radius:40}},[r("DataBoardCard",{attrs:{coverTotalNumber:a.coverTotalNumber,preachTotalNumber:a.preachTotalNumber,areaCoverage:a.areaCoverage}}),r("TabsNum",{staticClass:"tabs-num-style",attrs:{list:a.tabsList,active:a.active},on:{change:a.tabsNumChange}}),r("DataShow",{ref:"dataShow",attrs:{active:a.active},on:{change:a.changeDataShow}})],1)],1)])},s=[],o={components:{Card:()=>t.e(3314).then(t.bind(t,53314)),IconTitle:()=>t.e(9832).then(t.bind(t,9832)),TimeUpdate:()=>t.e(9075).then(t.bind(t,99075)),NumUnit:()=>t.e(9968).then(t.bind(t,79968)),TabsNum:()=>t.e(1290).then(t.bind(t,71290)),DataBoardCard:()=>t.e(1511).then(t.bind(t,41511)),DataShow:()=>t.e(8910).then(t.bind(t,28910))},data(){return{tabsList:["近期区域","承办单位","宣讲详情","区域覆盖","授课排名","新增人数"],coverTotalNumber:0,preachTotalNumber:0,areaCoverage:0,active:0}},created(){this.coverTotalNumberAPI(),this.preachTotalNumberAPI(),this.areaCoverageAPI()},methods:{tabsNumChange(a){console.log("tabsNum_val :>> ",a),this.active=a,this.$refs.dataShow.activeSwipe(this.active)},changeDataShow(a){console.log("DataShow_val :>> ",a),this.active=a},async coverTotalNumberAPI(){const a=await this.$request("lecture.coverTotalNumber");console.log("覆盖总人数API_res :>> ",a),this.coverTotalNumber=a},async preachTotalNumberAPI(){const a=await this.$request("lecture.preachTotalNumber");console.log("宣讲总场次API_res :>> ",a),this.preachTotalNumber=a},async areaCoverageAPI(){const a=await this.$request("lecture.areaCoverage");console.log("区域覆盖率API_res :>> ",a),this.areaCoverage=a}}},c=o,i=t(1001),n=(0,i.Z)(c,r,s,!1,null,"174402c8",null),l=n.exports},91872:function(a,e,t){a.exports=t.p+"img/data_board_bg.39e99e74.png"},67774:function(a,e,t){a.exports=t.p+"img/login_background.839f0f9d.gif"}}]);
//# sourceMappingURL=310.c7577148.js.map