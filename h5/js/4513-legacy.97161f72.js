(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4513,5873],{14513:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-talker-container",on:{click:t.goMemberIntroduction}},[s("Card",{staticClass:"card-style flex-start",attrs:{radius:16}},[s("div",[s("Avatar",{attrs:{imgUrl:t.avatarUrl,width:160,height:215}})],1),s("div",{staticClass:"info-box"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-start"},[s("p",{staticClass:"username-style"},[t._v(t._s(t.userName))]),""!==t.tagName?s("IdentityTag",{attrs:{title:t.tagName}}):t._e()],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}]},[s("van-popover",{attrs:{trigger:"click",placement:"bottom-end"},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[s("van-image",{staticClass:"popover-btn-style",attrs:{src:r(42038)}})]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[s("ul",{staticClass:"popover-content-list"},[s("li",{staticClass:"popover-content-item flex",on:{click:t.onEditor}},[s("van-image",{staticClass:"popover-icon-style",attrs:{src:r(30500)}}),s("p",[t._v("编辑")])],1),s("li",{staticClass:"popover-content-item flex",on:{click:t.onDelete}},[s("van-image",{staticClass:"popover-icon-style",attrs:{src:r(97884)}}),s("p",[t._v("删除")])],1)])])],1)]),s("div",{staticClass:"flex"},[s("div",{staticClass:"tag-style"},[s("p",{staticClass:"tag-value"},[t._v(t._s(t.patrolDistricts))]),s("p",{staticClass:"tag-label"},[t._v("巡讲区县")])]),s("div",{staticClass:"tag-style"},[s("p",{staticClass:"tag-value"},[t._v(t._s(t.activitySession))]),s("p",{staticClass:"tag-label"},[t._v("活动场次")])]),s("div",{staticClass:"tag-style"},[s("p",{staticClass:"tag-value"},[t._v(t._s(t.participation))]),s("p",{staticClass:"tag-label"},[t._v("参与人数")])])])])])],1)},a=[],i=r(48534),n=(r(35666),r(41539),r(78783),r(33948),r(9653),{name:"MainTalker",components:{Card:function(){return r.e(166).then(r.bind(r,80248))},Avatar:function(){return r.e(4179).then(r.bind(r,4179))},IdentityTag:function(){return r.e(9226).then(r.bind(r,59226))}},props:{id:{type:Number,required:!0},avatarUrl:{type:String,required:!0},userName:{type:String,required:!0},patrolDistricts:{type:[Number,String],required:!0},activitySession:{type:[Number,String],required:!0},participation:{type:[Number,String],required:!0},showMore:{type:Boolean,default:!1},tagName:{type:String,default:""}},data:function(){return{showPopover:!1}},methods:{onSelect:function(t){Toast(t.text)},onEditor:function(){this.showPopover=!1,this.$emit("update")},onDelete:function(){this.showPopover=!1,this.$emit("delete")},goMemberIntroduction:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={iid:t.id},e.next=3,t.$request("instructor.memberIntroduction",r);case 3:s=e.sent,s&&s.iid&&t.$router.push({path:"/memberIntroduction",query:{id:t.id}});case 5:case"end":return e.stop()}}),e)})))()}}}),o=n,c=r(43736),u=(0,c.Z)(o,s,a,!1,null,"c4e93af6",null),l=u.exports},53111:function(t,e,r){var s=r(1702),a=r(84488),i=r(41340),n=r(81361),o=s("".replace),c="["+n+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),A=function(t){return function(e){var r=i(a(e));return 1&t&&(r=o(r,u,"")),2&t&&(r=o(r,l,"")),r}};t.exports={start:A(1),end:A(2),trim:A(3)}},50863:function(t,e,r){var s=r(1702);t.exports=s(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,r){"use strict";var s=r(19781),a=r(17854),i=r(1702),n=r(54705),o=r(31320),c=r(92597),u=r(79587),l=r(47976),A=r(52190),p=r(57593),v=r(47293),f=r(8006).f,g=r(31236).f,m=r(3070).f,h=r(50863),d=r(53111).trim,C="Number",E=a[C],N=E.prototype,S=a.TypeError,b=i("".slice),I=i("".charCodeAt),w=function(t){var e=p(t,"number");return"bigint"==typeof e?e:y(e)},y=function(t){var e,r,s,a,i,n,o,c,u=p(t,"number");if(A(u))throw S("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=d(u),e=I(u,0),43===e||45===e){if(r=I(u,2),88===r||120===r)return NaN}else if(48===e){switch(I(u,1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+u}for(i=b(u,2),n=i.length,o=0;o<n;o++)if(c=I(i,o),c<48||c>a)return NaN;return parseInt(i,s)}return+u};if(n(C,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var R,x=function(t){var e=arguments.length<1?0:E(w(t)),r=this;return l(N,r)&&v((function(){h(r)}))?u(Object(e),r,x):e},q=s?f(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),K=0;q.length>K;K++)c(E,R=q[K])&&!c(x,R)&&m(x,R,g(E,R));x.prototype=N,N.constructor=x,o(a,C,x)}},97884:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgZJREFUSEvtVDGIE0EU/W92AxYWaQQLCw8sDjS32dlcIVyhcAeCrYWNnZ0RFJuz8sTmGvHAiI2djYXtoaBgQAvBy98hsRAsvMJCUNDCQkh2n8yRiFmSvbtcYeNvdpj/39s3f/48SHmEcRzfMMY0ReTYsPRznuetNE3vishgGhxlvNbaewCuTaohuaGq1/dNXK/Xq0EQfBWRUESektz0JADOi8gFrzbLsiPOuR+TyKcqjqJoKQzD1x6UZdmcc27br621JwB89GuSp1X17UTiKIpOhmHYKCbzPJ83xqwOCTZEZKSsOmpPnufrxpgPRexgMNiCtfY7gGoxSdIfu/RqS2q+IUmShyTPATgqIodE5BfJLyRDAIfLmEn+BDAoYgE8/yMpSZJXInJGRNqdTufsLmM4lp6E/XfEfuyKI1Xc27dia+1jABezLFtxzrX9+eM4XjbGPCP5RFUv+b1ZiD8BOE5yTVVvD+f4FoA1ktuqOvef+MCteAegQbKpqg+GPb4CoEVyS1UXZ+rxwsLCqSAIltI0ffSX93qPvpxl2Ztut/t+JuK9vr7ScbPWvgCwfJAnTfKlqq7s+PZIlbX2PoCmNxYRWQXgv7sGSW9U696wSLZU9eoYca1Wm69UKv6ySh1t2p+8oH6/v9jr9Xb8ecxw4zhuALgDwLuct9C9hLfZdp7nN51zbgT4DX9we5LNpS98AAAAAElFTkSuQmCC"},30500:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARZJREFUOE+t1DFKA0EUBuAvYGHhETyCpaWNYGNnoYWdrRhRK/UEWghGUBAsLBRsApYKtt7Aq6QzoDzJyBgmuxs3U+7CN//+82Y72q0zdHGCm6A6LbzAAkrrEFdtwE/MjQXqtgH3cD0GDqYFj7GIIwxxgF6Gnk8DXiJ6itXH9giNpIFe4LQpmGMpUI7+hqwDo/Q77EyYhuhwP39XBQb2hM2K0foZlSZgEyx6i8P5s0oJ/42Vbso8Hmo+s5gsxcwTLuAFKxWd3WK36romsAlWHJNShzPDUodvWKv4jEbJ8g6/ZoWlhJPAd6yO7mvUco/lmv9nPw6lBAa2jgFilKKWqtNP+wwD/MBStvMrtkZYPN7Ac02y9PrxG/qcOSNoRPqmAAAAAElFTkSuQmCC"},42038:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA1JJREFUWEfNmc9rE1EQxz+TxLRpUtsqjYqK3hQEDx48Fw/+B55EEPFStajQFiuC9aKihSoFvYgIHgUvelBB8D/w5sGbBym20h8mbdo0uyMvbZLtZtN9SZqmD3LI7ndmvjP7ZnberNDouqBROukkRZwIERJEESJFdYpLDgcXlyx5VljhnTiNmJK6hMY1wjJJXBJEiNUl61IgQo4ulhgX11bWkqAKo6RQkuUo2Vrw40x0hSWekAXRMDXhBG9rghg9TRMLIlpgkUnJbUVya4JDupcEqTAvm7qfI8uU/KulozbBQe2jm0RTxm2Fzd58LPNB8GCCt7SXOF22+rcFl2eZZ7Lg11VN8JqmSLF3W4zWq8RlkQlZ8optJnhZO+mljzjhyVOvcRt8HmWBed7ISgnuIaLCXdIUiNroahkmhsNDZkolqEJwXFMst+nR+r3N8o8XkjWXNwhqhBHS217rGg2zKeZP+WOiuE6wnYlRy4mNKK4THNJ+Euxp1OGWyOVYY0pmBdOVHCbdtsyt5Z3J6N/MCJc0ySF6WhKFZpVOsyi0461hSzzPsnBd95Okw1ZmR3FLrApj2o8TkiDKaYQJhCMob4FHAURPIEwCx1HeA/eqMHZ6KmI51oQRPRha/4SvwEmPwYso33wEPiCcKV9TrgCffZgvCKdC9FRuK64twZ9A0mP8DhQj6V3fEdLlCy73EV5tQgg/wJOQSpAeH8FhTVucLx4gXC1KKjMI51A292/mUAA3NzBzOJwnyrTPiTGEG2XMup7ZmvvapWCfJMIAylGEj1XkShYqmE81DdtgSvqKSbKTnXO9JaBYZoY1SWQ3F+oBjXHWs7nr9bJV+PKrzhiwqYWtIlJLb7lZMIBR7QbMb/esv2R4LZlSwyqMcCC0YO8U/aqG1RjeTU1rdctfrMDCTdJ0tPnQtIrD86BDk+E4pIbevrY1ryZzHeaYktVK7ffvq3Y+6tCDe4lsO5pY69HH+ptcGKR3x4ZHGXK8ZCFoXrj1iMM87jjdLduTZs/lyZQO6UFVLHwGYxKngx6Llqy+KmlGwqssehOiMYIlKRPNJKmmi7kpwkrGP8Wq5V14BL2Su3eIHuCfOfAfo5MoMfJEi1Mx88+sFRzMlCqOg0OBX41/hvgPS28fzirfnBQAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=4513-legacy.97161f72.js.map