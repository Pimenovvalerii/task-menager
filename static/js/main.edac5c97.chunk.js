(this["webpackJsonptask-menager"]=this["webpackJsonptask-menager"]||[]).push([[0],{154:function(e,t,a){e.exports=a(244)},228:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},240:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),l=a(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(163);var i=a(64),u=a(8),d=a(65),f=a(52),s=a(88),m=a.n(s),y=c.a.createContext(),p=a(87),b=a(37),E=a.n(b),h=function(e){return{type:"DATA/CHANG_DATA",payload:e}},v=function(e){return{type:"DATA/SET_DATA",payload:e}},k=a(148),D=a(24),j=a(245),O=a(249),A=function(e){var t=e.value,a=Object(l.b)(),r=Object(l.c)((function(e){return e.appData})),o=r.data,i=r.todayData,u=Object(n.useState)(!1),d=Object(f.a)(u,2),s=d[0],m=d[1],y=Object(n.useState)(""),p=Object(f.a)(y,2),b=p[0],E=p[1];return Object(n.useEffect)((function(){E(t.task)}),[t.task]),c.a.createElement("div",null,c.a.createElement(k.a,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",placement:"topRight"},c.a.createElement(D.a,{shape:"circle",icon:c.a.createElement(O.a,null),onClick:function(){m(!0)}})),c.a.createElement(j.a,{title:"Basic Modal",visible:s,onOk:function(e){m(!1),o.forEach((function(e){e.id===t.id&&(e.task=b)})),i.forEach((function(e){e.id===t.id&&(e.task=b)})),a(h({data:o,todayData:i}))},onCancel:function(e){E(t.task),m(!1)}},c.a.createElement("textarea",{name:"story",rows:"5",cols:"33",value:b,onChange:function(e){E(e.target.value)}})))},T=a(248),g=a(250),w=a(251),x=a(252),C=Object(p.b)((function(e){var t=e.value,a=e.type,r=t.checked&&"table-task--done",o=Object(n.useContext)(y).tableTaskControl;Object(n.useContext)(y);return c.a.createElement("li",{className:"table-task ".concat(r)},c.a.createElement("div",{className:"table-task__date"},E()(t.data).format("DD MMMM YYYY")),c.a.createElement("div",{className:"table-task__key"},t.key),c.a.createElement("div",{className:"table-task__text"},t.task),c.a.createElement("div",{className:"control-panel"},c.a.createElement("div",{className:"control-panel__elem"},c.a.createElement(A,{value:t}),c.a.createElement(k.a,{title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",placement:"bottomLeft"},c.a.createElement(D.a,{shape:"circle",icon:c.a.createElement(g.a,{twoToneColor:"#52c41a"}),onClick:function(){return o.handleChacked(t)}}))),c.a.createElement("div",{className:"control-panel__elem"},c.a.createElement(T.a,{title:"Sure to delete?",onConfirm:function(){return o.handleDelete(t.id)}},c.a.createElement(D.a,{shape:"circle",icon:c.a.createElement(w.a,{twoToneColor:"#52c41a"})})),"data"===a||t.everyday?c.a.createElement(k.a,{title:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c",placement:"bottomLeft"},c.a.createElement(D.a,{shape:"circle",icon:c.a.createElement(x.a,{twoToneColor:"#eb2f96"}),onClick:function(){return o.handleEveryday(t.id)}})):null)))})),_=Object(p.a)((function(e){var t=e.items,a=e.type;return c.a.createElement("ul",null,t.map((function(e,t){return c.a.createElement(C,{key:e.key,index:t,value:e,type:a})})))})),M=(a(228),function(e){var t=e.data,a=e.type,r=Object(l.b)(),o=Object(n.useState)(t),i=Object(f.a)(o,2),s=i[0],p=i[1],b=Object(l.c)((function(e){return e.appData}));Object(n.useEffect)((function(){p(t)}),[t]);var E={handleDelete:function(e){var t=b.data,a=b.todayData;(t=t.filter((function(t){return t.id!==e}))).forEach((function(e,t){e.key=t+1})),(a=a.filter((function(t){return t.id!==e}))).forEach((function(e,t){e.key=t+1})),r(h({data:t,todayData:a}))},handleChacked:function(e){var t=b.data,a=b.todayData;t.forEach((function(t){t.id===e.id&&(t.checked=!t.checked)})),a.forEach((function(t){t.id===e.id&&(t.checked=!t.checked)})),r(h({data:t,todayData:a}))},handleEveryday:function(e){var t=b.data,a=b.todayData,n={};t.forEach((function(t){t.id===e&&(t.everyday=!t.everyday)})),a.forEach((function(t){t.id===e&&(t.everyday=!t.everyday)}));var c=t.filter((function(t){return t.id===e}));for(var o in c[0])console.log(o," = ",c[0][o]),n[o]=c[0][o];if(a.filter((function(e){return e.id===n.id})).length)r(h({data:t,todayData:a}));else{var l=[].concat(Object(d.a)(a),[n]);l.forEach((function(e,t){return e.key=t+1})),r(h({data:t,todayData:Object(d.a)(l)}))}}};return c.a.createElement(y.Provider,{value:{tableTaskControl:E}},"data"===a&&!t.length&&c.a.createElement(u.a,{to:"/"}),c.a.createElement(_,{items:s,onSortEnd:function(e){var t=e.oldIndex,n=e.newIndex;if(p(m()(s,t,n)),"data"===a){var c=m()(s,t,n);c.forEach((function(e,t){return e.key=t+1})),r(h({data:c,todayData:b.todayData}))}if("todayData"===a){var o=m()(s,t,n);o.forEach((function(e,t){return e.key=t+1})),r(h({data:b.data,todayData:o}))}},type:a}))}),N=(a(230),function(){var e=Object(l.c)((function(e){return e.appData.todayData}));return c.a.createElement(M,{data:e,type:"todayData"})}),Y=function(){var e=Object(l.c)((function(e){return e.appData.data}));return c.a.createElement(M,{data:e,type:"data"})},S=(a(231),function(){return c.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0442\u0430\u0441\u043e\u043a \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0438\u043b\u0438 \u043d\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0433\u0440\u0430\u0444\u0438\u043a \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0441\u043e\u0434\u0430\u043d\u044b\u0445 \u0442\u0430\u0441\u043e\u043a \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0445 \u0437\u0430 \u043f\u0435\u0440\u0438\u043e\u0434 \u043c\u0435\u0441\u044f\u0446 : \u0441\u043e\u0437\u0434\u0430\u043d\u043e 5 \u0442\u0430\u0441\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e 2 \u043d\u0435\u0434\u0435\u043b\u044f \u0433\u043e\u0434")}),I=a(246),B=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.appData})),a=t.data,r=t.todayData,o=Object(n.useState)(""),i=Object(f.a)(o,2),u=i[0],s=i[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=Math.floor(1e6*Math.random()),c=b().valueOf(),o={key:a.length+1,id:n,checked:!1,everyday:!1,date:c,task:u},l={key:r.length+1,id:n,checked:!1,everyday:!1,date:c,task:u};e(h({data:[].concat(Object(d.a)(a),[o]),todayData:[].concat(Object(d.a)(r),[l])})),s("")}},c.a.createElement(I.a,{placeholder:"Basic usage",onChange:function(e){s(e.target.value)},value:u}),c.a.createElement(D.a,{type:"primary",htmlType:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"))};a(240);var U=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/all-task"},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/statistics"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")))),c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/"},c.a.createElement(B,null),c.a.createElement(N,null)),c.a.createElement(u.b,{path:"/all-task"},c.a.createElement(Y,null)),c.a.createElement(u.b,{path:"/statistics"},c.a.createElement(S,null)))))},$=a(32),G=a(150),J=a(152),R={data:[],todayData:[]},H=Object($.c)({appData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA/SET_DATA":return Object(J.a)({},e,{},t.payload);default:return e}}}),L=a(26),P=a.n(L),V=a(53),W="$2b$10$5lgVDxg.soDXeYRaXUq8huBbb3U.F4V84S1kdZaKnf7Ri9l2OU3le";function X(){return fetch("https://api.jsonbin.io/b/".concat("5f07225f5d4af74b01293f0b"),{method:"GET",headers:{"secret-key":W}}).then((function(e){return e.json()}))}function q(e){return fetch("https://api.jsonbin.io/b/".concat("5f07225f5d4af74b01293f0b"),{method:"PUT",headers:{"Content-Type":"application/json","secret-key":W,versioning:"false"},body:JSON.stringify(e)})}var F=P.a.mark(ee),K=P.a.mark(te),Z=P.a.mark(ae),z=P.a.mark(ne),Q=P.a.mark(ce);function ee(e){var t;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(V.c)(v(t));case 3:q(t);case 4:case"end":return a.stop()}}),F)}function te(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.d)("DATA/CHANG_DATA",ee);case 2:case"end":return e.stop()}}),K)}function ae(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(V.b)(X);case 2:return(e=t.sent).todayData=e.todayData.filter((function(e){return e.everyday?e:b(e.date).format("DD MMM YYYY")===b().format("DD MMM YYYY")})),e.todayData.forEach((function(e,t){return e.key=t+1})),t.next=7,Object(V.c)(v(e));case 7:case"end":return t.stop()}}),Z)}function ne(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.d)("DATA/INIT_DATA",ae);case 2:case"end":return e.stop()}}),z)}function ce(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([ne(),te()]);case 2:case"end":return e.stop()}}),Q)}var re=Object(G.a)(),oe=Object($.e)(H,Object($.a)(re,(function(e){var t=e.dispatch;return setTimeout((function(){return t({type:"DATA/INIT_DATA"})}),0),function(e){return function(t){return e(t)}}})));re.run(ce);a(242),a(243);o.a.render(c.a.createElement(l.a,{store:oe},c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.edac5c97.chunk.js.map