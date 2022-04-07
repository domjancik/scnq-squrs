(this.webpackJsonpsqurs=this.webpackJsonpsqurs||[]).push([[2],{100:function(e,t,n){"use strict";n.r(t);var r,c=n(9),i=n.n(c),o=n(57),a=n.n(o),u=(n(72),n(73),n(11)),s=n(37),l=n(22),b=(n(83),{apiKey:"AIzaSyA6miG1egwhyCpNcBdr-R8P3flUJP8VLj4",authDomain:"squr-d2ae8.firebaseapp.com",databaseURL:"https://squr-d2ae8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"squr-d2ae8",storageBucket:"squr-d2ae8.appspot.com",messagingSenderId:"25610237851",appId:"1:25610237851:web:8b825f5e7ab2363cd2533e"}),d=n(18),v=n(19),f=n(13),j=Object(v.a)(r||(r=Object(d.a)(["\n  position: fixed;\n  right: 2em;\n  bottom: 2em;\n  color: #abc;\n\n  a {\n    color: #abc;\n  }\n"])));var O,h=function(){return Object(f.c)("div",{css:j,children:[Object(f.b)("a",{href:"https://domj.net",target:"_blank",children:"domj"}),Object(f.b)("br",{}),"21-2"]})},p=n(7),m=n(20),g=["children"],x=Object(v.a)(O||(O=Object(d.a)(["\n  border-radius: 0.5em;\n  padding: 0.5em;\n  box-sizing: border-box;\n  box-shadow: inset 0em -0.2em 0.5em #abc;\n  background: transparent;\n  color: #abc;\n  border: none;\n  font-family: 'JetBrains Mono', monospace;\n\n  /* transition: all 100ms; */\n\n  &:hover {\n    box-shadow: inset 0em 0.2em 0.5em #abc;\n  }\n"])));var w,y,C,S=function(e){var t=e.children,n=Object(m.a)(e,g);return Object(f.b)("button",Object(p.a)(Object(p.a)({css:x},n),{},{children:t}))},k=n(105),E=Object(v.a)(w||(w=Object(d.a)(["\n  position: fixed;\n  left: 2em;\n  top: 2em;\n  pointer-events: none;\n"]))),q=Object(v.a)(y||(y=Object(d.a)(["\n  background: rgba(0, 0, 0, 0.5);\n  color: #abc;\n  border-radius: 0.5em;\n  padding: 1em;\n"]))),M=Object(v.a)(C||(C=Object(d.a)(["\n  pointer-events: all;\n"]))),R=[{title:"t",value:"time in secs"},{title:"i",value:"index of squr - 0, 1, 2... use i1 for 1-indexed"},{title:"x",value:"x index of squr, use x1 for 1-indexed"},{title:"y",value:"y index of squr, use y1 for 1-indexed"}],F=[{title:"sin(x)",value:"sine with 0-1 cycle input and 0-1 output"},{title:"tri(x)",value:"triangle with 0-1 cycle input and 0-1 output"},{title:"sqr(x, phase?)",value:"square with 0-1 cycle input, optional phase"},{title:"stp(x, a, b, c, ...)",value:"step sequencer with 0-1 cycle input"}],L=function(e){var t=e.map((function(e){var t=e.title,n=e.value;return Object(f.c)("li",{children:[Object(f.c)("strong",{children:[t,":"]})," ",n]},t+n)}));return Object(f.b)("ul",{children:t})},A={intro:function(){return Object(f.b)(k.a,{children:"make these Squrs sing and shine  \nwith *expressions* of math  \nand *clicks* of the mouse  \n\nall is synced my friend,  \ntell everyone!  \n\ntell them   \nto come\nand *flip*  \nthe Squrs  \n\ntell them  \nto use their wit  \nto find the sound  \nthat *soothes the soul*"})},variables:function(){return Object(f.c)(f.a,{children:[Object(f.b)("h3",{children:"Variables"}),L(R)]})},functions:function(){return Object(f.c)(f.a,{children:[Object(f.b)("h3",{children:"Functions"}),L(F)]})}};function I(e){var t=e.setOpen;return Object(f.b)(S,{onClick:function(){return t(!0)},children:"What am I to do?"})}function P(e){var t=e.setOpen,n=e.setPage;return Object(f.c)(f.a,{children:[Object(f.b)(S,{onClick:function(){return n("intro")},children:"Intro"}),Object(f.b)(S,{onClick:function(){return n("functions")},children:"Functions"}),Object(f.b)(S,{onClick:function(){return n("variables")},children:"Variables"}),Object(f.b)(S,{onClick:function(){return t(!1)},children:"Got it!"})]})}var V,B,T=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("intro"),o=Object(u.a)(i,2),a=o[0],s=o[1],l=Object(f.b)("div",{css:q,children:A[a]()});return Object(f.c)("div",{css:E,children:[Object(f.b)("div",{css:M,children:n?Object(f.b)(P,{setOpen:r,setPage:s}):Object(f.b)(I,{setOpen:r})}),n&&l]})},N=Object(v.a)(V||(V=Object(d.a)(["\n  color: white;\n  text-align: center;\n"]))),z=Object(v.a)(B||(B=Object(d.a)(["\n  margin-top: 1em;\n"])));var D=function(e){var t=e.onClick;return Object(f.c)("div",{css:N,children:[Object(f.b)("h1",{children:"SQUR!"}),Object(f.b)("div",{children:Object(f.b)(S,{onClick:t,children:"\u25a1\u25a1 start \u25a1\u25a1"})}),Object(f.b)("div",{css:z,children:Object(f.b)("small",{children:Object(f.b)(k.a,{children:"Hello Visitor.\n\nFor your safety no sounds will play until you press the button above.\n\nGodspeed, *domj*"})})})]})},H=Object(c.createContext)({volume:null}),G=n(15);var J=function(e){var t=e.children,n=Object(c.useRef)(1);return Object(c.useEffect)((function(){return window.setVolume=function(e){return n.current=e},function(){delete window.setVolume}}),[]),Object(G.jsx)(H.Provider,{value:{volume:n},children:t})},W=["palette","children","side","onContextMenu"],K=function(e){return{width:e,height:e}};var U=function(e){var t=e.palette,n=e.children,r=e.side,c=e.onContextMenu,i=Object(m.a)(e,W);return Object(G.jsx)("div",Object(p.a)(Object(p.a)({onContextMenu:c,style:Object(p.a)(Object(p.a)(Object(p.a)({},{position:"relative",borderRadius:"0.5em",padding:"0.5em",boxSizing:"border-box",boxShadow:"inset 0em -.2em .5em #abc"}),K(r)),t)},i),{},{children:n}))},Q=(n(21),n(62),function(e){var t=i.a.useRef(),n=i.a.useRef(),r=function r(c){if(n.current){var i=c-n.current;e(i)}n.current=c,t.current=requestAnimationFrame(r)};i.a.useEffect((function(){return t.current=requestAnimationFrame(r),function(){return cancelAnimationFrame(t.current)}}),[])});var _,X=function(e){var t=e.value,n=Object(c.useRef)(Array(30).fill(0)),r=Object(c.useState)(n.current),i=Object(u.a)(r,2),o=i[0],a=i[1],s=Object(c.useRef)(0);s.current=t,Q((function(){n.current=n.current.slice(1,n.current.length),n.current.push(s.current),a(n.current)}));var l=o.map((function(e,t){return"L".concat(1*t," ").concat(100-(90*(Math.abs(e)||0)+5))})).join(" ");return Object(G.jsx)("div",{style:{width:"100%"},children:Object(G.jsx)("svg",{height:"30",width:"100%",viewBox:"0 0 30 100",preserveAspectRatio:"none",children:Object(G.jsx)("path",{d:"M-5 0 ".concat(l),strokeWidth:"2",stroke:"currentColor",fill:"none",vectorEffect:"non-scaling-stroke"})})})},Y=Object(v.a)(_||(_=Object(d.a)(["\n  opacity: 0.3;\n  transition: all 500ms;\n  &:hover {\n    opacity: 1;\n  }\n"])));var Z=function(e){var t=e.expression,n=e.setExpression,r=e.res,c=e.fontColor;return Object(f.c)(f.a,{children:[Object(f.b)("textarea",{style:{fontFamily:"JetBrains Mono, monospace",borderRadius:"0.3em",padding:"0.5em",boxSizing:"border-box",border:"none",width:"100%",boxShadow:"inset 0em .2em .5em #abc",background:"transparent",color:c,fontWeight:"bold",transition:"all 300ms",maxWidth:"100%",minWidth:"100%",minHeight:"50%",maxHeight:"100%"},value:t,onChange:function(e){return n(e.target.value)}}),Object(f.b)("div",{css:Y,style:{color:c,fontSize:"0.5em"},children:Object(f.b)(X,{value:r})})]})},$=n(36),ee=function(e){return Math.sin(e*Math.PI*2)/2+.5},te=function(e){return e%1<.5?e%1*2:1-2*(e%1-.5)},ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;return e%1>t?1:0},re=function(e){return 1-e},ce=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;return e*re(n)+t*n},ie=function(e){var t=arguments.length<=1?0:arguments.length-1,n=Math.floor(e*t)%t;return n+1<1||arguments.length<=n+1?void 0:arguments[n+1]},oe="C",ae="F",ue="G",se="Bb",le=[oe,"D",ae,ue,"A"],be=[{title:"Major Pentatonic (5)",notes:[oe,"D","E",ue,"A"]},{title:"Egyptian Suspended (5)",notes:[oe,"D",ae,ue,se]},{title:"Blues Major Ritsusen (5)",notes:le},{title:"Blues Minor Man Gong (5)",notes:[oe,"Eb",ae,"Ab",se]},{title:"Blues Minor Pentatonic (5)",notes:[oe,"Eb",ae,ue,se]},{title:"ToneJS Sequencer Example (4)",notes:["A","Db","E","Gb"]}],de=le;window.sqursSetScale=function(e){var t=be[e%be.length];console.log("Changing to scale ".concat(t.title)),de=t.notes},window.sqursListScales=function(){be.forEach((function(e,t){var n=e.title,r=e.notes;return console.log("".concat(t,": ").concat(n," - ").concat(r))}))};var ve=function(e){var t=de[e%de.length],n=Math.floor(e/de.length);return"".concat(t).concat(n+3)},fe=function(e,t,n){var r=Object(c.useContext)(H).volume,i=Object(c.useState)(0),o=Object(u.a)(i,2),a=o[0],s=o[1];Q((function(e){s(f.current)}));var b=Object(c.useRef)((function(){return.5})),d=Object(c.useRef)(null);Object(c.useEffect)((function(){try{b.current=Object($.a)(e),d.current=null}catch(t){d.current=t}}),[e]);var v,f=Object(c.useRef)(0),j=(v=(null===n||void 0===n?void 0:n.i)||0,l.a(ve(v)).toFrequency());Object(c.useEffect)((function(){return O.current=new l.c({frequency:j,type:"sine",volume:-60,detune:30*Math.random()-15}).toDestination().start(),function(){var e;null===(e=O.current)||void 0===e||e.dispose()}}),[j]);var O=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=new l.b((function(e){var t,c=b.current(Object(p.a)({time:e,t:e,sin:ee,tri:te,sqr:ne,stp:ie,inv:re},n));if(f.current="number"===typeof c?(t=c,Math.max(Math.min(t,1),-1)):0,!isNaN(f.current)&&O.current&&r){var i=0===f.current?-1/0:ce(-60,ce(-60,-40,r.current),Math.abs(f.current));O.current&&(O.current.volume.rampTo(i,.06,e),O.current.type=f.current>=0?"sine":"square")}}),"0.03").start(0);return function(){var t;null===(t=O.current)||void 0===t||t.dispose(),e.dispose()}}),[]),{res:Math.abs(a),error:d.current,instrumentName:"expsyn"}},je=n(12),Oe="#abc";function he(e){var t=e.res,n=e.value,r=e.onClick,c=e.side,i=e.active,o="0";n>=.5&&(o="?"),n>=1&&(o="!");var a=i?Oe:"transparent",u=i?"black":t>.5?"rgba(0,0,0,0.1)":"#abc";return Object(G.jsx)(S,{onClick:r,style:{width:c,height:c,background:a,color:u,borderRadius:"100%"},children:o})}var pe={gridseq:{view:function(e){var t=e.res,n=e.expression,r=e.setExpression,c=e.side,i=e.extra,o=(null===i||void 0===i?void 0:i.step)||0,a=n.split(",").map((function(e){var t=+e;return isNaN(t)?0:t}))||[0],u=function(e){!function(e,t){var n=Object(je.a)(a);n[e]=t,r(n.join(","))}(e,(a[e]+.5)%1.5)},s="calc(".concat(c," / 4 - 5px)"),l=a.map((function(e,n){return Object(G.jsx)(he,{res:t,active:o===n,side:s,value:e,onClick:function(){return u(n)}},n)}));return Object(G.jsx)("div",{style:{textAlign:"center"},children:l})},logic:function(e,t,n){var r=Object(c.useRef)([0]),i=Object(c.useState)(0),o=Object(u.a)(i,2),a=o[0],s=o[1];Object(c.useEffect)((function(){var n=e.split(",").map((function(e){var t=+e;return isNaN(t)?0:t}));r.current=n||[0],r.current.length<16&&t("0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0")}),[e,t]);var b=Object(c.useState)(0),d=Object(u.a)(b,2),v=d[0],f=d[1],j=Object(c.useRef)(null);return Object(c.useEffect)((function(){j.current=(new l.d).toDestination(),j.current.volume.rampTo(-30,0);var e=new l.b((function(e){var t,c=Math.round(4*e)%r.current.length,i=r.current[c];s(c);var o=i>=Math.random();f(o?1:0),o&&(null===(t=j.current)||void 0===t||t.triggerAttackRelease(ve((null===n||void 0===n?void 0:n.i)||0),"8n",e))}),"8n").start(0);return function(){var t;null===(t=j.current)||void 0===t||t.dispose(),e.dispose()}}),[]),{res:v,error:null,instrumentName:"sequencer",extra:{step:a}}}},expsyn:{view:Z,logic:fe}};var me=function(e){var t=e.setView,n=e.setLogic;return{title:"Instruments",children:Object.keys(pe).map((function(e){return{title:e,action:function(){return function(e){n&&n(e),t&&t(e)}(e)}}}))}},ge="setExpression",xe=function(e,t,n){var r=function(e,t){return new CustomEvent(ge,{detail:{expression:e,condition:t},bubbles:!0})}(e,t);(null!==n&&void 0!==n?n:document).dispatchEvent(r)};var we=function(e){var t=e.variables,n=e.expression;return{title:"Clone expr",children:[{title:"To All",action:function(){return function(e,t){xe(e,void 0,t)}(n)}},{title:"To Row",action:function(){return function(e,t,n){xe(e,"y === ".concat(t),n)}(n,(null===t||void 0===t?void 0:t.y)||0)}},{title:"To Column",action:function(){return function(e,t,n){xe(e,"x === ".concat(t),n)}(n,(null===t||void 0===t?void 0:t.x)||0)}}]}};var ye=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],i=n[1],o=[me(e),we(e)],a=r.reduce((function(e,t){var n=e[t];return n.children?n.children:e}),o),s=function(e,t){return function(){e.children?i((function(e){return[].concat(Object(je.a)(e),[t])})):e.action&&e.action()}};return a.map((function(e,t){return Object(G.jsx)(S,{onClick:s(e,t),children:e.title},e.title)}))};var Ce=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],i=n[1];return{handleFlip:function(){i((function(e){return!e}))},ContentComponent:r?ye:e}};var Se,ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(c.useEffect)((function(){var n=function(n){var r=n.detail,c=r.condition,i=r.expression;c&&!Object($.b)(Object($.c)(c),t)||e(i)};return window.addEventListener("setExpression",n),function(){window.removeEventListener("setExpression",n)}}),[e,t])};function Ee(e,t,n){var r=Object(c.useState)(e),i=Object(u.a)(r,2),o=i[0],a=i[1];return[null!==t&&void 0!==t?t:o,null!==n&&void 0!==n?n:a]}var qe=Object(v.a)(Se||(Se=Object(d.a)(["\n  width: calc(100% - 1.3em);\n  position: absolute;\n  bottom: 0.9em;\n  left: 0.6em;\n  font-size: 0.25em;\n"])));var Me=function(e){e.init;var t,n,r,i,o,a=e.side,s=void 0===a?100:a,l=e.expression,b=e.setExpression,d=e.variables,v=void 0===d?{}:d,j=e.contentComponent,O=e.useExpressionHook,h=e.logic,m=e.setLogic,g=e.view,x=e.setView,w=Ee("0",l,b),y=Object(u.a)(w,2),C=y[0],k=y[1],E=Ee("expsyn",h,m),q=Object(u.a)(E,2),M=q[0],R=q[1],F=Ee("expsyn",g,x),L=Object(u.a)(F,2),A=L[0],I=L[1],P=(pe[M]||{logic:fe}).logic,V=(pe[A]||{view:Z}).view,B=Ce(null!==j&&void 0!==j?j:V),T=B.ContentComponent,N=B.handleFlip,z=(null!==O&&void 0!==O?O:P)(C,k,v),D=z.res,H=z.error,G=z.extra,J=Object(c.useState)(1),W=Object(u.a)(J,2),K=W[0],Q=W[1],_=D,X=_*K<.5?"#abc":"#444",Y=_*K>0?(t=_,{background:"rgba(".concat("170, 187, 204",", ").concat(t,")")}):function(e){return{background:"rgba(0,0,0, ".concat(e,")")}}(-_);return ke(k,v),Object(f.c)(U,Object(p.a)(Object(p.a)({palette:Y,side:s},(n=K,r=Q,i=0,o=1,{onTouchStart:function(){return r(n===o?i:o)}})),{},{children:[Object(f.b)(T,{side:s,expression:C,setExpression:k,res:_,fontColor:X,variables:v,error:H,logic:M,setLogic:R,view:A,setView:I,extra:G}),Object(f.b)(S,{css:qe,onClick:N,children:"flip"})]}))},Re=(n(56),"sin(t)"),Fe=Object.keys(pe)[0],Le=Object.keys(pe)[0],Ae=["side","storageKey","usePersistenceHook"];var Ie=function(e){var t=e.side,n=void 0===t?100:t,r=e.storageKey,c=void 0===r?"/squr":r,i=e.usePersistenceHook,o=Object(m.a)(e,Ae),a=i(c),u=a.expression,s=a.setExpression,l=a.logic,b=a.setLogic,d=a.view,v=a.setView;if(a.isError)return Object(G.jsx)(U,{side:n,palette:{background:"black"},children:"Failed to load"});var f=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view";return"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"logic","-").concat(e)}(l,d);return Object(G.jsx)(Me,Object(p.a)({side:n,expression:u,setExpression:s,logic:l,setLogic:b,view:d,setView:v},o),f)},Pe=function(e,t,n){var r=e,c=r*e,i="".concat(80/r,"vmin"),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return e%t},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return Math.floor(e/t)};return{squrs:new Array(c).fill(1).map((function(e,r){return Object(G.jsx)(Ie,{usePersistenceHook:n,side:i,storageKey:"/".concat(t,"/").concat(r),variables:{i:r,i1:r+1,x:o(r),x1:o(r)+1,y:a(r),y1:a(r)+1}},r)})),sideSize:i}},Ve=i.a.createContext(0),Be=n(14),Te=function(e,t){var n=window.localStorage.getItem(e);return null===n?t:n};var Ne=function(e,t){var n=Object(c.useState)((function(){return Te(e,t)})),r=Object(u.a)(n,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var n=setInterval((function(){var n=Te(e,t);i!==n&&o(n)}),500);return function(){clearInterval(n)}}),[e,t]),[i,function(t){o(t),function(e,t){window.localStorage.setItem(e,t)}(e,t)}]},ze=function(e){var t=Ne("".concat(e,"-expression"),Re),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Ne("".concat(e,"-logic"),Fe),o=Object(u.a)(i,2),a=o[0],s=o[1],l=Ne("".concat(e,"-view"),Le),b=Object(u.a)(l,2);return{expression:r,setExpression:c,logic:a,setLogic:s,view:b[0],setView:b[1]}},De={firebase:function(e){var t=Object(s.b)().ref(e),n=Object(s.c)(t),r=n.data,i=n.status,o=Object(c.useState)(void 0),a=Object(u.a)(o,2),l=a[0],b=a[1],d=Object(c.useState)(void 0),v=Object(u.a)(d,2),f=v[0],j=v[1],O=Object(c.useState)(void 0),h=Object(u.a)(O,2),p=h[0],m=h[1],g=function(e,n){return function(r){e(r),t.update(Object(Be.a)({},n,r))}},x=g(b,"expr"),w=g(j,"logic"),y=g(m,"view");return Object(c.useEffect)((function(){if("success"===i){var e,t,n,c=null!==(e=r.expr)&&void 0!==e?e:Re,o=null!==(t=r.logic)&&void 0!==t?t:Fe,a=null!==(n=r.view)&&void 0!==n?n:Le;c!==l&&b(c),o!==f&&j(o),a!==p&&m(a)}}),[i,r]),{expression:l,setExpression:x,logic:f,setLogic:w,view:p,setView:y}},local:ze};var He=function(){var e=window.location.search;return Object(c.useMemo)((function(){var t=new URLSearchParams(e),n=t.get("store")||"firebase";return{store:De[n]||ze,resolution:+(t.get("resolution")||"4"),room:t.get("room")||"squrs"}}),[e])},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(c.useState)(e),n=Object(u.a)(t,2),r=n[0],i=n[1];return Q((function(e){return i((function(t){return t+e/1e3}))})),r};var Je=function(){var e=Ge(),t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],i=n[1],o=He(),a=Object(c.useMemo)((function(){var e=o.resolution,t=o.room,n=o.store;return Pe(e,t,n)}),[o]),d=a.squrs,v=a.sideSize;return Object(G.jsx)(s.a,{firebaseConfig:b,children:Object(G.jsx)(J,{children:Object(G.jsx)(Ve.Provider,{value:e,children:Object(G.jsx)("div",{style:{display:"flex",height:"100vh",width:"100vw",alignItems:"center",justifyContent:"center"},children:r?Object(G.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(o.resolution,", ").concat(v,")"),gap:"2vmin"},children:[d,Object(G.jsx)(T,{}),Object(G.jsx)(h,{})]}):Object(G.jsx)(D,{onClick:function(){i(!0),l.f(),l.e.start()}})})})})})},We=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,112)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(G.jsx)(i.a.StrictMode,{children:Object(G.jsx)(Je,{})}),document.getElementById("root")),We()},72:function(e,t,n){},73:function(e,t,n){},83:function(e,t,n){}},[[100,3,4]]]);
//# sourceMappingURL=main.e22215b0.chunk.js.map