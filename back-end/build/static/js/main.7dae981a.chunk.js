(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{60:function(e,s,t){},61:function(e,s,t){},63:function(e,s,t){},87:function(e,s,t){},88:function(e,s,t){},91:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),n=t(13),i=t.n(n),r=(t(60),t(52)),j=t(26),b=(t(61),t(31)),d=t.n(b),h=t(41),l=t(111),o=t(110),O=t(105),u=t(106),m=t(107),x=t(108),p=t(109),f=(t(63),t(42)),_=t.n(f).a.create({baseURL:"https://mernchat-i786m.herokuapp.com"}),v=t(2),g=function(e){var s=e.messages,t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],i=a[1],r=function(){var e=Object(h.a)(d.a.mark((function e(s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,_.post("/messages/new",{message:n,name:"Users name",timestamp:"Message time",received:!1});case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"chat",children:[Object(v.jsxs)("div",{className:"chat__header",children:[Object(v.jsx)(l.a,{}),Object(v.jsxs)("div",{className:"chat__headerInfo",children:[Object(v.jsx)("h3",{children:"Room Name"}),Object(v.jsx)("p",{children:"Last seen at..."})]}),Object(v.jsxs)("div",{className:"chat__headerRight",children:[Object(v.jsx)(o.a,{children:Object(v.jsx)(O.a,{})}),Object(v.jsx)(o.a,{children:Object(v.jsx)(u.a,{})}),Object(v.jsx)(o.a,{children:Object(v.jsx)(m.a,{})})]})]}),Object(v.jsx)("div",{className:"chat__body",children:s.map((function(e){return Object(v.jsxs)("p",{className:"chat__message ".concat(e.received&&"chat__receiver"),children:[Object(v.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(v.jsx)("span",{className:"chat__timestamp",children:e.timestamp})]},e._id)}))}),Object(v.jsxs)("div",{className:"chat__footer",children:[Object(v.jsx)(x.a,{}),Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(v.jsx)("button",{onClick:r,type:"submit",children:"Send a message"})]}),Object(v.jsx)(p.a,{})]})]})},N=(t(87),t(48)),y=t.n(N),C=t(49),k=t.n(C),w=t(50),R=t.n(w),S=(t(88),function(){return Object(v.jsxs)("div",{className:"sidebarChat",children:[Object(v.jsx)(l.a,{}),Object(v.jsxs)("div",{className:"sidebarChat__info",children:[Object(v.jsx)("h2",{children:"Room name"}),Object(v.jsx)("p",{children:"last message"})]})]})}),E=function(){return Object(v.jsxs)("div",{className:"sidebar",children:[Object(v.jsxs)("div",{className:"sidebar__header",children:[Object(v.jsx)(l.a,{src:"https://media-exp1.licdn.com/dms/image/C4D03AQEcprotW7-6vA/profile-displayphoto-shrink_200_200/0/1603670661020?e=1628121600&v=beta&t=rAzTdUL0kQ2oaNZQ23hZiOrU8ksIfD_KQ1M2vusRQJE"}),Object(v.jsxs)("div",{className:"sidebar__headerRight",children:[Object(v.jsx)(o.a,{children:Object(v.jsx)(y.a,{})}),Object(v.jsx)(o.a,{children:Object(v.jsx)(k.a,{})}),Object(v.jsx)(o.a,{children:Object(v.jsx)(R.a,{})})]})]}),Object(v.jsx)("div",{className:"sidebar__search",children:Object(v.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(v.jsx)(O.a,{}),Object(v.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(v.jsxs)("div",{className:"sidebar__chats",children:[Object(v.jsx)(S,{}),Object(v.jsx)(S,{}),Object(v.jsx)(S,{}),Object(v.jsx)(S,{})]})]})},L=t(51),Q=t.n(L),D=function(){var e=Object(c.useState)([]),s=Object(j.a)(e,2),t=s[0],a=s[1];return Object(c.useEffect)((function(){_.get("/messages/sync").then((function(e){a(e.data)}))}),[]),Object(c.useEffect)((function(){var e=new Q.a("545e738fb6c94fc61593",{cluster:"eu"}).subscribe("messages");return e.bind("inserted",(function(e){a([].concat(Object(r.a)(t),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[t]),console.log(t),Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)("div",{className:"app__body",children:[Object(v.jsx)(E,{}),Object(v.jsx)(g,{messages:t})]})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,112)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),F()}},[[91,1,2]]]);
//# sourceMappingURL=main.7dae981a.chunk.js.map