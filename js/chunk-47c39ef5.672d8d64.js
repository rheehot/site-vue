(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47c39ef5"],{"999f":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",{attrs:{id:"RotateRainbowball"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000"}},[t._l(t.circles,(function(t){return e("circle",{key:t,attrs:{cx:t.x,cy:t.y,r:t.radius,stroke:t.color,"stroke-width":"5",fill:"none"}})})),t._l(t.balls,(function(t){return e("circle",{key:t,attrs:{cx:t.x,cy:t.y,r:t.radius,fill:t.color}})}))],2)])},a=[],r=(e("99af"),e("d3b7"),e("25f0"),e("99de")),s=e("7e84"),o=e("262e"),c=e("d4ec"),l=e("bee2"),u=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(c["a"])(this,t),this.x=n,this.y=e}return Object(l["a"])(t,[{key:"add",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)return new t(this.x,this.y).add(n);if(n instanceof t)this.x+=n.x,this.y+=n.y;else{if(isNaN(n))throw Error(n+" is not Vector2 or number");this.x+=n,this.y+=n}return this}},{key:"subtract",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)return new t(this.x,this.y).subtract(n);if(n instanceof t)this.x-=n.x,this.y-=n.y;else{if(isNaN(n))throw Error(n+" is not Vector2 or number");this.x-=n,this.y-=n}return this}},{key:"multiply",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)return new t(this.x,this.y).multiply(n);if(n instanceof t)this.x*=n.x,this.y*=n.y;else{if(isNaN(n))throw Error(n+" is not Vector2 or number");this.x*=n,this.y*=n}return this}}]),t}(),h=function(){function t(){Object(c["a"])(this,t)}return Object(l["a"])(t,null,[{key:"toHex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t/=360;var e,i,a,r=1,s=.5,o=function(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t},c=s<.5?s*(1+r):s+r-s*r,l=2*s-c;e=o(l,c,t+1/3),i=o(l,c,t),a=o(l,c,t-1/3);var u=function(t){var n=Math.round(255*t).toString(16);return 1===n.length?"0"+n:n};return"#".concat(u(e)).concat(u(i)).concat(u(a)).concat(u(n))}}]),t}(),f=function(){function t(){Object(c["a"])(this,t)}return Object(l["a"])(t,null,[{key:"angleToDirection",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n&&(t=t*Math.PI/180),new u(-Math.sin(t),-Math.cos(t))}},{key:"vecToAngle",value:function(t,n){return 180*Math.atan2(t.y-n.y,t.x-n.x)/Math.PI}}]),t}(),d=function(t){function n(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Object(c["a"])(this,n),t=Object(r["a"])(this,Object(s["a"])(n).call(this,e,i)),t.radius=a,t.color=null===o?"#00000000":o,t}return Object(o["a"])(n,t),n}(u),v=function(t){function n(t,e,i){var a;Object(c["a"])(this,n);var o=f.angleToDirection(30*t,!0);o.multiply(e),a=Object(r["a"])(this,Object(s["a"])(n).call(this,o.x+500,o.y+500,i)),a.index=t,a.angle=Math.PI/2+Math.PI/12*t,a.startAngle=a.angle,a.enable=!1,a.balls=[];for(var l=0;l<2;++l)a.balls.push(new d(0,0,20));return a.renderBalls(),a}return Object(o["a"])(n,t),Object(l["a"])(n,[{key:"renderBalls",value:function(){var t=f.angleToDirection(this.angle+this.index*Math.PI/12).multiply(this.radius),n=[this.add(t,!0),this.subtract(t,!0)];for(var e in n){var i=this.balls[e];i.x=n[e].x,i.y=n[e].y,i.color=h.toHex(f.vecToAngle(i,new u(500,500))+120)}}}]),n}(d),b={name:"RotateRainbowball",data:function(){return{circles:[],rotate_radius:320,circle_radius:135}},computed:{balls:function(){var t=[];for(var n in this.circles)for(var e in this.circles[n].balls)t.push(this.circles[n].balls[e]);return t}},methods:{requestAnimationFrame:function(){var t=new u(500,500);for(var n in this.circles){var e=this.circles[n];if(e.enable){e.angle-=Math.PI/90,e.angle+Math.PI<e.startAngle?(e.angle=e.startAngle,e.enable=!1):e.angle+Math.PI/5<e.startAngle&&(this.circles[0==n?11:n-1].enable=!0);var i=Math.abs(e.angle-e.startAngle+Math.PI/2),a=f.vecToAngle(e,t)+120,r=i<Math.PI/2?1-i/Math.PI*1.8:0;e.color=h.toHex(a,r),e.renderBalls()}}window.requestAnimationFrame(this.requestAnimationFrame)}},mounted:function(){for(var t=0;t<12;++t)this.circles.push(new v(t,this.rotate_radius,this.circle_radius));this.circles[0].enable=!0,this.requestAnimationFrame()}},g=b,y=e("2877"),x=e("6544"),p=e.n(x),w=e("a75b"),m=Object(y["a"])(g,i,a,!1,null,null,null);n["default"]=m.exports;p()(m,{VContent:w["a"]})},a75b:function(t,n,e){"use strict";e("daaf");var i=e("d10f");n["a"]=i["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,i=t.right,a=t.footer,r=t.insetFooter,s=t.bottom,o=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(a+r+s,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var n={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,n,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},daaf:function(t,n,e){}}]);
//# sourceMappingURL=chunk-47c39ef5.672d8d64.js.map