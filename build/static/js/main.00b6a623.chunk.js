(this["webpackJsonpboat-project-list"]=this["webpackJsonpboat-project-list"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(8),i=a.n(r),l=(a(13),a(2)),o=a(3),c=a(5),h=a(4),d=(a(14),["Check for any signs of leaks","Check for cracks or stressed areas","Check thru-hulls for rust","Check stringers","Wash with a pH balanced soap","Wax or paint hull","Apply primer on the hull","Apply antifouling","Check and refill water tank","Check the drain for clogs","Check condensation in pan under evaporator","Check flare(s)","Check fire extinguisher","Check lifejackets - tears or missing parts","Check and restock first aid kit","Check flashlight and batteries","Check and refill spare gas can","Check tender for damage","Check tender paddles and outboard","Check propeller shaft anode","Replace propeller shaft anode","Check transmission - prop shaft coupling","Check gear shaft linkage (outboard)","Check the propeller shaft","Check the strut","Check the cutlass bearing","Check the propeller anode","Clean the propeller, strut & shaft","Check the propeller","Check the propeller nuts & cotter pin","Grease the prop-shaft before installation","Clean raw water intake thru-hull","Check seacock(s) open/close smoothly","Place emergency plugs by all seacocks","Clean raw water strainer","Check raw water pump","Check the impeller","Replace the impeller","Check batteries with a multimeter","Clean battery tops & terminals","Check electrolyte levels - wet-cell batteries","Add water to the unsealed wet-cell batteries","Check specific gravity of wet-cell batteries","Load test a 12-volt battery","Check if the alternator works","Check starter solenoid","Check all cables and connections","Check the bilge pump","Check water tightness","Hatches - check tightness","Helm instruments check","Service air conditioner","Cabin light - check/replace","Navigation lights - check/replace","Check the mast(s)","Check the boom","Check the running rigging","Centerboard","Check all sails","Test Marine Radio (voice call)","Test Steering (free movement)","Test Tilt / Trim","Test Bilge Pump","Check Galley / Heating Systems","Check Gauges (i.e. batteries)","Check Fuel Amount","Ensure Anchor is ready for use","Check load of vessel","Secure gear from shifting","Check lifejackets","Check the Weather Forecast"]),u=["Engine oil","Transmission oil","Coolant","Alternator belt","Replace the alternator belt","Water pump belt","Check pulleys","Belts & pulleys alignment","Tighten belts","First fuel filter","Engine fuel filter","Water separator filter","Check all fuel lines","Replace the fuel lines","Bleed the fuel system (if needed)","Check spark plugs","Replace spark plugs","Change Oil filter","Check Air filter","Change air filter","Grease control cable ends","Replace control cables","Check steering cable","Replace steering cable","Liquid in the hydraulic steering system","Grease engine mount threads","Check transom mount (outboard)","Grease all designated points(outboard)","Check fuel pump","Replace fuel pump","Clean carburator","Rebuild carburator","Check fuel tank for contamination","Check the glow plugs","Replace the glow plugs","Check heat exchanger anode","Replace heat exchange anode","Check the exhaust manifold","Check the water lock","Empty the water lock","Check propeller shaft anode","Grease the shaft packing gland","Measure temperature all around the engine","Replace propeller shaft anode","Check transmission - prop shaft coupling","Check gear shaft linkage (outboard)","Check the propeller shaft","Check the strut","Check the cutlass bearing","Check the propeller anode","Clean the propeller, strut & shaft","Check the propeller","Check the propeller nuts & cotter pin","Grease the prop-shaft before installation","Clean raw water intake thru-hull","Check seacock(s) open/close smoothly","Place emergency plugs by all seacocks","Clean raw water strainer","Check raw water pump","Check the impeller","Replace the impeller","Check batteries with a multimeter","Clean battery tops & terminals","Check electrolyte levels - wet-cell batteries","Add water to the unsealed wet-cell batteries","Check specific gravity of wet-cell batteries","Load test a 12-volt battery","Check if the alternator works","Check starter solenoid","Check all cables and connections","Check the bilge pump"],p=a(0),m=function(e){var t=e.array,a=t.map((function(e){return Object(p.jsxs)("label",{className:"listings item",htmlFor:e,children:[Object(p.jsx)("input",{type:"checkbox",className:"checkboxItems",id:t[e],name:t[e]}),e,Object(p.jsx)("div",{className:"action",children:"Started"}),Object(p.jsx)("input",{type:"radio",name:"progress"}),Object(p.jsx)("div",{className:"action",children:"Done"}),Object(p.jsx)("input",{type:"radio",name:"progress"})]},e)}));return Object(p.jsx)("div",{className:"list",children:Object(p.jsx)("div",{children:a})})},b=(a(16),function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit1=function(){e.setState({addedItem:e.state.input}),u.push(e.state.input),e.setState({input:""})},e.onButtonSubmit2=function(){e.setState({addedItem:e.state.input}),d.push(e.state.input),e.setState({input:""})},e.state={input:"",addedItem:[]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"engineItems ",children:[Object(p.jsx)("h3",{children:"Engine items"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{array:u}),Object(p.jsx)("input",{id:"userinput",onChange:this.onInputChange,type:"text",value:this.state.input,placeholder:"Add an item"}),Object(p.jsx)("button",{id:"enter",onClick:this.onButtonSubmit1,children:"Add"})]})]}),Object(p.jsxs)("div",{className:"boatWorks",children:[Object(p.jsx)("h3",{children:"Boat works and checks"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{array:d}),Object(p.jsx)("input",{id:"userinput2",onChange:this.onInputChange,type:"text",value:this.state.input,placeholder:"Add an item"}),Object(p.jsx)("button",{id:"enter2",onClick:this.onButtonSubmit2,children:"Add"})]})]})]})}}]),a}(s.a.Component)),j=function(e){var t=e.createList;return Object(p.jsx)("button",{type:"submit",onClick:t,className:"createbutton",value:"Create your list!",children:"Create your list!"})},g=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"btn login",type:"submit",value:"My Lists"})})},C=(a(7),function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitLogIn=function(){fetch("http://localhost:3000/login/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(p.jsx)("div",{id:"login",className:"modal fade",role:"dialog",children:Object(p.jsx)("div",{className:"modal-dialog center",children:Object(p.jsx)("div",{className:"modal-content",children:Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{onChange:this.onEmailChange,type:"email",name:"email",className:"email form-control",placeholder:"E-mail",required:!0}),Object(p.jsx)("input",{onChange:this.onPasswordChange,type:"password",name:"password",className:"password form-control",placeholder:"Password"}),Object(p.jsx)("input",{onClick:this.onSubmitLogIn,className:"btn login",type:"submit",value:"Login"}),Object(p.jsx)("input",{onClick:function(){return e("register")},className:"btn login",style:{color:"red"},type:"submit",value:"Register"})]})})})})})}}]),a}(s.a.Component)),f=function(e){var t=e.onRouteChange;return Object(p.jsx)("div",{children:Object(p.jsx)("p",{onClick:function(){return t("login")},className:"btn login",children:"Log Out"})})},k=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onRegisterSubmit=function(){fetch("http://localhost:3000/register/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{id:"Register",className:"modal fade",role:"dialog",children:Object(p.jsx)("div",{className:"modal-dialog center",children:Object(p.jsx)("div",{className:"modal-content",children:Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{onChange:this.onNameChange,type:"text",name:"name",className:"name form-control",placeholder:"Name"}),Object(p.jsx)("input",{onChange:this.onEmailChange,type:"email",name:"email",className:"email form-control",placeholder:"E-mail"}),Object(p.jsx)("input",{onChange:this.onPasswordChange,type:"password",name:"password",className:"password form-control",placeholder:"Password"}),Object(p.jsx)("input",{onClick:function(){return e.onRegisterSubmit},className:"btn login",type:"submit",value:"Register"})]})})})})})}}]),a}(s.a.Component),O=function(e){return Object(p.jsx)("div",{style:{overflowY:"scroll",height:"55vh"},children:e.children})},x=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,mylist:t.mylist,joined:t.joined}})},e.onCreate=function(){var e=document.getElementsByClassName("checkboxItems");console.log(e)},e.state={itemsList:[],newArray:[],route:"login",user:{id:"",name:"",email:"",mylist:"",joined:""}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{children:"home"===this.state.route?Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)(g,{style:{cursor:"pointer"}}),Object(p.jsx)(f,{onRouteChange:this.onRouteChange}),Object(p.jsx)("button",{className:"btn login username form-control",children:Object(p.jsx)("a",{href:"mailto: captain@oneplaceboating.com",style:{textDecoration:"none",color:"gold"},children:"E-mail Us"})})]}):"register"===this.state.route?Object(p.jsxs)("div",{className:"navbar",style:{display:"grid",gridTemplateColumns:"9fr 1fr",alignItems:"center",marginLeft:"80px"},children:[Object(p.jsx)(k,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}),Object(p.jsx)("button",{className:"btn login username form-control",children:Object(p.jsx)("a",{href:"mailto: captain@oneplaceboating.com",style:{textDecoration:"none",color:"gold"},children:"E-mail Us"})})]}):Object(p.jsxs)("div",{className:"navbar",style:{display:"grid",gridTemplateColumns:"9fr 1fr",alignItems:"center",marginLeft:"80px"},children:[Object(p.jsx)(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}),Object(p.jsx)("button",{style:{justifySelf:"end"},className:"btn login username form-control",children:Object(p.jsx)("a",{href:"mailto: captain@oneplaceboating.com",style:{textDecoration:"none",color:"gold"},children:"E-mail Us"})})]})}),Object(p.jsxs)("div",{className:"body",children:[Object(p.jsxs)("div",{id:"appTitle",children:[Object(p.jsx)("h1",{className:"title",children:"Boating Project List"}),Object(p.jsx)("h2",{className:"subtitle",children:'Register / log in , choose jobs from the lists, add also your own jobs, and then click on, "create your list"'})]}),Object(p.jsxs)("div",{className:"Items",children:[Object(p.jsx)(O,{children:Object(p.jsx)(b,{})}),Object(p.jsx)(j,{createList:this.onCreate})]})]}),Object(p.jsx)("h3",{className:"footer",children:"Disclaimer"})]})}}]),a}(s.a.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),y()}],[[17,1,2]]]);
//# sourceMappingURL=main.00b6a623.chunk.js.map