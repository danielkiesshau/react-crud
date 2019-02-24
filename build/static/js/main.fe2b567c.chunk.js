(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(t,e,a){t.exports=a.p+"static/media/loading.61c188cc.gif"},23:function(t,e,a){t.exports=a(54)},29:function(t,e,a){},52:function(t,e,a){},54:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(19),s=a.n(i),r=(a(29),a(6)),c=a(3),d=a.n(c),l=a(4),u=a(7),p=a(8),h=a(10),m=a(9),b=a(11),f=a(1),g=a(22),v=a(5),j=a.n(v),O=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).deleteTodo=a.deleteTodo.bind(Object(f.a)(Object(f.a)(a))),a.editTodo=a.editTodo.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.todos;return e.editing?null:a.map(function(e,a){var n=e.id,i=e.name;return o.a.createElement("li",{key:n,className:"list-group-item"},o.a.createElement("button",{className:"btn-sm mr-4 btn btn-warning",onClick:function(e){return t.editTodo(a)}},"U"),i,o.a.createElement("button",{className:"btn-sm ml-4 btn btn-danger",onClick:function(e){return t.deleteTodo(a)}},"X"))})}},{key:"deleteTodo",value:function(){var t=Object(l.a)(d.a.mark(function t(e){var a,n,o,i,s,c;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props,n=a.todos,o=a.setState,i=a.alert,s=n[e],c=Object(r.a)(n),t.next=5,j.a.delete("".concat(this.props.apiUrl,"/todos/").concat(s.id));case 5:c.splice(e,1),o(Object(g.a)({},this.props,{todos:c,newTodo:"",editing:!1})),i("Todo deleted succesfully");case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"editTodo",value:function(t){var e=this.props.todos[t];this.props.setState({editing:!0,newTodo:e.name,editingIndex:t})}}]),e}(o.a.Component),T=a(20),w=a.n(T),k=(a(52),a(21)),y=a.n(k),E=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).state={newTodo:"",todos:[],editingIndex:null,editing:!1,notification:null,loading:!0},a.apiUrl="https://5c72bf54ba65bb0014ebf020.mockapi.io",a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.setState=a.setState.bind(Object(f.a)(Object(f.a)(a))),a.updateTodo=a.updateTodo.bind(Object(f.a)(Object(f.a)(a))),a.addTodo=a.addTodo.bind(Object(f.a)(Object(f.a)(a))),a.generateTodoId=a.generateTodoId.bind(Object(f.a)(Object(f.a)(a))),a.alert=a.alert.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(e,t),Object(p.a)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var t=Object(l.a)(d.a.mark(function t(){var e;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("".concat(this.apiUrl,"/todos"));case 2:e=t.sent,this.setState({todos:e.data,loading:!1});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{style:{height:5},src:w.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"CRUD React")),o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"text-center p-4"},"Todos App"),o.a.createElement(x,{notification:this.state.notification}),o.a.createElement("input",{type:"text",name:"todo",className:"my-4 form-control",onChange:this.handleChange,value:this.state.newTodo}),this.state.newTodo.length>0?o.a.createElement("button",{className:this.state.editing?"btn-warning mb-3 form-control":"btn-info mb-3 form-control",onClick:this.state.editing?this.updateTodo:this.addTodo},this.state.editing?"Update todo":"Add Todo"):null,this.state.loading&&o.a.createElement("img",{style:{height:150},src:y.a}),(!this.state.loading||this.state.editing)&&o.a.createElement("ul",{className:"list-group"},o.a.createElement(O,Object.assign({},this.state,{apiUrl:this.apiUrl,setState:this.setState,alert:this.alert})))))}},{key:"handleChange",value:function(t){this.setState({newTodo:t.target.value})}},{key:"updateTodo",value:function(){var t=Object(l.a)(d.a.mark(function t(e){var a,n,o,i,s,c,l;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.state,n=a.todos,o=a.editingIndex,i=a.newTodo,(s=n[o]).name=i,t.next=5,j.a.put("".concat(this.apiUrl,"/todos/").concat(s.id),s);case 5:c=t.sent,(l=Object(r.a)(n))[o]=c.data,this.setState({todos:l,editing:!1,editingIndex:null,newTodo:""});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addTodo",value:function(){var t=Object(l.a)(d.a.mark(function t(){var e,a,n,o,i;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state,a=e.todos,n=e.newTodo,o={name:n},t.next=4,j.a.post("".concat(this.apiUrl,"/todos"),o);case 4:i=t.sent,this.setState({todos:[].concat(Object(r.a)(a),[i.data])}),this.alert("Todo added successfully");case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"generateTodoId",value:function(){var t=this.state.todos[this.state.todos.length-1];return t?t.id+1:1}},{key:"alert",value:function(t){var e=this;this.setState({notification:t}),setTimeout(function(){return e.setState({notification:null})},2e3)}}]),e}(n.Component),x=function(t){var e=t.notification;return null===e?null:o.a.createElement("div",{className:"alert alert-success"},o.a.createElement("p",{className:"text-center mt-3"},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.fe2b567c.chunk.js.map