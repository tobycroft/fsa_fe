"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7265],{37265:function(t,i,s){s.r(i),s.d(i,{default:function(){return r}});var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"host-unit-list-container"},[s("van-list",{staticClass:"main-talker-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,(function(t,i){return s("div",{key:i,staticClass:"main-talker-item"},[s("HostUnitRow",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,employee:t.host_time,student:t.sum_visitor}})],1)})),0)],1)},a=[],n={name:"HostUnitList",components:{HostUnitRow:()=>s.e(8015).then(s.bind(s,58015))},props:{aid:{type:[Number,String],default:""},keyword:{type:String,default:""}},data(){return{list:[],loading:!1,finished:!1,limit:10,page:1,globalSearch:!1}},methods:{async onLoad(){const t=await this.hostInfoSearchAPI(this.globalSearch);console.log("res :>> ",t);for(const i of t.data)this.list.push(i);this.page+=1,this.loading=!1,this.page>t.last_page&&(this.finished=!0),this.$emit("changeTotal",t.total)},async hostInfoSearchAPI(t){const i={aid:t?"":this.aid,limit:this.limit,page:this.page,name:this.keyword};return await this.$request("host.hostInfoSearch",i)},onSearch(t){this.list=[],this.page=1,this.loading=!0,this.finished=!1,console.log("global :>> ",t),this.globalSearch=t,this.onLoad(this.globalSearch)}}},o=n,l=s(43736),h=(0,l.Z)(o,e,a,!1,null,"2cf5247e",null),r=h.exports}}]);
//# sourceMappingURL=7265.0e7b3479.js.map