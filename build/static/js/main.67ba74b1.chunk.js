(this.webpackJsonptinyorganicsassessment=this.webpackJsonptinyorganicsassessment||[]).push([[0],{16:function(e,t,r){},89:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(11),c=r(25),s=r(6),u=r.n(s),o=r(8),i=r(7),l=(r(16),r(95)),j=r(93),b=r(97),p=r(40),O=r(92),d=r(23),f=r(24),x=r(29),h=r.n(x),m="token",g="allergen",v="firstName",k="bFirstName",y=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"saveToken",value:function(e,t,r,n){console.log(r,"savetoken"),localStorage.setItem(m,e),localStorage.setItem(g,t),localStorage.setItem(v,r),localStorage.setItem(k,n)}},{key:"getToken",value:function(){return localStorage.getItem(m)}},{key:"getAllergen",value:function(){return localStorage.getItem(g)}},{key:"getFirstName",value:function(){return console.log(localStorage.getItem(v)),localStorage.getItem(v)}},{key:"getBFirstName",value:function(){return localStorage.getItem(k)}},{key:"clearToken",value:function(){localStorage.clear(m),localStorage.clear(g)}}]),e}(),w=new y,N=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,null,[{key:"postUserData",value:function(){var e=Object(o.a)(u.a.mark((function e(t,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post(t,r);case 3:return n=e.sent,console.log(n.data,"here in tokenservice"),e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.log("this error is from User Service: ",e.t0),e.abrupt("return",{error:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getUserAllergens",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!w.getToken()){e.next=5;break}return t=w.getAllergen(),e.abrupt("return",t);case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log("There was an error getting user token: ",e.t0),e.abrupt("return",{error:"unauthenticated"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUserToken",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=w.getToken(),e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("There was an error getting user token: ",e.t0),e.abrupt("return",{error:"unauthenticated"});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFirstName",value:function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",w.getFirstName());case 4:return e.prev=4,e.t0=e.catch(0),console.log("There was an error getting user token: ",e.t0),e.abrupt("return",{error:"unauthenticated"});case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}()},{key:"getBFirstName",value:function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",w.getBFirstName());case 4:return e.prev=4,e.t0=e.catch(0),console.log("There was an error getting user token: ",e.t0),e.abrupt("return",{error:"unauthenticated"});case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){w.clearToken()}}]),e}(),S=N,T=r(1),C=function(e){var t=e.isToken;return Object(T.jsxs)(O.a,{size:"sm",onClick:function(){return S.logout(),void window.location.reload()},children:[" ",t?"Logout":"refresh"," "]})},L=function(e){e.isLogin;var t=Object(n.useState)(""),r=Object(i.a)(t,2),c=r[0],s=r[1],O=Object(n.useState)(""),d=Object(i.a)(O,2),f=d[0],x=d[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),g=m[0],v=m[1];return Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getUserToken();case 2:if(!e.sent){e.next=7;break}v(!0),e.next=8;break;case 7:return e.abrupt("return");case 8:return e.next=10,S.getFirstName();case 10:return t=e.sent,e.next=13,S.getBFirstName();case 13:r=e.sent,t&&s(t),r&&x(r);case 16:case"end":return e.stop()}}),e)}))),[]),Object(T.jsx)("header",{children:Object(T.jsx)(l.a,{bg:"light",expand:"lg",children:Object(T.jsxs)(j.a,{children:[Object(T.jsx)(p.LinkContainer,{to:"/main",children:Object(T.jsx)(l.a.Brand,{children:"Tiny Organics"})}),Object(T.jsxs)("p",{children:[" ",g?"Hi ".concat(c," and ").concat(f):"Welcome!"," "]}),Object(T.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(T.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(T.jsxs)(b.a,{className:"me-auto",children:[Object(T.jsx)(p.LinkContainer,{to:"/main",children:Object(T.jsx)(b.a.Link,{children:"Home"})}),Object(T.jsx)(a.Link,{to:"/",exact:!0,children:Object(T.jsx)(C,{isToken:g})})]})})]})})})},I=r(94),F=r(56),U=function(){return Object(T.jsx)("footer",{children:Object(T.jsx)(j.a,{children:Object(T.jsx)(I.a,{children:Object(T.jsx)(F.a,{className:"text-center py-3",children:"Tiny Organics Assessment"})})})})},q=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,null,[{key:"getRecipes",value:function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("There was an error getting recipes",e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=q,G=r(98),B=function(e){var t=e.match,r=Object(n.useState)([]),a=Object(i.a)(r,2),c=a[0],s=a[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),b=j[0],p=j[1];return Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getRecipes("/api/recipes");case 2:return r=e.sent,e.next=5,r.find((function(e){return console.log(e),e._id=t.params.id}));case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getRecipes("/api/recipes");case 2:return r=e.sent,e.next=5,r.find((function(e){return e._id==t.params.id}));case 5:n=e.sent,console.log(n),p(n.allergens);case 8:case"end":return e.stop()}}),e)}))),[]),Object(T.jsxs)(G.a,{className:"my-3 p-3 rounded justify-content-md-center",children:[Object(T.jsx)(G.a.Img,{src:c.image}),Object(T.jsxs)(G.a.Body,{children:[Object(T.jsx)(G.a.Title,{as:"div",children:Object(T.jsx)("strong",{children:c.name})}),b.length?b.map((function(e,t){return Object(T.jsx)(G.a.Text,{children:e},t)})):"none"]})]})},R=r(96),A=function(e){var t=e.children;return Object(T.jsx)(j.a,{children:Object(T.jsx)(I.a,{className:"justify-content-md-center",children:Object(T.jsx)(F.a,{xs:12,md:6,children:t})})})},D=r(9),_=new y,H=function(e){e.Location,e.history;var t=Object(n.useState)(""),r=Object(i.a)(t,2),c=r[0],s=r[1],l=Object(n.useState)(""),j=Object(i.a)(l,2),b=j[0],p=j[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),x=f[0],h=f[1],m=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.postUserData("/api/users/login/",{username:c,password:b});case 2:if(!(t=e.sent).access){e.next=7;break}return _.saveToken(t.access,t.allergens,t.firstName,t.bFirstName),h(!0),e.abrupt("return",Object(T.jsx)(D.c,{to:"/main"}));case 7:return p(""),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return x?(window.location.reload(),Object(T.jsx)(D.c,{to:"/main"})):Object(T.jsxs)(A,{children:[Object(T.jsx)("h1",{children:"Log in"}),Object(T.jsxs)(R.a,{onSubmit:function(e){e.preventDefault(),c&&b&&m()},children:[Object(T.jsxs)(R.a.Group,{controlId:"email",children:[Object(T.jsx)(R.a.Label,{children:" Username"}),Object(T.jsx)(R.a.Control,{type:"username",placeholder:"Enter username",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{controlId:"password",children:[Object(T.jsx)(R.a.Label,{children:"Password"}),Object(T.jsx)(R.a.Control,{type:"password",placeholder:"Enter password",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(T.jsx)(O.a,{type:"submit",className:"mt-1",variant:"primary",children:"Log in"})]}),Object(T.jsx)(I.a,{children:Object(T.jsx)(F.a,{children:Object(T.jsx)(a.Link,{to:"/signup",children:Object(T.jsx)(O.a,{className:"mt-1",children:" Sign up "})})})})]})},J=new y,z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),l=s[0],j=s[1],b=Object(n.useState)(""),p=Object(i.a)(b,2),d=p[0],f=p[1],x=Object(n.useState)(""),h=Object(i.a)(x,2),m=h[0],g=h[1],v=Object(n.useState)(""),k=Object(i.a)(v,2),y=k[0],w=k[1],N=Object(n.useState)(""),C=Object(i.a)(N,2),L=C[0],I=C[1],F=Object(n.useState)(""),U=Object(i.a)(F,2),q=U[0],B=U[1],_=Object(n.useState)(!1),H=Object(i.a)(_,2),z=H[0],P=H[1],W=Object(n.useState)([]),K=Object(i.a)(W,2),M=K[0],Q=K[1],V=Object(n.useState)([]),X=Object(i.a)(V,2),Y=X[0],Z=X[1];Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getRecipes("/api/recipes/allergens");case 2:t=e.sent,r=t.reduce((function(e,t){return e.push(t.name),e}),[]),Z(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var $=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M||Q(["none"]),e.next=3,S.postUserData("/api/users/signup/",{username:r,email:L,firstName:l,lastName:d,bFirstName:m,bLastName:y,password:q,allergens:M});case 3:return t=e.sent,console.log(t,"result"),t.token&&(J.saveToken(t.token,t.allergens,t.firstName,t.bFirstName),P(!0)),B(""),e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return z?(window.location.reload(),Object(T.jsx)(D.c,{to:"/main"})):Object(T.jsxs)(A,{children:[Object(T.jsx)("h1",{children:"Sign up"}),Object(T.jsxs)(R.a,{onSubmit:function(e){e.preventDefault(),r&&q&&$()},children:[Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"username",children:[Object(T.jsx)(R.a.Label,{children:" Username"}),Object(T.jsx)(R.a.Control,{type:"username",placeholder:"required",required:!0,value:r,onChange:function(e){return a(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"first_name",children:[Object(T.jsx)(R.a.Label,{children:" first name"}),Object(T.jsx)(R.a.Control,{type:"text",required:!0,placeholder:"required",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"first_name",children:[Object(T.jsx)(R.a.Label,{children:" last name"}),Object(T.jsx)(R.a.Control,{type:"text",value:d,onChange:function(e){return f(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"babyfname",children:[Object(T.jsx)(R.a.Label,{children:" baby's first name"}),Object(T.jsx)(R.a.Control,{type:"text",required:!0,placeholder:"required",value:m,onChange:function(e){return g(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"babylname",children:[Object(T.jsx)(R.a.Label,{children:" baby's last name"}),Object(T.jsx)(R.a.Control,{type:"text",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"email",children:[Object(T.jsx)(R.a.Label,{children:" email"}),Object(T.jsx)(R.a.Control,{type:"email",required:!0,placeholder:"required",value:L,onChange:function(e){return I(e.target.value)}})]}),Object(T.jsxs)(R.a.Group,{className:"my-3",controlId:"password",children:[Object(T.jsx)(R.a.Label,{children:" password"}),Object(T.jsx)(R.a.Control,{type:"password",required:!0,placeholder:"required",value:q,onChange:function(e){return B(e.target.value)}})]}),Object(T.jsx)(G.a,{className:"p-2 m-2",children:Object(T.jsx)(R.a.Group,{multiple:!0,className:"mb-3",onChange:function(e){var t=e.target.value;if(M.includes(t)){var r=M.indexOf(t);if(0===r)return Q(M.slice(r+1));if(r===M.length-1)return Q(M.slice(0,r));var n=M.slice(0,r).concat(M.slice(r+1));return Q(n)}var a=M;return a.push(t),Q(a)},children:Y.map((function(e,t){return Object(T.jsx)("div",{className:"mb-3",children:Object(T.jsx)(R.a.Check,{type:"checkbox",id:t,label:e,value:e})},t)}))})}),Object(T.jsx)(O.a,{type:"submit",variant:"primary",children:"Register"})]})]})},P=r(57),W=function(e){var t=e.id,r=e.recipe,n=r.allergens.map((function(e,t){return Object(T.jsx)(G.a.Text,{children:e},t)}));return Object(T.jsx)(F.a,{sm:12,md:6,lg:4,xl:3,children:Object(T.jsxs)(G.a,{className:"my-3 p-3 rounded",children:[Object(T.jsx)(a.Link,{to:"/recipes/".concat(t),children:Object(T.jsx)(G.a.Img,{src:"".concat(r.image)})}),Object(T.jsxs)(G.a.Body,{children:[Object(T.jsx)(a.Link,{to:"/recipes/".concat(t),children:Object(T.jsx)(G.a.Title,{as:"div",children:Object(T.jsx)("strong",{children:r.name})})}),n]})]})})},K=function(e){var t=e.recList.map((function(e,t){return Object(T.jsx)(W,{id:e._id,recipe:e},t)}));return Object(T.jsx)(I.a,{children:t})},M=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)("none"),s=Object(i.a)(c,2),l=s[0],b=s[1];return Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getUserToken();case 2:if(!e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",S.logout());case 6:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t,r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getUserToken();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,E.getRecipes("/api/recipes");case 7:return t=e.sent,e.next=10,S.getUserAllergens();case 10:r=e.sent,n=r.split(","),null!==r&&(b(r),c=t.reduce((function(e,t){var r=!1;if(!e.includes(t)){var a,c=Object(P.a)(n);try{for(c.s();!(a=c.n()).done;){var s=a.value;t.allergens.includes(s)&&(r=!0)}}catch(u){c.e(u)}finally{c.f()}}return r||e.push(t),e}),[]),a(c));case 13:case"end":return e.stop()}}),e)}))),[]),Object(T.jsxs)("main",{className:"py-3",children:[Object(T.jsx)(j.a,{children:"allergens: ".concat(l)}),Object(T.jsx)(j.a,{children:Object(T.jsx)(K,{recList:r})})]})},Q=r(22),V=r(33),X=["component"],Y=new y,Z=function(e){var t=e.component,r=Object(V.a)(e,X),n=Y.getToken(),a=!1;return n&&(a=!0),Object(T.jsx)("div",{children:Object(T.jsx)(D.d,Object(Q.a)(Object(Q.a)({},r),{},{render:function(e){return a?Object(T.jsx)(t,Object(Q.a)({},e)):Object(T.jsx)(D.c,{exact:!0,from:"/main",to:"/"})}}))})},$=["component"],ee=new y,te=function(e){var t=e.component,r=Object(V.a)(e,$),a=Object(n.useState)(!1),c=Object(i.a)(a,2),s=c[0],l=c[1];return Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.getToken();case 2:e.sent&&l(!0);case 4:case"end":return e.stop()}}),e)}))),[]),Object(T.jsx)(D.d,Object(Q.a)(Object(Q.a)({},r),{},{render:function(){return s?Object(T.jsx)(D.c,{to:"/main",test:"test"}):Object(T.jsx)(t,Object(Q.a)({},r))}}))},re=(r(89),function(){return Object(T.jsxs)(a.HashRouter,{children:[Object(T.jsx)(L,{}),Object(T.jsx)("main",{className:"py-3",children:Object(T.jsxs)(j.a,{children:[Object(T.jsx)(Z,{path:"/main",component:M}),Object(T.jsx)(Z,{path:"/recipes/:id",component:B}),Object(T.jsx)(te,{path:"/",component:H,exact:!0}),Object(T.jsx)(te,{path:"/signup",component:z,exact:!0})]})}),Object(T.jsx)(U,{className:"footer"})]})});Object(c.render)(Object(T.jsx)(a.BrowserRouter,{children:Object(T.jsx)(re,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.67ba74b1.chunk.js.map