(this["webpackJsonpsoccer-manager"]=this["webpackJsonpsoccer-manager"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),a=r.n(o),c=r(4),i=r.n(c),s=r(3),u=Object(s.b)((function(e){return{suplentes:e.suplentes}}),(function(e){return{quitarSuplente:function(t){e({type:"QUITAR_SUPLENTE",jugador:t})}}}))((function(e){var t=e.suplentes,r=e.quitarSuplente;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Suplentes"}),Object(n.jsx)("div",{className:"suplentes",children:t.map((function(e){return Object(n.jsxs)("article",{className:"suplente",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:e.foto,alt:e.nombre}),Object(n.jsx)("button",{onClick:function(){return r(e)},children:"X"})]}),Object(n.jsx)("p",{children:e.nombre})]},e.id)}))})]})})),d=r.p+"static/media/cancha.fc358517.svg",j=Object(s.b)((function(e){return{titulares:e.titulares}}),(function(e){return{quitarTitular:function(t){e({type:"QUITAR_TITULAR",jugador:t})}}}))((function(e){var t=e.titulares,r=e.quitarTitular;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Titulares"}),Object(n.jsxs)("div",{className:"cancha",children:[t.map((function(e){return Object(n.jsxs)("article",{className:"titular",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:e.foto,alt:e.nombre}),Object(n.jsx)("button",{onClick:function(){return r(e)},children:"X"})]}),Object(n.jsx)("p",{children:e.nombre})]},e.id)})),Object(n.jsx)("img",{src:d,alt:"Cancha de futbol"})]})]})})),l=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)(j,{}),Object(n.jsx)(u,{})]})},b=Object(s.b)((function(e){return{jugadores:e.jugadores}}),(function(e){return{agregarTitular:function(t){e({type:"AGREGAR_TITULAR",jugador:t})},agregarSuplente:function(t){e({type:"AGREGAR_SUPLENTE",jugador:t})}}}))((function(e){var t=e.jugadores,r=e.agregarTitular,o=e.agregarSuplente;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Jugadores"}),Object(n.jsx)("div",{className:"contenedor-jugadores",children:t.map((function(e){return Object(n.jsxs)("article",{className:"jugador",children:[Object(n.jsx)("img",{src:e.foto,alt:e.nombre}),Object(n.jsx)("h3",{children:e.nombre}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return r(e)},children:"Titular"}),Object(n.jsx)("button",{onClick:function(){return o(e)},children:"Suplente"})]})]},e.id)}))})]})})),p=r(2),g=r(5),m={jugadores:[{id:1,nombre:"Chris Hemsworth",foto:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"},{id:2,nombre:"Fifty Cent",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/50_Cent_AKA_Curtis_Jackson_%28cropped%29.jpg/220px-50_Cent_AKA_Curtis_Jackson_%28cropped%29.jpg"},{id:3,nombre:"Pink",foto:"https://static3.abc.es/Media/201309/17/Pink--644x562.jpg"},{id:4,nombre:"Eddie Murphy",foto:"https://i.pinimg.com/564x/eb/c8/c2/ebc8c20d2630618ce26d317ce10a656e.jpg"},{id:5,nombre:"Gael Garc\xeda",foto:"https://resize-media.festival-cannes.com/fit-in/384x485/film_film/0001/66/9beedb60df334b5e74d08fbc01b1a53f2fdc847a.jpeg"},{id:6,nombre:"Jared Leto",foto:"https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/personajes/jared-leto/7251597-8-esl-ES/jared-leto.jpg"},{id:7,nombre:"Kanye West",foto:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg"},{id:8,nombre:"kelly rowland",foto:"https://www.buenamusica.com/media/fotos/cantantes/biografia/kelly-rowland.jpg"},{id:9,nombre:"Marc Anthony",foto:"https://havana-live.com/noticias/wp-content/uploads/2016/04/6608-Marc-Anthony.jpg"},{id:10,nombre:"Ozuna",foto:"https://elcomercio.pe/resizer/9ltv-vi9yFD_iMr591kzMedCMh8=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IGFYHC3JD5GLVCMPQK2MYFE3Q4.jpg"},{id:11,nombre:"Don Cheadle",foto:"https://m.media-amazon.com/images/M/MV5BNDMxNDM3MzY5N15BMl5BanBnXkFtZTcwMjkzOTY4MQ@@._V1_UY317_CR17,0,214,317_AL_.jpg"},{id:12,nombre:"Rihanna",foto:"https://www.infobae.com/new-resizer/doHGKNU-tDaPW2-sg85dfScQU7Y=/420x280/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/D752L7GDWNBFFNJYLHL7JWFDYA.jpg"},{id:13,nombre:"Woody Harrelson",foto:"https://www.alohacriticon.com/wp-content/uploads/2005/04/woody-harrelson-foto-biografia.jpg"}],titulares:[],suplentes:[]},f=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AGREGAR_TITULAR":return Object(p.a)(Object(p.a)({},e),{},{titulares:e.titulares.concat(t.jugador),jugadores:e.jugadores.filter((function(e){return e.id!==t.jugador.id}))});case"AGREGAR_SUPLENTE":return Object(p.a)(Object(p.a)({},e),{},{suplentes:e.suplentes.concat(t.jugador),jugadores:e.jugadores.filter((function(e){return e.id!==t.jugador.id}))});case"QUITAR_TITULAR":return Object(p.a)(Object(p.a)({},e),{},{titulares:e.titulares.filter((function(e){return e.id!==t.jugador.id})),jugadores:e.jugadores.concat(t.jugador)});case"QUITAR_SUPLENTE":return Object(p.a)(Object(p.a)({},e),{},{suplentes:e.suplentes.filter((function(e){return e.id!==t.jugador.id})),jugadores:e.jugadores.concat(t.jugador)});default:return e}})),h=(r(22),function(){return Object(n.jsx)(s.a,{store:f,children:Object(n.jsxs)("main",{children:[Object(n.jsx)("h1",{children:"Soccer Manager"}),Object(n.jsx)(b,{}),Object(n.jsx)(l,{})]})})});i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.25a645a4.chunk.js.map