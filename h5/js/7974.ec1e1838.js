"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7974],{7974:function(t,i,a){a.r(i),a.d(i,{default:function(){return l}});var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"main-list-container"},[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,(function(t,i){return a("div",{key:i,staticClass:"main-talker-item"},[a("MainTalker",{attrs:{id:t.id,avatarUrl:t.img?t.img:"",userName:t.name,patrolDistricts:t.area_count,activitySession:t.host_time,participation:t.sum_visitor}})],1)})),0)],1)},s=[],n={name:"MainList",components:{MainTalker:()=>a.e(9610).then(a.bind(a,49610))},props:{aid:{type:[Number,String],default:""},keyword:{type:String,default:""}},data(){return{list:[],loading:!1,finished:!1,page:1,limit:10}},methods:{async onLoad(){const t=await this.instructorInfoSearchAPI(this.aid,this.page,this.limit,this.keyword);for(const i of t.data)this.list.push(i);this.page+=1,this.loading=!1,this.page>t.last_page&&(this.finished=!0),this.$emit("changeTotal",t.total)},async instructorInfoSearchAPI(t,i,a,e){const s={aid:t,page:i,limit:a,name:e};return await this.$request("instructor.instructorInfoSearch",s)},onSearch(){this.list=[],this.page=1,this.loading=!0,this.finished=!1,this.onLoad()}}},r=n,o=a(1001),h=(0,o.Z)(r,e,s,!1,null,"1c2ad8bc",null),l=h.exports}}]);
//# sourceMappingURL=7974.ec1e1838.js.map