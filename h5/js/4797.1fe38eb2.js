"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4797],{74797:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"record-container"},[a("div",{staticClass:"card-box"},[a("p",{staticClass:"card-title-style"},[e._v("现场记录")]),a("Card",{staticClass:"card-style"},[a("div",[a("van-uploader",{staticClass:"upload-style",attrs:{"before-delete":e.beforeDelete,"after-read":e.afterRead,"upload-text":"上传图片","upload-icon":s(62735)},model:{value:e.records,callback:function(t){e.records=t},expression:"records"}})],1),a("div",{staticClass:"record-footer-box flex"},[a("div",{staticClass:"record-left flex-start"},[a("p",[e._v("学员人数")])]),a("div",{staticClass:"record-right flex-end",on:{click:function(t){e.show=!0}}},[a("p",{staticClass:"record-label-style"},[e._v(e._s(e.activityVisitor))]),a("p",[e._v("人")])])])])],1),a("van-dialog",{attrs:{title:"设置学员人数","show-cancel-button":""},on:{confirm:e.onConfirm},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-field",{attrs:{type:"number",placeholder:"请输入学员人数"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},i=[],r={components:{Card:()=>s.e(248).then(s.bind(s,80248))},props:{activityId:{type:String,default:""},activityVisitor:{type:String,default:""},hid:{type:String,default:""}},data(){return{show:!1,value:null,records:[]}},created(){this.getRecords()},methods:{getRecords(){this.$request("lecture.lectureRecordList",{lid:this.activityId,type:"现场记录"}).then((e=>{if(e[this.activityId]&&e[this.activityId]){let t=[];e[this.activityId].forEach((e=>{e&&t.push({message:"上传成功",status:"success",url:e})})),this.records=t}else this.records=[]}))},saveRecords(){const e="lecture.lectureRecordAdd",t=this.$store.getters.associationInfo.id;this.$request(e,{aid:t,lid:this.activityId,hid:this.hid,title:"",content:"",type:"现场记录",imgs:JSON.stringify(this.records.map((e=>e.url)))}).then((e=>{console.log(e)}))},beforeDelete(e,t){this.$dialog.confirm({title:"",message:"您将删除该现场图片，是否继续？",confirmButtonColor:"#2374FF",cancelButtonColor:"#999999"}).then((()=>{this.records.splice(t.index,1),this.saveRecords()})).catch((()=>{console.log("取消删除 :>>")}))},async afterRead(e){e.status="uploading",e.message="上传中...";const t={file:e.file},s=await this.$request("aoss.fileUpload",t);e.status="success",e.message="上传成功",e.url=s,this.saveRecords()},onConfirm(){this.$emit("confirm",this.value)}}},l=r,o=s(43736),c=(0,o.Z)(l,a,i,!1,null,"2c897d50",null),d=c.exports},62735:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA9ZJREFUWEfNl01oXFUUx3/nTRZFg19NwYJInPEjggsXddFFaQLuTJdSC4IFW6mumrxXbVGwgmKKbyZd2Uor1JUJLht3SiMVFcwiC8WiecOghQaaSgi1ZjHvHrl33hveTCbzphMxvt3jnnPP//7Pt9Djt+sNHbzvXl5QGBVlj8IjAg9bdYVlgesqLAjMr/3Flzc/ltu9XC15QqUJfRyPtxBeBnbkybtzxRqfwXAmmpalbjqbAhg+rDu8nbwrQgAM9GR4o1BdldDc4r3aJVnvdEdHAPbVWuALgWfblNZV+QrhawxLxnMvxTMMCoyosF+E59uZUliUmBc7sbEBwLCvI55wJfVvAmBFDR8Yw6XaWVntxsbwcX3A8zgsHm8DQ6msjROjjNXKci2r3wIgefnVFuPKbBxzLM9wOygLpFDgPMLBLAiJ2ZdlognA+XyI71toN5yIKhL26X+nVprUAI+PMiAWzQp705hoAij6+qEIJ5vGcoyXAn0G+MTmoBheW5qWnzcDugGEMlUtyykr7wC4VCvwSzPaldmoLC91e3kp0B+BPYnMQhTKc13lfZ3JuKNOzNPWFQ0Avl5AOJIGXFzniTyfFwNdFbg/KUSr1VAezAvOwgC/NQNTuRiV5ai4CncPN9PUUcNEtSJn8/xeCnQF2JmCjkLZladTnNTj4jGdFqu1v9ktpUAt1Z8nyutxnd15r3es9QHAZcYANzJ14pCUTug5lGOOSmWuWpYDeS/pF4DVK/p6WYRxZ0M4bxloBpPCRDXMp38rANoyYkGKgd5odjXDgWpF5lIGXKopFzTpem3MPCqClwRhjPJHO3MCywhHo1B+Ss+KkzouHpeT/+uWAU0PYxirhTKfAXAFGO3kEqslSRWxF3Rpq/NRKGPpHcOBjhbA3tvwwrYD+JdcYFB+79cF/20Q+uojNPqL8sP/Ig23txBteyl21SnQiwKvpnW9l2Z0t6X4SV+HYnEd101JCp9WQznSuR3DTBTKoW4luRTod8DeRObbKJR9OfK236QtvrUdOxYmdUrs+J1+OQPJY2/qUxI3o9mvVuTXzQBsGEgMZ6oVccNP95FMCaKylLu9LO+slE27BvWdRzLXYBqT0VVaa/9MXOf1Xlp0FkzSes9laLfHy2w2lDZrta8jBXG12q1daWCq8r6J+SwPiBvLC7wiwjvZsdwaj/PG8tRa3mJi9z8VrhlJFhNlUJQRtzdudTFpMmHH9Ic4LR7+llYzQ9n8yem7Ws2yvkzYOCnKQYTBvKBLavxtFWYlZqrv5bTdUFIxxxH202k9V2p4LKJ8s3aHuV7X838A6a0eZO1XBbwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=4797.1fe38eb2.js.map