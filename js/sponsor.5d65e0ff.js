(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sponsor"],{b85c:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t("a4d3"),t("e01a"),t("d28b"),t("d3b7"),t("3ca3"),t("ddb0");var r=t("06c5");function a(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(r["a"])(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==t["return"]||t["return"]()}finally{if(i)throw o}}}}},d4b9:function(e,n,t){"use strict";t.r(n);t("b0c0"),t("b64b"),t("9911");var r=t("7a23"),a={id:"sponsor",class:"page-container"},c={class:"card outer-container"},o={class:"title"},s={class:"call-for-sponsorship"},i=Object(r["j"])("a",{href:"mailto:sponsorship@coscup.org"}," sponsorship@coscup.org ",-1),u={class:"title level"},l={class:"img-container"},b={class:"content-container"},f=Object(r["j"])("span",null,"Read More",-1);function p(e,n,t,p,d,j){return Object(r["w"])(),Object(r["f"])("main",a,[Object(r["j"])("div",c,[Object(r["j"])("h2",o,Object(r["I"])(e.languagePack.sponsor.callForSponsorship.title),1),Object(r["j"])("p",s,[Object(r["i"])(Object(r["I"])(e.languagePack.sponsor.callForSponsorship.content)+" ",1),i])]),(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(Object.keys(e.sponsorGroups),(function(t){return Object(r["w"])(),Object(r["f"])("div",{key:"sponsor-level-".concat(t),class:"outer-container"},[Object(r["j"])("h2",u,Object(r["I"])(e.languagePack.sponsor.level[t]),1),(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(e.sponsorGroups[t],(function(t){return Object(r["w"])(),Object(r["f"])("div",{key:t.id,class:"card sponsor-container"},[Object(r["j"])("div",l,[Object(r["j"])("a",{href:"".concat(t.link),target:"_blank",rel:"noopener"},[Object(r["j"])("img",{src:"/2020/images/sponsors/".concat(t.image),alt:"Sponsor ".concat(t.name[e.languageType],"'s logo")},null,8,["src","alt"])],8,["href"])]),Object(r["j"])("div",b,[Object(r["j"])("a",{href:"".concat(t.link),target:"_blank",rel:"noopener"},[Object(r["j"])("h2",null,Object(r["I"])(t.name[e.languageType]),1)],8,["href"]),e.introSet[t.id]&&e.introSet[t.id][e.languageType]?(Object(r["w"])(),Object(r["f"])("article",{key:0,innerHTML:e.introSet[t.id][e.languageType],class:"markdown"},null,8,["innerHTML"])):Object(r["g"])("",!0),Object(r["j"])("div",{class:"readmore",onClick:n[1]||(n[1]=function(){return e.onReadmoreClick.apply(e,arguments)})},[f])])])})),128))])})),128))])}t("4160"),t("a630"),t("c975"),t("4fad"),t("c1f9"),t("3ca3"),t("159b");var d=t("b85c"),j=(t("96cf"),t("1da1")),O=t("6edf"),g=t.n(O),v=t("1ae1"),h=t("c5bb"),m=t("9919"),k=(t("da3d"),t("ab44")),w=t("0613"),y=Object(r["k"])({name:"Sponsor",setup:function(){var e=Object(w["b"])(),n=e.breakpoint,t=e.languageType,a=e.languagePack,c=Object(k["b"])(),o=Object(r["A"])(Object.fromEntries(Object.entries(g()(m,"level")).sort((function(e,n){var t=["titanium","diamond","gold","silver","bronze","co-organizer","special-thanks"];return t.indexOf(e[0])-t.indexOf(n[0])})))),s=Object(r["C"])({}),i=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var n,t,r,a,c,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={},t=Object(d["a"])(m),e.prev=2,t.s();case 4:if((r=t.n()).done){e.next=27;break}a=r.value,n[a.id]={en:"","zh-TW":""},c=Object(d["a"])(v["a"]),e.prev=8,c.s();case 10:if((o=c.n()).done){e.next=17;break}return i=o.value,e.next=14,Object(h["a"])(a.intro[i]);case 14:n[a.id][i]=e.sent;case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](8),c.e(e.t0);case 22:return e.prev=22,c.f(),e.finish(22);case 25:e.next=4;break;case 27:e.next=32;break;case 29:e.prev=29,e.t1=e["catch"](2),t.e(e.t1);case 32:return e.prev=32,t.f(),e.finish(32);case 35:s.value=n;case 36:case"end":return e.stop()}}),e,null,[[2,29,32,35],[8,19,22,25]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Array.from(document.querySelectorAll("#sponsor .content-container"));e.forEach((function(e){e.classList.remove("folded")})),e.forEach((function(e){e.getBoundingClientRect().height>300&&e.classList.add("folded")}))},l=function(e){var n=e.target.parentElement;n.classList.remove("folded")};return Object(r["N"])((function(){return n.value}),Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:u();case 1:case"end":return e.stop()}}),e)})))),Object(r["u"])(Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:u(),c();case 4:case"end":return e.stop()}}),e)})))),{languageType:t,languagePack:a,introSet:s,sponsorGroups:o,onReadmoreClick:l}}});y.render=p;n["default"]=y},da3d:function(e,n,t){}}]);
//# sourceMappingURL=sponsor.5d65e0ff.js.map