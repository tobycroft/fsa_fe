"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[6877],{26877:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cover-people-total-container"},[e("ChartCard",{staticClass:"cover-people-total-style",attrs:{title:"覆盖总人数"}},[e("div",{staticClass:"total-box flex-start align-end"},[e("p",{staticClass:"people-num-style"},[t._v(t._s(t.totalNum))]),e("p",{staticClass:"people-unit-style"},[t._v("人")])]),e("v-chart",{staticClass:"chart",attrs:{"init-options":t.initEcharts,option:t.option}})],1)],1)},s=[],i={components:{ChartCard:()=>e.e(5173).then(e.bind(e,95173))},props:{totalNum:{type:Number,default:0},dataSource:{type:Array,default:()=>[]},xAxisData:{type:Array,default:()=>[]}},data(){return{barWidth:40,initEcharts:{renderer:"canvas",useDirtyRect:!0,ssr:!1,width:"auto",height:"auto",locale:"ZH"},option:{}}},watch:{dataSource(){this.optionInit()}},created(){this.optionInit()},methods:{optionInit(){this.option={grid:{top:20,right:0,bottom:20,left:0},xAxis:{axisTick:{show:!1},minorTick:{show:!1},axisLine:{show:!1},type:"category",max:7,data:this.xAxisData},yAxis:{show:!1},dataZoom:{type:"inside"},series:[{type:"bar",barWidth:this.$cpx(this.barWidth),itemStyle:{borderRadius:90,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#0077FF"},{offset:1,color:"#BEDCFF"}],global:!1}},data:this.dataSource}]}}}},r=i,l=e(1001),n=(0,l.Z)(r,o,s,!1,null,"8699f1a8",null),c=n.exports}}]);
//# sourceMappingURL=6877.cd7fd9fb.js.map