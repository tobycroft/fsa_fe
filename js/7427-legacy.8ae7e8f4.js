"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[7427],{77427:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multi-selector-container"},[n("van-popup",{attrs:{position:"bottom",round:"","safe-area-inset-bottom":"","close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("Card",{staticClass:"card-style"},[n("div",{staticClass:"popup-header-style flex"},[n("p",{staticClass:"cancel-btn-style",on:{click:t.fnCancel}},[t._v("取消")]),n("p",{staticClass:"popup-header-title"},[t._v("管理标签")]),n("p",{staticClass:"confirm-btn-style",on:{click:t.fnConfirm}},[t._v("保存")])]),n("div",{staticClass:"option-list-box"},[n("p",{staticClass:"option-list-title"},[t._v(t._s(t.cateName))]),n("ul",{staticClass:"option-list flex-start flex-wrap"},t._l(t.tags,(function(e,i){return n("li",{key:i,staticClass:"option-item"},[n("Tag",{attrs:{title:e.text,bigSize:"",active:t.isActive(e.id),close:t.isActive(e.id)},nativeOn:{click:function(n){return t.toggleSelect(e)}}})],1)})),0)])])],1)],1)},s=[],a=n(16198),r=(n(35666),n(41539),n(78783),n(33948),n(38862),n(69826),n(34553),n(40561),{components:{Card:function(){return n.e(3314).then(n.bind(n,53314))},Tag:function(){return n.e(3951).then(n.bind(n,53951))}},props:{show:{type:Boolean,default:!1},dataUrl:{type:String,default:""},cateName:{type:String,default:"主题标签"},mulitiple:{type:Boolean,default:!1},selectedItems:{type:Array,default:function(){return[]}}},watch:{selectedItems:function(t){this.activedItems=JSON.parse(JSON.stringify(t))}},computed:{isActive:function(){var t=this;return function(e){return!!t.activedItems.find((function(t){return t.id==e}))}}},data:function(){return{activedItems:[],tags:[]}},created:function(){this.getTags()},methods:{toggleSelect:function(t){var e=this.activedItems.findIndex((function(e){return e.id==t.id}));e>-1?this.activedItems.splice(e,1):this.mulitiple?this.activedItems.push(t):this.activedItems=[t]},getTags:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request(t.dataUrl);case 2:for(s in n=e.sent,i=[],n)i.push({id:s,text:n[s]});t.tags=i;case 6:case"end":return e.stop()}}),e)})))()},fnCancel:function(){this.$emit("update:show",!1)},fnConfirm:function(){this.$emit("confirm",this.activedItems),this.fnCancel()}}}),c=r,o=n(1001),l=(0,o.Z)(c,i,s,!1,null,"3d65291a",null),u=l.exports},34553:function(t,e,n){var i=n(82109),s=n(42092).findIndex,a=n(51223),r="findIndex",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},69826:function(t,e,n){var i=n(82109),s=n(42092).find,a=n(51223),r="find",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)}}]);
//# sourceMappingURL=7427-legacy.8ae7e8f4.js.map