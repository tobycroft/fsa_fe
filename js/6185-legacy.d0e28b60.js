"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6185],{16185:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var A=function(){var t=this,a=t.$createElement,A=t._self._c||a;return A("div",{staticClass:"top-list-container"},[A("Card",{staticClass:"content-box",attrs:{radius:16}},[A("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"header flex"},[A("p",{staticClass:"title"},[t._v(t._s(t.title))]),A("CheckDetailsBtn",{on:{click:t.onCheckDetail}})],1),A("ul",{staticClass:"list-style"},t._l(t.list,(function(a,e){var i;return A("li",{key:e,staticClass:"list-item-style flex",class:(i={},i["zebra-row-style"]=e%2===0,i)},[A("div",{staticClass:"flex-start"},[t.showSort?A("div",[e+1===1?A("van-image",{staticClass:"sort-value-style",attrs:{src:s(12257)}}):e+1===2?A("van-image",{staticClass:"sort-value-style",attrs:{src:s(27389)}}):e+1===3?A("van-image",{staticClass:"sort-value-style",attrs:{src:s(16026)}}):A("p",{staticClass:"sort-value-style sort-value-text-style"},[t._v(" "+t._s(e+1)+" ")])],1):t._e(),A("p",[t._v(t._s(a.label))])]),A("div",{staticClass:"value-style flex-start"},[A("p",[t._v(t._s(a.value))])])])})),0)])],1)},e=[],i=(s(41539),s(78783),s(33948),{name:"TopList",components:{Card:function(){return s.e(3314).then(s.bind(s,53314))},CheckDetailsBtn:function(){return s.e(3463).then(s.bind(s,83463))}},props:{title:{type:String,default:"标题"},list:{type:[Array,Object],required:!0},showSort:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},created:function(){console.log("this.list :>> ",this.list)},methods:{onCheckDetail:function(){this.$emit("click")}}}),C=i,f=s(1001),n=(0,f.Z)(C,A,e,!1,null,"788dd277",null),h=n.exports},12257:function(t){t.exports="data:image/png;base64,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"},16026:function(t){t.exports="data:image/png;base64,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"},27389:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=6185-legacy.d0e28b60.js.map