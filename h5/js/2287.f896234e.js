"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2287],{92287:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"choice-activity-time-container"},[a("van-popup",{attrs:{position:"bottom",round:"","close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-datetime-picker",{staticClass:"picker-style",attrs:{type:"datetime",title:"选择时间","confirm-button-text":"保存","min-date":e.minDate,"max-date":e.maxDate,formatter:e.formatter},on:{cancel:e.onCancel,confirm:e.onConfirm},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1)],1)},o=[],r={props:{show:{type:Boolean,default:!1}},data(){return{minDate:new Date(this.minYear(),0,1),maxDate:new Date(this.maxYear(),12,1),currentDate:new Date}},methods:{formatter(e,t){return console.log("type :>> ",e),console.log("val :>> ",t),"year"===e?`${t}年`:"month"===e?`${t}月`:"day"===e?`${t}日`:"hour"===e?`${t}时`:"minute"===e?`${t}分`:void 0},maxYear(){const e=new Date;return console.log("d.getFullYear() :>> ",e.getFullYear()+10),e.getFullYear()+10},minYear(){const e=new Date;return console.log("d.getFullYear() :>> ",e.getFullYear()-10),e.getFullYear()-10},onCancel(){this.$emit("update:show",!1)},onConfirm(e){this.$emit("confirm",e),this.onCancel()}}},l=r,c=a(1001),i=(0,c.Z)(l,n,o,!1,null,"5e696ca6",null),s=i.exports}}]);
//# sourceMappingURL=2287.f896234e.js.map