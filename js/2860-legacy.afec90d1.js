(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2860,2226],{12860:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"logo-container"},[t("van-image",{class:{border:e.border,round:e.round},style:{width:e.sizeCmp+"px",height:e.sizeCmp+"px"},attrs:{src:e.imgUrl}})],1)},i=[],u=(t(9653),{props:{imgUrl:{type:String,default:function(){return""},required:!0},size:{type:Number,default:80},round:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},computed:{sizeCmp:function(){return this.$cpx(this.size)}},mounted:function(){}}),o=u,a=t(1001),s=(0,a.Z)(o,n,i,!1,null,"1c76b474",null),f=s.exports},53111:function(e,r,t){var n=t(1702),i=t(84488),u=t(41340),o=t(81361),a=n("".replace),s="["+o+"]",f=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(e){return function(r){var t=u(i(r));return 1&e&&(t=a(t,f,"")),2&e&&(t=a(t,c,"")),t}};e.exports={start:l(1),end:l(2),trim:l(3)}},50863:function(e,r,t){var n=t(1702);e.exports=n(1..valueOf)},81361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(e,r,t){"use strict";var n=t(19781),i=t(17854),u=t(1702),o=t(54705),a=t(31320),s=t(92597),f=t(79587),c=t(47976),l=t(52190),p=t(57593),h=t(47293),d=t(8006).f,m=t(31236).f,N=t(3070).f,g=t(50863),I=t(53111).trim,b="Number",v=i[b],E=v.prototype,_=i.TypeError,y=u("".slice),x=u("".charCodeAt),A=function(e){var r=p(e,"number");return"bigint"==typeof r?r:C(r)},C=function(e){var r,t,n,i,u,o,a,s,f=p(e,"number");if(l(f))throw _("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),r=x(f,0),43===r||45===r){if(t=x(f,2),88===t||120===t)return NaN}else if(48===r){switch(x(f,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+f}for(u=y(f,2),o=u.length,a=0;a<o;a++)if(s=x(u,a),s<48||s>i)return NaN;return parseInt(u,n)}return+f};if(o(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,T=function(e){var r=arguments.length<1?0:v(A(e)),t=this;return c(E,t)&&h((function(){g(t)}))?f(Object(r),t,T):r},k=n?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;k.length>F;F++)s(v,S=k[F])&&!s(T,S)&&N(T,S,m(v,S));T.prototype=E,E.constructor=T,a(i,b,T)}}}]);
//# sourceMappingURL=2860-legacy.afec90d1.js.map