(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1297],{21297:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-talker-container"},[r("Card",{staticClass:"card-style flex-start",attrs:{radius:16}},[r("div",[r("Avatar",{attrs:{imgUrl:t.avatarUrl,width:160,height:215}})],1),r("div",{staticClass:"info-box"},[r("div",{staticClass:"flex"},[r("p",{staticClass:"username-style"},[t._v(t._s(t.userName))]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}]},[r("van-popover",{attrs:{trigger:"click",placement:"bottom-end"},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[r("van-image",{staticClass:"popover-btn-style",attrs:{src:s(42038)}})]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[r("ul",{staticClass:"popover-content-list"},[r("li",{staticClass:"popover-content-item flex",on:{click:t.onEditor}},[r("van-image",{staticClass:"popover-icon-style",attrs:{src:s(30500)}}),r("p",[t._v("编辑")])],1),r("li",{staticClass:"popover-content-item flex",on:{click:t.onDelete}},[r("van-image",{staticClass:"popover-icon-style",attrs:{src:s(97884)}}),r("p",[t._v("删除")])],1)])])],1)]),r("div",{staticClass:"flex"},[r("div",{staticClass:"tag-style"},[r("p",{staticClass:"tag-value"},[t._v(t._s(t.patrolDistricts))]),r("p",{staticClass:"tag-label"},[t._v("巡讲区县")])]),r("div",{staticClass:"tag-style"},[r("p",{staticClass:"tag-value"},[t._v(t._s(t.activitySession))]),r("p",{staticClass:"tag-label"},[t._v("活动场次")])]),r("div",{staticClass:"tag-style"},[r("p",{staticClass:"tag-value"},[t._v(t._s(t.participation))]),r("p",{staticClass:"tag-label"},[t._v("参与人数")])])])])])],1)},a=[],o=(s(41539),s(78783),s(33948),s(9653),{components:{Card:function(){return s.e(4821).then(s.bind(s,53314))},Avatar:function(){return s.e(4066).then(s.bind(s,799))}},props:{avatarUrl:{type:String,required:!0},userName:{type:String,required:!0},patrolDistricts:{type:Number,required:!0},activitySession:{type:Number,required:!0},participation:{type:Number,required:!0},showMore:{type:Boolean,default:!1}},data:function(){return{showPopover:!1}},methods:{onSelect:function(t){Toast(t.text)},onEditor:function(){this.showPopover=!1,this.$emit("update")},onDelete:function(){this.showPopover=!1,this.$emit("delete")}}}),i=o,n=s(1001),A=(0,n.Z)(i,r,a,!1,null,"5bb7154b",null),l=A.exports},53111:function(t,e,s){var r=s(1702),a=s(84488),o=s(41340),i=s(81361),n=r("".replace),A="["+i+"]",l=RegExp("^"+A+A+"*"),c=RegExp(A+A+"*$"),u=function(t){return function(e){var s=o(a(e));return 1&t&&(s=n(s,l,"")),2&t&&(s=n(s,c,"")),s}};t.exports={start:u(1),end:u(2),trim:u(3)}},50863:function(t,e,s){var r=s(1702);t.exports=r(1..valueOf)},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,s){"use strict";var r=s(19781),a=s(17854),o=s(1702),i=s(54705),n=s(31320),A=s(92597),l=s(79587),c=s(47976),u=s(52190),p=s(57593),v=s(47293),f=s(8006).f,h=s(31236).f,g=s(3070).f,m=s(50863),C=s(53111).trim,E="Number",d=a[E],N=d.prototype,S=a.TypeError,b=o("".slice),w=o("".charCodeAt),I=function(t){var e=p(t,"number");return"bigint"==typeof e?e:y(e)},y=function(t){var e,s,r,a,o,i,n,A,l=p(t,"number");if(u(l))throw S("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=C(l),e=w(l,0),43===e||45===e){if(s=w(l,2),88===s||120===s)return NaN}else if(48===e){switch(w(l,1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(o=b(l,2),i=o.length,n=0;n<i;n++)if(A=w(o,n),A<48||A>a)return NaN;return parseInt(o,r)}return+l};if(i(E,!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var R,x=function(t){var e=arguments.length<1?0:d(I(t)),s=this;return c(N,s)&&v((function(){m(s)}))?l(Object(e),s,x):e},q=r?f(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),K=0;q.length>K;K++)A(d,R=q[K])&&!A(x,R)&&g(x,R,h(d,R));x.prototype=N,N.constructor=x,n(a,E,x)}},97884:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgZJREFUSEvtVDGIE0EU/W92AxYWaQQLCw8sDjS32dlcIVyhcAeCrYWNnZ0RFJuz8sTmGvHAiI2djYXtoaBgQAvBy98hsRAsvMJCUNDCQkh2n8yRiFmSvbtcYeNvdpj/39s3f/48SHmEcRzfMMY0ReTYsPRznuetNE3vishgGhxlvNbaewCuTaohuaGq1/dNXK/Xq0EQfBWRUESektz0JADOi8gFrzbLsiPOuR+TyKcqjqJoKQzD1x6UZdmcc27br621JwB89GuSp1X17UTiKIpOhmHYKCbzPJ83xqwOCTZEZKSsOmpPnufrxpgPRexgMNiCtfY7gGoxSdIfu/RqS2q+IUmShyTPATgqIodE5BfJLyRDAIfLmEn+BDAoYgE8/yMpSZJXInJGRNqdTufsLmM4lp6E/XfEfuyKI1Xc27dia+1jABezLFtxzrX9+eM4XjbGPCP5RFUv+b1ZiD8BOE5yTVVvD+f4FoA1ktuqOvef+MCteAegQbKpqg+GPb4CoEVyS1UXZ+rxwsLCqSAIltI0ffSX93qPvpxl2Ztut/t+JuK9vr7ScbPWvgCwfJAnTfKlqq7s+PZIlbX2PoCmNxYRWQXgv7sGSW9U696wSLZU9eoYca1Wm69UKv6ySh1t2p+8oH6/v9jr9Xb8ecxw4zhuALgDwLuct9C9hLfZdp7nN51zbgT4DX9we5LNpS98AAAAAElFTkSuQmCC"},30500:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARZJREFUOE+t1DFKA0EUBuAvYGHhETyCpaWNYGNnoYWdrRhRK/UEWghGUBAsLBRsApYKtt7Aq6QzoDzJyBgmuxs3U+7CN//+82Y72q0zdHGCm6A6LbzAAkrrEFdtwE/MjQXqtgH3cD0GDqYFj7GIIwxxgF6Gnk8DXiJ6itXH9giNpIFe4LQpmGMpUI7+hqwDo/Q77EyYhuhwP39XBQb2hM2K0foZlSZgEyx6i8P5s0oJ/42Vbso8Hmo+s5gsxcwTLuAFKxWd3WK36romsAlWHJNShzPDUodvWKv4jEbJ8g6/ZoWlhJPAd6yO7mvUco/lmv9nPw6lBAa2jgFilKKWqtNP+wwD/MBStvMrtkZYPN7Ac02y9PrxG/qcOSNoRPqmAAAAAElFTkSuQmCC"},42038:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA1JJREFUWEfNmc9rE1EQxz+TxLRpUtsqjYqK3hQEDx48Fw/+B55EEPFStajQFiuC9aKihSoFvYgIHgUvelBB8D/w5sGbBym20h8mbdo0uyMvbZLtZtN9SZqmD3LI7ndmvjP7ZnberNDouqBROukkRZwIERJEESJFdYpLDgcXlyx5VljhnTiNmJK6hMY1wjJJXBJEiNUl61IgQo4ulhgX11bWkqAKo6RQkuUo2Vrw40x0hSWekAXRMDXhBG9rghg9TRMLIlpgkUnJbUVya4JDupcEqTAvm7qfI8uU/KulozbBQe2jm0RTxm2Fzd58LPNB8GCCt7SXOF22+rcFl2eZZ7Lg11VN8JqmSLF3W4zWq8RlkQlZ8optJnhZO+mljzjhyVOvcRt8HmWBed7ISgnuIaLCXdIUiNroahkmhsNDZkolqEJwXFMst+nR+r3N8o8XkjWXNwhqhBHS217rGg2zKeZP+WOiuE6wnYlRy4mNKK4THNJ+Euxp1OGWyOVYY0pmBdOVHCbdtsyt5Z3J6N/MCJc0ySF6WhKFZpVOsyi0461hSzzPsnBd95Okw1ZmR3FLrApj2o8TkiDKaYQJhCMob4FHAURPIEwCx1HeA/eqMHZ6KmI51oQRPRha/4SvwEmPwYso33wEPiCcKV9TrgCffZgvCKdC9FRuK64twZ9A0mP8DhQj6V3fEdLlCy73EV5tQgg/wJOQSpAeH8FhTVucLx4gXC1KKjMI51A292/mUAA3NzBzOJwnyrTPiTGEG2XMup7ZmvvapWCfJMIAylGEj1XkShYqmE81DdtgSvqKSbKTnXO9JaBYZoY1SWQ3F+oBjXHWs7nr9bJV+PKrzhiwqYWtIlJLb7lZMIBR7QbMb/esv2R4LZlSwyqMcCC0YO8U/aqG1RjeTU1rdctfrMDCTdJ0tPnQtIrD86BDk+E4pIbevrY1ryZzHeaYktVK7ffvq3Y+6tCDe4lsO5pY69HH+ptcGKR3x4ZHGXK8ZCFoXrj1iMM87jjdLduTZs/lyZQO6UFVLHwGYxKngx6Llqy+KmlGwqssehOiMYIlKRPNJKmmi7kpwkrGP8Wq5V14BL2Su3eIHuCfOfAfo5MoMfJEi1Mx88+sFRzMlCqOg0OBX41/hvgPS28fzirfnBQAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=1297-legacy.65c6daf6.js.map