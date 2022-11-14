"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8133],{58133:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var A=function(){var t=this,s=t.$createElement,A=t._self._c||s;return A("div",{staticClass:"root"},[A("img",{staticClass:"back-icon",attrs:{src:a(77888),alt:""},on:{click:t.goBack}}),A("header",[A("img",{staticClass:"head-img",attrs:{src:a(7311),alt:""}})]),A("main",[A("div",{staticClass:"main-wrap"},[A("div",{staticClass:"recent-box"},[A("h2",[t._v("近期新增宣讲数据汇总")]),A("p",[t._v(" 数据时间"+t._s(t.handleStartTimeFormat(t.start_date))+"-"+t._s(t.handleEndTimeFormat(t.end_date))+" ")]),A("div",{staticClass:"flex"},[A("div",{staticClass:"flex1 flex-center direction-column bor"},[A("div",{staticClass:"num"},[t._v(t._s(t.total))]),A("div",{staticClass:"char"},[t._v("新增场次")])]),A("div",{staticClass:"flex1 flex-center direction-column"},[A("div",{staticClass:"num"},[t._v(t._s(t.count))]),A("div",{staticClass:"char"},[t._v("新增覆盖人数")])])])]),A("div",{staticClass:"gap-char-wrap flex-center"},[A("img",{staticClass:"char-img",attrs:{src:a(14728),alt:""}})]),A("div",{staticClass:"list-wrap"},t._l(t.recentList,(function(s){return A("div",{key:s.id,staticClass:"list-item"},[A("img",{staticClass:"bar-img",attrs:{src:a(33810),alt:""}}),A("div",{staticClass:"message-box"},[A("div",{staticClass:"gradient-wrap"},[A("p",[t._v(" 宣讲时间:"+t._s(t.handleTimeFormat(s.start_date))+"-"+t._s(t.handleLecEndTime(s.start_date,s.duration))+" ")])]),A("div",{staticClass:"line"}),A("h3",[t._v(t._s(s.title))]),A("div",{staticClass:"char"},[t._v(" 宣讲讲师："+t._s(s.instructor_info.name)+" ")]),A("div",{staticClass:"char"},[t._v("听课人数："+t._s(s.visitor)+"人")]),A("div",{staticClass:"char"},[t._v("主办单位："+t._s(s.host_info.name))])])])})),0),A("p",{staticClass:"loc-char"},[t._v("“亲师友”提供技术支持")])])])])},i=[],e=a(1280),r=a(30381),c=a.n(r),o={data(){return{recentList:[],total:0,count:0,start_date:"2022-05-10",end_date:"2022-10-10",loading:!1,finished:!1,limit:50,page:1}},async created(){this.$store.getters.associationInfo&&this.$store.getters.associationInfo.id||await this.$store.dispatch("association/associationInfoDomainAPI"),this.recentListAPI()},methods:{async onLoad(){if(this.total>=t.total)return;const t=await this.recentListAPI();console.log("res :>> ",t);const s=t.data;if(s.length<=0)this.finished=!0;else{for(const s of t.data)this.recentList.push(s);this.page+=1,this.loading=!1,this.total>=t.total&&(this.finished=!0)}},handleTimeFormat(t){return c()(t).utc().format("YYYY年MM月DD日 HH:mm")},handleStartTimeFormat(t){return(0,e.ZP)(t,"yyyy年mm月dd日")},handleEndTimeFormat(t){return(0,e.ZP)(t,"mm月dd日")},handleLecEndTime(t,s){return c()(t).add(s,"seconds").utc().format("HH:mm")},goBack(){this.$router.go(-1)},async recentListAPI(){const t=this.$store.getters.associationInfo.id,s={aid:t,start_date:this.start_date,end_date:this.end_date,limit:233,page:this.page},a=await this.$request("lecture.recentList2",s);return console.log("近期列表API_res :>> ",a),a.data.length>50?this.recentList=a.data.splice(0,50):this.recentList=a.data,this.total=a.total,this.count=a.count,a}}},l=o,n=a(1001),g=(0,n.Z)(l,A,i,!1,null,"7fd3b510",null),d=g.exports},14728:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=8133.d931d60c.js.map