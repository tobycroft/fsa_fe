"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[5499],{95499:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"steps-container"},[s("ul",{staticClass:"list flex-around"},t._l(t.list,(function(e,i){var a,c;return s("li",{key:i,staticClass:"list-item"},[s("div",{staticClass:"step-num-box",class:(a={},a["active-idx"]=t.active>=i,a)},[t._v(" "+t._s(i+1)+" ")]),s("div",{staticClass:"step-label-box",class:(c={},c["active-font"]=t.active>=i,c)},[t._v(" "+t._s(e)+" ")])])})),0)])},a=[],c={props:{list:{type:[Array],default:()=>["第一步","第二步","第三步"]},activeStep:{type:Number,default:0}},data(){return{active:null}},created(){this.active=this.activeStep},methods:{next(){this.active>=this.list.length-1?console.log("已经是最后一步了 :>>>"):(this.active++,this.changeActive(this.active))},previous(){this.active<=0?console.log("已经是第一步了 :>>"):(this.active--,this.changeActive(this.active))},changeActive(t){this.$emit("change",t)}}},l=c,n=s(1001),h=(0,n.Z)(l,i,a,!1,null,"5c84feb5",null),r=h.exports}}]);
//# sourceMappingURL=5499.5c5909fb.js.map