(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(69)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),i=(n(39),n(11)),l=n(12),s=n(14),u=n(13),m=n(15),h=n(31),d=n(3);n(40);var f=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",id:"homeLink",href:"/"},"Home"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"navbar-brand",id:"savedLink",href:"/api/books"},"Saved Books"))))},p=n(71),v=(n(41),function(){return o.a.createElement(p.a,null,o.a.createElement("h1",{className:"display-3 white"},"Book Safe"),o.a.createElement("p",{className:"lead white"},"Search for and save books you want!"),o.a.createElement("hr",{className:"my-2 white"}))}),g=n(30);n(46);var k=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8"},o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a Book",id:"search"})),o.a.createElement("div",{className:"col"},o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search"))))};n(47);var b=function(e){e.type,e.className;var t=e.children,n=e.onClick;return o.a.createElement("button",{onClick:n,className:"btn btn-primary mt-3"},t)},E=n(9),w=n.n(E),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).postToDB=function(e){var t={title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link};w.a.post("/api/books",t).then(function(){return console.log("".concat(e.title," added to database"))}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b,{type:"primary",onClick:function(){e.postToDB(e.props)}},"Save Book"))}}]),t}(a.Component);var N=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{alt:e.title,src:e.image})),o.a.createElement("div",{className:"col text-center"},o.a.createElement("h2",null,e.authors),o.a.createElement("h4",null,e.title),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link},"get info"))),o.a.createElement("div",{className:"card-text"},e.description,o.a.createElement(y,{title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}))))},j={search:function(e){return w.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(e))}},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",results:[]},n.searchAPI=function(e){j.search(e).then(function(e){n.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(g.a)({},t,a))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchAPI(n.state.search)},n.getBooks=function(){w.a.get("/api/books").then(console.log("getBooks triggered")).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchAPI("breakfast of champions")}},{key:"render",value:function(){return o.a.createElement("div",{id:"search-container"},o.a.createElement(k,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,getBooks:this.getBooks}),this.state.results.map(function(e){return o.a.createElement(N,{key:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"",link:e.volumeInfo.previewLink})}))}}]),t}(a.Component);n(65);var B=function(e){return o.a.createElement(b,Object.assign({type:"danger",className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"Delete")};var C=function(e){return o.a.createElement("div",{className:"col-12"},o.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.image}),o.a.createElement("a",{href:e.link},"get info"),o.a.createElement("h4",{className:"profile-name"},e.authors),o.a.createElement("h2",{className:"profile-position"},e.title),o.a.createElement("p",{className:"profile-info"},e.description),o.a.createElement(B,{onClick:e.onClick}))},I=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[],initialized:!0},n.getBooks=function(){w.a.get("/api/books").then(function(e){n.setState({savedBooks:e.data})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){w.a.delete("/api/books/".concat(e)).then(function(){n.getBooks()}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.savedBooks.map(function(t){return o.a.createElement(C,{key:t._id,title:t.title,authors:t.authors,description:t.description,image:t.image,link:t.link,onClick:function(){return e.deleteBook(t._id)}})}))}}]),t}(a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container p-0"},o.a.createElement(f,null),o.a.createElement(v,null),o.a.createElement(h.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:O}),o.a.createElement(d.a,{exact:!0,path:"/api/books",component:I}),o.a.createElement(d.a,{path:"/api/books/:id"}))))}}]),t}(a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):A(e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.48bc476b.chunk.js.map