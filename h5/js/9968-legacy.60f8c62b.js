(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9968,915],{79968:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"num-unit-container flex-start align-baseline"},[r("p",{staticClass:"num-style",style:{color:t.color}},[t._v(t._s(t.text))]),r("p",{staticClass:"unit-style"},[t._v(t._s(t.unit))])])},a=[],u=(r(9653),{props:{color:{type:String,default:"#0077ff"},text:{type:Number,default:"0"},unit:{type:String,default:"单位"}}}),i=u,s=r(1001),o=(0,s.Z)(i,n,a,!1,null,"ad49b7f4",null),f=o.exports},53111:function(t,e,r){var n=r(1702),a=r(84488),u=r(41340),i=r(81361),s=n("".replace),o="["+i+"]",f=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t){return function(e){var r=u(a(e));return 1&t&&(r=s(r,f,"")),2&t&&(r=s(r,c,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},50863:function(t,e,r){var n=r(1702);t.exports=n(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,r){"use strict";var n=r(19781),a=r(17854),u=r(1702),i=r(54705),s=r(31320),o=r(92597),f=r(79587),c=r(47976),l=r(52190),p=r(57593),N=r(47293),h=r(8006).f,I=r(31236).f,_=r(3070).f,v=r(50863),E=r(53111).trim,b="Number",g=a[b],m=g.prototype,y=a.TypeError,d=u("".slice),x=u("".charCodeAt),S=function(t){var e=p(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,n,a,u,i,s,o,f=p(t,"number");if(l(f))throw y("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=E(f),e=x(f,0),43===e||45===e){if(r=x(f,2),88===r||120===r)return NaN}else if(48===e){switch(x(f,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+f}for(u=d(f,2),i=u.length,s=0;s<i;s++)if(o=x(u,s),o<48||o>a)return NaN;return parseInt(u,n)}return+f};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,T=function(t){var e=arguments.length<1?0:g(S(t)),r=this;return c(m,r)&&N((function(){v(r)}))?f(Object(e),r,T):e},k=n?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;k.length>F;F++)o(g,C=k[F])&&!o(T,C)&&_(T,C,I(g,C));T.prototype=m,m.constructor=T,s(a,b,T)}}}]);
//# sourceMappingURL=9968-legacy.60f8c62b.js.map