(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cdcbce8"],{"59f3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{attrs:{id:"SVGPathTracer"}},[n("h3",[t._v("Type an "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d",target:"_blank"}},[t._v("path definition")])]),n("v-text-field",{attrs:{solo:"",placeholder:"i.e. M820,560 L620,460",required:""},model:{value:t.definition,callback:function(e){t.definition=e},expression:"definition"}}),n("v-divider"),n("br"),n("v-text-field",{attrs:{value:t.path.x,label:"X:",readonly:""}}),n("v-text-field",{attrs:{value:t.path.y,label:"Y:",readonly:""}})],1)},i=[],r=(n("a9e3"),n("aff5"),document.createElementNS("http://www.w3.org/2000/svg","path")),o={name:"SVGPathTracer",data:function(){return{_definition:"",path:{x:0,y:0}}},computed:{definition:{get:function(){return this._definition},set:function(t){r.setAttribute("d",t),this.path=r.getPointAtLength(Number.MAX_SAFE_INTEGER)}}},created:function(){this.$store.state.title="SVG :: Path tracer"}},l=o,d=n("2877"),c=n("6544"),u=n.n(c),s=n("a75b"),f=n("ce7e"),h=n("8654"),p=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=p.exports;u()(p,{VContent:s["a"],VDivider:f["a"],VTextField:h["a"]})},aff5:function(t,e,n){var a=n("23e7");a({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})}}]);
//# sourceMappingURL=chunk-3cdcbce8.7627d548.js.map