"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2197],{92197:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column-chart-container"},[s("Card",{staticClass:"card-style"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"header flex"},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("CheckDetailsBtn",{on:{click:t.onClick}})],1),s("ul",{staticClass:"list-style"},t._l(t.list,(function(e,r){var n;return s("li",{key:r,staticClass:"list-item-style flex",class:(n={},n["zebra-row-style"]=r%2===0,n)},[s("div",{staticClass:"flex-start"},[s("p",[t._v(t._s(e.label))])]),s("div",{staticClass:"progress-style"},[s("van-progress",{attrs:{percentage:t.percentage(e.num,t.maxNum),"stroke-width":"8","show-pivot":!1}})],1),s("div",{staticClass:"num-style flex-start"},[s("p",[t._v(t._s(e.num))]),s("p",[t._v("人")])])])})),0)])],1)},n=[],i=s(76711),a={components:{Card:()=>s.e(3314).then(s.bind(s,53314)),CheckDetailsBtn:()=>s.e(3463).then(s.bind(s,83463))},props:{title:{type:String,default:"标题"},list:{type:[Array,Object],required:!0},showTitle:{type:Boolean,default:!0}},watch:{list(t){this.initProgress(t)}},data(){return{maxNum:null}},created(){this.initProgress(this.list)},methods:{percentage:i.e9,getNumArr(t){const e=[];for(const s of t)e.push(s.num);return e},initProgress(t){const e=this.getNumArr(t);this.maxNum=Math.max(...e)},onClick(){this.$emit("click")}}},l=a,c=s(1001),o=(0,c.Z)(l,r,n,!1,null,"7d85d1cb",null),u=o.exports},76711:function(t,e,s){function r(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}s.d(e,{e9:function(){return r},i_:function(){return i},o1:function(){return a},rm:function(){return n}});const n=(t,e)=>{let s=new Date(Date.parse(t)),r=new Date(Date.parse(e));return s>r},i=(t,e,s)=>{switch(e){case"H":case"h":if("H"===s||"h"===s)return t;if("M"===s||"m"===s)return 60*t;if("S"===s||"s"===s)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===s||"h"===s)return t/60;if("M"===s||"m"===s)return t;if("S"===s||"s"===s)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===s||"h"===s)return t/60/60;if("M"===s||"m"===s)return t/60;if("S"===s||"s"===s)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},a=(t,e,s="name")=>{const r=[];return t.forEach((t=>{const n=t[s].indexOf(e);n>-1&&r.push(t)})),r}}}]);
//# sourceMappingURL=2197.d923467f.js.map