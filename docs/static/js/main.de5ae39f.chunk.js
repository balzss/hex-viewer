(this["webpackJsonphex-viewer"]=this["webpackJsonphex-viewer"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),i=(a(12),a(6)),l=a(1);a(13);var s=function(){var e=Object(n.useState)(["89","50","4e","47","0d","0a","1a","0a","00","00","00","0d","49","48","44","52","00","00","00","20","00","00","00","20","08","06","00","00","00","73","7a","7a","f4","00","00","07","cf","49","44","41","54","58","c3","4d","97","3d","8f","2c","4b","56","45","d7","f9","88","cc","ea","be","f7","31","48","48","48","a0","31","06","e3","69","40","03","36","c2","c0","44","02","3d","84","01","2e","2e","26","06","0e","3f","00","17","0b","1f","03","07","9f","ff","80","84","8d","0f","12","78","18","c0","d3","65","5e","57","57","66","c4","f9","c0","c8","ba","0d","e5","95","aa","22","23","ce","39","2b","f6","de","29","3f","fe","f6","37","db","7d","a3","ba","69","15","ba","1b","55","45","44","01","68","69","cc","8c","ce","40","55","51","75","b2","9a","7f","fd","e7","7f","1a"]),t=Object(l.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(16)),o=Object(l.a)(r,2),s=o[0],u=(o[1],Object(n.useState)()),f=Object(l.a)(u,2),m=f[0],d=f[1],v=Object(n.useState)(),p=Object(l.a)(v,2),b=p[0],h=p[1],O=Object(n.useState)(),g=Object(l.a)(O,2),w=g[0],E=g[1],M=Object(n.useState)(!1),j=Object(l.a)(M,2),S=j[0],_=j[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"HexViewer"},c.a.createElement("div",{className:"HexViewer__data"},function(){var e=Math.ceil(a.length/s),t=Object(i.a)(Array(e).keys()).map((function(e,t){return(t*s).toString(16).padStart(8,"0")})).map((function(e,t){return c.a.createElement("div",{className:"Offset__line",key:t},e)}));return c.a.createElement("div",{className:"Offset"},t)}(),function(){var e=function(e){var t=Array.from(e.target.parentNode.children).indexOf(e.target);d(t),S&&E(t)},t=function(e){E(null),h(m),_(!0)},n=function(e){E(m),_(!1)},r=a.map((function(a,r){return c.a.createElement("div",{className:"Dump__cell ".concat(r===m||w&&r>=Math.min(b,w)&&r<=Math.max(b,w)?"Dump__cell--selected":""),onMouseOver:e,onMouseDown:t,onMouseUp:n,onMouseLeave:function(){d(null)},key:r},a)}));return c.a.createElement("div",{className:"Dump",style:{gridTemplateColumns:"repeat(".concat(s,", 1fr)")}},r)}(),function(){var e=function(e){var t=Array.from(e.target.parentNode.children).indexOf(e.target);d(t),S&&E(t)},t=function(e){E(null),h(m),_(!0)},n=function(e){E(m),_(!1)},r=a.map((function(e){return String.fromCharCode(parseInt(e,16)).replace(/[^ -~]+/g,".")})).map((function(a,r){return c.a.createElement("div",{className:"Ascii__cell ".concat(r===m||w&&r>=Math.min(b,w)&&r<=Math.max(b,w)?"Ascii__cell--selected":""),onMouseOver:e,onMouseDown:t,onMouseUp:n,onMouseLeave:function(){d(null)},key:r},a)}));return c.a.createElement("div",{className:"Ascii",style:{gridTemplateColumns:"repeat(".concat(s,", 1fr)")}},r)}()),c.a.createElement("div",null,"Selection start: ",b),c.a.createElement("div",null,"Selection end: ",w)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.de5ae39f.chunk.js.map