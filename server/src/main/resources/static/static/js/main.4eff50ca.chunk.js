(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(91)},63:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(9),i=n.n(r),o=(n(61),n(10)),c=n(11),s=n(13),m=n(12),u=n(14),d=(n(63),n(96)),h=n(94),p=n(97),g=n(8),E=n(93),v=n(20),f=n.n(v),y=function(e,t,n){return function(a){var l={eventId:n,organizationId:1,user:{name:e,phone:t}};f.a.post("/register",l)}},b=n(18),x=n(29),j=(n(24),n(16)),O=n.n(j),w=n(19),N=(n(92),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toggle=function(){e.setState({modal:!e.state.modal,nameVal:localStorage.getItem("name"),phoneNumValue:localStorage.getItem("phone")})},e.handleName=function(t){e.setState({nameVal:t.target.value})},e.handlePhoneNumber=function(t){e.setState({phoneNumValue:t.target.value})},e.isPhoneNum=function(e){return!!e.match(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\/\s.]?[0-9]{4}$/)},e.isName=function(e){return!!e.match(/^[a-zA-Z\s]+$/)},e.handleNamePlaceholder=function(){return localStorage.getItem("name")?localStorage.getItem("name"):"Enter full name"},e.handlePhonePlaceholder=function(){return localStorage.getItem("phone")?localStorage.getItem("phone"):"Enter phone number (e.g. 555-555-5555)"},e.state={modal:!1,phoneNumValue:"",nameVal:""},console.log("im constructed"),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.events.length?l.a.createElement("div",null,l.a.createElement(b.a,{style:{marginLeft:"10px"},variant:"success",onClick:this.toggle},"Volunteer"),l.a.createElement(w.a,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(w.c,{toggle:this.toggle},"Volunteer Form"),l.a.createElement(w.b,null,l.a.createElement(b.b,null,"Name"),l.a.createElement("div",null,l.a.createElement("input",{name:"name",value:this.state.nameVal,onChange:this.handleName,className:"form-control"})),l.a.createElement(b.b,{style:{paddingTop:"10px"}},"Phone Number"),l.a.createElement("div",null,l.a.createElement("input",{name:"phone",value:this.state.phoneNumValue,onChange:this.handlePhoneNumber,className:"form-control"})),l.a.createElement(b.a,{style:{marginTop:"10px"},onClick:function(){var t={phone:e.state.phoneNumValue,name:e.state.nameVal};e.isPhoneNum(t.phone)?e.isName(t.name)?(localStorage.setItem("event_ID",e.props.event_ID),localStorage.setItem("name",t.name),localStorage.setItem("phone",t.phone),e.props.signupEvent(t.name,t.phone,e.props.event_ID)):alert("Invalid name"):alert("Invalid phone number"),e.setState({modal:!e.state.modal})},variant:"success"},"Sign up")))):l.a.createElement("div",null,"Loading...")}}]),t}(a.Component)),I={signupEvent:y},S=Object(g.b)(function(e){return{events:e.events}},I)(N),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.events,t=[{style:{display:"flex",alignItems:"center"},Header:l.a.createElement("h3",null,"Name"),maxWidth:300,accessor:"title"},{style:{alignSelf:"center"},Header:l.a.createElement("h3",null,"Status"),accessor:"events",Cell:function(e){return function(e,t,n){var a,r=e/t*100;return r>=100?a="red":r>0&&r<50?a="green":r>=50&&r<=100&&(a="yellow"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement("span",{style:{color:a,transition:"all .3s ease"}},"\u25cf\xa0\xa0",l.a.createElement("span",{style:{color:"black"}},Math.ceil(e)," volunteers needed")),l.a.createElement("span",{style:{display:"flex",alignItems:"center",paddingRight:"20px"}},l.a.createElement(E.a,{to:"/dashboard/admin/event/".concat(n)},l.a.createElement(b.a,{variant:"info"},"Admin")),l.a.createElement(S,{event_ID:n})))}(e.original.remaining,e.original.desiredAttendees,e.original.id)}},{style:{display:"flex",alignItems:"center"},Header:l.a.createElement("h3",null,"Date"),maxWidth:300,accessor:"date",Cell:function(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column"}},l.a.createElement("span",null,O()(e.original.date).format("LL")),l.a.createElement("span",null,O()(e.original.date).format("LT")),l.a.createElement("span",null,O()(e.original.date,"YYYYMMDD").fromNow()))}}];return e.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"absolute",left:"0",width:"250px",height:"100%",display:"flex",color:"white",flexDirection:"row",backgroundColor:"grey"}},l.a.createElement("div",{style:{width:"100%",height:"200px",textAlign:"center",marginTop:"5px",display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{marginBottom:"50px"}},l.a.createElement("h2",{style:{color:"white"}}," Paz de Cristo "),l.a.createElement("h5",{style:{color:"white"}}," 424 W. Broadway Rd. "),l.a.createElement("span",null,"480-464-2370")),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}}))),l.a.createElement("div",{style:{margin:"0 0 0 250px"}},l.a.createElement("span",{style:{width:"100%"}},l.a.createElement(x.a,{defaultSorted:[{id:"date",desc:!1}],style:{height:window.innerHeight},defaultPageSize:10,data:e,columns:t,className:"-striped -highlight"})))):l.a.createElement("div",null,"Loading...")}}]),t}(a.Component),D={signupEvent:y},k=Object(g.b)(function(e){return{events:e.events}},D)(C),V=n(53),A=n.n(V),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.adminEvent,t=this.props.adminEvent.users;console.log("admin",this.props.adminEvent);var n=[{style:{display:"flex",alignItems:"center"},Header:l.a.createElement("h3",null,"Name"),maxWidth:300,accessor:"user.name"},{style:{display:"flex",alignItems:"center"},Header:l.a.createElement("h3",null,"Phone Number"),maxWidth:300,accessor:"user.phone"},{style:{alignSelf:"center"},Header:l.a.createElement("h3",null,"Attendance Probability"),accessor:"probability",Cell:function(e){return l.a.createElement(w.d,{animated:!0,color:100*e.original.probability<33?"danger":100*e.original.probability<66?"warning":100*e.original.probability<=100?"success":null,value:100*e.original.probability},100*e.original.probability,"%")}}];return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"absolute",left:"0",width:"250px",height:"100%",display:"flex",color:"white",flexDirection:"row",backgroundColor:"grey"}},l.a.createElement("div",{style:{width:"100%",height:"200px",textAlign:"center",marginTop:"5px",display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{marginBottom:"50px"}},l.a.createElement("h2",{style:{color:"white"}},"   ",e.event.title),l.a.createElement("h5",{style:{color:"white"}},"   ",O()(e.event.date).format("LL")),l.a.createElement("h5",{style:{color:"white"}},"   ",O()(e.event.date).format("LT")),l.a.createElement("h6",{style:{color:"white"}},"   (",O()(e.event.date,"YYYYMMDD").fromNow(),")")),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("h2",{style:{color:"white"}},"Status"),l.a.createElement("h1",{style:{color:"white",fontWeight:"600",fontSize:"50px"}},(e.numberGoing/e.event.desiredAttendees*100).toFixed(0),"%"),l.a.createElement(A.a,{style:{backgroundColor:"white",borderRadius:"100%",width:"70%",margin:"0",padding:"0"},data:[{value:1,key:1,color:"#E38627"}],reveal:e.numberGoing/e.event.desiredAttendees*100,lineWidth:100,lengthAngle:180,animate:!0})))),l.a.createElement("div",{style:{margin:"0 0 0 250px"}},l.a.createElement("span",{style:{width:"100%"}},l.a.createElement(x.a,{style:{height:window.innerHeight},defaultPageSize:10,data:t,columns:n,className:"-striped -highlight"})))):l.a.createElement("div",null,"Loading...")}}]),t}(a.Component),P=Object(g.b)(function(e){return{adminEvent:e.adminEvent[e.adminEvent.length-1]}},{})(T),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.event_id;if(!this.props.match)return l.a.createElement("div",null,"Loading...");this.props.fetchEventAdmin(e)}},{key:"render",value:function(){return this.props.adminEvent?l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null)):l.a.createElement("div",null,"Loading...")}}]),t}(a.Component),L={fetchEventAdmin:function(e){return function(t){f.a.get("/event/".concat(e)).then(function(e){console.log(e.data),t({type:"FETCH_EVENT_ADMIN",payload:e.data})})}}},_=Object(p.a)(Object(g.b)(function(e){return{adminEvent:e.adminEvent[0]}},L)(H)),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchEvents()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/orgs/:id/events",component:k}),l.a.createElement(h.a,{exact:!0,path:"/dashboard/admin/event/:event_id",component:_})))}}]),t}(a.Component),M={fetchEvents:function(){return function(e){f.a.get("/orgs/1/events").then(function(t){e({type:"FETCH_EVENTS",payload:t.data})})}}},Y=Object(p.a)(Object(g.b)(function(e){return{events:e.events}},M)(F)),W=n(15),z=n(55),B=n(21),R=Object(W.c)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EVENTS":return Object(B.a)(e).concat(Object(B.a)(t.payload));default:return e}},adminEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EVENT_ADMIN":return Object(B.a)(e).concat([t.payload]);default:return e}}}),G=Object(W.e)(R,Object(W.d)(Object(W.a)(z.a))),J=n(95);i.a.render(l.a.createElement(g.a,{store:G},l.a.createElement(J.a,null,l.a.createElement(Y,null))),document.getElementById("root"))}},[[56,2,1]]]);
//# sourceMappingURL=main.4eff50ca.chunk.js.map