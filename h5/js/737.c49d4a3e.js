"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[737],{70737:function(t,s,e){e.r(s),e.d(s,{default:function(){return h}});var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"host-selector-container"},[e("van-popup",{attrs:{position:"bottom",round:"","close-on-click-overlay":!1},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("van-picker",{staticClass:"picker-style",attrs:{title:"选择举办单位","show-toolbar":"",columns:t.hostList,"value-key":"name"},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1)],1)},n=[],i={props:{show:{type:Boolean,default:!1}},data(){return{hostList:[]}},created(){this.getHostList()},methods:{async getHostList(){const t=this.$store.getters.associationInfo.id,s={aid:t},e=await this.$request("host.hostList",s);this.hostList=e},onConfirm(t,s){this.$emit("confirm",t),this.onCancel()},onCancel(){this.$emit("update:show",!1)}}},a=i,r=e(1001),c=(0,r.Z)(a,o,n,!1,null,"285090bb",null),h=c.exports}}]);
//# sourceMappingURL=737.c49d4a3e.js.map