"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7306],{67306:function(t,e,i){i.r(e),i.d(e,{default:function(){return r}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"host-unit-list-container"},[i("van-list",{staticClass:"main-talker-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return i("div",{key:e,staticClass:"main-talker-item"},[i("HostUnitRow",{attrs:{avatarUrl:t.img?t.img:"",userName:t.name,employee:t.employee,student:t.student}})],1)})),0)],1)},a=[],n={name:"HostUnitList",components:{HostUnitRow:()=>i.e(6342).then(i.bind(i,66342))},props:{aid:{type:[Number,String],default:""},keyword:{type:String,default:""}},data(){return{list:[],loading:!1,finished:!1,limit:10,page:1}},methods:{async onLoad(){const t=await this.hostInfoSearchAPI();console.log("res :>> ",t);for(const e of t.data)this.list.push(e);this.page+=1,this.loading=!1,this.page>t.last_page&&(this.finished=!0),this.$emit("changeTotal",t.total)},async hostInfoSearchAPI(){const t={aid:this.aid,limit:this.limit,page:this.page,name:this.keyword};return await this.$request("host.hostInfoSearch",t)},onSearch(){this.list=[],this.page=1,this.loading=!0,this.finished=!1,this.onLoad()}}},o=n,h=i(1001),l=(0,h.Z)(o,s,a,!1,null,"5f3e5828",null),r=l.exports}}]);
//# sourceMappingURL=7306.87251349.js.map