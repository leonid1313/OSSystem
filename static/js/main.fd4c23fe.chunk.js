(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{49:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(39),s=c.n(i),r=c(8),o=c(27),l=c(7),j=(c(49),c(28)),d=c.n(j),u=c(40),b=c(41),m=c.n(b),O=(c(70),c(19)),h=(c(71),c(15)),f=c(1);var x=function(e){var t=e.image,c=e.title,n=e.description,a=e.price,i=(e.item,e.id),s=e.items,r=e.setAllCards;return Object(f.jsxs)("div",{className:"container-card",children:[Object(f.jsx)("h1",{className:"title",children:c}),Object(f.jsx)("div",{className:"container-image",children:Object(f.jsx)("img",{className:"image",src:t})}),Object(f.jsxs)("div",{className:"cardBody",children:[Object(f.jsxs)("p",{className:"description-text",children:["Description: ",n]}),Object(f.jsxs)("p",{children:["Price: ",a]})]}),Object(f.jsx)(h.a,{onClick:function(){r(s.filter((function(e){return e.id!==i})))},id:"delete-card",variant:"secondary",children:"Deleete"})," "]})},p=(c(73),c(74),c(18));var v=function(e){var t=e.items,c=e.deeteAllCards,n=t.map((function(e){return+e.price})).reduce((function(e,t){return e+t}),0),a=(n/t.length).toFixed(2);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)(p.a,{className:"nav",children:[Object(f.jsxs)(p.a.Item,{children:["Total number of items: ",t.length]}),Object(f.jsxs)(p.a.Item,{children:["The sum of the prices of all goods: ",n]}),Object(f.jsxs)(p.a.Item,{children:["Average price: ",a]})]}),Object(f.jsx)(h.a,{className:"delete-all",onClick:c,variant:"secondary",children:"Delete all cards"})," "]})})},g=c(44);var N=function(e){var t=e.items,c=(e.data,Object(n.useState)(Object(O.a)(t))),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){return s(t)}),[t]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container-size",children:Object(f.jsxs)("div",{className:"main",children:[Object(f.jsxs)("div",{className:"side-bar",children:[Object(f.jsxs)(g.a.Select,{id:"list",onChange:function(e){switch(e.target.value){case"Sort by":s(Object(O.a)(t));break;case"Price":s(Object(O.a)(t).sort((function(e,t){return t.price-e.price})));break;case"Name":s(Object(O.a)(t).sort((function(e,t){return e.title.localeCompare(t.title)})))}},className:"sort","aria-label":"Default select example",children:[Object(f.jsx)("option",{children:"Sort by"}),Object(f.jsx)("option",{value:"Price",children:"Price"}),Object(f.jsx)("option",{value:"Name",children:"Name"})]}),Object(f.jsx)(v,{items:i,deeteAllCards:function(){s(t.splice(0,t.length))}})]}),Object(f.jsx)("div",{className:"container",children:i.map((function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(x,{image:e.img,title:e.title,description:e.description,price:e.price,item:e,id:e.id,items:t,setAllCards:s},e.id)})}))})]})})})},S=(c(77),function(e){for(var t=e.postsPerPage,c=e.totalPosts,n=e.paginate,a=[],i=1;i<=Math.ceil(c/t);i++)a.push(i);return Object(f.jsx)("nav",{children:Object(f.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(f.jsxs)("li",{className:"page-item",children:[Object(f.jsx)(h.a,{variant:"dark",className:"button-pagination",onClick:function(){return n(e)},children:e})," "]},e)}))})})});var y=function(){var e=Object(n.useState)(1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(12),s=Object(r.a)(i,2),o=s[0],l=(s[1],function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.log(n),t}})),a=Object(r.a)(c,2),i=a[0],s=a[1];return[i,function(t){try{var c=t instanceof Function?t(i):t;s(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]}("data",[])),j=Object(r.a)(l,2),b=j[0],O=j[1],h=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/leonid1313/demo/posts").then((function(e){return O(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h("")}),[]);var x=c*o,p=x-o,v=b.slice(p,x);return Object(f.jsxs)("div",{className:"container-search",children:[Object(f.jsx)(N,{items:v,data:b}),Object(f.jsx)(S,{postsPerPage:o,totalPosts:b.length,paginate:function(e){return a(e)}})]})},k=(c(78),c.p+"static/media/unnamed.b5b782de.jpeg");var P=function(){return Object(f.jsx)("div",{className:"container-header",children:Object(f.jsx)("div",{className:"container-size",children:Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("a",{href:"",children:Object(f.jsx)("img",{className:"logo-header",src:k,alt:"Logo"})}),Object(f.jsx)("p",{children:"menu"})]})})})};c(79);var w=function(e){var t=Object.assign({},e);return console.log(t),Object(f.jsx)("div",{className:"container-about",children:"About"})};c(80);var C=function(){return Object(f.jsx)("div",{className:"containerLoader",children:"Leonid Manuilenko"})};c(81);var F=function(){return Object(f.jsx)("div",{className:"container-footer",children:Object(f.jsx)("div",{className:"container-size",children:Object(f.jsx)("div",{className:"footer",children:Object(f.jsx)("a",{href:"",children:Object(f.jsx)("img",{className:"logo-footer",src:k,alt:"Logo"})})})})})};c(82);var A=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){a(!1),setTimeout((function(){a(!0)}),1e3)}),[]),Object(f.jsx)(f.Fragment,{children:c?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(o.a,{basename:"/OSSystem",children:[Object(f.jsx)(P,{}),Object(f.jsx)(l.a,{path:"/",exact:!0,component:y}),Object(f.jsx)(l.a,{path:"/about/:item",exact:!0,component:w}),Object(f.jsx)(F,{})]})}):Object(f.jsx)(C,{})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.fd4c23fe.chunk.js.map