(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,n){},19:function(e,a,n){},21:function(e,a,n){},23:function(e,a,n){},27:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(7),c=n.n(r),i=(n(17),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),d=(n(19),function(e){function a(){var e,n;Object(i.a)(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).hamburgerMenu=function(){var e=document.querySelector(".hamburger"),a=document.querySelector(".nav-menu");e.classList.toggle("active"),a.classList.toggle("active")},n.hamburgerMenuOut=function(){var e=document.querySelector(".hamburger"),a=document.querySelector(".nav-menu");e.classList.remove("active"),a.classList.remove("active")},n}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"nav-body"},o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",{className:"nav-logo"},o.a.createElement("a",{href:"index.html"},o.a.createElement("img",{alt:"logo",src:"images/Logo.png"}))),o.a.createElement("div",{className:"nav-complete-menu"},o.a.createElement("ul",{className:"nav-menu"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"index.html",className:"nav-link",onClick:this.hamburgerMenuOut},"Healthy recipes")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"index.html",className:"nav-link",onClick:this.hamburgerMenuOut},"Peanut Butter")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"index.html",className:"nav-link",onClick:this.hamburgerMenuOut},"About")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"index.html",className:"nav-link",onClick:this.hamburgerMenuOut},"Contact")))),o.a.createElement("div",{className:"hamburger",onClick:this.hamburgerMenu},o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}))))}}]),a}(t.Component)),k=(n(21),function(e){return o.a.createElement("div",{className:"tc bg-white dib br3 pa3 ma2 grow ba bw1 b--black-05 shadow-5"},o.a.createElement("img",{alt:"butter",src:"images/".concat(e.location)}),o.a.createElement("div",{className:"OneButter"},o.a.createElement("h2",null,e.name),o.a.createElement("p",{className:"description"},e.description),o.a.createElement("p",{className:"price"},e.price," K\u010d")))}),p=function(e){var a=e.pictures;return o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",{className:""},a.map(function(e,n){return o.a.createElement(k,{key:n,id:a[n].id,location:a[n].location,name:a[n].name,description:a[n].description,price:a[n].price})})))},v=[{id:1,location:"burak100.jpg",name:"Bur\xe1k 100%",description:"\u010cist\xfd ara\u0161\xeddov\xfd kr\xe9m je klasika, kter\xe1 nikdy neomrz\xed!",price:115},{id:2,location:"burak_ho\u0159k\xe1.jpg",name:"Bur\xe1k s ho\u0159kou \u010dokol\xe1dou",description:"Samotn\xe9 ara\u0161\xeddov\xe9 m\xe1slo je super, co ho ale vyzkou\u0161et v kombinaci s ho\u0159kou \u010dokol\xe1dou bez cukru?",price:145},{id:3,location:"burak_bila.jpg",name:"Bur\xe1k s b\xedlou \u010dokol\xe1dou",description:"Kdy\u017e se spoj\xed lehce pra\u017een\xe9 ara\u0161\xeddy a b\xedl\xe1 \u010dokol\xe1da bez cukru, vznikne neodolateln\xe1 chu\u0165, kterou si zamiluje\u0161 po prvn\xed l\u017ei\u010dce.",price:145},{id:4,location:"burak_slan\xfd_karamel.jpg",name:"Bur\xe1k slan\xfd karamel",description:"Jedna z nejpopul\xe1rn\u011bj\u0161\xedch p\u0159\xedchut\xed dne\u0161n\xed doby, kterou jsme pov\xfd\u0161ili na \xfapln\u011b jinou \xfarove\u0148, tvoje chu\u0165ov\xe9 poh\xe1rky prost\u011b ze\u0161\xedl\xed!",price:190},{id:5,location:"Kesu_banan.jpg",name:"Ke\u0161ulka ban\xe1n v \u010dokol\xe1d\u011b",description:"Ban\xe1nek v \u010dokol\xe1d\u011b, ov\u011b\u0159en\xe1 a obl\xedben\xe1 kalorick\xe1 bomba\u2026 jde v\u016fbec vytvo\u0159it zdravou verzi? To teda opravdu jde! A my jsme ji pro tebe vytvo\u0159ili!",price:220},{id:6,location:"Ke\u0161u_b\xedl\xe1.jpg",name:"Ke\u0161ulka s b\xedlou \u010dokol\xe1dou",description:"Ke\u0161ulka je kr\xe1lovna mezi o\u0159\xed\u0161ky, tyhle p\u0159irozen\u011b nasl\xe1dl\xe9 o\u0159\xed\u0161ky snad nen\xed mo\u017en\xe9 nemilovat.",price:205},{id:7,location:"Kokoska.jpg",name:"Kokoska s b\xedlou \u010dokol\xe1dou",description:"Miluje\u0161 chu\u0165 a v\u016fni kokosu, raffaello kuli\u010dky nebo bounty ty\u010dinky? Tak to jsi tady na spr\xe1vn\xe9 adrese!",price:160},{id:8,location:"Liskac_horka.jpg",name:"L\xedsk\xe1\u010d s ho\u0159kou \u010dokol\xe1dou",description:"L\xedskov\xe9 o\u0159\xed\u0161ky a \u010dokol\xe1da, to je ov\u011b\u0159en\xe1 kombinace, kterou miluj\xed snad v\u0161ichni. Ale co takhle zdrav\xe1 varianta obl\xedben\xe9 pomaz\xe1nky?",price:225},{id:9,location:"Liskac_protein.jpg",name:"L\xedsk\xe1\u010d s \u010dokol\xe1dou a proteinem",description:"L\xedskov\xe9 o\u0159\xed\u0161ky a \u010dokol\xe1da, to je ov\u011b\u0159en\xe1 kombinace, kterou miluj\xed snad v\u0161ichni. Nen\xed divu, tyto dv\u011b ingredience spole\u010dn\u011b zkr\xe1tka tvo\u0159\xed neuv\u011b\u0159itelnou chu\u0165, kter\xe9 nelze odolat.",price:240}],h=(n(23),function(e){var a=e.searchChange;return o.a.createElement("div",{className:"pa5"},o.a.createElement("h1",null,"Nutslove o\u0159echov\xe9 kr\xe9my"),o.a.createElement("input",{className:"pa3 b--grey ownStyle",type:"search",placeholder:"Najdi sv\u016fj obl\xedben\xfd kr\xe9m",onChange:a}))}),b=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).FindFuction=function(a){e.setState({STserchfield:a.target.value})},e.state={STpictures:v,STserchfield:""},e}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.STpictures,n=e.STserchfield,t=a.filter(function(e){return e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))});return o.a.createElement("div",{className:"tc"},o.a.createElement(d,null),o.a.createElement(h,{searchChange:this.FindFuction}),o.a.createElement("div",{className:"mw9 center ph3-ns"},o.a.createElement(p,{pictures:t})))}}]),a}(t.Component),g=(n(25),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,28)).then(function(a){var n=a.getCLS,t=a.getFID,o=a.getFCP,r=a.getLCP,c=a.getTTFB;n(e),t(e),o(e),r(e),c(e)})});c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),g()},8:function(e,a,n){e.exports=n(27)}},[[8,3,2]]]);
//# sourceMappingURL=main.82d5e2a5.chunk.js.map