(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var i=t(1),c=t.n(i),a=t(7),r=t.n(a),o=(t(13),t(8)),s=t(2),l=t(4),u=t.n(l),j=(t(14),t(0)),d=function(n){var e=u()({cell:!0,winner:n.canHighlight}),t=u()({"cell-content":!0,populated:n.value});return Object(j.jsx)("button",{className:e,onClick:n.onClick,children:Object(j.jsx)("span",{className:t,children:n.value})})},b=(t(16),function(n){var e=n.cellValues.map((function(e,t){var i=n.winningCombination&&n.winningCombination.indexOf(t)>=0;return Object(j.jsx)(d,{value:e,canHighlight:i,onClick:function(){return n.cellClicked(t)}},t)}));return Object(j.jsx)("div",{id:"board",children:e})}),O=(t(17),function(n){var e=u()({"modal-open":n.isGameOver}),t=n.winner?" ".concat(n.winner," is the winner. "):" It's a TIE. ";return Object(j.jsx)("div",{id:"modal-overlay",className:e,children:Object(j.jsxs)("div",{id:"game-result-modal",children:[Object(j.jsx)("div",{id:"result-container",children:Object(j.jsx)("div",{id:"winner-container",children:Object(j.jsx)("span",{children:t})})}),Object(j.jsx)("div",{id:"new-game-container",children:Object(j.jsx)("button",{id:"new-game-button",onClick:n.onNewGameClicked,children:"Start New Game"})})]})})}),h={0:[[1,2],[3,6],[4,8]],1:[[0,2],[4,7]],2:[[0,1],[5,8],[4,6]],3:[[0,6],[4,5]],4:[[2,6],[3,5],[1,7],[0,8]],5:[[3,4],[2,8]],6:[[7,8],[0,3],[2,4]],7:[[6,8],[1,4]],8:[[6,7],[2,5],[0,4]]},v=(t(18),function(){var n=Object(i.useState)(["","","","","","","","",""]),e=Object(s.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(!0),r=Object(s.a)(a,2),l=r[0],u=r[1],d=Object(i.useState)(!1),v=Object(s.a)(d,2),m=v[0],f=v[1],g=Object(i.useState)(9),w=Object(s.a)(g,2),x=w[0],C=w[1],p=Object(i.useState)(),k=Object(s.a)(p,2),S=k[0],F=k[1],N=Object(i.useState)([]),T=Object(s.a)(N,2),G=T[0],I=T[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"game",children:[Object(j.jsx)("h1",{children:"Tic Tac Toe"}),Object(j.jsx)(b,{cellValues:t,winningCombination:G,cellClicked:function(n){if(function(n){return""===t[n]}(n)){var e=Object(o.a)(t);e[n]=l?"X":"O";var i=x-1,a=function(n,e,t){for(var i=h[t],c=0;c<i.length;c++){var a=n[t],r=n[i[c][0]],o=n[i[c][1]];if(a===r&&r===o)return{hasResult:!0,winner:a,winningCombination:[t,i[c][0],i[c][1]]}}return 0===e?{hasResult:!0,winner:void 0,winningCombination:[]}:{hasResult:!1,winner:void 0,winningCombination:[]}}(e,i,n);c(e),u(!l),C(i),f(a.hasResult),F(a.winner),I(a.winningCombination)}}})]}),Object(j.jsx)(O,{isGameOver:m,winner:S,onNewGameClicked:function(){c(["","","","","","","","",""]),u(!0),C(9),f(!1),F(void 0),I([])}})]})});var m=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v,{})})},f=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.c9c7a78e.chunk.js.map