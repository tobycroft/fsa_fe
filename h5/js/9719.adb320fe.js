"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9719],{29719:function(t,e,s){s.r(e),s.d(e,{default:function(){return n}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-talker-container"},[a("Card",{staticClass:"card-style flex-start",attrs:{radius:16}},[a("div",[a("Avatar",{attrs:{imgUrl:t.avatarUrl,width:160,height:215}})],1),a("div",{staticClass:"info-box"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-start"},[a("p",{staticClass:"username-style"},[t._v(t._s(t.userName))]),""!==t.tagName?a("IdentityTag",{attrs:{title:t.tagName}}):t._e()],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}]},[a("van-popover",{attrs:{trigger:"click",placement:"bottom-end"},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[a("van-image",{staticClass:"popover-btn-style",attrs:{src:s(42038)}})]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[a("ul",{staticClass:"popover-content-list"},[a("li",{staticClass:"popover-content-item flex",on:{click:t.onEditor}},[a("van-image",{staticClass:"popover-icon-style",attrs:{src:s(30500)}}),a("p",[t._v("编辑")])],1),a("li",{staticClass:"popover-content-item flex",on:{click:t.onDelete}},[a("van-image",{staticClass:"popover-icon-style",attrs:{src:s(97884)}}),a("p",[t._v("删除")])],1)])])],1)]),a("div",{staticClass:"flex"},[a("div",{staticClass:"tag-style"},[a("p",{staticClass:"tag-value"},[t._v(t._s(t.patrolDistricts))]),a("p",{staticClass:"tag-label"},[t._v("巡讲区县")])]),a("div",{staticClass:"tag-style"},[a("p",{staticClass:"tag-value"},[t._v(t._s(t.activitySession))]),a("p",{staticClass:"tag-label"},[t._v("活动场次")])]),a("div",{staticClass:"tag-style"},[a("p",{staticClass:"tag-value"},[t._v(t._s(t.participation))]),a("p",{staticClass:"tag-label"},[t._v("参与人数")])])])])])],1)},i=[],r={name:"MainTalker",components:{Card:()=>s.e(248).then(s.bind(s,80248)),Avatar:()=>s.e(4179).then(s.bind(s,4179)),IdentityTag:()=>s.e(9226).then(s.bind(s,59226))},props:{id:{type:Number,required:!0},avatarUrl:{type:String,required:!0},userName:{type:String,required:!0},patrolDistricts:{type:[Number,String],required:!0},activitySession:{type:[Number,String],required:!0},participation:{type:[Number,String],required:!0},showMore:{type:Boolean,default:!1},tagName:{type:String,default:""}},data(){return{showPopover:!1}},methods:{onSelect(t){Toast(t.text)},onEditor(){this.showPopover=!1,this.$emit("update")},onDelete(){this.showPopover=!1,this.$emit("delete")},async goMemberIntroduction(){const t={iid:this.id},e=await this.$request("instructor.memberIntroduction",t);e&&e.iid&&this.$router.push({path:"/memberIntroduction",query:{id:this.id}})}}},o=r,A=s(43736),l=(0,A.Z)(o,a,i,!1,null,"cda90bd0",null),n=l.exports},97884:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgZJREFUSEvtVDGIE0EU/W92AxYWaQQLCw8sDjS32dlcIVyhcAeCrYWNnZ0RFJuz8sTmGvHAiI2djYXtoaBgQAvBy98hsRAsvMJCUNDCQkh2n8yRiFmSvbtcYeNvdpj/39s3f/48SHmEcRzfMMY0ReTYsPRznuetNE3vishgGhxlvNbaewCuTaohuaGq1/dNXK/Xq0EQfBWRUESektz0JADOi8gFrzbLsiPOuR+TyKcqjqJoKQzD1x6UZdmcc27br621JwB89GuSp1X17UTiKIpOhmHYKCbzPJ83xqwOCTZEZKSsOmpPnufrxpgPRexgMNiCtfY7gGoxSdIfu/RqS2q+IUmShyTPATgqIodE5BfJLyRDAIfLmEn+BDAoYgE8/yMpSZJXInJGRNqdTufsLmM4lp6E/XfEfuyKI1Xc27dia+1jABezLFtxzrX9+eM4XjbGPCP5RFUv+b1ZiD8BOE5yTVVvD+f4FoA1ktuqOvef+MCteAegQbKpqg+GPb4CoEVyS1UXZ+rxwsLCqSAIltI0ffSX93qPvpxl2Ztut/t+JuK9vr7ScbPWvgCwfJAnTfKlqq7s+PZIlbX2PoCmNxYRWQXgv7sGSW9U696wSLZU9eoYca1Wm69UKv6ySh1t2p+8oH6/v9jr9Xb8ecxw4zhuALgDwLuct9C9hLfZdp7nN51zbgT4DX9we5LNpS98AAAAAElFTkSuQmCC"},30500:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARZJREFUOE+t1DFKA0EUBuAvYGHhETyCpaWNYGNnoYWdrRhRK/UEWghGUBAsLBRsApYKtt7Aq6QzoDzJyBgmuxs3U+7CN//+82Y72q0zdHGCm6A6LbzAAkrrEFdtwE/MjQXqtgH3cD0GDqYFj7GIIwxxgF6Gnk8DXiJ6itXH9giNpIFe4LQpmGMpUI7+hqwDo/Q77EyYhuhwP39XBQb2hM2K0foZlSZgEyx6i8P5s0oJ/42Vbso8Hmo+s5gsxcwTLuAFKxWd3WK36romsAlWHJNShzPDUodvWKv4jEbJ8g6/ZoWlhJPAd6yO7mvUco/lmv9nPw6lBAa2jgFilKKWqtNP+wwD/MBStvMrtkZYPN7Ac02y9PrxG/qcOSNoRPqmAAAAAElFTkSuQmCC"},42038:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA1JJREFUWEfNmc9rE1EQxz+TxLRpUtsqjYqK3hQEDx48Fw/+B55EEPFStajQFiuC9aKihSoFvYgIHgUvelBB8D/w5sGbBym20h8mbdo0uyMvbZLtZtN9SZqmD3LI7ndmvjP7ZnberNDouqBROukkRZwIERJEESJFdYpLDgcXlyx5VljhnTiNmJK6hMY1wjJJXBJEiNUl61IgQo4ulhgX11bWkqAKo6RQkuUo2Vrw40x0hSWekAXRMDXhBG9rghg9TRMLIlpgkUnJbUVya4JDupcEqTAvm7qfI8uU/KulozbBQe2jm0RTxm2Fzd58LPNB8GCCt7SXOF22+rcFl2eZZ7Lg11VN8JqmSLF3W4zWq8RlkQlZ8optJnhZO+mljzjhyVOvcRt8HmWBed7ISgnuIaLCXdIUiNroahkmhsNDZkolqEJwXFMst+nR+r3N8o8XkjWXNwhqhBHS217rGg2zKeZP+WOiuE6wnYlRy4mNKK4THNJ+Euxp1OGWyOVYY0pmBdOVHCbdtsyt5Z3J6N/MCJc0ySF6WhKFZpVOsyi0461hSzzPsnBd95Okw1ZmR3FLrApj2o8TkiDKaYQJhCMob4FHAURPIEwCx1HeA/eqMHZ6KmI51oQRPRha/4SvwEmPwYso33wEPiCcKV9TrgCffZgvCKdC9FRuK64twZ9A0mP8DhQj6V3fEdLlCy73EV5tQgg/wJOQSpAeH8FhTVucLx4gXC1KKjMI51A292/mUAA3NzBzOJwnyrTPiTGEG2XMup7ZmvvapWCfJMIAylGEj1XkShYqmE81DdtgSvqKSbKTnXO9JaBYZoY1SWQ3F+oBjXHWs7nr9bJV+PKrzhiwqYWtIlJLb7lZMIBR7QbMb/esv2R4LZlSwyqMcCC0YO8U/aqG1RjeTU1rdctfrMDCTdJ0tPnQtIrD86BDk+E4pIbevrY1ryZzHeaYktVK7ffvq3Y+6tCDe4lsO5pY69HH+ptcGKR3x4ZHGXK8ZCFoXrj1iMM87jjdLduTZs/lyZQO6UFVLHwGYxKngx6Llqy+KmlGwqssehOiMYIlKRPNJKmmi7kpwkrGP8Wq5V14BL2Su3eIHuCfOfAfo5MoMfJEi1Mx88+sFRzMlCqOg0OBX41/hvgPS28fzirfnBQAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=9719.adb320fe.js.map