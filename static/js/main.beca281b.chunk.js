(this["webpackJsonpudayy-assignment"]=this["webpackJsonpudayy-assignment"]||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(22),a(23),a(9)),s=a(1),i=a(6);a(24);function m(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],u=o[1],d=Object(n.useState)(!1),h=Object(i.a)(d,2),g=h[0],E=h[1],v=Object(n.useState)(!1),p=Object(i.a)(v,2),b=p[0],f=p[1],w=Object(n.useState)(!1),j=Object(i.a)(w,2),N=j[0],O=j[1],S=Object(n.useState)(!1),y=Object(i.a)(S,2),A=y[0],k=y[1];return Object(n.useEffect)((function(){localStorage.getItem("token")&&k(!0)})),A?l.a.createElement(s.a,{to:"/dashboard"}):l.a.createElement("div",{className:"loginFormContainer"},l.a.createElement("div",{className:"loginForm"},l.a.createElement("div",{className:"loginHeader"},"Login"),l.a.createElement("div",{className:"loginInput"},l.a.createElement("input",{type:"email",value:a,onChange:function(e){r(e.target.value),E(!1),O(!1)},placeholder:"Enter your email"}),g?l.a.createElement("div",{className:"errorMessage"},"* Please provide a valid email address."):null),l.a.createElement("div",{className:"loginInput"},l.a.createElement("input",{type:"password",value:m,onChange:function(e){u(e.target.value),f(!1),O(!1)},placeholder:"Enter your password"}),b?l.a.createElement("div",{className:"errorMessage"},"* Password is required."):null),l.a.createElement("button",{className:"loginButton",onClick:function(){a.length>0&&m.length>0?a.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?"test@test.com"===a&&"test123"===m?(O(!1),k(!0),localStorage.setItem("email",a),localStorage.setItem("token","adsjkfhdf6ADFfsadfaASDF344FG$#dgdfg")):O(!0):E(!0):(0!==a.length&&a.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||E(!0),0===m.length&&f(!0))}},"Login"),N?l.a.createElement("div",{className:"errorMessage",style:{fontSize:"13px"}},"Wrong email or password."):null))}a(30);function u(){var e=localStorage.getItem("token"),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),u=m[0],d=m[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),E=g[0],v=g[1];return Object(n.useEffect)((function(){e||v(!0)}),[E]),E?(localStorage.clear(),l.a.createElement(s.a,{to:"/"})):l.a.createElement("div",{className:"dashboardContainer"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"eachHeaderElement"},localStorage.getItem("email")),l.a.createElement("div",{className:"eachHeaderElement"},l.a.createElement("input",{type:"text",style:{width:"25vw"},value:r,onChange:function(e){return c(e.target.value)},placeholder:"Enter url 1 here"})),l.a.createElement("div",{className:"eachHeaderElement"},l.a.createElement("input",{type:"text",style:{width:"25vw"},value:u,onChange:function(e){return d(e.target.value)},placeholder:"Enter url 2 here"})),l.a.createElement("div",{className:"eachHeaderElement"},l.a.createElement("button",{className:"logoutButton",onClick:function(){return v(!0)}},"Log out"))),l.a.createElement("div",{className:"viewAreaConatiner"},l.a.createElement("div",{className:"viewArea"},r.length>0?l.a.createElement("iframe",{src:r,style:{height:"100%",width:"100%"},title:"url2Viewer"},l.a.createElement("p",null,"Your browser does not support iframes.")):l.a.createElement("p",{className:"urlInputtext"},"Fill Url 1 in above input field to view the web page here.")),l.a.createElement("div",{className:"viewArea"},u.length>0?l.a.createElement("iframe",{src:u,style:{height:"100%",width:"100%"},title:"url2Viewer"},l.a.createElement("p",null,"Your browser does not support iframes.")):l.a.createElement("p",{className:"urlInputtext"},"Fill Url 2 in above input field to view the web page here."))))}var d=function(){return l.a.createElement(o.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:m}),l.a.createElement(s.b,{path:"/dashboard",component:u}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.beca281b.chunk.js.map