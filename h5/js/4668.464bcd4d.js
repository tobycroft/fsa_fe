"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4668],{24668:function(t,s,i){i.r(s),i.d(s,{default:function(){return h}});var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"root"},[a("img",{staticClass:"back-icon",attrs:{src:i(77888),alt:""},on:{click:t.goBack}}),a("header",[a("img",{staticClass:"head-img",attrs:{src:i(7311),alt:""}})]),a("main",[a("div",{staticClass:"main-wrap"},[a("div",{staticClass:"gap-char-wrap flex-center"},[a("img",{staticClass:"char-img",attrs:{src:i(75254),alt:""}})]),a("p",{staticClass:"loc-char"},[t._v("截止至"+t._s(t.nowDate))]),a("div",{staticClass:"list-item"},[a("img",{staticClass:"bar-img",attrs:{src:i(33810),alt:""}}),a("div",{staticClass:"message-box"},[a("div",{staticClass:"gradient-wrap"}),a("TableList",{attrs:{showTitle:!1,columns:t.cloumnListPreach,list:t.instructorListCmp}}),a("p",[t._v("“亲师友”提供技术支持")])],1)])])])])},r=[],e=i(30381),o=i.n(e),n={components:{TableList:()=>i.e(569).then(i.bind(i,90569))},computed:{instructorListCmp(){const t=[];for(const s in this.instructorList)t.push({rankingName:`第${parseInt(s)+1}名`,name:this.instructorList[s].instructor_info?this.instructorList[s].instructor_info.name:"",visitorStr:`${this.instructorList[s].instructor_info?this.instructorList[s].sum_visitor:0}人`,roundStr:`${this.instructorList[s].host_time}场`});return t}},data(){return{cloumnListPreach:[{label:"姓名",keyName:"name"},{label:"听课人数",keyName:"visitorStr"},{label:"场次",keyName:"roundStr"}],instructorList:[],nowDate:"2022年10月21日"}},async created(){this.nowDate=o()().format("YYYY年MM月DD日"),this.$store.getters.associationInfo&&this.$store.getters.associationInfo.id||await this.$store.dispatch("association/associationInfoDomainAPI"),this.instructorListAPI()},methods:{async instructorListAPI(){const t=this.$store.getters.associationInfo.id,s={aid:t,limit:50,page:1},i=await this.$request("lecture.instructorPList",s);console.log("授课老师排名列表API_res :>> ",i),this.instructorList=i.data},goBack(){this.$router.go(-1)}}},c=n,l=i(1001),u=(0,l.Z)(c,a,r,!1,null,"3bf5d98a",null),h=u.exports},75254:function(t,s,i){t.exports=i.p+"img/teacher_char.f4b2c7a6.png"}}]);
//# sourceMappingURL=4668.464bcd4d.js.map