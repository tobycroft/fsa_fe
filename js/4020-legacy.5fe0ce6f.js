"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4020],{14857:function(A,e,t){t.r(e),t.d(e,{default:function(){return w}});var s=function(){var A=this,e=A.$createElement,s=A._self._c||e;return s("el-upload",{staticClass:"avatar-uploader flex-center",attrs:{action:"#","show-file-list":!1,"on-success":A.handleAvatarSuccess,"before-upload":A.beforeAvatarUpload,"http-request":A.submitUpload,multiple:!1}},[A.imageUrl?s("van-image",{staticClass:"avatar",style:{width:"100%",height:"100%"},attrs:{src:A.imageUrl,fit:"fill"}}):s("van-image",{style:{width:"100%",height:"100%"},attrs:{src:t(43706)}})],1)},g=[],r=t(16198),c=(t(35666),{props:{src:{type:String,default:""}},watch:{src:function(A){""!==A&&(this.imageUrl=A)}},data:function(){return{fileList:[],imageUrl:""}},created:function(){""!==this.src&&(this.imageUrl=this.src)},methods:{handleAvatarSuccess:function(A,e,t){console.log("文件上传成功时的钩子_handleAvatarSuccess :>> ",A,e,t)},beforeAvatarUpload:function(A){console.log("上传文件之前的钩子_beforeAvatarUpload :>> ",A),this.file=A},submitUpload:function(){var A=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={file:A.file},e.next=3,A.$request("aoss.fileUpload",t);case 3:s=e.sent,console.log("上传文件之前的钩子_res :>> ",s),A.imageUrl=s,A.change();case 7:case"end":return e.stop()}}),e)})))()},change:function(){this.$emit("change",this.imageUrl)}}}),o=c,a=t(1001),n=(0,a.Z)(o,s,g,!1,null,"7999859c",null),w=n.exports},43706:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAADXCAYAAACd6FpUAAAABHNCSVQICAgIfAhkiAAACXJJREFUeF7tnYF24jgMRdNCC3T2/790p1AKZSQoU0oDsZPY0kQ35+zZ3dkQ2e/dtRLbUR5eN9tDw4ECRgo8AKCR8oQ9KgCAgGCqAACayk9wAIQBUwUA0FR+ggMgDJgqAICm8hMcAGHAVAEANJWf4AAIA6YKAKCp/AQHQBgwVQAATeUnOADCgKkCAGgqP8EBEAZMFQBAU/kJDoAwYKoAAJrKT3AAhAFTBQDQVH6CAyAMmCoAgKbyExwAYcBUAQA0lZ/gAAgDpgoAoKn8BAdAGDBVAABN5Sc4AMKAqQIAaCo/wQEQBkwVAEBT+QkOgDBgqgAAmspPcACEAVMFANBUfoIDIAyYKgCApvITHABhwFQBADSVn+AACAOmCgCgqfwEB0AYMFUAAE3lJzgAwoCpAgBoKj/BARAGTBUAQFP5CQ6AMGCqAACayk9wAIQBUwUA0FR+ggMgDJgqAICm8hMcAGHAVAEANJWf4AAIA6YKAKCp/AQHQBgwVQAATeUnOADCgKkCAGgqP8EBEAZMFQBAU/kJDoAwYKoAAJrKT3AAhAFTBQDQVH6CAyAMmCoAgBnyHw6HZr/by1/vx1/tDx9NI3/WPDw0s4dH+XvTzGZPzWw+kz+Sf+HoVAAAOyUS0Pb7Zrt9aw4fAlziMXucNU+LRfP4KGBy3FQAAO/AcZARbrt5a/Yf+94IKYjPy4WMiIDYJiIA3kBrv9s1b2+b3uB9+6Gk48ViKel5Ns71JnQVAGwxc7vdNLv33eg2PwuE8/l89Ov+yxcEwCv3Rh35Wsg4joRA+FcZALyA5EMeMjbr17IDiqTj1WrFPeGnygB4gdv69bfMqsi0SuFDp2hWL78KR/k3Lg+Anz7pNMvu/TS/V+MgFZ9UBsCjDIfm9VVSb4XR7ww3oyAA/h3odKL5bbOuMfB9i7FYrsJPzTACChI636dPv7WP+dO8eX5e1g7rKh4Aih2v8vBRM/2Shr/+HwBABfD3/2ajwsuv/8xiewgcHsAqc393nNbpmMg7ZwCwxuTzHQCXq5fQO2YAEABNM3F4AHXlQ1dArA7uATfb8mtPVu4mxuUhJFGoAqeFHwFV07VsQMjZ7TyWD4+yWXUpGxMiHwAo7tdeBz4Dx/5A1oKPLOjW+7WuBVc+ok/BqNyMgJ/Qbdbr5mPAux+57Or2fF0Ljn4A4CcBtSekGf1OwgPgxRBU6l2Q61GOTQhfigDgNzpkTlBScckn4gd5T3glqx8cjICtDBwnpvW9kAKbU0+bUBU+qiacxWcEbMFQIdzIBtUxR8LTyKcPHcB3KTkA3syFB9klLRtVZbf00ENfw1xImQ7g+6kkAHbQpU/Hul2/z9tyutLxTH2YuwoDYOLwplv2d/vdaUS8d3+olbJkjm8+lypZlOLoVBcAOyX6eYKOinrsPsu06T8rcHpQDStP0AkDeJD3fE+1/LqqW1m9nZZSBkRHUa05OH/SwkbTe4CZJIBHY+VF89SpFKtlsZxdODqFo5sXppbWJwdg350tL7+0VEbeCHOsH7jdyquVz9m1XvpuhJ1aRYVJATjkBfNcY4+xtH7gZ4nepWwsyLn/28kove1Zf9DqliHv7i7t7AkBOKy8Rk4a1tqBum58feRAnJN+r+NMqazHZAAcMqKcDU5Jw11VFE6TzverHfRNv5cg5sCeNhbZnDUZAMfYz3ff1PSNCqfRVCFsv6dMefrtwiFnxO66luV/nwyAY5TXuGWqPmxsZFkuZ21Y1371vrDtpXNdWRm6xDeV90mmA+BI5TXa0nBvuGXq5OVHIUq5V/09zmugU3ilEwCv8k9bGu4LYNvDwhjp9+ue9d+vKwOAVwC2PUR0PXjcuodq2/k8RvoFQMu71huxR3u5vCVt9p1f1M2n3z9QM176VRlIwY5AHA1A6VPbRG9uGi6dfgHQEXzalDEBHCMNl06/ADhhAPXrl9dPr7lpuHT6BcApAzgwDddIvwA4cQCHpOEa6RcAJw7gkDTc+hAz0kT5pew8BTuCcMyHkHO3ej0Nj3D/mCorAKYqVeG8EgD2ScN9ftNXHgDsq1yB35UAsDUNd3zIuteo2VMPAOwpXImfFQFQGvqziv2d1YyK6ZeHkBIUDbhmKQBznmhrpl8AHABLiZ+WAjBnTq9m+gXAEhQNuGYpALVJSasaqelXzpvLtv2cQ1dh2jbDcg+Yo2Lhc0sCmJKGU9Pv/OlJXuPUQkXpx61lQABM17D4mSUBTEnDqen3/IK5DITJx/vbtrW6AwAmS1j+xJIAdqbh1PQ7sgwAOLKgQy5XGsB7aTg1/Q7pX9tvAXBsRQdcrzSA99Jw23sk+v25PjUFcyQAwBy1Cp9bGsD2NNzIt0U+fpTkqPXhGwAsDFXO5WsAmPp5hVqfewDAHEIKn5v7zkaf5qR+YqFG+uXF9D4OFvzNGKU5UprX9YWjWumX0hwpblU8Z4ziRCnN7frCZa30S3GiFLeqnjOsPFtqU7vScI30S3m2VLcqnzdm2Yt7Tb+VhmulXwpUVgYrJ1zfEr05MW6l4Rrpdyqp96z3ZGrDXAKUW6Q8Bz4991YaLpp+ZbnvCN/Evj0ySQBPQMlnGnZ7+VTD++gfor51D1ZiKkinW3QHzXzOZxpyBwrOR4FOBSY8Anb2nRMcKACADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvoOwA6MCFyEwAwsvsO+g6ADkyI3AQAjOy+g74DoAMTIjcBACO776DvAOjAhMhNAMDI7jvo+x9rqmsznJgQuAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=4020-legacy.5fe0ce6f.js.map