(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{51:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(42),r=c.n(s),i=c(7),l=c(15),j=c(8),o=(c(51),c(31)),d=c.n(o),b=c(43),u=c(44),O=c.n(u),h=(c(72),c(18)),m=(c(73),c(17)),x=c(0);var v=function(e){var t=e.image,c=e.title,a=e.description,n=e.price,s=e.id,r=e.setAllCards,i=e.allCards,l=e.setData;return Object(x.jsxs)("div",{className:"container-card",children:[Object(x.jsx)("h1",{className:"title",children:c}),Object(x.jsx)("div",{className:"container-image",children:Object(x.jsx)("img",{className:"image",src:t})}),Object(x.jsxs)("div",{className:"cardBody",children:[Object(x.jsxs)("p",{className:"description-text",children:["Description: ",a]}),Object(x.jsxs)("p",{children:["Price: ",n]})]}),Object(x.jsx)(m.a,{onClick:function(){var e=i.filter((function(e){return e.id!==s}));r(e),l(e)},id:"delete-card",variant:"secondary",children:"Deleete"})," "]})},f=(c(75),c(76),c(22));var p=function(e){e.items;var t=e.deeteAllCards,c=e.data,a=c.map((function(e){return+e.price})).reduce((function(e,t){return e+t}),0),n=(a/c.length).toFixed(2);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsxs)(f.a,{className:"nav",children:[Object(x.jsxs)(f.a.Item,{children:["Total number of items: ",c.length]}),Object(x.jsxs)(f.a.Item,{children:["The sum of the prices of all goods: ",a]}),Object(x.jsxs)(f.a.Item,{children:["Average price: ",n]})]}),Object(x.jsx)(m.a,{className:"delete-all",onClick:t,variant:"secondary",children:"Delete all cards"})," "]})})},g=c(16);var N=function(e){var t=e.data,c=e.deeteAllCards,n=e.setData,s=Object(a.useState)(Object(h.a)(t)),r=Object(i.a)(s,2),j=r[0],o=r[1];return Object(a.useEffect)((function(){return o(t)}),[t]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container-size",children:Object(x.jsxs)("div",{className:"main",children:[Object(x.jsxs)("div",{className:"side-bar",children:[Object(x.jsxs)(g.a.Select,{id:"list",onChange:function(e){switch(e.target.value){case"Sort by":o(Object(h.a)(t));break;case"Price":o(Object(h.a)(t).sort((function(e,t){return t.price-e.price})));break;case"Name":o(Object(h.a)(t).sort((function(e,t){return e.title.localeCompare(t.title)})))}},className:"sort","aria-label":"Default select example",children:[Object(x.jsx)("option",{children:"Sort by"}),Object(x.jsx)("option",{value:"Price",children:"Price"}),Object(x.jsx)("option",{value:"Name",children:"Name"})]}),Object(x.jsx)(p,{items:j,deeteAllCards:c,data:t}),Object(x.jsx)("div",{children:Object(x.jsxs)("nav",{className:"nav",children:[Object(x.jsx)("input",{id:"nav__toggle",type:"checkbox"}),Object(x.jsx)("label",{className:"nav__btn",for:"nav__toggle",children:Object(x.jsx)("span",{})}),Object(x.jsx)("ul",{className:"nav__menu",children:Object(x.jsx)("li",{className:"nav__item",children:Object(x.jsx)(l.b,{className:"link-about",to:{pathname:"/about",state:j},children:"Add card"})})})]})})]}),Object(x.jsx)("div",{className:"container",children:0===j.length?Object(x.jsx)("h1",{children:"All product has been removed from the page"}):j.map((function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{image:e.img,title:e.title,description:e.description,price:e.price,item:e,id:e.id,items:t,setAllCards:o,allCards:j,setData:n},e.id)})}))})]})})})};c(82);var C=function(){var e=function(e,t){var c=Object(a.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(a){return console.log(a),t}})),n=Object(i.a)(c,2),s=n[0],r=n[1];return[s,function(t){try{var c=t instanceof Function?t(s):t;r(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(a){console.log(a)}}]}("data",[]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://my-json-server.typicode.com/leonid1313/demo/posts").then((function(e){return n(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){s("")}),[]);var r=Object(a.useState)(c),l=Object(i.a)(r,2),j=(l[0],l[1]);return Object(x.jsx)("div",{className:"container-search",children:Object(x.jsx)(N,{data:c,deeteAllCards:function(){j(c.splice(0,c.length))},setData:n})})},_=(c(83),c.p+"static/media/unnamed.b5b782de.jpeg");var y=function(){return Object(x.jsx)("div",{className:"container-header",children:Object(x.jsx)("div",{className:"container-size",children:Object(x.jsx)("div",{className:"flex",children:Object(x.jsx)("a",{href:"",children:Object(x.jsx)("img",{className:"logo-header",src:_,alt:"Logo"})})})})})},S=(c(84),c(25)),k=c(20);var w=function(e){var t=Object.assign({},e),c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)(""),o=Object(i.a)(j,2),d=o[0],b=o[1],u=Object(a.useState)(""),O=Object(i.a)(u,2),v=O[0],f=O[1],p=Object(a.useState)(t.location.state),N=Object(i.a)(p,2),C=N[0],_=N[1];return Object(x.jsx)("div",{className:"container-about",children:Object(x.jsx)("div",{className:"container-size",children:Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("div",{className:"side-bar",children:Object(x.jsxs)("nav",{className:"nav",children:[Object(x.jsx)("input",{id:"nav__toggle",type:"checkbox"}),Object(x.jsx)("label",{className:"nav__btn",for:"nav__toggle",children:Object(x.jsx)("span",{})}),Object(x.jsx)("ul",{className:"nav__menu",children:Object(x.jsx)("li",{className:"nav__item",children:Object(x.jsx)(l.b,{className:"link-about",to:{pathname:"/",state:C},children:"Catalog"})})})]})}),Object(x.jsxs)("div",{className:"container-form",children:[Object(x.jsx)("h1",{className:"title-add",children:" Add new card"}),Object(x.jsxs)(S.a,{children:[Object(x.jsx)(g.a.Label,{column:!0,lg:2,children:"Entet name"}),Object(x.jsx)(k.a,{children:Object(x.jsx)(g.a.Control,{name:"name",type:"text",placeholder:"Entet name",value:s,onChange:function(e){return function(e){r(e.target.value)}(e)}})})]}),Object(x.jsxs)(S.a,{children:[Object(x.jsx)(g.a.Label,{column:!0,lg:2,children:"Description"}),Object(x.jsx)(k.a,{children:Object(x.jsx)(g.a.Control,{name:"Description",type:"text",placeholder:"Description",value:d,onChange:function(e){return function(e){b(e.target.value)}(e)}})})]}),Object(x.jsxs)(S.a,{children:[Object(x.jsx)(g.a.Label,{column:!0,lg:2,children:"Price"}),Object(x.jsx)(k.a,{children:Object(x.jsx)(g.a.Control,{name:"Price",type:"text",placeholder:"Price",value:v,onChange:function(e){return function(e){f(e.target.value)}(e)}})})]}),Object(x.jsx)(m.a,{id:"button-add",onClick:function(){_([].concat(Object(h.a)(C),[{title:s,description:d,price:v,id:C.length+1}])),console.log(C)},variant:"secondary",children:"Add new card"})," "]})]})})})};c(85);var A=function(){return Object(x.jsx)("div",{className:"containerLoader",children:"Leonid Manuilenko"})};c(86);var D=function(){return Object(x.jsx)("div",{className:"container-footer",children:Object(x.jsx)("div",{className:"container-size",children:Object(x.jsx)("div",{className:"footer",children:Object(x.jsx)("a",{href:"",children:Object(x.jsx)("img",{className:"logo-footer",src:_,alt:"Logo"})})})})})};c(87);var F=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!1),setTimeout((function(){n(!0)}),1e3)}),[]),Object(x.jsx)(x.Fragment,{children:c?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{basename:"/OSSystem",children:[Object(x.jsx)(y,{}),Object(x.jsx)(j.a,{path:"/",exact:!0,component:C}),Object(x.jsx)(j.a,{path:"/about",exact:!0,component:w}),Object(x.jsx)(D,{})]})}):Object(x.jsx)(A,{})})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.ca8b9e63.chunk.js.map