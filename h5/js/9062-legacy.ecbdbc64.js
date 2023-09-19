"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[9062],{49062:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-activities-container"},[i("Card",{staticClass:"card-style"},[i("header",{staticClass:"flex"},[i("p",{staticClass:"time-style"},[t._v(t._s(t.dateFormat(t.lecture.start_date)))]),i("CheckDetailsBtn")],1),i("main",[i("p",{staticClass:"title-style"},[t._v(t._s(t.lecture.title))]),i("ul",{staticClass:"tag-list-style flex-start"},t._l(t.lecture.tag_info,(function(t,e){return i("li",{key:e,staticClass:"tag-list-item"},[i("Tag",{attrs:{title:t.name,active:""}})],1)})),0),i("div",{staticClass:"more-info-box flex"},[i("div",{staticClass:"unit-info-style flex-start"},[i("p",[t._v("举办单位:")]),i("p",{staticClass:"unit-info-value"},[t._v(t._s(t.lecture.host_info?t.lecture.host_info.name:""))])]),i("p",{staticClass:"status-style",style:t.isSubmit(t.lecture.start_date)?"":"color:#03C76B;"},[t._v(" "+t._s(t.isSubmit(t.lecture.start_date)?"已提交":"已备案")+" ")])])]),i("footer",{staticClass:"flex"},[i("div",{staticClass:"flex-start"},[i("van-image",{staticClass:"icon-style",attrs:{src:s(57826)}}),i("p",{staticClass:"text-style"},[t._v(" "+t._s(""+t.lecture.province+t.lecture.city+t.lecture.district+t.lecture.street)+" ")])],1),i("div",{staticClass:"flex-end"},[i("van-image",{staticClass:"icon-style",attrs:{src:s(41479)}}),i("p",{staticClass:"text-style"},[t._v(t._s(t.lecture.visitor)+"人")])],1)])])],1)},a=[],r=(s(41539),s(78783),s(33948),{props:{lecture:{type:Object,default:function(){return{}}}},computed:{isSubmit:function(){return function(t){return new Date(t).valueOf>(new Date).valueOf}},dateFormat:function(){var t=this;return function(e){return t.$dateFormat(e,"yyyy年mm月dd日 HH:MM")}}},components:{Card:function(){return s.e(248).then(s.bind(s,80248))},CheckDetailsBtn:function(){return s.e(933).then(s.bind(s,90933))},Tag:function(){return s.e(3316).then(s.bind(s,23316))}}}),c=r,l=s(43736),A=(0,l.Z)(c,i,a,!1,null,"32c45740",null),u=A.exports},41479:function(t){t.exports="data:image/png;base64,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"},57826:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAbCAYAAAB4Kn/lAAAAAXNSR0IArs4c6QAABYVJREFUSEuFlWlQU1cUx89NXjbMgmAMq9q6gIEiLkEsCEGh1apAO6VTBZcPdeyMjkUR1FYtTq0MFMZlWttOv6ixth3tFEXc6pQMKItaawthiY4bu0AgG0nIe3md+3zJJAb0fjrv3HN+57z/3RBMMMKyDkVOHmrciICbxXWOzCNICw+HkoTYSfEC/0WU8/ehqW//3HNhX+d4CPSyMzD7SGCo4dbXQnvfFg5l405UGPtdXBHpEIR93ydO3me4st3kHesDnp6+c36g+Z9qgjSFegc5+cE2F1dgBBoQx2WX8sYMIp95Qqbrn5q2pr9q/2O33wOekVEYLzPdqSVIs4TpBhH0mDBcY5TGn+i6fKDJGxS+ev8SmbFlq9DWvQ7RFMMgCclgf+i7qr7KvU/wN+MMWnlcGmGo1PFIY8SLIOlzkywu5/H1Y7WvkmLmsk+Xia0d5wjSFITjxgTBd5vrr6s84JiUnKNC66PPsMNJSDqHFSsTOy/u7vGBqmmC+dYi0tsfkl0yQ9F7rZEgzQrst0ii9ndozx5CePUVvVcfcSgb4UJ81/Dk5IVP/vzmPpOMYYthCwBsA4BoFtgOAN9CE/zoLjIzY1uSdPhOHYcmEckVjw4o1slRzNLsIuFoZylOsgdEntLVVW7yQBPgHCDIHlcOGirhNuS44bFJq34T2Ps+wrFmafxWFJuc+bfA1r0AO/oUH8zvvvzFi26L6C8BQTELtQPAJdZeDQBCxqahGMrQQWxOW3FguXyg+gajNV9+Hs1bvNxBkCN8hyBkqKW+egqTsIkWggIGAEAMNIwABUugAmEJAAroaOBCAyAIxJJCP8jhJMKFIS4xw8pzGgIcwtABtGChikbgAkdAZHNLXWUc220iIGhgOyyHUlToI8du+ggA5LNdq6AM3cV2TFLWA6G9axZFiCm0YFGCC+9FmyiisfXmhSVM8C5aDVyoYWH5UIqO+YD30AVAQznjoyANypGWASdnNwltnQk04tIoLjHdwXMO8+2i8Ge6mxenM8GFdAhwoJftqBFuw1LPNsM7JYGRYhEzT4IcKtAgNmOTMrsE9u5wJ2/yGIpNzvpPYOt6i+LwXU9lWUHDN/YYWTmuAIIVbKd4UY56/gAgnS16FcrQSmyHrSmfoug9/5xDO5FDFNGMYpLWHBTaew7gSbM0Zqu+5vQJJmkHPQt4cIddJB8lWOgIOEEFR9BD/B2lXpsvNuux9uAQhR9EYZlfRSl6qto4NIXG+MEPmxuuz/ZQdtGxwAENIIj3IdNwHyhY69kpUMyJS7z1hOc0RLoQlx4Ie38Oc1fEJq2qFtj73vPr2k0roJOBy8IpuA8V6KZ3oajU3CKxpZ05ZA5haFXLrUuZDDhyxR6VfPCvJrw7SEJsGpJnKLsu7ev2/39/z7RVJW8GDV5t4ZIWEe7WEJy+6Om1w/c816Yy5cMzIuvjXJxqF4TU6eqrU14LVhcTcY76Jt7YEHNyRye9caqt9jxzJXjA+OqMNPyhI0gTc3VaJHOPdWjPvDgEE4y5qR9rAiwP8vC0kyd7NihPmdtTVTzqA8YfM9/ZvlAycq+BS9l4NCCwSpT5HdrTvoeDLRKdtv5wgLF1L0IALg7fZZSpUh/dOO7R3u/Nm6XemCs16zQIaIRPkFmizHtQc/Ksd9Nz0jbslJh0FW6fWaLcptdqvvOO8QPjyTnq9eUSc2sBtvEdbRVH5eq1J39l5tI27hCbWisQuJhci1RZ1lGj2f2yWuOCcVCUOu8nsbntE2zjzi2S6BKOi5JPsrRvdkMmgvpp/HLVaHXeD5PMbfgF8RtmqbJEX6P5fKKFnbBjd8Ls1A2FEmt7qfs1xgtlE80oaq/9xaPxePDXgnHS7OWbVwdY9GcBEGUTTcvRa08zL8Wrxv/DYCgh+VLeegAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=9062-legacy.ecbdbc64.js.map