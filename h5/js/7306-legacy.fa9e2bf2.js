(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7306],{67306:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"host-unit-list-container"},[n("van-list",{staticClass:"main-talker-list",attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(e,t){return n("div",{key:t,staticClass:"main-talker-item"},[n("HostUnitRow",{attrs:{avatarUrl:e.img?e.img:"",userName:e.name,employee:e.employee,student:e.student}})],1)})),0)],1)},a=[],i=n(62032),o=n(16198),s=(n(35666),n(41539),n(78783),n(33948),n(9653),{name:"HostUnitList",components:{HostUnitRow:function(){return n.e(6342).then(n.bind(n,66342))}},props:{aid:{type:[Number,String],default:""},keyword:{type:String,default:""}},data:function(){return{list:[],loading:!1,finished:!1,limit:10,page:1}},methods:{onLoad:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.hostInfoSearchAPI();case 2:n=t.sent,console.log("res :>> ",n),r=(0,i.Z)(n.data);try{for(r.s();!(a=r.n()).done;)o=a.value,e.list.push(o)}catch(s){r.e(s)}finally{r.f()}e.page+=1,e.loading=!1,e.page>n.last_page&&(e.finished=!0),e.$emit("changeTotal",n.total);case 10:case"end":return t.stop()}}),t)})))()},hostInfoSearchAPI:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={aid:e.aid,limit:e.limit,page:e.page,name:e.keyword},t.next=3,e.$request("host.hostInfoSearch",n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},onSearch:function(){this.list=[],this.page=1,this.loading=!0,this.finished=!1,this.onLoad()}}}),u=s,c=n(1001),f=(0,c.Z)(u,r,a,!1,null,"5f3e5828",null),l=f.exports},53111:function(e,t,n){var r=n(1702),a=n(84488),i=n(41340),o=n(81361),s=r("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),l=function(e){return function(t){var n=i(a(t));return 1&e&&(n=s(n,c,"")),2&e&&(n=s(n,f,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},50863:function(e,t,n){var r=n(1702);e.exports=r(1..valueOf)},81361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(e,t,n){"use strict";var r=n(19781),a=n(17854),i=n(1702),o=n(54705),s=n(31320),u=n(92597),c=n(79587),f=n(47976),l=n(52190),h=n(57593),p=n(47293),d=n(8006).f,m=n(31236).f,g=n(3070).f,v=n(50863),I=n(53111).trim,N="Number",b=a[N],E=b.prototype,_=a.TypeError,y=i("".slice),k=i("".charCodeAt),w=function(e){var t=h(e,"number");return"bigint"==typeof t?t:x(t)},x=function(e){var t,n,r,a,i,o,s,u,c=h(e,"number");if(l(c))throw _("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=I(c),t=k(c,0),43===t||45===t){if(n=k(c,2),88===n||120===n)return NaN}else if(48===t){switch(k(c,1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+c}for(i=y(c,2),o=i.length,s=0;s<o;s++)if(u=k(i,s),u<48||u>a)return NaN;return parseInt(i,r)}return+c};if(o(N,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,A=function(e){var t=arguments.length<1?0:b(w(e)),n=this;return f(E,n)&&p((function(){v(n)}))?c(Object(t),n,A):t},R=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;R.length>T;T++)u(b,S=R[T])&&!u(A,S)&&g(A,S,m(b,S));A.prototype=E,E.constructor=A,s(a,N,A)}}}]);
//# sourceMappingURL=7306-legacy.fa9e2bf2.js.map