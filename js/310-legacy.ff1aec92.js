"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[310],{80310:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"data-coard-container"},[r("div",{staticClass:"background-box"},[r("van-image",{attrs:{src:a(67774)}}),r("div",{staticClass:"data-board-style"},[r("div",{staticClass:"blur-style"}),r("van-image",{staticClass:"data-board-bg-style",attrs:{src:a(91872)}})],1)],1),r("article",[r("Card",{staticClass:"page-box-style",attrs:{radius:40}},[r("DataBoardCard",{attrs:{coverTotalNumber:e.coverTotalNumber,preachTotalNumber:e.preachTotalNumber,areaCoverage:e.areaCoverage}}),r("TabsNum",{staticClass:"tabs-num-style",attrs:{list:e.tabsList,active:e.active},on:{change:e.tabsNumChange}}),r("DataShow",{ref:"dataShow",attrs:{active:e.active},on:{change:e.changeDataShow}})],1)],1)])},n=[],o=a(16198),s=(a(35666),a(41539),a(78783),a(33948),{components:{Card:function(){return a.e(3314).then(a.bind(a,53314))},IconTitle:function(){return a.e(9832).then(a.bind(a,9832))},TimeUpdate:function(){return a.e(9075).then(a.bind(a,99075))},NumUnit:function(){return a.e(9968).then(a.bind(a,79968))},TabsNum:function(){return a.e(1290).then(a.bind(a,71290))},DataBoardCard:function(){return a.e(1511).then(a.bind(a,41511))},DataShow:function(){return a.e(2660).then(a.bind(a,22660))}},data:function(){return{tabsList:["近期区域","承办单位","宣讲详情","区域覆盖","授课排名","新增人数"],coverTotalNumber:0,preachTotalNumber:0,areaCoverage:0,active:0}},created:function(){this.coverTotalNumberAPI(),this.preachTotalNumberAPI(),this.areaCoverageAPI()},methods:{tabsNumChange:function(e){console.log("tabsNum_val :>> ",e),this.active=e,this.$refs.dataShow.activeSwipe(this.active)},changeDataShow:function(e){console.log("DataShow_val :>> ",e),this.active=e},coverTotalNumberAPI:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("lecture.coverTotalNumber");case 2:a=t.sent,console.log("覆盖总人数API_res :>> ",a),e.coverTotalNumber=a;case 5:case"end":return t.stop()}}),t)})))()},preachTotalNumberAPI:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("lecture.preachTotalNumber");case 2:a=t.sent,console.log("宣讲总场次API_res :>> ",a),e.preachTotalNumber=a;case 5:case"end":return t.stop()}}),t)})))()},areaCoverageAPI:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request("lecture.areaCoverage");case 2:a=t.sent,console.log("区域覆盖率API_res :>> ",a),e.areaCoverage=a;case 5:case"end":return t.stop()}}),t)})))()}}}),c=s,i=a(1001),u=(0,i.Z)(c,r,n,!1,null,"174402c8",null),l=u.exports},91872:function(e,t,a){e.exports=a.p+"img/data_board_bg.39e99e74.png"},67774:function(e,t,a){e.exports=a.p+"img/login_background.839f0f9d.gif"}}]);
//# sourceMappingURL=310-legacy.ff1aec92.js.map