"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6494],{46494:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"activity-posters-container"},[s("div",{staticClass:"card-box"},[s("p",{staticClass:"card-title-style"},[t._v("活动海报")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"edit-poster-box flex-center",on:{click:function(e){t.showPopup=!0}}},[""===t.posterImgUrl?s("p",{staticClass:"text-style"},[t._v("编辑海报")]):s("van-image",{attrs:{src:t.posterImgUrl}})],1)])],1),s("van-popup",{staticClass:"van-popup-style",attrs:{round:"",position:"bottom"},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[s("van-cell",{staticClass:"van-cell-style",attrs:{title:"预览","is-link":""},on:{click:t.onPreview}}),s("van-cell",{staticClass:"van-cell-style",attrs:{title:"编辑","is-link":""},on:{click:t.onEditPoster}})],1),s("van-image-preview",{attrs:{images:[t.posterImgUrl],showIndex:!1},model:{value:t.showPreview,callback:function(e){t.showPreview=e},expression:"showPreview"}})],1)},o=[],n=(s(41539),s(78783),s(33948),{components:{Card:function(){return s.e(3314).then(s.bind(s,53314))}},props:{posterImgUrl:{type:String,default:""}},data:function(){return{lid:"",showPopup:!1,showPreview:!1}},created:function(){this.lid=this.$route.query.id},methods:{onHidenPopup:function(){this.showPopup=!1},onPreview:function(){this.showPreview=!0,this.onHidenPopup()},onEditPoster:function(){this.$router.push({path:"/editPoster",query:{lid:this.lid}})}}}),r=n,a=s(1001),l=(0,a.Z)(r,i,o,!1,null,"67c35c94",null),c=l.exports}}]);
//# sourceMappingURL=6494-legacy.fcfa9d0e.js.map