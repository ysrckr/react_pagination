(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=n(4),i=n(1);n(10);var l=n(2),s=n.n(l),o=n(0),u=function(e){var t=e.total,n=e.perPage,a=e.currentPage,c=e.onPageChange,r=Math.ceil(t/n),i=Array.from({length:r},(function(e,t){return t+1}));return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===a}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===a,onClick:function(e){return function(e){e.preventDefault(),1!==a&&c("prev")}(e)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e===a}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(t){t.preventDefault(),c(e)},children:e})})})),Object(o.jsx)("li",{className:s()("page-item",{disabled:a===r}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":a===r,onClick:function(e){return function(e){e.preventDefault(),a!==r&&c("next")}(e)},children:"\xbb"})})]})},j=function(e,t){for(var n=[],a=e;a<=t;a+=1)n.push(a);return n}(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=Object(i.useState)(5),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(1),l=Object(r.a)(c,2),s=l[0],d=l[1],h=(s-1)*n+1,b=Math.min(s*n,j.length);return Object(i.useEffect)((function(){s>Math.ceil(j.length/n)&&d(1)}),[n]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(h," - ").concat(b," of ").concat(j.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:n,onChange:function(e){return a(Number(e.target.value))},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(u,{total:j.length,perPage:Number(n),currentPage:s,onPageChange:function(e){switch(e){case"next":d((function(e){return e+1}));break;case"prev":d((function(e){return e-1}));break;default:d(Number(e))}}}),Object(o.jsx)("ul",{children:j.map((function(e,t){var a=(s-1)*n;return t>=a&&t<a+n?Object(o.jsx)("li",{"data-cy":"item",children:e},e):null}))})]})};c.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.183a0ec9.chunk.js.map