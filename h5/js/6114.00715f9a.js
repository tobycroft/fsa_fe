"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6114],{6114:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"multi-selector-container"},[s("van-popup",{attrs:{position:"bottom",round:"","safe-area-inset-bottom":"","close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("Card",{staticClass:"card-style"},[s("div",{staticClass:"popup-header-style flex"},[s("p",{staticClass:"cancel-btn-style",on:{click:t.fnCancel}},[t._v("取消")]),s("p",{staticClass:"popup-header-title"},[t._v("管理标签")]),s("p",{staticClass:"confirm-btn-style",on:{click:t.fnConfirm}},[t._v("保存")])]),s("div",{staticClass:"option-list-box"},[s("p",{staticClass:"option-list-title"},[t._v(t._s(t.cateName))]),s("ul",{staticClass:"option-list flex-start flex-wrap"},t._l(t.tags,(function(e,i){return s("li",{key:i,staticClass:"option-item"},[s("Tag",{attrs:{title:e.text,bigSize:"",active:t.isActive(e.id),close:t.isActive(e.id)},nativeOn:{click:function(s){return t.toggleSelect(e)}}})],1)})),0)])])],1)],1)},a=[],l={components:{Card:()=>s.e(3314).then(s.bind(s,53314)),Tag:()=>s.e(3750).then(s.bind(s,43750))},props:{show:{type:Boolean,default:!1},dataUrl:{type:String,default:""},cateName:{type:String,default:"主题标签"},mulitiple:{type:Boolean,default:!1},selectedItems:{type:Array,default:()=>[]}},watch:{selectedItems(t){this.activedItems=JSON.parse(JSON.stringify(t))}},computed:{isActive(){return t=>!!this.activedItems.find((e=>e.id==t))}},data(){return{activedItems:[],tags:[]}},created(){this.getTags()},methods:{toggleSelect(t){let e=this.activedItems.findIndex((e=>e.id==t.id));e>-1?this.activedItems.splice(e,1):this.mulitiple?this.activedItems.push(t):this.activedItems=[t]},async getTags(){const t=this.$store.getters.associationInfo.id,e={aid:t};let s=await this.$request(this.dataUrl,e),i=[];for(let a in s)i.push({id:a,text:s[a]});this.tags=i},fnCancel(){this.$emit("update:show",!1)},fnConfirm(){this.$emit("confirm",this.activedItems),this.fnCancel()}}},n=l,c=s(1001),o=(0,c.Z)(n,i,a,!1,null,"470d5089",null),r=o.exports}}]);
//# sourceMappingURL=6114.00715f9a.js.map