(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(5),o=a(16),i=a(2),s=a(3),m=a.n(s),p=a(9),f=a(17),d=a(6),b=a(18);a(42),a(44),a(51);b.initializeApp({apiKey:"AIzaSyCSMHjGoTKZ2v6ThbBUk9VjC2VrgUO5u8M",authDomain:"nwitter-b6331.firebaseapp.com",databaseURL:"https://nwitter-b6331.firebaseio.com",projectId:"nwitter-b6331",storageBucket:"nwitter-b6331.appspot.com",messagingSenderId:"394556490921",appId:"1:394556490921:web:a002ac8d7a0cebc0f2d5b8"});var E=b.auth(),h=b,v=b.firestore(),g=b.storage(),y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),b=d[0],h=d[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),y=g[0],w=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,E.createUserWithEmailAndPassword(a,i);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,E.signInWithEmailAndPassword(a,i);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",value:b?"Create Account":"Log In",className:"authInput authSubmit"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},b?"Sign In":"Create Account"),r.a.createElement("div",null,y))},w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===a&&(n=new h.auth.GithubAuthProvider),e.next=4,E.signInWithPopup(n);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(d.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(y,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(d.a,{icon:f.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(d.a,{icon:f.a}))))},O=a(31),j=a(12),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(t.text),f=Object(u.a)(s,2),b=f[0],E=f[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("Are you sure you wanna delete this nweet??"),console.log(a),!a){e.next=9;break}return console.log(t),e.next=6,v.doc("nweets/".concat(t.id)).delete();case 6:if(!t.attachmentUrl){e.next=9;break}return e.next=9,g.refFromURL(t.attachmentUrl).delete();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return i((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v.doc("nweets/".concat(t.id)).update({text:b});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",onChange:function(e){var t=e.target.value;E(t)},value:b,require:!0,autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("button",{onClick:y,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:"",style:{zIndex:9}}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:h},r.a.createElement(d.a,{icon:j.d})),r.a.createElement("span",{onClick:y},r.a.createElement(d.a,{icon:j.a})))))},N=a(53),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),f=s[0],b=s[1],E=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==f){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===l){e.next=12;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(l,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:f,createAt:h.firestore.Timestamp.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,v.collection("nweets").add(u);case 15:b(""),o("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:E,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;b(t)},type:"text",placeholder:"what's on your mind?",maxLength:120,value:f}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(d.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files;console.log(e.target.value);var a=t[0],n=new FileReader;n.addEventListener("loadend",(function(e){var t=e.currentTarget.result;console.log(e.currentTarget),o(t)})),void 0!==a&&n.readAsDataURL(a)},style:{opacity:0}}),l&&r.a.createElement("div",{className:"factoryFrom__attachment"},r.a.createElement("img",{src:l,style:{backgroundImage:l},alt:""}),r.a.createElement("div",{className:"factoryFrom__clear",onClick:function(){o("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(d.a,{icon:j.c}))))},S=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){v.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(d.a,{icon:f.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(d.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\u306e Profile"):"Profile")))))},I=function(e){var t=e.userObj,a=e.refreshUser,c=Object(i.g)(),l=Object(n.useState)(t.displayName),o=Object(u.a)(l,2),s=o[0],f=o[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{type:"text",placeholder:"Display Name",autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){E.signOut(),c.push("/")}},"Log Out"))},F=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return r.a.createElement(o.a,null,t&&r.a.createElement(C,{userObj:a}),r.a.createElement(i.d,null,t?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(S,{userObj:a})),r.a.createElement(i.b,{exact:!0,path:"/profile"},r.a.createElement(I,{userObj:a,refreshUser:n}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(i.a,{from:"*",to:"/"}))))};var A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){E.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{isLoggedIn:Boolean(i),userObj:i,refreshUser:function(){var e=E.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing....")};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.da624603.chunk.js.map