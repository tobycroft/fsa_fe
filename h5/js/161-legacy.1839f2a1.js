(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[161],{30161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multi-selector-container"},[n("van-popup",{attrs:{position:"bottom",round:"","safe-area-inset-bottom":"","close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("Card",{staticClass:"card-style"},[n("div",{staticClass:"popup-header-style flex"},[n("p",{staticClass:"cancel-btn-style",on:{click:t.fnCancel}},[t._v("取消")]),n("p",{staticClass:"popup-header-title"},[t._v("管理标签")]),n("p",{staticClass:"confirm-btn-style",on:{click:t.fnConfirm}},[t._v("保存")])]),n("div",{staticClass:"option-list-box"},[n("p",{staticClass:"option-list-title"},[t._v(t._s(t.cateName))]),n("ul",{staticClass:"option-list flex-start flex-wrap"},t._l(t.tags,(function(e,i){return n("li",{key:i,staticClass:"option-item"},[n("Tag",{attrs:{title:e.text,bigSize:"",active:t.isActive(e.id),close:t.isActive(e.id)},nativeOn:{click:function(n){return t.toggleSelect(e)}}})],1)})),0)])])],1)],1)},r=[],s=n(48534),a=(n(35666),n(41539),n(78783),n(33948),n(38862),n(69826),n(9653),n(34553),n(40561),{components:{Card:function(){return n.e(166).then(n.bind(n,80248))},Tag:function(){return n.e(3316).then(n.bind(n,23316))}},props:{show:{type:Boolean,default:!1},dataUrl:{type:String,default:""},cateName:{type:String,default:"主题标签"},mulitiple:{type:Boolean,default:!1},selectedItems:{type:Array,default:function(){return[]}}},watch:{selectedItems:function(t){this.activedItems=JSON.parse(JSON.stringify(t))}},computed:{isActive:function(){var t=this;return function(e){return!!t.activedItems.find((function(t){return t.id==Number(e)}))}}},data:function(){return{activedItems:[],tags:[]}},created:function(){this.getTags()},methods:{toggleSelect:function(t){var e=this.activedItems.findIndex((function(e){return e.id==Number(t.id)}));e>-1?this.activedItems.splice(e,1):this.mulitiple?this.activedItems.push(t):this.activedItems=[t]},getTags:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var n,i,r,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$store.getters.associationInfo.id,i={aid:n},e.next=4,t.$request(t.dataUrl,i);case 4:for(a in r=e.sent,s=[],r)s.push({id:Number(a),text:r[a]});t.tags=s;case 8:case"end":return e.stop()}}),e)})))()},fnCancel:function(){this.$emit("update:show",!1)},fnConfirm:function(){this.$emit("confirm",this.activedItems),this.fnCancel()}}}),o=a,c=n(43736),u=(0,c.Z)(o,i,r,!1,null,"9a697412",null),f=u.exports},53111:function(t,e,n){var i=n(1702),r=n(84488),s=n(41340),a=n(81361),o=i("".replace),c="["+a+"]",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t){return function(e){var n=s(r(e));return 1&t&&(n=o(n,u,"")),2&t&&(n=o(n,f,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},50863:function(t,e,n){var i=n(1702);t.exports=i(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},34553:function(t,e,n){"use strict";var i=n(82109),r=n(42092).findIndex,s=n(51223),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(a)},69826:function(t,e,n){"use strict";var i=n(82109),r=n(42092).find,s=n(51223),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(a)},9653:function(t,e,n){"use strict";var i=n(19781),r=n(17854),s=n(1702),a=n(54705),o=n(31320),c=n(92597),u=n(79587),f=n(47976),l=n(52190),d=n(57593),p=n(47293),h=n(8006).f,v=n(31236).f,m=n(3070).f,g=n(50863),I=n(53111).trim,N="Number",b=r[N],y=b.prototype,C=r.TypeError,x=s("".slice),_=s("".charCodeAt),A=function(t){var e=d(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,i,r,s,a,o,c,u=d(t,"number");if(l(u))throw C("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=I(u),e=_(u,0),43===e||45===e){if(n=_(u,2),88===n||120===n)return NaN}else if(48===e){switch(_(u,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(s=x(u,2),a=s.length,o=0;o<a;o++)if(c=_(s,o),c<48||c>r)return NaN;return parseInt(s,i)}return+u};if(a(N,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:b(A(t)),n=this;return f(y,n)&&p((function(){g(n)}))?u(Object(e),n,S):e},k=i?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;k.length>T;T++)c(b,w=k[T])&&!c(S,w)&&m(S,w,v(b,w));S.prototype=y,y.constructor=S,o(r,N,S)}}}]);
//# sourceMappingURL=161-legacy.1839f2a1.js.map