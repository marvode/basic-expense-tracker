(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(13),a(14),function(){return r.a.createElement("h1",{className:"text-3xl my-4"},"Expense Tracker")}),s=a(2),u=a(5),i=a(3),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(i.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(i.a)({},e,{transactions:[].concat(Object(u.a)(e.transactions),[t.payload])});case"CLEAR_TRANSACTIONS":return Object(i.a)({},e,{transactions:[]});case"ADD_TRANSACTIONS":return Object(i.a)({},e,{transactions:t.payload});default:return e}},d=function(){return JSON.parse(localStorage.getItem("transactions"))},p=function(e){localStorage.setItem("transactions",JSON.stringify(e))},f={transactions:function(){var e=d();return e||(p([]),[])}()},b=Object(n.createContext)(f),E=function(e){var t=e.children,a=Object(n.useReducer)(m,f),c=Object(s.a)(a,2),o=c[0],l=c[1];return r.a.createElement(b.Provider,{value:{transactions:o.transactions,deleteTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})},clearTransactions:function(){l({type:"CLEAR_TRANSACTIONS"})},addTransactions:function(e){l({type:"ADD_TRANSACTIONS",payload:e})}}},t)},N=function(){var e=Object(n.useContext)(b).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",{className:"grid grid-cols-2 py-5 mb-8 bg-white rounded shadow"},r.a.createElement("div",{className:"mx-auto tracking-wide"},r.a.createElement("h4",{className:"uppercase"},"Income"),r.a.createElement("p",{className:"text-green-500 text-center"},"$",t)),r.a.createElement("div",{className:"mx-auto tracking-wide"},r.a.createElement("h4",{className:"uppercase"},"Expense"),r.a.createElement("p",{className:"text-red-500 text-center"},"$",a)))},x=function(){var e=Object(n.useContext)(b).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2),t=e>=0?"":"-";return r.a.createElement("div",{className:"mb-5"},r.a.createElement("h3",{className:"uppercase"},"Your Balance"),r.a.createElement("h2",{className:"text-5xl leading-none tracking-wide"},"".concat(t,"$ ").concat(Math.abs(e))))},h=function(e){var t=e.id,a=e.text,c=e.amount,o=Object(n.useContext)(b).deleteTransaction,l=c>0?"+":"-",s=c>=0?"border-green-600":"border-red-600";return r.a.createElement("li",{className:"mb-3 transaction-item transform duration-500 hover:-translate-y-1"},r.a.createElement("div",{className:"bg-white px-3 py-3 border-r-8 rounded shadow  hover:shadow-lg ".concat(s)},r.a.createElement("p",{className:"flex justify-between"},r.a.createElement("span",{className:"capitalize"},r.a.createElement("button",{className:"px-2 mr-2 del_button",onClick:function(){o(t),function(e){var t=d().filter((function(t){return t.id!==e}));p(t)}(t)}},"\xd7"),a),r.a.createElement("span",null,"".concat(l," $ ").concat(Math.abs(c))))))},v=function(){var e=Object(n.useContext)(b),t=e.transactions,a=e.clearTransactions;return r.a.createElement("div",{className:"pb-8"},r.a.createElement("div",{className:"flex justify-between pb-2 mb-3 border-b border-gray-400"},r.a.createElement("h3",{className:"-pb-2"},"History"),t.length?r.a.createElement("button",{className:" px-2 py-1 bg-red-600 rounded",onClick:function(){a(),localStorage.removeItem("transactions")}},"Clear"):""),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),i=l[0],m=l[1],f=Object(n.useContext)(b).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",{className:"pb-2 mb-3 border-b border-gray-400"},"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e9*Math.random()),text:a,amount:parseFloat(i)};f(t),function(e){var t=d();p(t?[].concat(Object(u.a)(t),[e]):[e])}(t),c(""),m("")}},r.a.createElement("div",{className:"pb-2"},r.a.createElement("label",{className:"mb-2"},"Text"),r.a.createElement("input",{className:"w-full px-3 py-2 rounded focus:outline-none focus:shadow-outline",type:"text",placeholder:"Enter text",onChange:function(e){return c(e.target.value)},value:a,required:!0})),r.a.createElement("div",{className:"pb-4"},r.a.createElement("label",{className:"mb-2"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{className:"w-full px-3 py-2 rounded focus:outline-none focus:shadow-outline",type:"number",placeholder:"Enter amount",onChange:function(e){return m(e.target.value)},value:i,required:!0})),r.a.createElement("button",{className:"bg-teal-600 w-full py-3 text-center text-gray-200 rounded",type:"submit"},"Add transaction")))};var y=function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"flex content-center text-lg text-gray-800",style:{height:"100vh"}},r.a.createElement("div",{className:"max-w-md mx-auto my-auto pb-5 px-5 shadow-md rounded",style:{backgroundColor:"#f7f7f7"}},r.a.createElement(l,null),r.a.createElement(x,null),r.a.createElement(N,null),r.a.createElement(v,null),r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6d750eac.chunk.js.map