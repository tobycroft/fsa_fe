"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8734],{8734:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-search",{attrs:{placeholder:"请输入主办方关键词"},on:{search:t.onSearch,clear:t.onSearch},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),s("div",{staticClass:"gap"}),s("div",{staticClass:"container"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.hostList,(function(e,a){return s("div",{key:e.id,staticClass:"section",class:{"one-style":0===a},on:{click:function(s){return t.handleSelect(e.id,e.name)}}},[s("span",{staticClass:"char"},[t._v(t._s(e.name))])])})),0)],1),s("div",{staticClass:"no-more"},[t._v("没有更多了~")]),s("div",{staticClass:"bottom-gap"}),s("div",{staticClass:"btn-bottom",on:{click:t.handleAdd}},[t._v("新建")])],1)},i=[],o=s(91742),n={components:{},data(){return{searchKeyword:"",limit:10,pageNo:1,hostList:[],loading:!1,finished:!1}},created(){},methods:{handleSelect(t,e){o.Z.$emit("hostObj",{id:t,name:e}),this.$router.back()},async hostInfoSearchAPI(t,e,s){const a=this.$store.getters.associationInfo.id,i={aid:a,page:t,limit:e,name:s};return await this.$request("host.hostInfoSearch",i)},handleAdd(){this.$router.push({path:"/adminAddtUnit"})},onSearch(){this.hostList=[],this.pageNo=1,this.finished=!1,this.onLoad()},async onLoad(){console.log("this.searchKeyword :>> ",this.searchKeyword);const t=await this.hostInfoSearchAPI(this.pageNo,this.limit,this.searchKeyword);for(const e of t.data)console.log("item :>> ",e),this.hostList.push(e);this.pageNo+=1,this.loading=!1,this.pageNo>t.last_page&&(this.finished=!0)}}},h=n,c=s(1001),r=(0,c.Z)(h,a,i,!1,null,"035f73ee",null),d=r.exports},91742:function(t,e,s){var a=s(20144);e["Z"]=new a["default"]}}]);
//# sourceMappingURL=8734.44a179f3.js.map