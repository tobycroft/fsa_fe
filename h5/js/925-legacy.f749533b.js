(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[925],{80925:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recent-about-details-container"},[r("TableList",{attrs:{columns:t.cloumnListRecentAboutDetails,list:t.preachListRecentAboutDetailsCmp,showSort:!1,showTitle:!1}})],1)},c=[],i=r(16198),o=r(4367),s=(r(35666),r(41539),r(78783),r(33948),r(54747),{components:{TableList:function(){return r.e(569).then(r.bind(r,90569))}},computed:{preachListRecentAboutDetailsCmp:function(){var t=[];return this.recentList.forEach((function(e){t.push((0,o.Z)((0,o.Z)({},e.instructor_info),{},{title:e.title,visitor:"".concat(e.visitor,"人")}))})),console.log("近期宣讲详情arr :>> ",t),t}},data:function(){return{cloumnListRecentAboutDetails:[{label:"宣讲主题",keyName:"title"},{label:"主讲人",keyName:"name",width:70},{label:"听课人数",keyName:"visitor",width:80}],recentList:[]}},created:function(){this.recentListAPI()},methods:{recentListAPI:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.getters.associationInfo.id,n={aid:r},e.next=4,t.$request("lecture.recentList",n);case 4:c=e.sent,console.log("近期列表API_res :>> ",c),t.recentList=c;case 7:case"end":return e.stop()}}),e)})))()}}}),a=s,u=r(1001),l=(0,u.Z)(a,n,c,!1,null,"7b498b08",null),f=l.exports},38880:function(t,e,r){var n=r(82109),c=r(47293),i=r(45656),o=r(31236).f,s=r(19781),a=c((function(){o(1)})),u=!s||a;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},49337:function(t,e,r){var n=r(82109),c=r(19781),i=r(53887),o=r(45656),s=r(31236),a=r(86135);n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),c=s.f,u=i(n),l={},f=0;while(u.length>f)r=c(n,e=u[f++]),void 0!==r&&a(l,e,r);return l}})},4367:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});r(47941),r(82526),r(57327),r(41539),r(38880),r(54747),r(49337);var n=r(23796);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=925-legacy.f749533b.js.map