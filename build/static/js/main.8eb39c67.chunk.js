(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.62e865e1.svg"},29:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(38),a(7)),u=a(12),s=a(5),i=a.n(s),m=a(10),p=a(2),E=a(9),f=(a(40),a(11)),d=a.n(f),h=a(29),b=a.n(h),v=a(30),g=a.n(v).a.create({baseURL:"https://api-bth-nascimento.herokuapp.com"});function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)();function s(){return(s=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.post("sessions",{id:a});case 4:n=e.sent,localStorage.setItem("ongId",a),localStorage.setItem("ongName",n.data.name),l.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Falha no login, tente novamente.");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:d.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu logon"),r.a.createElement("input",{placeholder:"Sua ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(o.b,{className:"back-link",to:"/register"},r.a.createElement(E.b,{size:16,color:"#E02041"}),"N\xe3o tenho cadastro"))),r.a.createElement("img",{src:b.a,alt:"Heroes"}))}a(63);function j(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),f=s[0],h=s[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),O=v[0],j=v[1],S=Object(n.useState)(""),N=Object(p.a)(S,2),k=N[0],y=N[1],C=Object(n.useState)(""),x=Object(p.a)(C,2),w=x[0],I=x[1],z=Object(u.f)();function B(){return(B=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:f,whatssap:O,city:k,uf:w},e.prev=2,e.next=5,g.post("ongs",n);case 5:r=e.sent,alert("Seu ID de acesso ".concat(r.data.id)),z.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Erro no cadastro, tente novamente.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:d.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG."),r.a.createElement(o.b,{className:"back-link",to:"/"},r.a.createElement(E.a,{size:16,color:"#E02041"}),"Voltar para o logon")),r.a.createElement("form",{onSubmit:function(e){return B.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome da ONG",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:f,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{placeholder:"WhatsApp",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"Cidade",value:k,onChange:function(e){return y(e.target.value)}}),r.a.createElement("input",{placeholder:"UF",style:{width:80},value:w,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button"},"Cadastrar"))))}a(64);function S(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)(),s=localStorage.getItem("ongId"),f=localStorage.getItem("ongName");function h(){return(h=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.delete("incidents/".concat(t),{headers:{Authorization:s}});case 3:c(a.filter((function(e){return e.id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Erro ao deletar caso, tente novamente");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){g.get("profile",{headers:{Authorization:s}}).then((function(e){c(e.data)}))}),[s]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:d.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem vinda, ",f),r.a.createElement(o.b,{className:"button",to:"/incidents/new"},"Cadastrar novo caso"),r.a.createElement("button",{onClick:function(){localStorage.clear(),l.push("/")},type:"button"},r.a.createElement(E.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"Casos cadastrados"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASO:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7\xc3O"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return function(e){return h.apply(this,arguments)}(e.id)},type:"button"},r.a.createElement(E.d,{size:20,color:"#a8a8b3"})))}))))}a(65);function N(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),f=s[0],h=s[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),O=v[0],j=v[1],S=Object(u.f)(),N=localStorage.getItem("ongId");function k(){return(k=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:f,value:O},e.prev=2,e.next=5,g.post("incidents",n,{headers:{Authorization:N}});case 5:S.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Erro ao cadastrar caso, tente novamente.");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:d.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastrar novo caso"),r.a.createElement("p",null,"Descreva o caso detalhadamente para encontrar um her\xf3i para resolver isso"),r.a.createElement(o.b,{className:"back-link",to:"/profile"},r.a.createElement(E.a,{size:16,color:"#E02041"}),"Voltar para home")),r.a.createElement("form",{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("input",{placeholder:"T\xedtulo do caso",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{type:"email",placeholder:"Desri\xe7\xe3o",value:f,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{placeholder:"Valor em reais",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("button",{className:"button"},"Cadastrar"))))}function k(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:O}),r.a.createElement(u.a,{path:"/register",component:j}),r.a.createElement(u.a,{path:"/profile",component:S}),r.a.createElement(u.a,{path:"/incidents/new",component:N})))}var y=function(){return r.a.createElement(k,null)};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8eb39c67.chunk.js.map