"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8734],{8734:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-search",{attrs:{placeholder:"请输入主办方关键词"},on:{search:e.onSearch,clear:e.onSearch},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),n("div",{staticClass:"gap"}),n("div",{staticClass:"container"},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.hostList,(function(t,a){return n("div",{key:t.id,staticClass:"section",class:{"one-style":0===a},on:{click:function(n){return e.handleSelect(t.id,t.name)}}},[n("span",{staticClass:"char"},[e._v(e._s(t.name))])])})),0)],1),n("div",{staticClass:"no-more"},[e._v("没有更多了~")]),n("div",{staticClass:"bottom-gap"}),n("div",{staticClass:"btn-bottom",on:{click:e.handleAdd}},[e._v("新建")])],1)},s=[],r=n(62032),o=n(16198),i=(n(35666),n(91742)),c={components:{},data:function(){return{searchKeyword:"",limit:10,pageNo:1,hostList:[],loading:!1,finished:!1}},created:function(){},methods:{handleSelect:function(e,t){i.Z.$emit("hostObj",{id:e,name:t}),this.$router.back()},hostInfoSearchAPI:function(e,t,n){var a=this;return(0,o.Z)(regeneratorRuntime.mark((function s(){var r,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r=a.$store.getters.associationInfo.id,o={aid:r,page:e,limit:t,name:n},s.next=4,a.$request("host.hostInfoSearch",o);case 4:return s.abrupt("return",s.sent);case 5:case"end":return s.stop()}}),s)})))()},handleAdd:function(){this.$router.push({path:"/adminAddtUnit"})},onSearch:function(){this.hostList=[],this.pageNo=1,this.finished=!1,this.onLoad()},onLoad:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var n,a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("this.searchKeyword :>> ",e.searchKeyword),t.next=3,e.hostInfoSearchAPI(e.pageNo,e.limit,e.searchKeyword);case 3:n=t.sent,a=(0,r.Z)(n.data);try{for(a.s();!(s=a.n()).done;)o=s.value,console.log("item :>> ",o),e.hostList.push(o)}catch(i){a.e(i)}finally{a.f()}e.pageNo+=1,e.loading=!1,e.pageNo>n.last_page&&(e.finished=!0);case 9:case"end":return t.stop()}}),t)})))()}}},h=c,l=n(1001),d=(0,l.Z)(h,a,s,!1,null,"035f73ee",null),u=d.exports},91742:function(e,t,n){var a=n(20144);t["Z"]=new a["default"]}}]);
//# sourceMappingURL=8734-legacy.cc13ec60.js.map