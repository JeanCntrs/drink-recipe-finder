(this["webpackJsonpdrink-recipe-finder"]=this["webpackJsonpdrink-recipe-finder"]||[]).push([[0],{26:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),s=a.n(r),o=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-center"},c.a.createElement("strong",{className:"navbar-brand"},"Buscar Recetas de Bebidas"))},l=a(6),i=a(24),u=a(3),m=a(7),d=a.n(m),p=a(9),b=a.n(p),g=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){!function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",t.next=3,d.a.awrap(b.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"));case 3:e=t.sent,s(e.data.drinks);case 5:case"end":return t.stop()}}))}()}),[]),c.a.createElement(g.Provider,{value:{categories:r}},e.children)},v=Object(n.createContext)(),E=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),i=l[0],m=l[1],p=Object(n.useState)({ingredient:"",category:""}),g=Object(u.a)(p,2),f=g[0],E=g[1];return Object(n.useEffect)((function(){if(r){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(f.ingredient,"&c=").concat(f.category),a.next=3,d.a.awrap(b.a.get(e));case 3:t=a.sent,m(t.data.drinks);case 5:case"end":return a.stop()}}))}()}}),[f]),c.a.createElement(v.Provider,{value:{recipes:i,setSearchRecipes:E,setConsult:s}},e.children)},h=function(e){var t=e.message;return c.a.createElement("div",{className:"alert alert-danger col-sm-4 text-center mt-4 mx-auto rounded-pill"},c.a.createElement("strong",null,t))},j=function(){var e=Object(n.useContext)(g).categories,t=Object(n.useContext)(v),a=t.setSearchRecipes,r=t.setConsult,s=Object(n.useState)(!1),o=Object(u.a)(s,2),m=o[0],d=o[1],p=Object(n.useState)({ingredient:"",category:""}),b=Object(u.a)(p,2),f=b[0],E=b[1],j=function(e){E(Object(i.a)({},f,Object(l.a)({},e.target.name,e.target.value)))};return c.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),""===f.ingredient.trim()||""===f.category.trim()?d(!0):(d(!1),a(f),r(!0))}},c.a.createElement("fieldset",{className:"text-center"},c.a.createElement("legend",null,"Busca por Categor\xeda o Ingredientes")),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("input",{className:"form-control",name:"ingredient",type:"text",placeholder:"Buscar por ingrediente",onChange:j})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("select",{className:"form-control",name:"category",onChange:j},c.a.createElement("option",{value:""},"Busca por categor\xeda"),e.map((function(e){return c.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)})))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("input",{className:"btn btn-block btn-primary",type:"submit",value:"Buscar recetas"}))),m?c.a.createElement(h,{message:"Todos los campos son obligatorios."}):null)},w=Object(n.createContext)(),O=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)({}),l=Object(u.a)(o,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){if(null!==r){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(r),a.next=3,d.a.awrap(b.a.get(e));case 3:t=a.sent,m(t.data.drinks[0]);case 5:case"end":return a.stop()}}))}()}}),[r]),c.a.createElement(w.Provider,{value:{recipeDetail:i,setRecipeDetail:m,setRecipeId:s}},e.children)},k=a(61),y=a(62),N=function(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}},x=Object(k.a)((function(e){return{paper:{position:"absolute",width:450,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),C=function(){var e=Object(n.useState)(N),t=Object(u.a)(e,1)[0],a=Object(n.useState)(!1),r=Object(u.a)(a,2),s=r[0],o=r[1],l=x(),i=Object(n.useContext)(v).recipes,m=Object(n.useContext)(w),d=m.recipeDetail,p=m.setRecipeDetail,b=m.setRecipeId;return c.a.createElement("div",{className:"row mt-5"},i.map((function(e){return c.a.createElement("div",{className:"col-md-4 mb-3",key:e.idDrink},c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"card-header"},c.a.createElement("strong",null,e.strDrink)),c.a.createElement("img",{className:"card-img-top",src:e.strDrinkThumb,alt:"Imagen de ".concat(e.strDrink)}),c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{className:"btn btn-block btn-outline-warning",onClick:function(){b(e.idDrink),o(!0)}},c.a.createElement("strong",null,"Ver Receta")))))})),c.a.createElement(y.a,{open:s,onClose:function(){b(null),p({}),o(!1)}},c.a.createElement("div",{className:l.paper,style:t},c.a.createElement("h1",null,d.strDrink),c.a.createElement("h3",{className:"mt-4"},d.strDrink?"Instructions":"Loading..."),c.a.createElement("p",null,d.strInstructions),c.a.createElement("img",{className:"img-fluid my-4",src:d.strDrinkThumb}),d.strDrink?c.a.createElement("h3",null,"Ingredients"):null,function(e){for(var t=[],a=1;a<=15;a++)e["strIngredient".concat(a)]&&t.push(c.a.createElement("li",{key:a},e["strIngredient".concat(a)]," - ",e["strMeasure".concat(a)]));return t}(d))))},D=function(){return c.a.createElement(f,null,c.a.createElement(E,null,c.a.createElement(O,null,c.a.createElement(o,null),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement(j,null)),c.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c570ad67.chunk.js.map