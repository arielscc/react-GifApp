(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),u=(a(15),a(1)),l=a(5);var o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1],s=function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return e.includes(i)?Object(l.a)(e):[i].concat(Object(l.a)(e))})),o(""))};return r.a.createElement("form",{onSubmit:s,className:"form"},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{onClick:s},"Adicionar"))};var s=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__slideInUp"},r.a.createElement("img",{src:a,alt:t,className:"images"}),r.a.createElement("h3",null," ",t," "))},m=a(4),p=a.n(m),d=a(8),f=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=6mB0j0dSPEhJBKsp2e7exd5grVNcWGKT"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a(9);var v=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){setTimeout((function(){console.log(e),c({data:e,loading:!1})}),2e3)}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement("div",null,r.a.createElement("h3",{className:"container-title animate__animated animate__flipInX"}," ",t.toUpperCase()," "),r.a.createElement("div",{className:"loader"},i&&r.a.createElement(g.BallTriangle,{stroke:"#2B6CB0"})),r.a.createElement("div",{className:"container"},c.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["goku"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gift Expert App"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),a.map((function(e){return r.a.createElement(v,{key:e,category:e})})))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.779fd5e8.chunk.js.map