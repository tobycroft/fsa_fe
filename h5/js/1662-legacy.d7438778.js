"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1662,4095],{81662:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column-chart-container"},[r("Card",{staticClass:"card-style"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"header flex"},[r("p",{staticClass:"title"},[t._v(t._s(t.title))]),r("CheckDetailsBtn",{on:{click:t.onClick}})],1),r("ul",{staticClass:"list-style"},t._l(t.list,(function(e,n){var s;return r("li",{key:n,staticClass:"list-item-style flex",class:(s={},s["zebra-row-style"]=n%2===0,s)},[r("div",{staticClass:"flex-start"},[r("p",[t._v(t._s(e.label))])]),r("div",{staticClass:"progress-style"},[r("van-progress",{attrs:{percentage:t.percentage(e.num,t.maxNum),"stroke-width":"8","show-pivot":!1}})],1),r("div",{staticClass:"num-style flex-start"},[r("p",[t._v(t._s(e.num))]),r("p",[t._v("人")])])])})),0)])],1)},s=[],i=r(89584),a=r(66347),c=(r(41539),r(78783),r(33948),r(37662)),u={components:{Card:function(){return r.e(248).then(r.bind(r,80248))},CheckDetailsBtn:function(){return r.e(933).then(r.bind(r,90933))}},props:{title:{type:String,default:"标题"},list:{type:[Array,Object],required:!0},showTitle:{type:Boolean,default:!0}},watch:{list:function(t){this.initProgress(t)}},data:function(){return{maxNum:null}},created:function(){this.initProgress(this.list)},methods:{percentage:c.e9,getNumArr:function(t){var e,r=[],n=(0,a.Z)(t);try{for(n.s();!(e=n.n()).done;){var s=e.value;r.push(s.num)}}catch(i){n.e(i)}finally{n.f()}return r},initProgress:function(t){var e=this.getNumArr(t);this.maxNum=Math.max.apply(Math,(0,i.Z)(e))},onClick:function(){this.$emit("click")}}},o=u,l=r(43736),f=(0,l.Z)(o,n,s,!1,null,"7d85d1cb",null),h=f.exports},37662:function(t,e,r){r.d(e,{Ef:function(){return c},Y_:function(){return o},e9:function(){return n},fS:function(){return a},i_:function(){return s},o1:function(){return i},og:function(){return u}});r(41539),r(54747),r(74916),r(15306);function n(t,e){return t&&e?t/e*100:(console.log("percentage函数参数异常: :>> ",t,e),0)}var s=function(t,e,r){switch(e){case"H":case"h":if("H"===r||"h"===r)return t;if("M"===r||"m"===r)return 60*t;if("S"===r||"s"===r)return 60*t*60;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"M":case"m":if("H"===r||"h"===r)return t/60;if("M"===r||"m"===r)return t;if("S"===r||"s"===r)return 60*t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;case"S":case"s":if("H"===r||"h"===r)return t/60/60;if("M"===r||"m"===r)return t/60;if("S"===r||"s"===r)return t;console.log("日期转换函数resultUnit参数不合法 :>> ");break;default:console.log("日期转换函数targetUnit参数不合法 :>>");break}},i=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=[];return t.forEach((function(t){var s=t[r].indexOf(e);s>-1&&n.push(t)})),n},a=function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},c=function(t){var e=[];for(var r in t)e.push(t[r]);return e.reverse()},u=function(t,e){console.log("importType :>> ",t);var r="";return"default"!==t&&"a"!==t||(r="fj"),"gt"===t&&(r="gt"),r===e},o=function(t){switch(t){case"province":return"city";case"city":return"district";case"district":return"street";case"street":return"street";default:break}}}}]);
//# sourceMappingURL=1662-legacy.d7438778.js.map