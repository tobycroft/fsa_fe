"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1918],{51918:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active-dynamic-details-container"},[a("div",{staticClass:"background-box"}),a("div",{staticClass:"container"},[a("div",{staticClass:"header flex-start"},[a("div",{staticClass:"header-left"},[t._v(t._s(t.dateFormat))]),a("div",{staticClass:"header-right"},[a("van-tag",{attrs:{type:"primary",size:"large "}},[t._v(t._s(t.activityInfo.city)+t._s(t.activityInfo.district)+t._s(t.activityInfo.street))]),a("p",{staticClass:"header-date-style"},[t._v(" "+t._s(t.ymFormat)+" "+t._s(t.weekFormat)+" "+t._s(t.activityInfo.duration/3600)+"小时 ")])],1),t.canEdit?a("div",{staticClass:"delete-btn-style flex"},[a("div",{staticClass:"flex1 flex-center bor",on:{click:t.jumpEditTo}},[a("img",{staticClass:"icon-style",attrs:{src:i(73469),alt:""}})]),a("div",{staticClass:"flex1 flex-center",on:{click:t.onDelete}},[a("img",{staticClass:"icon-style",attrs:{src:i(64172),alt:""}})])]):t._e()]),a("Card",{staticClass:"basic-infor-box"},[a("div",{staticClass:"basic-info-headre"},[a("p",{staticClass:"basic-info-title"},[t._v(t._s(t.activityInfo.title))]),a("div",{staticClass:"tag-box-style"},t._l(t.activityInfo.tag_info,(function(e,i){return a("van-tag",{key:i,staticClass:"tag-style",attrs:{type:"primary",size:"medium"}},[t._v(t._s(e.name))])})),1)]),a("div",{staticClass:"basic-info-main"},[a("div",{staticClass:"basic-info-main-row flex-start"},[a("p",{staticClass:"basic-info-main-row-label"},[t._v("举办单位:")]),a("p",{staticClass:"basic-info-main-row-value"},[t._v(" "+t._s(t.activityInfo.host_info?t.activityInfo.host_info.name:"")+" ")])])])]),a("Record",{attrs:{activityId:t.$route.query.id,activityVisitor:""+t.activityInfo.visitor,hid:""+t.activityInfo.hid},on:{confirm:t.onConfirmRecord}}),a("Certificate",{attrs:{activityId:t.$route.query.id,hid:""+t.activityInfo.hid}}),a("ActivityPosters",{attrs:{posterImgUrl:t.activityInfo.poster_img}}),a("AudienceEvaluation",{staticClass:"audience-evaluation-style",attrs:{list:t.rateList}})],1),a("van-button",{staticClass:"footer-btn-style",attrs:{type:"info",size:"large",block:""},on:{click:t.onQRCode}},[t._v(" 签到二维码 ")])],1)},n=[],r=i(48534),s=(i(35666),i(41539),i(78783),i(33948),i(38862),{components:{Card:function(){return i.e(248).then(i.bind(i,80248))},Avatar:function(){return i.e(1244).then(i.bind(i,4179))},Logo:function(){return i.e(7079).then(i.bind(i,17079))},NoRecord:function(){return i.e(6006).then(i.bind(i,76006))},Record:function(){return i.e(4797).then(i.bind(i,74797))},Certificate:function(){return i.e(4838).then(i.bind(i,54838))},ActivityPosters:function(){return i.e(4296).then(i.bind(i,14296))},AudienceEvaluation:function(){return i.e(9359).then(i.bind(i,79359))}},computed:{dateFormat:function(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"dd"):""},ymFormat:function(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"yyyy/MM"):""},weekFormat:function(){return this.activityInfo.start_date?this.$dateFormat(this.activityInfo.start_date,"ddd"):""}},data:function(){return{activityInfo:{},show:!1,lid:"",rateList:[],canEdit:!1,editTo:"association"}},created:function(){this.lid=this.$route.query.id,this.lectureInfoEditableAPI(this.lid),this.getActivityInfo(this.lid),this.rateIndexListAPI(this.lid)},methods:{jumpEditTo:function(){this.$router.push({path:"/activityEdit",query:{id:this.lid,type:this.editTo,fromEdit:!0}})},lectureInfoEditableAPI:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$request("lecture.lectureInfoEditable",{id:t});case 2:a=i.sent,e.canEdit=a.auth,e.editTo=a.type;case 5:case"end":return i.stop()}}),i)})))()},getActivityInfo:function(t){var e=this;this.$request("lecture.eventDetails",{id:t}).then((function(t){e.activityInfo=t}))},onDelete:function(){var t=this;console.log("delete :>>"),this.$dialog.confirm({title:"",message:"您将删除该活动信息，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((function(){var e=t.$store.getters.associationInfo.id,i="host"===t.$route.query.type?"lecture.lectureDelHost":"lecture.lectureDelInstructor";t.$request(i,{id:t.activityInfo.id,is_del:1,aid:e}).then((function(e){t.$router.back()}))})).catch((function(){console.log("取消删除 :>>")}))},onQRCode:function(){this.$router.push({path:"/newActivitiesQRCode",query:{aid:this.activityInfo.aid,hid:this.activityInfo.hid,lid:this.activityInfo.id}})},rateIndexListAPI:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function i(){var a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a={lid:t},i.next=3,e.$request("rate.rateIndexList",a);case 3:n=i.sent,console.log("查看他人的评价API_res :>> ",n),e.rateList=n;case 6:case"end":return i.stop()}}),i)})))()},onConfirmRecord:function(t){this.handleLectureEditPersonNum(t)},handleLectureEditPersonNum:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function i(){var a,n,r,s,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(r in a="host"===e.$route.query.type?"lecture.lectureEditHost":"lecture.lectureEditInstructor",n=Object.assign(e.activityInfo),n)Array.isArray(n[r])&&(n[r]=JSON.stringify(n[r]),console.log("activityInfoNew[key] :>> ",n[r]));return s=n,s.visitor=t,s.tag_ids=s.tag_ids,s.tag_dataunit_ids=s.tag_dataunit_ids,i.next=9,e.$request(a,s);case 9:o=i.sent,console.log("res :>> ",o),e.getActivityInfo(e.lid);case 12:case"end":return i.stop()}}),i)})))()}}}),o=s,c=i(43736),l=(0,c.Z)(o,a,n,!1,null,"ab447e56",null),u=l.exports},64172:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAzNJREFUaEPtmr9v00AUxz/nuAFHVTsUpC5ZMrQDHcrQDixlgIGBPwWhgqqKrRsq5YcQfwoDSLB0gIEOdKBDGViCRAYyJIIUNY4PXU1oGt85bs75Bb7Vd+f3fe/d+y1Ie21JlzolprgEzEWuD2jiUKfFN6YpsyX8NEkQaV7GuizhsoDDVKJ7FbgWBzwV5UT7E2xKD9CGXMahmOCf0S2/+MxzcdjX2a5D6QBSkslzxYqggD12RMXqDsAe0Lr0cFlLrGYmiiUNCuzavil7QHflIhdZ0NIZUOaYozPf8nhG1Wyyb/ue7AFtymtaa9ZglxeirgW6IedxWIl886nwROzZqF0agG5rTHOZHbEfS5ieEVW2xfvxA5TEaulUVZnxHfH63wGkkGyLl+kAUtbqmMK5L5tGvaHuVSNA/37aOx1mgNnIyR+cX+UuU2tbR0FodlcJfzDJq4rHB8F9uYLL/CQj+Ut7QFmwKaNWalLRBdQVIL0fmURQPhXBHTnDBVbJ4U0ihg51q+OrN9ReD+Rp7uJT1IYnTh8WyJZLklmkJvBVYZXLadrxUFTVr/SRgik+s/QRfWFTjA40rsHgvDNAfXHZ5lAmIR33sjdko1M9zo5M5e7JIjnmkNQSlafa5a4cBQTfeSS+aqGNBNCmVAWSUgdB8YmaAtNgDdER3ZtyqBEBisaDygn/cXYRzutScFNyN3RAph/GATqP0ckA2ZrtTEJApnLDDE4zlctUbsj5UKZy465yKi474lbEncVFCiqQnWI5ckaX4g89UlBUdZfCWhzxWLw1JgYhE24CbseeL2yLg8iZkQBSBP5kCYcCPk0CPvFMnG10dVOqymd5FnFPGsw1PA613buRABpgfkcGyDY4HaR01N2ZhP5rCcV1tgeleqmonGkyRBXIe3W30wQW+qtVwxCUdvJEX9tWbco8N7S0qYkPSZUWjTRpj9wVlrfmzlSGOjd5vNL5LfOcwjg3wmI0xQwolNL1rvBkoEJJeLmPxxvTTFD8JElYP7s6RqB8GrwzjtwkmsZSMVeBJe3DTMjSlLZVOeZjrxgx+axPaD5V+3+WFoWB92RVxJ47MTw1GpTjpNLJsN8zTDhNJpzMjAAAAABJRU5ErkJggg=="},73469:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAAAXNSR0IArs4c6QAABIlJREFUaEPd2k2IHEUUwPH/m72YgwdB83EQBSFoQkADghE3G5eIMSoo6CmiGLwIKsE13RsVFBUy0xOjEvFiFNngQY+CSFAxCRhFQYOoEEGzopAVhcSgO8Ku/aSmt7MzO93V1R8zE7cuuzD18X7zqqprakYYdpnQdYxwFJhnhDH2yg9VhCRVdFK4jz16NSHHgMsW+vgNZYxAThbuc6Hh8GC9qCgk5Q/gprK44cDSUHGaKsANHpaF6sQJW2jId0Wm5WBhrqhFyRlgtAhucLD8qJh3hpBxmnIiT+YGAyuOii3nCBnLg+s/zA21G1gFPGHJSi5cf2GuqIbsa4N8bWbihK3U5cusadk/WF5UHGk27i+E8Sxcf2BFURXiqoeVReXBwa005HjStKwW5uk1wBGElalrQPkK5TGa8mnWOsHX54GnLX39jbCdhpjzZlepDuaWKfPu3ojSwmwCKe92V4RZa870VWM7dTnS2a4amEH9y1FrpuBr4LqOwWdR7iCQTyrIXAtlA035Me6rPCyafscQLrVOP2Fj4uvKVgL5OBPn6WcIN1jGuJ9ADlUDc0GBeUbZHrwmlm005HBq0J7WEXwL/idgIw35szzMZU0pjxLIq3h6D8I7QC0la3PA7QTyYc/rvr4GPGxBTaOMEsiv5ddYHlQ8mqc7EKasOOFuGvJ+1ERNjg4CO/OiTP38a6wIqhMHh5DUceeBu1jBB8wyhbCjCCo/zOU5FfI4TXkpNaBJ3YnyhnWz0PYOO2ZdU9HdSNf0KzYVy2RqaYQGF3LQkjmbO3FNLW3gNhWrRMURuGSul+eEcpuK/UDFAftqdjuz67kUZ1Q2rJ+ofLhcKDtsECgTgaePIBwouvultUteY/9zVHLGlgGqF7ZMUN2wZYRahC0zVAQbFMpX89HFXK+lldxbuu3hJ3j6PYL5sJhWdtGQV1yeoKl1PPUR6qmvK6eAzbazX97xBV9bwEUpDcujfJ0E9lpR84yxX37JG3xWxqYRruippDxJIOkBuUSRhYJp5thcNSpaY75+AVzfE6dwC3X5yCX+xDoDXlNLYzCw94A7EzJ2H4G8XQg2ZFSUMU9fR3goATBBQ/bnhnn6DMKzg9r90sYxsBcQnkrIWJNAvFywrMtNs6YSLl5yjeFY2cDSTtdTNOQBx35cvgIaGCqairv1Xmq8m5CxwwSyzQl2AWUqjtfARqm1f0TSXZQTBNJ5JZ1svABRUcb26FpCkn4JY25VnyPkNMIMI5ymxQwvy9nzQl/Nc848gJNLH04UTjNoYVe8GOGcawPgH2AG5SzCtVZUH04UrnFGn6A9nUVY4drIoV7yiWJStzi0LVdljlO8KD9HMF/NIfTKcj2eb52M8nQfwkRFY9i6+R3lqjhjxxE2lR7UtqZ8/RZYX3oMlw6U8Ri2CyH9Wtqls6wDra9mg1rr1lXJWiG3Ld5S+bqekHXUWI22fz+4BliNsApt/73cMlz2KX1oMJc3aVIvaUNDVhKypv2/KS3e4oDYd1ZfvwE2uAxTuo5ws9vdfemR2jvvgwhvVtGVtQ/lcwLZ9B/lKTi6+vWBoQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=1918-legacy.25637afb.js.map