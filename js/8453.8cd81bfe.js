"use strict";(self["webpackChunkhome_research_h5"]=self["webpackChunkhome_research_h5"]||[]).push([[8453],{98453:function(t,a,e){e.r(a),e.d(a,{default:function(){return o}});var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"package-list-row-container",on:{click:t.onChoose}},[t.data?s("Card",{staticClass:"card-style",attrs:{active:t.active}},[s("main",{staticClass:"flex-start"},[s("Avatar",{attrs:{width:88,height:88,imgUrl:t.data.img}}),s("div",{staticClass:"main-info-box"},[s("p",{staticClass:"main-info-title"},[t._v(t._s(t.data.title))]),s("van-tag",{attrs:{color:"#03C76B",plain:""}},[t._v(t._s(t.data.type))])],1)],1),s("footer",[t._v(t._s(t.data.content))]),s("van-image",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"active-icon-style",attrs:{src:e(22519)}})],1):t._e()],1)},i=[],c={props:{data:{type:Object,default:()=>{}}},data(){return{active:!1}},components:{Card:()=>e.e(3314).then(e.bind(e,53314)),Avatar:()=>e.e(799).then(e.bind(e,799))},methods:{onChoose(){this.active=!this.active,this.active?this.$store.dispatch("gift/addGiftActiveList",this.data):this.$store.dispatch("gift/removeGiftActiveList",this.data),this.$emit("choose",this.$store.getters.giftActiveList)}}},A=c,r=e(1001),h=(0,r.Z)(A,s,i,!1,null,"25fb5192",null),o=h.exports},22519:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABChJREFUWEfVmW1oW2UUx38n6esEYTJUKNatTrTug1LRMQXfqh9UJuvGZC5t12G7WVREXJNZYRRUtqUKdQOxi29fZpu2sR2bfpKBfhD3plZRYYgWdLMOhoow27rmyJP0kibNzX1JZvXJt9xz/ud3/0/uk+c5V/Aztmk5S1mN0gg0AMsRrgKWzsn9hvIrMAGMI3zED3zGsMx4LSeeErr0aqCdAB1AradcOIMSA2JE5azbXHeAO/RKguwGQkClW/G8cco0wntM8wJ98ouTljNgl7YSoG/e9Dlpur3+B8qTROVgoQR7wPTv7ADQ5rai5zjFfF5lgp0My2y+/PyAT2slVQwTYK3nov4SRqlmMz0ylZu+EHCjBqkjDmzwV8t31mGqWU+PXJyvsBAwoq8Dnb7LFJOoHCAq2+0BI7oJGCimRgly17FXDlk6GQef02UE+Q5hWQmK+JdQJpmhnj753YhkAMPaj7DNv3IJM5V9ROWZDGBEzb/C6aIX4dIxXmCalWYhTzsY0V5gR+n0S6Ck7CYq3QIqRPgJqCmBbEGJ1ddASwOc+hneOeVY7QzV1AphvR3hmGN4kQEP3gCjLVBZlhZqT8BbJxxElTVCRLuBl4usXzA9F84E9x+DJ0Ydqz5vHEwgrHcM9Rmwth6GQxnnjMzFJDTG4JMfHUWHjIPfADc5hvoIePhGeL8ZKuam1YJ7bABGvnYlOG4cPI9wRaHwsgDsaoSGGogdh0PfOos/Ug8jzVAezMQa50IDMOQODpRzxsFpoKJQyfBdsPehdERS4fEReLfAU2imNZEDN5uETe6ds3BmXAHGNkD7bdm30JGAN/M8hU2rIL452zkD1xyHwXFn53MiplxN8a018PF2uGyez6rQOZZ+Gq1hCzcIg195hjNTPGkc/BK42Sn97jr4sA2W2EDawYUGIe4HLg00bgDN5vRRJ0Bz/Z46+CAH0nz/9klobQDzMFkjNa1+ncvIpJaZnZA6sbka9xrIrVBdbh9u4Ip0zhJPLdSe/+ruuw6OtOWHLCGc+Q2u8b1ZuH8lHN4CVfOcLCmcOeinNgtmhHUPZk/jcTxwPYy1pB+cv2ehdcjXUpK/qvAie2SXtR+sRTmNeO8a1FwOd14Ln5+F7897vEP78JwNqwlczNNcLqjSR1SeNV//jw5NaRfNemjWxcUbShNRGbMAFh7cw7of4alFIVTeICpZTYP/TutDOcISmpxbH8a6jVrBCuII6/4lJxNcIMR+MVu/rGHffuvRMv5KdUQvffutV7rsjHBuYEa0Gdh3SRqYSTrplYK9IGdAc2umb1PGS8AWoKrIaTfTeJApunlNTKO94HAHaEmkG0wdcz2c5U7iWdc11RzoJ0mMV+Sc21xvgJZqjwb4kzsIpl5D3IKwAjBvADKvIWAy9RpC+QLlKBN8atfmLQT7D3YrT9Aq0yxUAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=8453.8cd81bfe.js.map