"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3890],{43890:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gift-bag-library-container"},[i("ul",{staticClass:"list-box"},t._l(t.giftList,(function(e){return i("li",{key:e.id,staticClass:"list-item"},[i("PackageListRow",{attrs:{data:e},on:{choose:t.onChoose}})],1)})),0),i("footer",{staticClass:"flex"},[i("p",{staticClass:"content-style"},[t._v(" 已选择"),i("span",{staticClass:"active-num-style"},[t._v(t._s(t.giftActiveList.length))]),t._v("个礼包 ")]),i("van-button",{attrs:{type:"info",round:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("确认并返回")])],1)])},n=[],a=i(16198),r=(i(35666),i(41539),i(78783),i(33948),{components:{PackageListRow:function(){return i.e(8453).then(i.bind(i,98453))}},data:function(){return{giftList:[],giftActiveList:[],aid:""}},created:function(){this.aid=this.$store.getters.associationInfoCurrent.id,console.log("this.aid :>> ",this.aid),this.giftDataListAPI()},methods:{giftDataListAPI:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={aid:t.aid},e.next=3,t.$request("gift.giftDataList",i,{methods:"get"});case 3:s=e.sent,console.log("礼品列表API_res :>> ",s),t.giftList=s;case 6:case"end":return e.stop()}}),e)})))()},onChoose:function(t){this.giftActiveList=t}}}),o=r,c=i(1001),u=(0,c.Z)(o,s,n,!1,null,"512043a3",null),f=u.exports}}]);
//# sourceMappingURL=3890-legacy.a2eb97fc.js.map