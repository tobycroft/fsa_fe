"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[2988],{52988:function(t,i,e){e.r(i),e.d(i,{default:function(){return n}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"new-activities-container"},[s("ul",{staticClass:"list-style"},[s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动主题")]),s("Card",{staticClass:"card-style"},[s("van-field",{attrs:{rows:"1",name:"title",autosize:"",type:"textarea",placeholder:"请输入活动的主题名称","show-word-limit":"",border:!1},model:{value:t.form.title,callback:function(i){t.$set(t.form,"title",i)},expression:"form.title"}}),s("div",{staticClass:"label-management-box flex"},[s("p",{staticClass:"label-management-title"},[t._v("标签管理")]),s("div",{staticClass:"label-management-new-tag-box flex-end",on:{click:function(i){t.showThemeTag=!0}}},[s("p",[t._v("添加标签")]),s("van-image",{staticClass:"label-management-new-tag-icon",attrs:{src:e(16919)}})],1)]),s("div",[s("ul",{staticClass:"option-list flex-start flex-wrap"},t._l(t.form.tag_ids,(function(i,e){return s("li",{key:e,staticClass:"option-item",staticStyle:{"margin-right":"10px"}},[s("Tag",{attrs:{title:i.text,bigSize:"",active:"",close:""},nativeOn:{click:function(i){return t.removeThemeTag(e)}}})],1)})),0)])],1),s("NewActivitiesTagSelecter",{attrs:{dataUrl:"tag.themeTagList",mulitiple:!0,cateName:"主题标签",selectedItems:t.form.tag_ids,show:t.showThemeTag},on:{"update:show":function(i){t.showThemeTag=i},confirm:t.setTagIds}})],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动时间")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.start_date,placeholder:"请选择活动开始时间"},on:{click:function(i){t.showActivityTime=!0}}}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("ChoiceActivityTime",{attrs:{show:t.showActivityTime},on:{"update:show":function(i){t.showActivityTime=i},confirm:t.setStartDate}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动时长")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.duration.text,placeholder:"请选择活动时长"},on:{click:function(i){t.showActivityTimeLength=!0}}}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("HowLongSelector",{attrs:{show:t.showActivityTimeLength},on:{"update:show":function(i){t.showActivityTimeLength=i},confirm:t.setDuration}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动地点")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.formatActivityPlace,placeholder:"请选择活动地点"},on:{click:function(i){t.showActivitySite=!0}}}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("VenueSelector",{attrs:{show:t.showActivitySite},on:{"update:show":function(i){t.showActivitySite=i},confirm:t.setActivityPlace}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动类型")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.type,placeholder:"请选择活动类型"},on:{click:function(i){t.showActivityType=!0}}}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("ActivityTypeSelector",{attrs:{show:t.showActivityType},on:{"update:show":function(i){t.showActivityType=i},confirm:t.setActivityType}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("形式标签")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,placeholder:"请选择形式标签"},on:{click:function(i){t.showFormTag=!0}},scopedSlots:t._u([t.form.tfid.length?{key:"input",fn:function(){return[s("Tag",{attrs:{title:t.form.tfid[0].text,bigSize:"",active:"",close:""},nativeOn:{click:function(i){i.stopPropagation(),t.form.tfid=[]}}})]},proxy:!0}:null],null,!0)}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("NewActivitiesTagSelecter",{attrs:{dataUrl:"tag.formTagList",mulitiple:!1,cateName:"形式标签",selectedItems:t.form.tfid,show:t.showFormTag},on:{"update:show":function(i){t.showFormTag=i},confirm:t.setTfid}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("对象标签")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,placeholder:"请选择对象标签"},on:{click:function(i){t.showRoleTag=!0}},scopedSlots:t._u([t.form.trid.length?{key:"input",fn:function(){return[s("Tag",{attrs:{title:t.form.trid[0].text,bigSize:"",active:"",close:""},nativeOn:{click:function(i){i.stopPropagation(),t.form.trid=[]}}})]},proxy:!0}:null],null,!0)}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("NewActivitiesTagSelecter",{attrs:{dataUrl:"tag.roleTagList",mulitiple:!1,cateName:"对象标签",selectedItems:t.form.trid,show:t.showRoleTag},on:{"update:show":function(i){t.showRoleTag=i},confirm:t.setTrid}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("上报数据单位")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,placeholder:"请添加上报数据单位"},on:{click:function(i){t.showBelongTag=!0}},scopedSlots:t._u([t.form.dataunits.length?{key:"input",fn:function(){return[s("div",{staticClass:"flex-wrap"},t._l(t.form.dataunits,(function(i,e){return s("Tag",{key:e,staticStyle:{"margin-right":"10px"},attrs:{title:i.text,bigSize:"",active:"",close:""},nativeOn:{click:function(i){return i.stopPropagation(),t.removeDataUnit(e)}}})})),1)]},proxy:!0}:null],null,!0)}),s("van-image",{staticClass:"field-icon-style",attrs:{src:e(21098)}})],1),s("NewActivitiesTagSelecter",{attrs:{dataUrl:"tag.belongTagList",mulitiple:!0,cateName:"上报数据单位",selectedItems:t.form.dataunits,show:t.showBelongTag},on:{"update:show":function(i){t.showBelongTag=i},confirm:t.setDataUnits}})],1)],1),t.supplement?s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("学员人数(人)")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{type:"digit",placeholder:"请输入学员人数"},model:{value:t.form.visitor,callback:function(i){t.$set(t.form,"visitor",i)},expression:"form.visitor"}})],1)])],1):t._e(),s("li",{staticClass:"item-style flex"},[s("van-button",{staticClass:"submit-btn-style",attrs:{type:"primary",color:"#0077FF",block:"",round:""},nativeOn:{click:function(i){return t.doSub.apply(null,arguments)}}},[t._v(t._s(t.supplement?"完成":"发布"))])],1)])])},a=[],o={components:{Card:()=>e.e(3314).then(e.bind(e,53314)),NewActivitiesTagSelecter:()=>e.e(6429).then(e.bind(e,66429)),ActivityTypeSelector:()=>e.e(8114).then(e.bind(e,58114)),ChoiceActivityTime:()=>e.e(2287).then(e.bind(e,92287)),HowLongSelector:()=>e.e(9053).then(e.bind(e,49053)),VenueSelector:()=>e.e(1260).then(e.bind(e,1260)),HostSelector:()=>e.e(737).then(e.bind(e,70737)),Tag:()=>e.e(3750).then(e.bind(e,43750)),GiftListForm:()=>e.e(8639).then(e.bind(e,8639))},computed:{formatActivityPlace(){return this.form.province&&this.form.city&&this.form.district&&this.form.street?`${this.form.province} ${"-"===this.form.city?"":this.form.city} ${"-"===this.form.district?"":this.form.district} ${"-"===this.form.street?"":this.form.street}`:""}},data(){return{supplement:!1,form:{aid:{},title:"",tag_ids:[],dataunits:[],start_date:"",can_gift:!1,gift_ids:"[]",visitor:0,poster_img:"",file1:"",file2:"",duration:"",province:"",city:"",district:"",street:"",type:"",trid:[],tfid:[]},showActivityType:!1,showAssociationSelector:!1,showThemeTag:!1,showBelongTag:!1,showFormTag:!1,showRoleTag:!1,showActivityTime:!1,showActivityTimeLength:!1,showActivitySite:!1,showReportedDataUnit:!1,columns:[],giftList:[]}},watch:{"$store.getters.giftActiveList":function(t){this.giftList=t,this.setGiftIds()}},created(){console.log("created :>> "),this.supplement=this.$route.query.supplement},mounted(){const t=sessionStorage.getItem("selectAssociation");if(t){const i=JSON.parse(t);this.form.aid=i}this.giftList=this.$store.getters.giftActiveList,this.setGiftIds()},beforeDestroy(){console.log("beforDestory :>> "),sessionStorage.removeItem("selectAssociation")},methods:{initForm(){console.log("initForm :>> "),this.form.aid="",this.form.title="",this.form.tag_ids=[],this.form.dataunits=[],this.form.start_date="",this.form.can_gift=!1,this.form.gift_ids="[]",this.form.visitor=0,this.form.poster_img="",this.form.file1="",this.form.file2="",this.form.duration="",this.form.province="",this.form.city="",this.form.district="",this.form.street="",this.form.type="",this.form.trid=[],this.form.tfid=[]},setGiftIds(){const t=[];for(const i of this.giftList)t.push(i.id);console.log("arr :>> ",t),this.form.gift_ids=JSON.stringify(t)},validateForm(){let t=JSON.parse(JSON.stringify(this.form));return t.title?t.tag_ids.length?(t.tag_ids=JSON.stringify(t.tag_ids.map((t=>t.id))),t.start_date?t.duration.value?(t.duration=t.duration.value,t.province?t.type?t.tfid.length?(t.tfid=t.tfid[0].id,t.trid.length?(t.trid=t.trid[0].id,t.dataunits.length?(t.dataunits=JSON.stringify(t.dataunits.map((t=>t.id))),t):(this.$toast("请添加上报数据单位"),this.showBelongTag=!0,null)):(this.$toast("请选择对象标签"),this.showRoleTag=!0,null)):(this.$toast("请选择形式标签"),this.showFormTag=!0,null):(this.$toast("请选择活动类型"),this.showActivityType=!0,null):(this.$toast("请选择活动地点"),this.showActivitySite=!0,null)):(this.$toast("请选择活动时长"),this.showActivityTimeLength=!0,null):(this.$toast("请选择活动开始时间"),this.showActivityTime=!0,null)):(this.$toast("请添加活动标签"),this.showThemeTag=!0,null):(this.$toast("请输入活动的主题名称"),null)},async doSub(){let t=this.validateForm();const i=this.$store.getters.hostMenberMe.hid,e=this.$store.getters.accountIdInfo.iid,s=this.$store.getters.associationInfo.id;if(t.hid=i,t.iid=e,t.aid=s,t){const i=await this.$request("lecture.lectureCreateHost",t);if(this.supplement)return void this.$router.replace("/historicalEventCollectionStatus");let e=i;this.initForm(),this.$store.commit("gift/initGiftActiveList"),this.$router.replace("/activityDetail?id="+e)}},setDataUnits(t){this.form.dataunits=t},removeDataUnit(t){this.form.dataunits.splice(t,1)},setTfid(t){this.form.tfid=t},setTrid(t){this.form.trid=t},setActivityType(t){this.form.type=t},setActivityPlace(t){this.form.province=t.province,this.form.city=t.city,this.form.district=t.district,this.form.street=t.street},setDuration(t){this.form.duration=t},setStartDate(t){console.log("val :>> ",t),this.form.start_date=this.$dateFormat(t,"yyyy-mm-dd HH:MM:ss")},setHostInfo(t){this.form.hid=t},removeThemeTag(t){this.form.tag_ids.splice(t,1)},setTagIds(t){this.form.tag_ids=t||[]},onConfirm(){}}},r=o,l=e(1001),c=(0,l.Z)(r,s,a,!1,null,"f7d3bd1c",null),n=c.exports},16919:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxpJREFUWEfFl81rE1EQwH+zmyZN2trUNlgRRES9FcRDEUQQD/4FfrSKoghFhWJBiooIAW+KUCgI9qBiQRARL4IXDx68iBc/LqIgRVGq/SRNE5Lu7pO3SWvSNs3bNOI7LvPxmzfzdmYE46OE00QIE6GdEBlCCJavrvCI4TCFQ54cD8iBKBPTUlXoiLLZQgsQJUx1eW0wj3aeJU6KpHhr+VjDoBL6acGmydjxck8aJEWaezJXCWJ1AB31VtqwCVe9IROBLAuMM80TcZeLrwRIqhAztBPBNrFtLJPD5SeTyyHKAXTkO+nAqbPzRUoPh2YmS+uiHKBfJYjSYBxVLYIueW7L5KLqX4B+tYEozbXYrEFnjpuFwiwA6LzPkjCudpftCD+w9Huv4ejXEeeXTkUBYEDFCRMzMqXYh/AY+ITLYWxmjfSWC2VJMywpASUM0GkcPXQjPAUsPD4gHAUqvvOKcGk87si40KdixIkHjKIXuIX4KXyLRy9CNqAN/a+ckkDXX+rB4wwWN4oQr8lxkjD5gBBzwlWVwK356Z1DuO479XhJjrM04hhDzJMTBlXnUlcz1iwTHEAY9L8ongPnfRyT4+HoFGwOUICVzF5DuFCEGAWumPjXXbM+ABa7ULwAGlF8B/aaA1xUm9bVeFy6sHmEsBFII5zC440RQA5XuKQ61tF2u4GHiD+wzOBwApv3Rs61kEteuKxaUTQZKy0KKvYj3EeIoviNxzEsPgeyI8wLSdVIxr8+86M4hMVdIOzn3KGHEGPmBoqSC8wE/xUr9mDxDAih+IKiB2E8sHPdkIYYD96MPA5iM4riIx7HsZgO7Fwr5MkwJLMFgAMqxO5A7XgHLt9q+PUWWHX075jglTj/ZyAptmLNUjKS+WN4xz8fyfSEPCwTi2lbOZRuI7HO3lC5JPQGNcZE6WS8cizvUw200l53iBAuYaZISlm3XH0x0UXZRVvd0hFoMVm6wDqtZhkyjJCqtKxWXzZ1SmL+rzrYchohw1fSq61jpUVSHaD0RvR63kIYjwai2P4GpTdm/a51judZwCXHiJ4PzdbzP/nmA0TmI5G3AAAAAElFTkSuQmCC"},21098:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4pJREFUWEfFV0tvI0UQ7redNSYxG5MlEtIojLyyPAdbEQcucEDiAAcOXJEQCITEgf/BX1iyIHHgyt/Yc5QoSmSFOSxRIDjZZOLHTD8KlRlbGyfO9jhB1Lm66uvq6vq+osTfaBAEJcZYSSkl0Ky1DI9zzp0xxmRZZpxzaRzHKSEEfEJTDyceBEF1aWlpqVwu+/iT0WgEw+FwGMfxBSHE3ZbjtoA0DMOqlLLim3g2EQJxzl3u7+8n80DMA8AbjUatUqkojwq90iVJEt3tdk8JIXbW+SYAIoqih1JK/srIBRy01nZnZ+fvWRCzAHgURav3nXyC01prtre3EcS0L64ACMOwXq1WZYGLFXbt9/vZwcEBghjbFEAYhq9Xq9XXCkdc4MBgMEgmjTkBIJrNZt2327XWq865F6VSySyQf/xN9/b2/sSnGAMIgmClVqs98AlmrX1HCPENIeSYEPIEAAY+52Z9kiS57Ha7FwiANpvNR763B4CAc/4tpZQBwHOt9RPOOU6+QpZlmdvd3T2m6+vrD9bW1laKnAaAdxljnzHGKADEzrktQoguEgN9kyTp0Xa7vUIp9Sr/TIL3KKWfIgjnXDfLsp+klNcGzW2gsBlpp9OpE0IW/Xrvc84/wSTOuT1jzC9ITL6VGA6HKW21Wo+UUmNWW9A+5Jx/hGeNMdsA8CtjzIsJcTBhA77l24DzAALAx0KID/JKPAOA33wug9/xvgC8yRj7njEmAeDUOfeDN4AoitbuMvu11utKqa8ZYxUASK21P1NKf/cBgARFG43G6qK0q7UOSqXSl5TSsnNukKbpU6XUc5/k6IO8QDc2NpaXl5crvocmfsaYUEr5BWNMAcCFMWaLMYbj1dvOz8/7qPPKtVrtDe9T/zo2GWOfU0oFvnmWZVtCiF7BGOTk5OSs8Ci21r4tpfwuH8V/ZVn2oxACtV8hywnpuDAZOeceSym/AoA/rLVPKaX9Qplz57Ozs0Ecxy8WomNCSF1rfVp09E6A5rc/wdn1vwiSCRUjoJclGcrw1f9akuUKGW8/tmuitNVq1e/IDXNbItcAmHzKmtdk+ebmphyNRg/vG0Quy/GrXpFx8xYT0el0aneg6StVKLqYTJ/nPlazNE0Hh4eHOCdupGifZVO22+1KmqaFltM88eVN69jL5fEBMK0IrudCCNzNpVKKa605agn81zgTAED3er306Oho6Lue/wMrlbxspywbmgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=2988.c4409385.js.map