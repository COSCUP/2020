(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agenda"],{"47b7":function(e,t,n){"use strict";n.r(t);n("a15b");var a=n("7a23"),c={id:"agenda",class:"page-container"};function r(e,t,n,r,o,s){var u=Object(a["F"])("AgendaNavbar"),l=Object(a["F"])("AgendaTable"),i=Object(a["F"])("AgendaList");return Object(a["w"])(),Object(a["f"])("main",c,[Object(a["j"])(u,{modelValue:e.dayIndex,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.dayIndex=t})},null,8,["modelValue"]),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.daysData,(function(t,n){return Object(a["w"])(),Object(a["f"])(a["a"],null,[null!==t&&e.smAndUp?Object(a["P"])(Object(a["j"])(l,{key:"table-".concat(t.day.join("")),table:t.table},null,8,["table"]),[[a["L"],e.dayIndex===n]]):Object(a["g"])("",!0),null!==t&&e.xsOnly?Object(a["P"])(Object(a["j"])(i,{key:"list-".concat(t.day.join("")),list:t.list},null,8,["list"]),[[a["L"],e.dayIndex===n]]):Object(a["g"])("",!0)],64)})),256))])}n("4160"),n("d81d"),n("b0c0"),n("c1f9"),n("ac1f"),n("5319"),n("96cf");var o=n("1da1"),s=n("5530"),u=n("8055"),l=n.n(u),i=n("bc3a"),b=n.n(i),j=n("8c4f"),O=n("ab44");n("d3b7");function f(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}function d(e){var t={promise:Promise.resolve(),cancel:function(){}};if(null===e.to)return t;var n=e.container||document.documentElement,a=e.from?e.from instanceof HTMLElement?e.from.parentElement===n?{left:e.from.scrollLeft,top:e.from.scrollTop}:{left:n.scrollLeft,top:n.scrollTop}:e.from:{left:n.scrollLeft,top:n.scrollTop},c=e.offset,r=void 0===c?{left:0,top:0}:c,o=e.to instanceof HTMLElement?{left:e.to.offsetLeft+r.left,top:e.to.offsetTop+r.top}:{left:e.to.left+r.left,top:e.to.top+r.top};if(null===o)return t;var s=e.duration,u=void 0===s?500:s,l={left:o.left-a.left,top:o.top-a.top},i=10,b=0,j=!1;return{promise:new Promise((function(e){function t(){b+=i;var c={x:f(b,a.left,l.left,u),y:f(b,a.top,l.top,u)};n.scrollTo(c.x,c.y),!j&&b<u?window.setTimeout((function(){return requestAnimationFrame(t)}),i):e()}requestAnimationFrame(t)})),cancel:function(){j=!0}}}var p=Object(a["R"])("data-v-0bc21ba6");Object(a["z"])("data-v-0bc21ba6");var m={class:"agenda-navbar"},v={class:"tabs"},g={class:"day-text"},y={class:"date"};Object(a["x"])();var w=p((function(e,t,n,c,r,o){return Object(a["w"])(),Object(a["f"])("nav",m,[Object(a["j"])("div",v,[(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.days,(function(t,n){return Object(a["w"])(),Object(a["f"])("div",{class:["tab",{active:e.selectedDay.join("")===t.join("")}],key:"day-option-".concat(n),onClick:function(t){return e.onTabClick(n)}},[Object(a["j"])("span",g,Object(a["I"])("Day ".concat(n+1)),1),Object(a["j"])("span",y,Object(a["I"])(t.join(" / ")),1)],10,["onClick"])})),128))])])})),I=(n("a9e3"),n("0613")),h=Object(a["k"])({name:"AgendaNavbar",props:{modelValue:{type:Number,required:!0}},setup:function(e,t){var n=Object(I["b"])(),c=n.agendaDays,r=Object(a["d"])((function(){return c.value[e.modelValue]})),o=function(e){t.emit("update:modelValue",e)};return{days:c,selectedDay:r,onTabClick:o}}});n("e694");h.render=w,h.__scopeId="data-v-0bc21ba6";var k=h,A=(n("99af"),{class:"room-list"}),T={class:"cell-content"},x=Object(a["j"])("div",{style:{height:"0.5rem"}},null,-1),S={class:"table-body"};function N(e,t,n,c,r,o){var s=Object(a["F"])("AgendaTableRoomCell"),u=Object(a["F"])("AgendaSessionItem");return Object(a["w"])(),Object(a["f"])("table",{class:"agenda-table",style:e.tableStyle},[Object(a["j"])("thead",A,[Object(a["j"])("tr",null,[(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.table.rooms,(function(e,t){return Object(a["w"])(),Object(a["f"])("th",{key:"table-room-".concat(t)},[Object(a["j"])("div",T,[Object(a["j"])(s,{"room-id":e},null,8,["room-id"])])])})),128))])]),x,Object(a["j"])("tbody",S,[(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.table.rows,(function(e,t){return Object(a["w"])(),Object(a["f"])("tr",{key:"table-row-".concat(t)},[(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e,(function(e,n){return Object(a["w"])(),Object(a["f"])("td",{key:"table-row-".concat(t,"-cell-").concat(n),rowspan:e.rowSpan},[Object(a["j"])("div",{class:["cell-content",{blank:"Blank"===e.type}]},["Blank"!==e.type?Object(a["j"])(u,{key:0,"session-id":e.sessionId},null,8,["session-id"]):Object(a["g"])("",!0)],2)],8,["rowspan"])})),128))])})),128))])],4)}var R={class:"content-section"},D={class:"track"},E={class:"status"},F={class:"name"},L={class:"period"},C={class:"title"},P={class:"speaker-list"},_=Object(a["j"])("span",null,"by",-1),q={class:"tag-list"};function V(e,t,n,c,r,o){var s=Object(a["F"])("router-link");return Object(a["w"])(),Object(a["f"])(s,{class:"agenda-session-item",to:e.location},{default:Object(a["O"])((function(){return[Object(a["j"])("section",R,[Object(a["j"])("h4",D,[Object(a["P"])(Object(a["j"])("div",{class:["room",{full:e.isFull}]},[Object(a["j"])("span",E,Object(a["I"])(e.statusText),1),Object(a["j"])("span",F,Object(a["I"])(e.room),1)],2),[[a["L"],e.xsOnly]]),Object(a["j"])("span",null,Object(a["I"])(e.track),1)]),Object(a["j"])("h4",L,Object(a["I"])(e.period),1),Object(a["j"])("h2",C,Object(a["I"])(e.title),1),Object(a["j"])("h3",P,[_,(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.speakers,(function(t,n){return Object(a["w"])(),Object(a["f"])("span",{key:"session-".concat(e.session.id,"-speaker-").concat(n),class:"speaker"},Object(a["I"])(t),1)})),128))]),Object(a["j"])("div",q,[Object(a["j"])("span",null,Object(a["I"])(e.language),1),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.tags,(function(t,n){return Object(a["w"])(),Object(a["f"])("span",{key:"tag-".concat(e.session.id,"-tag-").concat(n),class:"tag"},Object(a["I"])(t),1)})),128))])])]})),_:1},8,["to"])}n("1276");var M=n("11a5"),z=Object(a["k"])({name:"AgendaSessionItem",props:{sessionId:{type:String,required:!0}},setup:function(e){var t=Object(I["b"])(),n=t.getSessionById,c=Object(j["c"])(),r=Object(I["b"])(),o=r.xsOnly,u=r.languagePack,l=Object(a["n"])("languageType")||{value:"zh"},i=Object(a["n"])("roomsStatus")||{value:{}},b=Object(a["d"])((function(){var t=n(e.sessionId);if(null===t)throw new Error("Invalid Session");return t})),O=Object(a["d"])((function(){return{name:"AgendaDetail",params:Object(s["a"])(Object(s["a"])({},c.currentRoute.value.params),{},{sessionId:e.sessionId})}})),f=Object(a["d"])((function(){return b.value.type[l.value].name})),d=Object(a["d"])((function(){return"".concat(Object(M["formatTimeString"])(b.value.start,"：")," ~ ").concat(Object(M["formatTimeString"])(b.value.end,"："))})),p=Object(a["d"])((function(){return b.value[l.value].title})),m=Object(a["d"])((function(){return b.value.speakers.map((function(e){return e[l.value].name}))})),v=Object(a["d"])((function(){return b.value.tags.map((function(e){return e[l.value].name}))})),g=Object(a["d"])((function(){return b.value.language})),y=Object(a["d"])((function(){return b.value.room[l.value].name.split(" / ")[0]})),w=Object(a["d"])((function(){return!!i.value[b.value.room.id]})),h=Object(a["d"])((function(){return u.value.agenda["room-status"][w.value?"full":"vacancy"]}));return{xsOnly:o,session:b,location:O,track:f,period:d,title:p,speakers:m,tags:v,language:g,room:y,isFull:w,statusText:h}}});z.render=V;var U=z,B={class:"agenda-table-room-cell"},G={class:"status"},H={class:"text"},J=Object(a["j"])("span",null,"Room",-1);function X(e,t,n,c,r,o){return Object(a["w"])(),Object(a["f"])("div",B,[Object(a["j"])("div",G,[Object(a["j"])("span",{class:["bubble",{full:e.isFull}]},null,2),Object(a["j"])("span",H,Object(a["I"])(e.statusText),1)]),J,Object(a["j"])("span",null,Object(a["I"])(e.roomName),1)])}var Y=Object(a["k"])({name:"AgendaTableRoomCell",props:{roomId:{type:String,required:!0}},setup:function(e){var t=Object(I["b"])(),n=t.languagePack,c=t.getRoomById,r=Object(a["n"])("languageType")||{value:"zh"},o=Object(a["n"])("roomsStatus")||{value:{}},s=Object(a["d"])((function(){var t=c(e.roomId);if(null===t)throw new Error("Invalid Room");return t})),u=Object(a["d"])((function(){return s.value[r.value].name.split(" / ")[0]})),l=Object(a["d"])((function(){return!!o.value[e.roomId]})),i=Object(a["d"])((function(){return n.value.agenda["room-status"][l.value?"full":"vacancy"]}));return{roomName:u,isFull:l,statusText:i}}});Y.render=X;var W=Y,K=Object(a["k"])({name:"AgendaTable",components:{AgendaTableRoomCell:W,AgendaSessionItem:U},props:{table:{type:Object,required:!0}},setup:function(e){var t=Object(j["c"])(),n=Object(a["n"])("languageType")||{value:"zh"},c=Object(a["d"])((function(){return{"--table-column":e.table.rooms.length}})),r=function(e){return{name:"AgendaDetail",params:Object(s["a"])(Object(s["a"])({},t.currentRoute.value.params),{},{sessionId:e})}};return{languageType:n,tableStyle:c,getSessionLocation:r}}});K.render=N;var Q=K,Z={class:"agenda-list"},$={class:"time"};function ee(e,t,n,c,r,o){var s=Object(a["F"])("AgendaSessionItem");return Object(a["w"])(),Object(a["f"])("ul",Z,[(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.list.sections,(function(t,n){return Object(a["w"])(),Object(a["f"])("section",{key:"agenda-list-section-".concat(n),class:"section"},[Object(a["j"])("li",$,Object(a["I"])(e.formatTimeString(t.start,"：")),1),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(t.sessions,(function(e){return Object(a["w"])(),Object(a["f"])("li",{key:"agenda-list-section-".concat(n,"-session-").concat(e),class:"session-item-container"},[Object(a["j"])(s,{"session-id":e},null,8,["session-id"])])})),128))])})),128))])}var te=Object(a["k"])({name:"AgendaList",components:{AgendaSessionItem:U},props:{list:{type:Object,required:!0}},setup:function(){return{formatTimeString:M["formatTimeString"]}}});te.render=ee;var ne=te,ae=(n("c868"),Object(a["k"])({name:"Agenda",components:{AgendaNavbar:k,AgendaTable:Q,AgendaList:ne},setup:function(){var e=Object(O["b"])(),t=Object(j["c"])(),n=Object(I["b"])(),c=n.smAndUp,r=n.xsOnly,u=n.setFullPageProgressStatus,i=n.popup,f=n.closePopup,p=n.getSessionPopupData,m=n.agendaDaysData,v=n.initAgenda,g=Object(I["b"])(),y=g.languageType,w=Object(a["d"])((function(){return"zh-TW"===y.value?"zh":y.value})),h=Object(a["C"])([]),k=Object(a["d"])((function(){return Object.fromEntries(h.value.map((function(e){return[e.id,e.isFull]})))})),A=null,T=Object(a["C"])(0),x=function(){if("AgendaDetail"===t.currentRoute.value.name){var e="room"===t.currentRoute.value.query.from;t.push(Object(s["a"])(Object(s["a"])({},t.currentRoute),{},{name:e?"Room":"Agenda",query:Object(s["a"])(Object(s["a"])({},t.currentRoute.value.query),{},{from:void 0})}))}},S=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:"","template"!==t){e.next=5;break}e.t0={popupId:"session-template",metaOptions:{title:"Template"},containerData:{type:"default"},contentData:{type:"general",html:'<article id="session-detail" class="session-detail"><h1>Session Popup Template</h1></article>'}},e.next=8;break;case 5:return e.next=7,p(t,w.value);case 7:e.t0=e.sent;case 8:n=e.t0,i(Object(s["a"])(Object(s["a"])({},n),{},{onClose:x}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("AgendaDetail"!==n.name){e.next=12;break}return e.prev=1,e.next=4,S(n.params.sessionId);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](1),e.next=10,t.replace(Object(s["a"])(Object(s["a"])({},t.currentRoute),{},{name:"Agenda"}));case 10:e.next=13;break;case 12:"Agenda"===n.name&&f();case 13:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e="https://coscup2020-room.deviltea.me",t=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(e,"/api/rooms_status"));case 2:n=t.sent,a=n.data,h.value=a.roomsStatus;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{A=l()(e),A.on("connect",t),A.on("update",t)}catch(n){console.error(n)}},D=function(){A&&A.connected&&(A.disconnect(),A=null)};return Object(a["N"])((function(){return T.value}),(function(){var e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),t=d({to:{left:0,top:0},duration:e?10:void 0}),n=t.cancel,a=["wheel","mousewheel","DOMMouseScroll"],c=function e(){a.forEach((function(t){return window.removeEventListener(t,e)})),n()};a.forEach((function(e){return window.addEventListener(e,c)}))})),Object(a["N"])((function(){return t.currentRoute.value}),N),Object(a["u"])(Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return u(!0),n.next=3,v();case 3:return n.next=5,N(t.currentRoute.value);case 5:return u(!1),e(),n.next=9,Object(a["p"])();case 9:R();case 10:case"end":return n.stop()}}),n)})))),Object(a["s"])((function(){D()})),Object(a["y"])("languageType",w),Object(a["y"])("roomsStatus",k),{smAndUp:c,xsOnly:r,dayIndex:T,daysData:m,roomsStatus:k}}}));ae.render=r;t["default"]=ae},"8f52":function(e,t,n){},a9e3:function(e,t,n){"use strict";var a=n("83ab"),c=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("5135"),u=n("c6b6"),l=n("7156"),i=n("c04e"),b=n("d039"),j=n("7c73"),O=n("241c").f,f=n("06cf").f,d=n("9bf2").f,p=n("58a8").trim,m="Number",v=c[m],g=v.prototype,y=u(j(g))==m,w=function(e){var t,n,a,c,r,o,s,u,l=i(e,!1);if("string"==typeof l&&l.length>2)if(l=p(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+l}for(r=l.slice(2),o=r.length,s=0;s<o;s++)if(u=r.charCodeAt(s),u<48||u>c)return NaN;return parseInt(r,a)}return+l};if(r(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var I,h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(y?b((function(){g.valueOf.call(n)})):u(n)!=m)?l(new v(w(t)),n,h):w(t)},k=a?O(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;k.length>A;A++)s(v,I=k[A])&&!s(h,I)&&d(h,I,f(v,I));h.prototype=g,g.constructor=h,o(c,m,h)}},c868:function(e,t,n){},e694:function(e,t,n){"use strict";n("8f52")}}]);
//# sourceMappingURL=agenda.f434e591.js.map