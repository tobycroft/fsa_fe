"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8277],{88277:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"historical-events-collection-editor-container"},[i("ul",{staticClass:"list-style"},[i("li",{staticClass:"item-style"},[i("p",{staticClass:"title-style"},[t._v("活动主题")]),i("Card",{staticClass:"card-style"},[i("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入活动的主题名称","show-word-limit":"",border:!1},model:{value:t.form.nameTheActivityTheme,callback:function(e){t.$set(t.form,"nameTheActivityTheme",e)},expression:"form.nameTheActivityTheme"}}),i("div",{staticClass:"label-management-box flex"},[i("p",{staticClass:"label-management-title"},[t._v("标签管理")]),i("div",{staticClass:"label-management-new-tag-box flex-end",on:{click:function(e){t.showLabelManagement=!0}}},[i("p",[t._v("添加标签")]),i("van-image",{staticClass:"label-management-new-tag-icon",attrs:{src:a(16919)}})],1)])],1),i("MultiSelector",{attrs:{show:t.showLabelManagement},on:{"update:show":function(e){t.showLabelManagement=e}}})],1),i("li",{staticClass:"item-style"},[i("p",{staticClass:"title-style"},[t._v("举办单位")]),i("Card",{staticClass:"card-style"},[i("van-field",{attrs:{placeholder:"请输入举办单位单位全称",border:!1},model:{value:t.form.hostUnits,callback:function(e){t.$set(t.form,"hostUnits",e)},expression:"form.hostUnits"}})],1)],1),i("li",{staticClass:"item-style"},[i("p",{staticClass:"title-style"},[t._v("活动时间")]),i("Card",{staticClass:"card-style"},[i("div",{staticClass:"flex"},[i("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.activityTime,placeholder:"请选择活动开始时间"},on:{click:function(e){t.showActivityTime=!0}}}),i("van-image",{staticClass:"field-icon-style",attrs:{src:a(21098)}})],1),i("ChoiceActivityTime",{attrs:{show:t.showActivityTime},on:{"update:show":function(e){t.showActivityTime=e}}})],1)],1),i("li",{staticClass:"item-style"},[i("p",{staticClass:"title-style"},[t._v("活动地点")]),i("Card",{staticClass:"card-style"},[i("div",{staticClass:"flex"},[i("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.activitySite,placeholder:"请选择活动地点"},on:{click:function(e){t.showActivitySite=!0}}}),i("van-image",{staticClass:"field-icon-style",attrs:{src:a(21098)}})],1),i("VenueSelector",{attrs:{show:t.showActivitySite},on:{"update:show":function(e){t.showActivitySite=e}}})],1)],1),i("li",{staticClass:"item-style"},[i("p",{staticClass:"title-style"},[t._v("学员人数")]),i("Card",{staticClass:"card-style"},[i("van-field",{attrs:{type:"number",placeholder:"请输入学员人数",border:!1},model:{value:t.form.numberStudents,callback:function(e){t.$set(t.form,"numberStudents",e)},expression:"form.numberStudents"}})],1)],1),i("li",{staticClass:"item-style flex"},[i("van-button",{staticClass:"submit-btn-style",attrs:{type:"primary",color:"#0077FF",block:"",round:""}},[t._v("完成")])],1)])])},s=[],n=a(16198),l=(a(35666),a(41539),a(78783),a(33948),{components:{Card:function(){return a.e(3314).then(a.bind(a,53314))},MultiSelector:function(){return a.e(8039).then(a.bind(a,48039))},ChoiceActivityTime:function(){return a.e(2287).then(a.bind(a,92287))},VenueSelector:function(){return a.e(1260).then(a.bind(a,1260))}},data:function(){return{form:{nameTheActivityTheme:"",hostUnits:"",activityTime:"",activitySite:"",numberStudents:""},showLabelManagement:!1,showActivityTime:!1,showActivitySite:!1}},methods:{onConfirm:function(){},lectureCreateAssociationAPI:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$store.getters.associationInfo.id,i={aid:a},e.next=4,t.$request("lecture.lectureCreateAssociation",i);case 4:s=e.sent,console.log("res :>> ",s);case 6:case"end":return e.stop()}}),e)})))()}}}),r=l,c=a(1001),o=(0,c.Z)(r,i,s,!1,null,"5def9c1a",null),A=o.exports},16919:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxpJREFUWEfFl81rE1EQwH+zmyZN2trUNlgRRES9FcRDEUQQD/4FfrSKoghFhWJBiooIAW+KUCgI9qBiQRARL4IXDx68iBc/LqIgRVGq/SRNE5Lu7pO3SWvSNs3bNOI7LvPxmzfzdmYE46OE00QIE6GdEBlCCJavrvCI4TCFQ54cD8iBKBPTUlXoiLLZQgsQJUx1eW0wj3aeJU6KpHhr+VjDoBL6acGmydjxck8aJEWaezJXCWJ1AB31VtqwCVe9IROBLAuMM80TcZeLrwRIqhAztBPBNrFtLJPD5SeTyyHKAXTkO+nAqbPzRUoPh2YmS+uiHKBfJYjSYBxVLYIueW7L5KLqX4B+tYEozbXYrEFnjpuFwiwA6LzPkjCudpftCD+w9Huv4ejXEeeXTkUBYEDFCRMzMqXYh/AY+ITLYWxmjfSWC2VJMywpASUM0GkcPXQjPAUsPD4gHAUqvvOKcGk87si40KdixIkHjKIXuIX4KXyLRy9CNqAN/a+ckkDXX+rB4wwWN4oQr8lxkjD5gBBzwlWVwK356Z1DuO479XhJjrM04hhDzJMTBlXnUlcz1iwTHEAY9L8ongPnfRyT4+HoFGwOUICVzF5DuFCEGAWumPjXXbM+ABa7ULwAGlF8B/aaA1xUm9bVeFy6sHmEsBFII5zC440RQA5XuKQ61tF2u4GHiD+wzOBwApv3Rs61kEteuKxaUTQZKy0KKvYj3EeIoviNxzEsPgeyI8wLSdVIxr8+86M4hMVdIOzn3KGHEGPmBoqSC8wE/xUr9mDxDAih+IKiB2E8sHPdkIYYD96MPA5iM4riIx7HsZgO7Fwr5MkwJLMFgAMqxO5A7XgHLt9q+PUWWHX075jglTj/ZyAptmLNUjKS+WN4xz8fyfSEPCwTi2lbOZRuI7HO3lC5JPQGNcZE6WS8cizvUw200l53iBAuYaZISlm3XH0x0UXZRVvd0hFoMVm6wDqtZhkyjJCqtKxWXzZ1SmL+rzrYchohw1fSq61jpUVSHaD0RvR63kIYjwai2P4GpTdm/a51judZwCXHiJ4PzdbzP/nmA0TmI5G3AAAAAElFTkSuQmCC"},21098:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4pJREFUWEfFV0tvI0UQ7redNSYxG5MlEtIojLyyPAdbEQcucEDiAAcOXJEQCITEgf/BX1iyIHHgyt/Yc5QoSmSFOSxRIDjZZOLHTD8KlRlbGyfO9jhB1Lm66uvq6vq+osTfaBAEJcZYSSkl0Ky1DI9zzp0xxmRZZpxzaRzHKSEEfEJTDyceBEF1aWlpqVwu+/iT0WgEw+FwGMfxBSHE3ZbjtoA0DMOqlLLim3g2EQJxzl3u7+8n80DMA8AbjUatUqkojwq90iVJEt3tdk8JIXbW+SYAIoqih1JK/srIBRy01nZnZ+fvWRCzAHgURav3nXyC01prtre3EcS0L64ACMOwXq1WZYGLFXbt9/vZwcEBghjbFEAYhq9Xq9XXCkdc4MBgMEgmjTkBIJrNZt2327XWq865F6VSySyQf/xN9/b2/sSnGAMIgmClVqs98AlmrX1HCPENIeSYEPIEAAY+52Z9kiS57Ha7FwiANpvNR763B4CAc/4tpZQBwHOt9RPOOU6+QpZlmdvd3T2m6+vrD9bW1laKnAaAdxljnzHGKADEzrktQoguEgN9kyTp0Xa7vUIp9Sr/TIL3KKWfIgjnXDfLsp+klNcGzW2gsBlpp9OpE0IW/Xrvc84/wSTOuT1jzC9ITL6VGA6HKW21Wo+UUmNWW9A+5Jx/hGeNMdsA8CtjzIsJcTBhA77l24DzAALAx0KID/JKPAOA33wug9/xvgC8yRj7njEmAeDUOfeDN4AoitbuMvu11utKqa8ZYxUASK21P1NKf/cBgARFG43G6qK0q7UOSqXSl5TSsnNukKbpU6XUc5/k6IO8QDc2NpaXl5crvocmfsaYUEr5BWNMAcCFMWaLMYbj1dvOz8/7qPPKtVrtDe9T/zo2GWOfU0oFvnmWZVtCiF7BGOTk5OSs8Ci21r4tpfwuH8V/ZVn2oxACtV8hywnpuDAZOeceSym/AoA/rLVPKaX9Qplz57Ozs0Ecxy8WomNCSF1rfVp09E6A5rc/wdn1vwiSCRUjoJclGcrw1f9akuUKGW8/tmuitNVq1e/IDXNbItcAmHzKmtdk+ebmphyNRg/vG0Quy/GrXpFx8xYT0el0aneg6StVKLqYTJ/nPlazNE0Hh4eHOCdupGifZVO22+1KmqaFltM88eVN69jL5fEBMK0IrudCCNzNpVKKa605agn81zgTAED3er306Oho6Lue/wMrlbxspywbmgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=8277-legacy.7fa5d755.js.map