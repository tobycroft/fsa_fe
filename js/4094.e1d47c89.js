"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4094],{64094:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"record-container"},[r("div",{staticClass:"card-box"},[r("p",{staticClass:"card-title-style"},[t._v("现场记录")]),r("Card",{staticClass:"card-style"},[r("div",[r("van-uploader",{staticClass:"upload-style",attrs:{"before-delete":t.beforeDelete,"after-read":t.afterRead,"upload-text":"上传图片","upload-icon":s(62735)},model:{value:t.records,callback:function(e){t.records=e},expression:"records"}})],1),r("div",{staticClass:"record-footer-box flex"},[r("div",{staticClass:"record-left flex-start"},[r("p",[t._v("学员人数")])]),r("div",{staticClass:"record-right flex-end"},[r("p",{staticClass:"record-label-style"},[t._v(t._s(t.activityVisitor))]),r("p",[t._v("人")])])])])],1)])},a=[],i={components:{Card:()=>s.e(3314).then(s.bind(s,53314))},props:{activityId:{type:String,default:""},activityVisitor:{type:String,default:""}},data(){return{records:[]}},created(){this.getRecords()},methods:{getRecords(){this.$request("lecture.lectureRecord2List",{lid:this.activityId}).then((t=>{if(t[this.activityId]&&t[this.activityId]){let e=[];t[this.activityId].forEach((t=>{t&&e.push({message:"上传成功",status:"success",url:t})})),this.records=e}else this.records=[]}))},saveRecords(){this.$request("lecture.lectureRecord2Instructor",{lid:this.activityId,title:"",content:"",imgs:JSON.stringify(this.records.map((t=>t.url)))}).then((t=>{console.log(t)}))},beforeDelete(t,e){this.$dialog.confirm({title:"",message:"您将删除该现场图片，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((()=>{this.records.splice(e.index,1),this.saveRecords()})).catch((()=>{console.log("取消删除 :>>")}))},async afterRead(t){t.status="uploading",t.message="上传中...";const e={file:t.file},s=await this.$request("aoss.fileUpload",e);t.status="success",t.message="上传成功",t.url=s,this.saveRecords()}}},l=i,c=s(1001),o=(0,c.Z)(l,r,a,!1,null,"0b54471d",null),d=o.exports},62735:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA9ZJREFUWEfNl01oXFUUx3/nTRZFg19NwYJInPEjggsXddFFaQLuTJdSC4IFW6mumrxXbVGwgmKKbyZd2Uor1JUJLht3SiMVFcwiC8WiecOghQaaSgi1ZjHvHrl33hveTCbzphMxvt3jnnPP//7Pt9Djt+sNHbzvXl5QGBVlj8IjAg9bdYVlgesqLAjMr/3Flzc/ltu9XC15QqUJfRyPtxBeBnbkybtzxRqfwXAmmpalbjqbAhg+rDu8nbwrQgAM9GR4o1BdldDc4r3aJVnvdEdHAPbVWuALgWfblNZV+QrhawxLxnMvxTMMCoyosF+E59uZUliUmBc7sbEBwLCvI55wJfVvAmBFDR8Yw6XaWVntxsbwcX3A8zgsHm8DQ6msjROjjNXKci2r3wIgefnVFuPKbBxzLM9wOygLpFDgPMLBLAiJ2ZdlognA+XyI71toN5yIKhL26X+nVprUAI+PMiAWzQp705hoAij6+qEIJ5vGcoyXAn0G+MTmoBheW5qWnzcDugGEMlUtyykr7wC4VCvwSzPaldmoLC91e3kp0B+BPYnMQhTKc13lfZ3JuKNOzNPWFQ0Avl5AOJIGXFzniTyfFwNdFbg/KUSr1VAezAvOwgC/NQNTuRiV5ai4CncPN9PUUcNEtSJn8/xeCnQF2JmCjkLZladTnNTj4jGdFqu1v9ktpUAt1Z8nyutxnd15r3es9QHAZcYANzJ14pCUTug5lGOOSmWuWpYDeS/pF4DVK/p6WYRxZ0M4bxloBpPCRDXMp38rANoyYkGKgd5odjXDgWpF5lIGXKopFzTpem3MPCqClwRhjPJHO3MCywhHo1B+Ss+KkzouHpeT/+uWAU0PYxirhTKfAXAFGO3kEqslSRWxF3Rpq/NRKGPpHcOBjhbA3tvwwrYD+JdcYFB+79cF/20Q+uojNPqL8sP/Ig23txBteyl21SnQiwKvpnW9l2Z0t6X4SV+HYnEd101JCp9WQznSuR3DTBTKoW4luRTod8DeRObbKJR9OfK236QtvrUdOxYmdUrs+J1+OQPJY2/qUxI3o9mvVuTXzQBsGEgMZ6oVccNP95FMCaKylLu9LO+slE27BvWdRzLXYBqT0VVaa/9MXOf1Xlp0FkzSes9laLfHy2w2lDZrta8jBXG12q1daWCq8r6J+SwPiBvLC7wiwjvZsdwaj/PG8tRa3mJi9z8VrhlJFhNlUJQRtzdudTFpMmHH9Ic4LR7+llYzQ9n8yem7Ws2yvkzYOCnKQYTBvKBLavxtFWYlZqrv5bTdUFIxxxH202k9V2p4LKJ8s3aHuV7X838A6a0eZO1XBbwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=4094.e1d47c89.js.map