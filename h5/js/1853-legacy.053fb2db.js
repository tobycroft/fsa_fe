"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[1853],{71853:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"certificate-container"},[s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title-box flex"},[s("p",{staticClass:"card-title-style"},[e._v("举办单位反馈表&主讲人承诺书")]),s("van-button",{on:{click:e.downFile}},[e._v(" 下载附件 ")])],1),s("div",{staticClass:"flex"},[s("Card",{staticClass:"card-style"},[s("van-uploader",{staticClass:"upload-style",attrs:{"show-upload":!e.file1Obj.length,"after-read":e.afterRead,"before-delete":e.file1BeforeDelete,"upload-text":"上传图片","upload-icon":l(62735)},model:{value:e.file1Obj,callback:function(t){e.file1Obj=t},expression:"file1Obj"}}),s("p",{staticClass:"title-style"},[e._v("反馈表")])],1),s("Card",{staticClass:"card-style"},[s("van-uploader",{staticClass:"upload-style",attrs:{"show-upload":!e.file2Obj.length,"after-read":e.afterRead,"before-delete":e.file2BeforeDelete,"upload-text":"上传图片","upload-icon":l(62735)},model:{value:e.file2Obj,callback:function(t){e.file2Obj=t},expression:"file2Obj"}}),s("p",{staticClass:"title-style"},[e._v("承诺书")])],1)],1)])])},i=[],a=l(16198),n=(l(35666),l(41539),l(78783),l(33948),{components:{Card:function(){return l.e(3314).then(l.bind(l,53314))}},props:{activityId:{type:String,default:""},file1:{type:String,default:""},file2:{type:String,default:""}},watch:{file1:function(e){this.file1Obj=[{message:"上传成功",status:"success",url:e}]},file2:function(e){this.file2Obj=[{message:"上传成功",status:"success",url:e}]}},data:function(){return{file1Obj:[],file2Obj:[]}},methods:{downFile:function(){window.open("https://static.familyeducation.org.cn/fsa/20220527/4bb4eaebb62a94baf04f62c955cf3350.docx")},saveFiles:function(){var e=this.$store.getters.associationInfo.id,t="host"===this.$route.query.type?"lecture.lectureFileHost":"lecture.lectureFileInstructor";this.$request(t,{id:this.activityId,aid:e,hid:this.$store.getters.hostMenberMe.hid,file1:this.file1Obj.length?this.file1Obj[0].url:"",file2:this.file2Obj.length?this.file2Obj[0].url:""})},file1BeforeDelete:function(e,t){var l=this;this.$dialog.confirm({title:"",message:"您将删除反馈表，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((function(){l.file1Obj=[],l.saveFiles()})).catch((function(){console.log("取消删除 :>>")}))},file2BeforeDelete:function(e,t){var l=this;this.$dialog.confirm({title:"",message:"您将删除承诺书，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((function(){l.file2Obj=[],l.saveFiles()})).catch((function(){console.log("取消删除 :>>")}))},afterRead:function(e){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function l(){var s,i;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return e.status="uploading",e.message="上传中...",s={file:e.file},l.next=5,t.$request("aoss.fileUpload",s);case 5:i=l.sent,e.status="success",e.message="上传成功",e.url=i,t.saveFiles();case 10:case"end":return l.stop()}}),l)})))()}}}),o=n,r=l(1001),c=(0,r.Z)(o,s,i,!1,null,"40aa3c7e",null),u=c.exports},62735:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA9ZJREFUWEfNl01oXFUUx3/nTRZFg19NwYJInPEjggsXddFFaQLuTJdSC4IFW6mumrxXbVGwgmKKbyZd2Uor1JUJLht3SiMVFcwiC8WiecOghQaaSgi1ZjHvHrl33hveTCbzphMxvt3jnnPP//7Pt9Djt+sNHbzvXl5QGBVlj8IjAg9bdYVlgesqLAjMr/3Flzc/ltu9XC15QqUJfRyPtxBeBnbkybtzxRqfwXAmmpalbjqbAhg+rDu8nbwrQgAM9GR4o1BdldDc4r3aJVnvdEdHAPbVWuALgWfblNZV+QrhawxLxnMvxTMMCoyosF+E59uZUliUmBc7sbEBwLCvI55wJfVvAmBFDR8Yw6XaWVntxsbwcX3A8zgsHm8DQ6msjROjjNXKci2r3wIgefnVFuPKbBxzLM9wOygLpFDgPMLBLAiJ2ZdlognA+XyI71toN5yIKhL26X+nVprUAI+PMiAWzQp705hoAij6+qEIJ5vGcoyXAn0G+MTmoBheW5qWnzcDugGEMlUtyykr7wC4VCvwSzPaldmoLC91e3kp0B+BPYnMQhTKc13lfZ3JuKNOzNPWFQ0Avl5AOJIGXFzniTyfFwNdFbg/KUSr1VAezAvOwgC/NQNTuRiV5ai4CncPN9PUUcNEtSJn8/xeCnQF2JmCjkLZladTnNTj4jGdFqu1v9ktpUAt1Z8nyutxnd15r3es9QHAZcYANzJ14pCUTug5lGOOSmWuWpYDeS/pF4DVK/p6WYRxZ0M4bxloBpPCRDXMp38rANoyYkGKgd5odjXDgWpF5lIGXKopFzTpem3MPCqClwRhjPJHO3MCywhHo1B+Ss+KkzouHpeT/+uWAU0PYxirhTKfAXAFGO3kEqslSRWxF3Rpq/NRKGPpHcOBjhbA3tvwwrYD+JdcYFB+79cF/20Q+uojNPqL8sP/Ig23txBteyl21SnQiwKvpnW9l2Z0t6X4SV+HYnEd101JCp9WQznSuR3DTBTKoW4luRTod8DeRObbKJR9OfK236QtvrUdOxYmdUrs+J1+OQPJY2/qUxI3o9mvVuTXzQBsGEgMZ6oVccNP95FMCaKylLu9LO+slE27BvWdRzLXYBqT0VVaa/9MXOf1Xlp0FkzSes9laLfHy2w2lDZrta8jBXG12q1daWCq8r6J+SwPiBvLC7wiwjvZsdwaj/PG8tRa3mJi9z8VrhlJFhNlUJQRtzdudTFpMmHH9Ic4LR7+llYzQ9n8yem7Ws2yvkzYOCnKQYTBvKBLavxtFWYlZqrv5bTdUFIxxxH202k9V2p4LKJ8s3aHuV7X838A6a0eZO1XBbwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=1853-legacy.053fb2db.js.map