"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6320],{92197:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column-chart-container"},[s("Card",{staticClass:"card-style"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"header flex"},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("CheckDetailsBtn",{on:{click:t.onClick}})],1),s("ul",{staticClass:"list-style"},t._l(t.list,(function(e,i){var a;return s("li",{key:i,staticClass:"list-item-style flex",class:(a={},a["zebra-row-style"]=i%2===0,a)},[s("div",{staticClass:"flex-start"},[s("p",[t._v(t._s(e.label))])]),s("div",{staticClass:"progress-style"},[s("van-progress",{attrs:{percentage:t.percentage(e.num,t.maxNum),"stroke-width":"8","show-pivot":!1}})],1),s("div",{staticClass:"num-style flex-start"},[s("p",[t._v(t._s(e.num))]),s("p",[t._v("人")])])])})),0)])],1)},a=[],r=s(76711),l={components:{Card:()=>s.e(3314).then(s.bind(s,53314)),CheckDetailsBtn:()=>s.e(3463).then(s.bind(s,83463))},props:{title:{type:String,default:"标题"},list:{type:[Array,Object],required:!0},showTitle:{type:Boolean,default:!0}},watch:{list(t){this.initProgress(t)}},data(){return{maxNum:null}},created(){this.initProgress(this.list)},methods:{percentage:r.e9,getNumArr(t){const e=[];for(const s of t)e.push(s.num);return e},initProgress(t){const e=this.getNumArr(t);this.maxNum=Math.max(...e)},onClick(){this.$emit("click")}}},n=l,c=s(1001),o=(0,c.Z)(n,i,a,!1,null,"7d85d1cb",null),h=o.exports}}]);
//# sourceMappingURL=6320.2aba7d2e.js.map