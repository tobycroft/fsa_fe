"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9663],{89663:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-activities-qrcode-container"},[i("div",{staticClass:"background-box"},[i("div",{staticClass:"content-style"},[i("div",{staticClass:"info-box"},[i("p",{staticClass:"title-style"},[t._v(t._s(t.lectureData.title))]),i("p",{staticClass:"info-style"},[t._v(t._s(t.timeCmp))]),i("p",{staticClass:"info-style"},[t._v(t._s(t.addressCmp))]),i("p",{staticClass:"info-style"},[t._v(t._s(t.lectureData.host_info.name))])]),i("div",{staticClass:"qrcode-box"},[i("van-image",{staticClass:"van-image-style",attrs:{src:t.imgQR?t.imgQR:s(34036)}})],1)])]),i("p",{staticClass:"tips-style"},[t._v("截图或者长按图片保存至手机")]),i("p",{staticClass:"statement-style"},[t._v("“亲师友”提供技术支持")])])},a=[],r=s(16198),n=(s(35666),s(92222),s(38862),{data:function(){return{aid:"",hid:"",lid:"",imgQR:"",lectureData:{}}},computed:{timeCmp:function(){return this.$dateFormat(this.lectureData.start_date,"yyyy年mm月dd日 hh:MM:ss")},addressCmp:function(){return"".concat(this.lectureData.province).concat(this.lectureData.city).concat(this.lectureData.district).concat(this.lectureData.street)}},created:function(){var t=this.$route.query;this.aid=t.aid,this.hid=t.hid,this.lid=t.lid,console.log("this.lid :>> ",this.lid),this.generateQRCode(),this.eventDetailsAPI(this.lid)},methods:{generateQRCode:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={aid:t.aid,hid:t.hid,lid:t.lid,type:"home_research"},e.next=3,t.$qrcode.toDataURL(JSON.stringify(s),{errorCorrectionLevel:"L"});case 3:i=e.sent,console.log("qr :>> ",i),t.imgQR=i;case 6:case"end":return e.stop()}}),e)})))()},eventDetailsAPI:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function s(){var i,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i={id:t},s.next=3,e.$request("lecture.eventDetails",i);case 3:a=s.sent,console.log("res :>> ",a),e.lectureData=a;case 6:case"end":return s.stop()}}),s)})))()}}}),c=n,o=s(1001),l=(0,o.Z)(c,i,a,!1,null,"4df8eb31",null),u=l.exports},34036:function(t,e,s){t.exports=s.p+"img/qrcode.342574bd.jpg"}}]);
//# sourceMappingURL=9663-legacy.bda1f888.js.map