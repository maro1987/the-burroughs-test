(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var a,r,o=n(1),c=n.n(o),u=n(6),s=n.n(u),i=(n(36),n(37),n(14)),l=n(10),d=l.c,f=n(26),j=n.n(f),p=n(13),b=Object(p.b)({name:"app",initialState:{startDate:null},reducers:{setStartTimestamp:function(t,e){t.startDate=e.payload}}}),h=b.actions.setStartTimestamp,m=b.reducer,g=n(3),D=function(){var t=Object(l.b)(),e=d((function(t){return t.app.startDate})),n=Object(o.useState)(null),a=Object(i.a)(n,2),r=a[0],c=a[1];Object(o.useEffect)((function(){c(e?new Date(e):null)}),[e]);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Select start date to display payment dates for the following 12 months"}),Object(g.jsx)(j.a,{onChange:function(e){t(h(new Date(e).getTime()))},value:r})]})},O=n(27),w=n.n(O),v=function(t){var e=t.getDay();return 0===e||6===e},x=n(31),y=n(18),S=n(12),B={Wrapper:S.default.header(a||(a=Object(y.a)(["\n  width: 100%;\n  margin-top: 20px;\n"]))),DownloadButton:S.default.button(r||(r=Object(y.a)(["\n  background-color: DodgerBlue;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 20px;\n\n  &:hover {\n    background-color: RoyalBlue;\n  }\n"])))},k=[{name:"Month",selector:function(t){return t.month}},{name:"Base Salary",selector:function(t){return t.baseSalary}},{name:"Bonus (for previous month)",selector:function(t){return t.bonus}}],T=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],r=d((function(t){return t.app.startDate}));return Object(o.useEffect)((function(){if(r){var t=new Date(r),e=t.getDate(),n=(s=12,Array.from(Array(s).keys())).map((function(e){return new Date(t.getFullYear(),t.getMonth()+e+1,0)})),o=n.map((function(t){return v(t)?function(t){var e=t.getDay(),n=new Date(t),a=0===e?2:1;return n.setDate(n.getDate()-a),n}(t):t})),c=n.map((function(t){var e=new Date(t).setDate(15);return new Date(e)})).map((function(t){return v(t)?function(t){var e=t.getDay(),n=new Date(t),a=0===e?3:4;return n.setDate(n.getDate()+a),n}(t):t})).map((function(t,n){return e>t.getDate()&&0===n?"NA":t.toDateString()})),u=n.map((function(t,e){return{month:"".concat(o[e].toLocaleString("default",{month:"long"})," ").concat(n[e].getFullYear()),baseSalary:o[e].toDateString(),bonus:c[e],id:e}}));a(u)}else a([]);var s}),[r]),Object(g.jsxs)(B.Wrapper,{children:[n.length>0&&Object(g.jsx)(x.CSVLink,{data:n,children:Object(g.jsx)(B.DownloadButton,{children:"Download CSV"})}),Object(g.jsx)(w.a,{columns:k,data:n})]})};var A=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"The Burroughs Test"}),Object(g.jsx)(D,{}),Object(g.jsx)(T,{})]})},W=Object(p.a)({reducer:{app:m}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(l.a,{store:W,children:Object(g.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.8bd8e9ec.chunk.js.map