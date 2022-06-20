"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2274],{52274:function(t,i,e){e.r(i),e.d(i,{default:function(){return d}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"active-dynamic-details-container"},[s("div",{staticClass:"background-box"}),s("div",{staticClass:"container"},[s("div",{staticClass:"header flex-start"},[s("div",{staticClass:"header-left"},[t._v(t._s(t.dateFormat))]),s("div",{staticClass:"header-right"},[s("van-tag",{attrs:{type:"primary",size:"large "}},[t._v(t._s(t.activityInfo.city)+t._s(t.activityInfo.district)+t._s(t.activityInfo.street))]),s("p",{staticClass:"header-date-style"},[t._v(" "+t._s(t.ymFormat)+" "+t._s(t.weekFormat)+" "+t._s(t.activityInfo.duration/3600)+"小时 ")])],1),s("van-button",{staticClass:"delete-btn-style",attrs:{size:"small",round:""},on:{click:t.onDelete}},[s("van-image",{staticClass:"delete-icon-style",attrs:{src:e(97884)}}),t._v(" 删除 ")],1)],1),s("Card",{staticClass:"basic-infor-box"},[s("div",{staticClass:"basic-info-headre"},[s("p",{staticClass:"basic-info-title"},[t._v(t._s(t.activityInfo.title))]),s("div",{staticClass:"tag-box-style"},t._l(t.activityInfo.tag_info,(function(i,e){return s("van-tag",{key:e,staticClass:"tag-style",attrs:{type:"primary",size:"medium"}},[t._v(t._s(i.name))])})),1)]),s("div",{staticClass:"basic-info-main"},[s("div",{staticClass:"basic-info-main-row flex-start"},[s("p",{staticClass:"basic-info-main-row-label"},[t._v("举办单位:")]),s("p",{staticClass:"basic-info-main-row-value"},[t._v(" "+t._s(t.activityInfo.host_info?t.activityInfo.host_info.name:"")+" ")])])])]),s("Record",{attrs:{activityId:t.$route.query.id,activityVisitor:""+t.activityInfo.visitor},on:{confirm:t.onConfirmRecord}}),s("Certificate",{attrs:{activityId:t.$route.query.id,file1:t.activityInfo.file1,file2:t.activityInfo.file2}}),s("ActivityPosters",{attrs:{posterImgUrl:t.activityInfo.poster_img}}),s("AudienceEvaluation",{staticClass:"audience-evaluation-style",attrs:{list:t.rateList}})],1),s("van-button",{staticClass:"footer-btn-style",attrs:{type:"info",size:"large",block:""},on:{click:t.onQRCode}},[t._v(" 签到二维码 ")])],1)},a=[],o={components:{Card:()=>e.e(3314).then(e.bind(e,53314)),Avatar:()=>e.e(2719).then(e.bind(e,72719)),Logo:()=>e.e(2860).then(e.bind(e,12860)),NoRecord:()=>e.e(5847).then(e.bind(e,35847)),Record:()=>e.e(1358).then(e.bind(e,1358)),Certificate:()=>e.e(1853).then(e.bind(e,71853)),ActivityPosters:()=>e.e(7115).then(e.bind(e,97115)),AudienceEvaluation:()=>e.e(7064).then(e.bind(e,47064))},computed:{dateFormat(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:dd"):""},ymFormat(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:yyyy/MM"):""},weekFormat(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:ddd"):""}},data(){return{activityInfo:{},show:!1,lid:"",rateList:[]}},created(){this.lid=this.$route.query.id,this.getActivityInfo(this.lid),this.rateIndexListAPI(this.lid)},methods:{getActivityInfo(t){this.$request("lecture.eventDetails",{id:t}).then((t=>{this.activityInfo=t}))},onDelete(){console.log("delete :>>"),this.$dialog.confirm({title:"",message:"您将删除该活动信息，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((()=>{const t=this.$store.getters.associationInfo.id,i="host"===this.$route.query.type?"lecture.lectureDelHost":"lecture.lectureDelInstructor";this.$request(i,{id:this.activityInfo.id,is_del:1,aid:t}).then((t=>{this.$router.back()}))})).catch((()=>{console.log("取消删除 :>>")}))},onQRCode(){this.$router.push({path:"/newActivitiesQRCode",query:{aid:this.activityInfo.aid,hid:this.activityInfo.hid,lid:this.activityInfo.id}})},async rateIndexListAPI(t){const i={lid:t},e=await this.$request("rate.rateIndexList",i);console.log("查看他人的评价API_res :>> ",e),this.rateList=e},onConfirmRecord(t){this.handleLectureEditPersonNum(t)},async handleLectureEditPersonNum(t){const i="host"===this.$route.query.type?"lecture.lectureEditHost":"lecture.lectureEditInstructor",e=Object.assign(this.activityInfo);for(const o in e)Array.isArray(e[o])&&(e[o]=JSON.stringify(e[o]),console.log("activityInfoNew[key] :>> ",e[o]));const s=e;s.visitor=t,s.tag_ids=s.tag_ids,s.tag_dataunit_ids=s.tag_dataunit_ids;const a=await this.$request(i,s);console.log("res :>> ",a),this.getActivityInfo(this.lid)}}},n=o,r=e(1001),c=(0,r.Z)(n,s,a,!1,null,"44b60963",null),d=c.exports},97884:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgZJREFUSEvtVDGIE0EU/W92AxYWaQQLCw8sDjS32dlcIVyhcAeCrYWNnZ0RFJuz8sTmGvHAiI2djYXtoaBgQAvBy98hsRAsvMJCUNDCQkh2n8yRiFmSvbtcYeNvdpj/39s3f/48SHmEcRzfMMY0ReTYsPRznuetNE3vishgGhxlvNbaewCuTaohuaGq1/dNXK/Xq0EQfBWRUESektz0JADOi8gFrzbLsiPOuR+TyKcqjqJoKQzD1x6UZdmcc27br621JwB89GuSp1X17UTiKIpOhmHYKCbzPJ83xqwOCTZEZKSsOmpPnufrxpgPRexgMNiCtfY7gGoxSdIfu/RqS2q+IUmShyTPATgqIodE5BfJLyRDAIfLmEn+BDAoYgE8/yMpSZJXInJGRNqdTufsLmM4lp6E/XfEfuyKI1Xc27dia+1jABezLFtxzrX9+eM4XjbGPCP5RFUv+b1ZiD8BOE5yTVVvD+f4FoA1ktuqOvef+MCteAegQbKpqg+GPb4CoEVyS1UXZ+rxwsLCqSAIltI0ffSX93qPvpxl2Ztut/t+JuK9vr7ScbPWvgCwfJAnTfKlqq7s+PZIlbX2PoCmNxYRWQXgv7sGSW9U696wSLZU9eoYca1Wm69UKv6ySh1t2p+8oH6/v9jr9Xb8ecxw4zhuALgDwLuct9C9hLfZdp7nN51zbgT4DX9we5LNpS98AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=2274.dde44868.js.map