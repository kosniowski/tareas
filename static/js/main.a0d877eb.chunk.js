(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(9),o=n.n(i),c=n(19),l=n(25),d=n(2);function r(e){var t=e.todo,n=e.toggleTodo,a=t.id,i=t.task,o=t.completed;return Object(d.jsxs)("li",{style:{fontFamily:"monospace",listStyle:"none",fontSize:"20px"},children:[Object(d.jsx)("input",{type:"checkbox",checked:o,onChange:function(){n(a)}})," ",i]})}function s(e){var t=e.todos,n=e.toggleTodo;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(r,{todo:e,toggleTodo:n},e.id)}))})}var j=n(55),p=n(54),u=n(53),h="todoApp.todos";function m(){var e=Object(a.useState)([{id:1,task:"Tarea 1",completed:!1}]),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useRef)();Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(h));e&&i(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem(h,JSON.stringify(n))}),[n]);return Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)(u.a,{style:{padding:"20px",width:"auto",display:"float",margin:"auto",maxWidth:"200em",background:"#ECE9D5"},elevation:6,children:[Object(d.jsx)(u.a,{style:{padding:"20px",width:"auto",display:"float",margin:"auto",background:"#2ECDBF",maxWidth:"19em"},elevation:6,children:Object(d.jsx)("h1",{style:{padding:"10px",width:"auto",display:"float",margin:"auto",textAlign:"center",fontFamily:"monospace"},children:"LISTA DE TAREAS"})}),Object(d.jsx)("div",{style:{display:"white",height:"10px"}}),Object(d.jsxs)(u.a,{style:{padding:"20px",width:"auto",display:"float",margin:"auto",background:"#33333D",maxWidth:"16em"},elevation:6,children:[Object(d.jsx)("h2",{style:{textAlign:"center",fontFamily:"monospace",color:"white"},children:"ESCRIBE UNA NUEVA TAREA"}),Object(d.jsxs)("div",{style:{paddingLeft:"3em"},children:["  ",Object(d.jsx)("input",{style:{fontFamily:"monospace"},ref:o,type:"text",placeholder:"Nueva Tarea"})]}),Object(d.jsx)("div",{style:{display:"white",height:"10px"}}),Object(d.jsxs)("div",{style:{marginLeft:"6em"},children:[" ",Object(d.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){var e=o.current.value;""!==e&&(i((function(t){return[].concat(Object(c.a)(t),[{id:Object(j.a)(),task:e,completed:!1}])})),o.current.value=null)},children:"\u2795"})]})]}),Object(d.jsx)("div",{style:{display:"white",height:"10px"}}),Object(d.jsxs)(u.a,{style:{padding:"20px",width:"auto",display:"float",margin:"auto",background:"#2ECDBF",maxWidth:"16em"},elevation:6,children:[Object(d.jsx)("h2",{style:{textAlign:"center",fontFamily:"monospace"},children:"TAREAS PENDIENTES"}),Object(d.jsx)(s,{todos:n,toggleTodo:function(e){var t=Object(c.a)(n),a=t.find((function(t){return t.id===e}));a.completed=!a.completed,i(t)}}),Object(d.jsx)("a",{children:" "}),Object(d.jsxs)("div",{style:{marginLeft:"6em"},children:["   ",Object(d.jsx)(p.a,{variant:"contained",color:"secondary",onClick:function(){var e=n.filter((function(e){return!e.completed}));i(e)},children:"\ud83d\uddd1\ufe0f"})," "]}),Object(d.jsx)("p",{style:{textAlign:"center",fontFamily:"monospace"},children:"Selecciona y elimina las tareas terminadas"})]}),Object(d.jsx)("div",{style:{display:"white",height:"10px"}}),Object(d.jsx)(u.a,{style:{padding:"20px",width:"auto",display:"float",margin:"auto",background:"#33333D",maxWidth:"19em",color:"white"},elevation:6,children:Object(d.jsxs)("h2",{style:{fontFamily:"monospace",textAlign:"center"},children:["Te quedan ",n.filter((function(e){return!e.completed})).length," Tareas por terminar !!!"]})})]})})}o.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a0d877eb.chunk.js.map