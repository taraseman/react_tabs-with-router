(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),b=a(1),m=a(6),s=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement(m.b,{exact:!0,className:"navbar-item is-tab",activeClassName:"is-active",to:"/"},"Home page"),l.a.createElement(m.b,{className:"navbar-item is-tab",activeClassName:"is-active",to:"/tabs"},"People page"))},i=function(){return"Home"},o=a(16),u=function(e){var t=e.tabs,a=Object(b.g)().tabId,c=Object(n.useState)(null),r=Object(o.a)(c,2),m=r[0],s=r[1];return Object(n.useEffect)((function(){s(t.find((function(e){return e.id===a})))}),[m]),l.a.createElement("div",null,m?m.content:l.a.createElement("p",null,"Page not found"))},E=function(e){var t=e.tabs;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tabs is-boxed my-tabs"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"active-tab",to:"/tabs/tab-1"},"Tab 1")),l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"active-tab",to:"/tabs/tab-2"},"Tab 2")),l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"active-tab",to:"/tabs/tab-3"},"Tab 3")))),l.a.createElement(b.d,null,l.a.createElement(b.b,{path:"/tabs/:tabId?",exact:!0},l.a.createElement(u,{tabs:t})),l.a.createElement("p",null,"Not found todo")))},d=(a(27),a(28),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(b.d,null,l.a.createElement(b.b,{path:"/tabs"},l.a.createElement(E,{tabs:d})),l.a.createElement(b.b,{path:"/",exact:!0,component:i}),l.a.createElement(b.a,{path:"/home",to:"/"}),l.a.createElement("p",null,"Page not found")))};r.a.render(l.a.createElement(m.a,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.64739a97.chunk.js.map