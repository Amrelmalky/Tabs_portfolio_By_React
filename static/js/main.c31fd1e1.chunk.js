(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),s=(a(12),a(3)),o=a.n(s),u=a(6),i=a(1);var m=function(e){var t=e.jobs,a=e.value,n=e.setValue;return c.a.createElement("div",null,c.a.createElement("div",{className:"btn-container"},t.map((function(e,t){return c.a.createElement("button",{key:e.id,onClick:function(){n(t)},className:"job-btn ".concat(t===a&&"active-btn")},e.company)}))))},b=a(2),E=function(e){var t=e.company,a=e.duties,n=e.dates,r=e.title,l=e.id;return c.a.createElement("div",null,c.a.createElement("article",{key:l,className:"job-info"},c.a.createElement("h3",null,r),c.a.createElement("h4",null,t),c.a.createElement("p",{className:"job-date"},n),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"job-desc"},c.a.createElement(b.a,{className:"job-icon"}),c.a.createElement("p",null,e))}))))};var d=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),s=Object(i.a)(l,2),b=s[0],d=s[1],p=Object(n.useState)(0),f=Object(i.a)(p,2),v=f[0],j=f[1],N=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[]),b?c.a.createElement("section",{className:"section loading"},c.a.createElement("h2",null," Loading...")):c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"experience"),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"jobs-center"},c.a.createElement(m,{jobs:a,value:v,setValue:j}),c.a.createElement(E,a[v])),c.a.createElement("button",{className:"btn"},"More Info"))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c31fd1e1.chunk.js.map