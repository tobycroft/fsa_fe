(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2719,3823],{72719:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return o}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"avatar-container"},[r("van-image",{style:{width:t.widthCmp+"px",height:t.heightCmp+"px"},attrs:{src:t.imgUrl,fit:"cover",radius:t.radiusCmp}})],1)},i=[],u=(r(9653),{props:{imgUrl:{type:String,required:!0},width:{type:Number,default:100},height:{type:Number,default:135},radius:{type:Number,default:16}},computed:{widthCmp:function(){return this.$cpx(this.width)},heightCmp:function(){return console.log("this.height :>> ",this.height),this.$cpx(this.height)},radiusCmp:function(){return this.$cpx(this.radius)}}}),a=u,s=r(1001),f=(0,s.Z)(a,n,i,!1,null,"4cfcf6f2",null),o=f.exports},53111:function(t,e,r){var n=r(1702),i=r(84488),u=r(41340),a=r(81361),s=n("".replace),f="["+a+"]",o=RegExp("^"+f+f+"*"),c=RegExp(f+f+"*$"),h=function(t){return function(e){var r=u(i(e));return 1&t&&(r=s(r,o,"")),2&t&&(r=s(r,c,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},50863:function(t,e,r){var n=r(1702);t.exports=n(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,r){"use strict";var n=r(19781),i=r(17854),u=r(1702),a=r(54705),s=r(31320),f=r(92597),o=r(79587),c=r(47976),h=r(52190),p=r(57593),l=r(47293),g=r(8006).f,m=r(31236).f,N=r(3070).f,d=r(50863),v=r(53111).trim,I="Number",E=i[I],b=E.prototype,_=i.TypeError,x=u("".slice),y=u("".charCodeAt),C=function(t){var e=p(t,"number");return"bigint"==typeof e?e:w(e)},w=function(t){var e,r,n,i,u,a,s,f,o=p(t,"number");if(h(o))throw _("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=v(o),e=y(o,0),43===e||45===e){if(r=y(o,2),88===r||120===r)return NaN}else if(48===e){switch(y(o,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+o}for(u=x(o,2),a=u.length,s=0;s<a;s++)if(f=y(u,s),f<48||f>i)return NaN;return parseInt(u,n)}return+o};if(a(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:E(C(t)),r=this;return c(b,r)&&l((function(){d(r)}))?o(Object(e),r,S):e},T=n?g(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;T.length>k;k++)f(E,A=T[k])&&!f(S,A)&&N(S,A,m(E,A));S.prototype=b,b.constructor=S,s(i,I,S)}}}]);
//# sourceMappingURL=2719-legacy.7942a2b3.js.map