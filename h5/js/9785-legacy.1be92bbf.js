"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9785],{19785:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"members-audit-details-container"},[i("header",[i("Card",{staticClass:"card-style flex-start"},[i("Avatar",{attrs:{imgUrl:t.instructorVerify.img?t.instructorVerify.img:"",width:117,height:157}}),i("div",{staticClass:"content-style"},[i("p",{staticClass:"username-style"},[t._v(t._s(t.instructorVerify.name))]),i("p",{staticClass:"userinfo-style"},[t._v(" "+t._s(t.genderCmp)+"丨"+t._s(t.instructorVerify.instructor_info.job)+"丨"+t._s(t.instructorVerify.instructor_info.title)+" ")])])],1)],1),i("main",[i("Card",{staticClass:"card-style"},[i("p",{staticClass:"title"},[t._v("个人信息")]),i("ul",{staticClass:"userinfo-list"},[i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("联系电话")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.tel))])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("身份证号")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.cert))])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("工作单位")]),i("p",{staticClass:"value"},[t._v(" "+t._s(t.instructorVerify.instructor_info.work_address)+" ")])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("职务")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.job))])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("职称")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.title))])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("电子邮箱")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.mail))])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("所在区域")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.location))])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("通讯地址")]),i("p",{staticClass:"value"},[t._v(t._s(t.instructorVerify.instructor_info.address))])])])]),0!==this.instructorVerify.status?i("Card",{staticClass:"card-style userinfo-status-card"},[i("ul",{staticClass:"userinfo-list"},[i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("审核状态")]),t.statusCmp?i("p",{staticClass:"value value-resolve"},[t._v("已通过")]):i("p",{staticClass:"value value-resolve"},[t._v("已拒绝")])]),i("li",{staticClass:"userinfo-list-item flex-start"},[i("p",{staticClass:"label"},[t._v("审核时间")]),i("p",{staticClass:"value"},[t._v(t._s(t.applyTimeCmp))])])])]):t._e()],1),0===this.instructorVerify.status?i("footer",{staticClass:"flex-start"},[i("van-button",{staticClass:"reject-btn-style",attrs:{round:""},on:{click:t.verifydenyAPI}},[t._v("拒绝通过")]),i("van-button",{staticClass:"resolve-btn-style",attrs:{round:"",type:"info"},on:{click:t.verifyApproveAPI}},[t._v("通过")])],1):t._e()])},r=[],a=i(16198),n=(i(35666),i(41539),i(78783),i(33948),{components:{Card:function(){return i.e(3314).then(i.bind(i,53314))},Avatar:function(){return i.e(2719).then(i.bind(i,72719))}},computed:{genderCmp:function(){var t="";return 0!==this.instructorVerify.gender&&"0"!==this.instructorVerify.gender||(t="女"),1!==this.instructorVerify.gender&&"1"!==this.instructorVerify.gender||(t="男"),t},statusCmp:function(){return 1===this.instructorVerify.status},applyTimeCmp:function(){return this.$dateFormat(this.instructorVerify.instructor_info.date,"yyyy年mm月dd日 HH:MM:ss")}},data:function(){return{instructorVerify:{},iid:null,aid:null}},created:function(){this.iid=this.$route.query.iid,this.aid=this.$route.query.aid,console.log("this.iid :>> ",this.iid),this.instructorVerifyByIdAPI(this.iid,this.aid)},methods:{verifyApproveAPI:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function s(){var i,e,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=t.$store.getters.associationInfo.id,e={aid:i,iid:t.iid,mtids:0},s.next=4,t.$request("association.verifyApprove",e);case 4:r=s.sent,console.log("成员审核-通过_APIres :>> ",r),t.instructorVerifyByIdAPI(t.iid,t.aid);case 7:case"end":return s.stop()}}),s)})))()},verifydenyAPI:function(t){var s=this;return(0,a.Z)(regeneratorRuntime.mark((function t(){var i,e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=s.$store.getters.associationInfo.id,e={aid:i,iid:s.iid,mtids:0},t.next=4,s.$request("association.verifydeny",e);case 4:r=t.sent,console.log("成员审核-失败API_res :>> ",r),s.instructorVerifyByIdAPI(s.iid,s.aid);case 7:case"end":return t.stop()}}),t)})))()},instructorVerifyByIdAPI:function(t,s){var i=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={id:t,aid:s},e.next=3,i.$request("instructor.instructorVerifyById",r);case 3:a=e.sent,console.log("根据ID获取讲师验证详情API_res :>> ",a),i.instructorVerify=a;case 6:case"end":return e.stop()}}),e)})))()}}}),l=n,c=i(1001),o=(0,c.Z)(l,e,r,!1,null,"9bede348",null),u=o.exports}}]);
//# sourceMappingURL=9785-legacy.1be92bbf.js.map