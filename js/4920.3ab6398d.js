"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[4920],{14920:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"historical-events-collection-editor-container"},[s("ul",{staticClass:"list-style"},[s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动主题")]),s("Card",{staticClass:"card-style"},[s("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入活动的主题名称","show-word-limit":"",border:!1},model:{value:t.form.nameTheActivityTheme,callback:function(e){t.$set(t.form,"nameTheActivityTheme",e)},expression:"form.nameTheActivityTheme"}}),s("div",{staticClass:"label-management-box flex"},[s("p",{staticClass:"label-management-title"},[t._v("标签管理")]),s("div",{staticClass:"label-management-new-tag-box flex-end",on:{click:function(e){t.showLabelManagement=!0}}},[s("p",[t._v("添加标签")]),s("van-image",{staticClass:"label-management-new-tag-icon",attrs:{src:a(16919)}})],1)])],1),s("MultiSelector",{attrs:{show:t.showLabelManagement},on:{"update:show":function(e){t.showLabelManagement=e}}})],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("举办单位")]),s("Card",{staticClass:"card-style"},[s("van-field",{attrs:{placeholder:"请输入举办单位单位全称",border:!1},model:{value:t.form.hostUnits,callback:function(e){t.$set(t.form,"hostUnits",e)},expression:"form.hostUnits"}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动时间")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.activityTime,placeholder:"请选择活动开始时间"},on:{click:function(e){t.showActivityTime=!0}}}),s("van-image",{staticClass:"field-icon-style",attrs:{src:a(21098)}})],1),s("ChoiceActivityTime",{attrs:{show:t.showActivityTime},on:{"update:show":function(e){t.showActivityTime=e}}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("活动地点")]),s("Card",{staticClass:"card-style"},[s("div",{staticClass:"flex"},[s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",border:!1,value:t.form.activitySite,placeholder:"请选择活动地点"},on:{click:function(e){t.showActivitySite=!0}}}),s("van-image",{staticClass:"field-icon-style",attrs:{src:a(21098)}})],1),s("VenueSelector",{attrs:{show:t.showActivitySite},on:{"update:show":function(e){t.showActivitySite=e}}})],1)],1),s("li",{staticClass:"item-style"},[s("p",{staticClass:"title-style"},[t._v("学员人数")]),s("Card",{staticClass:"card-style"},[s("van-field",{attrs:{type:"number",placeholder:"请输入学员人数",border:!1},model:{value:t.form.numberStudents,callback:function(e){t.$set(t.form,"numberStudents",e)},expression:"form.numberStudents"}})],1)],1),s("li",{staticClass:"item-style flex"},[s("van-button",{staticClass:"submit-btn-style",attrs:{type:"primary",color:"#0077FF",block:"",round:""}},[t._v("完成")])],1)])])},i=[],l={components:{Card:()=>a.e(3314).then(a.bind(a,53314)),MultiSelector:()=>a.e(8039).then(a.bind(a,48039)),ChoiceActivityTime:()=>a.e(8259).then(a.bind(a,28259)),VenueSelector:()=>a.e(9194).then(a.bind(a,19194))},data(){return{form:{nameTheActivityTheme:"",hostUnits:"",activityTime:"",activitySite:"",numberStudents:""},showLabelManagement:!1,showActivityTime:!1,showActivitySite:!1}},methods:{onConfirm(){},async lectureCreateAssociationAPI(){const t={},e=await this.$request("lecture.lectureCreateAssociation",t);console.log("res :>> ",e)}}},c=l,n=a(1001),r=(0,n.Z)(c,s,i,!1,null,"6a826ba3",null),o=r.exports},16919:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxpJREFUWEfFl81rE1EQwH+zmyZN2trUNlgRRES9FcRDEUQQD/4FfrSKoghFhWJBiooIAW+KUCgI9qBiQRARL4IXDx68iBc/LqIgRVGq/SRNE5Lu7pO3SWvSNs3bNOI7LvPxmzfzdmYE46OE00QIE6GdEBlCCJavrvCI4TCFQ54cD8iBKBPTUlXoiLLZQgsQJUx1eW0wj3aeJU6KpHhr+VjDoBL6acGmydjxck8aJEWaezJXCWJ1AB31VtqwCVe9IROBLAuMM80TcZeLrwRIqhAztBPBNrFtLJPD5SeTyyHKAXTkO+nAqbPzRUoPh2YmS+uiHKBfJYjSYBxVLYIueW7L5KLqX4B+tYEozbXYrEFnjpuFwiwA6LzPkjCudpftCD+w9Huv4ejXEeeXTkUBYEDFCRMzMqXYh/AY+ITLYWxmjfSWC2VJMywpASUM0GkcPXQjPAUsPD4gHAUqvvOKcGk87si40KdixIkHjKIXuIX4KXyLRy9CNqAN/a+ckkDXX+rB4wwWN4oQr8lxkjD5gBBzwlWVwK356Z1DuO479XhJjrM04hhDzJMTBlXnUlcz1iwTHEAY9L8ongPnfRyT4+HoFGwOUICVzF5DuFCEGAWumPjXXbM+ABa7ULwAGlF8B/aaA1xUm9bVeFy6sHmEsBFII5zC440RQA5XuKQ61tF2u4GHiD+wzOBwApv3Rs61kEteuKxaUTQZKy0KKvYj3EeIoviNxzEsPgeyI8wLSdVIxr8+86M4hMVdIOzn3KGHEGPmBoqSC8wE/xUr9mDxDAih+IKiB2E8sHPdkIYYD96MPA5iM4riIx7HsZgO7Fwr5MkwJLMFgAMqxO5A7XgHLt9q+PUWWHX075jglTj/ZyAptmLNUjKS+WN4xz8fyfSEPCwTi2lbOZRuI7HO3lC5JPQGNcZE6WS8cizvUw200l53iBAuYaZISlm3XH0x0UXZRVvd0hFoMVm6wDqtZhkyjJCqtKxWXzZ1SmL+rzrYchohw1fSq61jpUVSHaD0RvR63kIYjwai2P4GpTdm/a51judZwCXHiJ4PzdbzP/nmA0TmI5G3AAAAAElFTkSuQmCC"},21098:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4pJREFUWEfFV0tvI0UQ7redNSYxG5MlEtIojLyyPAdbEQcucEDiAAcOXJEQCITEgf/BX1iyIHHgyt/Yc5QoSmSFOSxRIDjZZOLHTD8KlRlbGyfO9jhB1Lm66uvq6vq+osTfaBAEJcZYSSkl0Ky1DI9zzp0xxmRZZpxzaRzHKSEEfEJTDyceBEF1aWlpqVwu+/iT0WgEw+FwGMfxBSHE3ZbjtoA0DMOqlLLim3g2EQJxzl3u7+8n80DMA8AbjUatUqkojwq90iVJEt3tdk8JIXbW+SYAIoqih1JK/srIBRy01nZnZ+fvWRCzAHgURav3nXyC01prtre3EcS0L64ACMOwXq1WZYGLFXbt9/vZwcEBghjbFEAYhq9Xq9XXCkdc4MBgMEgmjTkBIJrNZt2327XWq865F6VSySyQf/xN9/b2/sSnGAMIgmClVqs98AlmrX1HCPENIeSYEPIEAAY+52Z9kiS57Ha7FwiANpvNR763B4CAc/4tpZQBwHOt9RPOOU6+QpZlmdvd3T2m6+vrD9bW1laKnAaAdxljnzHGKADEzrktQoguEgN9kyTp0Xa7vUIp9Sr/TIL3KKWfIgjnXDfLsp+klNcGzW2gsBlpp9OpE0IW/Xrvc84/wSTOuT1jzC9ITL6VGA6HKW21Wo+UUmNWW9A+5Jx/hGeNMdsA8CtjzIsJcTBhA77l24DzAALAx0KID/JKPAOA33wug9/xvgC8yRj7njEmAeDUOfeDN4AoitbuMvu11utKqa8ZYxUASK21P1NKf/cBgARFG43G6qK0q7UOSqXSl5TSsnNukKbpU6XUc5/k6IO8QDc2NpaXl5crvocmfsaYUEr5BWNMAcCFMWaLMYbj1dvOz8/7qPPKtVrtDe9T/zo2GWOfU0oFvnmWZVtCiF7BGOTk5OSs8Ci21r4tpfwuH8V/ZVn2oxACtV8hywnpuDAZOeceSym/AoA/rLVPKaX9Qplz57Ozs0Ecxy8WomNCSF1rfVp09E6A5rc/wdn1vwiSCRUjoJclGcrw1f9akuUKGW8/tmuitNVq1e/IDXNbItcAmHzKmtdk+ebmphyNRg/vG0Quy/GrXpFx8xYT0el0aneg6StVKLqYTJ/nPlazNE0Hh4eHOCdupGifZVO22+1KmqaFltM88eVN69jL5fEBMK0IrudCCNzNpVKKa605agn81zgTAED3er306Oho6Lue/wMrlbxspywbmgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=4920.3ab6398d.js.map