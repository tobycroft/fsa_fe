(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[271],{20271:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cover-people-total-container"},[r("ChartCard",{staticClass:"cover-people-total-style",attrs:{title:"覆盖总人数"}},[r("div",{staticClass:"total-box flex-start align-end"},[r("p",{staticClass:"people-num-style"},[t._v(t._s(t.totalNum))]),r("p",{staticClass:"people-unit-style"},[t._v("人")])]),r("v-chart",{staticClass:"chart",attrs:{"init-options":t.initEcharts,option:t.option}})],1)],1)},n=[],o=(r(41539),r(78783),r(33948),r(9653),{components:{ChartCard:function(){return r.e(5173).then(r.bind(r,95173))}},props:{totalNum:{type:Number,default:0},dataSource:{type:Array,default:function(){return[220,182,191,234,290,330]}},xAxisData:{type:Array,default:function(){return["2/23","2/24","2/25","2/26","2/27","2/28"]}}},data:function(){return{barWidth:20,initEcharts:{renderer:"canvas",useDirtyRect:!0,ssr:!1,width:"auto",height:"auto",locale:"ZH"},option:{}}},watch:{dataSource:function(){this.optionInit()}},created:function(){this.optionInit()},methods:{optionInit:function(){this.option={grid:{top:20,bottom:20},xAxis:{axisTick:{show:!1},minorTick:{show:!1},axisLine:{show:!1},type:"category",max:7,data:this.xAxisData},yAxis:{show:!1},dataZoom:{type:"inside"},series:[{type:"bar",barWidth:this.$cpx(this.barWidth),itemStyle:{borderRadius:90,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#0077FF"},{offset:1,color:"#BEDCFF"}],global:!1}},data:this.dataSource}]}}}}),i=o,s=r(1001),c=(0,s.Z)(i,a,n,!1,null,"3f602a80",null),u=c.exports},53111:function(t,e,r){var a=r(1702),n=r(84488),o=r(41340),i=r(81361),s=a("".replace),c="["+i+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t){return function(e){var r=o(n(e));return 1&t&&(r=s(r,u,"")),2&t&&(r=s(r,l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},50863:function(t,e,r){var a=r(1702);t.exports=a(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,r){"use strict";var a=r(19781),n=r(17854),o=r(1702),i=r(54705),s=r(31320),c=r(92597),u=r(79587),l=r(47976),f=r(52190),p=r(57593),h=r(47293),d=r(8006).f,y=r(31236).f,b=r(3070).f,m=r(50863),v=r(53111).trim,x="Number",N=n[x],I=N.prototype,E=n.TypeError,g=o("".slice),_=o("".charCodeAt),C=function(t){var e=p(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,a,n,o,i,s,c,u=p(t,"number");if(f(u))throw E("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=v(u),e=_(u,0),43===e||45===e){if(r=_(u,2),88===r||120===r)return NaN}else if(48===e){switch(_(u,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(o=g(u,2),i=o.length,s=0;s<i;s++)if(c=_(o,s),c<48||c>n)return NaN;return parseInt(o,a)}return+u};if(i(x,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var S,w=function(t){var e=arguments.length<1?0:N(C(t)),r=this;return l(I,r)&&h((function(){m(r)}))?u(Object(e),r,w):e},F=a?d(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;F.length>T;T++)c(N,S=F[T])&&!c(w,S)&&b(w,S,y(N,S));w.prototype=I,I.constructor=w,s(n,x,w)}}}]);
//# sourceMappingURL=271-legacy.ed04618f.js.map