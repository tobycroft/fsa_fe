(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2420],{22420:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return l}});var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"gift-bag-library-container"},[e("van-popup",{attrs:{show:t.show,round:"",position:"top"}},[e("div",{staticClass:"pop-content"},[e("p",[t._v("编辑文案")]),e("van-field",{staticClass:"input",model:{value:t.posters[t.key],callback:function(r){t.$set(t.posters,t.key,r)},expression:"posters[key]"}}),e("van-button",{attrs:{color:"#2374FF",round:""},on:{click:t.handleClose}},[t._v("确定")])],1)]),e("div",{staticClass:"poster-box",attrs:{id:"poster-box"}},[e("p",{staticClass:"poster-title",on:{click:function(r){return t.handleShow("title")}}},[t._v(" "+t._s(t.posters.title)+" ")]),e("p",{staticClass:"poster-date",on:{click:function(r){return t.handleShow("date")}}},[t._v(t._s(t.posters.date))]),e("div",{staticClass:"poster-name"},[e("span",{staticClass:"name",on:{click:function(r){return t.handleShow("name")}}},[t._v(t._s(t.posters.name))]),e("span",{staticClass:"work",on:{click:function(r){return t.handleShow("work")}}},[t._v(t._s(t.posters.work))])]),e("p",{staticClass:"poster-power van-ellipsis",on:{click:function(r){return t.handleShow("power")}}},[t._v(" "+t._s(t.posters.power)+" ")]),e("div",{staticClass:"poster-place"},[e("div",{staticClass:"img-box"},[e("div",{staticClass:"img"},[e("van-image",{staticClass:"avatar-style",attrs:{src:t.posters.imgUrl}})],1)]),e("div",{staticClass:"place-box"},[e("p",{staticClass:"char",on:{click:function(r){return t.handleShow("unit")}}},[t._v(" 举办单位："+t._s(t.posters.unit)+" ")]),e("p",{staticClass:"char",on:{click:function(r){return t.handleShow("address")}}},[t._v(" 举办地点： "+t._s(t.posters.address)+" ")]),e("p",{staticClass:"char",on:{click:function(r){return t.handleShow("number")}}},[t._v(" 参与人数："+t._s(t.posters.number)+"人 ")])])]),e("p",{staticClass:"blue-char mt"},[t._v("数据来源：福建省家庭教育研究会数智化平台")]),e("p",{staticClass:"blue-char"},[t._v("技术支持：福建亲师友科技有限公司")])]),e("div",{staticClass:"gap"}),e("footer",{staticClass:"flex"},[e("div",{staticClass:"btn"},[t._v("自定义海报上传")]),e("div",{staticClass:"btn-blue",on:{click:t.savePosters}},[t._v("保存海报并返回")])])],1)},i=[],o=e(16198),a=(e(35666),e(41539),e(78783),e(33948),e(68309),e(92222),e(74916),e(23123),e(4723),e(75505),e(87714),e(82801),e(1174),e(82472),e(48675),e(92990),e(18927),e(33105),e(35035),e(74345),e(7174),e(32846),e(44731),e(77209),e(96319),e(58867),e(37789),e(33739),e(29368),e(14483),e(12056),e(3462),e(30678),e(27462),e(33824),e(55021),e(12974),e(15016),e(27719)),s={components:{uploadAvatar:function(){return e.e(4857).then(e.bind(e,14857))}},data:function(){return{lid:"",fileUpload:a.fileUpload,show:!1,key:"title",posters:{title:"",date:"",name:"",work:"主讲老师",power:"福建省家庭教育研究会副秘书长",unit:"",address:"",number:"",imgUrl:""}}},created:function(){this.getLid(),this.eventDetailsAPI(),this.linstructorInfoByIdAPI(this.$store.getters.lecturerInfo.id)},methods:{handleShow:function(t){this.show=!0,this.key=t},handleClose:function(){this.show=!1},handleAvatarUrl:function(t){this.imgUrl=t},getLid:function(){this.lid=this.$route.query.lid},eventDetailsAPI:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e={id:t.lid},r.next=3,t.$request("lecture.eventDetails",e);case 3:n=r.sent,console.log("讲座模块-获取信息(活动详情)API_res :>> ",n),t.posters.title=n.title,t.posters.date=t.$dateFormat(n.start_date,"yyyy年m月d日"),t.posters.unit=n.host_info.name,t.posters.address="".concat(n.province).concat(n.city).concat(n.district).concat(n.street),t.posters.number=n.visitor;case 10:case"end":return r.stop()}}),r)})))()},linstructorInfoByIdAPI:function(t){var r=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={id:t},e.next=3,r.$request("instructor.linstructorInfoById",n);case 3:i=e.sent,console.log("根据ID获取讲师信息API_res :>> ",i),r.posters.name=i.name,r.posters.imgUrl=i.img;case 7:case"end":return e.stop()}}),e)})))()},savePosters:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var e,n,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=document.querySelector("#poster-box"),r.next=3,t.$html2canvas(e,{allowTaint:!0,useCORS:!0,logging:!0,scale:1.3});case 3:n=r.sent,i=n.toDataURL("png"),o=t.dataURLtoFile(i,"posters"),console.log("file :>> ",o);case 7:case"end":return r.stop()}}),r)})))()},dataURLtoFile:function(t,r){var e=this.getUint8Arr(t);return new File([e.u8arr],r,{type:e.mime})},getUint8Arr:function(t){var r=t.split(","),e=r[0].match(/:(.*?);/)[1],n=atob(r[1]),i=n.length,o=new Uint8Array(i);while(i--)o[i]=n.charCodeAt(i);return{u8arr:o,mime:e}},fileUpload:function(t){var r=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={file:t},e.next=3,r.$request("aoss.fileUpload",n);case 3:i=e.sent,console.log("res :>> ",i);case 5:case"end":return e.stop()}}),e)})))()}}},u=s,c=e(1001),f=(0,c.Z)(u,n,i,!1,null,"79f7e1da",null),l=f.exports},24019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(t,r,e){"use strict";var n,i,o,a=e(24019),s=e(19781),u=e(17854),c=e(60614),f=e(70111),l=e(92597),h=e(70648),p=e(66330),d=e(68880),v=e(31320),y=e(3070).f,g=e(47976),A=e(79518),E=e(27674),w=e(5112),m=e(69711),R=u.Int8Array,T=R&&R.prototype,_=u.Uint8ClampedArray,x=_&&_.prototype,I=R&&A(R),b=T&&A(T),C=Object.prototype,M=u.TypeError,O=w("toStringTag"),S=m("TYPED_ARRAY_TAG"),U=m("TYPED_ARRAY_CONSTRUCTOR"),D=a&&!!E&&"Opera"!==h(u.opera),N=!1,k={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L={BigInt64Array:8,BigUint64Array:8},P=function(t){if(!f(t))return!1;var r=h(t);return"DataView"===r||l(k,r)||l(L,r)},F=function(t){if(!f(t))return!1;var r=h(t);return l(k,r)||l(L,r)},Y=function(t){if(F(t))return t;throw M("Target is not a typed array")},B=function(t){if(c(t)&&(!E||g(I,t)))return t;throw M(p(t)+" is not a typed array constructor")},V=function(t,r,e,n){if(s){if(e)for(var i in k){var o=u[i];if(o&&l(o.prototype,t))try{delete o.prototype[t]}catch(a){try{o.prototype[t]=r}catch(c){}}}b[t]&&!e||v(b,t,e?r:D&&T[t]||r,n)}},W=function(t,r,e){var n,i;if(s){if(E){if(e)for(n in k)if(i=u[n],i&&l(i,t))try{delete i[t]}catch(o){}if(I[t]&&!e)return;try{return v(I,t,e?r:D&&I[t]||r)}catch(o){}}for(n in k)i=u[n],!i||i[t]&&!e||v(i,t,r)}};for(n in k)i=u[n],o=i&&i.prototype,o?d(o,U,i):D=!1;for(n in L)i=u[n],o=i&&i.prototype,o&&d(o,U,i);if((!D||!c(I)||I===Function.prototype)&&(I=function(){throw M("Incorrect invocation")},D))for(n in k)u[n]&&E(u[n],I);if((!D||!b||b===C)&&(b=I.prototype,D))for(n in k)u[n]&&E(u[n].prototype,b);if(D&&A(x)!==b&&E(x,b),s&&!l(b,O))for(n in N=!0,y(b,O,{get:function(){return f(this)?this[S]:void 0}}),k)u[n]&&d(u[n],S,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_CONSTRUCTOR:U,TYPED_ARRAY_TAG:N&&S,aTypedArray:Y,aTypedArrayConstructor:B,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:W,isView:P,isTypedArray:F,TypedArray:I,TypedArrayPrototype:b}},13331:function(t,r,e){"use strict";var n=e(17854),i=e(1702),o=e(19781),a=e(24019),s=e(76530),u=e(68880),c=e(12248),f=e(47293),l=e(25787),h=e(19303),p=e(17466),d=e(57067),v=e(11179),y=e(79518),g=e(27674),A=e(8006).f,E=e(3070).f,w=e(21285),m=e(41589),R=e(58003),T=e(29909),_=s.PROPER,x=s.CONFIGURABLE,I=T.get,b=T.set,C="ArrayBuffer",M="DataView",O="prototype",S="Wrong length",U="Wrong index",D=n[C],N=D,k=N&&N[O],L=n[M],P=L&&L[O],F=Object.prototype,Y=n.Array,B=n.RangeError,V=i(w),W=i([].reverse),$=v.pack,j=v.unpack,q=function(t){return[255&t]},Z=function(t){return[255&t,t>>8&255]},G=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},H=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},z=function(t){return $(t,23,4)},Q=function(t){return $(t,52,8)},X=function(t,r){E(t[O],r,{get:function(){return I(this)[r]}})},K=function(t,r,e,n){var i=d(e),o=I(t);if(i+r>o.byteLength)throw B(U);var a=I(o.buffer).bytes,s=i+o.byteOffset,u=m(a,s,s+r);return n?u:W(u)},J=function(t,r,e,n,i,o){var a=d(e),s=I(t);if(a+r>s.byteLength)throw B(U);for(var u=I(s.buffer).bytes,c=a+s.byteOffset,f=n(+i),l=0;l<r;l++)u[c+l]=f[o?l:r-l-1]};if(a){var tt=_&&D.name!==C;if(f((function(){D(1)}))&&f((function(){new D(-1)}))&&!f((function(){return new D,new D(1.5),new D(NaN),tt&&!x})))tt&&x&&u(D,"name",C);else{N=function(t){return l(this,k),new D(d(t))},N[O]=k;for(var rt,et=A(D),nt=0;et.length>nt;)(rt=et[nt++])in N||u(N,rt,D[rt]);k.constructor=N}g&&y(P)!==F&&g(P,F);var it=new L(new N(2)),ot=i(P.setInt8);it.setInt8(0,2147483648),it.setInt8(1,2147483649),!it.getInt8(0)&&it.getInt8(1)||c(P,{setInt8:function(t,r){ot(this,t,r<<24>>24)},setUint8:function(t,r){ot(this,t,r<<24>>24)}},{unsafe:!0})}else N=function(t){l(this,k);var r=d(t);b(this,{bytes:V(Y(r),0),byteLength:r}),o||(this.byteLength=r)},k=N[O],L=function(t,r,e){l(this,P),l(t,k);var n=I(t).byteLength,i=h(r);if(i<0||i>n)throw B("Wrong offset");if(e=void 0===e?n-i:p(e),i+e>n)throw B(S);b(this,{buffer:t,byteLength:e,byteOffset:i}),o||(this.buffer=t,this.byteLength=e,this.byteOffset=i)},P=L[O],o&&(X(N,"byteLength"),X(L,"buffer"),X(L,"byteLength"),X(L,"byteOffset")),c(P,{getInt8:function(t){return K(this,1,t)[0]<<24>>24},getUint8:function(t){return K(this,1,t)[0]},getInt16:function(t){var r=K(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=K(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return H(K(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return H(K(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return j(K(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return j(K(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){J(this,1,t,q,r)},setUint8:function(t,r){J(this,1,t,q,r)},setInt16:function(t,r){J(this,2,t,Z,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){J(this,2,t,Z,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){J(this,4,t,G,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){J(this,4,t,G,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){J(this,4,t,z,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){J(this,8,t,Q,r,arguments.length>2?arguments[2]:void 0)}});R(N,C),R(L,M),t.exports={ArrayBuffer:N,DataView:L}},1048:function(t,r,e){"use strict";var n=e(47908),i=e(51400),o=e(26244),a=Math.min;t.exports=[].copyWithin||function(t,r){var e=n(this),s=o(e),u=i(t,s),c=i(r,s),f=arguments.length>2?arguments[2]:void 0,l=a((void 0===f?s:i(f,s))-c,s-u),h=1;c<u&&u<c+l&&(h=-1,c+=l-1,u+=l-1);while(l-- >0)c in e?e[u]=e[c]:delete e[u],u+=h,c+=h;return e}},21285:function(t,r,e){"use strict";var n=e(47908),i=e(51400),o=e(26244);t.exports=function(t){var r=n(this),e=o(r),a=arguments.length,s=i(a>1?arguments[1]:void 0,e),u=a>2?arguments[2]:void 0,c=void 0===u?e:i(u,e);while(c>s)r[s++]=t;return r}},97745:function(t,r,e){var n=e(26244);t.exports=function(t,r){var e=0,i=n(r),o=new t(i);while(i>e)o[e]=r[e++];return o}},86583:function(t,r,e){"use strict";var n=e(22104),i=e(45656),o=e(19303),a=e(26244),s=e(9341),u=Math.min,c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0,l=s("lastIndexOf"),h=f||!l;t.exports=h?function(t){if(f)return n(c,this,arguments)||0;var r=i(this),e=a(r),s=e-1;for(arguments.length>1&&(s=u(s,o(arguments[1]))),s<0&&(s=e+s);s>=0;s--)if(s in r&&r[s]===t)return s||0;return-1}:c},53671:function(t,r,e){var n=e(17854),i=e(19662),o=e(47908),a=e(68361),s=e(26244),u=n.TypeError,c=function(t){return function(r,e,n,c){i(e);var f=o(r),l=a(f),h=s(f),p=t?h-1:0,d=t?-1:1;if(n<2)while(1){if(p in l){c=l[p],p+=d;break}if(p+=d,t?p<0:h<=p)throw u("Reduce of empty array with no initial value")}for(;t?p>=0:h>p;p+=d)p in l&&(c=e(c,l[p],p,f));return c}};t.exports={left:c(!1),right:c(!0)}},94362:function(t,r,e){var n=e(41589),i=Math.floor,o=function(t,r){var e=t.length,u=i(e/2);return e<8?a(t,r):s(t,o(n(t,0,u),r),o(n(t,u),r),r)},a=function(t,r){var e,n,i=t.length,o=1;while(o<i){n=o,e=t[o];while(n&&r(t[n-1],e)>0)t[n]=t[--n];n!==o++&&(t[n]=e)}return t},s=function(t,r,e,n){var i=r.length,o=e.length,a=0,s=0;while(a<i||s<o)t[a+s]=a<i&&s<o?n(r[a],e[s])<=0?r[a++]:e[s++]:a<i?r[a++]:e[s++];return t};t.exports=o},14170:function(t){for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e={},n=0;n<66;n++)e[r.charAt(n)]=n;t.exports={itoc:r,ctoi:e}},93678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},68886:function(t,r,e){var n=e(88113),i=n.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},30256:function(t,r,e){var n=e(88113);t.exports=/MSIE|Trident/.test(n)},98008:function(t,r,e){var n=e(88113),i=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},7762:function(t,r,e){"use strict";var n=e(19781),i=e(47293),o=e(19670),a=e(70030),s=e(56277),u=Error.prototype.toString,c=i((function(){if(n){var t=a(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==u.call(t))return!0}return"2: 1"!==u.call({message:1,name:2})||"Error"!==u.call({})}));t.exports=c?function(){var t=o(this),r=s(t.name,"Error"),e=s(t.message);return r?e?r+": "+e:r:e}:u},11179:function(t,r,e){var n=e(17854),i=n.Array,o=Math.abs,a=Math.pow,s=Math.floor,u=Math.log,c=Math.LN2,f=function(t,r,e){var n,f,l,h=i(e),p=8*e-r-1,d=(1<<p)-1,v=d>>1,y=23===r?a(2,-24)-a(2,-77):0,g=t<0||0===t&&1/t<0?1:0,A=0;t=o(t),t!=t||t===1/0?(f=t!=t?1:0,n=d):(n=s(u(t)/c),l=a(2,-n),t*l<1&&(n--,l*=2),t+=n+v>=1?y/l:y*a(2,1-v),t*l>=2&&(n++,l/=2),n+v>=d?(f=0,n=d):n+v>=1?(f=(t*l-1)*a(2,r),n+=v):(f=t*a(2,v-1)*a(2,r),n=0));while(r>=8)h[A++]=255&f,f/=256,r-=8;n=n<<r|f,p+=r;while(p>0)h[A++]=255&n,n/=256,p-=8;return h[--A]|=128*g,h},l=function(t,r){var e,n=t.length,i=8*n-r-1,o=(1<<i)-1,s=o>>1,u=i-7,c=n-1,f=t[c--],l=127&f;f>>=7;while(u>0)l=256*l+t[c--],u-=8;e=l&(1<<-u)-1,l>>=-u,u+=r;while(u>0)e=256*e+t[c--],u-=8;if(0===l)l=1-s;else{if(l===o)return e?NaN:f?-1/0:1/0;e+=a(2,r),l-=s}return(f?-1:1)*e*a(2,l-r)};t.exports={pack:f,unpack:l}},55988:function(t,r,e){var n=e(70111),i=Math.floor;t.exports=Number.isInteger||function(t){return!n(t)&&isFinite(t)&&i(t)===t}},47850:function(t,r,e){var n=e(70111),i=e(84326),o=e(5112),a=o("match");t.exports=function(t){var r;return n(t)&&(void 0!==(r=t[a])?!!r:"RegExp"==i(t))}},57067:function(t,r,e){var n=e(17854),i=e(19303),o=e(17466),a=n.RangeError;t.exports=function(t){if(void 0===t)return 0;var r=i(t),e=o(r);if(r!==e)throw a("Wrong length or index");return e}},84590:function(t,r,e){var n=e(17854),i=e(73002),o=n.RangeError;t.exports=function(t,r){var e=i(t);if(e%r)throw o("Wrong offset");return e}},73002:function(t,r,e){var n=e(17854),i=e(19303),o=n.RangeError;t.exports=function(t){var r=i(t);if(r<0)throw o("The argument can't be less than 0");return r}},44038:function(t,r,e){var n=e(35268);t.exports=function(t){try{if(n)return Function('return require("'+t+'")')()}catch(r){}}},19843:function(t,r,e){"use strict";var n=e(82109),i=e(17854),o=e(46916),a=e(19781),s=e(63832),u=e(90260),c=e(13331),f=e(25787),l=e(79114),h=e(68880),p=e(55988),d=e(17466),v=e(57067),y=e(84590),g=e(34948),A=e(92597),E=e(70648),w=e(70111),m=e(52190),R=e(70030),T=e(47976),_=e(27674),x=e(8006).f,I=e(97321),b=e(42092).forEach,C=e(96340),M=e(3070),O=e(31236),S=e(29909),U=e(79587),D=S.get,N=S.set,k=M.f,L=O.f,P=Math.round,F=i.RangeError,Y=c.ArrayBuffer,B=Y.prototype,V=c.DataView,W=u.NATIVE_ARRAY_BUFFER_VIEWS,$=u.TYPED_ARRAY_CONSTRUCTOR,j=u.TYPED_ARRAY_TAG,q=u.TypedArray,Z=u.TypedArrayPrototype,G=u.aTypedArrayConstructor,H=u.isTypedArray,z="BYTES_PER_ELEMENT",Q="Wrong length",X=function(t,r){G(t);var e=0,n=r.length,i=new t(n);while(n>e)i[e]=r[e++];return i},K=function(t,r){k(t,r,{get:function(){return D(this)[r]}})},J=function(t){var r;return T(B,t)||"ArrayBuffer"==(r=E(t))||"SharedArrayBuffer"==r},tt=function(t,r){return H(t)&&!m(r)&&r in t&&p(+r)&&r>=0},rt=function(t,r){return r=g(r),tt(t,r)?l(2,t[r]):L(t,r)},et=function(t,r,e){return r=g(r),!(tt(t,r)&&w(e)&&A(e,"value"))||A(e,"get")||A(e,"set")||e.configurable||A(e,"writable")&&!e.writable||A(e,"enumerable")&&!e.enumerable?k(t,r,e):(t[r]=e.value,t)};a?(W||(O.f=rt,M.f=et,K(Z,"buffer"),K(Z,"byteOffset"),K(Z,"byteLength"),K(Z,"length")),n({target:"Object",stat:!0,forced:!W},{getOwnPropertyDescriptor:rt,defineProperty:et}),t.exports=function(t,r,e){var a=t.match(/\d+$/)[0]/8,u=t+(e?"Clamped":"")+"Array",c="get"+t,l="set"+t,p=i[u],g=p,A=g&&g.prototype,E={},m=function(t,r){var e=D(t);return e.view[c](r*a+e.byteOffset,!0)},T=function(t,r,n){var i=D(t);e&&(n=(n=P(n))<0?0:n>255?255:255&n),i.view[l](r*a+i.byteOffset,n,!0)},M=function(t,r){k(t,r,{get:function(){return m(this,r)},set:function(t){return T(this,r,t)},enumerable:!0})};W?s&&(g=r((function(t,r,e,n){return f(t,A),U(function(){return w(r)?J(r)?void 0!==n?new p(r,y(e,a),n):void 0!==e?new p(r,y(e,a)):new p(r):H(r)?X(g,r):o(I,g,r):new p(v(r))}(),t,g)})),_&&_(g,q),b(x(p),(function(t){t in g||h(g,t,p[t])})),g.prototype=A):(g=r((function(t,r,e,n){f(t,A);var i,s,u,c=0,l=0;if(w(r)){if(!J(r))return H(r)?X(g,r):o(I,g,r);i=r,l=y(e,a);var h=r.byteLength;if(void 0===n){if(h%a)throw F(Q);if(s=h-l,s<0)throw F(Q)}else if(s=d(n)*a,s+l>h)throw F(Q);u=s/a}else u=v(r),s=u*a,i=new Y(s);N(t,{buffer:i,byteOffset:l,byteLength:s,length:u,view:new V(i)});while(c<u)M(t,c++)})),_&&_(g,q),A=g.prototype=R(Z)),A.constructor!==g&&h(A,"constructor",g),h(A,$,g),j&&h(A,j,u),E[u]=g,n({global:!0,forced:g!=p,sham:!W},E),z in g||h(g,z,a),z in A||h(A,z,a),C(u)}):t.exports=function(){}},63832:function(t,r,e){var n=e(17854),i=e(47293),o=e(17072),a=e(90260).NATIVE_ARRAY_BUFFER_VIEWS,s=n.ArrayBuffer,u=n.Int8Array;t.exports=!a||!i((function(){u(1)}))||!i((function(){new u(-1)}))||!o((function(t){new u,new u(null),new u(1.5),new u(t)}),!0)||i((function(){return 1!==new u(new s(2),1,void 0).length}))},43074:function(t,r,e){var n=e(97745),i=e(66304);t.exports=function(t,r){return n(i(t),r)}},97321:function(t,r,e){var n=e(49974),i=e(46916),o=e(39483),a=e(47908),s=e(26244),u=e(18554),c=e(71246),f=e(97659),l=e(90260).aTypedArrayConstructor;t.exports=function(t){var r,e,h,p,d,v,y=o(this),g=a(t),A=arguments.length,E=A>1?arguments[1]:void 0,w=void 0!==E,m=c(g);if(m&&!f(m)){d=u(g,m),v=d.next,g=[];while(!(p=i(v,d)).done)g.push(p.value)}for(w&&A>2&&(E=n(E,arguments[2])),e=s(g),h=new(l(y))(e),r=0;e>r;r++)h[r]=w?E(g[r],r):g[r];return h}},66304:function(t,r,e){var n=e(90260),i=e(36707),o=n.TYPED_ARRAY_CONSTRUCTOR,a=n.aTypedArrayConstructor;t.exports=function(t){return a(i(t,t[o]))}},4723:function(t,r,e){"use strict";var n=e(46916),i=e(27007),o=e(19670),a=e(17466),s=e(41340),u=e(84488),c=e(58173),f=e(31530),l=e(97651);i("match",(function(t,r,e){return[function(r){var e=u(this),i=void 0==r?void 0:c(r,t);return i?n(i,r,e):new RegExp(r)[t](s(e))},function(t){var n=o(this),i=s(t),u=e(r,n,i);if(u.done)return u.value;if(!n.global)return l(n,i);var c=n.unicode;n.lastIndex=0;var h,p=[],d=0;while(null!==(h=l(n,i))){var v=s(h[0]);p[d]=v,""===v&&(n.lastIndex=f(i,a(n.lastIndex),c)),d++}return 0===d?null:p}]}))},23123:function(t,r,e){"use strict";var n=e(22104),i=e(46916),o=e(1702),a=e(27007),s=e(47850),u=e(19670),c=e(84488),f=e(36707),l=e(31530),h=e(17466),p=e(41340),d=e(58173),v=e(41589),y=e(97651),g=e(22261),A=e(52999),E=e(47293),w=A.UNSUPPORTED_Y,m=4294967295,R=Math.min,T=[].push,_=o(/./.exec),x=o(T),I=o("".slice),b=!E((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));a("split",(function(t,r,e){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var o=p(c(this)),a=void 0===e?m:e>>>0;if(0===a)return[];if(void 0===t)return[o];if(!s(t))return i(r,o,t,a);var u,f,l,h=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,A=new RegExp(t.source,d+"g");while(u=i(g,A,o)){if(f=A.lastIndex,f>y&&(x(h,I(o,y,u.index)),u.length>1&&u.index<o.length&&n(T,h,v(u,1)),l=u[0].length,y=f,h.length>=a))break;A.lastIndex===u.index&&A.lastIndex++}return y===o.length?!l&&_(A,"")||x(h,""):x(h,I(o,y)),h.length>a?v(h,0,a):h}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i(r,this,t,e)}:r,[function(r,e){var n=c(this),a=void 0==r?void 0:d(r,t);return a?i(a,r,n,e):i(o,p(n),r,e)},function(t,n){var i=u(this),a=p(t),s=e(o,i,a,n,o!==r);if(s.done)return s.value;var c=f(i,RegExp),d=i.unicode,v=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),g=new c(w?"^(?:"+i.source+")":i,v),A=void 0===n?m:n>>>0;if(0===A)return[];if(0===a.length)return null===y(g,a)?[a]:[];var E=0,T=0,_=[];while(T<a.length){g.lastIndex=w?0:T;var b,C=y(g,w?I(a,T):a);if(null===C||(b=R(h(g.lastIndex+(w?T:0)),a.length))===E)T=l(a,T,d);else{if(x(_,I(a,E,T)),_.length===A)return _;for(var M=1;M<=C.length-1;M++)if(x(_,C[M]),_.length===A)return _;T=E=b}}return x(_,I(a,E)),_}]}),!b,w)},48675:function(t,r,e){"use strict";var n=e(90260),i=e(26244),o=e(19303),a=n.aTypedArray,s=n.exportTypedArrayMethod;s("at",(function(t){var r=a(this),e=i(r),n=o(t),s=n>=0?n:e+n;return s<0||s>=e?void 0:r[s]}))},92990:function(t,r,e){"use strict";var n=e(1702),i=e(90260),o=e(1048),a=n(o),s=i.aTypedArray,u=i.exportTypedArrayMethod;u("copyWithin",(function(t,r){return a(s(this),t,r,arguments.length>2?arguments[2]:void 0)}))},18927:function(t,r,e){"use strict";var n=e(90260),i=e(42092).every,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("every",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},33105:function(t,r,e){"use strict";var n=e(90260),i=e(46916),o=e(21285),a=n.aTypedArray,s=n.exportTypedArrayMethod;s("fill",(function(t){var r=arguments.length;return i(o,a(this),t,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)}))},35035:function(t,r,e){"use strict";var n=e(90260),i=e(42092).filter,o=e(43074),a=n.aTypedArray,s=n.exportTypedArrayMethod;s("filter",(function(t){var r=i(a(this),t,arguments.length>1?arguments[1]:void 0);return o(this,r)}))},7174:function(t,r,e){"use strict";var n=e(90260),i=e(42092).findIndex,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("findIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},74345:function(t,r,e){"use strict";var n=e(90260),i=e(42092).find,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("find",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},32846:function(t,r,e){"use strict";var n=e(90260),i=e(42092).forEach,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("forEach",(function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},44731:function(t,r,e){"use strict";var n=e(90260),i=e(41318).includes,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("includes",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},77209:function(t,r,e){"use strict";var n=e(90260),i=e(41318).indexOf,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("indexOf",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},96319:function(t,r,e){"use strict";var n=e(17854),i=e(47293),o=e(1702),a=e(90260),s=e(66992),u=e(5112),c=u("iterator"),f=n.Uint8Array,l=o(s.values),h=o(s.keys),p=o(s.entries),d=a.aTypedArray,v=a.exportTypedArrayMethod,y=f&&f.prototype,g=!i((function(){y[c].call([1])})),A=!!y&&y.values&&y[c]===y.values&&"values"===y.values.name,E=function(){return l(d(this))};v("entries",(function(){return p(d(this))}),g),v("keys",(function(){return h(d(this))}),g),v("values",E,g||!A,{name:"values"}),v(c,E,g||!A,{name:"values"})},58867:function(t,r,e){"use strict";var n=e(90260),i=e(1702),o=n.aTypedArray,a=n.exportTypedArrayMethod,s=i([].join);a("join",(function(t){return s(o(this),t)}))},37789:function(t,r,e){"use strict";var n=e(90260),i=e(22104),o=e(86583),a=n.aTypedArray,s=n.exportTypedArrayMethod;s("lastIndexOf",(function(t){var r=arguments.length;return i(o,a(this),r>1?[t,arguments[1]]:[t])}))},33739:function(t,r,e){"use strict";var n=e(90260),i=e(42092).map,o=e(66304),a=n.aTypedArray,s=n.exportTypedArrayMethod;s("map",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(o(t))(r)}))}))},14483:function(t,r,e){"use strict";var n=e(90260),i=e(53671).right,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduceRight",(function(t){var r=arguments.length;return i(o(this),t,r,r>1?arguments[1]:void 0)}))},29368:function(t,r,e){"use strict";var n=e(90260),i=e(53671).left,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduce",(function(t){var r=arguments.length;return i(o(this),t,r,r>1?arguments[1]:void 0)}))},12056:function(t,r,e){"use strict";var n=e(90260),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=Math.floor;o("reverse",(function(){var t,r=this,e=i(r).length,n=a(e/2),o=0;while(o<n)t=r[o],r[o++]=r[--e],r[e]=t;return r}))},3462:function(t,r,e){"use strict";var n=e(17854),i=e(46916),o=e(90260),a=e(26244),s=e(84590),u=e(47908),c=e(47293),f=n.RangeError,l=n.Int8Array,h=l&&l.prototype,p=h&&h.set,d=o.aTypedArray,v=o.exportTypedArrayMethod,y=!c((function(){var t=new Uint8ClampedArray(2);return i(p,t,{length:1,0:3},1),3!==t[1]})),g=y&&o.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new l(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));v("set",(function(t){d(this);var r=s(arguments.length>1?arguments[1]:void 0,1),e=u(t);if(y)return i(p,this,e,r);var n=this.length,o=a(e),c=0;if(o+r>n)throw f("Wrong length");while(c<o)this[r+c]=e[c++]}),!y||g)},30678:function(t,r,e){"use strict";var n=e(90260),i=e(66304),o=e(47293),a=e(50206),s=n.aTypedArray,u=n.exportTypedArrayMethod,c=o((function(){new Int8Array(1).slice()}));u("slice",(function(t,r){var e=a(s(this),t,r),n=i(this),o=0,u=e.length,c=new n(u);while(u>o)c[o]=e[o++];return c}),c)},27462:function(t,r,e){"use strict";var n=e(90260),i=e(42092).some,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("some",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},33824:function(t,r,e){"use strict";var n=e(17854),i=e(1702),o=e(47293),a=e(19662),s=e(94362),u=e(90260),c=e(68886),f=e(30256),l=e(7392),h=e(98008),p=u.aTypedArray,d=u.exportTypedArrayMethod,v=n.Uint16Array,y=v&&i(v.prototype.sort),g=!!y&&!(o((function(){y(new v(2),null)}))&&o((function(){y(new v(2),{})}))),A=!!y&&!o((function(){if(l)return l<74;if(c)return c<67;if(f)return!0;if(h)return h<602;var t,r,e=new v(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(y(e,(function(t,r){return(t/4|0)-(r/4|0)})),t=0;t<516;t++)if(e[t]!==n[t])return!0})),E=function(t){return function(r,e){return void 0!==t?+t(r,e)||0:e!==e?-1:r!==r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e}};d("sort",(function(t){return void 0!==t&&a(t),A?y(this,t):s(p(this),E(t))}),!A||g)},55021:function(t,r,e){"use strict";var n=e(90260),i=e(17466),o=e(51400),a=e(66304),s=n.aTypedArray,u=n.exportTypedArrayMethod;u("subarray",(function(t,r){var e=s(this),n=e.length,u=o(t,n),c=a(e);return new c(e.buffer,e.byteOffset+u*e.BYTES_PER_ELEMENT,i((void 0===r?n:o(r,n))-u))}))},12974:function(t,r,e){"use strict";var n=e(17854),i=e(22104),o=e(90260),a=e(47293),s=e(50206),u=n.Int8Array,c=o.aTypedArray,f=o.exportTypedArrayMethod,l=[].toLocaleString,h=!!u&&a((function(){l.call(new u(1))})),p=a((function(){return[1,2].toLocaleString()!=new u([1,2]).toLocaleString()}))||!a((function(){u.prototype.toLocaleString.call([1,2])}));f("toLocaleString",(function(){return i(l,h?s(c(this)):c(this),s(arguments))}),p)},15016:function(t,r,e){"use strict";var n=e(90260).exportTypedArrayMethod,i=e(47293),o=e(17854),a=e(1702),s=o.Uint8Array,u=s&&s.prototype||{},c=[].toString,f=a([].join);i((function(){c.call({})}))&&(c=function(){return f(this)});var l=u.toString!=c;n("toString",c,l)},82472:function(t,r,e){var n=e(19843);n("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},75505:function(t,r,e){var n=e(82109),i=e(35005),o=e(1702),a=e(47293),s=e(41340),u=e(92597),c=e(48053),f=e(14170).ctoi,l=/[^\d+/a-z]/i,h=/[\t\n\f\r ]+/g,p=/[=]+$/,d=i("atob"),v=String.fromCharCode,y=o("".charAt),g=o("".replace),A=o(l.exec),E=a((function(){return""!==d(" ")})),w=!a((function(){d("a")})),m=!E&&!w&&!a((function(){d()})),R=!E&&!w&&1!==d.length;n({global:!0,enumerable:!0,forced:E||w||m||R},{atob:function(t){if(c(arguments.length,1),m||R)return d(t);var r,e,n=g(s(t),h,""),o="",a=0,E=0;if(n.length%4==0&&(n=g(n,p,"")),n.length%4==1||A(l,n))throw new(i("DOMException"))("The string is not correctly encoded","InvalidCharacterError");while(r=y(n,a++))u(f,r)&&(e=E%4?64*e+f[r]:f[r],E++%4&&(o+=v(255&e>>(-2*E&6))));return o}})},87714:function(t,r,e){"use strict";var n=e(82109),i=e(44038),o=e(35005),a=e(47293),s=e(70030),u=e(79114),c=e(3070).f,f=e(36048).f,l=e(31320),h=e(92597),p=e(25787),d=e(19670),v=e(7762),y=e(56277),g=e(93678),A=e(77741),E=e(29909),w=e(19781),m=e(31913),R="DOMException",T="DATA_CLONE_ERR",_=o("Error"),x=o(R)||function(){try{var t=o("MessageChannel")||i("worker_threads").MessageChannel;(new t).port1.postMessage(new WeakMap)}catch(r){if(r.name==T&&25==r.code)return r.constructor}}(),I=x&&x.prototype,b=_.prototype,C=E.set,M=E.getterFor(R),O="stack"in _(R),S=function(t){return h(g,t)&&g[t].m?g[t].c:0},U=function(){p(this,D);var t=arguments.length,r=y(t<1?void 0:arguments[0]),e=y(t<2?void 0:arguments[1],"Error"),n=S(e);if(C(this,{type:R,name:e,message:r,code:n}),w||(this.name=e,this.message=r,this.code=n),O){var i=_(r);i.name=R,c(this,"stack",u(1,A(i.stack,1)))}},D=U.prototype=s(b),N=function(t){return{enumerable:!0,configurable:!0,get:t}},k=function(t){return N((function(){return M(this)[t]}))};w&&f(D,{name:k("name"),message:k("message"),code:k("code")}),c(D,"constructor",u(1,U));var L=a((function(){return!(new x instanceof _)})),P=L||a((function(){return b.toString!==v||"2: 1"!==String(new x(1,2))})),F=L||a((function(){return 25!==new x(1,"DataCloneError").code})),Y=L||25!==x[T]||25!==I[T],B=m?P||F||Y:L;n({global:!0,forced:B},{DOMException:B?U:x});var V=o(R),W=V.prototype;for(var $ in P&&(m||x===V)&&l(W,"toString",v),F&&w&&x===V&&c(W,"code",N((function(){return S(d(this).name)}))),g)if(h(g,$)){var j=g[$],q=j.s,Z=u(6,j.c);h(V,q)||c(V,q,Z),h(W,q)||c(W,q,Z)}},82801:function(t,r,e){"use strict";var n=e(82109),i=e(35005),o=e(79114),a=e(3070).f,s=e(92597),u=e(25787),c=e(79587),f=e(56277),l=e(93678),h=e(77741),p=e(31913),d="DOMException",v=i("Error"),y=i(d),g=function(){u(this,A);var t=arguments.length,r=f(t<1?void 0:arguments[0]),e=f(t<2?void 0:arguments[1],"Error"),n=new y(r,e),i=v(r);return i.name=d,a(n,"stack",o(1,h(i.stack,1))),c(n,this,g),n},A=g.prototype=y.prototype,E="stack"in v(d),w="stack"in new y(1,2),m=E&&!w;n({global:!0,forced:p||m},{DOMException:m?g:y});var R=i(d),T=R.prototype;if(T.constructor!==R)for(var _ in p||a(T,"constructor",o(1,R)),l)if(s(l,_)){var x=l[_],I=x.s;s(R,I)||a(R,I,o(6,x.c))}},1174:function(t,r,e){var n=e(35005),i=e(58003),o="DOMException";i(n(o),o)}}]);
//# sourceMappingURL=2420-legacy.24fed032.js.map