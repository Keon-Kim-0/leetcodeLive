(this.webpackJsonpleetcodelive=this.webpackJsonpleetcodelive||[]).push([[0],{42:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);n(5);var c=n(34),o=n.n(c),i=n(36),l=(n(42),n(0));var s=n(35);function d(){return Object(l.jsxs)("div",{id:"right",children:[Object(l.jsx)("h2",{id:"population",class:"population"}),Object(l.jsx)("h2",{id:"clientName",class:"clientName"}),Object(l.jsx)("div",{id:"container",class:"Anchor",children:Object(l.jsx)("ul",{id:"events",class:"chat"})}),Object(l.jsx)("div",{class:"chatSection",children:Object(l.jsxs)("form",{id:"chatForm",class:"chatForm",children:[Object(l.jsx)("input",{id:"chat",type:"text",autocomplete:"off",class:"chatbox",placeholder:"chat"}),Object(l.jsx)("button",{id:"say",class:"chatButton",children:"Send"})]})})]})}function a(){return Object(l.jsx)("div",{children:Object(l.jsx)(d,{})})}window.onload=function(){var e=Object(s.io)(),t=!1;document.getElementById("say");document.getElementById("chatForm").addEventListener("submit",(function(n){n.preventDefault(),function(){var n=document.getElementById("chat").value;n=(t+":"+n).split("").map((function(e,t){return t>0&&t%28===0?e+"\n":e})).join("").slice(t.length+1),console.log(n),e.emit("chat",n),document.getElementById("chatForm").reset()}()}));var n="error";e.on("messenger",(function(e){n=e}));var c=document.getElementById("right"),o=(document.getElementById("events"),document.getElementById("container"));function i(){c.scrollHeight-(c.scrollTop+c.clientHeight)<100&&c.scrollTo({top:c.scrollHeight,behavior:"smooth"})}window.addEventListener("resize",(function(){c=document.getElementById("right"),document.getElementById("events"),o=document.getElementById("container"),console.log("updated: ",o.style.paddingBottom)}));e.on("announcement",(function(e){var t=document.querySelector("#events"),n=document.createElement("li");n.className="announcement",n.innerHTML=e,t.appendChild(n),i()})),e.on("message",(function(e){var t=document.querySelector("#events"),c=document.createElement("li");c.className="chatText",c.innerHTML=e,t.appendChild(c);var o=c,l=document.createElement("span");l.className="messenger",l.innerHTML=n,o.insertBefore(l,o.childNodes[0]),console.log("one"),i()})),e.on("id",(function(e){t=e,document.getElementById("clientName").innerHTML="your name: "+e})),e.on("population",(function(e){document.getElementById("population").innerHTML=e}))};var r=Object(i.hot)((function(){return Object(l.jsx)("div",{id:"AppDiv",children:Object(l.jsx)(a,{})})}));o.a.render(Object(l.jsx)(r,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.31c64624.chunk.js.map