(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[3,7],{141:function(e,t,c){"use strict";var a=c(10),n=c(2),s=c(3),r=c(4),o=c.n(r),i=c(0),l=c(6),f=c(1),u=["as","bsPrefix","className"],j=["className"];var b=i.forwardRef((function(e,t){var c=function(e){var t=e.as,c=e.bsPrefix,a=e.className,r=Object(s.a)(e,u);c=Object(l.b)(c,"col");var i=Object(l.a)(),f=[],j=[];return i.forEach((function(e){var t,a,n,s=r[e];delete r[e],"object"===typeof s&&null!=s?(t=s.span,a=s.offset,n=s.order):t=s;var o="xs"!==e?"-".concat(e):"";t&&f.push(!0===t?"".concat(c).concat(o):"".concat(c).concat(o,"-").concat(t)),null!=n&&j.push("order".concat(o,"-").concat(n)),null!=a&&j.push("offset".concat(o,"-").concat(a))})),[Object(n.a)(Object(n.a)({},r),{},{className:o.a.apply(void 0,[a].concat(f,j))}),{as:t,bsPrefix:c,spans:f}]}(e),r=Object(a.a)(c,2),i=r[0],b=i.className,d=Object(s.a)(i,j),O=r[1],h=O.as,p=void 0===h?"div":h,x=O.bsPrefix,m=O.spans;return Object(f.jsx)(p,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:o()(b,!m.length&&x)}))}));b.displayName="Col",t.a=b},151:function(e,t,c){"use strict";var a=c(2),n=c(3),s=c(4),r=c.n(s),o=c(0),i=c(6),l=c(1),f=["bsPrefix","className","as"],u=o.forwardRef((function(e,t){var c=e.bsPrefix,s=e.className,o=e.as,u=void 0===o?"div":o,j=Object(n.a)(e,f),b=Object(i.b)(c,"row"),d=Object(i.a)(),O="".concat(b,"-cols"),h=[];return d.forEach((function(e){var t,c=j[e];delete j[e],t=null!=c&&"object"===typeof c?c.cols:c;var a="xs"!==e?"-".concat(e):"";null!=t&&h.push("".concat(O).concat(a,"-").concat(t))})),Object(l.jsx)(u,Object(a.a)(Object(a.a)({ref:t},j),{},{className:r.a.apply(void 0,[s,b].concat(h))}))}));u.displayName="Row",t.a=u},87:function(e,t,c){"use strict";c.r(t);c(0),c(89);var a=c(1);t.default=function(e){var t=e.title;return Object(a.jsx)("div",{className:"header",children:t})}},91:function(e,t,c){"use strict";c.r(t);var a=c(10),n=c(0),s=c(166),r=c(137),o=c(151),i=c(141),l=c(63),f=c.n(l),u=c(87),j=c(24),b=c(30),d=c(1),O={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,c=e.header,l=Object(n.useState)(null),h=Object(a.a)(l,2),p=h[0],x=h[1];return Object(n.useEffect)((function(){fetch(j.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.default,{title:c}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(r.a,{children:p?Object(d.jsx)(f.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:O.introTextContainer,children:(t=p.about,Object(d.jsx)(s.a,{children:t}))}),Object(d.jsx)(i.a,{style:O.introImageContainer,children:Object(d.jsx)("img",{src:null===p||void 0===p?void 0:p.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=3.4d55dd53.chunk.js.map