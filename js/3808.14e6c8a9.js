"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[3808],{3808:function(t,i,e){e.r(i),e.d(i,{default:function(){return d}});var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"active-dynamic-details-container"},[a("div",{staticClass:"background-box"}),a("div",{staticClass:"container"},[a("div",{staticClass:"header flex-start"},[a("div",{staticClass:"header-left"},[t._v(t._s(t.dateFormat))]),a("div",{staticClass:"header-right"},[a("van-tag",{attrs:{type:"primary",size:"large "}},[t._v(t._s(t.activityInfo.city)+t._s(t.activityInfo.district)+t._s(t.activityInfo.street))]),a("p",{staticClass:"header-date-style"},[t._v(" "+t._s(t.ymFormat)+" "+t._s(t.weekFormat)+" "+t._s(t.activityInfo.duration/3600)+"小时 ")])],1),a("van-button",{staticClass:"delete-btn-style",attrs:{size:"small",round:""},on:{click:t.onDelete}},[a("van-image",{staticClass:"delete-icon-style",attrs:{src:e(97884)}}),t._v(" 删除 ")],1)],1),a("Card",{staticClass:"basic-infor-box"},[a("div",{staticClass:"basic-info-headre"},[a("p",{staticClass:"basic-info-title"},[t._v(t._s(t.activityInfo.title))]),a("div",{staticClass:"tag-box-style"},t._l(t.activityInfo.tag_info,(function(i,e){return a("van-tag",{key:e,staticClass:"tag-style",attrs:{type:"primary",size:"medium"}},[t._v(t._s(i.name))])})),1)]),a("div",{staticClass:"basic-info-main"},[a("div",{staticClass:"basic-info-main-row flex-start"},[a("p",{staticClass:"basic-info-main-row-label"},[t._v("举办单位:")]),a("p",{staticClass:"basic-info-main-row-value"},[t._v(" "+t._s(t.activityInfo.host_info?t.activityInfo.host_info.name:"")+" ")])])])]),a("Record",{attrs:{activityId:t.$route.query.id,activityVisitor:""+t.activityInfo.visitor}}),a("Certificate",{attrs:{activityId:t.$route.query.id,file1:t.activityInfo.file1,file2:t.activityInfo.file2}}),a("ActivityPosters",{attrs:{posterImgUrl:t.activityInfo.poster_img}}),a("AudienceEvaluation",{staticClass:"audience-evaluation-style",attrs:{list:t.rateList}})],1),a("van-button",{staticClass:"footer-btn-style",attrs:{type:"info",size:"large",block:""},on:{click:t.onQRCode}},[t._v(" 签到二维码 ")])],1)},s=[],n={components:{Card:()=>e.e(3314).then(e.bind(e,53314)),Avatar:()=>e.e(2719).then(e.bind(e,72719)),Logo:()=>e.e(2860).then(e.bind(e,12860)),NoRecord:()=>e.e(5847).then(e.bind(e,35847)),Record:()=>e.e(4094).then(e.bind(e,64094)),Certificate:()=>e.e(6258).then(e.bind(e,6258)),ActivityPosters:()=>e.e(6494).then(e.bind(e,46494)),AudienceEvaluation:()=>e.e(7064).then(e.bind(e,47064))},computed:{dateFormat(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:dd"):""},ymFormat(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:yyyy/MM"):""},weekFormat(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:ddd"):""}},data(){return{activityInfo:{},show:!1,lid:"",rateList:[]}},created(){this.lid=this.$route.query.id,this.getActivityInfo(this.lid),this.rateIndexListAPI(this.lid)},methods:{getActivityInfo(t){this.$request("lecture.eventDetails",{id:t}).then((t=>{this.activityInfo=t}))},onDelete(){console.log("delete :>>"),this.$dialog.confirm({title:"",message:"您将删除该活动信息，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((()=>{this.$request("lecture.lectureDelInstructor",{id:this.activityInfo.id,is_del:1}).then((t=>{this.$router.back()}))})).catch((()=>{console.log("取消删除 :>>")}))},onQRCode(){this.$router.push({path:"/newActivitiesQRCode",query:{aid:this.activityInfo.aid,hid:this.activityInfo.hid,lid:this.activityInfo.id}})},async rateIndexListAPI(t){const i={lid:t},e=await this.$request("rate.rateIndexList",i);console.log("查看他人的评价API_res :>> ",e),this.rateList=e}}},o=n,r=e(1001),c=(0,r.Z)(o,a,s,!1,null,"494c2707",null),d=c.exports},97884:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgZJREFUSEvtVDGIE0EU/W92AxYWaQQLCw8sDjS32dlcIVyhcAeCrYWNnZ0RFJuz8sTmGvHAiI2djYXtoaBgQAvBy98hsRAsvMJCUNDCQkh2n8yRiFmSvbtcYeNvdpj/39s3f/48SHmEcRzfMMY0ReTYsPRznuetNE3vishgGhxlvNbaewCuTaohuaGq1/dNXK/Xq0EQfBWRUESektz0JADOi8gFrzbLsiPOuR+TyKcqjqJoKQzD1x6UZdmcc27br621JwB89GuSp1X17UTiKIpOhmHYKCbzPJ83xqwOCTZEZKSsOmpPnufrxpgPRexgMNiCtfY7gGoxSdIfu/RqS2q+IUmShyTPATgqIodE5BfJLyRDAIfLmEn+BDAoYgE8/yMpSZJXInJGRNqdTufsLmM4lp6E/XfEfuyKI1Xc27dia+1jABezLFtxzrX9+eM4XjbGPCP5RFUv+b1ZiD8BOE5yTVVvD+f4FoA1ktuqOvef+MCteAegQbKpqg+GPb4CoEVyS1UXZ+rxwsLCqSAIltI0ffSX93qPvpxl2Ztut/t+JuK9vr7ScbPWvgCwfJAnTfKlqq7s+PZIlbX2PoCmNxYRWQXgv7sGSW9U696wSLZU9eoYca1Wm69UKv6ySh1t2p+8oH6/v9jr9Xb8ecxw4zhuALgDwLuct9C9hLfZdp7nN51zbgT4DX9we5LNpS98AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=3808.14e6c8a9.js.map