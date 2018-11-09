(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),i=n(11),u=n(12),c=n(14),s=n(13),m=n(15),f=function(e,t){return e.map(function(e){return o.a.createElement("tr",{key:e.name},o.a.createElement("td",{align:"left"},e.name),o.a.createElement("td",{align:"left"},e.number),o.a.createElement("td",{align:"left"},o.a.createElement("button",{onClick:function(){return t.deletePerson(e.id)}},"poista")))})},d=function(e){var t=e.app;return o.a.createElement("div",null,o.a.createElement("h3",null,"Rajaa tuloksia"),o.a.createElement("div",null,"Rajaa: ",o.a.createElement("input",{value:t.state.filter,onChange:t.filterChange})))},p=function(e){var t=e.app;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:t.addNewName},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:t.state.newName,onChange:t.nameChange})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:t.state.newNumber,onChange:t.numberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))))},g=function(e){var t,n=e.app;if(0===n.state.filter.length)t=f(n.state.persons,n);else{var a=n.state.persons.filter(function(e){return e.name.toLowerCase().includes(n.state.filter.toLowerCase())});t=f(a,n)}return o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{align:"left"},"Nimi"),o.a.createElement("th",{align:"left"},"Numero"),o.a.createElement("th",{align:"left"},"Poista")),t)))},h=function(e){var t=e.note;return null===t||""===t?null:o.a.createElement("div",{className:"notification"},t)},v=n(2),w=n.n(v),E="/api/persons",b={getAll:function(){return w.a.get(E).then(function(e){return e.data})},create:function(e){return w.a.post(E,e).then(function(e){return e.data})},update:function(e,t){return w.a.put("".concat(E,"/").concat(e),t).catch(function(e){console.log("Failed to update person. ",e)}).then(function(e){return e.data})},deletePerson:function(e){return w.a.delete("".concat(E,"/").concat(e)).catch(function(e){console.log("Deletion failed: ",e)}).then(function(e){return e.data})}},N=(n(40),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).nameChange=function(e){console.log("Name change event: ",e.target.value),n.setState({newName:e.target.value})},n.numberChange=function(e){console.log("Number change event: ",e.target.value),n.setState({newNumber:e.target.value})},n.filterChange=function(e){console.log("Filter change event: ",e.target.value),n.setState({filter:e.target.value}),n.forceUpdate()},n.addNewName=function(e){if(console.log("Add new name"),e.preventDefault(),0!==n.state.newName.length&&0!==n.state.newNumber.length){var t=n.state.persons.map(function(e){return e.name}).includes(n.state.newName),a=n.state.persons.map(function(e){return e.number}).includes(n.state.newNumber);if(t&&a)console.log("Tried to add duplicate name or number: ",n.state.newName,n.state.newNumber);else if(t)n.updatePerson();else{console.log("Adding new person: ",n.state.newName,n.state.newNumber);var o={name:n.state.newName,number:n.state.newNumber};b.create(o).then(function(e){console.log("Response: ",e)}),n.removeNotification()}}else console.log("Tried to add empty name or number")},n.updatePerson=function(){var e=n.state.persons.filter(function(e){return e.name===n.state.newName})[0];console.log("Updateing person: ",e);var t={name:e.name,number:n.state.newNumber};console.log("Replacing with: ",t),window.confirm("Haluatko korvata henkil\xf6n ",e.name," numeron?")&&(b.update(e.id,t).then(function(t){var a=n.state.persons.filter(function(t){return t.id!==e.id});n.setState({persons:a.concat(t),notification:"P\xe4ivitettiin "+e.name+"n numero."})}).catch(function(e){b.create(t).then(function(e){console.log("Response: ",e);var t=n.state.persons.map(function(t){return t.name===e.name&&(t.number=e.number),t});n.setState({persons:t})})}),n.removeNotification())},n.deletePerson=function(e){window.confirm("Haluatko poistaa henkil\xf6n?")&&(console.log("delete person"),b.deletePerson(e).then(function(t){var a=n.state.persons.filter(function(t){return t.id!==e});n.setState({persons:a,notification:"Poistettiin henkil\xf6 "})}),n.removeNotification())},n.removeNotification=function(){console.log("removing notification..."),setTimeout(function(){n.setState({notification:null})},5e3)},n.state={persons:[],newName:"",newNumber:"",filter:"",notification:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Did mount."),b.getAll().then(function(t){e.setState({persons:t})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(h,{note:this.state.notification}),o.a.createElement(d,{app:this}),o.a.createElement("h3",null,"Lis\xe4\xe4 henkil\xf6"),o.a.createElement(p,{app:this}),o.a.createElement("h2",null,"Numerot"),o.a.createElement(g,{app:this}))}}]),t}(o.a.Component));l.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.b59c2998.chunk.js.map