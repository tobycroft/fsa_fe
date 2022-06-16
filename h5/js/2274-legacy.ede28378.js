"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2274],{52274:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"active-dynamic-details-container"},[n("div",{staticClass:"background-box"}),n("div",{staticClass:"container"},[n("div",{staticClass:"header flex-start"},[n("div",{staticClass:"header-left"},[t._v(t._s(t.dateFormat))]),n("div",{staticClass:"header-right"},[n("van-tag",{attrs:{type:"primary",size:"large "}},[t._v(t._s(t.activityInfo.city)+t._s(t.activityInfo.district)+t._s(t.activityInfo.street))]),n("p",{staticClass:"header-date-style"},[t._v(" "+t._s(t.ymFormat)+" "+t._s(t.weekFormat)+" "+t._s(t.activityInfo.duration/3600)+"小时 ")])],1),n("van-button",{staticClass:"delete-btn-style",attrs:{size:"small",round:""},on:{click:t.onDelete}},[n("van-image",{staticClass:"delete-icon-style",attrs:{src:i(97884)}}),t._v(" 删除 ")],1)],1),n("Card",{staticClass:"basic-infor-box"},[n("div",{staticClass:"basic-info-headre"},[n("p",{staticClass:"basic-info-title"},[t._v(t._s(t.activityInfo.title))]),n("div",{staticClass:"tag-box-style"},t._l(t.activityInfo.tag_info,(function(e,i){return n("van-tag",{key:i,staticClass:"tag-style",attrs:{type:"primary",size:"medium"}},[t._v(t._s(e.name))])})),1)]),n("div",{staticClass:"basic-info-main"},[n("div",{staticClass:"basic-info-main-row flex-start"},[n("p",{staticClass:"basic-info-main-row-label"},[t._v("举办单位:")]),n("p",{staticClass:"basic-info-main-row-value"},[t._v(" "+t._s(t.activityInfo.host_info?t.activityInfo.host_info.name:"")+" ")])])])]),n("Record",{attrs:{activityId:t.$route.query.id,activityVisitor:""+t.activityInfo.visitor},on:{confirm:t.onConfirmRecord}}),n("Certificate",{attrs:{activityId:t.$route.query.id,file1:t.activityInfo.file1,file2:t.activityInfo.file2}}),n("ActivityPosters",{attrs:{posterImgUrl:t.activityInfo.poster_img}}),n("AudienceEvaluation",{staticClass:"audience-evaluation-style",attrs:{list:t.rateList}})],1),n("van-button",{staticClass:"footer-btn-style",attrs:{type:"info",size:"large",block:""},on:{click:t.onQRCode}},[t._v(" 签到二维码 ")])],1)},a=[],s=i(16198),r=(i(35666),i(41539),i(78783),i(33948),i(38862),{components:{Card:function(){return i.e(3314).then(i.bind(i,53314))},Avatar:function(){return i.e(2719).then(i.bind(i,72719))},Logo:function(){return i.e(2860).then(i.bind(i,12860))},NoRecord:function(){return i.e(5847).then(i.bind(i,35847))},Record:function(){return i.e(1358).then(i.bind(i,1358))},Certificate:function(){return i.e(1853).then(i.bind(i,71853))},ActivityPosters:function(){return i.e(7115).then(i.bind(i,97115))},AudienceEvaluation:function(){return i.e(7064).then(i.bind(i,47064))}},computed:{dateFormat:function(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:dd"):""},ymFormat:function(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:yyyy/MM"):""},weekFormat:function(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"UTC:ddd"):""}},data:function(){return{activityInfo:{},show:!1,lid:"",rateList:[]}},created:function(){this.lid=this.$route.query.id,this.getActivityInfo(this.lid),this.rateIndexListAPI(this.lid)},methods:{getActivityInfo:function(t){var e=this;this.$request("lecture.eventDetails",{id:t}).then((function(t){e.activityInfo=t}))},onDelete:function(){var t=this;console.log("delete :>>"),this.$dialog.confirm({title:"",message:"您将删除该活动信息，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((function(){var e=t.$store.getters.associationInfo.id,i="host"===t.$route.query.type?"lecture.lectureDelHost":"lecture.lectureDelInstructor";t.$request(i,{id:t.activityInfo.id,is_del:1,aid:e}).then((function(e){t.$router.back()}))})).catch((function(){console.log("取消删除 :>>")}))},onQRCode:function(){this.$router.push({path:"/newActivitiesQRCode",query:{aid:this.activityInfo.aid,hid:this.activityInfo.hid,lid:this.activityInfo.id}})},rateIndexListAPI:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n={lid:t},i.next=3,e.$request("rate.rateIndexList",n);case 3:a=i.sent,console.log("查看他人的评价API_res :>> ",a),e.rateList=a;case 6:case"end":return i.stop()}}),i)})))()},onConfirmRecord:function(t){this.handleLectureEditPersonNum(t)},handleLectureEditPersonNum:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var n,a,s,r,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(s in n="host"===e.$route.query.type?"lecture.lectureEditHost":"lecture.lectureEditInstructor",a=Object.assign(e.activityInfo),a)Array.isArray(a[s])&&(a[s]=JSON.stringify(a[s]),console.log("activityInfoNew[key] :>> ",a[s]));return r=a,r.visitor=t,r.tag_ids=r.tag_ids,r.tag_dataunit_ids=r.tag_dataunit_ids,i.next=9,e.$request(n,r);case 9:o=i.sent,console.log("res :>> ",o),e.getActivityInfo(e.lid);case 12:case"end":return i.stop()}}),i)})))()}}}),o=r,c=i(1001),u=(0,c.Z)(o,n,a,!1,null,"44b60963",null),d=u.exports},97884:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgZJREFUSEvtVDGIE0EU/W92AxYWaQQLCw8sDjS32dlcIVyhcAeCrYWNnZ0RFJuz8sTmGvHAiI2djYXtoaBgQAvBy98hsRAsvMJCUNDCQkh2n8yRiFmSvbtcYeNvdpj/39s3f/48SHmEcRzfMMY0ReTYsPRznuetNE3vishgGhxlvNbaewCuTaohuaGq1/dNXK/Xq0EQfBWRUESektz0JADOi8gFrzbLsiPOuR+TyKcqjqJoKQzD1x6UZdmcc27br621JwB89GuSp1X17UTiKIpOhmHYKCbzPJ83xqwOCTZEZKSsOmpPnufrxpgPRexgMNiCtfY7gGoxSdIfu/RqS2q+IUmShyTPATgqIodE5BfJLyRDAIfLmEn+BDAoYgE8/yMpSZJXInJGRNqdTufsLmM4lp6E/XfEfuyKI1Xc27dia+1jABezLFtxzrX9+eM4XjbGPCP5RFUv+b1ZiD8BOE5yTVVvD+f4FoA1ktuqOvef+MCteAegQbKpqg+GPb4CoEVyS1UXZ+rxwsLCqSAIltI0ffSX93qPvpxl2Ztut/t+JuK9vr7ScbPWvgCwfJAnTfKlqq7s+PZIlbX2PoCmNxYRWQXgv7sGSW9U696wSLZU9eoYca1Wm69UKv6ySh1t2p+8oH6/v9jr9Xb8ecxw4zhuALgDwLuct9C9hLfZdp7nN51zbgT4DX9we5LNpS98AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=2274-legacy.ede28378.js.map