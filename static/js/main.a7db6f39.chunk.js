(this.webpackJsonpmono=this.webpackJsonpmono||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=(n(13),n(1)),l=n(2),s=n(4),m=n(3);n(14),n(15);function u(e){return r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Hi, welcome to my test project!"),r.a.createElement("button",{className:"check-app",onClick:e.changeScreen},"Check the app"))}var d=n(7),h=[{make:"Mini",model:"Cooper JCW GP",isNew:!0,price:5e4},{make:"Ferrari",model:"F50",isNew:!1,price:3e6},{make:"Subaru",model:"Impreza 22B",isNew:!1,price:1e5},{make:"Audi",model:"RSQ8",isNew:!0,price:14e4},{make:"Aston Martin",model:"Rapide",isNew:!1,price:6e4},{make:"Bentley",model:"Flying Spur",isNew:!0,price:275e3},{make:"Porsche",model:"935",isNew:!0,price:1e6},{make:"Porsche",model:"Cayenne Turbo S",isNew:!0,price:2e5},{make:"Maserati",model:"Coupe",isNew:!1,price:2e4},{make:"Fisker",model:"Karma",isNew:!1,price:4e4},{make:"Ferrari",model:"F8 Tributo",isNew:!0,price:3e5},{make:"GMC",model:"Sierra 3500HD Denali",isNew:!0,price:8e4},{make:"McLaren",model:"570S GT4",isNew:!0,price:2e5},{make:"Porsche",model:"Panamera",isNew:!1,price:3e4},{make:"Mercedes",model:"G63 AMG",isNew:!0,price:2e5},{make:"Ford",model:"F-650",isNew:!0,price:15e4},{make:"Pagani",model:"Zonda",isNew:!1,price:6e6},{make:"Mercedes",model:"G63 AMG 6x6",isNew:!0,price:15e5},{make:"Ferrari",model:"599 GTO",isNew:!1,price:55e4},{make:"Porsche",model:"911 Speedster",isNew:!0,price:3e5},{make:"Jaguar",model:"XE SV Project",isNew:!0,price:2e5},{make:"McLaren",model:"GT",isNew:!0,price:25e4},{make:"McLaren",model:"P1",isNew:!1,price:2e6},{make:"Lexus",model:"LX5709",isNew:!0,price:95e3},{make:"Aston Martin",model:"Superleggera",isNew:!0,price:35e4},{make:"Bentley",model:"Continental GT",isNew:!0,price:25e4},{make:"Bugatti",model:"Chiron",isNew:!1,price:3e6},{make:"BMW",model:"i3",isNew:!0,price:5e4},{make:"Kia",model:"K900",isNew:!0,price:6e4},{make:"Aston Martin",model:"Vanquish S Volante",isNew:!0,price:34e4}];n(16);function p(e){var t=e.forProperty;return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:t},t),r.a.createElement("input",{name:t,id:t,type:"text",placeholder:e.placeholder,"data-value":e.placeholder,onChange:function(n){return e.onInputChangeFunc(n,t)}}))}function k(e){var t=e.propertiesArray,n=e.placeholdersObject;return r.a.createElement("div",null,t.map((function(t){return r.a.createElement(p,{key:t,forProperty:t,placeholder:n[t],onInputChangeFunc:e.onInputChangeFunc})})))}var f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e,t){0!==e.target.value.length&&a.setState(Object(d.a)({},t,e.target.value))},a.changeItemInArray=function(e){var t=h.findIndex((function(t){return e.reduce((function(e,n){return e&&t[n]===a.props[n]}),!0)}));e.forEach((function(e){""!==a.state[e]&&("number"===typeof h[t][e]?h[t][e]=Number(a.state[e]):h[t][e]=a.state[e])}))},a.state={make:"",model:"",price:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card-container edit-card"},r.a.createElement(k,{propertiesArray:Object.keys(this.state),placeholdersObject:this.props,onInputChangeFunc:this.handleInputChange}),r.a.createElement("button",{className:"changes-btn",onClick:function(){e.changeItemInArray(Object.keys(e.state)),e.props.changeScreen()}},"Make changes"))}}]),n}(a.Component),g=(n(17),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleCardClick=function(){a.props.screen.includes("edit")&&a.setState({cardClicked:!0})},a.state={cardClicked:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"card-container",onClick:this.handleCardClick},r.a.createElement("h3",{className:"car-make"},this.props.car.make),r.a.createElement("p",null,this.props.car.model),r.a.createElement("p",null,"$",new Intl.NumberFormat("en-US").format(this.props.car.price)));return r.a.createElement("div",null,this.state.cardClicked?r.a.createElement(f,{make:this.props.car.make,model:this.props.car.model,price:this.props.car.price,changeScreen:function(){return e.props.changeScreen("main")}}):t)}}]),n}(a.Component));n(18);function C(e){return r.a.createElement("div",{className:"card-list"},e.cars.map((function(t){return r.a.createElement(g,{key:t.model+Math.random(),car:t,screen:e.screen,changeScreen:e.changeScreen})})))}n(19);var E=function(e){var t=e.placeholder,n=e.onChange;return r.a.createElement("div",null,r.a.createElement("h2",null,"Find a car"),r.a.createElement("input",{className:"search",onChange:n,type:"search",placeholder:t}))};n(20);function S(e){return r.a.createElement("button",{className:"sort-button",onClick:function(){e.onClick(e.sortBy,e.direction)}},"Sort ",e.direction)}n(21);function v(e){return r.a.createElement("div",{className:"sort-option"},r.a.createElement("h3",null,"Sort by ",e.sortBy),r.a.createElement(S,{sortBy:e.sortBy,direction:"ascending",onClick:e.doOnSortClick}),r.a.createElement(S,{sortBy:e.sortBy,direction:"descending",onClick:e.doOnSortClick}))}function N(e){return r.a.createElement("div",null,r.a.createElement(v,{doOnSortClick:e.doOnSortClick,sortBy:"make"}),r.a.createElement(v,{doOnSortClick:e.doOnSortClick,sortBy:"model"}),r.a.createElement(v,{doOnSortClick:e.doOnSortClick,sortBy:"price"}))}function b(e){return r.a.createElement("div",null,r.a.createElement(E,{onChange:e.handleSearchfieldChange,placeholder:"search"}),r.a.createElement(N,{doOnSortClick:e.doOnSortClick}))}n(22);function w(e){for(var t=[],n=1;n<=Math.ceil(e.totalCards/e.cardsPerPage);n++)t.push(n);return r.a.createElement("div",null,t.map((function(t){return r.a.createElement("button",{className:"page-button",key:t,id:t,onClick:e.setCurrentPage},t)})))}n(23);function y(e){var t="edit"===e.screen?r.a.createElement("h3",null,"Click on a card to edit it"):r.a.createElement("h3",null,"Make your changes");return r.a.createElement("div",{className:"screen"},r.a.createElement("h2",null,"Edit a card"),t,r.a.createElement("button",{className:"go-back-button",onClick:function(){return e.changeScreen("main")}},"Go back to main"),e.children)}n(24);var O=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSearchfieldChange=function(e){a.setState({searchText:e.target.value})},a.handleSortButtonClick=function(e,t){a.setState({sortParams:{sortBy:e,direction:t}})},a.setCurrentPage=function(e){a.setState({currentPage:e.target.id})},a.state={searchText:"",sortParams:{sortBy:"make",direction:"ascending"},currentPage:1,cardsPerPage:6},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.searchText,a=t.sortParams,c=a.sortBy,i=a.direction,o=t.currentPage,l=t.cardsPerPage,s=this.props.screen,m=function(e,t,n){return"ascending"===t?e.sort((function(e,t){return"string"===typeof e[n]?e[n].toLowerCase()>t[n].toLowerCase()?1:-1:e[n]>t[n]?1:-1})):"descending"===t?e.sort((function(e,t){return"string"===typeof e[n]?e[n].toLowerCase()<t[n].toLowerCase()?1:-1:e[n]<t[n]?1:-1})):void 0}(h,i,c).filter((function(e){return e.make.toLowerCase().includes(n)||e.model.toLowerCase().includes(n)})),u=function(e,t,n){var a=t*n,r=a-n;return e.slice(r,a)}(m,o,l),d=r.a.createElement(y,{changeScreen:this.props.changeScreen,screen:s},r.a.createElement(C,{changeScreen:this.props.changeScreen,cars:u,screen:s})),p=r.a.createElement("div",null,r.a.createElement(b,{handleSearchfieldChange:this.handleSearchfieldChange,doOnSortClick:this.handleSortButtonClick}),r.a.createElement("button",{className:"go-to-edit-btn",onClick:function(){return e.props.changeScreen("edit")}},"Edit a card"),r.a.createElement(C,{cars:u,screen:s}),r.a.createElement(w,{cardsPerPage:this.state.cardsPerPage,totalCards:m.length,setCurrentPage:this.setCurrentPage}));return r.a.createElement("div",{className:"Main"},r.a.createElement("h1",null,"Cars"),"main"===s?p:d)}}]),n}(a.Component),P=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).changeScreen=function(t){e.setState({screen:t})},e.state={screen:"home"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.screen;return"home"===t?r.a.createElement(u,{changeScreen:function(){return e.changeScreen("main")}}):r.a.createElement(O,{screen:t,changeScreen:this.changeScreen})}}]),n}(a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a7db6f39.chunk.js.map